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
  "baseid": "", "numRue": "11", "nomRue": "eaze", "ville": "zerze", "codePost": "82600",
  "pays": "eezrz", "phone": ""
  };
  address: any;
  constructor(public navCtrl: NavController, public authService:AuthServiceProvider, private modalCtrl: ModalController) {

  }

  signup(){
      this.authService.postDat(this.userData, "signup");
      console.log(this.userData);
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
