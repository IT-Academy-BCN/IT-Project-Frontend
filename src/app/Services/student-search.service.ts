import { Injectable } from '@angular/core';
import { StudentSearch } from '../Models/student-search';

import mockStudents from '../../assets/json/alumnos.json';

@Injectable({
  providedIn: 'root'
})
export class StudentSearchService {

  private mockStudentsJSON: any = mockStudents;
  private mockStudentsList: StudentSearch[] = [];
  public students: StudentSearch[] = this.mockStudentsList;
    // following property identifies view from where the search originates.
    // receives 'student' from student-file view and '....' from classroom view
    // may be useful for processing API response differently for different views
  public page: string;
    // property unnecessary here, only needed in method that performs API request
  public selectedStudent = {};

  constructor() {
    this.parseMockStudentsJSON();
  }

  private parseMockStudentsJSON() {
    for (let i = 0; i < this.mockStudentsJSON.length; i++) {
      const student = new StudentSearch(
        `a${i}`,
        this.mockStudentsJSON[i].name,
        this.mockStudentsJSON[i].lastname
      );
      this.mockStudentsList.push(student);
    }
  }

  // FIXME: clean functions if are not used
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
    // should be replaced by method that deals with search triggered
  getSelectedStudent(stu: any) {
    this.selectedStudent = stu;
    return this.selectedStudent;
  }
}
