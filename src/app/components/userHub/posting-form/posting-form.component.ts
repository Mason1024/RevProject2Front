import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-posting-form',
  templateUrl: './posting-form.component.html',
  styleUrls: ['./posting-form.component.css']
})
export class PostingFormComponent implements OnInit {

  constructor(private CategoryService:CategoryService ) { }

  ngOnInit() {
  }

}


// id:number;
// user:number;
// description:string;
// category:string;
// location:string;
// initDate:number;
// endDate:number;