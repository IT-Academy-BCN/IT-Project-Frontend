import { Component, OnInit } from '@angular/core';
/* models */
import { Student } from '../../../Models/student.model';
import { STUDENTS } from '../../../Models/studentsMock';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss']
})
export class StatisticsViewComponent implements OnInit {
  students = STUDENTS;
  selectedStudent: Student;
  
  constructor() { }

  ngOnInit(): void {
  }

}
