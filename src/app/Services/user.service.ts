import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));

  constructor() {}
  firstName = this.currentUser.firstName;
  lastName = this.currentUser.lastName;
  token = this.currentUser.token;
}
