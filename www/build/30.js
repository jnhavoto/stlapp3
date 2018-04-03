webpackJsonp([30],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmendescPageModule", function() { return AssignmendescPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assignmendesc__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssignmendescPageModule = (function () {
    function AssignmendescPageModule() {
    }
    AssignmendescPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__assignmendesc__["a" /* AssignmendescPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__assignmendesc__["a" /* AssignmendescPage */]),
            ],
        })
    ], AssignmendescPageModule);
    return AssignmendescPageModule;
}());

//# sourceMappingURL=assignmendesc.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmendescPage; });
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
    AssignmendescPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assignmendesc',template:/*ion-inline-start:"C:\stlproject\stlapp3\src\pages\assignmendesc\assignmendesc.html"*/'<!--\n  Generated template for the AssignmendescPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Asssignment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>Assignment 4</ion-item>\n  <ion-card>\n    <ion-card-header>\n      Ongoing (Pågående)\n    </ion-card-header>\n    <ion-list class="custom">\n      <button ion-item (click)="navToAssignDetails()">\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Se uppgift</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Material</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Meddelanden</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Din grupp</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item>\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Skicka uppgift</h2>\n      </button>\n    </ion-list>\n    <ion-list class="custom">\n      <button ion-item >\n        <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n        <h2>Återkoppling</h2>\n      </button>\n    </ion-list>\n  </ion-card>\n  <button ion-item>\n    <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n    <h2>Skicka meddelande</h2>\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\stlproject\stlapp3\src\pages\assignmendesc\assignmendesc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AssignmendescPage);
    return AssignmendescPage;
}());

//# sourceMappingURL=assignmendesc.js.map

/***/ })

});
//# sourceMappingURL=30.js.map