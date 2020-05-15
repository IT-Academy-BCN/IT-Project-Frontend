import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {
  baseUrl = 'http://217.76.158.200:8090/api/absences'

  constructor(private http: HttpClient) { }
    //get students per itinerary
    public get_absenceStudents () {
      return this.http.get(this.baseUrl);
    }
}
