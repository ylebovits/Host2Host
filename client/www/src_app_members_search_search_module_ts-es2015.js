(self["webpackChunkhost_2_host"] = self["webpackChunkhost_2_host"] || []).push([["src_app_members_search_search_module_ts"],{

/***/ 12086:
/*!*********************************************************!*\
  !*** ./src/app/members/search/search-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchRoutingModule": function() { return /* binding */ SearchRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 96709);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage,
    },
];
let SearchRoutingModule = class SearchRoutingModule {
};
SearchRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SearchRoutingModule);



/***/ }),

/***/ 96650:
/*!*************************************************!*\
  !*** ./src/app/members/search/search.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": function() { return /* binding */ SearchPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 96709);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-routing.module */ 12086);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 96709:
/*!***********************************************!*\
  !*** ./src/app/members/search/search.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": function() { return /* binding */ SearchPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search.page.html */ 84433);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 68022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SearchPage = class SearchPage {
    constructor() { }
};
SearchPage.ctorParameters = () => [];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchPage);



/***/ }),

/***/ 68022:
/*!*************************************************!*\
  !*** ./src/app/members/search/search.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"/assets/sap-image-library/snow-house.jpg\") no-repeat center center / cover;\n}\n\nion-button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\nion-text {\n  color: black;\n  padding: 20px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\nion-icon {\n  color: #0892A5;\n  --ionicon-stroke-width: 48px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zYXAtaW1hZ2UtbGlicmFyeS9zbm93LWhvdXNlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG59XG5cbmlvbi10ZXh0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogIzA4OTJBNTtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ 84433:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/search/search.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <ion-content class=\"ion-padding\">\n\n    <ion-button routerLink=\"./search-menu\" routerDirection=\"forward\"  routerLinkActive=\"active\" shape=\"round\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-text color=\"primary\"> Explore </ion-text>\n    </ion-button>\n\n  </ion-content>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_members_search_search_module_ts-es2015.js.map