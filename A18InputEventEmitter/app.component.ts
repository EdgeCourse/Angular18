// app.component.ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  parentCount = 0;

  handleCountChange(newCount: number) {
    this.parentCount = newCount;
  }
}
