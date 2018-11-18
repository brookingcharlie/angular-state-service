import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStore } from './user.store';
import { User } from './user';
import { Observable, Subscription } from 'rxjs';

// Component that diplays observable state stored in a service.
//
// Shows two options: (1) subscribing to the observable in the component class
// and using a value-type variable in the template; (2) using the observable
// directly in the template, which subscribes using an async pipe.
@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: []
})
export class SubscriberComponent implements OnInit, OnDestroy {
  private user: User;
  private user$: Observable<User>;
  private subscription: Subscription;

  constructor(private userStore: UserStore) {}

  ngOnInit() {
    this.subscription = this.userStore.user$.subscribe((user) => this.user = user);
    this.user$ = this.userStore.user$;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
