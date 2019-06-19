import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommaQuestionPageComponent } from './comma-question-page/comma-question-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashQuestionPageComponent } from './dash-question-page/dash-question-page.component';
import { DashComponent } from './dash/dash.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { TimerQuestionPageComponent } from './timer-question-page/timer-question-page.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { GameComponent } from './game/game.component';
import { GameButtonComponent } from './game-button/game-button.component';
import { SvgComponent } from './svg/svg.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { MetrikaModule } from 'ng-yandex-metrika';
import { GameService } from './game.service';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';
import { MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RatingComponent } from './rating/rating.component';
import { InputBlockComponent } from './input-block/input-block.component';
import { UserInputComponent } from './user-input/user-input.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TopPanelComponent } from './top-panel/top-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CommaQuestionPageComponent,
    MainPageComponent,
    DashQuestionPageComponent,
    DashComponent,
    ResultPageComponent,
    TimerQuestionPageComponent,
    GameComponent,
    GameButtonComponent,
    SvgComponent,
    SvgDefinitionsComponent,
    EmailSubscribeComponent,
    CountdownTimerComponent,
    RatingComponent,
    InputBlockComponent,
    UserInputComponent,
    BlogPageComponent,
    TopPanelComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 0,
      passThruUnknownUrl: true
    }),
    ShareButtonsModule,
    MetrikaModule.forRoot({ id: 53793379, webvisor: true })
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule {}
