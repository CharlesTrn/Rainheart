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
  userData = {"firstname": "blabla","password": "aza", "lastname": "azea","email": "azeaz@gmail.com",
  "baseid": "213215", "numRue": "11", "nomRue": "eaze", "ville": "zerze", "codePost": "82600",
  "pays": "ezea", "phone": "0601020304"
  };
  address: any;
  constructor(public navCtrl: NavController, public authService:AuthServiceProvider, private modalCtrl: ModalController) {

  }

  signup(){
      this.authService.postDat(this.userData);/*.then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });*/

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
