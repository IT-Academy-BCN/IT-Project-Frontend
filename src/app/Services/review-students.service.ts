import { Injectable } from '@angular/core';
import { StudentReview } from '../Models/studentsReview';
import { ExercisesReview } from '../Models/exercisesReview';

@Injectable({
  providedIn: 'root'
})

export class ReviewStudentsService {

  private students: StudentReview[] = [
    {
      id: 0,
      firstName: 'Clint',
      lastName: 'Eastwood',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 1,
      firstName: 'Joaquin',
      lastName: 'Phoenix',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Back-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Back-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Back-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Back-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Back-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Back-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Back-End'
        }]
    },
    {
      id: 2,
      firstName: 'Leonardo',
      lastName: 'DiCaprio',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Net'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Net'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Net'
        }]
    },
    {
      id: 3,
      firstName: 'Morgan',
      lastName: 'Freeman',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Net'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Net'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'No entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Net'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Net'
        }]
    },
    {
      id: 0,
      firstName: 'Emma',
      lastName: 'Stone',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Meryl',
      lastName: 'Streep',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Robert',
      lastName: 'De Niro',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Angelina',
      lastName: 'Jolie',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'A revisar',
          date: new Date(2020, 1, 17),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'Corregido',
          date: new Date(2020, 1, 18),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Matt',
      lastName: 'Damon',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Jessica',
      lastName: 'Chastain',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'Entregado',
          date: new Date(2020, 1, 19),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Brad',
      lastName: 'Pitt',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'A revisar',
          date: new Date(20, 1, 16),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Colin',
      lastName: 'Farrell',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Kaya',
      lastName: 'Scodelario',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Nicholas',
      lastName: 'Hoult',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'Corregido',
          date: new Date(2020, 1, 13),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Halle',
      lastName: 'Berry',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Choi',
      lastName: 'Min Sik',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Olivia',
      lastName: 'Wilde',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Keira',
      lastName: 'Knightley',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Samuel',
      lastName: 'L Jackson',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Mark',
      lastName: 'Wolverg',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Ethan',
      lastName: 'Hawke',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'No entregado',
          date: new Date(2020, 1, 15),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        }]
    },
    {
      id: 0,
      firstName: 'Jessica',
      lastName: 'Alba',
      exercises: [
        {
          id: 0,
          name: 'Github',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Bloque Común'
        },
        {
          id: 1,
          name: 'SQL-1',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 2,
          name: 'SQL-2',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 3,
          name: 'Examen',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Bloque Común'
        },
        {
          id: 4,
          name: 'Proyecto F1',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        },
        {
          id: 5,
          name: 'Javascript básico',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 6,
          name: 'Letras repetidas',
          state: 'Corregido',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 7,
          name: 'Proyecto F2',
          state: 'A revisar',
          date: new Date(2020, 1, 18),
          itinerary: 'Front-End'
        },
        {
          id: 8,
          name: 'Vehículos',
          state: 'A revisar',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 9,
          name: 'Cohetes',
          state: 'Entregado',
          date: new Date(2020, 1, 10),
          itinerary: 'Front-End'
        },
        {
          id: 10,
          name: 'Examen',
          state: 'No entregado',
          date: new Date(),
          itinerary: 'Front-End'
        }]
    },
  ];

  exercises: ExercisesReview[] = [];

  constructor() { }

  getStudentsReview(): StudentReview[] {
    return this.students;
  }
}
