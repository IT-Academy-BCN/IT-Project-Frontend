import { Component, TemplateRef, OnInit } from '@angular/core';
import { PerAbsence } from './model/perabsence.model';
import { PerDayAbsence } from './model/perdayabsence.model';
import { Almostdone } from './model/almostdone.model';
import { StatisticsService } from './../../../Services/statistics.service';
import { AbsencesService } from './../../../Services/absences.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  modalRef: BsModalRef; // modal


    // TRANSLATE
    selectedLanguage = 'es';

  constructor( private statisticsService: StatisticsService,
    private absencesService: AbsencesService,
    private modalService: BsModalService, // modal
    private translateService: TranslateService,
    ) {
            //translate
            this.translateService.setDefaultLang(this.selectedLanguage);
            this.translateService.use(this.selectedLanguage);
  }
      
     //translate
     toogleLanguage(lang: string){
      this.translateService.use(lang);
     }

  tooManyAbsences:PerAbsence[] = [];
  daysAbsences:PerDayAbsence[] = [];
  maxAbsences:Number = 12;
  studentAbsence:string = "";
  almostDone:Almostdone[] = [];
  almostDoneDate: Date[] = [];
  endingInFiveDays:number = 5;

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
    
    this.statisticsService.get_almostDoneStudents()
        .subscribe((almostDone: Almostdone[])=>{
          console.log(almostDone);
          console.log(almostDone.length);
          this.almostDone = almostDone;
        for (let i = 0; i < almostDone.length; i++) {
        almostDone[i].finishDate = new Date();
        almostDone[i].finishDate.setDate(almostDone[i].finishDate.getDate() + almostDone[i].days);    
        }
        })

  

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
