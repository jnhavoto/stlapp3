import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {AuthenticationProvider} from "../../providers/authentication/authentication";
import {HttpClient} from "@angular/common/http";

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
              private authentication : AuthenticationProvider) {
  }

    email:string = "anita.lundkvist@upplands-bro.se";
    password:string = "12345";

    user = {
        email: "",
        password: "",
    }

    authUser:{}

    doLogin() {
        this.user.email = this.email;
        this.user.password = this.password;

        console.log(this.auth());

    }

    auth() {

        return this.authentication.login(this.user).subscribe(
            data => {
                this.authUser =  data.user[0];
                return this.authUser;
                // resolveDep(this.authUser);
                // console.log(this.authUser);
            },
            error2 => {
                console.log(error2)
            }
        )

        // console.log(this.authUser);
    }


}
