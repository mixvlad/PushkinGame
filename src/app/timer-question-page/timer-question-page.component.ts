import { Question } from './../question';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-timer-question-page',
  templateUrl: './timer-question-page.component.html',
  styleUrls: ['./timer-question-page.component.styl']
})
export class TimerQuestionPageComponent implements OnInit {
  @Input() question: Question;
  @Output() OnAnswered = new EventEmitter<boolean>();
  isTimer = true;
  timertime = 5;
  timeLeft: number;
  interval;
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private location: Location) {}

  ngOnInit(): void {
    this.answered = false;
    this.resetTimer();
  }

  answer(needCommas: boolean): void {
    this.answered = true;
    this.resetTimer();
    this.rightAnswer = this.question.needCommas === needCommas;
  }

  next(): void {
    this.OnAnswered.emit(this.rightAnswer);
    this.answered = false;
    this.needHelp = false;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.startTimer();
  }

  help(): void {
    this.needHelp = true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.answer(!this.question.needCommas);
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = this.timertime;
  }
}
