import { Question } from './../question';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { CommaGameService } from '../comma-game.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.styl']
})
export class QuestionPageComponent implements OnInit {
  @Input() question: Question;
  public state$: Observable<{ [key: string]: string }>;
  currentId: number;
  answered: boolean;
  needHelp: boolean;

  isTimer = true;
  timertime = 10;
  timeLeft = 10;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.answered = true;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.timeLeft = this.timertime;
  }

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private questionService: CommaGameService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isTimer = params.timer === 'true' || false;

      this.messageService.add(`questionService: ${params.timer}`);
    });
    this.currentId = +this.route.snapshot.paramMap.get('id');

    this.updateQuestion(this.currentId);
  }

  answer(isTrue: boolean): void {
    this.answered = true;
    this.pauseTimer();
  }

  next(): void {
    this.currentId++;
    let nextPageLink = 'detail/' + String(this.currentId);
    if (this.isTimer === true) {
      nextPageLink += '?timer=true';
    }

    this.location.go(nextPageLink);
    this.updateQuestion(this.currentId);
    if (this.isTimer === true) {
      this.pauseTimer();
      this.startTimer();
    }
  }

  help(): void {
    this.needHelp = true;
  }

  updateQuestion(id: number): void {
    this.questionService.getQuestion(id).subscribe(question => (this.question = question));
    this.answered = false;
    this.needHelp = false;
    if (this.isTimer === true) {
      this.pauseTimer();
      this.startTimer();
    }
  }
}
