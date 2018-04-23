import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, App} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {global} from "../global";
import {AssignmentDescriptionProvider} from "../../providers/assignment-description/assignment-description";

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
    last_assignment: any="";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public app: App,
                private assignments: AssignmentDescriptionProvider)
    {
        this.user = global.loginState.user[0];
        this.getLastAssignment();
    }

    /**
     * Method to retrieve all AssignmentDescription
     */
    getAllAssignments(){
        this.assignments.getAllAssignmentsDescription().subscribe(
            data => {
                console.log(data);
            },
            error2 => {
                    console.log(error2)
            }
        )
    }

    /**
     * Method to retrieve the last assignment ordered by deadline
     */
    getLastAssignment(){
        this.assignments.getLastAssignmentDescription().subscribe(
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
