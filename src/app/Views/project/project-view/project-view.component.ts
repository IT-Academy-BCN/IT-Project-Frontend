import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { PerProjects } from '../../../Models/perprojects.model';
import { ProjectsService } from './../../../Services/projects.service';

=======
import { PerProjects } from './model/perprojects.model';
import { ProjectsService } from './../../../Services/projects.service';


>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

<<<<<<< HEAD
  id: number;
  private sub: any;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
=======
  constructor(
    private projectsService: ProjectsService
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
  ) { }

  projects:PerProjects[] = [];

  ngOnInit() {

    this.projectsService.get_projects()
    .subscribe((projects: PerProjects[])=>{
        //console.log(projects);
        this.projects = projects;
        });
  }

<<<<<<< HEAD
  toProject(project){
      this.id = project.id;
      //console.log(project.name);
      //console.log(project.id);
      this.router.navigate(['/project-view', this.id]);
  }

=======
>>>>>>> 00b3082015ea613c853b5edef49a5efae75bf242
}
