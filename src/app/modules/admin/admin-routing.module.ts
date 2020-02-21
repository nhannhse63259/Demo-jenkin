import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { CategoryPageComponent } from "./pages/category-page/category-page.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";

const projectRoutes: Routes = [
  {
    path: "",
    component: AdminPageComponent,
    children: [
      {
        path: "category",
        component: CategoryPageComponent
      },
      {
        path: "user",
        component: UserPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
