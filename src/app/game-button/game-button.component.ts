import { Button } from './../button';
import { Question } from './../question';

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.styl']
})
export class GameButtonComponent implements OnInit {
  @Input() button: Button;
  @Input() answered: boolean;
  @Output() OnAnswered = new EventEmitter<boolean>();

  selected: boolean;
  rightAnswer: boolean;

  getAnswerClasses() {
    return {
      Answer__correct: this.answered && this.selected && this.button.needed,
      Answer__incorrect: this.answered && this.selected && !this.button.needed,
      Answer__disabled: this.answered && !this.selected,
      Answer__selected: this.selected
    };
  }

  constructor() {}

  ngOnInit() {}

  clickButton() {
    this.selected = !this.selected;
    this.rightAnswer = this.selected === this.button.needed;
    this.OnAnswered.emit(this.selected === this.button.needed);
  }
}
