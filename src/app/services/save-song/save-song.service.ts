import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveSongService {

  constructor() { }

  saveSong(song: object) {
    let savedSongs = window.localStorage.getItem("saved-song")
    if (savedSongs) {
      let placeholder: object[] = JSON.parse(savedSongs)
      window.localStorage.setItem("saved-song", JSON.stringify([...placeholder, song]))
    }
    else {
      window.localStorage.setItem('saved-song', JSON.stringify([song])); 
    }
  }
}
