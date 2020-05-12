import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-file-view',
  templateUrl: './project-file-view.component.html',
  styleUrls: ['./project-file-view.component.scss']
})
export class ProjectFileViewComponent implements OnInit {

  modalRef: BsModalRef; // modal
  allProjects: any = [];

  constructor( 
    private modalService: BsModalService // modal
    ) { }

  ngOnInit() {
  } 

  seeDevelopers(template) {
     this.modalRef = this.modalService.show(template);
   }

  closeModal() {
    this.modalService._hideModal(1);
  }

}
