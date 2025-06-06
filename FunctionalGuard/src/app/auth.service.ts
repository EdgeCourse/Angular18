// src/app/services/auth.service.ts
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn = signal(false); // signal for internal state

  // Publicly exposed computed signal
  readonly isLoggedInSignal = computed(() => this._loggedIn());

  login() {
    this._loggedIn.set(true);
  }

  logout() {
    this._loggedIn.set(false);
  }

  isLoggedIn(): boolean {
    return this._loggedIn();
  }
}
