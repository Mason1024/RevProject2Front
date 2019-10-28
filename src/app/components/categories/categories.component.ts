import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor() { }

  furniture:Category = new Category(1, "Furniture");
  vehicleParts:Category = new Category(2, "Vehicle Parts");
  misc:Category = new Category(3, "miscellaneous");

  categories:Array<Category> = [
    this.furniture,
    this.vehicleParts,
    this.misc
  ];

}
