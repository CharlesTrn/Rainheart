import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { WeatherProvider } from "../../providers/weather/weather";
import { DatabaseProvider } from "../../providers/database/database"
import { ZonePage } from '../zone/zone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  data: any;
  index: number;
  zones: Array<{number: number, icon: string, page: any}>;
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider,
  private menu: MenuController, private databaseProvider: DatabaseProvider) {
    this.zones = [];
    this.index = 0;
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(true);
    /*this.databaseProvider.getData()
    .subscribe(data=> {
      this.data = data;
      console.log(data);
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
