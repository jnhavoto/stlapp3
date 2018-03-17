import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ServiceProvider {

  apiUrl:string='http://localhost:8000/api/data';

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  //Metodo Para a comunicacao com a api
  getUserData(){
    return new Promise(
      json =>{this.http.get(this.apiUrl).subscribe(data=>{json(data)},err=>{console.log(err)})}
    )
  }

}
