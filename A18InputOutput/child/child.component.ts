/*
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  standalone:true,
})
export class ChildComponent {
  @Input() childData!: string;
  //@Input() childData: string = "";
  //@Input() childData?: string;
}
*/
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  standalone: true,
})
export class ChildComponent {
  @Input() childData!: string;

  @Output() childEvent = new EventEmitter<string>();

  emitEvent() {
    this.childEvent.emit('Event emitted from child component');
  }
}