import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/student.service';


@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.scss']
})
export class ClassroomViewComponent implements OnInit {

   constructor( private studentService: StudentService ) { }
  
  ngOnInit() {
      document.getElementById("studentsItem").classList.remove("active");
  }

}
