webpackJsonp([20],{

/***/ 102:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 103:
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
    AssignmentsPage.prototype.navToAssignDetails = function () {
        this.navCtrl.push('navToAssignDetails');
        console.log('Navigating to another module');
    };
    AssignmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assignments',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\assignments\assignments.html"*/'<!--\n  Generated template for the AssignmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align-items-center>Assignments</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Ongoing (Pågående)\n    </ion-card-header>\n    <ion-list class="custom">\n      <button ion-item (click)="navToAssignDetails()>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Case name 1</h2>\n        <p>Deadline: </p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n  <ion-card-header>\n    Completed\n  </ion-card-header>\n  <ion-list class="custom">\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Case name 1</h2>\n      <p>Submitted on: </p>\n    </button>\n  </ion-list>\n  <ion-list class="custom">\n    <button ion-item>\n      <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n      <h2>Case name 2</h2>\n      <p>Submitted on: </p>\n    </button>\n  </ion-list>\n  <ion-list class="custom">\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Case name 3</h2>\n      <p>Submitted on: </p>\n    </button>\n  </ion-list>\n  </ion-card>\n\n  <ion-card>\n  <ion-card-header>\n    Upcoming\n  </ion-card-header>\n  <ion-list class="custom">\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Case name 1</h2>\n      <p>Start date: </p>\n    </button>\n  </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\assignments\assignments.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], AssignmentsPage);
    return AssignmentsPage;
    var _a, _b;
}());

//# sourceMappingURL=assignments.js.map

/***/ }),

/***/ 104:
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
            selector: 'page-courses',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\courses\courses.html"*/'<!--\n  Generated template for the CoursesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Courses</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Ongoing (Pågående)\n    </ion-card-header>\n    <ion-list class="custom">\n    <button ion-item>\n      <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n      <h2>Course name 1</h2>\n      <p>Instructor names</p>\n    </button>\n  </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name 2</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Completed (Avslutade)\n    </ion-card-header>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name 1</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name 2</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Upcoming (Kommande)\n    </ion-card-header>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-people" md="md-people" item-start></ion-icon>\n        <h2>Course name</h2>\n        <p>Instructor names</p>\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 105:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FeedbacksPage);
    return FeedbacksPage;
}());

//# sourceMappingURL=feedbacks.js.map

/***/ }),

/***/ 106:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ImportantdatesPage);
    return ImportantdatesPage;
}());

//# sourceMappingURL=importantdates.js.map

/***/ }),

/***/ 107:
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
            selector: 'page-messages',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\messages\messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title align-items-center>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Instructor\n    </ion-card-header>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Instructor name</h2>\n        <p>Short message </p>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Students\n    </ion-card-header>\n    <ion-list class="custom">\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Student name</h2>\n      <p>Short message </p>\n    </button>\n  </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Student name</h2>\n        <p>Short message </p>\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(166);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 109:
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
            selector: 'page-welcome',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>Welcome to STL app</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content text-center  class="backgroundcolor" id="image--background">\n\n  <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">\n\n        <div id="text" margin-top="20px">\n            <h3>Welcome to your App</h3>\n        </div>\n\n      <div color="danger" style="height: 100px">\n          <button ion-button block (click)="login()">Login</button>\n     </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		288,
		40
	],
	"../pages/assignmendesc/assignmendesc.module": [
		320,
		30
	],
	"../pages/assignments/assignments.module": [
		291,
		39
	],
	"../pages/assignmentsub/assignmentsub.module": [
		293,
		29
	],
	"../pages/courses/courses.module": [
		292,
		38
	],
	"../pages/editprofile/editprofile.module": [
		294,
		28
	],
	"../pages/feedbacks/feedbacks.module": [
		295,
		37
	],
	"../pages/home/home.module": [
		296,
		36
	],
	"../pages/importantdates/importantdates.module": [
		297,
		35
	],
	"../pages/login/login.module": [
		299,
		34
	],
	"../pages/menu/menu.module": [
		298,
		27
	],
	"../pages/messages/messages.module": [
		300,
		33
	],
	"../pages/myprofile/myprofile.module": [
		302,
		32
	],
	"../pages/myresults/myresults.module": [
		301,
		26
	],
	"../pages/myselfassessments/myselfassessments.module": [
		306,
		25
	],
	"../pages/selfassess/selfassess.module": [
		303,
		24
	],
	"../pages/studentmessage/studentmessage.module": [
		304,
		23
	],
	"../pages/teachermessage/teachermessage.module": [
		305,
		22
	],
	"../pages/welcome/welcome.module": [
		307,
		31
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
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
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationProvider = (function () {
    function AuthenticationProvider(http) {
        this.http = http;
        console.log('Hello AuthenticationProvider Provider');
    }
    AuthenticationProvider.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://127.0.0.1:8000/api/user/login', user, { headers: headers });
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_assignments_assignments__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedbacks_feedbacks__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_importantdates_importantdates__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authentication_authentication__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages__ = __webpack_require__(107);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignment-description/assignment-description.module#AssignmentDescriptionPageModule', name: 'AssignmentDescriptionPage', segment: 'assignment-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignmentdes/assignmentdes.module#AssignmentdesPageModule', name: 'AssignmentdesPage', segment: 'assignmentdes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignments/assignments.module#AssignmentsPageModule', name: 'AssignmentsPage', segment: 'assignments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignmentsub/assignmentsub.module#AssignmentsubPageModule', name: 'AssignmentsubPage', segment: 'assignmentsub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedbacks/feedbacks.module#FeedbacksPageModule', name: 'FeedbacksPage', segment: 'feedbacks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/importantdates/importantdates.module#ImportantdatesPageModule', name: 'ImportantdatesPage', segment: 'importantdates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myresults/myresults.module#MyresultsPageModule', name: 'MyresultsPage', segment: 'myresults', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selfassess/selfassess.module#SelfassessPageModule', name: 'SelfassessPage', segment: 'selfassess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentmessage/studentmessage.module#StudentmessagePageModule', name: 'StudentmessagePage', segment: 'studentmessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teachermessage/teachermessage.module#TeachermessagePageModule', name: 'TeachermessagePage', segment: 'teachermessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myselfassessments/myselfassessments.module#MyselfassessmentsPageModule', name: 'MyselfassessmentsPage', segment: 'myselfassessments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages__["a" /* MessagesPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_authentication_authentication__["a" /* AuthenticationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feedbacks_feedbacks__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_importantdates_importantdates__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_messages_messages__ = __webpack_require__(107);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\stlproject\stlapp3\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>STL</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="menu-content" class="custom">\n      <ion-card text-center class="hide-card" class="custom">\n          <img src="/assets/imgs/myprofile_icon.jpg" class="custom-avatar"/>\n          <h2>Full name</h2>\n      </ion-card>\n    <ion-list no-lines class="custom">\n        <ion-item menuClose (click)="nav.setRoot(pages2.homePage)">\n            <ion-icon name="ios-home" item-start></ion-icon>\n            Start\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.profilePage)">\n            <ion-icon name="md-person" item-start></ion-icon>\n            Min profil\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.coursePage)">\n            <ion-icon name="md-book" item-start></ion-icon>\n            Kurser\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.assignmentPage)">\n            <ion-icon name="md-bookmarks" item-start></ion-icon>\n            Uppgifter\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.feedbackPage)">\n            <ion-icon name="md-happy" item-start></ion-icon>\n            Återkoppling\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.messagesPage)">\n            <ion-icon name="mail" item-start></ion-icon>\n            Messages\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.importantPage)">\n            <ion-icon name="calendar" item-start></ion-icon>\n            Viktiga Datum\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.aboutPage)">\n            <ion-icon name="md-information-circle" item-start></ion-icon>\n            About\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.loginPage)">\n            <ion-icon name="md-power" item-start></ion-icon>\n            Logout\n        </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
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
    function LoginPage(navCtrl, navParams, client, authentication, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.client = client;
        this.authentication = authentication;
        this.alertCtrl = alertCtrl;
        this.email = "anna.blohm@kalmar.se";
        this.password = "12345";
        this.user = {
            email: "",
            password: "",
        };
    }
    LoginPage.prototype.doLogin = function () {
        this.user.email = this.email;
        this.user.password = this.password;
        // console.log(this.auth());
        this.auth();
    };
    LoginPage.prototype.auth = function () {
        var _this = this;
        return this.authentication.login(this.user).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (error2) {
            console.log(error2);
            _this.showAlert();
        });
        // console.log(this.authUser);
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Login Faild!',
            subTitle: 'Email or Password wrong',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>-->\n\n\n\n  <!--<ion-navbar>-->\n\n    <!--<ion-title>Login</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n\n\n<!--</ion-header>-->\n\n\n\n\n\n<ion-content text-center class="backgroundcolor" id="image--background">\n\n\n\n<img height="100px" width="100px" src="../../assets/imgs/person.png">\n\n    <div>\n\n        <h3>Login to your STL App</h3>\n\n    </div>\n\n    <ion-list class="custom">\n\n        <ion-item>\n\n          <ion-label color="dark" fixed>Username</ion-label>\n\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="dark" fixed>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n  <button ion-button full (click)="doLogin()">Login</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
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
            selector: 'page-home',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!--<img ion-right src="assets/imgs/stllogo.png" class="navbarLogo" />-->\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end> <button ion-button> STL </button> </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="home">\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Påminnelser\n\n        </ion-card-header>\n\n        <ion-list class="custom">\n\n              <button ion-item>\n\n                  <ion-avatar item-start>\n\n                      <img src="/assets/imgs/myprofile_icon.jpg">\n\n                  </ion-avatar>\n\n                  <h2>Assignment case</h2>\n\n                  <p>Deadline: date</p>\n\n              </button>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Meddelanden\n\n    </ion-card-header>\n\n    <ion-list class="custom">\n\n      <button ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="/assets/imgs/myprofile_icon.jpg">\n\n        </ion-avatar>\n\n        <h2>{{ userdata.name }}</h2>\n\n        <p>The short version of the meassage goes here</p>\n\n      </button>\n\n    </ion-list>\n\n    <ion-list class="custom">\n\n    <button ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="/assets/imgs/myprofile_icon.jpg">\n\n      </ion-avatar>\n\n      <h2>Student name</h2>\n\n      <p>The short version of the meassage goes here</p>\n\n    </button>\n\n  </ion-list>\n\n    <ion-list class="custom">\n\n      <button ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="/assets/imgs/myprofile_icon.jpg">\n\n        </ion-avatar>\n\n        <h2>Instructor name</h2>\n\n        <p>The short version of the meassage goes here</p>\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map