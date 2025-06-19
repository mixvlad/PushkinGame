import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.styl']
})
export class SvgComponent {
  @Input() name: string;

  constructor() {}

  get absUrl() {
    return window.location.origin + window.location.pathname;
  }
}
