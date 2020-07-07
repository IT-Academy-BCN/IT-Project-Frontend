import { Component, OnInit, TemplateRef } from "@angular/core";
import { ClassroomService } from "../../../Services/classroom.service";
import { StatisticsService } from "src/app/Services/statistics.service";
// translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-virtual-circles",
  templateUrl: "./virtual-circles.component.html",
  styleUrls: ["./virtual-circles.component.scss"],
})
export class VirtualCirclesComponent implements OnInit {

  // TRANSLATE
  selectedLanguage = 'es';
  /* this is the good one! */
  public studentsFP: any = [];
  public itineraries: any = [];
  public itinerariesDeliveries: any = [];
  // public studentsDeliveries: any = [];

  constructor(
    public classroomService: ClassroomService,
    public statisticsService: StatisticsService,
    private translateService: TranslateService
  ) {
    //translate
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit() {
    // get the API data
    this.classroomService.getInfoDb().subscribe(
      (data) => {
        // Success
        this.studentsFP = data; // gets all Students info
        console.log(data);
        this.studentsPerItinerary(); // to display total of students in footer circle
        //console.log(this.studentsFP);
      },
      (error) => {
        console.error(error);
      }
    );

    this.statisticsService.get_itinerariesDeliveries().subscribe(
      // Subscribe de data from API to the instance of object itineraries Deliveries
      (resp) => {
        this.itinerariesDeliveries = resp; // gets all Itineraries Deliveries info
        console.log(resp);
        this.printItinerariesDeliveries(); // to display total of students in footer circle
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // itineraries deliveries per itinerary to show on "footer" circles
  studentsPerItinerary() {
    let numStudentsPerItinerary = {};
    this.studentsFP.forEach(function (element) {
      let nameItinerary = element.courses[0].itinerary.name;
      if (nameItinerary != "COMMON-BLOCK") {
        numStudentsPerItinerary[nameItinerary] =
          (numStudentsPerItinerary[nameItinerary] || 0) + 1;
      }
    });
    return (this.itineraries = Object.entries(numStudentsPerItinerary));
  }

  // exercice deliveries per itinerary to show on "footer" circles
  printItinerariesDeliveries() {
    let numItineraryDelivery = {};
    this.itinerariesDeliveries.forEach(function (item) {
      if (item.itinerary_name != "COMMON-BLOCK") {
        numItineraryDelivery[item.num_students] =
          (numItineraryDelivery[item.num_students] || 0) + 1;
      }
    });
    return (this.itinerariesDeliveries = Object.entries(numItineraryDelivery));
  }
}
