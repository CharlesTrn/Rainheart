import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

let apiUrl = 'http://rainheart.fr:80/php/';

@Injectable()
export class AuthServiceProvider {
  mydata:any = {};

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
    this.mydata.response ='';
  }


  postDat(data, type) {

    let headers = new Headers(
    {
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    data = JSON.stringify({
      ln : data.lastname, fn : data.firstname,
      ps : data.password, ph: data.phone, stn : data.numRue, st: data.nomRue,
      c : data.ville, p: data.pays, bid: data.baseid, z: data.codePost,
      m: data.email
    });

    this.http.post(apiUrl + type + ".php", data)
    .subscribe(mydata => {
    this.mydata.response = mydata["_body"];

    }, error => {
    console.log("Oooops!");
    });

    return this.mydata.response;
  }

}
