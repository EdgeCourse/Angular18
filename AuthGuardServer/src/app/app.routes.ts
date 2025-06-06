import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/protected/protected.component').then(m => m.ProtectedComponent)
  },
];
