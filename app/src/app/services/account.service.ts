import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../models';
 
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private collection: AngularFirestoreCollection<Account[]>;
 
  constructor(db: AngularFirestore) {
    this.collection = db.collection<Account[]>('accounts'); 
  }

  getAccount(id: string) {
    return this.collection.doc<Account>(id).valueChanges();
  }
 
  updateAccount(account: Account, id: string) {
    return this.collection.doc(id).update(account);
  }

}