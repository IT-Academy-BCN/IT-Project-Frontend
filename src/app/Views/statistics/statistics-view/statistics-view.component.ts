import { Component, OnInit } from '@angular/core';
/* models */
import { STUDENTS, MockStudent } from '../../../Models/studentsMock';
// translation
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss']
})
export class StatisticsViewComponent implements OnInit {
  students = STUDENTS;
  selectedStudent: MockStudent;
  
  // TRANSLATE
  selectedLanguage = 'es';

  constructor(
    private translateService: TranslateService,
  ) { 
    //translate
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
   }
   
   //translate
   toogleLanguage(lang: string){
    this.translateService.use(lang);
   }

  ngOnInit(): void {
    document.getElementById("studentsItem").classList.remove("active");
  }

}
