import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itinerary } from '../Views/project/project-view/model/perprojects.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl = 'http://217.76.158.200:8090/api/projects'

  constructor(private http: HttpClient) { }
    
  //get projects
    public get_projects () {
      return this.http.get(this.baseUrl);
    }
    // get itenary by Id
    public getItineraryById(id: number) {
      const apiEndPoint = 'http://217.76.158.200:8090/api/projects';
      const url = `${apiEndPoint}/${id}`;
      //console.log("URL DE LA BASE CRIDADA " + url);
      return this.http
        .get<Itinerary[]>(url);
    }
}
