import { Component, Input, OnInit, Output } from '@angular/core';

import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input:string = ""
  @Output() results:any

  constructor(private SearchService:SearchService) { }

  ngOnInit(): void {
  }

  onEnter() {
    if (this.input.length > 0) {
      this.SearchService.getSearchResults(this.input).subscribe(value => this.results=value.data)
    }
  }
}
  