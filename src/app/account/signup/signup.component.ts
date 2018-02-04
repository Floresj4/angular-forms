import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {Router} from '@angular/router';
import {AccountService} from '../account.service';
import {Account} from '../account.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  accountTypes: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedAccountType: string;

  @ViewChild('firstname') fieldname;
  @ViewChild('password') password: NgModel;
  @ViewChild('confirmPassword') confirmPassword: NgModel;
  @ViewChild('signupForm') signupForm: NgForm;

  constructor(private account: AccountService, private router: Router) { }

  ngOnInit() {
    this.selectedAccountType = 'Pro';

    this.signupForm.form.patchValue({
      'firstname': 'hey'
    });
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

  onReset() {
    this.signupForm.form.setValue({
      'firstname': 'test',
      'lastname': 'user',
      'accountType': 'Pro',
      'email': 'testuser@mail.com',
      'password': 'banana',
      'confirmPassword': 'banana'
    });
  }

  isSubmitEnabled() {
    const enabled: boolean = this.arePasswordsValid()
              && this.arePasswordsTouched()
              && this.signupForm.valid;

    return enabled;
  }
  arePasswordsTouched() {
    return (this.password.touched && this.confirmPassword.touched);
  }

  arePasswordsValid() {
    const pw = this.password.value;
    const cpw = this.confirmPassword.value;
    return (pw === cpw && this.arePasswordsTouched());
  }
}
