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
  private subscriptions: Subscription;

  constructor(private userStore: UserStore) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null)
    });

    // Publish form field changes to the service
    this.subscriptions.add(this.form.get('username').valueChanges.subscribe((value) =>
      this.userStore.onUsernameChange(value)
    ));
    this.subscriptions.add(this.form.get('email').valueChanges.subscribe((value) =>
      this.userStore.onEmailChange(value)
    ));

    // Subscribe to changes from the service and update form fields.
    // Diff checks needed to avoid an infinite publish-subscribe loop.
    this.subscriptions.add(this.userStore.user$.subscribe((user) => {
      if (this.form.get('username').value !== user.username) {
        this.form.get('username').setValue(user.username);
      }
      if (this.form.get('email').value !== user.email) {
        this.form.get('email').setValue(user.email)
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
