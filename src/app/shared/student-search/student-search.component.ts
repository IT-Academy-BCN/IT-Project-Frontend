import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import { StudentSearch } from '../../Models/student-search';
import { Student, StudentInList } from '../../Models/student.model';
import { StudentSearchService } from '../../Services/student-search.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {

  public selectedStudent: string = '';

    // documentation for select2: https://github.com/NejcZdovc/ng2-select2
  public studentsData: Select2OptionData[] = [];
  public select2options: Select2Options = {
    theme: 'bootstrap',
    placeholder: 'Buscar Alumno...',
    allowClear: true,
    width: '100%',
  };

  @Input() origin: 'classroom' | 'students';

  constructor(
    private studentSearchService: StudentSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchStudentsData();
  }

  updateSelection(selection) {
    this.selectedStudent = selection.value;
  }

  onSubmit() {
    // TODO: add conection with the API
    // console.log(this.search);
    switch (this.origin) {
      case 'classroom':
        console.warn('mostrar alumno en el diagrama');
        // console.log(this.studentSearchService.selectedStudent);
        break;
      case 'students':
        this.router.navigate(['/student', this.selectedStudent]);
        break;
    }
    // console says "Form submission canceled because the form is not connected"
  }

  private fetchStudentsData() {
    this.studentSearchService
      .getAllStudents()
      .subscribe(this.fillStudentsData, this.displayErrorMessage);
  }
    // this is a callback, must remain in arrow form so that this.studentsData is not undefined
    // or this.studentsData can be passed as function parameter
  private fillStudentsData = (students: StudentInList[]) => {
    const studentsData = [];
    for (const student of students) {
      const studentData: Select2OptionData = {
        id: student.id,
        text: `${student.firstName} ${student.lastName}`,
      };
      studentsData.push(studentData);
    }
    this.studentsData = studentsData;
      // suboptimal solution, students should be pushed directly into this.studentsData
      // but that way select2 does not update after receiving API data, can't figure out why
      // side effect of this: first item in array is automatically selected
  }
    // should be improved
  private displayErrorMessage(error) {
    alert(error);
  }
}
