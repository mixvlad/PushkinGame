import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  private baseUrl = 'https://pushkinapi.azurewebsites.net/api/user'; // URL to web api
  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      tap(_ => this.log('fetched Users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /** GET User by id. Return `undefined` when id not found */
  getUserNo404<Data>(id: number): Observable<User> {
    const url = `${this.baseUrl}/?id=${id}`;
    return this.http.get<User[]>(url).pipe(
      map(Users => Users[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} User id=${id}`);
      }),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** GET User by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched User id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** POST: add a new User to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added User w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the User from the server */
  deleteUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /** PUT: update the User on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl + '/' + user.id, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated User id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }
}
