export class CreateCategoryDTO {
  type: string;
}

export class CategoryDTO {
  id: number;
  type: string;
  scraps: Scrap[];
}

export class Scrap {
  id: number;
  name: string;
}
