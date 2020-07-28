import { Component, OnInit } from '@angular/core';
import { StudentReview } from '../../../Models/studentsReview';
import { ReviewsService } from '../../../Services/reviews.service';
import { StudentService } from '../../../Services/student.service';
import { ExerciseResponseList, Student_Review, exercisesList, Itineraries, ItineraryId} from '../../../Models/exercise.model';
import { StudentInList } from '../../../Models/student.model';
import { Subscription } from 'rxjs';
// translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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
  
  // TRANSLATE
  selectedLanguage = 'es';

  // Dropdown comunication
  clickEventsubscription: Subscription;

  constructor(
    private reviewService: ReviewsService,
    private studentsService: StudentService,    
    private translateService: TranslateService) {

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
  
  //translate
  toogleLanguage(lang: string){
    this.translateService.use(lang);
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

    // Se puede implementar una solucion mas elegante uniformando la db con la respuesta que da en la consulta a ejercicios (ver exercise.model --> Statuses)
    let statusObj = { "FINISHED": "Corregido", "": "No entregado", "To define1": "Entregado", "To define2": "A revisar", "To define3": "" }
    this.students_ = [];
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
        if (exercise.itinerary == this.itinerary || !this.itinerarySelected) { //all = 0
          student_.exercises.push(exercise_);
        }
      });
      if (parseInt(student.courses[0].itinerary.id) == this.itinerary || !this.itinerarySelected) { //all = 0
        this.students_.push(student_);
      }
    });

    this.allStudentsList = this.students_[0]; // solucion creada para evitar el error de carga inicial del html
    console.log(this.students_);
    return this.students_;
  }

  public updateExerciseStatus(data: ExerciseResponseList) {       
    console.log(data);
    
    this.reviewService.updateExerciseStatus(data); 
    
    /* const data = this.exercises.find(exercise => exercise.id === updateData.exerciseId); 
    data.statusId = data.status;                           
    data.statusName = this.statuses[StatusId[updated.statusId]]; 
    data.statusDate = data.date;  */

  }
}
