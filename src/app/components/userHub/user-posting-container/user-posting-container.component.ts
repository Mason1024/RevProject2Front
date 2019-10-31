import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../../services/posting.service';
import { CurrentUserService } from '../../../services/current-user.service';
import { Posting } from '../../../models/posting';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-posting-container',
  templateUrl: './user-posting-container.component.html',
  styleUrls: ['./user-posting-container.component.css']
})
export class UserPostingContainerComponent implements OnInit {

  constructor(
    private postingService: PostingService,
    private currentUser:CurrentUserService
  ) { }

  user:User;
  postings:Posting[];  

  ngOnInit() {
    this.currentUser.currentUser$.subscribe(data =>{ 
      this.user = data
      console.log(this.user);
    });
    this.getPostings();
  }

  getPostings(){
    this.postingService.getAllPostingsByUserId(this.user.id).then((info)=>{
      this.postings = info; 
    })
  }

}
