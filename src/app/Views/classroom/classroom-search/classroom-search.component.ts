import { Component, OnInit } from '@angular/core';
import { StudentSearch } from '../../../Models/student-search';
import { StudentSearchService } from '../../../Services/student-search.service';
import { Select2OptionData } from 'ng2-select2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-search',
  templateUrl: './classroom-search.component.html',
  styleUrls: ['./classroom-search.component.scss']
})
export class ClassroomSearchComponent implements OnInit {


  students: StudentSearch [] = [];
  studentNames: string [] = [];
  nameList: Select2OptionData [] = [];
  search = ''; // id from student itself

   optionsSelect: Select2Options; // select2 options variable

  constructor(private studentSearchService: StudentSearchService,
              private route: Router) {
    this.students = this.studentSearchService.getStudentByName(this.search);
    let i = 0; // index
    for (const student of this.students) {
      this.studentNames.push(this.studentSearchService.fullName(student.FirstName, student.LastName));
      this.nameList.push({id: student.Id, text: this.studentNames[i]});
      i++;
    }
  }

  // return the stundent's id from the select
  searchQuery(q: any) {
    this.studentSearchService.getSelectedStudent(q);
    this.search = q.data[0].text;
  }

  onSubmit() {
    // TODO: add conection with the API
    // console.log(this.search);
    switch (this.studentSearchService.page) {
      case 'classroom':
        console.warn('mostrar alumno en el diagrama');
        console.log(this.studentSearchService.selectedStudent);
        break;
      case 'student':
        // console.log('student loading');
        this.route.navigate(['/layout/student', this.search]);
        break;
    }
  }

  ngOnInit() {

    this.optionsSelect = {
      theme: 'bootstrap',
      placeholder: 'Buscar Alumno...',
      allowClear: true,
      width: '100%',
    };

  }

}
