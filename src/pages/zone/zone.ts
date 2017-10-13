import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';


@Component({
  selector: 'page-zone',
  templateUrl: 'zone.html'
})
export class ZonePage {

  constructor(public navCtrl: NavController, private menu: MenuController) {

  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);

  }

}
