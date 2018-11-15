import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupService } from './signup.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-observed-publisher',
  templateUrl: './observed-publisher.component.html',
  styleUrls: []
})
export class ObservedPublisherComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private signupService: SignupService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null)
    });

    // Publish changes to the service
    this.signupForm.get('username').valueChanges
      .subscribe((value) => this.signupService.onUsernameChange(value));
    this.signupForm.get('email').valueChanges
      .subscribe((value) => this.signupService.onEmailChange(value));

    // Subscribe to changes from the service
    // Filter is needed to avoid an infinite publish-subscribe loop
    this.signupService.username$
      .pipe(filter((value) => this.signupForm.get('username').value !== value))
      .subscribe((value) => this.signupForm.get('username').setValue(value));
    this.signupService.email$
      .pipe(filter((value) => this.signupForm.get('email').value !== value))
      .subscribe((value) => this.signupForm.get('email').setValue(value));
  }
}
