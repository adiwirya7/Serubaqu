(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n  <div class=\"ion-padding ion-margin-top\">\r\n    <form [formGroup]=\"signupform\" (ngSubmit)=\"doSignup()\" novalidate>\r\n    <ion-row>\r\n        <ion-col class=\"ion-padding-top ion-padding-bottom ion-margin-top\" >\r\n        <ion-list inset class=\"no-border\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nama Lengkap</ion-label>\r\n            <ion-input type=\"text\" [formControl]=\"signupform.controls['nama']\" required></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Tanggal Lahir</ion-label>\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" [formControl]=\"signupform.controls['tgl']\" required></ion-datetime>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input type=\"text\" [formControl]=\"signupform.controls['useremail']\" required></ion-input>\r\n            <div *ngIf=\"signupform.controls['useremail'].dirty && !signupform.controls['useremail'].valid\">\r\n              <p *ngIf=\"signupform.controls['useremail'].errors.InvalidEmail\">Harap masukkan ID email yang valid</p>\r\n            </div>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Kata Sandi</ion-label>\r\n            <ion-input type=\"password\" [formControl]=\"signupform.controls['userpass']\" required></ion-input>\r\n            <div *ngIf=\"signupform.controls['userpass'].dirty && !signupform.controls['userpass'].valid\">\r\n              <p *ngIf=\"signupform.controls['userpass'].errors?.minlength\">Kata sandi harus minimal 6 karakter</p>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"login-button ripple-parent\" type=\"submit\" [disabled]=\"!signupform.valid\">Daftar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"footer\">\r\n    <ion-button expand=\"block\" fill=\"clear\" expand=\"full\" [routerLink]=\"['/login']\">Sudah memiliki akun? Masuk disini</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-color: #80ccff;\n}\nion-content .logo {\n  height: auto;\n  max-width: 12em;\n  margin: 0 auto;\n  padding-bottom: 50px;\n}\nion-content .no-border {\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\nion-content ion-row {\n  align-items: center;\n  text-align: center;\n}\n@media only screen and (min-width: 768px) {\n  ion-content ion-col.col {\n    margin: 0 auto;\n    max-width: 40%;\n  }\n}\nion-content span {\n  color: white;\n}\nion-content ion-item {\n  padding-left: 10px !important;\n  margin-bottom: 0px;\n  background-color: #f6f6f6;\n  opacity: 0.7;\n  font-size: 0.9em;\n  --background: transparent !important;\n}\nion-content ion-list {\n  background-color: transparent !important;\n  margin: 0;\n}\nion-content .login-button {\n  width: 100%;\n  font-size: 0.9em;\n  --background: #39acdc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNOO0FBQ0k7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUNJO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsY0FBQTtFQUNOO0FBQ0Y7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUVJO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFBTjtBQUVJO0VBQ0Usd0NBQUE7RUFDQSxTQUFBO0FBQU47QUFFSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBjY2ZmO1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC13aWR0aDogMTJlbTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLm5vLWJvcmRlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaW9uLWNvbC5jb2wge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMzOWFjZGM7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _helpers_validation_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/validation.helpers */ "./src/app/helpers/validation.helpers.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");










let RegisterPage = class RegisterPage {
    constructor(fbauth, signupFormbuilder, valuechecker, toastservice, fbstore, loadingCtrl, firebaseAuthService, ngroute) {
        this.fbauth = fbauth;
        this.signupFormbuilder = signupFormbuilder;
        this.valuechecker = valuechecker;
        this.toastservice = toastservice;
        this.fbstore = fbstore;
        this.loadingCtrl = loadingCtrl;
        this.firebaseAuthService = firebaseAuthService;
        this.ngroute = ngroute;
        this.loading = null;
        this.signupform = this.signupFormbuilder.group({
            useremail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.valuechecker.emailCheck],
            userpass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            nama: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            tgl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    doSignup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.signupform.valid) {
                this.firebaseAuthService.signUp(this.signupform.get('nama').value, new Date(this.signupform.get('tgl').value), this.signupform.get('useremail').value, this.signupform.get('userpass').value)
                    .then(res => {
                    console.log(res);
                }, (err) => {
                    console.log(err.message);
                    this.firebaseAuthService.presentToast(err.message, 'danger');
                });
            }
            this.signupform.reset();
        });
    }
    goToSignup() {
        this.ngroute.navigateByUrl('login');
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _helpers_validation_helpers__WEBPACK_IMPORTED_MODULE_4__["Validator"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map