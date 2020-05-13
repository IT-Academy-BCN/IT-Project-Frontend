import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
/* own */
import { ProjectFileViewComponent } from './project-file-view/project-file-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  { path: 'project-view/:id',  component: ProjectFileViewComponent },
=======
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
>>>>>>> ce9070964240856d2ae91e67617b4be491e1c4c1
  { path: 'project-view',  component: ProjectViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD

export class ProjectRoutingModule { }

=======
export class ProjectRoutingModule { }
>>>>>>> ce9070964240856d2ae91e67617b4be491e1c4c1
