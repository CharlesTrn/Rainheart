import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  index: number;
  zones: Array<{number: number, icon: string}>;
  constructor(public navCtrl: NavController, private menu: MenuController) {
    this.zones = [];
    this.index = 0;
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(true);
  }

  addZone() {
    this.index += 1;
    this.zones.push({
      number: this.index,
      icon: ""
    });
  }
/*
  openZone() {

  }*/
}
