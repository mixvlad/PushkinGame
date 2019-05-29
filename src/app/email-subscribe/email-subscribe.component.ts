import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-email-subscribe',
  templateUrl: './email-subscribe.component.html',
  styleUrls: ['./email-subscribe.component.styl']
})
export class EmailSubscribeComponent implements OnInit {
  currentState = State.Initial;
  constructor(private subscribeService: SubscribeService) {}

  ngOnInit() {}

  subscribe(emailBlock) {
    if (emailBlock.value) {
      // send request to server
      this.currentState = State.inProgress;
      this.subscribeService.subscribe(emailBlock.value).subscribe(
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

enum State {
  Initial = 1,
  inProgress,
  Done
}
