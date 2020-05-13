import { Component, OnInit } from '@angular/core';
import { PerProjects } from './model/perprojects.model';
import { ProjectsService } from './../../../Services/projects.service';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService
  ) { }

  projects:PerProjects[] = [];

  ngOnInit() {

    this.projectsService.get_projects()
    .subscribe((projects: PerProjects[])=>{
        //console.log(projects);
        this.projects = projects;
        });
  }

}
