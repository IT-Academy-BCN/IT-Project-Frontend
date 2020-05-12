import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { ProjectFileViewComponent } from './project-file-view/project-file-view.component';


const routes: Routes = [
  { path: 'project-view',  component: ProjectFileViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFileRoutingModule { }
