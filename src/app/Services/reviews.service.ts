import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
<<<<<<< HEAD
import { throwError } from 'rxjs';
=======
import { throwError, Observable, Subject } from 'rxjs';
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
import { ExerciseResponseList } from '../Models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
<<<<<<< HEAD
  
  constructor(private http: HttpClient) { }

=======

  constructor(private http: HttpClient) { }

  public subject = new Subject<string>();

  sendDropdownOption(value: string) {
    this.subject.next(value);
  }

  getDropdownEvent(): Observable<any> {
    return this.subject.asObservable();
  }

>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
  public getAllExercises() {
    const apiURL = "http://217.76.158.200:8090/api/exercises";
    return this.http.get<ExerciseResponseList[]>(apiURL)
      .pipe(catchError(this.handleError))
  };

<<<<<<< HEAD
  public getExercisesPerItinerary(itinerary: number) {
    //Pendiente implementar
  };

=======
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
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
