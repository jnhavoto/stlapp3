import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
}

    getUsers1() {
        return new Promise(resolve => {
            this.http.get("http://127.0.0.1:1000/api/student/1");

        });
    }

    getUsers() : Observable<any>{

        let url = 'http://127.0.0.1:1000/api/student/1';

        return this.http.get(url);

    }
}
