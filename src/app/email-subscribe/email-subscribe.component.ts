import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-email-subscribe',
  templateUrl: './email-subscribe.component.html',
  styleUrls: ['./email-subscribe.component.styl']
})
export class EmailSubscribeComponent implements OnInit {
  subscribed = false;
  constructor(private subscribeService: SubscribeService) {}

  ngOnInit() {}

  subscribe(emailBlock) {
    if (emailBlock.value) {
      // send request to server
      this.subscribeService.subscribe(emailBlock.value).subscribe(
        res => {
          console.log(res);
          // emailBlock.value = '';
          this.subscribed = true;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
