import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SignupService {
  private usernameSubject = new BehaviorSubject<string>('anonymous');
  private emailSubject = new BehaviorSubject<string>('anon@example.org');

  public username$ = this.usernameSubject.asObservable();
  public email$ = this.emailSubject.asObservable();

  onUsernameChange(username: string) {
    this.usernameSubject.next(username);
  }

  onEmailChange(email: string) {
    this.emailSubject.next(email);
  }
}
