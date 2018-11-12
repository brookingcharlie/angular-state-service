import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  username: string;
  email: string;

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.username$.subscribe((value) => this.username = value);
    this.signupService.email$.subscribe((value) => this.email = value);
  }
}
