import {Component, Injectable} from '@angular/core';
import {IonicPage, NavController, NavParams, App} from 'ionic-angular';
import {LoginPage} from "../login/login";
import { MyprofilePage } from '../myprofile/myprofile';

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

    public userAuth = {user: {}};
    userdata = {
        name:"teste",
        email:""
    }

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public app: App) {

        this.userAuth = navParams.get("user");
    }

    ionViewDidLoad() {
        console.log(this.userAuth);
        this.userdata.name = this.userAuth.user[0].user.first_name;
    }

    logout() {
        // Remove API token
        // const root = this.app.getRootNav();
        // root.popToRoot();
        this.navCtrl.setRoot(LoginPage);
    }

}
