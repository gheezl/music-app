import { Component, OnInit } from '@angular/core';
import {PreviousUrlService} from "../../services/url/previous-url.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private PreviousUrlService: PreviousUrlService, private router: Router) {}

  ngOnInit(): void {
    if (this.PreviousUrlService.getPreviousUrl() == "/Search-Results") {
      this.router.navigate(['/Search-Results'], {state: {data: history.state.data, input: history.state.input}}) 
    }
  }

}
