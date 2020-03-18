  
import { Component, OnInit } from '@angular/core';
/* models */
import { Student } from '../../../Models/student.model';
import { STUDENTS } from '../../../Models/studentsMock';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

  students = STUDENTS;
  selectedStudent: Student;


  constructor() { }

  ngOnInit() {
  }

}