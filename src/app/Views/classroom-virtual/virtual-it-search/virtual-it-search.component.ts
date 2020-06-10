import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../Services/reviews.service';

@Component({
  selector: 'app-virtual-it-search',
  templateUrl: './virtual-it-search.component.html',
  styleUrls: ['./virtual-it-search.component.scss']
})
export class VirtualItSearchComponent implements OnInit {

  constructor(private ReviewsService:ReviewsService) { }

  ngOnInit() { }

  selectedItemChanged(value: string){
    this.ReviewsService.sendDropdownOption(value);
  }
}
