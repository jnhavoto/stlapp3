import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

    login(user): Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        return this.http.post('http://127.0.0.1:8000/api/user/login', user , {headers: headers})
    }

}
