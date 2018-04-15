import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the TeacherCourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeacherCourseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TeacherCourseProvider Provider');
  }

}
