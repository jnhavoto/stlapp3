import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthenticationProvider} from "../../providers/authentication/authentication";
import {HttpClient} from "@angular/common/http";
import {HomePage} from "../home/home";

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
              public alertCtrl: AlertController) {
  }

    email:string = "anne.erdhage@upplands-bro.se";
    password:string = "12345";

    user = {
        email: "",
        password: "",
    }

    authUser:{}

    doLogin() {
        this.user.email = this.email;
        this.user.password = this.password;
        this.auth();
    }

    auth() {

        return this.authentication.login(this.user).subscribe(
            data => {
                this.navCtrl.setRoot(HomePage, {user:data});
            },
            error2 => {
                console.log(error2)
                this.showAlert();
            }
        )
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Login Faild!',
            subTitle: 'Email or Password wrong',
            buttons: ['OK']
        });
        alert.present();
    }


}
