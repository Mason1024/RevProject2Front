import { Component, OnInit, Output } from '@angular/core';
import { Posting } from 'src/app/models/posting';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(  ) { }

  @Output() searchVal:string;

  postings:Posting[];  

  ngOnInit() {
    
  }
}
