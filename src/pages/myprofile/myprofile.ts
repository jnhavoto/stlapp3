import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {global} from "../global";



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

    user: any;
    test = "UserNAME"

    userData : {
        fullname:string,
        email:string,
        telephone:string,
        school:string
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
        )
    {
        this.user = global.loginState.user[0];
        // this.user = homePage.userAuth;
    }


    fill(){
        this.userData.fullname = this.user.user.first_name +" "+ this.user.user.last_name;
        this.userData.email = this.user.user.email;
        this.userData.school = this.user.school.name;
        this.userData.telephone = this.user.user.telephone;

    }
    ionViewDidLoad() {
        console.log(this.user);
        // console.log(global.loginState);
        
        // this.fill()
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



}
