import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* ngx-bootstrap */
<<<<<<< HEAD
import { ChartsModule } from 'ng2-charts';
=======
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* ngx-pagination */
import { NgxPaginationModule } from 'ngx-pagination';
/* modules & components */
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectViewComponent } from './project-view/project-view.component';
<<<<<<< HEAD
import { ProjectFileViewComponent } from './project-file-view/project-file-view.component';

=======
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242


@NgModule({
  declarations: [
    ProjectViewComponent,
<<<<<<< HEAD
    ProjectFileViewComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
=======
  ],
  imports: [
    CommonModule,
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    ProjectRoutingModule,
    TooltipModule.forRoot()
  ]
})
export class ProjectModule { }
