import { BlogPageComponent } from './blog-page/blog-page.component';
import { RatingComponent } from './rating/rating.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'comma', component: GameComponent },
  { path: 'timer', component: GameComponent },
  { path: 'dash', component: GameComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
