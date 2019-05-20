import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.styl']
})
export class ResultPageComponent implements OnInit {
  @Input() score: number;
  @Input() total: number;

  GetResultText(): string {
    switch (this.score) {
      case 0 || 1 || 2:
        return '«Мы все учились понемногу,<br />Чему-нибудь и как-нибудь».<br />Попробуйте еще.';
      case 3:
        return '«Ах, обмануть меня нетрудно,<br />Я сам обманываться рад!»<br />Будьте внимательнее.';
      case 4:
        return 'Старик Державин вас заметил 😉';
      case 5:
        return 'В человеке всё должно быть прекрасно — как в вас!';
      default:
        return 'Старик державин вас заметил 😉';
    }
  }

  constructor() {}

  ngOnInit() {}
}
