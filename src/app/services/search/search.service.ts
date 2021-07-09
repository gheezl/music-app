import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  headers:Object = {
    headers: new HttpHeaders({
      "x-rapidapi-key": "971346fa9fmsh942519ee7e82eb9p1b706ejsn3fd22fc0cd6c",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "useQueryString": "true"
    })
  }

  constructor(private http:HttpClient) { }

  // function to call the API for data
  getSearchResults(input:string):Observable<any> {
    return this.http.get<any>(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`, this.headers)
  }

  getAlbum(id: number):Observable<any> {
    return this.http.get<any>(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, this.headers)
  }
}
