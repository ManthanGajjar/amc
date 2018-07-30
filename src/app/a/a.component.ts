import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' 
import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private _weatherService : WeatherService) { }

  ngOnInit() {
  }
  abc=[{a:"1"},{a:"2"}];
  
  fer :number =0;
ab=0;
 FtoC(){
      var cel=(this.fer-32) * (0.5556);
      console.log(cel)
      this.ab=cel;
      }
city:string="";
state:string="";
      data1:any;
      weather(){
        this._weatherService.findWeather(this.city,this.state).subscribe(data => {
          this.data1 =data;
          })
      }




                  /////chart data/////
      chartOptions = {
        responsive: true
      };
    
      chartData = [
        { data: [330, 600, 260, 700], label: 'Account A' },
        { data: [120, 455, 100, 340], label: 'Account B' },
        { data: [45, 67, 800, 500], label: 'Account C' }
      ];
    
      chartLabels = ['January', 'February', 'March', 'April'];
    
      onChartClick(event) {
        console.log(event);
      }
}
