import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {
  index: number;
  zones: Array<{number: number, icon: string}>;
  constructor(public navCtrl: NavController, private menu: MenuController) {

  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

}
