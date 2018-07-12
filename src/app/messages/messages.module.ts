import {NgModule} from '@angular/core';
import {MessagesComponent} from './messages.component';
import {MessageService} from './messages.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MessagesComponent],
  providers: [MessageService]
})
export class MessagesModule {
}
