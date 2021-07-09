import { Component, OnInit } from '@angular/core';
import { RecommendedService } from 'src/app/services/recommended/recommended.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  recommended: object[] = []
  text: string = "Your recommended songs."

  constructor(private RecommendedService: RecommendedService) { }

  ngOnInit(): void {
    this.recommended = this.RecommendedService.getRecommended()
    console.log(this.recommended)
  }
}