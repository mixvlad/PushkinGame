import { GameButtonComponent } from './../game-button/game-button.component';
import { Question } from '../question';
import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  QueryList,
  ViewChildren,
  ViewChild
} from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-timer-question-page',
  templateUrl: './timer-question-page.component.html',
  styleUrls: ['./timer-question-page.component.styl']
})
export class TimerQuestionPageComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Input() iconName: string;
  @Output() OnAnswered = new EventEmitter<boolean>();
  @Output() OnNext = new EventEmitter<void>();
  @ViewChildren('btn') buttons: QueryList<GameButtonComponent>;
  @ViewChild('countdownTimer', { static: false }) timer: CountdownTimerComponent;
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;
  timeLeft: boolean;

  constructor() {}

  ngOnInit(): void {
    this.answered = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.answered = false;
      this.needHelp = false;
      this.timeLeft = false;
      if (this.timer) {
        this.timer.restartTimer();
      }
    }
  }

  getAnswerClasses() {
    return {
      answered: this.answered
    };
  }

  answer(isRightAnswer: boolean): void {
    this.timer.stopTimer();
    this.answered = true;
    if (!this.buttons.some(x => x.selected)) {
      this.buttons.find(x => x.button.needed === true).selected = true;
    }

    this.rightAnswer = isRightAnswer;
    this.OnAnswered.emit(this.rightAnswer);
  }

  noTimeLeft() {
    this.timeLeft = true;
    this.answer(false);
  }

  next() {
    this.OnNext.emit();
  }
}
