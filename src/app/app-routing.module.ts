import { TimerGameComponent } from './timer-game/timer-game.component';
import { TimerQuestionPageComponent } from './timer-question-page/timer-question-page.component';
import { DashPageComponent } from './dash-page/dash-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommaGameComponent } from './comma-game/comma-game.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'comma-game', component: CommaGameComponent },
  { path: 'timer-game', component: TimerGameComponent },
  { path: 'dash-game', component: DashPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
