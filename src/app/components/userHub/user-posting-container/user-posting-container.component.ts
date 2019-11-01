import { Component, OnInit, Input } from '@angular/core';
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

  user:User=null;
  postings:Posting[];  

  @Input() set newPosting(value:any){
    this.getPostings();
  }

  ngOnInit() {
    this.currentUser.currentUser$.subscribe(data =>{ 
      this.user = data
    });
    this.getPostings();
  }

  getPostings(){
    if(this.user){
      this.postingService.getAllPostingsByUserId(this.user.id).then((info)=>{
        this.postings = info; 
      })
    }
  }

  deletePost(id:number){
    this.postingService.deletePosting(id).then(()=>{
      this.getPostings();
    })
  }
}
