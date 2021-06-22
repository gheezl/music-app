import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inputToggle:boolean = false
  results:any;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.results)
  }

  toggleInput() {
    this.inputToggle = !this.inputToggle
  }

  addsResults(events:any) {
    console.log(events)
    this.results = events
  }

  hideInput(newValue:boolean) {
    this.inputToggle = newValue
  }

}
