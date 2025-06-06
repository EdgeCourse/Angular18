import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p *ngIf="error" style="color:red">{{ error }}</p>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  http = inject(HttpClient);
  router = inject(Router);
  auth = inject(AuthService);

  login() {
    this.http.post<{ token: string }>('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: res => {
        this.auth.login(res.token);
        this.router.navigateByUrl('/protected');
      },
      error: () => this.error = 'Invalid credentials'
    });
  }
}