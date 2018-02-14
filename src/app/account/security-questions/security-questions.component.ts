import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {

  securityForm: FormGroup;

  maximumNumberOfQuestions: number = 5;
  numberOfQuestions: number;

  validRobotResponse: string[] = ['yes', 'no', 'maybe'];
  securityQuestions: string[] = [
    'What is your favorite color?',
    'What is your first pet\'s name?',
    'What is your favorite number?',
    'What city were you born in?',
    'What was your first car?'
  ];

  selectedQuestions: any[] = [];

  constructor() { }

  ngOnInit() {

    this.numberOfQuestions = 0;

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

  isFormDisabled() {
    const validity = !this.securityForm.valid
      && this.numberOfQuestions !== this.maximumNumberOfQuestions;
    return validity;
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
    return this.numberOfQuestions >= this.maximumNumberOfQuestions;
  }

  onQuestionAdd() {
    this.numberOfQuestions++;
    const formArray: FormArray = (<FormArray>this.securityForm.get('questions'));
    formArray.push(new FormControl(null, Validators.required));
  }

  onAnswerBlur(index, question, answer) {
    this.selectedQuestions[index] = { question, answer };
  }

  areQuestionsValid() {

    // don't allow duplicates
    for(let i = 0; i < this.selectedQuestions.length; i++) {
      for(let j = 0; j < this.selectedQuestions.length; j++) {

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

  }
}
