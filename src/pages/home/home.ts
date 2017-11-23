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
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider,
  private menu: MenuController,private storage: Storage, private databaseProvider: DatabaseProvider) {
    this.zones = [];
    this.index = 0;
    storage.get('userData').then((val) => {
      this.userData = val;
    })

  }

  ionViewDidLoad() {
    this.menu.swipeEnable(true);
    this.data = this.databaseProvider.getLocation(this.userData);
    /*this.weatherProvider.getWeather(this.data)
    .subscribe(weather=> {
      this.weather = weather;
      console.log(weather);
    });*/

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
