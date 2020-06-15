import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any;
  forcasts: any;
  cities: string[];
  citySelected: string;
  modifiedText: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cities = ["Mississauga", "Beijing", "Nanchang"];
    this.citySelected = "Mississauga";
    this.weatherService.getCurrentWeather(this.citySelected).subscribe((data) => this.weather =data);
    this.weatherService.getWeatherForecast(this.citySelected).subscribe((data) => this.forcasts =data);
  }

  onCityChange(val: any){
    this.customFucntion(val);
  }

  customFucntion(val: any){
      this.modifiedText = "changed value " + val;
      this.weatherService.getCurrentWeather(val).subscribe((data) => this.weather =data);
      this.weatherService.getWeatherForecast(val).subscribe((data) => this.forcasts =data);
  }

}
