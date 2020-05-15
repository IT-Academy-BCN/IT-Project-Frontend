import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* ngx-bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* modules & components */
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsTableComponent }  from './projects-table/projects-table.component'; 
import { BreadcrumbComponent }  from './breadcrumb/breadcrumb.component'; 
import { InfoFrameComponent }  from './info-frame/info-frame.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectsViewComponent,
    ProjectsTableComponent,
    BreadcrumbComponent,
    InfoFrameComponent,
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    ProjectsRoutingModule,
    FormsModule,
    ]
})
export class ProjectsModule { }