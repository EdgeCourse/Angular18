// src/app/services/quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:3000/questions';
  private score = 0;

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  getScore(): number {
    return this.score;
  }

  setScore(score: number): void {
    this.score = score;
  }
}
