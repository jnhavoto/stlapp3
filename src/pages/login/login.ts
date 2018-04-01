import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {AuthenticationProvider} from "../../providers/authentication/authentication";

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
              private authentication : AuthenticationProvider) {
  }

    email:string = "type email";
    password:string = "******";

    user = {
        email: "",
        password: "",
    }

    authUser:{}

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  */

    doLogin() {

        this.user.email = this.email;
        this.user.password = this.password;

        this.auth();
        // this.navCtrl.setRoot(HomePage);
    }

    auth() {
        return this.authentication.login(this.user).subscribe(
            data => {
                console.log(data);
            },
            error2 => {
                console.log(error2)
            }
        )
    }


}
