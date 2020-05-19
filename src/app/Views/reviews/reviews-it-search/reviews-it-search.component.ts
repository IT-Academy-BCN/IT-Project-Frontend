import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../Services/reviews.service';

@Component({
  selector: 'app-reviews-it-search',
  templateUrl: './reviews-it-search.component.html',
  styleUrls: ['./reviews-it-search.component.scss']
})
export class ReviewsItSearchComponent implements OnInit {

  constructor(private ReviewsService:ReviewsService) { }

  ngOnInit() {
  }
  selectedItemChanged(value: string){
    this.ReviewsService.sendDropdownOption(value);
  }
}
