import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://rainheart.fr:80/php/signup.php';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }


  postDat(data) {
    //return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      this.http.post(apiUrl, {ln : data.lastname, fn : data.firstname,
        ps : data.password, ph: data.phone, stn : data.numRue, st: data.nomRue,
        c : data.ville, p: data.pays, bid: data.baseid, z: data.codePost,
        m: data.email }, {headers: headers});
        /*.subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });*/
    }

  }
