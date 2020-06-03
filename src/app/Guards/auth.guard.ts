import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { LoginViewComponent } from '../Views/login/login-view/login-view.component';
//import { LoginModule } from '../Views/login/login.module';
import { LoginService } from '../Services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  //constructor(private loginViewComponent: LoginViewComponent, private router: Router) {}

  //constructor(private loginModule: LoginModule, private router: Router) {}

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(!this.loginService.loading) {
         this.router.navigate (['/login']);
      }

      return this.loginService.loading;
  }

}
