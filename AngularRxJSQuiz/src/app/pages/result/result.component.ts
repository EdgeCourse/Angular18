import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';

import { QuizService } from '../../services/quiz.service';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  imports: [RouterModule, AsyncPipe, NgIf, NgFor]
})
export class ResultComponent implements OnInit {
  result$!: Observable<{ score: number; total: number }>;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    const score$ = of(this.quizService.getScore());
    const totalQuestions$ = this.quizService.getQuestions().pipe(
      map(q => q.length)
    );

    this.result$ = combineLatest([score$, totalQuestions$]).pipe(
      map(([score, total]) => ({ score, total }))
    );
  }
}
