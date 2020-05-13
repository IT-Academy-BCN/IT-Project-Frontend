import { Component, OnInit, Input, TemplateRef, SimpleChange} from '@angular/core';
import { ClassroomService, StudentSeat, StudentInfo } from '../../../Services/classroom.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-classroom-seats',
  templateUrl: './classroom-seats.component.html',
  styleUrls: ['./classroom-seats.component.scss']
})
export class ClassroomSeatsComponent implements OnInit {


  /* this will be deleted once the seat position is asociated to the API data */
  students: StudentSeat[] = [];
  modalRef: BsModalRef; // modal

  /* this is the good one! */
  public studentsFP: any = [];
  public itineraries: any = [];
  selectedStudent: StudentInfo;

  // search made by user
  @Input() userSearchSelected: string;

  constructor( public classroomService: ClassroomService,
    private modalService: BsModalService // modal
  ) {
  }

  ngOnInit() {

    // get the API data
    this.classroomService.getInfoDb()
    .subscribe(
      (data) => { // Success
        this.studentsFP = data; // gets all Students info
        this.studentsPerItinerary(); // to display total of students in footer circle
        console.log(this.studentsFP);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  // this looks for changes coming from the user search
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let aux;

    let existe = this.studentsFP.find(element => element.id === this.userSearchSelected);
    if (existe != undefined){

      aux = document.getElementById(this.userSearchSelected);
      aux.classList.add('selectedBackground');
    }

  }

  // students per itinerary to show on "footer" circles
  studentsPerItinerary() {
    let numStudentsPerItinerary = {};
    this.studentsFP.forEach(function(element){
      let nameItinerary= element.courses[0].itinerary.name;
      numStudentsPerItinerary[nameItinerary] = (numStudentsPerItinerary[nameItinerary] || 0) + 1;
    });
    return this.itineraries = Object.entries(numStudentsPerItinerary);
  }


  studentPopup(student: StudentInfo) {
    this.selectedStudent = student;
    console.log(`Position: --DEFINIR POSICION---` + student);
  }

  // método temporal para visualizar student por consola
  selectStudent(student: StudentInfo) {
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
    if(this.selectedStudent.firstName == '') {
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




