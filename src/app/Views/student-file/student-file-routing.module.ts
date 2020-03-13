import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFileViewComponent } from './student-file-view/student-file-view.component';


const routes: Routes = [
  { path: 'student-file-view',  component: StudentFileViewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentFileRoutingModule { }
