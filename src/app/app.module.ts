import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AssignmentsPage} from "../pages/assignments/assignments";
import {MyprofilePage} from "../pages/myprofile/myprofile";
import {CoursesPage} from "../pages/courses/courses";
import {FeedbacksPage} from "../pages/feedbacks/feedbacks";
import {ImportantdatesPage} from "../pages/importantdates/importantdates";
import {ServiceProvider } from '../providers/service/service';
import {AboutPage} from "../pages/about/about";
import {LoginPage} from "../pages/login/login";
import {WelcomePage} from "../pages/welcome/welcome";
import { AuthenticationProvider } from '../providers/authentication/authentication';
import {MessagesPage} from "../pages/messages/messages";
import {AssignmendescPage} from "../pages/assignmendesc/assignmendesc";
import { TtesteProvider } from '../providers/tteste/tteste';
import { AssignmentDescriptionProvider } from '../providers/assignment-description/assignment-description';
import { AssignmentSubmissionProvider } from '../providers/assignment-submission/assignment-submission';
import { CityProvider } from '../providers/city/city';
import { CourseProvider } from '../providers/course/course';
import { DepartmentProvider } from '../providers/department/department';
import { FeedbackProvider } from '../providers/feedback/feedback';
import { GroupAssignmentProvider } from '../providers/group-assignment/group-assignment';
//import {AssigndetailsPage} from "../pages/assigndetails/assigndetails";


@NgModule({
  declarations: [
      MyApp,
      HomePage,
      MyprofilePage,
      CoursesPage,
      AssignmentsPage,
      FeedbacksPage,
      ImportantdatesPage,
      AboutPage,
      LoginPage,
      WelcomePage,
      MessagesPage,
      AssignmendescPage,
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      MyprofilePage,
      CoursesPage,
      AssignmentsPage,
      FeedbacksPage,
      ImportantdatesPage,
      AboutPage,
      LoginPage,
      WelcomePage,
      MessagesPage,
      AssignmendescPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    AuthenticationProvider,
    TtesteProvider,
    AssignmentDescriptionProvider,
    AssignmentSubmissionProvider,
    CityProvider,
    CourseProvider,
    DepartmentProvider,
    FeedbackProvider,
    GroupAssignmentProvider,
  ]
})
export class AppModule {}
