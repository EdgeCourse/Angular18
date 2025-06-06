import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../state/quiz.store';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly apiUrl = 'http://localhost:3000/questions';
  constructor(private http: HttpClient) {}
  getQuestions() {
    return this.http.get<Question[]>(this.apiUrl);
  }
}