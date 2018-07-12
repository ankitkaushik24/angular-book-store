import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService,
              private router: Router) { }

  ngOnInit() {
  }

  close(): void {
    // Close the popup.
  }

}
