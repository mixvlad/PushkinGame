import { GameService } from '../game.service';
import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dash-game',
  templateUrl: './dash-game.component.html',
  styleUrls: ['./dash-game.component.styl']
})
export class DashGameComponent implements OnInit {
  questions: Question[];
  currentQuestion: Question;
  currentId: number;
  totalQuestions: number;
  score: number;
  showResult: boolean;
  constructor(private questionService: GameService, private messageService: MessageService) {}

  ngOnInit() {
    this.startNewGame();
  }

  onAnswered(rightAnswered: boolean) {
    if (rightAnswered === true) {
      this.score++;
    }
    this.next();
  }

  next(): void {
    this.currentId++;

    // if no more questions, show result
    if (this.currentId >= this.totalQuestions) {
      this.showResult = true;
    } else {
      this.currentQuestion = this.questions[this.currentId];
      this.messageService.add(`questionService: ${this.currentQuestion.correctText}`);
    }
  }

  startNewGame(): void {
    this.score = 0;
    this.currentId = 0;
    this.currentQuestion = null;
    this.showResult = false;
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions('dashQuestions').subscribe(questions => {
      this.questions = questions;
      this.currentQuestion = this.questions[this.currentId];
      this.totalQuestions = this.questions.length;
      this.messageService.add(`questionService: ${this.currentQuestion.correctText}`);
    });
  }
}
