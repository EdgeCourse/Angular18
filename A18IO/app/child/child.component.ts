// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true, 
  template: `
    <p>Child Component</p>
    <p>Input from parent: {{ childInput }}</p>
    <button (click)="sendOutput()">Send Data to Parent</button>
  `,
})
export class ChildComponent {
  @Input() childInput!: string; 
  @Output() childOutput = new EventEmitter<string>();

  sendOutput() {
    this.childOutput.emit('Data from child');
  }
}