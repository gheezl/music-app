import { Component, OnInit } from '@angular/core';

import {SearchService} from "../../services/search/search.service"

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

}
