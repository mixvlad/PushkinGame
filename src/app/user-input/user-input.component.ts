import { InputBlockComponent, State } from './../input-block/input-block.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-input',
  templateUrl: '../input-block/input-block.component.html',
  styleUrls: ['../input-block/input-block.component.styl']
})
export class UserInputComponent extends InputBlockComponent implements OnInit {
  constructor(private userService: UserService) {
    super();

    const userId = localStorage.getItem('currentUserId');
    if (userId != null) {
      this.userService.getUser(+userId).subscribe(
        x => {
          this.placeholderText = x.name;
          this.currentState = State.Done;
        },
        err => (this.placeholderText = 'ФИО')
      );
    } else {
      this.placeholderText = 'ФИО';
    }
  }

  ngOnInit() {}

  submit(value) {
    if (value) {
      // send request to server
      this.currentState = State.inProgress;
      const user = new User({ name: value, score: 0 });
      console.log(user);
      this.userService.addUser(user).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('currentUserId', res.id.toString());

          this.currentState = State.Done;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
