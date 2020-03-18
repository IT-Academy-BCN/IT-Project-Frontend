import { Component, OnInit } from '@angular/core';
/* services */
import { ExerciseService } from '../../../Services/exercise.service';
import { StudentSearchService } from '../../../Services/student-search.service';
/* ? */
//import { StudentSearchComponent} from './student-search/student-search.component';// ?
//import { Exercise } from './tables/model/exercise'; //?

@Component({
  selector: 'app-student-file-view',
  templateUrl: './student-file-view.component.html',
  styleUrls: ['./student-file-view.component.scss']
})
export class StudentFileViewComponent implements OnInit {


  constructor(private exerciseService: ExerciseService, private search: StudentSearchService) {
    search.page = 'student-file-view';
  }

  ngOnInit() {
  }

}
