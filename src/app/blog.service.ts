import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './blogPost';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseService {
  private baseUrl = 'api/blogPost'; // URL to web api
  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
  }

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.baseUrl).pipe(
      tap(_ => this.log('fetched Posts')),
      catchError(this.handleError<BlogPost[]>('getPosts', []))
    );
  }

  /** GET Post by id. Return `undefined` when id not found */
  getPostNo404<Data>(id: number): Observable<BlogPost> {
    const url = `${this.baseUrl}/?id=${id}`;
    return this.http.get<BlogPost[]>(url).pipe(
      map(Posts => Posts[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} Post id=${id}`);
      }),
      catchError(this.handleError<BlogPost>(`getPost id=${id}`))
    );
  }

  /** GET Post by id. Will 404 if id not found */
  getPost(id: number): Observable<BlogPost> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<BlogPost>(url).pipe(
      tap(_ => this.log(`fetched Post id=${id}`)),
      catchError(this.handleError<BlogPost>(`getPost id=${id}`))
    );
  }
}
