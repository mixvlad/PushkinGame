import { Question } from './../question';
import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.styl']
})
export class DashPageComponent implements OnInit {
  @Input() question: Question;
  @Output() rightAnswered = new EventEmitter<boolean>();
  textParts: string[];
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private location: Location) {}

  ngOnInit() {
    this.answered = false;
  }

  check(): void {
    this.answered = true;
    this.messageService.add(`questionService: ${document.getElementsByClassName('wrong').length}`);
    this.rightAnswer = document.getElementsByClassName('wrong').length === 0;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.textParts = this.question.questionText.split('|');
    }
  }

  next(): void {
    this.rightAnswered.emit(this.rightAnswer);
    this.answered = false;
    this.needHelp = false;
  }

  onDashSelected(rightAnswered: boolean) {}
}
