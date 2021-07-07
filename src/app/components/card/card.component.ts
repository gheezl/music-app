import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() song:any = {};
  duration:string = "";

  constructor() { }

  ngOnInit(): void {
    let tempDuration = this.song.duration / 60
    this.duration = tempDuration.toFixed(2)
  }
}
