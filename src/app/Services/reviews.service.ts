import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, Subject } from 'rxjs';
import { ExerciseResponseList } from '../Models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  public subject = new Subject<string>();

  sendDropdownOption(value: string) {
    this.subject.next(value);
  }

  getDropdownEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  public getAllExercises() {
    const apiURL = "http://217.76.158.200:8090/api/exercises";
    return this.http.get<ExerciseResponseList[]>(apiURL)
      .pipe(catchError(this.handleError))
  };

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

  public updateExerciseStatus(data: ExerciseResponseList) {
   
    var reviewExercisesUrl = `http://217.76.158.200:8090/api/exercises`;    
  
    /* var updatedInfo = {
      id: updateData.id,
      status: {id: updateData.status},
      date: updateData.date
    }
    
    this.http.put<ExerciseResponseList>(reviewExercisesUrl, updatedInfo).subscribe(result => {
      updateData = result;
    })  */
        
  }

}
