import { Component, Input } from '@angular/core';
/* own */
import { ExerciseService } from '../../../../Services/exercise.service';
import { StudentExercise, Statuses, ExerciseStatusId } from '../../../../Models/exercise.model';
import { Student } from '../../../../Models/student.model';
import { ExerciseModalComponent } from '../exercise-modal/exercise-modal.component'

class ExerciseData {
  constructor(
    public id: string,
    public name: string,
    public statusId: ExerciseStatusId,
    public statusName: string,
    public statusDate: Date
  ) { }
}

export interface StatusUpdate {
  exerciseId: string;
  status: ExerciseStatusId;
  date: Date;
}

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {

  @Input() set student(student: Student) {
    if (student) {
      this.getExercises(student.id)
        .subscribe(this.updateExercisesData, this.displayErrorMessage);
    }
  }
  private statuses = Statuses;
  public exercises: ExerciseData[] = [];

  constructor(private exerciseService: ExerciseService) { }

  public updateExerciseStatus(updateData: StatusUpdate) {
    console.log(updateData);
  }

  public openStatusUpdateModal(modal: ExerciseModalComponent, exerciseId: string) {
    modal.exercise = exerciseId;
    modal.modal.show();
  }

  private getExercises(studentId: string) {
    return this.exerciseService.getStudentExercises(studentId);
  }

  private updateExercisesData = (exercises: StudentExercise[]) => {
    for (const exercise of exercises) {
      const exerciseData = new ExerciseData(
        exercise.id,
        exercise.name,
        exercise.status.id,
        this.statuses[ExerciseStatusId[exercise.status.id]],
        new Date(exercise.status.date)
      );
      this.exercises.push(exerciseData);
    }
  }

  private displayErrorMessage(error) {
    alert(error);
  }
}
