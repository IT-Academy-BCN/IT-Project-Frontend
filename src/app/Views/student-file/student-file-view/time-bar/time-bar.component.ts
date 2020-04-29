import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../Services/student.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.scss']
})
export class TimeBarComponent implements OnInit {

  percentage = '0%';

  day = 5; // in hours
  week = 5; // in days without free days
  totalHours = 400; // in hours

  today = new Date();
  deadLine: number;


  constructor(private stu: StudentService,
              private aRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.remainingHoursWeek();
  }

  /* remainingHoursWeek() {
    console.log('dia de la semana: ' + this.today.getDay());
    this.aRoute.params.subscribe( params => {
      // console.log(Object.keys(params).length);
      if (Object.keys(params).length > 0) {
        const result = this.stu.filterNames(params.id, 0);

        // TODO: obtener fecha final del array studentsample si coincide con el resultado de la búsqueda
        // Warning: stu.students do not have all properties required here
        for (const student of this.stu.students) {
          if (student.FirstName === result[0].FirstName && student.LastName === result[0].LastName) {
            console.log(student.limitDate);
            // destructuring this kind of string: 'new Date(2020, 11, 20)'
            let tempDate = student.limitDate.split('(');
            tempDate = tempDate[1].split(')');
            tempDate = tempDate[0].split(', ');
            const limitDate = new Date(tempDate[0], tempDate[1], tempDate[2]);
            console.log(limitDate);
            console.log(this.getWeek(limitDate));
            console.log(this.getWeek(new Date()));
          }
        }
      }
    });
  } */

  getWeek(d: Date): number {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(( ( (d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    // Return array of year and week number
    // return [d.getUTCFullYear(), weekNo];
    // Return ONLY the week number
    return weekNo;
  }

}
