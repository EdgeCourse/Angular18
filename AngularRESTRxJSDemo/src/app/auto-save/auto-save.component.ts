// Angular core imports
import { Component, OnInit } from '@angular/core';
// Import FormControl for managing form inputs, and ReactiveFormsModule for reactive form support
import { FormControl, ReactiveFormsModule } from '@angular/forms';
// Import operators for debouncing and filtering rapid input changes
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
// RxJS tools: interval emits on a schedule, combineLatest combines latest values from multiple streams
import { combineLatest, interval } from 'rxjs';
// Common Angular module for built-in directives like *ngIf
import { CommonModule } from '@angular/common';
// HTTP client for making PUT requests
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auto-save', // Component tag
  standalone: true,          // Enables this as a standalone Angular component
  imports: [                 // Required Angular modules for template features
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  template: `
    <form>
      <!-- Form inputs bound to FormControl instances -->
      <input [formControl]="nameControl" placeholder="Name" />
      <input [formControl]="emailControl" placeholder="Email" />
    </form>

    <!-- Message shown for 2 seconds after auto-save completes -->
    <div *ngIf="saved">Saved!</div>
  `
})
export class AutoSaveComponent implements OnInit {
  // FormControl instances manage and track values of form inputs
  nameControl = new FormControl('');
  emailControl = new FormControl('');

  // Controls visibility of the "Saved!" message
  saved = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Observable: emits name input changes after 300ms pause and only if changed
    const name$ = this.nameControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    // Same logic for email input
    const email$ = this.emailControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    /**
     * Combine the interval (emits every 5 seconds) with the latest name and email input values.
     * Whenever the timer ticks, it checks the latest name and email values and sends a PUT request.
     * 
     * [_, name, email] – `_` is unused (interval count), name/email are current values.
     */
    combineLatest([interval(5000), name$, email$]).subscribe(([_, name, email]) => {
      this.http.put('http://localhost:3000/profile', { name, email }).subscribe({
        next: () => {
          console.log('Saved to backend');
          this.saved = true; // Show confirmation
          setTimeout(() => (this.saved = false), 2000); // Hide after 2 seconds
        },
        error: (err) => console.error('Save failed:', err)
      });
    });
  }
}
