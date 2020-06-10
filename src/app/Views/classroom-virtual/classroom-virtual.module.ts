import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* ngx-bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* ngx-pagination */
import { NgxPaginationModule } from 'ngx-pagination';
/* modules & components */
import { ClassroomVirtualRoutingModule } from './classroom-virtual-routing.module';
import { ClassroomVirtualViewComponent } from './classroom-virtual-view/classroom-virtual-view.component';
import { VirtualItSearchComponent } from './virtual-it-search/virtual-it-search.component';
import { VirtualTableComponent }   from './virtual-table/virtual-table.component';
import { VirtualCirclesComponent }   from './virtual-circles/virtual-circles.component';
import { virtualStringPipe } from '../../Pipes/virtualStringPipe'

@NgModule({
  declarations: [
    ClassroomVirtualViewComponent,
    VirtualItSearchComponent,
    VirtualTableComponent,
    VirtualCirclesComponent,
    virtualStringPipe
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    ClassroomVirtualRoutingModule,
    TooltipModule.forRoot()
  ]
})
export class ClassroomVirtualModule { }
