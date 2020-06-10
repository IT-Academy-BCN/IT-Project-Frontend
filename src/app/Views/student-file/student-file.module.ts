import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components & modules */
import { StudentSearchViewComponent } from './student-search-view/student-search-view.component';
import { StudentFileViewComponent} from './student-file-view/student-file-view';
import { StudentDataComponent } from './student-file-view/student-data/student-data.component';
import { ExerciseModalComponent } from './student-file-view/exercise-modal/exercise-modal.component';
import { ExercisesComponent } from './student-file-view/exercises/exercises.component';
import { TablesComponent } from './student-file-view/tables/tables.component';
import { TimeBarComponent } from './student-file-view/time-bar/time-bar.component';
import { SharedModule } from '../../Shared/shared.module';
import { StudentFileRoutingModule } from './student-file-routing.module';

/* services*/
import { StudentService } from '../../Services/student.service';
import { AlumnoService } from '../../Services/alumno.service';
import { ExerciseService } from '../../Services/exercise.service';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    StudentSearchViewComponent,
    StudentFileViewComponent,
    StudentDataComponent,
    ExerciseModalComponent,
    ExercisesComponent,
    TablesComponent,
    TimeBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    StudentFileRoutingModule,
    SharedModule,
    TranslateModule
  ],
  providers: [
    StudentService,
    AlumnoService,
    ExerciseService
  ]
})
export class StudentFileModule { }
