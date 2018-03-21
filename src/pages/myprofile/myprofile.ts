import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {

    users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: ServiceProvider) {

  this.getUser();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
  }
    navToMyResults() {
        this.navCtrl.push('MyresultsPage');
        console.log('Navigating to another module');

    }
    navToSelfAssessments() {
        this.navCtrl.push('MyselfassessmentsPage');
        console.log('navigating within same module');
    }
    navToEditProfile() {
        this.navCtrl.push('EditprofilePage');
        console.log('navigating within same module');
    }

    getUser() {


        this.restProvider.getUsers()
            .subscribe((result) => {
                    this.users = result;

                    console.log(result['resultado'].student_id)
                },
                (error) => {
                    console.log(error);
                }
            );
    }


}
