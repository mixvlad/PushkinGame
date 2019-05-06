import { DashPageComponent } from './dash-page/dash-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommaGameComponent } from './comma-game/comma-game.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'comma-game', component: CommaGameComponent },
  { path: 'detail/:id', component: QuestionPageComponent },
  { path: 'dash-game', component: DashPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
