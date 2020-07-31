import { Component, OnInit } from "@angular/core";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "../../Models/user.model";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { UiStyleToggleService } from 'src/app/Services/ui-style-toggle.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  user: User = new User();

  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  firstName = this.currentUser.firstName;
  lastName = this.currentUser.lastName;
  
  // TRANSLATE
  selectedLanguage = 'es';

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private uiStyleToggleService: UiStyleToggleService
    ) {
      //translate
      this.translateService.setDefaultLang(this.selectedLanguage);
      this.translateService.use(this.selectedLanguage);
    }

    //translate
    toogleLanguage(lang: string){
      this.translateService.use(lang);
    }

  // logout () {
  //   let menu = <HTMLAnchorElement>document.getElementById('menu');
  //   let login = <HTMLAnchorElement>document.getElementById('login');

  //   login.classList.remove("d-none");
  //   menu.classList.add("d-none");

  //   //TODO: añadir lógica de logout
  // }

  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void { }

 //night mode
  toggleTheme() {
    this.uiStyleToggleService.toggle();
  }
  

}
