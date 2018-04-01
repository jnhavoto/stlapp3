webpackJsonp([20],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width=-100>\n        <ion-list>\n          <ion-item>\n            <strong>App Name:</strong> STL App\n          </ion-item>\n          <ion-item>\n            <strong>Version:</strong> 1.0.0\n          </ion-item>\n          <ion-item>\n            <strong>Description:</strong> Simple STL App\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AssignmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssignmentsPage = (function () {
    function AssignmentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AssignmentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignmentsPage');
    };
    AssignmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assignments',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\assignments\assignments.html"*/'<!--\n  Generated template for the AssignmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align-items-center>Assignments</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Ongoing (Pågående)\n    </ion-card-header>\n    <ion-list>\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Case name 1</h2>\n        <p>Deadline: </p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n  <ion-card-header>\n    Completed\n  </ion-card-header>\n  <ion-list>\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Case name 1</h2>\n      <p>Submitted on: </p>\n    </button>\n  </ion-list>\n  <ion-list>\n    <button ion-item>\n      <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n      <h2>Case name 2</h2>\n      <p>Submitted on: </p>\n    </button>\n  </ion-list>\n  <ion-list>\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Case name 3</h2>\n      <p>Submitted on: </p>\n    </button>\n  </ion-list>\n  </ion-card>\n\n  <ion-card>\n  <ion-card-header>\n    Upcoming\n  </ion-card-header>\n  <ion-list>\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Case name 1</h2>\n      <p>Start date: </p>\n    </button>\n  </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\assignments\assignments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AssignmentsPage);
    return AssignmentsPage;
}());

//# sourceMappingURL=assignments.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursesPage = (function () {
    function CoursesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoursesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    CoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\courses\courses.html"*/'<!--\n  Generated template for the CoursesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Courses</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Ongoing (Pågående)\n    </ion-card-header>\n    <ion-list>\n    <button ion-item>\n      <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n      <h2>Course name 1</h2>\n      <p>Instructor names</p>\n    </button>\n  </ion-list>\n    <ion-list>\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name 2</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Completed (Avslutade)\n    </ion-card-header>\n    <ion-list>\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name 1</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n    <ion-list>\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name 2</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Upcoming (Kommande)\n    </ion-card-header>\n    <ion-list>\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbacksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FeedbacksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbacksPage = (function () {
    function FeedbacksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbacksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbacksPage');
    };
    FeedbacksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedbacks',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\feedbacks\feedbacks.html"*/'<!--\n  Generated template for the FeedbacksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Feedbacks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\feedbacks\feedbacks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FeedbacksPage);
    return FeedbacksPage;
}());

//# sourceMappingURL=feedbacks.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportantdatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImportantdatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImportantdatesPage = (function () {
    function ImportantdatesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImportantdatesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImportantdatesPage');
    };
    ImportantdatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-importantdates',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\importantdates\importantdates.html"*/'<!--\n  Generated template for the ImportantdatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Important Dates</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\importantdates\importantdates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ImportantdatesPage);
    return ImportantdatesPage;
}());

//# sourceMappingURL=importantdates.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\messages\messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title align-items-center>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Instructor\n    </ion-card-header>\n    <ion-list>\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Instructor name</h2>\n        <p>Short message </p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Students\n    </ion-card-header>\n    <ion-list>\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Student name</h2>\n      <p>Short message </p>\n    </button>\n  </ion-list>\n    <ion-list>\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Student name</h2>\n        <p>Short message </p>\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = (function () {
    function MyprofilePage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getUser();
    }
    MyprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyprofilePage');
    };
    MyprofilePage.prototype.navToMyResults = function () {
        this.navCtrl.push('MyresultsPage');
        console.log('Navigating to another module');
    };
    MyprofilePage.prototype.navToSelfAssessments = function () {
        this.navCtrl.push('MyselfassessmentsPage');
        console.log('navigating within same module');
    };
    MyprofilePage.prototype.navToEditProfile = function () {
        this.navCtrl.push('EditprofilePage');
        console.log('navigating within same module');
    };
    MyprofilePage.prototype.getUser = function () {
        var _this = this;
        this.restProvider.getUsers()
            .subscribe(function (result) {
            _this.users = result;
            console.log(result['resultado'].student_id);
        }, function (error) {
            console.log(error);
        });
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\myprofile\myprofile.html"*/'<!--\n  Generated template for the MyprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header xmlns="http://www.w3.org/1999/html">\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Min Profil</ion-title>\n    <ion-buttons end> <button ion-button> STL </button> </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <!-- dimensions set using attributes -->\n    <div text-center>\n        <ion-img align="center" width="120" height="120" src="/assets/imgs/myprofile_icon.jpg"></ion-img>\n    </div>\n    <h5 ion-text color="danger" text-center> Full name</h5>\n    <ion-toolbar>\n        <ion-title>Personuppgifter</ion-title>\n    </ion-toolbar>\n\n  <ion-list>\n      <ion-item name="fullname">\n          <ion-icon md="md-person" item-start> </ion-icon> Full name\n      </ion-item>\n      <ion-item name="email"> <ion-icon md="md-mail" item-start> </ion-icon> Email</ion-item>\n      <ion-item name="telephone"> <ion-icon md="md-call" item-start> </ion-icon> Telephone</ion-item>\n      <ion-item name="cityname"> <ion-icon md="md-globe" item-start> </ion-icon> City name</ion-item>\n      <ion-item name="school_name"> <ion-icon md="md-home" item-start> </ion-icon> School name</ion-item>\n      <ion-item name="workplace_tools">\n          <strong> Workplace tools: </strong> text here!\n      </ion-item>\n      <ion-item name="teaching_grade">\n          <strong> Teaching Grade: </strong> text here!\n      </ion-item>\n      <ion-item name="work_methods">\n          <strong>\n              Work methods:\n          </strong> text here!\n      </ion-item>\n      <ion-item name="subjects">\n          <strong>Subjects: </strong> text here!\n      </ion-item>\n      <ion-item name="years_as_teacher">\n          <strong>Years as teacher: </strong> text here!\n      </ion-item>\n      <ion-item name="technical_support">\n          <strong>\n              Technical upport:\n          </strong>  text here!\n      </ion-item>\n      <ion-item name="student_to_student_feedback">\n          <strong>\n              Student to Student feedback:\n          </strong> text here!\n      </ion-item>\n      <ion-item name="technology_use_in_teaching">\n          <strong>\n              Technology use in teaching\n          </strong> text here!\n      </ion-item>\n  </ion-list>\n    <button (click)="navToMyResults()" ion-button color="primary_color">My Results</button>\n    <button (click)="navToSelfAssessments()" ion-button color="primary_color">Self-Assessments</button>\n    <button (click)="navToEditProfile()" ion-button color="primary_color">Edit Profile</button>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>Welcome to STL app</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content text-center class="backgroundcolor" id="image--background">\n\n  <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">\n        <div id="text">\n            <h3>Welcome to your App</h3>\n        </div>\n\n      <div color="danger" style="height: 100px">\n          <button ion-button block (click)="login()">Login</button>\n     </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		287,
		19
	],
	"../pages/assignment-description/assignment-description.module": [
		289,
		9
	],
	"../pages/assignmentdes/assignmentdes.module": [
		288,
		8
	],
	"../pages/assignments/assignments.module": [
		290,
		18
	],
	"../pages/assignmentsub/assignmentsub.module": [
		291,
		7
	],
	"../pages/courses/courses.module": [
		292,
		17
	],
	"../pages/editprofile/editprofile.module": [
		293,
		6
	],
	"../pages/feedbacks/feedbacks.module": [
		294,
		16
	],
	"../pages/home/home.module": [
		296,
		15
	],
	"../pages/importantdates/importantdates.module": [
		295,
		14
	],
	"../pages/login/login.module": [
		299,
		13
	],
	"../pages/menu/menu.module": [
		297,
		5
	],
	"../pages/messages/messages.module": [
		298,
		12
	],
	"../pages/myprofile/myprofile.module": [
		300,
		11
	],
	"../pages/myresults/myresults.module": [
		301,
		4
	],
	"../pages/myselfassessments/myselfassessments.module": [
		306,
		3
	],
	"../pages/selfassess/selfassess.module": [
		302,
		2
	],
	"../pages/studentmessage/studentmessage.module": [
		303,
		1
	],
	"../pages/teachermessage/teachermessage.module": [
		304,
		0
	],
	"../pages/welcome/welcome.module": [
		305,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(http) {
        this.http = http;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getUsers1 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://127.0.0.1:1000/api/student/1");
        });
    };
    ServiceProvider.prototype.getUsers = function () {
        var url = 'http://127.0.0.1:1000/api/student/1';
        return this.http.get(url);
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_assignments_assignments__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedbacks_feedbacks__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_importantdates_importantdates__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_messages_messages__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { ListPage } from '../pages/list/list';



//import {LoginPage} from "../pages/login/login";









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                //ListPage,
                //LoginPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_assignments_assignments__["a" /* AssignmentsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_feedbacks_feedbacks__["a" /* FeedbacksPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_importantdates_importantdates__["a" /* ImportantdatesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_messages_messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignmentdes/assignmentdes.module#AssignmentdesPageModule', name: 'AssignmentdesPage', segment: 'assignmentdes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignment-description/assignment-description.module#AssignmentDescriptionPageModule', name: 'AssignmentDescriptionPage', segment: 'assignment-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignments/assignments.module#AssignmentsPageModule', name: 'AssignmentsPage', segment: 'assignments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignmentsub/assignmentsub.module#AssignmentsubPageModule', name: 'AssignmentsubPage', segment: 'assignmentsub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedbacks/feedbacks.module#FeedbacksPageModule', name: 'FeedbacksPage', segment: 'feedbacks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/importantdates/importantdates.module#ImportantdatesPageModule', name: 'ImportantdatesPage', segment: 'importantdates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myresults/myresults.module#MyresultsPageModule', name: 'MyresultsPage', segment: 'myresults', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selfassess/selfassess.module#SelfassessPageModule', name: 'SelfassessPage', segment: 'selfassess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentmessage/studentmessage.module#StudentmessagePageModule', name: 'StudentmessagePage', segment: 'studentmessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teachermessage/teachermessage.module#TeachermessagePageModule', name: 'TeachermessagePage', segment: 'teachermessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myselfassessments/myselfassessments.module#MyselfassessmentsPageModule', name: 'MyselfassessmentsPage', segment: 'myselfassessments', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_assignments_assignments__["a" /* AssignmentsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_feedbacks_feedbacks__["a" /* FeedbacksPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_importantdates_importantdates__["a" /* ImportantdatesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_messages_messages__["a" /* MessagesPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feedbacks_feedbacks__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_importantdates_importantdates__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_messages_messages__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ListPage } from '../pages/list/list';
//import {LoginPage} from "../pages/login/login";









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__["a" /* MyprofilePage */] },
            { title: 'Courses', component: __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__["a" /* CoursesPage */] },
            //{ title: 'List', component: ListPage },
            { title: 'Assignments', component: __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__["a" /* AssignmentsPage */] },
            { title: 'Feedbacks', component: __WEBPACK_IMPORTED_MODULE_8__pages_feedbacks_feedbacks__["a" /* FeedbacksPage */] },
            { title: 'Important Dates', component: __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__["a" /* AssignmentsPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */] },
            { title: 'Messages', component: __WEBPACK_IMPORTED_MODULE_13__pages_messages_messages__["a" /* MessagesPage */] }
        ];
        this.pages2 = {
            homePage: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            profilePage: __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__["a" /* MyprofilePage */],
            coursePage: __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__["a" /* CoursesPage */],
            assignmentPage: __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__["a" /* AssignmentsPage */],
            feedbackPage: __WEBPACK_IMPORTED_MODULE_8__pages_feedbacks_feedbacks__["a" /* FeedbacksPage */],
            importantPage: __WEBPACK_IMPORTED_MODULE_9__pages_importantdates_importantdates__["a" /* ImportantdatesPage */],
            aboutPage: __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
            loginPage: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            messagesPage: __WEBPACK_IMPORTED_MODULE_13__pages_messages_messages__["a" /* MessagesPage */],
        };
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\stlproject\stlapp3\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>STL</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="menu-content">\n      <ion-card text-center class="hide-card" style="background-color: #f4f4f4">\n          <img src="/assets/imgs/myprofile_icon.jpg" class="custom-avatar"/>\n          <h2>Full name</h2>\n      </ion-card>\n    <ion-list no-lines>\n        <ion-item menuClose (click)="nav.setRoot(pages2.homePage)">\n            <ion-icon name="ios-home" item-start></ion-icon>\n            Start\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.profilePage)">\n            <ion-icon name="md-person" item-start></ion-icon>\n            Min profil\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.coursePage)">\n            <ion-icon name="md-book" item-start></ion-icon>\n            Kurser\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.assignmentPage)">\n            <ion-icon name="md-bookmarks" item-start></ion-icon>\n            Uppgifter\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.feedbackPage)">\n            <ion-icon name="md-happy" item-start></ion-icon>\n            Återkoppling\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.messagesPage)">\n            <ion-icon name="mail" item-start></ion-icon>\n            Messages\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.importantPage)">\n            <ion-icon name="calendar" item-start></ion-icon>\n            Viktiga Datum\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.aboutPage)">\n            <ion-icon name="md-information-circle" item-start></ion-icon>\n            About\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.loginPage)">\n            <ion-icon name="md-power" item-start></ion-icon>\n            Logout\n        </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
    */
    LoginPage.prototype.doLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.login = function () {
        // Your app login API web service call triggers
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>Login</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content text-center class="backgroundcolor" id="image--background">\n\n<img height="100px" width="100px" src="../../assets/imgs/person.png">\n\n    <div>\n        <h3>Login to your STL App</h3>\n    </div>\n\n  <ion-list>\n    <ion-item class="backgroundcolor">\n      <ion-label color="dark" fixed>Username</ion-label>\n      <ion-input  placeholder="Your username" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item class="backgroundcolor">\n      <ion-label color="dark" fixed>Password</ion-label>\n      <ion-input placeholder="Your password" type="password"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full (click)="doLogin()">Login</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.logout = function () {
        // Remove API token
        // const root = this.app.getRootNav();
        // root.popToRoot();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<img ion-right src="assets/imgs/stllogo.png" class="navbarLogo" />-->\n    <ion-title>Home</ion-title>\n    <ion-buttons end> <button ion-button> STL </button> </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home">\n  <ion-toolbar>\n    <ion-title>Påminnelser</ion-title>\n  </ion-toolbar>\n  <ion-card>\n    <ion-card-header>\n      Some text here from DB\n    </ion-card-header>\n    <ion-card-content>\n      General Text from DB\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Meddelanden\n    </ion-card-header>\n    <ion-list>\n      <button ion-item>\n        <ion-avatar item-start>\n          <img src="/assets/imgs/myprofile_icon.jpg">\n        </ion-avatar>\n        <h2>Student name</h2>\n        <p>The short version of the meassage goes here</p>\n      </button>\n    </ion-list>\n    <ion-list>\n    <button ion-item>\n      <ion-avatar item-start>\n        <img src="/assets/imgs/myprofile_icon.jpg">\n      </ion-avatar>\n      <h2>Student name</h2>\n      <p>The short version of the meassage goes here</p>\n    </button>\n  </ion-list>\n    <ion-list>\n      <button ion-item>\n        <ion-avatar item-start>\n          <img src="/assets/imgs/myprofile_icon.jpg">\n        </ion-avatar>\n        <h2>Instructor name</h2>\n        <p>The short version of the meassage goes here</p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map