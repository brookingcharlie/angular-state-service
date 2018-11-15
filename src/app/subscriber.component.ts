import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: []
})
export class SubscriberComponent implements OnInit {
  username: string;
  email: string;

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupService.username$.subscribe((value) => this.username = value);
    this.signupService.email$.subscribe((value) => this.email = value);
  }
}
