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

  isSubmitEnabled: boolean = false;

  @ViewChild('firstname') fieldname;
  @ViewChild('password') password: NgModel;
  @ViewChild('confirmPassword') confirmPassword: NgModel;
  @ViewChild('signupForm') signupForm: NgForm;

  constructor(private account: AccountService, private router: Router) { }

  ngOnInit() {
    this.selectedAccountType = 'Pro';
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
    this.signupForm.form.setValue({
      'firstname': 'test',
      'lastname': 'user',
      'accountType': 'Pro',
      'email': 'testuser@mail.com',
      'password': 'banana',
      'confirmPassword': 'banana'
    });

    this.isSubmitEnabled = this.arePasswordsValid()
              && this.signupForm.valid;
    console.log(this.arePasswordsValid());
    console.log(this.signupForm.valid);
    console.log(this.isSubmitEnabled);
  }

  onReset() {
    //default to a pro account :]
    this.signupForm.reset();
    this.signupForm.form.patchValue({
      'accountType': (this.selectedAccountType = 'Pro')
    });
  }

  arePasswordsValid() {
    const pw = this.signupForm.form.value.password;
    const cpw = this.signupForm.form.value.confirmPassword;
    return (pw === cpw && (pw !== '' && cpw !== ''));
  }
}
