import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';
import { IonicPage,NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatabaseProvider } from "../../providers/database/database";
import { Storage } from '@ionic/storage';


@IonicPage({
    defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-zone',
  templateUrl: 'zone.html',
})
export class ZonePage {
  zones: any;
  zoneName: any;
  valve_state: any;
  IDZone: any;
  mail: any;

  constructor(public navCtrl: NavController,private databaseProvider: DatabaseProvider,private storage: Storage) {
    storage.get('userMail').then((mail) => {
      this.mail = mail;
      storage.get('zones').then((zones) => {
        this.zones = zones;
        storage.get('zoneID').then((zoneID) => {
          for(let i = 0; i < this.zones.length; i++) {
            if(zoneID == this.zones[i].name) {
              this.zoneName = zoneID;
              if(this.zones[i].valve_state == 1) {
                this.valve_state = true;
              }
              else {
                this.valve_state = false;
              }
              this.IDZone = this.zones[i].id_module;
            }
          }
        });
      });
    });

  }

  waterNow() {
    this.databaseProvider.openModuleValve(this.mail, this.IDZone).subscribe(res => {
      console.log(res);
    });
    this.valve_state = true;
  }

  stopWater() {
    this.databaseProvider.closeModuleValve(this.mail, this.IDZone).subscribe(res => {
      console.log(res);
    });
    this.valve_state = false;
  }


}
