import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/models';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'mission-detail',
  templateUrl: './mission-detail.page.html',
  styleUrls: ['./mission-detail.page.scss'],
})
export class MissionDetailPage {

  @Input() mission: Mission;

  constructor(
    private modalController: ModalController
  ) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}
