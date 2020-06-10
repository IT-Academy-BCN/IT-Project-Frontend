import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
/* components & modules */
import { TablesComponent} from './tables/tables.component'
import { GenrepieComponent } from './statistics-pies/genrepie/genrepie.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { PeoplepieComponent } from './statistics-pies/peoplepie/peoplepie.component';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ PeoplepieComponent, GenrepieComponent,TablesComponent, StatisticsViewComponent],
  imports: [
    CommonModule,
    ChartsModule,
    StatisticsRoutingModule,
    TranslateModule,
  ]
})
export class StatisticsModule { }
