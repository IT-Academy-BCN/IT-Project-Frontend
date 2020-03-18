import { Component, OnInit } from '@angular/core';
/* own */
import { ExerciseService } from '../../../../Services/exercise.service';
import { Exercise } from '../tables/model/exercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  exercises: Exercise[] = [];
  constructor(private exerciseService: ExerciseService) {

  }

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
    console.log(this.exercises);
  }

}
