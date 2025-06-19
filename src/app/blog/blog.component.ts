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
  error: string;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts().subscribe(
      posts => {
        console.log('Blog posts loaded:', posts);
        this.posts = posts;
      },
      error => {
        console.error('Error loading blog posts:', error);
        this.error = 'Ошибка загрузки блога';
        // Fallback data for GitHub Pages
        this.posts = [
          {
            id: 1,
            title: '5 случаев, когда ставится запятая перед «как»',
            body: 'Содержание статьи...'
          },
          {
            id: 2,
            title: '5 случаев, когда не ставится запятая перед «как»',
            body: 'Содержание статьи...'
          },
          {
            id: 3,
            title: 'Нужна ли запятая перед «как» в значении «будучи»',
            body: 'Содержание статьи...'
          }
        ];
      }
    );
  }
}
