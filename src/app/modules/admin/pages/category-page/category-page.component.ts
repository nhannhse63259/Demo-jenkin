import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { Router } from "@angular/router";
import { CategoryDTO } from '../../dto/category.dto';

@Component({
  selector: "app-category-page",
  templateUrl: "./category-page.component.html",
  styleUrls: ["./category-page.component.scss"]
})
export class CategoryPageComponent implements OnInit {
  categoriesList: CategoryDTO[];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.getListCategories().subscribe((res: CategoryDTO[]) => {
      this.categoriesList = res;
    })
  }
}
