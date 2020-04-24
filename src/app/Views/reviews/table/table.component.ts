import { Component, OnInit } from '@angular/core';
import { StudentReview } from '../../../Models/studentsReview';
import { ReviewStudentsService } from '../../../Services/review-students.service';
import { ReviewsService } from '../../../Services/reviews.service';
import { Exercices, StudentInList, Students } from '../../../Models/exercises.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  selectedPage: number = 1;
  students: StudentReview[] = [];

  public ExerciseElement = {} as Students;
  public allExercises: any = [];
  public ExercicesArray: any = [];
  public StudentsArray: any = [];

  constructor(private reviewStudents: ReviewsService, private studentService: ReviewsService) {
  }

  ngOnInit() {
    this.fetchStudentsData();
  }

  fetchStudentsData() {
    return this.studentService
      .getAllStudents()
      .subscribe(this.fillStudentsData);
  }

  fetchExercicesData() {
    return this.reviewStudents
      .getExercises()
      .subscribe(this.fillExercicesData);
  }

  fillStudentsData = (students: StudentInList[]) => {
    this.StudentsArray = students;
    this.fetchExercicesData();
    return this.StudentsArray;
  }

  fillExercicesData = (exercices: Exercices[]) => {
    for (let key in exercices) {
      this.ExercicesArray.push(exercices[key]);
    }
    this.ExercicesReadyToDisplay();
    return this.ExercicesArray;
  }

  ExercicesReadyToDisplay() {
    let status: string="No data";
    let date: Date;
    let idSubInt: number;
    
    // Comprobar que estos son los nombres del itinerario
    let arrItinerary=["Bloque Común","Front End","Back End",".NET",""];
    let statusObj={"FINISHED": "Corregido", "No data":"No entregado", "To define1": "Entregado", "To define2":"A revisar", "To define3":""}
    for (let key in this.StudentsArray) {
      let arrSubjects: any = [];
      idSubInt = -1;
      for (let key2 in this.ExercicesArray) {
        if (this.StudentsArray[key].id in this.ExercicesArray[key2].students) {
          for (let key3 in this.ExercicesArray[key2].students) { 
            if (key3 == this.StudentsArray[key].id) {
              status = statusObj[this.ExercicesArray[key2].students[key3].statusExercise];
              date = new Date(this.ExercicesArray[key2].students[key3].date);
              idSubInt++;
            }
            
          }
          let subject = {
            id: idSubInt,
            name: this.ExercicesArray[key2].name,
            itinerary: arrItinerary[(this.ExercicesArray[key2].itinerary)-1],
            state: status,
            date: date
          };
          arrSubjects.push(subject);
        } else {
          let subject = {
            id: -1,
            name: this.ExercicesArray[key2].name,
            itinerary: arrItinerary[4],
            state: "No entregado",
            date: new Date()
          };
          arrSubjects.push(subject);
        }
      }
      this.ExerciseElement = {
        id: this.StudentsArray[key].id,
        firstName: this.StudentsArray[key].firstName,
        lastName: this.StudentsArray[key].lastName,
        exercises: arrSubjects
      };
      this.allExercises.push(this.ExerciseElement);
    }
    // console.log(this.allExercises);
  }

}
