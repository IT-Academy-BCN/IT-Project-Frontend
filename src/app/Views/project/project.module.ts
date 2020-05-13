import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* ngx-bootstrap */
<<<<<<< HEAD
import { ChartsModule } from 'ng2-charts';
=======
>>>>>>> ce9070964240856d2ae91e67617b4be491e1c4c1
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
>>>>>>> ce9070964240856d2ae91e67617b4be491e1c4c1


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
>>>>>>> ce9070964240856d2ae91e67617b4be491e1c4c1
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    ProjectRoutingModule,
    TooltipModule.forRoot()
  ]
})
export class ProjectModule { }
