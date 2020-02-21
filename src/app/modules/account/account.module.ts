import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, ForbiddenPageComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginPageComponent, RegisterPageComponent, ForbiddenPageComponent]
})
export class AccountModule {}
