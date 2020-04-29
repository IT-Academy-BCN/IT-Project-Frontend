import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
/* ngx-bootsrap */
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/';
/* own */
import { Statuses, StatusId, StatusName, StatusUpdateData } from '../../../../Models/exercise.model';

@Component({
  selector: 'app-exercise-modal',
  templateUrl: './exercise-modal.component.html',
  styleUrls: ['./exercise-modal.component.scss']
})
export class ExerciseModalComponent implements OnInit {

  @Output() statusUpdate = new EventEmitter<StatusUpdateData>();
  public statusToDisplay = Statuses;
  public statusList: { id: StatusId; name: StatusName; }[] = [];
  public exerciseId: string;
  public statusId: StatusId;
  public studentId: string;

  @ViewChild('statusUpdateModal', {static: false}) public modal: ModalDirective;
  public dpConfig: Partial<BsDatepickerConfig>;

  constructor() { }

  ngOnInit() {
    this.configDatepicker();
    this.fillStatuses();
  }

  public updateStatus(newStatus: StatusId, date: string) {
    if (!date) {
      alert('Elija una fecha');
    } else {
      this.statusUpdate.emit({
        studentId: this.studentId,
        exerciseId: this.exerciseId,
        status: newStatus,
        date: new Date(date),
      });
      this.modal.hide();
    }
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

  private configDatepicker() {
    this.dpConfig = new BsDatepickerConfig();
    this.dpConfig.containerClass = 'theme-default';
  }
}
