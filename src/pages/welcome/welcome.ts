import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgottenPage } from '../forgotten/forgotten';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  constructor(public navCtrl: NavController) {
  }

  register(){
  this.navCtrl.push(RegisterPage);
  }

  forgot(){
  this.navCtrl.push(ForgottenPage);
  }
}
