import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Student } from '../../../../Models/student.model';
import { Router } from "@angular/router";


interface StudentData {
  fullName: string;
  gender: string;
  email: string;
  itinerary: string;
  startDate: number | string;
  endDate: any;
  totalAbsences: number | string;
  progress: string;
  portrait: string;
}

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit{

    // tslint:disable-next-line: variable-name
  private _student;
  @Input() set student(student: Student) {
    this._student = student;
    this.updateStudentData(student);
  }

  @Output() newItinerary = new EventEmitter<string>();

  private waitingData:any = 'esperando datos';
  private noData = 'sin datos';
  public genderMap = {
    M: 'masculino',
    F: 'femenino',
    other: 'otro'
  };
  public studentData: StudentData = {
    fullName: this.waitingData,
    gender: this.waitingData,
    email: this.waitingData,
    itinerary: this.waitingData,
    startDate: this.waitingData,
    endDate: this.waitingData,
    totalAbsences: this.waitingData,
    progress: this.waitingData,
    portrait: ''
  };

  constructor(private router: Router) { }

  public changeItinerary(newItinerary: string) {
    this.newItinerary.emit(newItinerary);
  }

  public loadFallbackImg(event: Event) {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = `../../../../assets/img/${this._student.gender === 'M' ? 'men.svg' : 'women.svg'}`;
  }

  private updateStudentData(student: Student) {
    this.studentData.fullName = student.firstName && student.lastName
      ? student.firstName + ' ' + student.lastName
      : this.noData;
    this.studentData.gender = student.gender ? student.gender : this.noData;
    this.studentData.email = student.email ? student.email : this.noData;
    this.studentData.itinerary = student.courses[0].itinerary.name ? student.courses[0].itinerary.name : this.noData;
    this.studentData.startDate = student.courses[0].beginDate ? student.courses[0].beginDate : this.noData;
    this.studentData.endDate = student.courses[0].endDate !== null ? student.courses[0].endDate : this.noData;
    this.studentData.totalAbsences = student.totalAbsences ? student.totalAbsences : this.noData;
    this.studentData.progress = String(this.calculateProgress(
      this.studentData.startDate,
      this.studentData.endDate
    ));
    this.studentData.portrait = student.portrait;
    console.log(this.studentData.totalAbsences);
    console.log(this.studentData.endDate);
  }

  private calculateProgress(startDate: number | string, endDate: number | any) {
    const valueOfToday = new Date().valueOf();

    let valueOfStartDate: any;
    if (startDate) {
      valueOfStartDate = startDate.valueOf();
    } else {  // mock values to test progress bar presentation
      valueOfStartDate = valueOfToday - Math.random() * 0.1 * valueOfToday;
    }

    let valueOfLimitDate: number;
    if (endDate !== 'sin datos') {
      valueOfLimitDate = endDate.valueOf();
    } else {  // mock values to test progress bar presentation
      valueOfLimitDate = valueOfToday + Math.random() * 0.1 * valueOfToday;
    }
    console.log(startDate)
    console.log(endDate)
    const percentage = Math.round(
      ((valueOfToday - valueOfStartDate) / (valueOfLimitDate - valueOfStartDate)) * 100
    );
    return percentage;
  }

  ngOnInit(): void {

    /*
      At classroom-view/reviews-view/statistics-view.component.ts we can find this lines onInit
      
        document.getElementById("studentsItem").classList.remove("active");

      This code, and the line below, allows us to change the item 'Alumno' color to $pink when we are in a student-file-view.
      It is not the best option to do this, but it is the only one we have been able to find at this time.
    */ 

    document.getElementById("studentsItem").classList.add("active");
  }
}
