import { MessageService } from './../message.service';
import { Question } from './../question';
import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'app-comma-game',
  templateUrl: './comma-game.component.html',
  styleUrls: ['./comma-game.component.styl']
})
export class CommaGameComponent implements OnInit {
  questions: Question[];
  currentQuestion: Question;
  currentId: number;
  totalQuestions: number;
  score: number;
  showResult: boolean;

  constructor(private questionService: GameService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(): void {
    this.score = 0;
    this.currentId = 0;
    this.currentQuestion = null;
    this.showResult = false;
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions('commaQuestions').subscribe(questions => {
      this.questions = questions;
      this.currentQuestion = this.questions[this.currentId];
      this.totalQuestions = this.questions.length;
      this.messageService.add(`questionService: ${this.currentQuestion.correctText}`);
    });
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
}
