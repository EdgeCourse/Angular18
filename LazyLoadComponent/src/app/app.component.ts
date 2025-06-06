// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf],
  template: `
    <h1>Lazy Loading Demo</h1>
    <a routerLink="/">Home</a> | 
    <a routerLink="/lazy">Lazy</a>
    <div *ngIf="loading" class="loading">Loading...</div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .loading {
      color: white;
      background: #333;
      padding: 1rem;
      position: fixed;
      top: 0;
      width: 100%;
      text-align: center;
      z-index: 999;
    }
  `]
})
export class AppComponent {
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }
}
/* 
this.router.events.subscribe(event => { ... })
This watches for router navigation lifecycle events.

The Events Being Checked:
Event Class	Meaning	What You Do
NavigationStart	A new navigation has started (user clicked a link, etc)	Show loading
NavigationEnd	Navigation completed successfully	Hide loading
NavigationCancel	Navigation was cancelled (e.g., guard said "no")	Hide loading
NavigationError	Navigation failed (e.g., network/server issue)	Hide loading

Why instanceof?
event instanceof NavigationStart
This is Angular's way of identifying the type of event from a stream of router events. You're checking:

“Is this specific event a NavigationStart? If so, show the loader.”
*/
//App component cannot be lazy loaded bc bootstrapped
/*
How to Prove Lazy Loading Works

Check the Browser Network Tab
Open DevTools (F12).

Navigate to /lazy.

You will see a new JavaScript chunk file being loaded like lazy-component.js.

Console Logging
In app.routes.ts, the console.log('LazyComponent loaded!') will only print when that route is accessed, proving it's deferred until needed.

*/
