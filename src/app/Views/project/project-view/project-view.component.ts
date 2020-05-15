import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerProjects } from './model/perprojects.model';
import { ProjectsService } from './../../../Services/projects.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  projects:PerProjects[] = [];

  ngOnInit() {

    this.projectsService.get_projects()
    .subscribe((projects: PerProjects[])=>{
        //console.log(projects);
        this.projects = projects;
        });
  }

  toProject(project){
      this.id = project.id;
      //console.log(project.name);
      //console.log(project.id);
      this.router.navigate(['/project-view', this.id]);
  }

}
