import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {PollingDashboardComponent} from './polling-dashboard/polling-dashboard.component';
import {AutoSaveComponent} from './auto-save/auto-save.component';
import {ActionBatchComponent} from './action-batch/action-batch.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, PollingDashboardComponent, AutoSaveComponent, ActionBatchComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angrestrxjs';
}
