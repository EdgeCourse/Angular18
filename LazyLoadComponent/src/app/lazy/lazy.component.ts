// src/app/lazy/lazy.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy',
  standalone: true,
  template: `<h2>Lazy Component Loaded!</h2>`
})
export class LazyComponent {}

/*
The purpose of lazy loading components in Angular is to optimize application performance — especially for large apps. Here's what that really means:

1. Faster Initial Load Time
When you lazy load a component, it isn't included in the initial JavaScript bundle. This makes the first page load:

smaller in size

faster to download

quicker to become interactive

Instead, Angular loads the component only when needed, such as when the user navigates to a specific route.

2. Smaller Bundle Sizes (Code Splitting)
Lazy loading helps Angular break your app into chunks:

/ → Loads just the home page chunk

/admin → Loads the admin chunk only when visited

This is especially helpful in:

enterprise apps

apps with complex dashboards

e-commerce platforms

3. Reduced Memory Usage
Eagerly loading everything means all code and components live in memory, even if unused. Lazy loading avoids this:

Uses less memory

Keeps the app lean while running

4. Better User Experience
Lazy loading:

defers downloading non-critical features

allows quick interaction with the app

improves perceived performance

It’s especially powerful when combined with route-level preloading strategies or loading indicators (spinners).

Small app with 2–3 pages? No
Large app with many routes? Yes
Admin panel used only by some? Yes
Mobile users with slow internet? Yes
*/