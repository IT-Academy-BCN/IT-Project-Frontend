import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"],
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern("(?=.*?[0-9]).{3,6}"),

          // Expresion regular para usar con password real
          // (?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}
        ],
      ], // min 8, max 16 characters / at least: 1 uppercase - 1 lowercase - 1 number - 1 special character
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop there if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    fetch("http://217.76.158.200:8090/api/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(this.loginForm.value),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        if (response.success == true) {
          Swal.fire({ text: "Good job! You are logged in!" });

          this.router.navigateByUrl("/classroom-view");
        } else {
          Swal.fire("Oops!, Something went wrong!");
        }
      });
  }

  // forgotPassword() {
  //   this.router.navigate( ['/login', 'reset-password'] );
  // }
}
