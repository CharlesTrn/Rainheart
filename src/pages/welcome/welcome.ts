import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ForgottenPage } from '../forgotten/forgotten';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  constructor(public navCtrl: NavController, private menu: MenuController) {
    this.menu.swipeEnable(false);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  forgot(){
    this.navCtrl.push(ForgottenPage);
  }

  home(){
    this.navCtrl.push(HomePage);
  }
}
