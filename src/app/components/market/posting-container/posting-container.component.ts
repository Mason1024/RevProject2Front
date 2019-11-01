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
 
  private _catVal:string="";
  @Input() set catVal(value:string){
    this._catVal=value;
    this.getCatPostings();
  }

  private _searchVal:string="";
  @Input() set searchVal(value:string){
    this._searchVal=value.toLocaleLowerCase();
  }

  ngOnInit() {
    this.getPostings();
  }

  getPostings(){
    this.postingService.getAllPostings().then((info)=>{
      this.postings = info; 
    })
  }

  getCatPostings(){
    if(this._catVal=="All"){
      this.getPostings();
    }else{
      this.postingService.getAllPostingsByCategory(this._catVal).then((info)=>{
        this.postings = info; 
      })
    }
    
  }

  filterPostings(posting_collection:Posting[]): Posting[]{
      return posting_collection.filter(i => i.title.toLocaleLowerCase().includes(this._searchVal));
  }

}
