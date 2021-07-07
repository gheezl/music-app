import { Component, Input, OnInit } from '@angular/core';
import { SaveSongService } from 'src/app/services/save-song/save-song.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() song:any = {};
  duration:string = "";

  constructor(private SaveSongService: SaveSongService) { }

  ngOnInit(): void {
    let tempDuration = this.song.duration / 60
    this.duration = tempDuration.toFixed(2)
  }

  onPlay() {
    this.SaveSongService.saveSong(this.song)
  }
}
