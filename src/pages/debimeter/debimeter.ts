import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage({
    defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-debimeter',
  templateUrl: 'debimeter.html',
})
export class DebimeterPage {
  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.push('HomePage');
  }
}
