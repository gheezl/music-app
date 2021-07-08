import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  data:any;
  input:any;

  constructor() { }

  ngOnInit(): void {
    const previousSongs = window.localStorage.getItem("last-search")
    const previousInput = window.localStorage.getItem("last-input")
    if (!history.state.data && previousSongs && previousInput) {
      this.data = JSON.parse(previousSongs)
      this.input = JSON.parse(previousInput)
    }
    else {
      this.data = history.state.data
      this.input = history.state.input 
      window.localStorage.setItem("last-search", JSON.stringify(history.state.data)) 
      window.localStorage.setItem("last-input", JSON.stringify(this.input))
    }
  }
}