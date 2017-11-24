import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ForgottenPage } from '../forgotten/forgotten';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@IonicPage()
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
  res: any;
  constructor(public navCtrl: NavController, public authService:AuthServiceProvider,
    private menu: MenuController, private storage: Storage) {
    this.menu.swipeEnable(false);
    this.invalidMail = false;
    this.invalidPassword = false;
    this.emptyParameter = false;
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

  forgot(){
    this.navCtrl.push('ForgottenPage');
  }

  home(){
    this.navCtrl.push('HomePage');
  }

  signin() {
    this.invalidMail = false;
    this.invalidPassword = false;
    this.emptyParameter = false;
    this.authService.postDat(this.userData, "signin")
    .subscribe(res => {
      this.res = (<any>res)._body;
      console.log(this.res);
      if(this.res == "User accepted!") {
        this.storage.set('userMail', this.userData.email);
        this.home();
      }

      else if(this.res == "Wrong password!") {
        this.invalidPassword = true;
      }

      else if(this.res == "No such mail!") {
        this.invalidMail = true;
      }

      else if(this.res == "Empty parameter!") {
        this.emptyParameter = true;
      }
    });

  }
}
