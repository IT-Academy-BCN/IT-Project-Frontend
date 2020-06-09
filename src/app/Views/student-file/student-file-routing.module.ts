import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../Guards/auth.guard';
import { StudentFileViewComponent } from './student-file-view/student-file-view';
import { StudentSearchViewComponent } from './student-search-view/student-search-view.component';


const routes: Routes = [
  { path: 'student-view',  component: StudentSearchViewComponent, canActivate: [AuthGuard] },
  { path: 'student/:id', component: StudentFileViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentFileRoutingModule { }
