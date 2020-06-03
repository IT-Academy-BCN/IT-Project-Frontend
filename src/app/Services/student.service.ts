import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student, StudentInList } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiEndPoint = 'http://217.76.158.200:8090/api/students';

  constructor(private http: HttpClient) { }

  public getAllStudents() {
    return this.http
      .get<StudentInList[]>(this.apiEndPoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getStudentById(id: string) {
    const url = `${this.apiEndPoint}/id/${id}`;
    return this.http
      .get<Student>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public changeItinerary(student: Student, itinerary: string) {
      // this must be replaced by call to API:
      // Put /api/students/id
      // Send Json: with the student fields and the information that needs to be updated.
      // Return Json: 404 - student not found / 200 - Successful
    return new Observable(subscriber => {
      const updatedStudent = Object.assign({}, student);
      updatedStudent.itinerary = itinerary;
      subscriber.next(updatedStudent);
      subscriber.complete();
    });
  }

    // error handling could be improved
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
