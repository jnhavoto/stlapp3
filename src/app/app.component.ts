import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
//import {LoginPage} from "../pages/login/login";
import {AssignmentsPage} from "../pages/assignments/assignments";
import {MyprofilePage} from "../pages/myprofile/myprofile";
import {CoursesPage} from "../pages/courses/courses";
import {FeedbacksPage} from "../pages/feedbacks/feedbacks";
import {ImportantdatesPage} from "../pages/importantdates/importantdates";
import {AboutPage} from "../pages/about/about";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  pages2:any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'My Profile', component: MyprofilePage },
        { title: 'Courses', component: CoursesPage },
        //{ title: 'List', component: ListPage },
        {title:'Assignments',component: AssignmentsPage},
        {title:'Feedbacks',component: FeedbacksPage},
        {title:'Important Dates',component: AssignmentsPage},
        {title:'About',component: AboutPage},
    ];
    this.pages2={
        homePage: HomePage,
        profilePage: MyprofilePage,
        coursePage: CoursesPage,
        assignmentPage: AssignmentsPage,
        feedbackPage: FeedbacksPage,
        importantPage: ImportantdatesPage,
        aboutPage: AboutPage,
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
