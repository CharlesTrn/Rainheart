import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

let apiUrl = 'http://rainheart.fr:80/php/db.php';


@Injectable()
export class DatabaseProvider {
  mydata:any = {};
  constructor(public http: Http) {
    console.log('Hello DatabaseProvider Provider');
    this.mydata.response ='';
  }

  getLocation(mail) {
    let data = {
      type: "getLocation",
      email: ""
    };
    data.email = mail;
    return this.http.post(apiUrl, data);
  }

  getName(mail) {
    let data = {
      type: "getName",
      email: ""
    };
    data.email = mail;
    return this.http.post(apiUrl, data);
  }

  getFlow(mail) {
    let data = {
      type: "getFlow",
      email: ""
    };
    data.email = mail;
    return this.http.post(apiUrl, data);
  }

  getRain(mail) {
    let data = {
      type: "getRain",
      email: ""
    };
    data.email = mail;
    return this.http.post(apiUrl, data);
  }

  getZone(mail) {
    let data = {
      type: "getZone",
      email: ""
    };
    data.email = mail;
    return this.http.post(apiUrl, data);
  }

  setZone(mail) {
    let data = {
      type: "setZone",
      email: ""
    };
    data.email = mail;
    return this.http.post(apiUrl, data);
  }

}
