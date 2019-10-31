import { Component, OnInit } from '@angular/core';
import { Posting } from '../../../models/posting';
import { PostingService } from '../../../services/posting.service';

@Component({
  selector: 'app-posting-container',
  templateUrl: './posting-container.component.html',
  styleUrls: ['./posting-container.component.css']
})
export class PostingContainerComponent implements OnInit {

  constructor(
    private postingService: PostingService
  ) { }
  
  postings:Posting[];  

  ngOnInit() {
    this.getPostings();
  }

  getPostings(){
    this.postingService.getAllPostings().then((info)=>{
      this.postings = info; 
    })
  }

}
