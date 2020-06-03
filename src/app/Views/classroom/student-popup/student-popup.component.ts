import { Component, TemplateRef } from '@angular/core';

import { Alumne } from 'src/app/Models/alumne.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-student-popup',
  templateUrl: './student-popup.component.html',
  styleUrls: ['./student-popup.component.scss']
})
export class StudentPopupComponent  {


  public alumnes: Alumne[] = [
    { student: 'pepe', itinerary: 'Front' },
    { student: 'maria', itinerary: 'Back' },
   ];
 
 
   selectedStudent: Alumne;
 
   modalRef: BsModalRef;
 
   constructor( private modalService: BsModalService,
     ) { }
 
   openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }
 
    selectStudent(student: Alumne) {
     this.selectedStudent = student;
   }
 
   confirm() {}
   decline() {}
 }
 
