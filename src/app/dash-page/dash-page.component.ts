import { Question } from './../question';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { CommaGameService } from '../comma-game.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.styl']
})
export class DashPageComponent implements OnInit {
  @Input() question: Question;
  @Output() rightAnswered = new EventEmitter<boolean>();
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private questionService: CommaGameService,
    private location: Location
  ) {}

  ngOnInit() {
    this.answered = false;
  }

  check(): void {
    this.answered = true;
    this.rightAnswer = true;
  }

  next(): void {
    this.rightAnswered.emit(this.rightAnswer);
    this.answered = false;
    this.needHelp = false;
  }

  onDashSelected(rightAnswered: boolean) {}
  updateQuestion(id: number): void {
    this.questionService.getQuestion(id).subscribe(question => (this.question = question));
    this.answered = false;
  }
}
