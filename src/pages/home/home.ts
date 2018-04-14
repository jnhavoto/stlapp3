import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, App} from 'ionic-angular';
import {LoginPage} from "../login/login";
//import { MyprofilePage } from '../myprofile/myprofile';
import {global} from "../global";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {

    user: any;

    public userAuth = {user: {}};

    /*userdata = {
        name:"teste",
        email:""
    }*/

    userData : {
        case:string,
        instructions:string,
        startdate: Date,
        deadline: Date,
        //available_date: Date
        //teacher_course_id: int
    }



    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public app: App)
    {
        this.user = global.loginState.user[0];
    }

    fill(){
        this.userData.case = this.user.user.case;
        /*this.userData.email = this.user.user.email;
        this.userData.school = this.user.school.name;
        this.userData.telephone = this.user.user.telephone;
        */
    }

    ionViewDidLoad() {
        console.log(this.user);
        // this.userdata.name = this.userAuth.user[0].user.first_name;
    }

    logout() {
        // Remove API token
        // const root = this.app.getRootNav();
        // root.popToRoot();
        this.navCtrl.setRoot(LoginPage);
    }

}
