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
  ViewChildren
} from '@angular/core';

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
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;
  isTimer = true;
  timertime = 7;
  timeLeft: number;
  interval;

  constructor() {}

  ngOnInit(): void {
    this.answered = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.answered = false;
      this.needHelp = false;
      this.restartTimer();
    }
  }

  getAnswerClasses() {
    return {
      answered: this.answered
    };
  }

  answer(isRightAnswer: boolean): void {
    this.stopTimer();
    this.answered = true;
    if (!this.buttons.some(x => x.selected)) {
      this.buttons.find(x => x.button.needed === true).selected = true;
    }

    this.rightAnswer = isRightAnswer;
    this.OnAnswered.emit(this.rightAnswer);
  }

  restartTimer() {
    this.resetTimer();
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.answer(false);
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = this.timertime;
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  next() {
    this.OnNext.emit();
  }
}
