import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommaGameComponent } from './comma-game/comma-game.component';
import { MessagesComponent } from './messages/messages.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashPageComponent } from './dash-page/dash-page.component';
import { DashComponent } from './dash/dash.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { TimerGameComponent } from './timer-game/timer-game.component';
import { TimerQuestionPageComponent } from './timer-question-page/timer-question-page.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { DashGameComponent } from './dash-game/dash-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CommaGameComponent,
    MessagesComponent,
    QuestionPageComponent,
    MainPageComponent,
    DashPageComponent,
    DashComponent,
    ResultPageComponent,
    TimerGameComponent,
    TimerQuestionPageComponent,
    DashGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    ShareButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
