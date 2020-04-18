import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StudentSearch } from '../Models/student-search';
import { Student, StudentInList } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentSearchService {

  // private mockStudentsJSON: any = mockStudents;
  // private mockStudentsList: StudentSearch[] = [];
  // public students: StudentSearch[] = this.mockStudentsList;
    // following property identifies view from where the search originates.
    // receives 'student' from student-file view and '....' from classroom view
    // may be useful for processing API response differently for different views
  // public page: string;
    // property unnecessary here, only needed in method that performs API request
  // public selectedStudent = {};

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
    const options = { params: new HttpParams().set('id', id) };
    return this.http
      .get<Student>(this.apiEndPoint, options)
      .pipe(
          // API does not parse URL parameters yet, so it returns students/ array.
          // following operator calls callback that provides a mock student while API is not fixed
        map(student => this.provideMockStudent(student, id)),
        catchError(this.handleError)
      );
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
    // provisional until API is corrected
  private provideMockStudent(student: Student | StudentInList[], id: string) {
    if (Array.isArray(student)) {
      const chosenStudent = student.filter(stud => stud.id === id)[0];
      const mockStudent = new Student();
      mockStudent.id = chosenStudent.id;
      mockStudent.firstName = chosenStudent.firstName;
      mockStudent.lastName = chosenStudent.lastName;
      mockStudent.seat = chosenStudent.seat;
      mockStudent.courses = chosenStudent.courses;
      mockStudent.age = Math.floor(Math.random() * 50) + 18;
      mockStudent.gender = Math.random() < 0.5 ? 'm' : 'f';

      const name = ((firstName, lastName) => {
        const fullName = firstName + lastName;
        let parsedName = '';
        for (const char of fullName) {
          if (char !== ' ') {
            parsedName += char.toLowerCase();
          }
        }
        return parsedName;
      })(mockStudent.firstName, mockStudent.lastName);

      mockStudent.email = `${name}@gmail.com`;
      mockStudent.portrait = `${name}.png`;
      student = mockStudent;
    }
    return student;
  }
/*
  /* FIXME: clean functions if are not used
    // used by time-bar component in student-view
  filterNames(query: string, type: number) {
    // 1= firstname, 2= Lastname
    return this.mockStudentsList.filter((el) => {
        switch (type) {
          case 0:
            return el.Id.indexOf(query) > -1;
          case 1:
            return el.FirstName.toLowerCase().indexOf(query.toLowerCase()) > -1;
          case 2:
            return el.LastName.toLowerCase().indexOf(query.toLowerCase()) > -1;
        }
    });
  }
    */
}
