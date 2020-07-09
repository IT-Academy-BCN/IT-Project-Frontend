import { Component, OnInit } from '@angular/core';
// translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-classroom-virtual-view',
  templateUrl: './classroom-virtual-view.component.html',
  styleUrls: ['./classroom-virtual-view.component.scss']
})
export class ClassroomVirtualViewComponent implements OnInit {

  // TRANSLATE
  selectedLanguage = 'es';

  constructor(
    private translateService: TranslateService
  ) {
    //translate
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit() {
  }

}
