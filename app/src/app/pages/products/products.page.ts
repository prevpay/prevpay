import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ProductsModal } from '../products-modal/products-modal.page';
import { AppState } from 'src/app/app.state';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
})
export class ProductsPage {

  private account: Account = {
    id: null,
    name: null,
    email: null,
    currency: null,
    products: [],
    transactions: [],
  };

  constructor(
    private modalController: ModalController,
    private appState: AppState, 
    private accountService: AccountService) {}

  async ngOnInit() {
    this.account = await this.appState.store.account;
  }

  async showReceiveModal() {
    const modal = await this.modalController.create({
      component: ProductsModal,
    });
    return await modal.present();
  }

}
