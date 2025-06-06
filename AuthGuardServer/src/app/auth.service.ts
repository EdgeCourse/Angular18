import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal(!!localStorage.getItem('token'));

  login(token: string) {
    localStorage.setItem('token', token);
    this.loggedIn.set(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn.set(false);
  }

  isLoggedIn() {
    return this.loggedIn();
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }
}