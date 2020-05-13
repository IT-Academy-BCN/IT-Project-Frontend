import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PerProjects } from '../model/perprojects.model';
import { ProjectsService } from './../../../Services/projects.service';

@Component({
  selector: 'app-project-file-view',
  templateUrl: './project-file-view.component.html',
  styleUrls: ['./project-file-view.component.scss']
})
export class ProjectFileViewComponent implements OnInit {

  modalRef: BsModalRef; // modal
  allProjects: any = [];

  constructor( 
    private modalService: BsModalService, // modal
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

  seeDevelopers(template) {
     this.modalRef = this.modalService.show(template);
   }

  closeModal() {
    this.modalService._hideModal(1);
  }

}
