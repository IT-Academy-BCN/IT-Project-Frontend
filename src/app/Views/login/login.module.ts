import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
/* components & modules  */
import { LoginRoutingModule } from './login-routing.module';
/* import { LoginComponent} from './login/login.component';
 */import { NewPasswordResetComponent} from './new-password-reset/new-password-reset.component';
import { ResetPasswordRequestComponent} from './reset-password-request/reset-password-request.component';
import { LoginViewComponent } from './login-view/login-view.component';



@NgModule({
  declarations: [NewPasswordResetComponent,ResetPasswordRequestComponent, LoginViewComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
