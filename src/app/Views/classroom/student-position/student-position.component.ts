import { Component, OnInit, Input } from '@angular/core';
import { ClassroomService, StudentSeat } from '../../../Services/classroom.service';

@Component({
  selector: 'app-student-position',
  templateUrl: './student-position.component.html',
  styleUrls: ['./student-position.component.scss']
})
export class StudentPositionComponent implements OnInit {
  /* students: StudentSeat[] = []; */
  @Input() student: any = {};

  constructor(private _studentSeatService: ClassroomService) { }

  ngOnInit() {
      // añadir el progreso aleatorio del alumno
      this._studentSeatService.addRandomDays();
  }

}
