import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AssignmentsPage} from "../pages/assignments/assignments";
//import {LoginPage} from "../pages/login/login";
import {MyprofilePage} from "../pages/myprofile/myprofile";
import {CoursesPage} from "../pages/courses/courses";
import {FeedbacksPage} from "../pages/feedbacks/feedbacks";
import {ImportantdatesPage} from "../pages/importantdates/importantdates";

@NgModule({
  declarations: [
      MyApp,
      HomePage,
      //ListPage,
      //LoginPage,
      MyprofilePage,
      CoursesPage,
      AssignmentsPage,
      FeedbacksPage,
      ImportantdatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      //ListPage,
      //LoginPage,
      MyprofilePage,
      CoursesPage,
      AssignmentsPage,
      FeedbacksPage,
      ImportantdatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
