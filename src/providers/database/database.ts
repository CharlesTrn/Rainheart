import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

let apiUrl = 'http://rainheart.fr:80/php/getdb.php';


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

    /*this.http.post(apiUrl, data)
    .subscribe(mydata => {
    this.mydata.response = mydata["_body"];

    }, error => {
    console.log("Oooops!");
  });*/

    return this.http.post(apiUrl, data);
  }
}
