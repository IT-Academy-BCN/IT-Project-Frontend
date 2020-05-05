import { Component, OnInit } from '@angular/core';
import { StudentReview } from '../../../Models/studentsReview';
import { ReviewStudentsService } from '../../../Services/review-students.service';
import { ReviewsService } from '../../../Services/reviews.service';
import { StudentService } from '../../../Services/student.service';
import { ExerciseResponse } from '../../../Models/exercise.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  selectedPage: number = 1;
  students: StudentReview[] = [];
  xxx;
  allStudents = [];
  // rows: number;
  // cols: number;

  constructor(private reviewStudents: ReviewStudentsService, 
              private reviewService: ReviewsService,
              private studentsService: StudentService) {}

  ngOnInit() {
    this.fillTable();
    this.students = this.reviewStudents.getStudentsReview();
  }

  private fillTable(){
    this.reviewService.getAllExercises()
    .subscribe(this.blendData);
  }

  private blendData(exercises: ExerciseResponse[]){
    console.log("HELLO");
    console.log(exercises);
  }
      

}
