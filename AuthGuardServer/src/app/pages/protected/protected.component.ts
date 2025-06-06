import { Component, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-protected',
  standalone: true,
  template: `
    <h1>Protected Page</h1>
    <p>{{ message }}</p>
  `
})
export class ProtectedComponent {
  http = inject(HttpClient);
  auth = inject(AuthService);
  message = '';

  ngOnInit() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
    this.http.get<{ message: string }>('http://localhost:3000/protected-data', { headers })
      .subscribe({
        next: res => this.message = res.message,
        error: () => this.message = 'Access denied'
      });
  }
}