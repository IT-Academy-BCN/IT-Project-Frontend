import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../../Services/student.service';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.scss']
})
export class ClassroomViewComponent implements OnInit {

  @Input() userSearchSelected;

  constructor(private studentService: StudentService) { }
  ngOnInit() {
  }

  // userSearch gets the selection made by the user and storages it in userSearchSelected
  userSearch($event) {
    this.userSearchSelected = $event;
  }

}
