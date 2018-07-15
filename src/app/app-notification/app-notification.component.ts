import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppNotificationService} from './app-notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './app-notification.component.html',
  styleUrls: ['./app-notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private messageService: AppNotificationService,
              private router: Router) { }

  ngOnInit() {
  }

  close(): void {
  }

}
