import {Routes} from '@angular/router';
import {LoginComponent} from '../app-authentication/login/login.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {NotificationComponent} from '../app-notification/app-notification.component'

export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'messages', component: NotificationComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
