import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = "&appid=44c2eb5198191f73762be0aa4c2ccd5a";
  unit = "&units=metric";
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = "http://api.openweathermap.org/data/2.5/forecast?zip=";
  }

  getWeather(location) {
    return this.http.get(this.url + location + this.apiKey + this.unit)
      .map(res => res.json());
  }

}
