import { Question } from './../question';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CommaGameService } from '../comma-game.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.styl']
})
export class QuestionPageComponent implements OnInit {
  @Input() question: Question;
  currentId: number;
  answered: boolean;
  needHelp: boolean;

  constructor(private route: ActivatedRoute, private questionService: CommaGameService, private location: Location) {}

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.currentId = id;

    this.updateQuestion(this.currentId);
  }

  answer(isTrue: boolean): void {
    this.answered = true;
  }

  next(): void {
    this.currentId++;
    this.location.go('detail/' + String(this.currentId));
    this.updateQuestion(this.currentId);
  }

  help(): void {
    this.needHelp = true;
  }

  updateQuestion(id: number): void {
    this.questionService.getQuestion(id).subscribe(question => (this.question = question));
    this.answered = false;
    this.needHelp = false;
  }
}
