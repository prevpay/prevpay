import { Injectable } from '@angular/core';
import { Account } from '../models';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MateraService {
 
  constructor(private http: HttpClient) {}

  createBankAccount() {
    this.http.get("http://prevpay-server.mybluemix.net/api/v1/create-account").subscribe(res => console.log(res));
  }

  createPayment() {
    this.http.get("http://prevpay-server.mybluemix.net/api/v1/create-payment").subscribe(res => console.log(res));;
  }

  transferMoney() {
    this.http.get("http://prevpay-server.mybluemix.net/api/v1/transferp2p").subscribe(res => console.log(res));;
  }

}