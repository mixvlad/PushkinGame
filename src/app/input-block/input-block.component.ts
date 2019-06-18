import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.styl']
})
export class InputBlockComponent implements OnInit {
  currentState = State.Initial;
  placeholderText: string;
  constructor() {}

  ngOnInit() {}

  submit(value) {
    // add some logic here
  }
}

export enum State {
  Initial = 1,
  inProgress,
  Done
}
