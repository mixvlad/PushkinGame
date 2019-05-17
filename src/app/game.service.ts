import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, take } from 'rxjs/operators';

import { Question } from './question';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class GameService {
  private questionsUrl = 'api/questions'; // URL to web api
  games = []; // create an empty array

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.games.push(
      {
        key: 'comma',
        value: 'Запятая перед как'
      },
      {
        key: 'timer',
        value: 'Вводные'
      },
      {
        key: 'dash',
        value: 'Куда нужно вставить тире?'
      }
    );
  }

  getGameTitle(name: string): string {
    if (name === null || name === '') {
      return null;
    }
    return this.games.find(x => x.key === name).value;
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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a questionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`questionService: ${message}`);
  }
}
