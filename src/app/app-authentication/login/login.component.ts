import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';
  username
  password

  constructor(private authService: AuthService, private route: Router) { }

  login(loginForm: NgForm) {
    console.log(this.password);
    if (loginForm && loginForm.valid) {
      let userName = loginForm.value.username;
      let password = loginForm.value.password;
      this.authService.login(userName, password);
      this.route.navigate(['/home']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
