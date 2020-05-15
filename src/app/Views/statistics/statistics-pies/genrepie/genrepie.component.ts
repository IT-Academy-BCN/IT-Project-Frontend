import { Component, OnInit } from '@angular/core';

import {Chart} from 'chart.js';
import {Label} from 'ng2-charts';

import {StatisticsService} from './../../../../Services/statistics.service';

@Component({
  selector: 'app-genrepie',
  templateUrl: './genrepie.component.html',
  styleUrls: ['./genrepie.component.scss']
})
export class GenrepieComponent implements OnInit {

  public pieChartLabels: Label[] = [];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    
    this.statisticsService.get_genderStudents()
    .subscribe((result)=>{
      var pieChartData = Object.values(result);
      var pieChartLabels = Object.keys(result);
        new Chart('genderchart', {
          type: 'pie',
          data: {
            labels: pieChartLabels,
            datasets: [
              {
                data: pieChartData,
                backgroundColor: [  
                  "#ffa3b7",  
                  "#5cc8f5" 
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
