import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  responseData : any;
  userData = {"firstname": "","password": "", "lastname": "","email": "","baseid": ""};
  constructor(public navCtrl: NavController, public authService:AuthServiceProvider) {
  }

  signup(){
     this.authService.postDat(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });

  }
}
