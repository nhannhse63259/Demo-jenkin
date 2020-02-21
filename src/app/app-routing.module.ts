import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./shared/utils/auth.guard";
import { LoginPageComponent } from "./modules/account/pages/login-page/login-page.component";
import { ForbiddenPageComponent } from './modules/account/pages/forbidden-page/forbidden-page.component';
import { RegisterPageComponent } from './modules/account/pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent
  },
  {
    path: "forbidden",
    component: ForbiddenPageComponent
  },
  {
    path: "admin",
    loadChildren: "./modules/admin/admin.module#AdminModule",
    canActivate: [AuthGuard],
    data: { roles: [1] }
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
