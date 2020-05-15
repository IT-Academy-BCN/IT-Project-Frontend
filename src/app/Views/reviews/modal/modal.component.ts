import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
/* ngx-bootstrap */
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/';
// revision component imports
import { ReviewStudentsService } from '../../../Services/review-students.service';
import { ExercisesReview } from '../../../Models/exercisesReview';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  @Input('data') exercises: ExercisesReview;

  modalRef: BsModalRef;
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private service: ReviewStudentsService) {
    this.dpConfig.containerClass = 'theme-default';
  }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalService._hideModal(1);
  }

  changeCorrected(state: string, date: Date) {
    if (this.exercises.state !== state || this.exercises.date !== date) {
      this.exercises.state = state;
      this.changeDate(this.exercises, date);
      this.closeModal();
    } else {
      this.closeModal();
    }

  }

  changeReviewed(state: string, date: Date) {
    if (this.exercises.state !== state || this.exercises.date !== date) {
      this.exercises.state = state;
      this.changeDate(this.exercises, date);
      this.closeModal();
    } else { }
    this.closeModal();

  }

  changeDone(state: string, date: Date) {
    if (this.exercises.state !== state || this.exercises.date !== date) {
      this.exercises.state = state;
      this.changeDate(this.exercises, date);
      this.closeModal();
    }
    this.closeModal();

  }

  changeEmpty(state: string) {
    if (this.exercises.state !== state) {
      this.exercises.state = 'No entregado';
      this.closeModal();
    } else { }
    this.closeModal();

  }

  changeDate(exercise: any, date: any) {
    if (date === '') {
      date = exercise.date;
    }
    exercise.date = new Date(date);
  }

}
