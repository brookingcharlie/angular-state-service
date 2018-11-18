import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserStore } from './user.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observed-publisher',
  templateUrl: './observed-publisher.component.html',
  styleUrls: []
})
export class ObservedPublisherComponent implements OnInit, OnDestroy {
  private form: FormGroup;
  private readonly subscriptions: Subscription;

  constructor(private userStore: UserStore) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null)
    });

    // Publish form field changes to the service
    const usernameFieldValue$ = this.form.get('username').valueChanges;
    this.subscriptions.add(usernameFieldValue$.subscribe((value) =>
      this.userStore.onUsernameChange(value)
    ));
    const emailFieldValue$ = this.form.get('email').valueChanges;
    this.subscriptions.add(emailFieldValue$.subscribe((value) =>
      this.userStore.onEmailChange(value)
    ));

    // Subscribe to changes from the service and update form fields.
    // Diff checks needed to avoid an infinite publish-subscribe loop.
    this.subscriptions.add(this.userStore.user$.subscribe((user) => {
      const usernameField = this.form.get('username');
      if (usernameField.value !== user.username) {
        usernameField.setValue(user.username);
      }
      const emailField = this.form.get('email');
      if (emailField.value !== user.email) {
        emailField.setValue(user.email);
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
