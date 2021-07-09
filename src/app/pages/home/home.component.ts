import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputToggle:boolean = false

  constructor() {}

  ngOnInit(): void {
  }

  toggleInput() {
    this.inputToggle = !this.inputToggle
  }

  hideInput(newValue:boolean) {
    this.inputToggle = newValue
  }

}
