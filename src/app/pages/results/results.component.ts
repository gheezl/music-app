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
    this.data = history.state.data
    this.input = history.state.input
    console.log(this.data)
  }

  ngOnChanges() {
    this.data = history.state.data
  }
}