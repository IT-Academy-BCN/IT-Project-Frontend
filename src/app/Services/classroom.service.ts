import { Injectable } from '@angular/core';

@Injectable()
export class ClassroomService {
  // datos (falsos) para obtener posición
  private students: StudentSeat[] = [
    {
        name: 'FABRIZIO',
        lastname: 'PERALTA',
        itinerary: 'Front End',
        position: 0,
        gender: 'M'

    },
    {
        name: 'PEDRO',
        lastname: 'GUZMAN',
        itinerary: 'Back End',
        position: 1,
        gender: 'M'
    },
    {
        name: 'SOMEONE',
        lastname: 'ANYONE',
        itinerary: 'Front End',
        position: 2,
        gender: 'F'
    },
    {
        name: 'XAVI',
        lastname: 'SANCHEZ',
        itinerary: '.Net',
        position: 3,
        gender: 'M'
    },
    {
        name: 'FERNANDEZ',
        lastname: 'MÓNICA',
        itinerary: 'Back End',
        position: 4,
        gender: 'F'
    },
    {
        name: 'LEON',
        lastname: 'EL REY',
        itinerary: 'Front End',
        position: 5,
        gender: 'M'
    },
    {
        name: 'FERNANDO',
        lastname: 'CALVO',
        itinerary: '.Net',
        position: 6,
        gender: 'M'
    },
    {
        name: 'PEPE',
        lastname: 'URIZAR',
        itinerary: 'Back End',
        position: 7,
        gender: 'M'
    },
    {
        name: 'JOANA',
        lastname: 'ARIAS',
        itinerary: 'Front End',
        position: 8,
        gender: 'F'
    },
    {
        name: 'JAVIER',
        lastname: 'BOLEA',
        itinerary: 'Front End',
        position: 9,
        gender: 'M'
    },
    {
        name: 'MIRIAM',
        lastname: 'SABATER',
        itinerary: '.Net',
        position: 10,
        gender: 'F'
    },
    {
        name: 'GILBERTO',
        lastname: 'GIL',
        itinerary: 'Back End',
        position: 11,
        gender: 'M'
    },
    {
        name: 'MERCEDES',
        lastname: 'ROVIRA',
        itinerary: 'Back End',
        position: 12,
        gender: 'F'
    },
    {
        name: 'JORDI',
        lastname: 'PLA',
        itinerary: 'Front End',
        position: 13,
        gender: 'M'
    },
    {
        name: 'GERARD',
        lastname: 'SABATE',
        itinerary: '.Net',
        position: 14,
        gender: 'M'
    },
    {
        name: 'MIKE',
        lastname: 'SMITH',
        itinerary: '.Net',
        position: 15,
        gender: 'M'
    },
    {
        name: 'CELIA',
        lastname: 'LOPEZ',
        itinerary: 'Front End',
        position: 16,
        gender: 'F'
    },
    {
        name: 'CECILIA',
        lastname: 'VIDAL',
        itinerary: 'Front End',
        position: 17,
        gender: 'F'
    },
    {
        name: 'JUAN',
        lastname: 'CORTES',
        itinerary: 'Front End',
        position: 18,
        gender: 'M'
    },
    {
        name: 'JAIME',
        lastname: 'ALVAREZ',
        itinerary: 'Back End',
        position: 19,
        gender: 'M'
    },
    {
        name: 'ELIANA',
        lastname: 'BECERRA',
        itinerary: 'Front End',
        position: 20,
        gender: 'F'
    },
    {
        name: 'MARTA',
        lastname: 'FABREGAS',
        itinerary: 'Front End',
        position: 21,
        gender: 'F'
    },
    {
        name: 'ROBERTO',
        lastname: 'SANCHEZ',
        itinerary: 'Front End',
        position: 22,
        gender: 'M'
    },
    {
        name: 'JUAN',
        lastname: 'BLASCO',
        itinerary: 'Front End',
        position: 23,
        gender: 'M'
    },
    {
        name: 'MARIELA',
        lastname: 'LESCANO',
        itinerary: 'Front End',
        position: 24,
        gender: 'F'
    },
    {
        name: 'DANIEL',
        lastname: 'FERNANDEZ',
        itinerary: 'Front End',
        position: 25,
        gender: 'M'
    },
    {
        name: 'ALFONSO',
        lastname: 'SAURA',
        itinerary: 'Front End',
        position: 26,
        gender: 'M'
    },
    {
        name: 'LUIS',
        lastname: 'SASTRE',
        itinerary: 'Front End',
        position: 27,
        gender: 'M'
    },
    {
        name: 'DARIO',
        lastname: 'CASTRO',
        itinerary: 'Back End',
        position: 28,
        gender: 'M'
    },
    {
        name: 'DANIEL',
        lastname: 'SUAREZ',
        itinerary: 'Back End',
        position: 29,
        gender: 'M'
    },
    {
        name: 'JOAN',
        lastname: 'CANALS',
        itinerary: '.Net',
        position: 30,
        gender: 'M'
    },
    {
        name: 'PEPE',
        lastname: 'MUÑOZ',
        itinerary: '.Net',
        position: 31,
        gender: 'M'
    },
    {
        name: 'RODRIGO',
        lastname: 'PASCUAL',
        itinerary: '.Net',
        position: 32,
        gender: 'M'
    },
    {
        name: 'JAUME',
        lastname: 'MARGALEF',
        itinerary: '.Net',
        position: 33,
        gender: 'M'
    },
    {
        name: 'JUANA',
        lastname: 'GONZALEZ',
        itinerary: 'Front End',
        position: 34,
        gender: 'F'
    },
    {
        name: 'FABIO',
        lastname: 'PEÑA',
        itinerary: 'Front End',
        position: 35,
        gender: 'M'
    },
    {
        name: 'ORIOL',
        lastname: 'BONET',
        itinerary: 'Front End',
        position: 36,
        gender: 'M'
    },
    {
        name: 'CAMILO',
        lastname: 'VERGES',
        itinerary: 'Back End',
        position: 37,
        gender: 'M'
    },
    {
        name: 'SERGI',
        lastname: 'VALLVERDU',
        itinerary: 'Back End',
        position: 38,
        gender: 'M'
    },
    {
        name: 'SILVIA',
        lastname: 'MORALES',
        itinerary: 'Back End',
        position: 39,
        gender: 'F'
    },
    {
        name: 'ANA',
        lastname: 'ASENSIO',
        itinerary: 'Back End',
        position: 40,
        gender: 'F'
    },
    {
        name: 'LUCIANA',
        lastname: 'CASTRO',
        itinerary: 'Back End',
        position: 41,
        gender: 'F'
    },
    {
        name: 'PEDRO',
        lastname: 'PAZOS',
        itinerary: 'Back End',
        position: 42,
        gender: 'M'
    },
    {
        name: 'ALEJANDRO',
        lastname: 'CASTRO',
        itinerary: 'Back End',
        position: 43,
        gender: 'M'
    },
    {
        name: 'ARTURO',
        lastname: 'CAMPO',
        itinerary: 'Back End',
        position: 44,
        gender: 'M'
    },
    {
        name: 'VIRGINIA',
        lastname: 'FERNANDEZ',
        itinerary: 'Back End',
        position: 45,
        gender: 'F'
    },
    {
        name: 'ANA',
        lastname: 'GIL',
        itinerary: 'Front End',
        position: 46,
        gender: 'F'
    },
    {
        name: 'JOAN',
        lastname: 'MUÑOZ',
        itinerary: 'Front End',
        position: 47,
        gender: 'M'
    },
    {
        name: 'JONATAN',
        lastname: 'RODRIGUEZ',
        itinerary: 'Front End',
        position: 48,
        gender: 'F'
    },
    {
        name: 'CAMPEADOR',
        lastname: 'CID',
        itinerary: 'Front End',
        position: 49,
        gender: 'M'
    },
    {
        name: 'MARIO',
        lastname: 'GARCIA',
        itinerary: 'Front End',
        position: 50,
        gender: 'M'
    },
    {
        name: 'EVA',
        lastname: 'PEREZ',
        itinerary: 'Back End',
        position: 51,
        gender: 'F'
    },
    {
        name: '',
        lastname: '',
        itinerary: '',
        position: 52,
        gender: ''
    },
    {
        name: '',
        lastname: '',
        itinerary: '',
        position: 53,
        gender: ''
    },
    {
        name: 'LEON',
        lastname: 'SANCHEZ',
        itinerary: 'Back End',
        position: 54,
        gender: 'M'
    },
    {
        name: 'ANGELA',
        lastname: 'TORRES',
        itinerary: 'Back End',
        position: 55,
        gender: 'F'
    },
    {
        name: 'EMILIO',
        lastname: 'PAZOS',
        itinerary: 'Back End',
        position: 56,
        gender: 'M'
    },
    {
        name: '',
        lastname: '',
        itinerary: '',
        position: 57,
        gender: ''
    },
    {
        name: 'ALBERT',
        lastname: 'RIERA',
        itinerary: 'Front End',
        position: 58,
        gender: 'M'
    },
    {
        name: 'MIGUEL',
        lastname: 'ARCE',
        itinerary: 'Front End',
        position: 59,
        gender: 'F'
    }

];

  constructor() {
    console.log('Service ready!');
   }
   getStudentSeat(): StudentSeat[] {
    return this.students;
}

  //adding random days (or%) in the course

  addRandomDays(): StudentSeat[] {
    for (let each of this.students){
      each.timeInAcademy = Math.floor(Math.random() * 100)
    }
    return this.students;
  }
}
// corregir interface con datos reales
export interface StudentSeat {
  name: string;
  lastname: string;
  itinerary: string;
  position: number;
  gender: string;
  //pruebas J
  timeInAcademy?: number;
}
