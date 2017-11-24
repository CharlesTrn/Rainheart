import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from "../../providers/weather/weather";
import { DatabaseProvider } from "../../providers/database/database"
import { ZonePage } from '../zone/zone';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  data: any;
  index: number;
  userData: any;
  zones: Array<{number: number, icon: string, page: any}>;
  tempMax: any;
  tempMin: any;
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider,
  private menu: MenuController,private storage: Storage, private databaseProvider: DatabaseProvider) {
    this.zones = [];
    this.index = 0;
    this.tempMax = new Array(5);
    this.tempMin = new Array(5);
    for(let i = 0; i < this.tempMax.length; i++) {
      this.tempMax[i] = -50;
    }

    for(let i = 0; i < this.tempMin.length; i++) {
      this.tempMin[i] = -50;
    }

    this.menu.swipeEnable(true);
    storage.get('userMail').then((val) => {
      this.userData = val;
      this.databaseProvider.getLocation(this.userData)
      .subscribe(location => {
        this.data = (<any>location)._body;
        console.log(this.data);
        this.weatherProvider.getWeather(this.data)
        .subscribe(weather=> {
          this.weather = weather;
          console.log(this.weather);
          let date = new Date();
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          let nextDays = new Array(5);
          for(let i = 0; i < nextDays.length; i++) {
            nextDays[i] = year + "-" + month + "-" + (day + i);
            console.log(nextDays[i]);
          }

          for(let i = 0; i < this.weather.cnt;i++) {
            for(let j = 0; j < nextDays.length; j++) {
              if(this.weather.list[i].dt_txt.indexOf(nextDays[j]) !== -1) {
                if(this.weather.list[i].main.temp > this.tempMax[j]) {
                  this.tempMin[j] = this.tempMax[j];
                  this.tempMax[j] = this.weather.list[i].main.temp;
                }
              }
            }
          }
          for(let i = 0; i < this.tempMax.length; i++) {
            console.log("Maximum " + i + ": " + this.tempMax[i]);
          }

          for(let i = 0; i < this.tempMin.length; i++) {
            console.log("Minimum " + i + ": " + this.tempMin[i]);
          }
        });
      });
    });


  }






  addZone() {
    this.index += 1;
    this.zones.push({
      number: this.index,
      icon: "",
      page: ZonePage
    });
  }

  openZone(zone) {
    this.navCtrl.push(zone.page);
  }
}
