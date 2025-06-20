// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component'; // 👈 use AppComponent instead

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
});
