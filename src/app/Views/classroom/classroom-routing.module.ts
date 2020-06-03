import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../Guards/auth.guard';

import {ClassroomViewComponent} from './classroom-view/classroom-view.component';

const routes: Routes = [
  { path: 'classroom-view',  component: ClassroomViewComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
