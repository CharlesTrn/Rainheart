import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  index: number;
  zones: Array<{number: number, icon: string}>;
  constructor(public navCtrl: NavController) {
    this.zones = [];
    this.index = 0;
  }

  addZone() {
    this.index += 1;
    this.zones.push({
      number: this.index,
      icon: ""
    });
  }

}
