import { Component, OnInit } from "@angular/core";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "../../Models/user.model";
import { Router } from "@angular/router";
import { UserService } from "../../Services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  user: User = new User();

  constructor(private router: Router, private userService: UserService) {}

  // logout () {
  //   let menu = <HTMLAnchorElement>document.getElementById('menu');
  //   let login = <HTMLAnchorElement>document.getElementById('login');

  //   login.classList.remove("d-none");
  //   menu.classList.add("d-none");

  //   //TODO: añadir lógica de logout
  // }

  logout() {
    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {}
}
