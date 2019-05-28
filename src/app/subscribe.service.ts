import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  SERVER_URL = 'https://pushkingame.azurewebsites.net/api/EmailStore';
  constructor(private httpClient: HttpClient) {}

  subscribe(email: string): any {
    const body = { email };
    this.httpClient.post<any>(this.SERVER_URL, body).subscribe(
      res => {
        console.log(res);
        return res;
      },
      err => {
        console.log(err);

        return err;
      }
    );
  }
}
