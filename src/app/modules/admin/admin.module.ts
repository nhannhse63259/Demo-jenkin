import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

@NgModule({
  declarations: [AdminPageComponent, CategoryPageComponent, UserPageComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
