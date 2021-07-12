import { Component, OnInit } from '@angular/core';
import { SaveSongService } from 'src/app/services/save-song/save-song.service';

@Component({
  selector: 'app-listened',
  templateUrl: './listened.component.html',
  styleUrls: ['./listened.component.css']
})
export class ListenedComponent implements OnInit {
  savedSongs: object[] = []
  text:string = ""

  constructor(private SaveSongService: SaveSongService) { }

  ngOnInit(): void {
    let placeholder = this.SaveSongService.getSongs()
    if (placeholder) {
      this.savedSongs = placeholder
      this.text = "All the songs you have listened to."
    }
    else {
      this.text = "You haven't listened to any songs yet."
    }
  }

  clearSongs() {
    this.SaveSongService.deleteSongs()
    this.savedSongs = []
    this.text = "You haven't listened to any songs yet."
  }
}