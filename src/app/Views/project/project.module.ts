import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
/* components & modules */
import { ProjectFileRoutingModule } from './project-routing.module';
import { ProjectFileViewComponent } from './project-file-view/project-file-view.component';
@NgModule({
  declarations: [ ProjectFileViewComponent ],
  imports: [
    CommonModule,
    ChartsModule,
    ProjectFileRoutingModule,
  ]
})
export class ProjectModule { }
