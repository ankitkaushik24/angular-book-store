import {Routes} from '@angular/router';
import {LoginComponent} from '../user/login/login.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {MessagesComponent} from '../messages/messages.component';

export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'messages', component: MessagesComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
