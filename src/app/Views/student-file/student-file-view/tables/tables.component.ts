import { Component, OnInit } from '@angular/core';
import { Alumno } from './model/alumno';
import { AlumnoService } from '../../../../Services/alumno.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private alumnoService: AlumnoService) { }

  tooManyAbsences: Alumno[] = [];
  almostDone: Alumno[] = [];

  ngOnInit() {
    this.tooManyAbsences = this.alumnoService.getByAbsences(8);
    this.almostDone = this.alumnoService.getTwooWeeksToEnd();
  }

}
