import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { User } from '../user';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.styl']
})
export class RatingComponent implements OnInit {
  ratingUsers: User[];
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getRating().subscribe(users => {
      this.ratingUsers = users;
    });
  }
}
