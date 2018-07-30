import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs";
import { HttpClientModule,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

url1="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
url2="%2C%20";
url3="%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

  constructor(private _http:HttpClient) { }

  findWeather(city,state){
    console.log("url",this.url1+city+this.url2+state+this.url3);
    return this._http.get(this.url1+city+this.url2+state+this.url3)
  }




}
