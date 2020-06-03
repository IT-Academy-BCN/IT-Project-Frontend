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
<<<<<<< HEAD
=======
    document.getElementById("studentsItem").classList.remove("active");
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
  }

}
