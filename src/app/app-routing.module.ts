import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {SignupComponent} from './account/signup/signup.component';
import {LoginComponent} from './account/login/login.component';
import {ConfirmComponent} from './account/confirm/confirm.component';
import {SecurityQuestionsComponent} from './account/security-questions/security-questions.component';

const appRoutes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'security', component: SecurityQuestionsComponent },
  { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
