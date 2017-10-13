import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ZonePage } from '../../pages/zone/zone';

/*
  Generated class for the ZoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ZoneProvider {
  index: number;
  zones: Array<{number: number, icon: string, page: any}>;

  constructor(public http: Http) {
    console.log('Hello ZoneProvider Provider');
    this.zones = [];
    this.index = 0;
  }

  addZone() {
    this.index += 1;
    this.zones.push({
      number: this.index,
      icon: "",
      page: ZonePage
    });
  }

}
