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
  selector: 'page-debimeter',
  templateUrl: 'debimeter.html',
})
export class DebimeterPage {
  flow: any;
  rain:any;
  mail: any;
  constructor(public navCtrl: NavController,private databaseProvider: DatabaseProvider,private storage: Storage) {
    storage.get('userMail').then((val) => {
      this.mail = val;
      this.getFlow();
      this.getRain();
    });
  }

  getFlow() {
    Observable.interval(2000).subscribe(x => {
      this.databaseProvider.getFlow(this.mail)
      .subscribe(flow => {
        this.flow = (<any>flow)._body;
      });
    });
  }

  getRain() {
    Observable.interval(2000).subscribe(x => {
      this.databaseProvider.getRain(this.mail)
      .subscribe(rain => {
        this.rain = (<any>rain)._body;
      });
    });
  }


  home(){
    this.navCtrl.push('HomePage');
  }
}
