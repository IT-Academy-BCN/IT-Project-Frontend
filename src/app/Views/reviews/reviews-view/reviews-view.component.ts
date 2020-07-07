import { Component, OnInit } from '@angular/core';
// translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews-view',
  templateUrl: './reviews-view.component.html',
  styleUrls: ['./reviews-view.component.scss']
})
export class ReviewsViewComponent implements OnInit {

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
