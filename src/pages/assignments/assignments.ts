import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from "../../providers/service/service";
import {AssignmentDescriptionProvider} from "../../providers/assignment-description/assignment-description";
//import {AssigndetailsPage} from "../assigndetails/assigndetails";

/**
 * Generated class for the AssignmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignments',
  templateUrl: 'assignments.html',
})
export class AssignmentsPage {

  arrayAssignments: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private assignments: AssignmentDescriptionProvider) {
      this.fill();
  }

    /**
     * List all assignements
     */
  fill(){
      this.assignments.getAllAssignmentsDescription().subscribe(
          data => {
              this.arrayAssignments=data["assignment_description"];
              console.log(this.arrayAssignments);
          },
          error2 => {
              console.log(error2)
          }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentsPage');
  }
    navToAssignDetails(assignment) {
        this.navCtrl.push('AssigndetailsPage',assignment);
        // console.log(assignment);

    }
}
