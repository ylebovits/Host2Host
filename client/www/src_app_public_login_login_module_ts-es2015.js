(self["webpackChunkhost_2_host"] = self["webpackChunkhost_2_host"] || []).push([["src_app_public_login_login_module_ts"],{

/***/ 49466:
/*!******************************************************!*\
  !*** ./src/app/public/login/login-routing.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 22524);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
            },
            {
                path: 'registration',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_public_registration_registration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../registration/registration.module */ 76196)).then(m => m.RegistrationPageModule)
            },
        ]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 30545:
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 49466);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 22524);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 22524:
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 84059);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 26675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
        this.loginUrl = '';
    }
    ngOnInit() {
        this.loginUrl = '/tabs/search';
    }
    signIn() {
        console.log("this is working");
        localStorage.setItem('authenticated', '1');
        this.router.navigateByUrl(this.loginUrl);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 26675:
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 20px;\n}\n\nform {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\nion-input {\n  --background: #F3F3F3;\n  margin-bottom: 26px;\n  border-radius: 20px;\n  text-indent: 8px;\n}\n\nion-button {\n  margin-top: -10px;\n}\n\n.sign-in-btn {\n  --background: #06908F;\n  --color: white;\n  font-size: 12px;\n  font-weight: bold;\n  margin-left: auto;\n}\n\n.register-btn {\n  --background-hover: white;\n  --color: #00A3FF;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.icon {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  margin-right: -50%;\n  margin-bottom: 20px;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5mb3JtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxufVxuXG5pb24taW5wdXQge1xuICAgIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDhweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG5cbn1cblxuLnNpZ24taW4tYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwNjkwOEY7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucmVnaXN0ZXItYnRuIHtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAgIC0tY29sb3I6ICMwMEEzRkY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxufSJdfQ== */");

/***/ }),

/***/ 84059:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <img class='icon' src=\"/../../assets/icon/favicon.png\"/>\n  <form>\n    <ion-input type=\"text\" placeholder=\" Email \" required></ion-input>\n    <ion-input type=\"password\" placeholder=\" Password \" required></ion-input>\n    <ion-buttons>\n      <ion-button class=\"register-btn\" routerLink=\"./registration\" routerDirection=\"forward\" routerLinkActive=\"active\">\n        Register\n      </ion-button>\n      <ion-button class=\"sign-in-btn\" (click)=\"signIn()\" expand='full' shape=\"round\">\n        Sign in\n      </ion-button>\n    </ion-buttons>\n  </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_public_login_login_module_ts-es2015.js.map