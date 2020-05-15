import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { ProjectsViewComponent } from './projects-view/projects-view.component';

const routes: Routes = [
  { path: 'projects-view',  component: ProjectsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
