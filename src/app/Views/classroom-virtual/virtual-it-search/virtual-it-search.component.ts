import { Component, OnInit } from "@angular/core";
import { ReviewsService } from "../../../Services/reviews.service";
// translation
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-virtual-it-search",
  templateUrl: "./virtual-it-search.component.html",
  styleUrls: ["./virtual-it-search.component.scss"],
})
export class VirtualItSearchComponent implements OnInit {
  // TRANSLATE
  selectedLanguage = "es";

  constructor(
    private ReviewsService: ReviewsService,
    private translateService: TranslateService
  ) {
    //translate
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit() {}

  selectedItemChanged(value: string) {
    this.ReviewsService.sendDropdownOption(value);
  }
}
