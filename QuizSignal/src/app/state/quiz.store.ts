import { signal, computed } from '@angular/core';

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const _questions = signal<Question[]>([]);
const _currentIndex = signal(0);
const _selectedAnswer = signal('');
const _score = signal(0);

export const quizStore = {
  questions: computed(() => _questions()),
  currentIndex: computed(() => _currentIndex()),
  selectedAnswer: computed(() => _selectedAnswer()),
  score: computed(() => _score()),

  loadQuestions: (qs: Question[]) => _questions.set(qs),
  selectAnswer: (ans: string) => _selectedAnswer.set(ans),
  next: () => {
    const q = _questions();
    const i = _currentIndex();
    if (_selectedAnswer() === q[i]?.answer) {
      _score.update(s => s + 1);
    }
    _selectedAnswer.set('');
    _currentIndex.set(i + 1);
  },
  reset: () => {
    _questions.set([]);
    _currentIndex.set(0);
    _selectedAnswer.set('');
    _score.set(0);
  }
};
