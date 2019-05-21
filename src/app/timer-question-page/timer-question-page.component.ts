import { Question } from '../question';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-question-page',
  templateUrl: './timer-question-page.component.html',
  styleUrls: ['./timer-question-page.component.styl']
})
export class TimerQuestionPageComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() OnAnswered = new EventEmitter<boolean>();
  answered: boolean;
  needHelp: boolean;
  rightAnswer: boolean;
  isTimer = true;
  timertime = 5;
  timeLeft: number;
  interval;

  constructor() {}

  ngOnInit(): void {
    this.answered = false;
    this.resetTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.question != null) {
      this.answered = false;
      this.needHelp = false;
      this.startTimer();
    }
  }

  getAnswerClasses() {
    return {
      right: this.answered && this.rightAnswer,
      wrong: this.answered && !this.rightAnswer
    };
  }

  answer(isRightAnswer: boolean): void {
    this.answered = true;
    this.rightAnswer = isRightAnswer;
    this.resetTimer();
    this.OnAnswered.emit(this.rightAnswer);
  }

  startTimer() {
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
}
