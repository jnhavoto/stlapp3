import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from './../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {

  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db:ServiceProvider) {
    this.getUser();
  }

  ionViewDidLoad() {
    console.log("Hello Word");
  }

  //Metodo Que pega o user do Service Provider
  getUser(){
    this.db.getUserData().then(data=>{this.user=data;console.log(this.user)}); 
  }
}
