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

  currentClasses() {
    this.rightAnswer = this.selected === this.needed;
    // CSS classes: added/removed per current state of component properties
    return {
      selected: this.selected,
      right: this.rightAnswer,
      wrong: !this.rightAnswer,
      notneeded: !this.needed
    };
  }

  constructor() {}

  ngOnInit() {}

  clickDash() {
    this.selected = !this.selected;
    this.rightAnswer = this.selected === this.needed;
    this.OnAnswered.emit(this.selected === this.needed);
  }
}
