import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app-routes/app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import {MessagesModule} from './messages/messages.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BookModule} from './book/book.module';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  imports: [
    BrowserModule,
    BookModule,
    UserModule,
    MessagesModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AppHeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
