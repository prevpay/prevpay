import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, LoadingController, ModalController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  MarkerCluster,
  Marker,
  Environment,
  GoogleMapsAnimation
} from "@ionic-native/google-maps";

import { Mission, FailMessage, FailMessageIcon } from 'src/app/models';
import { MissionDetailPage } from '../mission-detail/mission-detail.page';
import data from './data';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage {
  @ViewChild('mapRef', {static: false}) mapElement: ElementRef;
  private googleMaps: GoogleMap;
  private loading: HTMLIonLoadingElement;

  private map: any = {
    show: true
  };

  private mission: Mission = {
    show: false
  };

  private failMessage: FailMessage = {
    icon: FailMessageIcon.NOT_FOUND,
    title: "Ops, cadê você?",
    message: "para encontrar missões próximas você precisa habilitar sua localização.",
    show: false
  };

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private modalController: ModalController
  ) { }

  ionViewDidEnter() {
    this.platform.ready().then(async () => {
      await this.loadMap();
    });
  }

  async loadMap() {
    this.mapElement.nativeElement.style.position = 'static';
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    await this.loading.present();

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY'
    });

    this.googleMaps = GoogleMaps.create(this.mapElement.nativeElement, {controls: {zoom: false}});
    this.googleMaps.on(GoogleMapsEvent.MAP_READY).subscribe(async(params) => {
      this.googleMaps.getMyLocation()
        .then(async(location) => {
          await this.googleMaps.moveCamera({
            target: location.latLng,
            zoom: 18
          });
          await this.googleMaps.addMarkerSync({
            icon: 'assets/markercluster/pointer.svg',
            animation: GoogleMapsAnimation.DROP,
            position: location.latLng
          });
          this.addCluster(data);
        })
        .catch(() => this.showFailMessage())
        .finally(() => this.loading.dismiss());
    });
  }

  addCluster(data) {
    let markerCluster: MarkerCluster = this.googleMaps.addMarkerClusterSync({
      markers: data,
      icons: [
        {
          min: 3,
          max: 9,
          url: "./assets/markercluster/small.png",
          label: {
            color: "white"
          }
        },
        {
          min: 10,
          url: "./assets/markercluster/large.png",
          label: {
            color: "white"
          }
        }
      ]
    });

    this.googleMaps.on(GoogleMapsEvent.MAP_DRAG_START).subscribe(() => {
      this.mission.show = false;
    });

    markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
      let marker: Marker = params[1];
      marker.hideInfoWindow();
      this.mission.name = marker.get("name");
      this.mission.company = marker.get("company");
      this.mission.address = marker.get("address");
      this.mission.price = marker.get("price");
      this.mission.show = true;
      console.log(marker);
    });
  }

  showFailMessage() {
    this.googleMaps.remove();
    this.map.show = false;
    this.failMessage.show = true;
  }

  async showMissionDetailsModal() {
    const modal = await this.modalController.create({
      component: MissionDetailPage,
      componentProps: {
        mission: this.mission
      }
    });
    return await modal.present();
  }

}

