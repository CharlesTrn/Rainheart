import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ForgottenPage } from '../forgotten/forgotten';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  userData = {"password": "", "email": ""
  };
  constructor(public navCtrl: NavController, public authService:AuthServiceProvider,
    private menu: MenuController) {
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

  signin() {
    this.authService.postDat(this.userData, "signin");
    console.log(this.userData);
    this.home();
  }
}
