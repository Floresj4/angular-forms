import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  accountTypes: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedAccountType: string;

  constructor() { }

  ngOnInit() {
    this.selectedAccountType = 'Pro';
  }

  onSubmit() {

  }

  onReset() {

  }
}
