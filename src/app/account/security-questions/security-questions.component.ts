import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {

  securityForm: FormGroup;

  numberOfQuestions = 0;

  validRobotResponse: string[] = ['yes', 'no', 'maybe'];
  securityQuestions: string[] = [
    'What is your favorite color?',
    'What is your first pet\'s name?',
    'What is your favorite number?',
    'How much wood could a woodchuck chuck if a woodchuck could chuck would?'
  ];

  constructor() { }

  ngOnInit() {

    // initialize the form
    this.securityForm = new FormGroup({
      'robot': new FormControl(null, [
        Validators.required,
        this.isValidRobotResponse.bind(this)
      ]),

      // initialize empty to dynamically populate
      'answers': new FormArray([])
    });

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

  onQuestionAdd() {
    this.numberOfQuestions++;

    (<FormArray>this.securityForm.get('answers'))
      .push(new FormControl(null, Validators.required));
  }

  onSubmit() {
    console.log(this.securityForm);
  }
}
