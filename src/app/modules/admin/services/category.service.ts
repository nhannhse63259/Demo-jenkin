import { Injectable } from "@angular/core";
import { AppHttpService } from "src/app/shared/services/app-http.service";
import { CreateCategoryDTO } from "../dto/category.dto";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  urlApi = "categories";
  constructor(private appHttpService: AppHttpService) {}

  getListCategories() {
    return this.appHttpService.getJson(this.urlApi);
  }

  addCategory(categoryDTO: CreateCategoryDTO) {
    return this.appHttpService.postJson(this.urlApi, categoryDTO);
  }
}
