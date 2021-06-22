import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input:string = "";
  @Output() inputToggle:any = new EventEmitter()
  @Output() results:any = new EventEmitter()
 
  constructor(private SearchService:SearchService) { }

  ngOnInit(): void {}

  async onEnter() {
    if (this.input.length > 0) {
      this.SearchService.getSearchResults(this.input).subscribe(async (value) => {
        await this.inputToggle.emit(false)
        await this.results.emit(value.data)
      })
    }
  }
}