import { Component, OnInit } from '@angular/core';
import { StudentReview } from '../../../Models/studentsReview';
import { ReviewsService } from '../../../Services/reviews.service';
import { StudentService } from '../../../Services/student.service';
import { ExerciseResponseList, Student_Review, exercisesList, Itineraries, ItineraryId } from '../../../Models/exercise.model';
import { StudentInList } from '../../../Models/student.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  selectedPage: number = 1;
  students: StudentReview[] = [];
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
            exercise_.state = statusObj[studentInSubject.status];
            exercise_.date = studentInSubject.date;
          }
        });

        exercise_.itinerary = this.itineraries[ItineraryId[exercise.itinerary]];
        student_.exercises.push(exercise_);
      });

      this.students_.push(student_);
    });
    this.allStudentsList=this.students_[0]; // solucion creada para evitar el error de carga inicial del html
  
    return this.students_;
  }


}
