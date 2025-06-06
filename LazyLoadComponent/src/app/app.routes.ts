// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'lazy',
    loadComponent: () => import('./lazy/lazy.component').then(m => {
      console.log('LazyComponent loaded!');
      return m.LazyComponent;
    })
  }
];
