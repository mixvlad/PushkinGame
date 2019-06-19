import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.styl']
})
export class BlogPageComponent implements OnInit {
  @Input() body: string;
  constructor() {}

  ngOnInit() {}
}
