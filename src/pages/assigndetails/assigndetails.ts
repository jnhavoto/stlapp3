import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssigndetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assigndetails',
  templateUrl: 'assigndetails.html',
})
export class AssigndetailsPage {

  assignment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.assignment= this.navParams.data;
      console.log(this.assignment);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssigndetailsPage');
  }

    navToAssignDetails(){

    }
}
