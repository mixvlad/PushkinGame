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
  error: string;
  
  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(id).subscribe(
      post => {
        console.log('Blog post loaded:', post);
        this.post = post;
      },
      error => {
        console.error('Error loading blog post:', error);
        this.error = 'Ошибка загрузки статьи';
        // Fallback data
        this.post = {
          id: id,
          title: 'Статья не найдена',
          body: 'К сожалению, запрашиваемая статья не найдена.'
        };
      }
    );
  }
}
