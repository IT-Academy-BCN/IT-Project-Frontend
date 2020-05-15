import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
