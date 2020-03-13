import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClassroomViewComponent} from './classroom-view/classroom-view.component';

const routes: Routes = [
  { path: 'classroom-view',  component: ClassroomViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
