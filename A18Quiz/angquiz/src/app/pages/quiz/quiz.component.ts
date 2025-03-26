import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-quiz',
  imports: [NgIf, NgFor, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex = 0;
  selectedAnswer = '';
  score = 0;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
  }

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  nextQuestion() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    this.selectedAnswer = '';
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizService.setScore(this.score);
      this.router.navigate(['/result']);
    }
  }
}
