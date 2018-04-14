import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    getAssignments() : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-descriptions';
        return this.http.get(url, {headers: headers});
    }

    getLastAssignment() : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/last-assignment-descriptions';
        return this.http.get(url, {headers: headers});
    }

    // getCourses()



}
