import { Component, OnInit } from '@angular/core';
import { PerAbsence } from './model/perabsence.model';
import {StatisticsService} from './../../../Services/statistics.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  
  constructor(private statisticsService: StatisticsService) {}
  tooManyAbsences:PerAbsence[] = [];
  maxAbsences:Number = 12;
 
  ngOnInit() {
    
    this.statisticsService.get_absenceStudents()
    .subscribe((tooManyAbsences: PerAbsence[])=>{
        console.log(tooManyAbsences);
        this.tooManyAbsences = tooManyAbsences;
        });
  }
}
