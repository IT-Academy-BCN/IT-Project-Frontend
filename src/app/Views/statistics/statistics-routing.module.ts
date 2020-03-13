import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';


const routes: Routes = [
  { path: 'statistics-view',  component: StatisticsViewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
