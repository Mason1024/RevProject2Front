import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostingService } from 'src/app/services/posting.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { User } from 'src/app/models/user';
import { Posting } from 'src/app/models/posting';

@Component({
  selector: 'app-user-hub',
  templateUrl: './user-hub.component.html',
  styleUrls: ['./user-hub.component.css']
})
export class UserHubComponent implements OnInit {

  constructor(
    private categoryService:CategoryService, 
    private postingService:PostingService, 
    private userService:CurrentUserService 
  ) { }

  user:User=null;
  categories:Array<string>;

  postForm:string="hidden";

  postTitle:string;
  postDesc:string;
  postCat:string;
  postLocation:string;
  postEndDate:string;
  postImg:string;

  postingSubmitted:boolean=false;

  ngOnInit() {
    this.userService.currentUser$.subscribe(data =>{ 
      this.user = data
    });

    this.categories = this.categoryService.getAllCategories();
  }

  showPost(){
    this.postForm="visible";
  }
  cancelPost(){
    this.postForm="hidden";
    this.postTitle=undefined;
    this.postDesc=undefined;
    this.postCat=undefined;
    this.postLocation=undefined;
    this.postEndDate=undefined;
    this.postImg=undefined;
  }
  submitPost(){
    let post:Posting = new Posting(
      0, 
      this.user, 
      this.postDesc, 
      this.postCat, 
      this.postLocation,
      0,
      (+new Date(this.postEndDate)), 
      this.postTitle, 
      this.postImg);

      this.postingService.createPosting(post).then((post:Posting)=>{
        if(post){
          this.postingSubmitted=(!this.postingSubmitted); //flip the value so child an detect update
        }
      });
  }
}
