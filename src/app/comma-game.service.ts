import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from './question';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CommaGameService {
  private questionsUrl = 'api/questions'; // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) {}

  /** GET questions from the server */
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl).pipe(
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

  /* GET questions whose name contains search term */
  searchquestions(term: string): Observable<Question[]> {
    if (!term.trim()) {
      // if not search term, return empty question array.
      return of([]);
    }
    return this.http.get<Question[]>(`${this.questionsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found questions matching "${term}"`)),
      catchError(this.handleError<Question[]>('searchquestions', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new question to the server */
  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionsUrl, question, httpOptions).pipe(
      tap((newquestion: Question) => this.log(`added question w/ id=${newquestion.id}`)),
      catchError(this.handleError<Question>('addquestion'))
    );
  }

  /** DELETE: delete the question from the server */
  deleteQuestion(question: Question | number): Observable<Question> {
    const id = typeof question === 'number' ? question : question.id;
    const url = `${this.questionsUrl}/${id}`;

    return this.http.delete<Question>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted question id=${id}`)),
      catchError(this.handleError<Question>('deletequestion'))
    );
  }

  /** PUT: update the question on the server */
  updateQuestion(question: Question): Observable<any> {
    return this.http.put(this.questionsUrl, question, httpOptions).pipe(
      tap(_ => this.log(`updated question id=${question.id}`)),
      catchError(this.handleError<any>('updatequestion'))
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
