import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthenticationProvider} from "../../providers/authentication/authentication";
import {HttpClient} from "@angular/common/http";
import {HomePage} from "../home/home";
import {MyprofilePage} from "../myprofile/myprofile";

import {global} from "../global";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public client: HttpClient,
              private authentication : AuthenticationProvider,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
  }

    email:string = "mbergstrom@instructure.com";
    password:string = "12345";

    user = {
        email: "",
        password: "",
    }
    loader;

    public authUser:{}

    doLogin() {
        this.user.email = this.email;
        this.user.password = this.password;
        // this.auth();
        this.navCtrl.setRoot(HomePage);

    }

    auth() {
        this.presentLoading();
        
        return this.authentication.login(this.user).subscribe(
            data => {
                this.dismissLoading();
                global.loginState = data;
                this.navCtrl.setRoot(HomePage);
            },
            error2 => {
                console.log(error2)
                this.showAlert();
            }
        )
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Login Failed!',
            subTitle: 'Email or Password wrong',
            buttons: ['OK']
        });
        alert.present();
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    }

    dismissLoading() {
        this.loader.dismiss();
    }


}
