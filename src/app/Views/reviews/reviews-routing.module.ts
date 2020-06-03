import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../Guards/auth.guard';
/* own */
import { ReviewsViewComponent } from './reviews-view/reviews-view.component';

const routes: Routes = [
  { path: 'reviews-view',  component: ReviewsViewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
