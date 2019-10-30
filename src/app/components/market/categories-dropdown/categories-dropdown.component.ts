import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';

/**
 * @title Categories
 */
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
  antiques:Category = new Category(4, "antiques");
  appliances:Category = new Category(5, "appliances");
  artsAndCrafts:Category = new Category(6, "arts & crafts");
  autoParts:Category = new Category(7, "auto parts");
  bicycleParts:Category = new Category(8, "bicycle parts");
  bicycles:Category = new Category(9, "bicycles");
  booksAndMagazines:Category = new Category(10, "books & magazines");
  carsAndTrucks:Category = new Category(11, "cars & trucks");
  cellPhones:Category = new Category(12, "cell phones");
  clothingAndAccessories:Category = new Category(13, "clothing & accessories");
  collectibles:Category = new Category(14, "collectibles");
  computerParts:Category = new Category(15, "computer parts");
  computers:Category = new Category(16, "computers");
  electronics:Category = new Category(17, "electronics");
  healthAndBeauty:Category = new Category(18, "health and beauty");
  musicalInstruments:Category = new Category(19, "musical instruments");
  tools:Category = new Category(20, "tools");
  toysAndGames:Category = new Category(21, "toys & games");
  videoGames:Category = new Category(22, "video games");

  categories:Array<Category> = [
    this.furniture,
    this.vehicleParts,
    this.misc,
    this.antiques,
    this.appliances,
    this.artsAndCrafts,
    this.autoParts,
    this.bicycleParts,
    this.bicycles,
    this.booksAndMagazines,
    this.carsAndTrucks,
    this.cellPhones,
    this.clothingAndAccessories,
    this.collectibles,
    this.computerParts,
    this.computers,
    this.electronics,
    this.healthAndBeauty,
    this.musicalInstruments,
    this.tools,
    this.toysAndGames,
    this.videoGames
  ];

}
