import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../../../Models/student.model';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent {

  private _student: Student;
  @Input() set student(student: Student) {
    this._student = student;
    this.studentProgress = this.calculateProgress();
  }
  get student() {
    return this._student;
  }

  public studentProgress = 0;
  @Output() newItinerary = new EventEmitter<string>();

  constructor() { }

  public changeItinerary(newItinerary: string) {
    this.newItinerary.emit(newItinerary);
  }

  private calculateProgress() {
    const today = new Date().valueOf();
      // mock values
    const startDate = today - Math.random() * 0.1 * today;  // field not included in API response
    const endDate = this.student.courses[0].endDate === null ?  // field empty in API response
      today + Math.random() * 0.1 * today :
      new Date(this.student.courses[0].endDate).valueOf();

    const percentage = Math.round(((today - startDate) / (endDate - startDate)) * 100);
    return percentage;
  }

}
