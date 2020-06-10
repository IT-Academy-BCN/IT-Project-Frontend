import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
   
  ngOnInit(): void {}

}
