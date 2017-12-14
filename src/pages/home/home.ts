import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from "../../providers/weather/weather";
import { DatabaseProvider } from "../../providers/database/database"
import { ZonePage } from '../zone/zone';
import { DebimeterPage } from '../debimeter/debimeter';

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
  weatherDescription;
  meteoTab: Array<{day: any, icon: any, tempMax: any, tempMin: any}>;

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider,
  private menu: MenuController,private storage: Storage, private databaseProvider: DatabaseProvider) {
    this.zones = [];
    this.meteoTab = [];
    this.index = 0;
    this.tempMax = new Array(5);
    this.tempMin = new Array(5);
    this.temps = new Array();
    this.weatherDescription = new Array();

    for (let i=0;i<5;i++) {
     this.temps[i]=new Array();
    }

   for (let i=0;i<5;i++) {
    this.weatherDescription[i]=new Array();
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

          for(let i = 0; i < nextDays.length; i++) {
            /*console.log("i:" + i);
            console.log("Jour:" + day);
            console.log("Mois:" + month);
            console.log("Année:" + year);
            console.log("Nombre de jours dans le mois:" + new Date(year, month, 0).getDate());*/

            if(((new Date(year, month, 0).getDate() == 30) && (day == 30)) ||
            ((new Date(year, month, 0).getDate() == 31) && (day == 31))) {
              if(hour >= 23) {
                day = 1;
                if(month == 12) {
                  month = 1
                  year = year + 1;
                }
                else {
                  month = month + 1;
                }
              }
              if(day <= 9) {
                nextDays[i] = year + "-" + month + "-0" + day;
              }
              else {
                nextDays[i] = year + "-" + month + "-" + day;
              }
            }
            else {
              if(day <= 9) {
                nextDays[i] = year + "-" + month + "-0" + day;
              }
              else {
                nextDays[i] = year + "-" + month + "-" + day;
              }
              day = day + 1;
            }




            console.log(nextDays[i]);

          }

          let cpt = new Array(5);
          for(let i = 0; i < cpt.length; i ++) {
              cpt[i] = 0;
          }

          for(let i = 0; i < this.weather.cnt; i++) {
            for(let j = 0; j < nextDays.length; j++) {
              if(this.weather.list[i].dt_txt.indexOf(nextDays[j]) !== -1) {
                /*console.log("i: " + i + ", j: " + j);
                console.log(nextDays[j]);*/
                this.temps[j][cpt[j]] = this.weather.list[i].main.temp;
                this.weatherDescription[j][cpt[j]] = this.weather.list[i].weather[0].main;
                cpt[j]++;
              }
            }
          }
          /*console.log(this.temps);
          console.log(this.weatherDescription);*/

          for(let i = 0; i < this.tempMax.length; i++) {
            this.tempMax[i] = Math.max.apply(null, this.temps[i]);

          }

          let actualDay = date.getDay();
          let daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
          let cptDay = actualDay;
          let cptWeatherTab = 0;

          for(let i = 0; i < this.tempMin.length; i++) {
            this.tempMin[i] = Math.min.apply(null, this.temps[i]);


            this.meteoTab.push({
              day: daysOfWeek[cptDay],
              icon: this.weatherDescription[cptWeatherTab][0],
              tempMax: Math.round(this.tempMax[i]),
              tempMin: Math.round(this.tempMin[i])
            });

            if(cptDay == 6) cptDay = 0;
            else cptDay++;

            cptWeatherTab ++;
          }


        });
      });
    });


  }


  openDebimeter() {
    this.navCtrl.push('DebimeterPage');
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
