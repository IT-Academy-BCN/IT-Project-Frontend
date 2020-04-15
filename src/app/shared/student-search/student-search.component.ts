import { Component, OnInit, Input } from '@angular/core';
import { StudentSearch } from '../../Models/student-search';
import { StudentSearchService } from '../../Services/student-search.service';
import { Select2OptionData } from 'ng2-select2';
import { Router } from '@angular/router';
// import { Student } from 'src/app/Models/student.model';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {

  public selectedStudent: string = '';
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
    this.fillStudentsData();
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
        console.log(this.studentSearchService.selectedStudent);
        break;
      case 'students':
        this.router.navigate(['/student', this.selectedStudent]);
        break;
    }
    // console says "Form submission canceled because the form is not connected"
  }

  private fillStudentsData() {
    const students: StudentSearch[] = this.studentSearchService.students;
    for (const student of students) {
      this.studentsData.push({
        id: student.Id,
        text: `${student.FirstName} ${student.LastName}`
      });
    }
  }
}
