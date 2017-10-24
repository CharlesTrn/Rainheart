import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DatabaseProvider {

  constructor(public http: Http) {
    console.log('Hello DatabaseProvider Provider');
  }

  getData() {
    return this.http.get('http://localhost:8100/get_db.php');
    //.map(res => res.json());
  }
}
