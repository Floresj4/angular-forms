import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {

  securityForm: FormGroup;

  validRobotResponse: string[] = ['yes', 'no', 'maybe'];
  securityQuestions: string[] = [
    'What is your favorite color?',
    'What is your first pet\'s name?',
    'What is your favorite number?'
  ];

  constructor() { }

  ngOnInit() {

    // initialize the form
    this.securityForm = new FormGroup({
      'robot': new FormControl(null, [
        Validators.required,
        this.isValidRobotResponse.bind(this)
      ])
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

  onSubmit() {
    console.log(this.securityForm);
  }
}
