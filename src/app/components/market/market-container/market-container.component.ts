import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-market-container',
  templateUrl: './market-container.component.html',
  styleUrls: ['./market-container.component.css']
})
export class MarketContainerComponent implements OnInit {

  searchTerm:string;
  category:string;

  categories:Array<string>;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getAllCategories();
  }

}
