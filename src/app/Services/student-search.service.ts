import { Injectable } from '@angular/core';
import { StudentSearch } from '../Models/student-search';
import alumnos from '../../assets/json/alumnos.json';



@Injectable({
  providedIn: 'root'
})
export class StudentSearchService {


  public StudentSample: any = alumnos;
  public studentList: StudentSearch[] = [];
  public page: string;

  public selectedStudent = {};


  constructor() {
    for (let i = 0; i < this.StudentSample.length; i++) {
      const student: StudentSearch = new StudentSearch(`a${i}`, this.StudentSample[i].name, this.StudentSample[i].lastname);
      this.studentList.push(student);
    }

  }

  // FIXME: clean functions if are not used

  filterNames(query: string, type: number) {
    // 1= firstname, 2= Lastname
    return this.studentList.filter((el) => {
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

  getSelectedStudent(stu: any) {
    this.selectedStudent = stu;
    return this.selectedStudent;
  }

  fullName(name: string, surname: string): string {
    return `${name} ${surname}`;
  }

  getStudentByName(filter: string): StudentSearch[] {
    // console.log(filter);
    return this.filterNames(filter, 1);
  }

  //getStudentBySurname(filter:string): StudentSearch[]{
  //   return StudentSearchSample.filter(surname => surname.Lastname == filter);
  // }

}
