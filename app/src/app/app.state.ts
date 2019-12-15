import { Injectable } from '@angular/core';
import Account from './models/account';
import Product from './models/product';

@Injectable({
  providedIn: 'root'
})
export class AppState {
  store: State = {
    products: null,
    account: null,
  };

  dispach(store): State {
    return this.store = store;
  }
}

export interface State {
  products: Array<Product>,
  account: any
}
