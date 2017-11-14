import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DatabaseProvider {

  constructor(public http: Http) {
    console.log('Hello DatabaseProvider Provider');
  }

  getData() {
    return this.http.get('http://rainheart.fr:80/php/get_db.php')
  }
}
