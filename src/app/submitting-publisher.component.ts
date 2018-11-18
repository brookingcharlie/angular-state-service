import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserStore } from './user.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-submitting-publisher',
  templateUrl: './submitting-publisher.component.html',
  styleUrls: []
})
export class SubmittingPublisherComponent implements OnInit, OnDestroy {
  private form: FormGroup;
  private subscription: Subscription;

  constructor(private userStore: UserStore) {}

  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null)
    });

    this.subscription = this.userStore.user$.subscribe(user =>
      this.form.patchValue({'username': user.username, 'email': user.email})
    );
  }

  onSubmit() {
    const username = this.form.get('username').value;
    const email = this.form.get('email').value;
    this.userStore.onRegister(username, email);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
