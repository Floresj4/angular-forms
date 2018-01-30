import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {Account} from '../account.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  account: Account;

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    // not exactly how account confirmation would play out in
    // the real world
    this.account = this.accountService.getAccount();

    // navigate away
    if(this.account == null) {
      this.router.navigate(['signup']);
    }
  }

}
