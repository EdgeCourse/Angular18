import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-result',
  imports: [RouterModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  score = 0;
  totalQuestions!: number;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.score = this.quizService.getScore();
    this.totalQuestions = this.quizService.getQuestions().length;
  }
}
