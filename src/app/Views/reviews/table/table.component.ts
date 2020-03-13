import { Component, OnInit } from '@angular/core';
import { StudentReview } from '../../../Models/studentsReview';
import { ReviewStudentsService } from '../../../Services/review-students.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  selectedPage: number = 1;
  students: StudentReview[] = [];
  // rows: number;
  // cols: number;

  constructor(private reviewStudents: ReviewStudentsService) {
  }

  ngOnInit() {
    this.students = this.reviewStudents.getStudentsReview();
    console.log(this.reviewStudents); // fake json in console
    // this.cols = this.students[0].exercises.length;
    // this.rows = this.students.length;
  }

}
