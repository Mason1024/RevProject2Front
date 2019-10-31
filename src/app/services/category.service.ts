import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categories:Array<string> = [
    "Furniture",
    "Vehicle Parts",
    "miscellaneous",
    "antiques",
    "appliances",
    "arts & crafts",
    "auto parts",
    "bicycle parts",
    "bicycles",
    "books & magazines",
    "cars & trucks",
    "cell phones",
    "clothing & accessories",
    "collectibles",
    "computer parts",
    "computers",
    "electronics",
    "health and beauty",
    "musical instruments",
    "tools",
    "toys & games",
    "video games"
  ];



  getAllCategories():Array<string>{
    return this.categories;
  }


}
