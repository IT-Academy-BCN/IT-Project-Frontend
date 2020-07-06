import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  baseUrl = 'http://217.76.158.200:8090/api/stats'
  constructor(private http: HttpClient) { }
    //get students per itinerary
    public get_itineraryStudents () {
      return this.http.get(this.baseUrl+'/per-itinerary/');
    }
    public get_genderStudents () {
      return this.http.get(this.baseUrl+'/per-gender/');
    }
    public get_absenceStudents () {
      return this.http.get(this.baseUrl+'/per-absence/');
    }
    public get_almostDoneStudents () {
      return this.http.get(this.baseUrl+'/finish-in-x-days/14/');
    }
    //get itineraries deliveries
    public get_itinerariesDeliveries () {
      return this.http.get(this.baseUrl+'/itineraries-deliveries/');
    }
    //get students deliveries
    public get_studentsDeliveries () {
      return this.http.get(this.baseUrl+'/students-deliveries/');
    }
}
