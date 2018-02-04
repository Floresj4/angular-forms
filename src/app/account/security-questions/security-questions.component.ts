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

  isValidRobotResponse(control: FormControl): {'robotResponse': boolean} {
    const value = control.value !== null
      ? control.value.toLowerCase() : null;

    if (this.validRobotResponse.indexOf(value) === -1) {
      return { 'robotResponse': true };
    }

    return null;
  }

  onSubmit() {
    console.log(this.securityForm);
  }
}
