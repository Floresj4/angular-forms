import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../account.service';
import {Account} from '../account.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {

  securityForm: FormGroup;

  numberofQuestions: number;
  minimumQuestions: number = 3;
  timeoutKey: any;

  validRobotResponse: string[] = ['yes', 'no', 'maybe'];
  securityQuestions: string[] = [
    'What is your favorite color?',
    'What is your first pet\'s name?',
    'What is your favorite number?',
    'What city were you born in?',
    'What was your first car?'
  ];

  selectedQuestions: any[] = [];

  isFormSubmitted: boolean;
  areQuestionsValid: boolean;

  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {

    if(this.accountService.getAccount() == null) {
      this.router.navigate(['']);
    }

    this.numberofQuestions = 0;

    // initialize the form
    this.securityForm = new FormGroup({
      'robot': new FormControl(null, [
        Validators.required,
        this.isValidRobotResponse.bind(this)
      ]),

      // initialize empty to dynamically populate
      'questions': new FormArray([])
    });
  }

  isSubmitDisabled() {
    return !this.securityForm.valid;
  }

  isValidRobotResponse(control: FormControl): {[key: string]: boolean} {
    const value = control.value !== null
      ? control.value.toLowerCase() : null;

    // ignore blank or null, 'required' validator will catch it
    if (value === '' || value === null) {
      return null;
    }

    if (this.validRobotResponse.indexOf(control.value) === -1) {
      return {'robotResponse': true};
    }

    return null;
  }

  isQuestionAddDisabled() {
    return this.numberofQuestions >= this.minimumQuestions;
  }

  onQuestionAdd() {
    this.numberofQuestions++;
    const formArray: FormArray = (<FormArray>this.securityForm.get('questions'));
    formArray.push(new FormControl(null, Validators.required));
  }

  onAnswerBlur(index, question, answer) {
    this.selectedQuestions[index] = { question, answer };
  }

  evaluateQuestions() {

    const totalSelectedQuestions = this.selectedQuestions.length;
    if(totalSelectedQuestions === 0 || totalSelectedQuestions < this.minimumQuestions) {
      return false;
    }

    // don't allow duplicates
    for(let i = 0; i < totalSelectedQuestions; i++) {
      for(let j = 0; j < totalSelectedQuestions; j++) {

        // avoid comparing against self
        if (i === j) {
          continue;
        }

        // ensure that two of the same questions are not selected
        const current = this.selectedQuestions[i]['question'];
        const compare = this.selectedQuestions[j]['question'];
        if(current === compare) {
          return false;
        }
      }
    }

    return true;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.areQuestionsValid = this.evaluateQuestions();

    if(!this.areQuestionsValid) {

      //clear the interval to prevent duplication
      if(typeof this.timeoutKey !== 'undefined') {
        clearTimeout(this.timeoutKey);
      }

      // set a timeout to clear the isFormSubmitted flag
      this.timeoutKey = setTimeout(() => {
        this.isFormSubmitted = false;
      }, 3000);

      return;
    }

    //build a separate object to work around the hacky q&a impl.
    //update the account info captured earlier
    let account: Account = this.accountService.getAccount();
    account.setSecurityQuestions({
      'robot': this.securityForm.get('robot').value,
      'security' : JSON.stringify(this.selectedQuestions)
    });

    this.router.navigate(['confirm']);
  }
}
