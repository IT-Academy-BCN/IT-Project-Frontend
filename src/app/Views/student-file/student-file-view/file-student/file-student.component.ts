import { Component, OnInit } from '@angular/core';
/* own */
import { Alumno } from '../tables/model/alumno';
/* import listadeAlumnos from 'src\assets\json\alumnos.json';*/
import listadeAlumnos from '../../../../../assets/json/alumnos.json';
/* ? */
//import { StudentSearchService } from '../../../../Services/student-search.service';
//import { FilestudentService } from '../file-student/file-student.service';
/* import { Student } from '../../../student';
 */

@Component({
  selector: 'app-file-student',
  templateUrl: './file-student.component.html',
  styleUrls: ['./file-student.component.scss']
})

export class FileStudentComponent implements OnInit {

  Alumnos: any = listadeAlumnos;
  estudiantes: Alumno[] = [];
  selectedStudent: string = "";
  StudentSearchService: any;
  student: Alumno;
  today = new Date();
  getStudent() {

    for (let i = 0; i < this.Alumnos.length; i++) {

      if (this.selectedStudent == this.Alumnos[i].name) {
        console.log('Find');
        this.student = this.Alumnos[i];
        this.student.percentage = this.remainingPercentage(this.student);
      }
    }
    console.log(this.student);
  };

  changeItinerary(value: any) {
    this.student.itinerary = value;

  }

  remainingPercentage(student): number {
    let date1 = (new Date(this.today).valueOf()) - (new Date(this.student.startDate).valueOf());
    let date2 = (new Date(this.student.limitDate).valueOf()) - (new Date(this.student.startDate).valueOf());
    let percentage = Math.round((date1 / date2) * 100);
    console.log(percentage);
    return percentage;

  }
  constructor() { }

  ngOnInit() {
  }

}

