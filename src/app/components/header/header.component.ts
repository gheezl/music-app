import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
