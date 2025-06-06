import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // adjust path

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule],
  template: `
    <h2>Login Page</h2>
    <p>Status: {{ status() }}</p>
    <button (click)="login()">Login</button>
  `,
})
export class LoginComponent {
  private auth: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  status = computed(() =>
    this.auth.isLoggedInSignal() ? 'Logged In' : 'Logged Out'
  );

  login() {
    this.auth.login();
    this.router.navigate(['/protected']);
  }
}
