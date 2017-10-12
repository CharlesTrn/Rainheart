import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { WeatherProvider } from "../../providers/weather/weather";
import { Geolocation ,Geoposition}
from '@ionic-native/geolocation';


@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html'
})
export class MeteoPage {
  weather:any;
  currentPos: Geoposition;

  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider,
  private geolocation: Geolocation, private menu: MenuController) {}

  ionViewDidLoad(){

    this.geolocation.getCurrentPosition({enableHighAccuracy : true})
    .then((currentPos) => {
      this.currentPos = currentPos;
      this.weatherProvider.getWeather(this.currentPos.coords.latitude,
        this.currentPos.coords.longitude)
      .subscribe(weather=> {
        this.weather = weather;
        console.log(weather);
      });
      console.log(this.currentPos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    console.log(this.currentPos);

  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
}
