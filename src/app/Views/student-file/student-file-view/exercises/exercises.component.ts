import { Component, Input } from '@angular/core';
/* own */
import { ExerciseService } from '../../../../Services/exercise.service';
import { StudentExercise, Statuses, ExerciseStatusId } from '../../../../Models/exercise.model';
import { Student } from '../../../../Models/student.model';

class ExerciseData {
  constructor(
    public id: string,
    public name: string,
    public status: string,
    public statusDate: Date
  ) { }
}

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {

  @Input() set student(student: Student) {
    this.getExercises(student.id)
      .subscribe(this.updateExercisesData, this.displayErrorMessage);
  }
  private statuses = Statuses;
  public exercises: ExerciseData[] = [];

  constructor(private exerciseService: ExerciseService) { }

  private getExercises(studentId: string) {
    return this.exerciseService.getStudentExercises(studentId);
  }

  private updateExercisesData = (exercises: StudentExercise[]) => {
    for (const exercise of exercises) {
      const exerciseData = new ExerciseData(
        exercise.id,
        exercise.name,
        this.statuses[ExerciseStatusId[exercise.status.id]],
        new Date(exercise.status.date)
      );
      this.exercises.push(exerciseData);
    }
    console.log(this.exercises);
  }

  private displayErrorMessage(error) {
    alert(error);
  }

}
