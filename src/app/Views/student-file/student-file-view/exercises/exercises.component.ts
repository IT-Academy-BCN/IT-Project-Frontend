import { Component, Input } from '@angular/core';
/* own */
import { ExerciseService } from '../../../../Services/exercise.service';
import {
  StudentExercise, Statuses, StatusId, StatusUpdateData
} from '../../../../Models/exercise.model';
import { Student } from '../../../../Models/student.model';
import { ExerciseModalComponent } from '../exercise-modal/exercise-modal.component';
import { TranslateService } from '@ngx-translate/core';

class ExerciseData {
  constructor(
    public id: string,
    public name: string,
    public statusId: StatusId,
    public statusName: string,
    public statusDate: Date
  ) { }
}

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {

    // tslint:disable-next-line: variable-name
  private _student: Student;
  @Input() set student(student: Student) {
    if (student) {
      this._student = student;
      this.getExercises(student.id);
    }
  }
  private statuses = Statuses;
  public exercises: ExerciseData[] = [];
  public selectedLanguage = 'es';

  constructor(
    private exerciseService: ExerciseService,
    private translateService: TranslateService,) { 
      this.translateService.setDefaultLang(this.selectedLanguage);
      this.translateService.use(this.selectedLanguage);
    }

  public updateExerciseStatus(updateData: StatusUpdateData) {       

    this.exerciseService.updateExerciseStatus(updateData);  
       
    // this mocks service response
    const updated = this.exercises.find(exercise => exercise.id === updateData.exerciseId); 
    updated.statusId = updateData.status;                           
    updated.statusName = this.statuses[StatusId[updated.statusId]]; 
    updated.statusDate = updateData.date;                                        
  }
  
  public openStatusUpdateModal(modal: ExerciseModalComponent, exercise: ExerciseData) {
    modal.exerciseId = exercise.id;
    modal.statusId = exercise.statusId;
    modal.studentId = this._student.id;
    modal.modal.show();
  }

  private getExercises(studentId: string) {
    this.exerciseService
      .getStudentExercises(studentId)
      .subscribe(this.updateExercisesData, this.displayErrorMessage);
  }

  private updateExercisesData = (exercises: StudentExercise[]) => {
    for (const exercise of exercises) {
      const exerciseData = new ExerciseData(
        exercise.id,
        exercise.name,
        exercise.status.id,
        this.statuses[StatusId[exercise.status.id]],
        new Date(exercise.status.date)
      );
      this.exercises.push(exerciseData);      
    }
  }

  private displayErrorMessage(error) {
    alert(error);
  }
}
