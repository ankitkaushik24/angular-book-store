import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthenticationModule {
}
