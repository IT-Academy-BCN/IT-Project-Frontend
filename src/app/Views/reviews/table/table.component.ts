import { Component, OnInit } from '@angular/core';
import { StudentReview } from '../../../Models/studentsReview';
import { ReviewsService } from '../../../Services/reviews.service';
import { StudentService } from '../../../Services/student.service';
<<<<<<< HEAD
import { ExerciseResponseList, Student_Review, exercisesList, Itineraries, ItineraryId } from '../../../Models/exercise.model';
import { StudentInList } from '../../../Models/student.model';
=======
import { ExerciseResponseList, Student_Review, exercisesList, Itineraries, ItineraryId} from '../../../Models/exercise.model';
import { StudentInList } from '../../../Models/student.model';
import { Subscription } from 'rxjs';
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  selectedPage: number = 1;
  students: StudentReview[] = [];
<<<<<<< HEAD
  allStudentsList: any=[];
  exer: any = [];
  allStudents: any = [];
  public students_:Student_Review[] = [];
  private itineraries = Itineraries;

  constructor(private reviewService: ReviewsService,
    private studentsService: StudentService) { }

  ngOnInit() {
    // this.students = this.reviewStudents.getStudentsReview(); // Funcionamiento default //

    this.requestStudents(); // Obtenemos primero los estudiantes
  }

=======
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

  constructor(private reviewService: ReviewsService,
    private studentsService: StudentService) {

    // Dropdown comunication
    this.clickEventsubscription = this.reviewService.getDropdownEvent().subscribe(data => {
      this.itinerary = this.itArrayConversor[data];
      this.itinerarySelected = true;
      this.onDropdownChange(this.itinerary);
    });
  }

  ngOnInit() {
    this.requestStudents(); // Obtenemos primero los estudiantes
  }

  onDropdownChange(value: number) {
    this.requestStudents();
    this.selectedPage = 1;
  }

>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
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

    // Se puede implementar una solucion mas elegante uniformando la db con la respuesta que da en la consulta a ejercicios (ver exercise.model --> Statuses)
    let statusObj = { "FINISHED": "Corregido", "": "No entregado", "To define1": "Entregado", "To define2": "A revisar", "To define3": "" }
<<<<<<< HEAD

=======
    this.students_ = [];
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
    this.allStudents.forEach(student => {

      let student_ = {} as Student_Review;
      student_.id = student.id;
      student_.firstName = student.firstName;
      student_.lastName = student.lastName;
      student_.exercises = [];
      this.exer.forEach(exercise => {

        let exercise_ = {} as exercisesList;
        exercise_.id = exercise.id;
        exercise_.name = exercise.name;
        exercise_.state = "No entregado";
        exercise_.date = new Date();
        exercise.students.forEach(studentInSubject => {

          if (student.id == studentInSubject.id) {  //This must be done with the IDs when API response will be modified
<<<<<<< HEAD
            exercise_.state = statusObj[studentInSubject.statusExercise];
=======
            exercise_.state = statusObj[studentInSubject.status];
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
            exercise_.date = studentInSubject.date;
          }
        });

        exercise_.itinerary = this.itineraries[ItineraryId[exercise.itinerary]];
<<<<<<< HEAD
        student_.exercises.push(exercise_);
      });

      this.students_.push(student_);
    });
    this.allStudentsList=this.students_[0]; // solucion creada para evitar el error de carga inicial del html
  
=======
        if (exercise.itinerary == this.itinerary || !this.itinerarySelected) { //all = 0
          student_.exercises.push(exercise_);
        }
      });
      if (parseInt(student.courses[0].itinerary.id) == this.itinerary || !this.itinerarySelected) { //all = 0
        this.students_.push(student_);
      }
    });

    this.allStudentsList = this.students_[0]; // solucion creada para evitar el error de carga inicial del html

>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
    return this.students_;
  }


}
