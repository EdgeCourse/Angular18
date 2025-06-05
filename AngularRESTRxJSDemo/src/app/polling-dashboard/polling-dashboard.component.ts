import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-polling-dashboard',
  templateUrl: './polling-dashboard.component.html',
  standalone: true,
  
})
export class PollingDashboardComponent implements OnInit {
  status: string = 'Unknown';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    timer(0, 5000).pipe(
      switchMap(() => this.http.get<{ status: string }>('http://localhost:3000/metrics/1')),
      takeWhile(response => response.status !== 'complete', true)
    ).subscribe((data) => {
      this.status = data.status;
    });
  }
}
