import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  
  today = new Date();
  price = 123.45;
  pi = 3.14159;
  num = 0.23;
  names = ['Alice', 'Bob', 'Charlie', 'David'];
}

