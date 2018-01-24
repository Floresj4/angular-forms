import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit(loginForm: NgForm) {
    console.log('form submitted');
  }

  onSignUp() {

  }
}
