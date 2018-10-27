import { Component, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterContentChecked {

  accountTypes: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedAccountType: string;

  isAutoFilled: boolean = false;
  isSubmitEnabled: boolean = false;
  isFormInitialized: boolean = false;

  @ViewChild('firstname') fieldname;
  @ViewChild('password') password: NgModel;
  @ViewChild('confirmPassword') confirmPassword: NgModel;
  @ViewChild('signupForm') signupForm: NgForm;

  constructor(private account: AccountService, private router: Router) { }

  ngOnInit() {
    this.selectedAccountType = 'Pro';
    this.isFormInitialized = true;
  }

  ngAfterContentChecked() {
    this.isSubmitEnabled = this.signupForm.valid
      && !this.passwordsAreInvalid();
  } 

  onSubmit(signupForm: NgForm) {

    if(signupForm.valid) {
      this.account.confirm(new Account(
        signupForm.value.firstname,
        signupForm.value.lastname,
        signupForm.value.accountType,
        signupForm.value.email,
        signupForm.value.password,
        signupForm.value.confirmPassword,
      ));

      this.router.navigate(['security']);
    }
  }

  onAutofill() {
    this.isAutoFilled = true;
    this.signupForm.form.setValue({
      'firstname': 'test',
      'lastname': 'user',
      'accountType': 'Pro',
      'email': 'testuser@mail.com',
      'password': 'banana',
      'confirmPassword': 'banana'
    });
  }

  onReset() {
    this.isAutoFilled = false;

    this.signupForm.reset();
    this.signupForm.form.patchValue({
      //default to a pro account :]
      'accountType': (this.selectedAccountType = 'Pro')
    });
  }

  passwordsAreInvalid() {
    if(this.arePasswordsTouched()) {

      return this.signupForm.form.value.password
        !== this.signupForm.form.value.confirmPassword;
    }

    return false;
  }

  /**
   * determine if the password fields have been used, null will
   * be acceptable during the startup lifecycle of the form.
   */
  arePasswordsTouched() {
    const pwfield = this.signupForm.form.get('password');
    const cpwfield = this.signupForm.form.get('confirmPassword');

    if(pwfield === null || cpwfield === null) {
      return false;
    }

    return pwfield.touched || cpwfield.touched;
  }
}
