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

  constructor(public navCtrl: NavController,private databaseProvider: DatabaseProvider,private storage: Storage) {
    storage.get('zones').then((val) => {
      this.zones = val;
      storage.get('zoneID').then((val) => {
        for(let i = 0; i < this.zones.length; i++) {
          if(val == this.zones[i].name) {
            this.zoneName = val;
          }
        }
      });
    });
  }

  

}
