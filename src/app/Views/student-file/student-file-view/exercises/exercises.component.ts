import { Component, Input } from '@angular/core';
/* own */
import { ExerciseService } from '../../../../Services/exercise.service';
import { Exercise } from '../tables/model/exercise';
import { Student } from '../../../../Models/student.model';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {

    // tslint:disable-next-line: variable-name
  private _student: Student;
  @Input() set student(student: Student) {
    this._student = student;
    this.getExercises();
  }
  get student() {
    return this._student;
  }

  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) { }

  getExercises() {
    this.exercises = this.exerciseService.getStudentExercises(this.student.id);
    console.log(this.exercises);
  }

}
