import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.styl']
})
export class DashComponent implements OnInit {
  @Input() needed: boolean;
  @Input() answered: boolean;
  @Input() selected: boolean;
  @Output() OnAnswered = new EventEmitter<boolean>();

  rightAnswer: boolean;

  currentClasses: {};
  setCurrentClasses() {
    this.rightAnswer = this.selected === this.needed;
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      selected: this.selected,
      right: this.rightAnswer,
      wrong: !this.rightAnswer
    };
  }

  constructor() {}

  ngOnInit() {
    this.setCurrentClasses();
  }

  clickDash() {
    this.selected = !this.selected;
    this.rightAnswer = this.selected === this.needed;
    this.OnAnswered.emit(this.selected === this.needed);
    this.setCurrentClasses();
  }
}
