import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  AuthenticationModule } from './app-authentication/authentication.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app-routes/app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotificationModule } from './app-notification/app-notification.module';
import { PageNotFoundComponent } from './app-error-pages/page-not-found/page-not-found.component';
import { ProductModule } from './app-main/app-product/app-product.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHomeComponent } from './app-main/app-home/app-home.component';

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    AuthenticationModule,
    NotificationModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AppFooterComponent,
    AppHomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
