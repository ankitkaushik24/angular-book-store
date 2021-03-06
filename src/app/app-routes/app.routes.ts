import {Routes} from '@angular/router';
import {LoginComponent} from '../app-authentication/login/login.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {NotificationComponent} from '../app-notification/app-notification.component'
import { AppHomeComponent } from '../app-main/app-home/app-home.component';

export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'home', component: AppHomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
