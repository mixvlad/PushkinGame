import { Question } from '../question';
import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  ViewChildren,
  QueryList
} from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { TextPart } from '../textPart';
import { DashComponent } from '../dash/dash.component';

@Component({
  selector: 'app-dash-question-page',
  templateUrl: './dash-question-page.component.html',
  styleUrls: ['./dash-question-page.component.styl']
})
export class DashQuestionPageComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() OnAnswered = new EventEmitter<boolean>();
  @ViewChildren('dash') components: QueryList<DashComponent>;

  textParts: TextPart[];
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private location: Location) {}

  ngOnInit() {
    this.answered = false;
  }

  check() {
    this.answered = true;
    this.messageService.add(`questionService: ${document.getElementsByClassName('wrong').length}`);
    this.rightAnswer = !this.components.some(x => x.rightAnswer === false);

    this.OnAnswered.emit(this.rightAnswer);
  }

  // Сплитим и генерим уникальный хэш для уникальности в ngfor
  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.answered = false;
      this.needHelp = false;
      this.textParts = this.question.questionText.split('|').map(item => {
        return new TextPart(item);
      });
    }
  }
}
