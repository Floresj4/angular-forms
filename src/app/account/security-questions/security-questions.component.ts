import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {

  securityForm: FormGroup;

  constructor() { }

  ngOnInit() {

    // initialize the form
    this.securityForm = new FormGroup({
      'robot': new FormControl(null, Validators.required)
    });

  }

}
