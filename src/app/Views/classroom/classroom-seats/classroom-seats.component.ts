import { Component, OnInit, TemplateRef} from '@angular/core';
import { ClassroomService, StudentSeat, StudentInfo } from '../../../Services/classroom.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject, Observable } from 'rxjs'; // para trabajar con observables
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-classroom-seats',
  templateUrl: './classroom-seats.component.html',
  styleUrls: ['./classroom-seats.component.scss']
})
export class ClassroomSeatsComponent implements OnInit {
  /* this will be deleted once the seat position is asociated to the API data */
  students: StudentSeat[] = [];
  selectedStudent: StudentSeat;
  modalRef: BsModalRef; // modal

  /* this is the good one! */
  studentsFP: StudentInfo[] = [];

  constructor( public classroomService: ClassroomService,
    private modalService: BsModalService // modal
  ) {
  }

  ngOnInit() {

    // get the API data
    this.classroomService.getInfoDb()
    .subscribe(
      (data) => { // Success
        this.studentsFP = data;
        console.log(this.studentsFP);
      },
      (error) => {
        console.error(error);
      }
    );


    // this is here temporarily, until solving the seat position
    this.students = this.classroomService.getStudentSeat();
    this.orderStudentsPosition();

  }

  // pending to associate to StudentFP
  studentPopup(student: StudentSeat) {
    this.selectedStudent = student;
    console.log(`Position: ${student.position}`);
  }

  // método temporal para visualizar student por consola
  selectStudent(student: StudentSeat) {
    this.selectedStudent = student;
    console.log(student);
    return student;
  }

  // reordena los datos por el valor de la posición
  // para llamar a datos reales hay que verificar columna, fila, etc
  orderStudentsPosition() {
    let orderedList = this.students.sort( (a,b) => {
    if (a.position > b.position) {
      return 1;
    } else {
      return -1;
    }
    });
    console.log(orderedList);
    return orderedList;
  }



  // muestra el modal si hay contenido
  openModal(template: TemplateRef<any>) {
    if(this.selectedStudent.name == '') {
      console.log('No student to show');
    } else {
      this.modalRef = this.modalService.show(template);
    }
  }

  // funciones dentro del modal
  confirm(){ };
  decline(){ };

  // función para mostar fecha de la última actualización. Actualmente sólo una función que retorna el día y hora actuales. Deberá llamar a la API

  lastUpdated() {
    let date = new Date();
    let day = date.toLocaleDateString();
    let time = date.toLocaleTimeString();
    return day + " a las " + time
  }

}

