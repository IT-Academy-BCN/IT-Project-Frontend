import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../../../Models/student.model';

interface StudentData {
  fullName: string;
  gender: string;
  email: string;
  itinerary: string;
  startDate: string;
  limitDate: string;
  absences: string;
  progress: string;
  portrait: string;
}

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent {

    // tslint:disable-next-line: variable-name
  private _student;
  @Input() set student(student: Student) {
    this._student = student;
    this.updateStudentData(student);
  }

  @Output() newItinerary = new EventEmitter<string>();

  private waitingData = 'esperando datos';
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
    limitDate: this.waitingData,
    absences: this.waitingData,
    progress: this.waitingData,
    portrait: ''
  };

  constructor() { }

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
    this.studentData.itinerary = student.itinerary ? student.itinerary : this.noData;
    this.studentData.startDate = String(student.startDate ? student.startDate : this.noData);
    this.studentData.limitDate = String(student.limitDate ? student.limitDate : this.noData);
    this.studentData.absences = String(student.absences ? student.absences : this.noData);
    this.studentData.progress = String(this.calculateProgress(
      student.startDate,
      student.limitDate
    ));
    this.studentData.portrait = student.portrait;
  }

  private calculateProgress(startDate: Date, limitDate: Date) {
    const valueOfToday = new Date().valueOf();

    let valueOfStartDate: number;
    if (startDate) {
      valueOfStartDate = startDate.valueOf();
    } else {  // mock values to test progress bar presentation
      valueOfStartDate = valueOfToday - Math.random() * 0.1 * valueOfToday;
    }

    let valueOfLimitDate: number;
    if (limitDate) {
      valueOfLimitDate = limitDate.valueOf();
    } else {  // mock values to test progress bar presentation
      valueOfLimitDate = valueOfToday + Math.random() * 0.1 * valueOfToday;
    }

    const percentage = Math.round(
      ((valueOfToday - valueOfStartDate) / (valueOfLimitDate - valueOfStartDate)) * 100
    );
    return percentage;
  }
}
