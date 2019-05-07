import { Question } from './../question';
import { Component, OnInit, Input } from '@angular/core';
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
  answered = false;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private questionService: CommaGameService,
    private location: Location
  ) {}

  ngOnInit() {}

  check(): void {
    this.answered = true;
  }

  onDashSelected(rightAnswered: boolean) {}
  next(): void {}
  updateQuestion(id: number): void {
    this.questionService.getQuestion(id).subscribe(question => (this.question = question));
    this.answered = false;
  }
}
