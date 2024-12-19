/*
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ ChildComponent]
})
export class AppComponent {
  parentData = 'Hello from parent';
}

*/

import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ChildComponent]
})
export class AppComponent {
  parentData = 'Hello from parent';

  onChildEvent(event: string) {
    console.log('Event received from child:', event);
  }
}