import { BlogPost } from './../blogPost';
import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.styl']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts().subscribe(x => (this.posts = x));
  }
}
