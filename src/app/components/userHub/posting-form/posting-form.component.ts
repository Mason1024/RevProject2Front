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

  constructor(private categoryService:CategoryService, 
    private postingService:PostingService, 
    private userService:CurrentUserService ) { }

  ngOnInit() {
    for(let i = 0; i < this.categoryService.getAllCategories().length; i++)
    document.getElementById("categoriesDropdown").innerHTML +=
    "<option id='" + this.categoryService.getAllCategories()[i] + "'>" + 
    this.categoryService.getAllCategories()[i] + "</option>";

    this.userService.currentUser$.subscribe(data =>{ 
      this.user = data
    });
  }

  createPost(){
   let post:Posting = new Posting(0, this.user, 
    document.getElementById("description").value, 
    document.getElementById("categoriesDropdown").value, 
    document.getElementById("location").value,
    0,
    document.getElementById("endDate").value, 
    document.getElementById("title").value, 
    "");
    this.postingService.createPosting(post);
  }


}


// id:number;
// user:number;
// description:string;
// category:string;
// location:string;
// initDate:number;
// endDate:number;