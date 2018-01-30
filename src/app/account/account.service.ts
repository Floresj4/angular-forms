import {Injectable} from '@angular/core';
import {Account} from './account.model';

@Injectable()
export class AccountService {

  account: Account;

  constructor() {

  }

  confirm(account: Account) {
    console.log(JSON.stringify(account));
    this.account = account;
  }

  getAccount() {
    return this.account;
  }
}
