import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components & modules */
import { StudentFileRoutingModule } from './student-file-routing.module';
import { StudentFileViewComponent} from './student-file-view/student-file-view';
import { StudentSearchComponent} from './student-file-view/student-search/student-search.component';
import { FileStudentComponent } from './student-file-view/file-student/file-student.component';
import { ExerciseModalComponent } from './student-file-view/exercise-modal/exercise-modal.component';
import { ExercisesComponent } from './student-file-view/exercises/exercises.component';
import { TablesComponent } from './student-file-view/tables/tables.component';
import { TimeBarComponent } from './student-file-view/time-bar/time-bar.component';

/* services*/
import { StudentSearchService } from '../../Services/student-search.service';
import { AlumnoService } from '../../Services/alumno.service';
import { ExerciseService } from '../../Services/exercise.service';
import { Select2Module } from 'ng2-select2';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    StudentFileViewComponent,
    StudentSearchComponent,
    FileStudentComponent,
    ExerciseModalComponent,
    ExercisesComponent,
    TablesComponent,
    TimeBarComponent
  ],
  imports: [
    CommonModule,
    Select2Module,
    FormsModule,
    BsDatepickerModule.forRoot(),
    StudentFileRoutingModule
  ],
  providers: [
    StudentSearchService,
    AlumnoService,
    ExerciseService
  ]
})
export class StudentFileModule { }
