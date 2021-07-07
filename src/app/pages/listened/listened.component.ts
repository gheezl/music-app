import { Component, OnInit } from '@angular/core';
import { SaveSongService } from 'src/app/services/save-song/save-song.service';

@Component({
  selector: 'app-listened',
  templateUrl: './listened.component.html',
  styleUrls: ['./listened.component.css']
})
export class ListenedComponent implements OnInit {
  savedSongs: object[] = []

  constructor(private SaveSongService: SaveSongService) { }

  ngOnInit(): void {
    this.savedSongs = this.SaveSongService.getSongs()
  }

}
