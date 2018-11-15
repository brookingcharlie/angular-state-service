import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubscriberComponent } from './subscriber.component';
import { SubmittingPublisherComponent } from './submitting-publisher.component';
import { ObservedPublisherComponent } from './observed-publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberComponent,
    SubmittingPublisherComponent,
    ObservedPublisherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
