import { Component, OnInit, Input } from '@angular/core';
import { ClassroomService } from '../../../Services/classroom.service';

@Component({
  selector: 'app-student-position',
  templateUrl: './student-position.component.html',
  styleUrls: ['./student-position.component.scss']
})
export class StudentPositionComponent implements OnInit {
  @Input() studentFP: any = {};
  @Input() studentItinerary: any = {};

  constructor(private classroomService: ClassroomService) { }

  ngOnInit() {
    // añadir el progreso aleatorio del alumno
    this.classroomService.addRandomDaysFP();

    // get the number of itinerary for each student
    this.itineraryNumber(this.studentFP);
  }

  itineraryNumber(data) {
    this.studentItinerary = data.courses[0].itinerary.id;
    return this.studentItinerary;
  }

}
