// src/app/protected.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-protected',
  template: `<h2>Protected Content</h2>`,
})
export class ProtectedComponent {}
