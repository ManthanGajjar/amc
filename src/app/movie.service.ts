import { Injectable } from '@angular/core';
import { Http,Headers,Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

url1= "http://www.omdbapi.com/?t=";
url2= "&apikey=89b563ed";

  constructor(private _http:HttpClient) { }

searchMovie(movie){
  console.log(this.url1+movie+this.url2);
  return this._http.get(this.url1+movie+this.url2)

}

}
