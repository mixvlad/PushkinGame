import { InputBlockComponent, State } from './../input-block/input-block.component';
import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-email-subscribe',
  templateUrl: '../input-block/input-block.component.html',
  styleUrls: ['../input-block/input-block.component.styl']
})
export class EmailSubscribeComponent extends InputBlockComponent implements OnInit {
  constructor(private subscribeService: SubscribeService) {
    super();
    this.placeholderText = 'Адрес эл. почты';
  }

  ngOnInit() {}

  submit(value) {
    if (value) {
      // send request to server
      this.currentState = State.inProgress;
      this.subscribeService.subscribe(value).subscribe(
        res => {
          console.log(res);
          // emailBlock.value = '';

          this.currentState = State.Done;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
