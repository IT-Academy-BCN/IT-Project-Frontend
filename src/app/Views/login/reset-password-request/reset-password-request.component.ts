import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.scss']
})
export class ResetPasswordRequestComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop there if form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }
    // SUCCESS
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetPasswordForm.value));
  }

}


