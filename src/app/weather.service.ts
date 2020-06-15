import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=3c7763da183136491dd568a8ea5c0301&lang=zh_cn");
  }

  getWeatherForecast(city: string){
    return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=3c7763da183136491dd568a8ea5c0301&lang=zh_cn");
  }
}
