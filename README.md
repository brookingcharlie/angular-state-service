# Angular state management using services

Simple demonstration of managing state in Angular services
with components that subscribe to and/or publish state changes.

Look at things in this order:

1. `UserStore`, a service that contains state.
2. `SubscriberComponent` that shows two options for subscribing to and displaying data.
3. `SubmittingPublisherComponent`, a subscribing form that publishes field changes on submit.
4. `ObservedPublisherComponent`, a subscribing form that publishes field changes live.

Run the app using

    ng serve
