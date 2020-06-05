import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectFileViewComponent } from './project-file-view/project-file-view.component';
import { AuthGuard } from '../../Guards/auth.guard';

const routes: Routes = [
  { path: 'project-view',  component: ProjectViewComponent, canActivate: [AuthGuard] },
  { path: 'project-view/:id', component: ProjectFileViewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
