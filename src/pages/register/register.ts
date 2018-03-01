import { Component } from '@angular/core';
import {IonicPage,NavController, ModalController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
declare var google;

@IonicPage({
    defaultHistory: ['WelcomePage']
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  responseData : any;
  service: any;
  userData;
  res: any;
  place: any;
  userCreated;
  alreadyExist;
  emptyField;

  constructor(public navCtrl: NavController, public authService:AuthServiceProvider, private modalCtrl: ModalController) {
    this.userData = {
      "firstname": "","password": "", "lastname": "","email": "",
      "baseid": "", "numRue": "", "nomRue": "", "ville": "", "codePost": "",
      "pays": "", "phone": ""
    };
    console.log(this.userData);
    this.userCreated = false;
    this.alreadyExist = false;
    this.emptyField = false;
  }



  ionViewDidEnter() {
    this.service = new google.maps.places.Autocomplete((document.getElementById('autocomplete')
    .getElementsByTagName('input')[0]),{type:['address']});
    this.service.addListener('place_changed', () => {
      let componentForm = {
          street_number: 'short_name',
          route: 'long_name',
          locality: 'long_name',
          country: 'long_name',
          postal_code: 'short_name'
      };
      this.place = this.service.getPlace();

      for (var i = 0; i < this.place.address_components.length; i++) {
          var addressType = this.place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = this.place.address_components[i][componentForm[addressType]];
            if(addressType == "street_number") this.userData.numRue = val;
            if(addressType == "route") this.userData.nomRue = val;
            if(addressType == "locality") this.userData.ville = val;
            if(addressType == "postal_code") this.userData.codePost = val;
            if(addressType == "country") this.userData.pays = val;
          }
      }
    });
  }



  signup(){
    this.authService.postDat(this.userData, "signup")
    .subscribe(res => {
      this.res = (<any>res)._body;
      if(this.res == "Module FlowMeter created<br>") {
        this.alreadyExist = false;
        this.emptyField = false;
        this.userCreated = true;
      }
      else if(this.res == "User already exists with this mail!") {
        this.userCreated = false;
        this.emptyField = false;
        this.alreadyExist = true;
      }
      else if(this.res == "Empty parameter!") {
        this.userCreated = false;
        this.alreadyExist = false;
        this.emptyField = true;
      }
    });
    console.log(this.res);
  }


}
