import { BlogService } from './../blog.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blogPost';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.styl']
})
export class BlogPageComponent implements OnInit {
  post: BlogPost;
  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(id).subscribe(x => (this.post = x));
  }
}
