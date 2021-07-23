(self["webpackChunkhost_2_host"] = self["webpackChunkhost_2_host"] || []).push([["src_app_members_search-menu_search-menu_module_ts"],{

/***/ 71474:
/*!*******************************************************************!*\
  !*** ./src/app/members/search-menu/search-menu-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchMenuPageRoutingModule": function() { return /* binding */ SearchMenuPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _search_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-menu.page */ 21146);




const routes = [
    {
        path: '',
        component: _search_menu_page__WEBPACK_IMPORTED_MODULE_0__.SearchMenuPage
    }
];
let SearchMenuPageRoutingModule = class SearchMenuPageRoutingModule {
};
SearchMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchMenuPageRoutingModule);



/***/ }),

/***/ 43538:
/*!***********************************************************!*\
  !*** ./src/app/members/search-menu/search-menu.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchMenuPageModule": function() { return /* binding */ SearchMenuPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _search_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-menu-routing.module */ 71474);
/* harmony import */ var _search_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-menu.page */ 21146);







let SearchMenuPageModule = class SearchMenuPageModule {
};
SearchMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchMenuPageRoutingModule
        ],
        declarations: [_search_menu_page__WEBPACK_IMPORTED_MODULE_1__.SearchMenuPage]
    })
], SearchMenuPageModule);



/***/ }),

/***/ 21146:
/*!*********************************************************!*\
  !*** ./src/app/members/search-menu/search-menu.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchMenuPage": function() { return /* binding */ SearchMenuPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_search_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search-menu.page.html */ 64753);
/* harmony import */ var _search_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-menu.page.scss */ 50785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SearchMenuPage = class SearchMenuPage {
    constructor() { }
    ngOnInit() {
    }
};
SearchMenuPage.ctorParameters = () => [];
SearchMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search-menu',
        template: _raw_loader_search_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchMenuPage);



/***/ }),

/***/ 50785:
/*!***********************************************************!*\
  !*** ./src/app/members/search-menu/search-menu.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"/assets/sap-image-library/snow-house.jpg\") no-repeat center center / cover;\n}\n\nion-searchbar {\n  --border-radius: 20px;\n  --box-shadow: 0px;\n  margin-right: auto;\n}\n\nion-back-button {\n  color: #0892A5;\n  padding-right: 20px;\n}\n\nion-card {\n  margin-top: 20px;\n  border-radius: 20px;\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZGQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzZWFyY2gtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc2FwLWltYWdlLWxpYnJhcnkvc25vdy1ob3VzZS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1ib3gtc2hhZG93OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiAjMDg5MkE1O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiA5MCU7XG59XG4iXX0= */");

/***/ }),

/***/ 64753:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/search-menu/search-menu.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card>\n  <ion-searchbar search-icon=\"undefined\" placeholder=\"Where are you going?\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"search\"></ion-back-button>\n    </ion-buttons>\n  </ion-searchbar>\n  <ion-list>\n    <ion-item>\n      <ion-label>Pokémon Yellow</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mega Man X</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>The Legend of Zelda</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Mario World</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_members_search-menu_search-menu_module_ts-es2015.js.map