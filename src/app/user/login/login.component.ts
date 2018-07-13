import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';
  username
  password

  constructor(private authService: AuthService) { }

  login(loginForm: NgForm) {
    console.log(loginForm);
    if (loginForm && loginForm.valid) {
      let userName = loginForm.value.username;
      let password = loginForm.value.password;
      this.authService.login(userName, password);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
