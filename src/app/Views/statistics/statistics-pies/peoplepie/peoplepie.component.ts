import {Component, OnInit} from '@angular/core';

import {Label} from 'ng2-charts';
import {Chart} from 'chart.js';

import {StatisticsService} from './../../../../Services/statistics.service';
import {Peoplepie} from './../models/peoplepie.model';

@Component({
  selector: 'app-peoplepie',
  templateUrl: './peoplepie.component.html',
  styleUrls: ['./peoplepie.component.scss']
})
export class PeoplepieComponent implements OnInit {

  public pieChartLabels: Label[] = [];
  public pieChartData: number [] = [];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.statisticsService.get_itineraryStudents()
    .subscribe((result: Peoplepie[])=>{
        result.forEach(element => {
          this.pieChartData.push(element.students);
          this.pieChartLabels.push(element.itinerary);
        });
        // To delete the last position of the each of two array options because the common itinerary now is a preamble and it has not sense
        this.pieChartData.pop();
        this.pieChartLabels.pop();
        
        new Chart('peoplechart', {
          type: 'pie',
          data: {
            labels: this.pieChartLabels,
            datasets: [
              {
                data: this.pieChartData,
                backgroundColor: [  
                  "#ffa3b7",  
                  "#5cc8f5",  
                  "#ffe397"
                ],  
                fill: true
              }
            ]
          },
          options: {
              legend: {
                display: true,
                labels: {
                  boxWidth: 24,
                }
              },
              responsive: true,
            },
        });
      }
    )
  }

}
