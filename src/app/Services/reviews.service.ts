import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ExerciseResponse } from '../Models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  
  constructor(private http: HttpClient) { }

  public getAllExercises() {
    const apiURL = "http://217.76.158.200:8090/api/exercises";
    return this.http.get<ExerciseResponse[]>(apiURL)
      .pipe()
  };

  public getExercisesPerItinerary() {
  };
}



// interface ExerciseResponse {
//   id : number,
//   name: string;
//   itinerary: number;
//   students: studentInSubject[];
// }
// interface studentInSubject {
//   id: number;
//   studentName: string;
//   studentLastName: string;
//   statusExercise: string;
//   date: number;
// }