import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../Guards/auth.guard';
/* own */
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';


const routes: Routes = [
  { path: 'statistics-view',  component: StatisticsViewComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
