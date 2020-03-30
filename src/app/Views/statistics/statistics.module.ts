import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
/* components & modules */
import { TablesComponent} from './tables/tables.component'
import { GenrepieComponent } from './stadistics/genrepie/genrepie.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { PeoplepieComponent } from './stadistics/peoplepie/peoplepie.component';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component'

@NgModule({
  declarations: [ PeoplepieComponent, GenrepieComponent,TablesComponent, StatisticsViewComponent],
  imports: [
    CommonModule,
    ChartsModule,
    StatisticsRoutingModule,
  ]
})
export class StatisticsModule { }
