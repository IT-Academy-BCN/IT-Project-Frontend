import { Component, TemplateRef, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';
/* ngx-bootstrap */
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/';
// revision component imports
import { ReviewStudentsService } from '../../../Services/review-students.service';
import { ExercisesReview } from '../../../Models/exercisesReview';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { StatusUpdateData, StatusId, StatusName,Statuses } from 'src/app/Models/exercise.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  @Input('data') exercises: ExercisesReview;
  @Output() statusUpdate = new EventEmitter<StatusUpdateData>();

  public statusToDisplay = Statuses;
  public statusList: { id: StatusId; name: StatusName; }[] = [];
  public exerciseId: string;
  public statusId: StatusId;
  public studentId: string;


  modalRef: BsModalRef;
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private exerciseService: ExerciseService,
              private service: ReviewStudentsService) {
    this.dpConfig.containerClass = 'theme-default';
  }

  ngOnInit() {
    this.fillStatuses()
  }
  private fillStatuses() {
    for (const value in StatusId) {
      if (!isNaN(Number(value))) {
        const name = StatusId[value] as StatusName;
        const id = StatusId[name];
        this.statusList.push({id, name});
      }
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show( template,
      Object.assign({}, { class: 'modal-lg' }) );
    }


    closeModal() {
      this.modalService._hideModal(1);
    }

    changeDate(exercise: any, date: any) {
      if (date === '') {
        date = exercise.date;
      }
      exercise.date = new Date(date);
    }

    changeExerciseState(newStatus: StatusId){
      //Implemented to change css styles on change status
      switch (newStatus) {
        case 1:
          this.exercises.state = 'No Entregado'
          break;
        case 2:
          this.exercises.state = 'Entregado'
          break;
        case 3:
          this.exercises.state = 'A revisar'
          break;
        case 4:
          this.exercises.state = 'Corregido'
          break;
        case 5:
          this.exercises.state = 'Finalizado'
          break;
      }
    };

    updateStatus( newStatus: StatusId, date: Date ){

      this.changeExerciseState( newStatus );
      let updateTemp: StatusUpdateData;

      if(this.exercises.userExerciseId === undefined){
        console.log("aqui se tendría que hacer la llamada POST");
          // this.exerciseService.postExerciseUndefined( updateTemp );

      } else {
        if(this.exercises.date !== date) {
          updateTemp = {
            studentId: this.studentId,
            exerciseId: this.exercises.userExerciseId.toString() ,
            status: newStatus,
            date: date
          }

          this.changeDate(this.exercises, date);

          this.exerciseService.updateExerciseStatus( updateTemp );
          this.closeModal();
        }
      }


    }


  // changeChecked(state: string, date: Date) {
  //   if (this.exercises.state !== state || this.exercises.date !== date) {
  //     this.exercises.state = state;
  //     this.changeDate(this.exercises, date);

  //     this.updateStatus(4, date)
  //     this.closeModal();
  //   } else {
  //     this.closeModal();
  //   }

  // }

  // changeReceived(state: string, date: Date) {
  //   if (this.exercises.state !== state || this.exercises.date !== date) {
  //     this.exercises.state = state;
  //     this.changeDate(this.exercises, date);

  //     this.updateStatus(3, date)
  //     this.closeModal();
  //   } else { }
  //   this.closeModal();
  // }

  // changeTurnedIn(state: string, date: Date) {
  //   if (this.exercises.state !== state || this.exercises.date !== date) {
  //     this.exercises.state = state;
  //     this.changeDate(this.exercises, date);

  //     this.updateStatus(2, date)
  //     this.closeModal();
  //   }
  //   this.closeModal();
  // }

  // changeNotTurnedIn(state: string, date: Date) {
  //   if (this.exercises.state !== state) {
  //     this.exercises.state = 'No entregado';
  //     this.updateStatus(1, date)
  //     this.closeModal();
  //   } else { }
  //   this.closeModal();
  // }


}
