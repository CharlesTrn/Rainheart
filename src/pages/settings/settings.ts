import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuController } from 'ionic-angular';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';
import { IonicPage,NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatabaseProvider } from "../../providers/database/database";
import { Storage } from '@ionic/storage';
declare var google;

@IonicPage({
    defaultHistory: ['HomePage']
})

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  name: any;
  mail: any;
  service: any;
  userData;
  res;

  constructor(public navCtrl: NavController, private menu: MenuController,
  private storage: Storage, private databaseProvider: DatabaseProvider) {
    storage.get('userMail').then((val) => {
      this.mail = val;
      this.databaseProvider.getName(this.mail)
      .subscribe(name => {
        this.name = (<any>name)._body;
      });
    });
    this.userData = {
      "email": "", "numRue": "", "nomRue": "", "ville": "", "codePost": "",
      "pays": ""
    };
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
    this.userData = JSON.stringify({
      stn : userData.numRue, st: userData.nomRue,
      c : userData.ville, p: userData.pays, z: userData.codePost
    });
  }

  userChanges(){
    this.databaseProvider.setLocation(this.mail, this.userData)
    .subscribe(res => {
      this.res = (<any>res)._body;
    });
    console.log(this.res);
  }



}
