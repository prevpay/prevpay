import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Mission, Account } from 'src/app/models';
import { ModalController } from '@ionic/angular';
import Transaction from 'src/app/models/transaction';
import { AppState } from 'src/app/app.state';
import { AccountService } from 'src/app/services/account.service';
import Product from 'src/app/models/product';
import { Router } from '@angular/router';
import { MongeralService } from 'src/app/services/mongeral.service';
import { MateraService } from 'src/app/services/matera.service';

@Component({
  selector: 'invest-modal',
  templateUrl: './invest-modal.page.html',
  styleUrls: ['./invest-modal.page.scss'],
})
export class InvestModal {

  private transaction: Transaction = {
    id: null,
    type: null,
    value: null,
    from: null,
    to: null,
  }

  private selectedProduct: Product = null;

  private account: Account = {
    id: null,
    name: null,
    email: null,
    currency: null,
    products: [],
    transactions: [],
  };

  public productValueForm: FormGroup;

  slideOpts = {
    effect: 'flip'
  };

  constructor(
    private modalController: ModalController,
    private appState: AppState, 
    private accountService: AccountService,
    private router: Router,
    private materaService: MateraService,
  ) { 
    this.productValueForm = new FormGroup({
      value: new FormControl(null)
    });
  }

  async ngOnInit() {
    this.account = await this.appState.store.account;
  }

  selectProduct(p: Product) {
    this.transaction.from = p.company;
    this.selectedProduct = p;
    console.log(p);
  }

  onSubmit() {
    const { value } = this.productValueForm;
    this.transaction.value = value.value;
    this.transaction.type = false;
    this.transaction.id = Math.round(Math.random()).toString();
    this.account.transactions.push(this.transaction)
    this.account.currency =  this.account.currency - this.transaction.value;
    this.accountService.updateAccount(this.account, 'NzV1fU0kVAPBBPno8p3H');
    this.materaService.transferMoney();
    this.goToSuccess();
    console.log(this.account);
  }

  goToSuccess() {
    this.router.navigate(['/success']);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}
