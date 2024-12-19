

import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  name = 'Angular 18';
  user = 'You';
  isHighlighted = true;
  onClick() {
    console.log('Button clicked!');
  }
}