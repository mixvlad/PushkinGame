import { Question } from '../question';
import { Component, OnInit, EventEmitter, Input, Output, ViewChildren, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { MessageService } from '../message.service';
import { element } from 'protractor';

@Component({
  selector: 'app-comma-question-page',
  templateUrl: './comma-question-page.component.html',
  styleUrls: ['./comma-question-page.component.styl']
})
export class CommaQuestionPageComponent implements OnInit {
  @Input() question: Question;
  @Output() OnAnswered = new EventEmitter<boolean>();
  @ViewChild('btnTrue') btnTrue;
  @ViewChild('btnFalse') btnFalse;
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private location: Location) {}

  ngOnInit(): void {
    this.answered = false;
  }

  answer(btn, needCommas: boolean): void {
    btn.setAttribute('data-picked', 'true');
    this.answered = true;
    this.rightAnswer = this.question.needCommas === needCommas;
  }

  getAnswerClasses(btn, btnAnswer: boolean) {
    const dataPicked = JSON.parse(btn.getAttribute('data-picked'));
    return {
      Answer__correct: this.answered && this.question.needCommas === btnAnswer && dataPicked,
      Answer__incorrect: this.answered && !this.question.needCommas === btnAnswer && dataPicked,
      Answer__disabled: this.answered && !dataPicked
    };
  }

  next(btnTrue, btnFalse): void {
    this.OnAnswered.emit(this.rightAnswer);
    this.answered = false;
    this.needHelp = false;
    btnTrue.setAttribute('data-picked', 'false');
    btnFalse.setAttribute('data-picked', 'false');
  }

  help(): void {
    this.needHelp = true;
  }
}
