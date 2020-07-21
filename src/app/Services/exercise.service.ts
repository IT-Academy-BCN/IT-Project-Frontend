import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StudentExercise, StatusUpdateData, Statuses, StatusId } from '../Models/exercise.model';
import { ExercisesComponent } from '../Views/student-file/student-file-view/exercises/exercises.component'; 

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(
    private http: HttpClient) { }

  public getStudentExercises(studentId: string) {
    var apiEndPoint = 'http://217.76.158.200:8090/api/exercises/student-id';
    var url = `${apiEndPoint}/${studentId}`;

    return this.http
      .get<StudentExercise[]>(url)
      .pipe(
        map(this.parseDate),
        catchError(this.handleError)
      );
  }

  public updateExerciseStatus(updateData: StatusUpdateData): Observable<StatusUpdateData> {
    // call to API must be implemented  
    //console.log("ex.service" + updateData.studentId + updateData.exerciseId + status + updateData.date);          
    //var studentId = updateData.studentId;  
    //var studentExercisesUrl = `http://217.76.158.200:8090/api/exercises/student-id/${studentId}?id=${updateData.exerciseId}&status{id}=${updateData.status}`;   
    var studentExercisesUrl = `http://217.76.158.200:8090/api/exercises/student-id/${updateData.studentId}`; 
    var updatedResult = null;
    
    return this.http.put<StatusUpdateData>(studentExercisesUrl, updateData);  
    
    /* this.http.put<StatusUpdateData>(studentExercisesUrl, updateData).subscribe(result => {
      updatedResult = result;
    }) */

           
  }

  private parseDate(exercises: StudentExercise[]) {
    exercises.forEach(exercise => {
      const date = exercise.status.date.split(' ')[0];
      const day = date[0] + date[1];
      const month = date[3] + date[4];
      const year = date.slice(6);
      exercise.status.date = `${month}/${day}/${year}`;
    });
    return exercises;
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

