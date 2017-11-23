import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage({
    defaultHistory: ['WelcomePage']
})
@Component({
  selector: 'page-forgotten',
  templateUrl: 'forgotten.html',
})
export class ForgottenPage {
  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.push('HomePage');
  }
}
