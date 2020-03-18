import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from '../../../Services/student-search.service';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.scss']
})
export class ClassroomViewComponent implements OnInit {

   constructor(private search: StudentSearchService) {
     search.page = 'classroom-view';
   }
  ngOnInit() {
  }

}
