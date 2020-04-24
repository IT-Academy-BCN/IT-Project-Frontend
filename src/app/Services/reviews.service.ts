import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { StudentReview } from '../Models/studentsReview';
import { StudentReview, Exercices } from '../Models/exercises.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudentInList } from '../Models/exercises.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {


  private apiExercises = 'http://217.76.158.200:8090/api/exercises/';
  private apiStudents = 'http://217.76.158.200:8090/api/students';

  constructor(private http: HttpClient) { }

  getExercises(){
    return this.http.get<Exercices[]>(this.apiExercises)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

  getAllStudents() {
    return this.http.get<StudentInList[]>(this.apiStudents)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
