import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommaGameComponent } from './comma-game/comma-game.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'detail/1', pathMatch: 'full' },
  { path: 'comma-game', component: CommaGameComponent },
  { path: 'detail/:id', component: QuestionPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
