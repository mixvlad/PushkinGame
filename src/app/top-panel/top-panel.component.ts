import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.styl']
})
export class TopPanelComponent implements OnInit {
  @Input() title: string;
  @Input() currentIndex: number;
  @Input() totalQuestions: number;
  constructor() {}

  ngOnInit() {}
}
