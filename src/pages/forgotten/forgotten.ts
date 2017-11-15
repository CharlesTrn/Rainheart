import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-forgotten',
  templateUrl: 'forgotten.html',
})
export class ForgottenPage {
  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.push(HomePage);
  }
}
