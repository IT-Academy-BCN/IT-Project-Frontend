import {Component, OnInit} from '@angular/core';

import {ChartOptions, ChartType} from 'chart.js';
import {Label, SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-peoplepie',
  templateUrl: './peoplepie.component.html',
  styleUrls: ['./peoplepie.component.scss']
})
export class PeoplepieComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['FrontEnd', 'BackEnd', '.Net'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
