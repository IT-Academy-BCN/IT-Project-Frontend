import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { PerProjects } from '../project-view/model/perprojects.model';
import { ProjectsService } from './../../../Services/projects.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-project-file-view',
  templateUrl: './project-file-view.component.html',
  styleUrls: ['./project-file-view.component.scss']
})
export class ProjectFileViewComponent implements OnInit {

  modalRef: BsModalRef; // modal
  projects: PerProjects[] = [];
  oneProject: PerProjects[] = [];
  singleProject: number;

  constructor( 
    private modalService: BsModalService, // modal
    private projectsService: ProjectsService,
    private route: ActivatedRoute
    ) { }


    ngOnInit() {

      this.projectsService.get_projects()
      .subscribe((projects: PerProjects[])=>{
          //console.log(projects);
          this.projects = projects;
          });
      
      // collect idProject by the url (project-view.component.ts --> toProject())
      // and put it into a instance to refer it in HTML. 
      // Then, we can compare each project id with our project id. 
      let idProject = +this.route.snapshot.paramMap.get("id");
      this.singleProject = idProject;
      console.log(idProject);
      

    } 
  seeDevelopers(template) {
     this.modalRef = this.modalService.show(template);
   }

  closeModal() {
    this.modalService._hideModal(1);
  }

}