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
}

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent {

    // tslint:disable-next-line: variable-name
  private _student: Student;
  @Input() set student(student: Student) {
    this._student = student;
    this.updateStudentData();
  }
  get student() {
    return this._student;
  }

  public studentData: StudentData = {
    fullName: 'esperando datos',
    gender: 'esperando datos',
    email: 'esperando datos',
    itinerary: 'esperando datos',
    startDate: 'esperando datos',
    limitDate: 'esperando datos',
    absences: 'esperando datos',
    progress: 'esperando datos'
  };

  public studentProgress = 0;
  @Output() newItinerary = new EventEmitter<string>();

  constructor() { }

  public changeItinerary(newItinerary: string) {
    this.newItinerary.emit(newItinerary);
  }

  public loadFallbackImg(event: Event) {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = `../../../../assets/img/${this.student.gender === 'M' ? 'men.svg' : 'women.svg'}`;
  }

  private updateStudentData() {
    this.studentData.fullName = this.student.firstName + ' ' + this.student.lastName;
    this.studentData.gender = this.student.gender;
    this.studentData.email = this.student.email;
    this.studentData.itinerary = this.student.itinerary;
    this.studentData.startDate = this.student.startDate;
    this.studentData.limitDate = this.student.limitDate;
    this.studentData.absences = this.student.absences;
    this.studentData.progress = String(this.calculateProgress());
  }

  private calculateProgress() {
    const today = new Date().valueOf();

    const mockStartDate = today - Math.random() * 0.1 * today;
    const mockEndDate = today + Math.random() * 0.1 * today;

    const startDate = this.student.startDate
      ? new Date(this.student.startDate).valueOf()
      : mockStartDate;
    const endDate = this.student.endDate
      ? new Date(this.student.endDate).valueOf()
      : mockEndDate;

    const percentage = Math.round(((today - startDate) / (endDate - startDate)) * 100);
    return percentage;
  }
}
