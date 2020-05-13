import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* ngx-bootstrap */
import { ChartsModule } from 'ng2-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* ngx-pagination */
import { NgxPaginationModule } from 'ngx-pagination';
/* modules & components */
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectFileViewComponent } from './project-file-view/project-file-view.component';


@NgModule({
  declarations: [
    ProjectViewComponent,
    ProjectFileViewComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    ProjectRoutingModule,
    TooltipModule.forRoot()
  ]
})
export class ProjectModule { }
