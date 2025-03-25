/*
import { Component } from '@angular/core';
import { ToggleClassDirective } from './toggle-class.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleClassDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
*/

import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <button #toggleBtn (click)="toggle()">Toggle Class</button>
  `
})
export class AppComponent {
  @ViewChild('toggleBtn', { static: true }) toggleBtn!: ElementRef;
  toggleClassName: string = 'active';
  private isToggled = false;

  constructor(private renderer: Renderer2) {}

  toggle() {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      this.renderer.addClass(this.toggleBtn.nativeElement, this.toggleClassName);
    } else {
      this.renderer.removeClass(this.toggleBtn.nativeElement, this.toggleClassName);
    }
  }
}
