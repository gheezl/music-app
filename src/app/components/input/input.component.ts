import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router"

import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input:string = "";
  results:any;
  @Output() inputToggle:any = new EventEmitter()
 
  constructor(private SearchService:SearchService, private router: Router) { }

  ngOnInit(): void {}

  async onEnter() {
    if (this.input.length > 0) {
      this.SearchService.getSearchResults(this.input).subscribe(async (value) => {
        await this.inputToggle.emit(false)
        // this.results = value.data
        this.router.navigate(['/Search-Results'], {state: {data: value.data}})
      })
    }
  }
}