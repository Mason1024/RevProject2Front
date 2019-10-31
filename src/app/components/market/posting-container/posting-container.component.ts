import { Component, OnInit, Input } from '@angular/core';
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

  @Input() searchVal:string;
  @Input() catVal:string;

  ngOnInit() {
    this.getPostings();
  }

  getPostings(){
    this.postingService.getAllPostings().then((info)=>{
      this.postings = info; 
    })
  }

}
