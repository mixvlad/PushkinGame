import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.styl']
})
export class MainPageComponent implements OnInit {
  commaPreviewQuestion = {
    // tslint:disable-next-line:max-line-length
    questionText: `Иван Яковлевич<span class="highlightText">&nbsp;?&nbsp;</span>как всякий порядочный русский мастеровой<span class="highlightText">&nbsp;?&nbsp;</span>был пьяница страшный.`,
    buttons: [],
    author: `Н.В. Гоголь «Нос»`
  };

  timerPreviewQuestion = {
    // tslint:disable-next-line:max-line-length
    questionText: `Марья Гавриловна была воспитана на французских романах и<span class="highlightText">&nbsp;?&nbsp;</span>следственно<span class="highlightText">&nbsp;?&nbsp;</span>была влюблена.`,
    buttons: [],
    author: `А.С. Пушкин «Метель»`
  };

  dashPreviewQuestion = {
    questionText: `Я |-| честный человек и никогда не говорю комплиментов.`,
    buttons: [],
    author: `А.П. Чехов «Учитель»`
  };
  constructor(private subscribeService: SubscribeService) {}

  ngOnInit() {}

  subscribe(emailBlock) {
    if (emailBlock.value) {
      // send request to server
      this.subscribeService.subscribe(emailBlock.value);
      emailBlock.value = '';
    }
  }
}
