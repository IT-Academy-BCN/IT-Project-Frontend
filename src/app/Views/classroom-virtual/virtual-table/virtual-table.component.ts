import { Component, OnInit } from '@angular/core';
import { StudentReview } from '../../../Models/studentsReview';
import { ReviewsService } from '../../../Services/reviews.service';
import { StudentService } from '../../../Services/student.service';
import { ExerciseResponseList, Student_Review, Itineraries } from '../../../Models/exercise.model';
import { StudentInList } from '../../../Models/student.model';
import { Subscription } from 'rxjs';
// translation
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-virtual-table',
  templateUrl: './virtual-table.component.html',
  styleUrls: ['./virtual-table.component.scss']
})

export class VirtualTableComponent implements OnInit {

  // TRANSLATE
  selectedLanguage = 'es';

  selectedPage: number = 1;
  students: StudentReview[] = [];
  allStudentsList: any = [];
  exer: any = [];
  allStudents: any = [];
  students_: Student_Review[];
  itineraries = Itineraries;
  itinerary;
  itinerarySelected;
  itArrayConversor = { 'Bloque común': 1, 'Front-end': 2, 'Back-end': 3, '.Net': 4, null: 0 };


  // Dropdown comunication
  clickEventsubscription: Subscription;

  constructor(
    private reviewService: ReviewsService,
    private studentsService: StudentService,
    private translateService: TranslateService,
  ) {

    // Dropdown comunication
    this.clickEventsubscription = this.reviewService.getDropdownEvent().subscribe(data => {
      this.itinerary = this.itArrayConversor[data];
      this.itinerarySelected = true;
      this.onDropdownChange(this.itinerary);
    });
    //translate
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit() {
    this.requestStudents(); // Obtenemos primero los estudiantes
  }

  onDropdownChange(value: number) {
    this.requestStudents();
    this.selectedPage = 1;
  }

  requestStudents() {
    return this.studentsService
      .getAllStudents()
      .subscribe(this.fillStudents);
  }

  fillStudents = (students: StudentInList[]) => {
    this.allStudents = students;
    this.requestExercises(); // Obtenemos los ejercicios
    return this.allStudents;
  }

  requestExercises() {
    return this.reviewService
      .getAllExercises()
      .subscribe(this.fillExercises);
  }

  fillExercises = (exercises: ExerciseResponseList[]) => {
    this.exer = exercises;
    this.bindingStudentsExercises();
    return this.exer;
  }

  bindingStudentsExercises() {

    this.students_ = [];
    this.allStudents.forEach(student => {

      let student_ = {} as Student_Review;
      student_.id = student.id;
      student_.firstName = student.firstName;
      student_.lastName = student.lastName;
      student_.lastClassAttendance = student.lastClassAttendance;
      student_.lastDeliveredExercise = student.lastDeliveredExercise;
      student_.exercises = [];

      if (parseInt(student.courses[0].itinerary.id) == this.itinerary || !this.itinerarySelected) { //all = 0
        this.students_.push(student_);
      }
    });

    this.allStudentsList = this.students_[0]; // solucion creada para evitar el error de carga inicial del html

    return this.students_;
  }


}
