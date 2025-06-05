// Angular core and DOM access tools
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// RxJS tools for creating and managing observable streams
import { fromEvent, EMPTY } from 'rxjs';
import {
  debounceTime,           // adds delay after typing
  distinctUntilChanged,   // prevents duplicate input processing
  map,                    // transforms input
  switchMap               // cancels previous request if new input arrives
} from 'rxjs/operators';

// Angular's built-in HTTP client
import { HttpClient } from '@angular/common/http';

// Required for using *ngFor, *ngIf in standalone templates
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',            // Custom tag: <app-search>
  standalone: true,                  // No need for NgModule
  imports: [CommonModule],          // Needed for template features like *ngFor
  templateUrl: './search.component.html'  // External template
})
export class SearchComponent implements OnInit {
  // Get the input element from the template using the template variable #searchInput
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  // Array to store filtered search results
  results: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Create an observable stream from the input event of the text box
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        // Extract and clean the value from the event
        map((event: any) => event.target.value.trim()),

        // Wait 300ms after typing stops before continuing
        debounceTime(300),

        // Only continue if the value actually changed
        distinctUntilChanged(),

        // Cancel previous request if new input arrives
        switchMap((query: string) => {
          // If input is empty, clear the results and stop the stream
          if (query === '') {
            this.results = [];
            return EMPTY; // Emits nothing, completes instantly
          }

          // Otherwise, fetch all users and manually filter them
          return this.http.get<any[]>('http://localhost:3000/users').pipe(
            map((users) =>
              users.filter((user) =>
                user.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive match
              )
            )
          );
        })
      )
      // Set filtered results for template rendering
      .subscribe((filtered) => {
        this.results = filtered;
      });
  }
}

/*
NOTES:
Purpose of debounceTime in a search box?
Problem Without Debounce
If you call the API every time the user presses a key, then when they type charlie:

Key pressed	API Call Triggered
c	✅ Yes
h	✅ Yes
a	✅ Yes
r	✅ Yes
l	✅ Yes
i	✅ Yes
e	✅ Yes

7 API calls in under 1 second wastes bandwidth, overloads the backend, and causes UI flickering due to rapid results coming in.

Solution: debounceTime(300)

debounceTime(300)
Waits 300 milliseconds after the user stops typing. Only then triggers the next step in the Observable pipeline. So if the user types continuously, no API call is made until they pause for 300ms.

*/