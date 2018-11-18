import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({providedIn: 'root'})
export class UserStore {
  private readonly user = new BehaviorSubject<User>({
    username: 'anonymous',
    email: 'anon@example.org'
  });

  public readonly user$ = this.user.asObservable();

  onRegister(username: string, email: string) {
    this.user.next({username, email});
  }

  onUsernameChange(username: string) {
    this.user.next({...this.user.getValue(), username});
  }

  onEmailChange(email: string) {
    this.user.next({...this.user.getValue(), email});
  }
}
