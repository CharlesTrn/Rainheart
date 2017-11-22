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
  invalidPassword: boolean;
  invalidMail: boolean;
  emptyParameter: boolean;

  constructor(public navCtrl: NavController, public authService:AuthServiceProvider,
    private menu: MenuController) {
    this.menu.swipeEnable(false);
    this.invalidMail = false;
    this.invalidPassword = false;
    this.emptyParameter = false;
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
    this.invalidMail = false;
    this.invalidPassword = false;
    this.emptyParameter = false;
    let res = this.authService.postDat(this.userData, "signin");
    console.log(res);
    if(res == "User accepted!") {
        this.home();
    }

    else if(res == "Wrong password!") {
      this.invalidPassword = true;
    }

    else if(res == "No such mail!") {
      this.invalidMail = true;
    }

    else if(res == "Empty parameter!") {
      this.emptyParameter = true;
    }
  }
}
