import { Component, OnInit } from '@angular/core';
import { ProjectsData } from '../../../Services/projects.service';
import { Iterations, Itineraries, Developers, newDeveloper } from '../../../Models/projects.model';


@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {

  constructor(private projectsData: ProjectsData) { }
  public AllProjects: any[];
  public Itinerary: [];
  public Developers: [];
  public devsNum: number;
  public page: number = 1;
  public devsList: string[]=[];
  public itineraryName: string;
  public itinerationNum: number;
  public isActive: boolean = false;
  public iteration: Iterations;
  public itinerary_: Itineraries;
  public newDev: newDeveloper = new newDeveloper;
  public submitted: boolean;


  ngOnInit() {
    this.AllProjects = this.getProject();
  }

  getProject() {
    // Cuando este lista la llamada a la API
    // substituir por la respuesta
    return this.projectsData.getProjects();
  }

  getItinerary(itinerary: Itineraries) {
    this.itinerary_ = itinerary;
    this.Itinerary = itinerary.iterations;
    this.page = 2;
    this.itineraryName = itinerary.name;
  }

  getDevelopers(iteration: Iterations) {
    this.iteration = iteration;
    this.Developers = iteration.developers;
    this.itinerationNum = iteration.itNumber;
    this.page = 3;
    this.isActive = iteration.isActive;
  }

  getFrameDeveloper(iteration: Iterations) {
    console.log(iteration);
    this.devsList=[];
    for (let i = 0; i < iteration.developers.length; i++) {
      let devs: Developers = iteration.developers[i];
      this.devsList.push(devs.name+" "+devs.surname);
    }
  }

  addDeveloper() {
    this.submitted=true; 
    console.log("Name: "+this.newDev.name);
    console.log("Surname: "+this.newDev.surname);
    console.log("Active: "+this.newDev.newDev);
    this.clearSearch();
    // Cuando este lista la llamada a la API
    // llamar al servicio POST developer con el objeto newDev
  }

  clearSearch() { 
    this.newDev.name="";
    this.newDev.surname="";
    this.newDev.newDev="";
  }

  setPage(inPage: number) {
    this.page = inPage;
  }
  getMessage(message: number) {
    this.page = message;
  }

}
