import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { buffer, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-action-batch',
  templateUrl: './action-batch.component.html',
  standalone: true
})
export class ActionBatchComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Create an observable that emits every time the user clicks anywhere in the document
    const click$ = fromEvent(document, 'click');

    // Create an interval observable that emits every 3 seconds
    const interval$ = interval(3000);

    /**
     * Combine the two streams using `buffer(interval$)`:
     * - `buffer` collects values (click events) from `click$`
     * - When `interval$` emits (every 3s), it emits the collected array of clicks
     * 
     * Example:
     * If the user clicks 4 times in 3 seconds, you'll get an array of 4 click events.
     */
    click$.pipe(
      buffer(interval$),

      // `tap` is used here to perform a side effect without changing the stream
      tap((clicks) => {
        // Only send data to the backend if there were any clicks
        if (clicks.length > 0) {
          // Send a POST request to the backend with the number of actions
          this.http.post('http://localhost:3000/activity', {
            actions: clicks.length
          }).subscribe();

          console.log(`Posted ${clicks.length} clicks to /activity`);
        }
      })
    ).subscribe();
  }
}
