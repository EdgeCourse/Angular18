/* 
Signals:

Automatic Change Detection: When a Signal's value changes, Angular automatically detects the change and re-renders any components that depend on that Signal.
Fine-grained Updates: Signals provide more fine-grained control over change detection, as only components that are directly affected by a Signal's change are re-rendered.
*/


import { Component, inject } from '@angular/core';
import { computed, signal } from '@angular/core';

@Component({
  selector: 'app-root', 
  template: `
    <p>Counter: {{ count() }}</p>
    <p>Double Count: {{ doubleCount() }}</p>
    <button (click)="increment()">Increment</button>
  `,
  standalone: true
})
export class AppComponent {
  public count = signal(0); 
  public doubleCount = computed(() => this.count() * 2); 

  increment() {
    this.count.set(this.count() + 1); 
  }
}

//alternative without signal
/* 
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <p>Counter: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button (click)="increment()">Increment</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  count = 0;
  doubleCount = 0;

  increment() {
    this.count++;
    this.doubleCount = this.count * 2; 
    this.changeDetectorRef.detectChanges(); 
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {} 
}

*/