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
  temps;
  meteoTab: Array<{day: any, icon: any, tempMax: any, tempMin: any}>;

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider,
  private menu: MenuController,private storage: Storage, private databaseProvider: DatabaseProvider) {
    this.zones = [];
    this.meteoTab = [];
    this.index = 0;
    this.tempMax = new Array(5);
    this.tempMin = new Array(5);
    this.temps = new Array();
    for (let i=0;i<5;i++) {
     this.temps[i]=new Array();
     for (let j=0;j<8;j++) {
      this.temps[i][j]=0;
     }
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
          let hour = date.getHours() + 1;
          let nextDays = new Array(5);
          let icons = new Array(5);
          for(let i = 0; i < nextDays.length; i++) {
            if(hour + 3 >= 24) {
              nextDays[i] = year + "-" + month + "-" + (day + i + 1);
            }
            else {
              nextDays[i] = year + "-" + month + "-" + (day + i);
            }

            console.log(nextDays[i]);
          }
          let cpt = new Array(5);
          for(let i = 0; i < cpt.length; i ++) {
              cpt[i] = 0;
          }

          for(let i = 0; i < this.weather.cnt;i++) {
            for(let j = 0; j < nextDays.length; j++) {
              if(this.weather.list[i].dt_txt.indexOf(nextDays[j]) !== -1) {
                icons[j] = this.weather.list[i].weather[0].main;
                this.temps[j][cpt[j]] = this.weather.list[i].main.temp;
                cpt[j]++;
              }
            }
          }
          console.log(this.temps);

          for(let i = 0; i < this.tempMax.length; i++) {
            this.tempMax[i] = Math.max.apply(null, this.temps[i]);
            console.log("Maximum " + i + ": " + this.tempMax[i]);
          }

          let actualDay = date.getDay();
          let daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
          let cptDay = actualDay;

          for(let i = 0; i < this.tempMin.length; i++) {
            this.tempMin[i] = Math.min.apply(null, this.temps[i]);
            console.log("Minimum " + i + ": " + this.tempMin[i]);
            this.meteoTab.push({
              day: daysOfWeek[cptDay],
              icon: icons[i],
              tempMax: this.tempMax[i],
              tempMin: this.tempMin[i]
            });
            if(cptDay == 6) cptDay = 0;
            else cptDay++;
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
