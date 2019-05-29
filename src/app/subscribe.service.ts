import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  SERVER_URL = 'https://pushkingame.azurewebsites.net/api/EmailStore';
  constructor(private httpClient: HttpClient) {}

  subscribe(email: string) {
    const body = { email };
    return this.httpClient.post(this.SERVER_URL, body);
  }
}
