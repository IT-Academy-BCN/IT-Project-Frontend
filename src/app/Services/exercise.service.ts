import { Injectable } from '@angular/core';
import { Exercise } from '../Views/student-file/student-file-view/tables/model/exercise';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      id: 0,
      name: "GitHub",
      state: "Corregido",
      date: new Date(2019, 7, 2)
    },
    {
      id: 1,
      name: "USFlights",
      state: "A revisar",
      date: new Date(2019, 7, 10)
    },
    {
      id: 2,
      name: "Projecte Fase 1-2 (HTML)",
      state: "Entregado",
      date: new Date(2019, 7, 12)
    },
    {
      id: 3,
      name: "Projecte Fase 2 (Funcionalidad)",
      state: "Corregido",
      date: new Date(2019, 7, 19)
    }
  ];


  constructor() { }

  getExercises(): Exercise[] {
    return this.exercises;
  }

  getExercise(index: number): Exercise {
    for (let i = 0; i < this.exercises.length; i++) {
      if (index === this.exercises[i].id) {
        return this.exercises[i];
      }
    }

  }
}

