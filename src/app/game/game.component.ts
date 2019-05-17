import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { MessageService } from '../message.service';
import { Question } from '../question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.styl']
})
export class GameComponent implements OnInit {
  currentGame: string;
  gameTitle: string;
  questions: Question[];
  currentQuestion: Question;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  showResult: boolean;

  constructor(private questionService: GameService, private messageService: MessageService, private router: Router) {
    this.currentGame = this.router.url.substring(1);
    this.gameTitle = questionService.getGameTitle(this.currentGame);
  }

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(): void {
    this.score = 0;
    this.currentIndex = 0;
    this.currentQuestion = null;
    this.showResult = false;
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions(this.currentGame + 'Questions').subscribe(questions => {
      this.questions = this.questionService.getRandom(questions, 5);
      this.currentQuestion = this.questions[this.currentIndex];
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
    this.currentIndex++;

    // if no more questions, show result
    if (this.currentIndex >= this.totalQuestions) {
      this.showResult = true;
    } else {
      this.currentQuestion = this.questions[this.currentIndex];
      this.messageService.add(`questionService: ${this.currentQuestion.correctText}`);
    }
  }
}
