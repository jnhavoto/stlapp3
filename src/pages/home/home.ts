import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, App} from 'ionic-angular';
import {LoginPage} from "../login/login";
//import { MyprofilePage } from '../myprofile/myprofile';
import {global} from "../global";
import {ServiceProvider} from "../../providers/service/service";

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
    last_assignment: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public app: App,
                private assignments: ServiceProvider)
    {
        this.user = global.loginState.user[0];
        this.getLastAssignment();
    }
//get all assignments
    fill(){
        this.assignments.getAssignments().subscribe(
            data => {
                console.log(data);
            },
            error2 => {
                    console.log(error2)
            }
        )
    }
//Get the las Assignment ordered by deadline
    getLastAssignment(){
        this.assignments.getLastAssignment().subscribe(
            data => {
                this.last_assignment=data["lastAssignment"];
                console.log("Last assign");
                console.log(this.last_assignment.case);
            },
            error2 => {
                console.log(error2)
            }
        )
    }

    ionViewDidLoad() {
        console.log(this.assignments);
        // this.userdata.name = this.userAuth.user[0].user.first_name;
    }

    logout() {
        // root.popToRoot();
        this.navCtrl.setRoot(LoginPage);
    }

}
