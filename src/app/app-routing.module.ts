import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
/* components */
import { LoginViewComponent } from "./Views/login/login-view/login-view.component";
import { ResetPasswordRequestComponent } from "./Views/login/reset-password-request/reset-password-request.component";
import { NewPasswordResetComponent } from "./Views/login/new-password-reset/new-password-reset.component";
import { NotFoundComponent } from './Components/not-found/not-found.component';

//import {ClassroomModule } from './Views/classroom/classroom.module';

const routes: Routes = [
  { path: "login", component: LoginViewComponent },
  { path: "login/reset-password", component: ResetPasswordRequestComponent },
  { path: "login/new-password", component: NewPasswordResetComponent },
  //{ path: "**", pathMatch: "full", redirectTo: "login" },   
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
