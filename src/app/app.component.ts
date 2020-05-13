import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularTest';
  showHeader = false; // if we change it to true, it works correctly, but if the user performs a debugger from the browser, it can stop loading just when the menu is displayed. Better to initialize to false.

  router:any;
  constructor( private _router: Router ) {
    this.router = _router;
  }
  ngOnInit() {}
  modifyHeader() { // This method is called many times

    console.log(this.router.url); // This prints a loot of routes on console
    if (this.router.url == '/login' || this.router.url == '/login/reset-password') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}



