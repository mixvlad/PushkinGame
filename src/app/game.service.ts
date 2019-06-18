import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, take } from 'rxjs/operators';

import { Question } from './question';
import { MessageService } from './message.service';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class GameService extends BaseService {
  private questionsUrl = 'api/questions'; // URL to web api
  games = {
    comma: 'Нужна ли запятая перед «как»?',
    timer: 'Вводные слова и конструкции',
    dash: 'Нужно ли тире?'
  }; // create an empty array

  constructor(private http: HttpClient, messageService: MessageService) {
    super(messageService);
  }

  getGameTitle(name: string): string {
    if (name === null || name === '') {
      return null;
    }
    return this.games[name];
  }

  getRandom(arr, n) {
    const result = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len) {
      throw new RangeError('getRandom: more elements taken than available');
    }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  /** GET questions from the server */
  getQuestions(questionsUrl: string): Observable<Question[]> {
    return this.http.get<Question[]>('api/' + questionsUrl).pipe(
      tap(_ => this.log('fetched questions')),
      catchError(this.handleError<Question[]>('getQuestions', []))
    );
  }

  /** GET question by id. Return `undefined` when id not found */
  getquestionNo404<Data>(id: number): Observable<Question> {
    const url = `${this.questionsUrl}/?id=${id}`;
    return this.http.get<Question[]>(url).pipe(
      map(questions => questions[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} question id=${id}`);
      }),
      catchError(this.handleError<Question>(`getquestion id=${id}`))
    );
  }

  /** GET question by id. Will 404 if id not found */
  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url).pipe(
      tap(_ => this.log(`fetched question id=${id}`)),
      catchError(this.handleError<Question>(`getquestion id=${id}`))
    );
  }
}
