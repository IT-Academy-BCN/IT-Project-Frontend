import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomViewComponent } from './classroom-view/classroom-view.component';


@NgModule({
  declarations: [ClassroomViewComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ],
  exports: [
    ClassroomViewComponent
  ]
})
export class ClassroomModule { }
