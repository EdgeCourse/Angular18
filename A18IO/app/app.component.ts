// app.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ChildComponent], 
  template: `
    <app-child [childInput]="parentData" (childOutput)="onChildOutput($event)"></app-child>
  `,
})
export class AppComponent {
  parentData = 'Data from parent';

  onChildOutput(data: string) {
    console.log('Data from child:', data);
  }
}