import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../Services/reviews.service';
// translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews-it-search',
  templateUrl: './reviews-it-search.component.html',
  styleUrls: ['./reviews-it-search.component.scss']
})
export class ReviewsItSearchComponent implements OnInit {

  // TRANSLATE
  selectedLanguage = 'es';
  
  constructor(
    private ReviewsService:ReviewsService,
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

  ngOnInit() {
  }
  selectedItemChanged(value: string){
    this.ReviewsService.sendDropdownOption(value);
  }
}
