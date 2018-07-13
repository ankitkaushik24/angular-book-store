import { Injectable } from '@angular/core';
import {IUser} from './user.model';
import {MessageService} from '../messages/messages.service';



@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private messageService: MessageService) { }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, password: string): void {
    if (userName && password) {
      const isAdmin = userName.toLowerCase() === 'admin';
      this.currentUser = {
        id: isAdmin ? 1 : 2,
        userName: userName,
        isAdmin: isAdmin
      };
      this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
      return;
    } else {
      this.messageService.addMessage('Please enter your userName and password');
    }
  }

  logout(): void {
    this.currentUser = null;
  }
}
