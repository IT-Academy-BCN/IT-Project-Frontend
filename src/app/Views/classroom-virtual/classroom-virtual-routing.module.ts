import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../Guards/auth.guard';

import {ClassroomVirtualViewComponent } from './classroom-virtual-view/classroom-virtual-view.component';

const routes: Routes = [
  { path: 'classroom-virtual-view',  component: ClassroomVirtualViewComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomVirtualRoutingModule { }
