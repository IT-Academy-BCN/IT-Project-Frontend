import { Component, OnInit } from '@angular/core';

/* to receive id parameter from route */
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

/* services */
import { ExerciseService } from '../../../Services/exercise.service';
import { StudentSearchService } from '../../../Services/student-search.service';
/* ? */
// import { StudentSearchComponent} from './student-search/student-search.component';// ?
// import { Exercise } from './tables/model/exercise'; //?

@Component({
  selector: 'app-student-file-view',
  templateUrl: './student-file-view.component.html',
  styleUrls: ['./student-file-view.component.scss']
})
export class StudentFileViewComponent implements OnInit {

    public student;

  constructor(
    private exerciseService: ExerciseService,
    private search: StudentSearchService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    search.page = 'students';
  }

  ngOnInit() {
    this.student = this.route.snapshot.params.id;

    /* if student service returned an observable, we could do something like this:
    this.student = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.studentService.getStudent(params.get('id'))
      )
    ); */
  }

}
