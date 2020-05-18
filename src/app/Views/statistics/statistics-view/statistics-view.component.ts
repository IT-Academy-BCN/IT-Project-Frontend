import { Component, OnInit } from '@angular/core';
/* models */
import { STUDENTS, MockStudent } from '../../../Models/studentsMock';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss']
})
export class StatisticsViewComponent implements OnInit {
  students = STUDENTS;
  selectedStudent: MockStudent;
  
  constructor() { }

  ngOnInit(): void {
    document.getElementById("studentsItem").classList.remove("active");
  }

}
