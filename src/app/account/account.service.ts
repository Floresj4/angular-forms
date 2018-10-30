import {Injectable} from '@angular/core';
import {Account} from './account.model';

@Injectable()
export class AccountService {

  account: {};

  constructor() {

  }

  confirm(account: {}) {
    this.account = account;
  }

  getAccount() {
    return this.account;
  }
}
