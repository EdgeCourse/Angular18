// src/app/pages/result/result.component.ts
import { Component, computed } from '@angular/core';
import { quizStore } from '../../state/quiz.store';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  imports: [NgIf, RouterModule]
})
export class ResultComponent {
  quizStore = quizStore;

  result = computed(() => ({
    score: this.quizStore.score(),
    total: this.quizStore.questions().length
  }));
}
