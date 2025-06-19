import { Question } from '../question';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comma-question-page',
  templateUrl: './comma-question-page.component.html',
  styleUrls: ['./comma-question-page.component.styl']
})
export class CommaQuestionPageComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Input() iconName: string;
  @Output() OnAnswered = new EventEmitter<boolean>();
  @Output() OnNext = new EventEmitter<void>();
  @ViewChild('btnTrue', { static: false }) btnTrue;
  @ViewChild('btnFalse', { static: false }) btnFalse;
  answered: boolean;
  rightAnswer: boolean;

  constructor() {}

  ngOnInit(): void {
    this.answered = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.answered = false;
    }
  }

  answer(isRightAnswer: boolean): void {
    this.answered = true;
    this.rightAnswer = isRightAnswer;
    this.OnAnswered.emit(this.rightAnswer);
  }

  getAnswerClasses() {
    return {
      answered: this.answered
    };
  }

  next() {
    this.OnNext.emit();
  }
}
