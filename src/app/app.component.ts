import { Component, isDevMode } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // import Router and NavigationEnd
import { Metrika } from 'ng-yandex-metrika';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Корректор';

  constructor(public router: Router, private metrika: Metrika) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

        this.metrika.hit(event.urlAfterRedirects);
      }
    });
  }

  isDev() {
    return isDevMode();
  }
}
