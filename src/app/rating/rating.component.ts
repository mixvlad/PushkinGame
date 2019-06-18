import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.styl']
})
export class RatingComponent implements OnInit {
  ratingUsers: User[];
  interval: any;
  constructor(private userService: UserService) {}

  refreshData() {
    this.userService.getUsers().subscribe(users => {
      this.ratingUsers = users;
    });
  }
  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }
}
