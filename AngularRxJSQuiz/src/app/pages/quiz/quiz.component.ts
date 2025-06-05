//quiz/quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { QuizService, Question } from '../../services/quiz.service';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    RouterModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class QuizComponent implements OnInit {
  private questions$ = new BehaviorSubject<Question[]>([]);
  private currentQuestionIndex$ = new BehaviorSubject<number>(0);
  public selectedAnswer$ = new BehaviorSubject<string>('');
  private score$ = new BehaviorSubject<number>(0);

  currentQuestion$ = combineLatest([
    this.questions$,
    this.currentQuestionIndex$
  ]).pipe(
    map(([questions, index]) => questions[index])
  );

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(questions => {
      this.questions$.next(questions);
    });
  }

  selectAnswer(option: string) {
    this.selectedAnswer$.next(option);
  }

  nextQuestion() {
    const questions = this.questions$.value;
    const index = this.currentQuestionIndex$.value;
    const selected = this.selectedAnswer$.value;

    if (selected === questions[index]?.answer) {
      this.score$.next(this.score$.value + 1);
    }

    this.selectedAnswer$.next('');
    const nextIndex = index + 1;

    if (nextIndex >= questions.length) {
      this.quizService.setScore(this.score$.value);
      this.router.navigate(['/result']);
    } else {
      this.currentQuestionIndex$.next(nextIndex);
    }
  }
}
