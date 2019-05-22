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
  iconName: string;

  constructor() {}

  ngOnInit(): void {
    this.answered = false;
    this.SetRandomIconName();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.answered = false;
      this.needHelp = false;
      this.SetRandomIconName();
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

  SetRandomIconName() {
    const iconNames = ['main', '1', '2', '3', '4', '5', '6'];

    // If we know previous icon, then exclude it from array
    if (this.iconName != null) {
      const index = iconNames.indexOf(this.iconName);
      iconNames.splice(index, 1);
    }
    const iconName = iconNames[Math.floor(Math.random() * iconNames.length)];
    this.iconName = iconName;
  }
}
