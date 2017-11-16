import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import {AutocompletePage} from './autocomplete';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  responseData : any;
  userData = {"firstname": "","password": "", "lastname": "","email": "",
  "baseid": "", "numRue": "", "nomRue": "", "ville": "", "codePost": "",
  "pays": "", "phone": ""
  };
  address: any;
  constructor(public navCtrl: NavController, public authService:AuthServiceProvider, private modalCtrl: ModalController) {

  }

  signup(){
      console.log(JSON.stringify(this.address));
      this.authService.postDat(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });

  }

  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address = data;
    });
    console.log(this.address);
    modal.present();
  }
}
