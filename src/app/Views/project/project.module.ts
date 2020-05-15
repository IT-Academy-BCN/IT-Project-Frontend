import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* ngx-bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* ngx-pagination */
import { NgxPaginationModule } from 'ngx-pagination';
/* modules & components */
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectViewComponent } from './project-view/project-view.component';


@NgModule({
  declarations: [
    ProjectViewComponent,
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    ProjectRoutingModule,
    TooltipModule.forRoot()
  ]
})
export class ProjectModule { }
