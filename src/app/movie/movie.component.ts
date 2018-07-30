import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
import {  HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

movie:string="";

  constructor(private _movieService : MovieService ) { }

  ngOnInit() {
  }
data1:any;
movieService(){
  this._movieService.searchMovie(this.movie).subscribe(data => {
    this.data1 =data;
    })
}


}
