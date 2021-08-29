import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../Interface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url='http://my-json-server.typicode.com/UXtrendz/apis/videoList'

  constructor(private http:HttpClient) { }
  getSearches(searchTerm: Search):Observable<Search>{
    console.log("my jason response is", this.http.get<Search>(this.url+ '?q=' + searchTerm))
    return this.http.get<Search>(this.url+ '?q=' + searchTerm);
  }
  
}
