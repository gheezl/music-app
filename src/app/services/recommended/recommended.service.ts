import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveSongService } from '../save-song/save-song.service';
import { SearchService } from '../search/search.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {

  constructor(private SaveSongService: SaveSongService, private SearchService: SearchService) { }

  getRecommended() {
    const savedSongs = this.SaveSongService.getSongs()
    let similarTracks: object[] = []
    savedSongs.map((song: { album: { id: any; }; }) => {
      this.SearchService.getAlbum(song.album.id).subscribe(value => {
        const location = Math.floor(Math.random() * value.tracks.data.length)
        const recommendation = value.tracks.data[location]
        recommendation.album = song.album
        similarTracks.push(recommendation);
      })
    })
    return similarTracks
  }

}