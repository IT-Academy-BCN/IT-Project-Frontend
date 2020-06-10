import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClassroomService } from '../../../Services/classroom.service';

@Component({
  selector: 'app-virtual-circles',
  templateUrl: './virtual-circles.component.html',
  styleUrls: ['./virtual-circles.component.scss']
})
export class VirtualCirclesComponent implements OnInit {

   /* this is the good one! */
   public studentsFP: any = [];
   public itineraries: any = [];

  constructor(
    public classroomService: ClassroomService
    ) { }

  ngOnInit() {
    // get the API data
    this.classroomService.getInfoDb()
    .subscribe(
      (data) => { // Success
        this.studentsFP = data; // gets all Students info
        this.studentsPerItinerary(); // to display total of students in footer circle
        //console.log(this.studentsFP);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  // students per itinerary to show on "footer" circles
  studentsPerItinerary() {
    let numStudentsPerItinerary = {};
    this.studentsFP.forEach(function(element){
      let nameItinerary= element.courses[0].itinerary.name;
      numStudentsPerItinerary[nameItinerary] = (numStudentsPerItinerary[nameItinerary] || 0) + 1;
    });
    return this.itineraries = Object.entries(numStudentsPerItinerary);
  }

}
