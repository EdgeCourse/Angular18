import { Component, inject } from '@angular/core';
import { RouterLink, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <h1>Welcome</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/login">Login</a>
      <a routerLink="/protected">Protected</a>
    </nav>
    <button (click)="logout()">Logout</button>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent {
  auth: AuthService = inject(AuthService);   
  router: Router = inject(Router);           

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');       
  }
}
