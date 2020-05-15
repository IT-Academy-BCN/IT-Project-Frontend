import { stringify } from 'querystring'; // ?
import { parseTwoDigitYear } from 'ngx-bootstrap/chronos/units/year'; // ?

export class Alumno {

  name: string;
  lastname: string;
  absences: number;
  startDate: Date;
  limitDate: Date;
  mail: string;
  itinerary: string;
  percentage: number;

  constructor(name: string, lastname: string, absences: number, startDate: Date, limitDate: Date, mail: string, itinerary: string) {
    this.name = name;
    this.lastname = lastname;
    this.absences = absences;
    this.startDate = startDate;
    this.limitDate = limitDate;
    this.mail = mail;
    this.itinerary = itinerary;
  
  }

  // remainingPercentage(): number {
  //   let today = new Date().getDate();
  //   let percentage = ((today.valueOf() - this.startDate.valueOf()) / (this.limitDate.valueOf() - this.startDate.valueOf())) * 100;
  //   return percentage;
  // }
}


// var start = new Date(2015, 0, 1), // Jan 1, 2015
//   end = new Date(2015, 7, 24), // August 24, 2015
//   today = new Date(), // April 23, 2015
//   p = Math.round(((today - start) / (end - start)) * 100) + '%';
// // Update the progress bar
// $('.bar').css("width", p).after().append(p);