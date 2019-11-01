import { Component, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-dropdown',
  templateUrl: './categories-dropdown.component.html',
  styleUrls: ['./categories-dropdown.component.css']
})
export class CategoriesDropdownComponent implements OnInit {

  categories:Array<string>;

  @Output() catVal:string;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
  }
}
