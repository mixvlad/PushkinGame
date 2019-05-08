import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-game',
  templateUrl: './dash-game.component.html',
  styleUrls: ['./dash-game.component.styl']
})
export class DashGameComponent implements OnInit {
  currentId: number;
  totalQuestions: number;
  score: number;
  showResult: boolean;
  constructor() {}

  ngOnInit() {}

  onAnswered(rightAnswered: boolean) {
    if (rightAnswered === true) {
      this.score++;
    }
    this.next();
  }

  next(): void {
    this.currentId++;
    this.showResult = true;
  }

  startNewGame(): void {
    this.score = 0;
    this.currentId = 0;
    this.showResult = false;
  }
}
