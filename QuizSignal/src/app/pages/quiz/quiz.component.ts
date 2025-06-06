// src/app/pages/quiz/quiz.component.ts
import { Component, OnInit, computed, signal, effect } from '@angular/core';
import { Router } from '@angular/router';
import { quizStore } from '../../state/quiz.store';
import { QuizService } from '../../services/quiz.service';
import { NgIf, NgFor } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  imports: [NgIf, NgFor, MatRadioModule, MatButtonModule]
})
export class QuizComponent implements OnInit {
  quizStore = quizStore; // 👈 This makes quizStore available in the template

  currentQuestion = computed(() => this.quizStore.questions()[this.quizStore.currentIndex()]);
  
  constructor(private quizService: QuizService, private router: Router) {
    effect(() => {
      const selected = this.quizStore.selectedAnswer();
      if (selected) {
        console.log('[Signal Effect] Selected answer:', selected);
      }
    });
  }

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(questions => this.quizStore.loadQuestions(questions));
  }

  selectAnswer(option: string) {
    this.quizStore.selectAnswer(option);
  }

  nextQuestion() {
    this.quizStore.next();
    if (this.quizStore.currentIndex() >= this.quizStore.questions().length) {
      this.router.navigate(['/result']);
    }
  }
}
