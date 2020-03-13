import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination'; // also in  reviews.module
/* ngx-bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* components & modules*/
import { StudentFileModule } from './Views/student-file/student-file.module';
import { StatisticsModule } from './Views/statistics/statistics.module';
import { ReviewsModule } from './Views/reviews/reviews.module';
import { ClassroomModule } from './Views/classroom/classroom.module';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginModule } from './Views/login/login.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoimagePipe } from './Pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    NoimagePipe
  ],
  imports: [
    BsDatepickerModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ChartsModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
    NgxPaginationModule,
    StudentFileModule,
    StatisticsModule,
    ReactiveFormsModule,
    ReviewsModule,
    ClassroomModule,
    LoginModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
