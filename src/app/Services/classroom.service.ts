import { Student } from './../Models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ClassroomService {
  baseUrl = 'http://217.76.158.200:8090/api/students';

  constructor(private http: HttpClient) {}

  public studentsFP: StudentInfo[];
  public itinerary: Itinerary[];

  getInfoDb() {
    return this.http.get<StudentInfo[]>(this.baseUrl).pipe(map(res => this.studentsFP = res));
  }

  // pending: assign real time remaining in ITAcademy to this loading
  addRandomDaysFP(): StudentInfo[] {
    for (let each of this.studentsFP){
      each.timeInAcademy = Math.floor(Math.random() * 100);
    }
    return this.studentsFP;
  }

}


// this is here temporarily, until solving the seat position
export interface StudentSeat {
  name: string;
  lastname: string;
  itinerary: string;
  position: number;
  gender: string;
  //pruebas J
  timeInAcademy?: number;
}


/* FP */
export interface StudentInfo {
  id: string; // creo que no se necesita
  firstName: string;
  lastName: string;
  seat: object;
  courses: {
    [key: number ]: Courses
  };
  timeInAcademy?: number;
}

export interface Courses {
  id: number;
  endDate: null;
  itinerary: Itinerary;
}

export interface Itinerary {
  id: number;
  name: string;
}



