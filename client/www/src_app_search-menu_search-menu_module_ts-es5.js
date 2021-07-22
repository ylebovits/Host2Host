(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhost_2_host"] = self["webpackChunkhost_2_host"] || []).push([["src_app_search-menu_search-menu_module_ts"], {
    /***/
    68739: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchMenuPageRoutingModule": function SearchMenuPageRoutingModule() {
          return (
            /* binding */
            _SearchMenuPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _search_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-menu.page */
      12703);

      var routes = [{
        path: '',
        component: _search_menu_page__WEBPACK_IMPORTED_MODULE_0__.SearchMenuPage
      }];

      var _SearchMenuPageRoutingModule = function SearchMenuPageRoutingModule() {
        _classCallCheck(this, SearchMenuPageRoutingModule);
      };

      _SearchMenuPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SearchMenuPageRoutingModule);
      /***/
    },

    /***/
    84858: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchMenuPageModule": function SearchMenuPageModule() {
          return (
            /* binding */
            _SearchMenuPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _search_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-menu-routing.module */
      68739);
      /* harmony import */


      var _search_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-menu.page */
      12703);

      var _SearchMenuPageModule = function SearchMenuPageModule() {
        _classCallCheck(this, SearchMenuPageModule);
      };

      _SearchMenuPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _search_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchMenuPageRoutingModule],
        declarations: [_search_menu_page__WEBPACK_IMPORTED_MODULE_1__.SearchMenuPage]
      })], _SearchMenuPageModule);
      /***/
    },

    /***/
    12703: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchMenuPage": function SearchMenuPage() {
          return (
            /* binding */
            _SearchMenuPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_search_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./search-menu.page.html */
      27987);
      /* harmony import */


      var _search_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-menu.page.scss */
      46175);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SearchMenuPage = /*#__PURE__*/function () {
        function SearchMenuPage() {
          _classCallCheck(this, SearchMenuPage);
        }

        _createClass(SearchMenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchMenuPage;
      }();

      _SearchMenuPage.ctorParameters = function () {
        return [];
      };

      _SearchMenuPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search-menu',
        template: _raw_loader_search_menu_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchMenuPage);
      /***/
    },

    /***/
    46175: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url(\"/assets/sap-image-library/snow-house.jpg\") no-repeat center center / cover;\n}\n\nion-searchbar {\n  --border-radius: 20px;\n  --box-shadow: 0px;\n  width: 60%;\n  margin: 0 auto;\n}\n\nion-back-button {\n  color: #0892A5;\n}\n\nion-card {\n  margin-top: 20px;\n  border-radius: 20px;\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZGQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic2VhcmNoLW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3NhcC1pbWFnZS1saWJyYXJ5L3Nub3ctaG91c2UuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tYm94LXNoYWRvdzogMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6ICMwODkyQTU7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiA5MCU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    27987: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-card>\n  <ion-searchbar search-icon=\"undefined\" placeholder=\"Where are you going?\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"search\"></ion-back-button>\n    </ion-buttons>\n  </ion-searchbar>\n  <ion-list>\n    <ion-item>\n      <ion-label>Pokémon Yellow</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mega Man X</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>The Legend of Zelda</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Mario World</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_search-menu_search-menu_module_ts-es5.js.map