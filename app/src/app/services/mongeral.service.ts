import { Injectable } from '@angular/core';
import { Account } from '../models';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MongeralService {
 
  constructor(private http: HttpClient) {}

  propostal() {
    this.http.get("http://prevpay-server.mybluemix.net/api/v1/proposta").subscribe(res => console.log(res));;
  }

  simulation() {
    this.http.get("http://prevpay-server.mybluemix.net/api/v1/simulacao").subscribe(res => console.log(res));;
  }

  proposalInsurance() {
    this.http.get("http://prevpay-server.mybluemix.net/api/v1/proposta-seguro").subscribe(res => console.log(res));;
  }

}