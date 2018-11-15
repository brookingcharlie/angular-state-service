import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-submitting-publisher',
  templateUrl: './submitting-publisher.component.html',
  styleUrls: []
})
export class SubmittingPublisherComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null)
    });

    this.signupService.username$.subscribe(v => this.signupForm.get('username').setValue(v));
    this.signupService.email$.subscribe(v => this.signupForm.get('email').setValue(v));
  }

  onSubmit() {
    this.signupService.onUsernameChange(this.signupForm.get('username').value);
    this.signupService.onEmailChange(this.signupForm.get('email').value);
  }
}
