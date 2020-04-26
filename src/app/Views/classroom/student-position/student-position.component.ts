import { Component, OnInit, Input } from '@angular/core';
import { ClassroomService, StudentInfo } from '../../../Services/classroom.service';

@Component({
  selector: 'app-student-position',
  templateUrl: './student-position.component.html',
  styleUrls: ['./student-position.component.scss']
})
export class StudentPositionComponent implements OnInit {
  @Input() studentFP: any = {};

  constructor(private classroomService: ClassroomService) { }

  ngOnInit() {
    // añadir el progreso aleatorio del alumno
    this.classroomService.addRandomDaysFP();
  }

}
