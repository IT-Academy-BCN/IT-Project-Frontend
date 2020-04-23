import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Exercise } from '../Views/student-file/student-file-view/tables/model/exercise';
import { StudentExercise } from '../Models/exercise.model';


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


  constructor(
    private http: HttpClient
  ) { }

  public getStudentExercises(studentId: string) {
    const apiEndPoint = 'http://217.76.158.200:8090/api/exercises/student-id';
    const url = `${apiEndPoint}/${studentId}`;
    return this.http
      .get<StudentExercise[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An client-side or network error occurred:', error.error.message);
    } else {
      console.error(
        `Server returned unsuccessful response code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Se ha producido un error. Intente nuevamente más tarde.'); // to user
  }
}

