import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  data:any;

  constructor() { }

  ngOnInit(): void {
    this.data = history.state.data
  }

}
