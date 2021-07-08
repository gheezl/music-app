import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveSongService {
  
  constructor() { }

  saveSong(song: object) {
    const savedSongs = window.localStorage.getItem("saved-song")
    if (savedSongs) {
      const placeholder: object[] = JSON.parse(savedSongs)
      window.localStorage.setItem("saved-song", JSON.stringify([...placeholder, song]))
    }
    else {
      window.localStorage.setItem('saved-song', JSON.stringify([song])); 
    }
  }

  getSongs() {
    const savedSongs = window.localStorage.getItem("saved-song")
    if (savedSongs) {
      const parsedSongs = JSON.parse(savedSongs)
      return parsedSongs.reverse()
    }
  }

  deleteSongs() {
    localStorage.removeItem("saved-song")
  }
}
