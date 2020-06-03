import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ReviewsService } from '../../../Services/reviews.service';
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242

@Component({
  selector: 'app-reviews-it-search',
  templateUrl: './reviews-it-search.component.html',
  styleUrls: ['./reviews-it-search.component.scss']
})
export class ReviewsItSearchComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

=======
  constructor(private ReviewsService:ReviewsService) { }

  ngOnInit() {
  }
  selectedItemChanged(value: string){
    this.ReviewsService.sendDropdownOption(value);
  }
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
}
