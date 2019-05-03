import { Question } from './../question';
import { Component, OnInit, Input } from '@angular/core';

import { CommaGameService } from '../comma-game.service';

@Component({
  selector: 'app-comma-game',
  templateUrl: './comma-game.component.html',
  styleUrls: ['./comma-game.component.styl']
})
export class CommaGameComponent implements OnInit {
  questions: Question[];

  constructor(private questionService: CommaGameService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => (this.questions = questions));
  }
}
