import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSearchComponent } from './student-search/student-search.component';
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    StudentSearchComponent
  ],
  imports: [
    CommonModule,
    Select2Module
  ],
  exports: [
    StudentSearchComponent
  ]
})
export class SharedModule { }
