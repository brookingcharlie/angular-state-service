import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubscriberComponent } from './subscriber.component';
import { ObservedPublisherComponent } from './observed-publisher.component';
import { SubmittingPublisherComponent } from './submitting-publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberComponent,
    ObservedPublisherComponent,
    SubmittingPublisherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
