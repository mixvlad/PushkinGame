import { Question } from './../question';
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
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.styl']
})
export class DashPageComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() rightAnswered = new EventEmitter<boolean>();
  @ViewChildren('dash') components: QueryList<DashComponent>;

  textParts: TextPart[];
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
    this.rightAnswer = !this.components.some(x => x.rightAnswer === false);
  }

  // Сплитим и генерим уникальный хэш для уникальности в ngfor
  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.textParts = this.question.questionText.split('|').map(item => {
        return new TextPart(
          item,
          ''
          // Math.random()
          //   .toString(36)
          //   .replace(/[^a-z]+/g, '')
          //   .substr(0, 7)
        );
      });
    }
  }

  next(): void {
    this.rightAnswered.emit(this.rightAnswer);
    this.answered = false;
    this.needHelp = false;
  }

  onDashSelected(rightAnswered: boolean) {}

  // trackByFn(index, item) {
  //   if (!item) {
  //     return null;
  //   }
  //   return item.hash;
  // }
}
