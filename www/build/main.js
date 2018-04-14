webpackJsonp([20],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmendescPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AssignmendescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssignmendescPage = (function () {
    function AssignmendescPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AssignmendescPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignmendescPage');
    };
    AssignmendescPage.prototype.navToAssignDetails = function () {
        this.navCtrl.push('MyresultsPage');
        console.log('Navigating to another module');
    };
    AssignmendescPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assignmendesc',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\assignmendesc\assignmendesc.html"*/'<!--\n  Generated template for the AssignmendescPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Asssignment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>Assignment 4</ion-item>\n  <ion-card>\n    <ion-card-header>\n      Ongoing (Pågående)\n    </ion-card-header>\n    <ion-list class="custom">\n      <button ion-item (click)="navToAssignDetails()">\n        <ion-icon name="information-circle" item-start></ion-icon>\n        <h2>Se uppgift</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon name="bookmarks" item-start></ion-icon>\n        <h2>Material</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon name="megaphone" item-start></ion-icon>\n        <h2>Meddelanden</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon name="people" item-start></ion-icon>\n        <h2>Din grupp</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon name="create" item-start></ion-icon>\n        <h2>Skicka uppgift</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item >\n        <ion-icon name="happy" item-start></ion-icon>\n        <h2>Återkoppling</h2>\n      </button>\n    </ion-list>\n  </ion-card>\n  <button ion-item>\n    <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n    <h2>Skicka meddelande</h2>\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\assignmendesc\assignmendesc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AssignmendescPage);
    return AssignmendescPage;
}());

//# sourceMappingURL=assignmendesc.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {AssigndetailsPage} from "../assigndetails/assigndetails";
/**
 * Generated class for the AssignmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssignmentsPage = (function () {
    function AssignmentsPage(navCtrl, navParams, assignments) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.assignments = assignments;
        this.fill();
    }
    AssignmentsPage.prototype.fill = function () {
        var _this = this;
        this.assignments.getAssignments().subscribe(function (data) {
            _this.arryAssignments = data["assignment_description"];
            console.log(_this.arryAssignments);
        }, function (error2) {
            console.log(error2);
        });
    };
    AssignmentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignmentsPage');
    };
    AssignmentsPage.prototype.navToAssignDetails = function (assignment) {
        this.navCtrl.push('AssigndetailsPage', assignment);
        // console.log(assignment);
    };
    AssignmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assignments',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\assignments\assignments.html"*/'<!--\n\n  Generated template for the AssignmentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align-items-center>Assignments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Ongoing (Pågående)\n\n    </ion-card-header>\n\n\n\n    <ion-list class="custom" *ngFor="let assignment of arryAssignments">\n\n\n\n      <button ion-item (click)="navToAssignDetails(assignment)">\n\n        <ion-icon name="person" item-start></ion-icon>\n\n        <h2>Case: {{assignment.case}}</h2>\n\n        <p>Deadline: {{assignment.deadline}} </p>\n\n      </button>\n\n      \n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n  <ion-card-header>\n\n    Completed\n\n  </ion-card-header>\n\n  <ion-list class="custom">\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      <h2>Case name 1</h2>\n\n      <p>Submitted on: </p>\n\n    </button>\n\n  </ion-list>\n\n  <ion-list class="custom">\n\n    <button ion-item>\n\n      <ion-icon name="people" item-start></ion-icon>\n\n      <h2>Case name 2</h2>\n\n      <p>Submitted on: </p>\n\n    </button>\n\n  </ion-list>\n\n  <ion-list class="custom">\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      <h2>Case name 3</h2>\n\n      <p>Submitted on: </p>\n\n    </button>\n\n  </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n  <ion-card-header>\n\n    Upcoming\n\n  </ion-card-header>\n\n  <ion-list class="custom">\n\n    <button ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      <h2>Case name 1</h2>\n\n      <p>Start date: </p>\n\n    </button>\n\n  </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\assignments\assignments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], AssignmentsPage);
    return AssignmentsPage;
}());

//# sourceMappingURL=assignments.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbacksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FeedbacksPage);
    return FeedbacksPage;
}());

//# sourceMappingURL=feedbacks.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportantdatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ImportantdatesPage);
    return ImportantdatesPage;
}());

//# sourceMappingURL=importantdates.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-messages',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\messages\messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title align-items-center>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-toolbar>\n    <ion-title class="currentTitle">Current</ion-title>\n  </ion-toolbar>\n  <ion-card>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Instructor name</h2>\n        <p>Short message </p>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n    <button ion-item>\n      <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n      <h2>Student name</h2>\n      <p>Short message </p>\n    </button>\n  </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Student name</h2>\n        <p>Short message </p>\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(81);
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
    function MyprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.test = "UserNAME";
        this.user = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* global */].loginState.user[0];
        // this.user = homePage.userAuth;
    }
    MyprofilePage.prototype.fill = function () {
        this.userData.fullname = this.user.user.first_name + " " + this.user.user.last_name;
        this.userData.email = this.user.user.email;
        this.userData.school = this.user.school.name;
        this.userData.telephone = this.user.user.telephone;
    };
    MyprofilePage.prototype.ionViewDidLoad = function () {
        console.log(this.user);
        // console.log(global.loginState);
        // this.fill()
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
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\myprofile\myprofile.html"*/'<!--\n\n  Generated template for the MyprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header xmlns="http://www.w3.org/1999/html">\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Min Profil</ion-title>\n\n    <ion-buttons end> <button ion-button> STL </button> </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <!-- dimensions set using attributes -->\n\n    <div text-center>\n\n        <ion-img align="center" width="120" height="120" src="/assets/imgs/myprofile_icon.jpg"></ion-img>\n\n    </div>\n\n    <h5 ion-text color="danger" text-center> {{ user.user.first_name + "  "+ user.user.last_name}}</h5>\n\n    <!--<h5 ion-text color="danger" text-center> Full name</h5>-->\n\n    <ion-toolbar>\n\n        <ion-item class="currentTitle">Personuppgifter</ion-item>\n\n    </ion-toolbar>\n\n  <ion-list>\n\n      <ion-item name="fullname">\n\n          <ion-icon md="md-person" item-start> </ion-icon>\n\n          {{ user.user.first_name + "  "+ user.user.last_name}}\n\n      </ion-item>\n\n      <ion-item name="email"> <ion-icon md="md-mail" item-start> </ion-icon> {{ user.user.email }} </ion-item>\n\n      <ion-item name="telephone"> <ion-icon md="md-call" item-start> </ion-icon> {{ user.user.telephone }} </ion-item>\n\n      <ion-item name="cityname"> <ion-icon md="md-globe" item-start> </ion-icon> {{ user.city.city_name }} </ion-item>\n\n      <ion-item name="school_name"> <ion-icon md="md-home" item-start> </ion-icon> {{ user.school.school_name }} </ion-item>\n\n      <ion-item name="workplace_tools">\n\n          <strong> Workplace tools: </strong> {{ user.workplace_tools }}\n\n      </ion-item>\n\n      <ion-item name="teaching_grade">\n\n          <strong> Teaching Grade: </strong> {{ user.teaching_grade }}\n\n      </ion-item>\n\n      <ion-item name="work_methods">\n\n          <strong> Work methods: </strong> {{ user.work_methods }}\n\n      </ion-item>\n\n      <ion-item name="subjects">\n\n          <strong> Subjects: </strong> {{ user.subjects }}\n\n      </ion-item>\n\n      <ion-item name="years_as_teacher">\n\n          <strong>  Years as teacher: </strong> {{ user.years_as_teacher }}\n\n      </ion-item>\n\n      <ion-item name="technical_support">\n\n          <strong> Technical upport: </strong>  {{ user.technical_support }}\n\n      </ion-item>\n\n      <ion-item name="student_to_student_feedback">\n\n          <strong> Student to Student feedback: </strong> {{ user.student_to_student_feedback }}\n\n      </ion-item>\n\n      <ion-item name="technology_use_in_teaching">\n\n          <strong> Technology use in teaching: </strong> {{ user.technology_use_in_teaching }}\n\n      </ion-item>\n\n  </ion-list>\n\n    <button (click)="navToMyResults()" ion-button color="primary_color">My Results</button>\n\n    <button (click)="navToSelfAssessments()" ion-button color="primary_color">Self-Assessments</button>\n\n    <button (click)="navToEditProfile()" ion-button color="primary_color">Edit Profile</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		291,
		19
	],
	"../pages/assigndetails/assigndetails.module": [
		292,
		18
	],
	"../pages/assignmendesc/assignmendesc.module": [
		293,
		17
	],
	"../pages/assignments/assignments.module": [
		294,
		16
	],
	"../pages/assignmentsub/assignmentsub.module": [
		295,
		7
	],
	"../pages/courses/courses.module": [
		296,
		15
	],
	"../pages/editprofile/editprofile.module": [
		297,
		6
	],
	"../pages/feedbacks/feedbacks.module": [
		298,
		14
	],
	"../pages/home/home.module": [
		299,
		13
	],
	"../pages/importantdates/importantdates.module": [
		300,
		12
	],
	"../pages/login/login.module": [
		301,
		11
	],
	"../pages/menu/menu.module": [
		302,
		5
	],
	"../pages/messages/messages.module": [
		303,
		10
	],
	"../pages/myprofile/myprofile.module": [
		304,
		9
	],
	"../pages/myresults/myresults.module": [
		305,
		4
	],
	"../pages/myselfassessments/myselfassessments.module": [
		306,
		3
	],
	"../pages/selfassess/selfassess.module": [
		307,
		2
	],
	"../pages/studentmessage/studentmessage.module": [
		308,
		1
	],
	"../pages/teachermessage/teachermessage.module": [
		309,
		0
	],
	"../pages/welcome/welcome.module": [
		310,
		8
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssigndetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AssigndetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssigndetailsPage = (function () {
    function AssigndetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.assignment = this.navParams.data;
        console.log(this.assignment);
    }
    AssigndetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssigndetailsPage');
    };
    AssigndetailsPage.prototype.navToAssignDetails = function () {
    };
    AssigndetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assigndetails',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\assigndetails\assigndetails.html"*/'<!--\n  Generated template for the AssigndetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Assignment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  {{assignment.case}}\n  <ion-list no-lines>\n    <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Deadline: {{assignment.deadline}} </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Start date: {{assignment.startdate}} </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Available date: {{assignment.available_date}} </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-card>\n    <ion-card-header>\n      Instructions\n    </ion-card-header>\n    <ion-card-content>\n      {{assignment.instructions}}\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\assigndetails\assigndetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AssigndetailsPage);
    return AssigndetailsPage;
}());

//# sourceMappingURL=assigndetails.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
var a = "Test";
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_assignments_assignments__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_courses_courses__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedbacks_feedbacks__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_importantdates_importantdates__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authentication_authentication__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_assignmendesc_assignmendesc__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import {AssigndetailsPage} from "../pages/assigndetails/assigndetails";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
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
                __WEBPACK_IMPORTED_MODULE_19__pages_assignmendesc_assignmendesc__["a" /* AssignmendescPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assigndetails/assigndetails.module#AssigndetailsPageModule', name: 'AssigndetailsPage', segment: 'assigndetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignmendesc/assignmendesc.module#AssignmendescPageModule', name: 'AssignmendescPage', segment: 'assignmendesc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignments/assignments.module#AssignmentsPageModule', name: 'AssignmentsPage', segment: 'assignments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignmentsub/assignmentsub.module#AssignmentsubPageModule', name: 'AssignmentsubPage', segment: 'assignmentsub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedbacks/feedbacks.module#FeedbacksPageModule', name: 'FeedbacksPage', segment: 'feedbacks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/importantdates/importantdates.module#ImportantdatesPageModule', name: 'ImportantdatesPage', segment: 'importantdates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myresults/myresults.module#MyresultsPageModule', name: 'MyresultsPage', segment: 'myresults', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myselfassessments/myselfassessments.module#MyselfassessmentsPageModule', name: 'MyselfassessmentsPage', segment: 'myselfassessments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selfassess/selfassess.module#SelfassessPageModule', name: 'SelfassessPage', segment: 'selfassess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentmessage/studentmessage.module#StudentmessagePageModule', name: 'StudentmessagePage', segment: 'studentmessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teachermessage/teachermessage.module#TeachermessagePageModule', name: 'TeachermessagePage', segment: 'teachermessage', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_19__pages_assignmendesc_assignmendesc__["a" /* AssignmendescPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feedbacks_feedbacks__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_importantdates_importantdates__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_messages_messages__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_assignmendesc_assignmendesc__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_assigndetails_assigndetails__ = __webpack_require__(212);
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
            { title: 'Messages', component: __WEBPACK_IMPORTED_MODULE_13__pages_messages_messages__["a" /* MessagesPage */] },
            { title: 'AssignmentDesc', component: __WEBPACK_IMPORTED_MODULE_14__pages_assignmendesc_assignmendesc__["a" /* AssignmendescPage */] },
            { title: 'AssignDetais', component: __WEBPACK_IMPORTED_MODULE_15__pages_assigndetails_assigndetails__["a" /* AssigndetailsPage */] },
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
            assignmentDescPage: __WEBPACK_IMPORTED_MODULE_14__pages_assignmendesc_assignmendesc__["a" /* AssignmendescPage */],
            assignDetailsPage: __WEBPACK_IMPORTED_MODULE_15__pages_assigndetails_assigndetails__["a" /* AssigndetailsPage */],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\stlproject\stlapp3\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>STL</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="menu-content" class="custom">\n      <ion-card text-center class="hide-card" class="custom">\n          <img src="/assets/imgs/myprofile_icon.jpg" class="custom-avatar"/>\n          <h2>Full name</h2>\n      </ion-card>\n    <ion-list no-lines class="custom">\n        <ion-item menuClose (click)="nav.setRoot(pages2.homePage)">\n            <ion-icon name="ios-home" item-start></ion-icon>\n            Start\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.profilePage, {user: \'test\' })">\n            <ion-icon name="md-person" item-start></ion-icon>\n            Min profil\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.coursePage)">\n            <ion-icon name="md-book" item-start></ion-icon>\n            Kurser\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.assignmentPage)">\n            <ion-icon name="md-bookmarks" item-start></ion-icon>\n            Uppgifter\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.feedbackPage)">\n            <ion-icon name="md-happy" item-start></ion-icon>\n            Återkoppling\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.messagesPage)">\n            <ion-icon name="mail" item-start></ion-icon>\n            Messages\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.importantPage)">\n            <ion-icon name="calendar" item-start></ion-icon>\n            Viktiga Datum\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.aboutPage)">\n            <ion-icon name="md-information-circle" item-start></ion-icon>\n            About\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n        <ion-item menuClose (click)="nav.setRoot(pages2.loginPage)">\n            <ion-icon name="md-power" item-start></ion-icon>\n            Logout\n        </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global__ = __webpack_require__(81);
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
    function LoginPage(navCtrl, navParams, client, authentication, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.client = client;
        this.authentication = authentication;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.email = "mbergstrom@instructure.com";
        this.password = "12345";
        this.user = {
            email: "",
            password: "",
        };
    }
    LoginPage.prototype.doLogin = function () {
        this.user.email = this.email;
        this.user.password = this.password;
        this.auth();
    };
    LoginPage.prototype.auth = function () {
        var _this = this;
        this.presentLoading();
        return this.authentication.login(this.user).subscribe(function (data) {
            _this.dismissLoading();
            __WEBPACK_IMPORTED_MODULE_5__global__["a" /* global */].loginState = data;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (error2) {
            console.log(error2);
            _this.showAlert();
        });
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Login Failed!',
            subTitle: 'Email or Password wrong',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    };
    LoginPage.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>-->\n\n\n\n  <!--<ion-navbar>-->\n\n    <!--<ion-title>Login</ion-title>-->\n\n  <!--</ion-navbar>-->\n\n\n\n<!--</ion-header>-->\n\n\n\n\n\n<ion-content text-center class="backgroundcolor" id="image--background">\n\n\n\n<img height="100px" width="100px" src="../../assets/imgs/person.png">\n\n    <div>\n\n        <h3>Login to your STL App</h3>\n\n    </div>\n\n    <ion-list class="custom">\n\n        <ion-item>\n\n          <ion-label color="dark" fixed>Username</ion-label>\n\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="dark" fixed>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n  <button ion-button full (click)="doLogin()">Login</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MyprofilePage } from '../myprofile/myprofile';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, app, assignments) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.assignments = assignments;
        this.userAuth = { user: {} };
        this.user = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* global */].loginState.user[0];
        this.getLastAssignment();
    }
    //get all assignments
    HomePage.prototype.fill = function () {
        this.assignments.getAssignments().subscribe(function (data) {
            console.log(data);
        }, function (error2) {
            console.log(error2);
        });
    };
    //Get the las Assignment ordered by deadline
    HomePage.prototype.getLastAssignment = function () {
        var _this = this;
        this.assignments.getLastAssignment().subscribe(function (data) {
            _this.last_assignment = data["lastAssignment"];
            console.log("Last assign");
            console.log(_this.last_assignment.case);
        }, function (error2) {
            console.log(error2);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log(this.assignments);
        // this.userdata.name = this.userAuth.user[0].user.first_name;
    };
    HomePage.prototype.logout = function () {
        // root.popToRoot();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!--<img ion-right src="assets/imgs/stllogo.png" class="navbarLogo" />-->\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end> <button ion-button> STL </button> </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="home">\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Reminders (Påminnelsers)\n\n        </ion-card-header>\n\n        <ion-list class="custom">\n\n              <button ion-item>\n\n                  <ion-avatar item-start>\n\n                      <img src="/assets/imgs/myprofile_icon.jpg">\n\n                  </ion-avatar>\n\n                  <!--<h2>Case: {{teste.case}}</h2>-->\n\n                  <!--<h2>Case: {{last_assignment.case}}</h2>-->\n\n                  <!--<p>Deadline: {{last_assignment.deadline}}</p>-->\n\n              </button>\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Messages (Meddelanden)\n\n    </ion-card-header>\n\n    <ion-list class="custom">\n\n      <button ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="/assets/imgs/myprofile_icon.jpg">\n\n        </ion-avatar>\n\n        <!--<h2>{{ userdata.name }}</h2>-->\n\n          <h2></h2>\n\n        <p>The short version of the meassage goes here</p>\n\n      </button>\n\n    </ion-list>\n\n    <ion-list class="custom">\n\n    <button ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="/assets/imgs/myprofile_icon.jpg">\n\n      </ion-avatar>\n\n      <h2>Student name</h2>\n\n      <p>The short version of the meassage goes here</p>\n\n    </button>\n\n  </ion-list>\n\n    <ion-list class="custom">\n\n      <button ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="/assets/imgs/myprofile_icon.jpg">\n\n        </ion-avatar>\n\n        <h2>Instructor name</h2>\n\n        <p>The short version of the meassage goes here</p>\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
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
    ServiceProvider.prototype.getAssignments = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var url = 'http://127.0.0.1:8000/api/assignment-descriptions';
        return this.http.get(url, { headers: headers });
    };
    ServiceProvider.prototype.getLastAssignment = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var url = 'http://127.0.0.1:8000/api/last-assignment-descriptions';
        return this.http.get(url, { headers: headers });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ServiceProvider);
    return ServiceProvider;
    var _a;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
var global = {
    loginState: { user: [] },
};
//# sourceMappingURL=global.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map