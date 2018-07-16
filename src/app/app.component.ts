import {Component, OnInit} from '@angular/core';
import {AuthService} from './app-authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  get isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }
}
