import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  questions: string[] = [
    'Pytanie numer 1',
    'Pytanie numer 2',
    'Pytanie numer 3',
    'Pytanie numer 4',
    'Pytanie numer 5'
  ];

  answers: number[] = [];

  currentQuestionRate: -1;

  currentQuestion = 0;
  get currentQuestionText() {
    return this.questions[this.currentQuestion];
  }

  constructor() {
    for(let i = 0; i < this.questions.length - 1 ; i++) {
      this.answers.push(-1);
    }
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  onRateChange(rate: number) {
  }
}
