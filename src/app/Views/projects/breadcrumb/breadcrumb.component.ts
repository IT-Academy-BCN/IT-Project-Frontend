import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {

  @Input('data1') page: number;
  @Input('data2') itineraryName: string;
  @Input('data3') itinerationNum: string;
  @Output() pageOut = new EventEmitter<number>();


  constructor() {}

  ngOnInit() {
  }

  setPage(inPage: number) {
    this.page = inPage;
    this.pageOut.emit(inPage);
  }
  
}
