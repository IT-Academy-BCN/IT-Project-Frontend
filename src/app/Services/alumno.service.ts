import { Alumno } from './../Views/statistics/tables/model/alumno';
import { Injectable } from '@angular/core';

const ALUMNOS: Alumno[] = [
  new Alumno( 'Pepín', 'Gálvez', 12, new Date(2019, 11, 14), new Date(2019, 11, 14), 'Peping@falso.es', 'Front-end'),
  new Alumno('Honorio', 'Martín', 8, new Date(2019, 11, 14), new Date(2019, 11, 20), 'HM21@falso.es', 'Back-end' ),
  new Alumno('Carlota', 'Cifuentes', 6, new Date(2019, 11, 14), new Date(2019, 11, 20), 'Titulodelacifuentes@falso.es', 'Back-end'),
  new Alumno('Anna', 'Roca', 10, new Date(2019, 11, 14), new Date(2019, 11, 18), 'arriquitaun@falso.es', '.Net'),
  new Alumno('Fausto', 'Giró', 14, new Date(2019, 11, 14), new Date(2019, 11, 20), 'Faustino@falso.es', 'Back-end'),
  new Alumno('José Ramón', 'Morales', 11, new Date(2019, 11, 14), new Date(2020, 11, 20), 'pimpam@falso.es', 'Front-end'),
  new Alumno('Hernesto', 'Kaizer', 2, new Date(2019, 11, 14), new Date(2020, 3, 21), 'lol@falso.es', 'Front-end'),
  new Alumno('Marcós', 'Andrés', 0, new Date(2019, 11, 14), new Date(2019, 11, 26), 'mandres34@falso.es', 'Back-end'),
  new Alumno('Sebastián', 'Cortés', 17, new Date(2019, 11, 14), new Date(2019, 11, 20), 'Sebas@falso.es', '.Net'),
  new Alumno('Martin', 'Held', 4, new Date(2019, 11, 14), new Date(2019, 11, 24), 'Loquito94@falso.es', 'Back-end'),
  new Alumno('Gemma', 'Capmany', 7, new Date(2019, 11, 14), new Date(2020, 11, 18), 'GemmaCapmany@falso.es', 'Front-end')
];

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  getByAbsences(faltas: number): Alumno[] {
    return ALUMNOS.filter(x => x.absences >= faltas);
  }
  getTwooWeeksToEnd(): Alumno[] {
    return ALUMNOS.filter(x => {
      const diffMillisecons = Math.abs(x.limitDate.getTime() - new Date().getTime());
      const diffDays = Math.ceil(diffMillisecons / (1000 * 3600 * 24));
      console.log(diffDays);
      return diffDays <= 14;
    });
  }
}
