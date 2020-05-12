import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { ProjectFileViewComponent } from './project-file-view/project-file-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  { path: 'project-view/:id',  component: ProjectFileViewComponent },
  { path: 'project-view',  component: ProjectViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }

