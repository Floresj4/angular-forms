import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.selectedAccountType = 'Pro';
  }

  onSubmit(signupForm: NgForm) {
    console.log(signupForm);

    this.router.navigate()
  }

  onReset() {

  }

  isSubmitEnabled() {
    console.log(this.signupForm.valid);
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
