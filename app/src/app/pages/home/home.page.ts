import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Account } from 'src/app/models';
import { AppState } from 'src/app/app.state';

import { ReceiveModal } from '../receive-modal/receive-modal.page';
import { InvestModal } from '../invest-modal/invest-modal.page';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private account: any;
  private transactions: Array<any> = [];
  private products: Array<any> = [];

  constructor(
    private modalController: ModalController, 
    private appState: AppState, 
    private accountService: AccountService
  ) {}

  async ngOnInit() {
    if(this.appState.store.account) {
      this.account = await this.appState.store.account;
      console.log(this.account);
    } else {
     this.accountService.getAccount('NzV1fU0kVAPBBPno8p3H')
      .subscribe(async(acc) => {
        this.appState.store.account = acc;
        this.account = await this.appState.store.account;
        this.transactions = this.account.transactions;
        this.products = this.account.products;
      });
    }
  }

  async showReceiveModal() {
    const modal = await this.modalController.create({
      component: ReceiveModal,
    });
    return await modal.present();
  }

  async showInvestModal() {
    const modal = await this.modalController.create({
      component: InvestModal,
    });
    return await modal.present();
  }

}
