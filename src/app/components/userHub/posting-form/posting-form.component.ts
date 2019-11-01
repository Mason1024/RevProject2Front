import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostingService } from 'src/app/services/posting.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { User } from 'src/app/models/user';
import { Posting } from 'src/app/models/posting';

@Component({
  selector: 'app-posting-form',
  templateUrl: './posting-form.component.html',
  styleUrls: ['./posting-form.component.css']
})
export class PostingFormComponent implements OnInit {

  user:User = null;

  postTitle:string;
  postDesc:string;
  postCat:string;
  postLocation:string;
  postEndDate:number;
  postImg:string;


  constructor(
    private categoryService:CategoryService, 
    private postingService:PostingService, 
    private userService:CurrentUserService 
    ) { }

  ngOnInit() {
    // for(let i = 0; i < this.categoryService.getAllCategories().length; i++)
    // document.getElementById("categoriesDropdown").innerHTML +=
    // "<option id='" + this.categoryService.getAllCategories()[i] + "'>" + 
    // this.categoryService.getAllCategories()[i] + "</option>";

    this.userService.currentUser$.subscribe(data =>{ 
      this.user = data
    });
  }

  createPost(){
   let post:Posting = new Posting(
      0, 
      this.user, 
      this.postDesc, 
      this.postCat, 
      this.postLocation,
      0,
      this.postEndDate, 
      this.postTitle, 
      this.postImg);
    this.postingService.createPosting(post);
  }
}