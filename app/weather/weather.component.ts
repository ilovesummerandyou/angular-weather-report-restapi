import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weathers: any;
  forcasts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("http://api.openweathermap.org/data/2.5/group?id=6075357,1816670,1800163&units=metric&APPID=3c7763da183136491dd568a8ea5c0301&lang=zh_cn");
    resp.subscribe((data) => 
    { console.log(data);
      this.weathers = data;
    });

    let resp2 = this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=Mississauga&units=metric&appid=3c7763da183136491dd568a8ea5c0301&lang=zh_cn");
    resp2.subscribe((data) => 
    { console.log(data);
      this.forcasts = data;
    });
  }

}
