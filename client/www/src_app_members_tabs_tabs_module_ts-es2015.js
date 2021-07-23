(self["webpackChunkhost_2_host"] = self["webpackChunkhost_2_host"] || []).push([["src_app_members_tabs_tabs_module_ts"],{

/***/ 43805:
/*!*****************************************************!*\
  !*** ./src/app/members/tabs/tabs-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 41235);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_members_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../search/search.module */ 96650)).then(m => m.SearchPageModule)
                    },
                    {
                        path: 'search-menu',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_members_search-menu_search-menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../search-menu/search-menu.module */ 43538)).then(m => m.SearchMenuPageModule)
                    },
                ]
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_members_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 45462)).then(m => m.dashboardPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_members_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 45470)).then(m => m.profilePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/search',
                pathMatch: 'full'
            }
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 18405:
/*!*********************************************!*\
  !*** ./src/app/members/tabs/tabs.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 43805);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 41235);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 41235:
/*!*******************************************!*\
  !*** ./src/app/members/tabs/tabs.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 72713);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 57450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 57450:
/*!*********************************************!*\
  !*** ./src/app/members/tabs/tabs.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --background-focused: #0CA4A5;\n  --color-selected: #0CA4A5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMENBNEE1O1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICMwQ0E0QTU7XG59Il19 */");

/***/ }),

/***/ 72713:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/tabs/tabs.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"dashboard\">\n      <ion-icon name=\"book-outline\"></ion-icon>\n      <ion-label>Trip</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_members_tabs_tabs_module_ts-es2015.js.map