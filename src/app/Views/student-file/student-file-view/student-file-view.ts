import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../Services/student.service';
import { Student } from '../../../Models/student.model';

@Component({
  selector: 'app-student-file-view',
  templateUrl: './student-file-view.component.html',
  styleUrls: ['./student-file-view.component.scss']
})
export class StudentFileViewComponent implements OnInit {

  public student: Student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      // beware: https://angular.io/guide/router#snapshot-the-no-observable-alternative
    const studentId = this.route.snapshot.params.id;
    this.studentService
      .getStudentById(studentId)
      .subscribe(this.updateStudent, this.displayErrorMessage);
  }

  public changeItinerary(newItinerary: string) {
    this.studentService
      .changeItinerary(this.student, newItinerary)
      .subscribe(this.updateStudent, this.displayErrorMessage);
  }
    // this is a callback, must remain in arrow form so that this.student is not undefined
  private updateStudent = (student: Student) => {
    this.student = student;
  }

  private displayErrorMessage(error) {
    alert(error);
  }
}
