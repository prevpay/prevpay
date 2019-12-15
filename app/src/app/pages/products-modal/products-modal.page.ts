import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MongeralService } from 'src/app/services/mongeral.service';

@Component({
  selector: 'products-modal',
  templateUrl: './products-modal.page.html',
  styleUrls: ['./products-modal.page.scss'],
})
export class ProductsModal {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private mongeralService: MongeralService,
  ) { }

  goToSuccess() {
    this.mongeralService.propostal();
    this.router.navigate(['/success']);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}
