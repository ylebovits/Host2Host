(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhost_2_host"] = self["webpackChunkhost_2_host"] || []).push([["src_app_members_dashboard_dashboard_module_ts"], {
    /***/
    38373: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "dashboardPageRoutingModule": function dashboardPageRoutingModule() {
          return (
            /* binding */
            _dashboardPageRoutingModule
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


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      99108);

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.dashboardPage
      }];

      var _dashboardPageRoutingModule = function dashboardPageRoutingModule() {
        _classCallCheck(this, dashboardPageRoutingModule);
      };

      _dashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _dashboardPageRoutingModule);
      /***/
    },

    /***/
    45462: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "dashboardPageModule": function dashboardPageModule() {
          return (
            /* binding */
            _dashboardPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      99108);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      38373);

      var _dashboardPageModule = function dashboardPageModule() {
        _classCallCheck(this, dashboardPageModule);
      };

      _dashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.dashboardPageRoutingModule],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.dashboardPage]
      })], _dashboardPageModule);
      /***/
    },

    /***/
    99108: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "dashboardPage": function dashboardPage() {
          return (
            /* binding */
            _dashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dashboard.page.html */
      26151);
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      53543);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _dashboardPage = /*#__PURE__*/function () {
        function dashboardPage(alertCtrl, toastCtrl) {
          _classCallCheck(this, dashboardPage);

          this.alertCtrl = alertCtrl;
          this.toastCtrl = toastCtrl;
          this.rate = 0;
        }

        _createClass(dashboardPage, [{
          key: "CheckInEvent",
          value: function CheckInEvent() {
            alert("Hello! I am an alert box!!");
          }
        }, {
          key: "report",
          value: function report() {
            var alert = this.alertCtrl.create({
              header: 'Emergency Support Initiated',
              message: 'Help is on the way! Hang tight.',
              buttons: ['OK']
            }).then(function (res) {
              res.present();
            });
          }
        }, {
          key: "displayItinerary",
          value: function displayItinerary() {
            return false;
          }
        }, {
          key: "onRate",
          value: function onRate(rate) {
            console.log(rate);
            this.rate = rate;
          }
        }]);

        return dashboardPage;
      }();

      _dashboardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }];
      };

      _dashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _dashboardPage);
      /***/
    },

    /***/
    53543: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".reportButton :host(.button-solid) {\n  --background: red;\n}\n\n.ItineraryButton {\n  text-align: center;\n  margin: auto;\n}\n\n.CityWelcome {\n  font-size: 28px;\n  font-weight: 600;\n  text-align: center;\n  margin: auto;\n}\n\n.TripLabel {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydEJ1dHRvbiA6aG9zdCguYnV0dG9uLXNvbGlkKXtcbiAgICAtLWJhY2tncm91bmQ6IHJlZDtcbn1cblxuLkl0aW5lcmFyeUJ1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLkNpdHlXZWxjb21lIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uVHJpcExhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    26151: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Trip Dashboard\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Trip Dashboard</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card>\n    <img src=\"../../assets/sap-image-library/philly.png\"/>\n    <ion-card-content>\n        <ion-card-tile class=\"CityWelcome\">\n          Welcome to Philadelphia!\n        </ion-card-tile>\n        <p>Host</p>\n        <p>Arrival</p>\n        <p>Departure</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n        <ion-card-tile>\n          Trip Itinerary\n        </ion-card-tile>\n        <p class=\"ItineraryButton\">\n        <ion-button [hidden]=\"!displayItinerary\" color=\"medium\" (click)=\"AddItinerary\"> No Itinerary! Add items here</ion-button>\n        </p>\n    </ion-card-content>\n  </ion-card>\n\n  <p>\n    <ion-button expand=\"block\" (click)=\"CheckInEvent\">Check In</ion-button>\n  </p>\n\n  <p>\n    <ion-button expand=\"block\">View Itinerary</ion-button>\n  </p>\n\n  <p>\n    <ion-button class=\"reportButton\" expand=\"block\" color=\"danger\" (click)=\"report()\" >Report</ion-button>\n  </p>\n\n  <ion-title>Please fill out this mandatory survey. Ratings range from 0 to 5</ion-title>\n\n  <ion-item>\n    <ion-label>Overall experience</ion-label>\n    <ion-range min=\"0\" max=\"5\" step=\"1\" value=\"1\" snaps color=\"warning\">\n      <ion-icon slot=\"start\" size=\"small\" color=\"warning\" name=\"star-outline\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"star\"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Interactions with the host</ion-label>\n    <ion-range min=\"0\" max=\"5\" step=\"1\" value=\"1\" snaps color=\"warning\">\n      <ion-icon slot=\"start\" size=\"small\" color=\"warning\" name=\"star-outline\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"star\"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cleanliness of the property</ion-label>\n    <ion-range min=\"0\" max=\"5\" step=\"1\" value=\"1\" snaps color=\"warning\">\n      <ion-icon slot=\"start\" size=\"small\" color=\"warning\" name=\"star-outline\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"star\"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Likelihood to recommend</ion-label>\n    <ion-range min=\"0\" max=\"5\" step=\"1\" value=\"1\" snaps color=\"warning\">\n      <ion-icon slot=\"start\" size=\"small\" color=\"warning\" name=\"star-outline\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"warning\" name=\"star\"></ion-icon>\n    </ion-range>\n  </ion-item>\n  \n  <ion-title>Did we miss anything? Leave a review!</ion-title>\n  <ion-item>\n    <ion-label class=\"TripLabel\" position=\"stacked\">Tell us about your trip</ion-label>\n    <ion-textarea></ion-textarea>\n  </ion-item>\n\n  \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_members_dashboard_dashboard_module_ts-es5.js.map