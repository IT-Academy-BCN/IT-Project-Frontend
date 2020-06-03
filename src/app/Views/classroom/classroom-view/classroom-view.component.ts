import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/student.service';

<<<<<<< HEAD
=======

>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.scss']
})
export class ClassroomViewComponent implements OnInit {

<<<<<<< HEAD
   constructor(private studentService: StudentService) { }
  ngOnInit() {
=======
   constructor( private studentService: StudentService ) { }
  
  ngOnInit() {
      document.getElementById("studentsItem").classList.remove("active");
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
  }

}
