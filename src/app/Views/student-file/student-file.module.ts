import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFileRoutingModule } from './student-file-routing.module';
import { StudentFileViewComponent } from './student-file-view/student-file-view.component';


@NgModule({
  declarations: [StudentFileViewComponent],
  imports: [
    CommonModule,
    StudentFileRoutingModule
  ]
})
export class StudentFileModule { }
