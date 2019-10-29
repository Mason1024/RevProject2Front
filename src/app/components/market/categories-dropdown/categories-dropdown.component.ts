import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-categories-dropdown',
  templateUrl: './categories-dropdown.component.html',
  styleUrls: ['./categories-dropdown.component.css']
})
export class CategoriesDropdownComponent  {

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
