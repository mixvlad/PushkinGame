import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('dashPage', null) dashPage;
  currentGame: string;
  iconName: string;
  gameTitle: string;
  questions: Question[];
  currentQuestion: Question;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  showResult: boolean;
  answered = false;
  needHelp: boolean;
  subTitle: string;

  constructor(private questionService: GameService, private messageService: MessageService, private router: Router) {
    this.currentGame = this.router.url.substring(1);
    this.gameTitle = questionService.getGameTitle(this.currentGame);
    this.SetRandomIconName();
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
    this.updateSubTitle();
  }

  updateSubTitle() {
    if (this.showResult) {
      this.subTitle = 'Результаты';
    } else {
      this.subTitle = 'Вопрос ' + (this.currentIndex + 1) + '/' + this.totalQuestions;
    }
  }

  getQuestions(): void {
    this.questionService.getQuestions(this.currentGame + 'Questions').subscribe(questions => {
      this.questions = this.questionService.getRandom(questions, 5);
      this.currentQuestion = this.questions[this.currentIndex];
      this.totalQuestions = this.questions.length;
    });
  }

  onAnswered(rightAnswered: boolean) {
    if (rightAnswered === true) {
      this.score++;
    }
    this.answered = true;
  }

  help(): void {
    this.needHelp = true;
  }

  next(): void {
    this.currentIndex++;
    this.needHelp = false;
    this.answered = false;
    this.SetRandomIconName();

    // if no more questions, show result
    if (this.currentIndex >= this.totalQuestions) {
      this.showResult = true;
    } else {
      this.currentQuestion = this.questions[this.currentIndex];
      this.messageService.add(`questionService: ${this.currentQuestion.correctText}`);
    }
    this.updateSubTitle();
  }

  SetRandomIconName() {
    const iconNames = ['main', '1', '2', '3', '4', '5', '6'];

    // If we know previous icon, then exclude it from array
    if (this.iconName != null) {
      const index = iconNames.indexOf(this.iconName);
      iconNames.splice(index, 1);
    }
    const iconName = iconNames[Math.floor(Math.random() * iconNames.length)];
    this.iconName = iconName;
  }

  check() {
    this.dashPage.check();
  }
}
