import { Question } from '../question';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comma-question-page',
  templateUrl: './comma-question-page.component.html',
  styleUrls: ['./comma-question-page.component.styl']
})
export class CommaQuestionPageComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() OnAnswered = new EventEmitter<boolean>();
  @ViewChild('btnTrue') btnTrue;
  @ViewChild('btnFalse') btnFalse;
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;

  constructor() {}

  ngOnInit(): void {
    this.answered = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.answered = false;
      this.needHelp = false;
    }
  }

  answer(isRightAnswer: boolean): void {
    this.answered = true;
    this.rightAnswer = isRightAnswer;
    this.OnAnswered.emit(this.rightAnswer);
  }

  getAnswerClasses() {
    return {
      right: this.answered && this.rightAnswer,
      wrong: this.answered && !this.rightAnswer
    };
  }
}
