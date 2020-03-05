import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFileModule } from './Views/student-file/student-file.module';
import { StatisticsModule } from './Views/statistics/statistics.module';
import { ReviewsModule } from './Views/reviews/reviews.module';
import { ClassroomModule } from './Views/classroom/classroom.module';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginModule } from './Views/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentFileModule,
    StatisticsModule,
    ReviewsModule,
    ClassroomModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
