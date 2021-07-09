import { Component, OnInit } from '@angular/core';
import { RecommendedService } from 'src/app/services/recommended/recommended.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  recommended: any;
  text: string = ""

  constructor(private RecommendedService: RecommendedService) { }

  ngOnInit(): void {
    this.recommended = this.RecommendedService.getRecommended()
    if (this.recommended) {
      this.text = "Your recommended songs."
    }
    else {
      this.text = "You have no recommendations, listen to some songs so we know what you want to hear."
    }
  }
}