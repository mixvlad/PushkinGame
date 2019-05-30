import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.styl']
})
export class CountdownTimerComponent implements OnInit {
  @Input() time: number;
  @Input() frequency: number;
  @Output() finished = new EventEmitter<void>();
  timeLeftMiliseconds: number;
  interval;
  constructor() {}

  ngOnInit() {
    this.restartTimer();
  }

  restartTimer() {
    this.resetTimer();
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeftMiliseconds > 0) {
        this.timeLeftMiliseconds -= 1000 * this.frequency;
      } else {
        this.stopTimer();
        this.finished.emit();
      }
    }, 1000 * this.frequency);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeftMiliseconds = this.time * 1000;
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}
