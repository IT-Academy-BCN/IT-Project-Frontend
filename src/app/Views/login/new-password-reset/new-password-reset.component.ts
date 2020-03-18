import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-new-password-reset',
  templateUrl: './new-password-reset.component.html',
  styleUrls: ['./new-password-reset.component.scss']
})
export class NewPasswordResetComponent implements OnInit {

  newPasswordResetForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.newPasswordResetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}')]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.newPasswordResetForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop there if form is invalid
    if (this.newPasswordResetForm.invalid) {
      return;
    }
    // SUCCESS
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newPasswordResetForm.value));
  }

}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  };
}
