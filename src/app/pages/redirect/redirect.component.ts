import { Component, OnInit } from '@angular/core';
import {PreviousUrlService} from "../../services/url/previous-url.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private PreviousUrlService: PreviousUrlService, private router: Router) { }

  ngOnInit(): void {
    // if (this.PreviousUrlService.getPreviousUrl() == "/Search-Results") {
      this.router.navigate(['/Search-Results'], {state: {data: history.state.data, input: history.state.input}}) 
    // }
  }

}
