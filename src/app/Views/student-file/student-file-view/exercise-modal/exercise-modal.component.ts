import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
/* ngx-bootsrap */
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/';
/* own */
import { Statuses, ExerciseStatusId, ExerciseStatusName } from '../../../../Models/exercise.model';
import { StatusUpdate } from '../exercises/exercises.component';

@Component({
  selector: 'app-exercise-modal',
  templateUrl: './exercise-modal.component.html',
  styleUrls: ['./exercise-modal.component.scss']
})
export class ExerciseModalComponent implements OnInit {

  @Input() exercise: string;
  @Output() statusUpdate = new EventEmitter<StatusUpdate>();
  public statusToDisplay = Statuses;
  public statusList: { id: ExerciseStatusId; name: keyof typeof ExerciseStatusId; }[] = [];

  @ViewChild('statusUpdateModal', {static: false}) public modal: ModalDirective;
  public dpConfig: Partial<BsDatepickerConfig>;

  constructor() { }

  ngOnInit() {
    this.configDatepicker();
    this.fillStatuses();
  }

  public updateStatus(newStatus: ExerciseStatusId, date: string) {
    if (!date) {
      alert('Elija una fecha');
    } else {
      this.statusUpdate.emit({
        exerciseId: this.exercise,
        status: newStatus,
        date: new Date(date)
      });
      this.modal.hide();
    }
  }

  private fillStatuses() {
    for (const value in ExerciseStatusId) {
      if (!isNaN(Number(value))) {
        const name = ExerciseStatusId[value] as ExerciseStatusName;
        const id = ExerciseStatusId[name];
        this.statusList.push({id, name});
      }
    }
  }

  private configDatepicker() {
    this.dpConfig = new BsDatepickerConfig();
    this.dpConfig.containerClass = 'theme-default';
  }
}
