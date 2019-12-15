import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Mission, Account } from 'src/app/models';
import { ModalController } from '@ionic/angular';
import Transaction from 'src/app/models/transaction';
import { AppState } from 'src/app/app.state';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { MateraService } from 'src/app/services/matera.service';

@Component({
  selector: 'receive-modal',
  templateUrl: './receive-modal.page.html',
  styleUrls: ['./receive-modal.page.scss'],
})
export class ReceiveModal {

  private transaction: Transaction = {
    id: null,
    type: null,
    value: null,
    from: null,
    to: null,
  }

  private account: Account = {
    id: null,
    name: null,
    email: null,
    currency: null,
    products: [],
    transactions: [],
  };

  public transactionValueForm: FormGroup;

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
    this.transactionValueForm = new FormGroup({
      value: new FormControl(null)
    });
  }

  async ngOnInit() {
    this.account = await this.appState.store.account;
  }

  selectType(from) {
    this.transaction.from = from;
  }

  onSubmit() {
    const { value } = this.transactionValueForm;
    this.transaction.value = value.value;
    this.transaction.type = true;
    this.transaction.id = Math.round(Math.random()).toString();
    this.account.transactions.push(this.transaction)
    this.account.currency =  (this.account.currency + this.transaction.value);
    this.accountService.updateAccount(this.account, 'NzV1fU0kVAPBBPno8p3H');
    this.materaService.createPayment();
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
