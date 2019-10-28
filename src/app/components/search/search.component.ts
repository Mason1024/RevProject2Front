import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }

  searchTerm:string = "";

  search(searchTerm:string):void {
    // Search logic
  }

}
