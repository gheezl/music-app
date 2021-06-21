import { Component, Input, OnInit } from '@angular/core';

import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input:string = ""

  constructor(private SearchService:SearchService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.input)
  }

  onEnter() {
    if (this.input.length > 0) {
      this.SearchService.getSearchResults(this.input)
    } 
  }
}
  