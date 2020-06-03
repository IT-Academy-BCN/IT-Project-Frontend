import { Component, TemplateRef, OnInit } from '@angular/core';
import { PerAbsence } from './model/perabsence.model';
import { PerDayAbsence } from './model/perdayabsence.model';
import { StatisticsService } from './../../../Services/statistics.service';
import { AbsencesService } from './../../../Services/absences.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  modalRef: BsModalRef; // modal

  constructor( private statisticsService: StatisticsService,
    private absencesService: AbsencesService,
    private modalService: BsModalService // modal
  ) {
  }


  tooManyAbsences:PerAbsence[] = [];
  daysAbsences:PerDayAbsence[] = [];
  maxAbsences:Number = 12;
  studentAbsence:string = "";

  ngOnInit() {

    this.statisticsService.get_absenceStudents()
    .subscribe((tooManyAbsences: PerAbsence[])=>{
        console.log(tooManyAbsences);
        this.tooManyAbsences = tooManyAbsences;
        });

    this.absencesService.get_absenceStudents()
    .subscribe((daysAbsences: PerDayAbsence[])=>{
        console.log(daysAbsences);
        this.daysAbsences = daysAbsences;
        });

  }

  clickDateAbsences(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalService._hideModal(1);
  }

  consultAbsence(absence){
    //console.log(absence.firstName + " " + absence.lastName + " " + absence.absences);
    //(<HTMLInputElement>document.getElementById("info")).innerHTML += absence.firstName;
    this.studentAbsence = absence.id;
    console.log(this.studentAbsence);
  }


}
