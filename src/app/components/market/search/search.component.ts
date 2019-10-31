import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/models/posting';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private postingService: PostingService
  ) { }

  // searchTerm:string = "";
  
  search():void {
    this.getPostings();
   }
  postings:Posting[];  

  ngOnInit() {
    
  }

  getPostings(){
    this.postingService.getAllPostings().then((info)=>{
      this.postings = info; 
    })
  }


}
