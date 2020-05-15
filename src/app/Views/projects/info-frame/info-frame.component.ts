import { Component, OnInit, Input } from '@angular/core';
import { Iterations, Itineraries } from '../../../Models/projects.model';

@Component({
  selector: 'app-info-frame',
  templateUrl: './info-frame.component.html',
  styleUrls: ['./info-frame.component.scss']
})

export class InfoFrameComponent implements OnInit {

  @Input('it') iteration: Iterations;
  @Input('proj') itineraries_: Itineraries;
  @Input('page') page: number;

  constructor() {}

  ngOnInit() {
    this.iteration= new Iterations;
    this.itineraries_= new Itineraries;
  }

}
