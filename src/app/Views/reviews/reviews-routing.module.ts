import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { ReviewsViewComponent } from './reviews-view/reviews-view.component';

const routes: Routes = [
  { path: 'reviews-view',  component: ReviewsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
