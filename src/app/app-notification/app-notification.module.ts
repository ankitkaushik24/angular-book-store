import {NgModule} from '@angular/core';
import {NotificationComponent} from './app-notification.component';
import {AppNotificationService} from './app-notification.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NotificationComponent],
  providers: [AppNotificationService]
})
export class NotificationModule {
}
