(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhost_2_host"] = self["webpackChunkhost_2_host"] || []).push([["src_app_public_registration_registration_module_ts"], {
    /***/
    49031: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPageRoutingModule": function RegistrationPageRoutingModule() {
          return (
            /* binding */
            _RegistrationPageRoutingModule
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


      var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registration.page */
      78810);

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
      }];

      var _RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      _RegistrationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegistrationPageRoutingModule);
      /***/
    },

    /***/
    76196: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPageModule": function RegistrationPageModule() {
          return (
            /* binding */
            _RegistrationPageModule
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


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registration-routing.module */
      49031);
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registration.page */
      78810);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      _RegistrationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
      })], _RegistrationPageModule);
      /***/
    },

    /***/
    78810: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPage": function RegistrationPage() {
          return (
            /* binding */
            _RegistrationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./registration.page.html */
      94334);
      /* harmony import */


      var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registration.page.scss */
      8283);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage(http) {
          _classCallCheck(this, RegistrationPage);

          this.http = http;
        }

        _createClass(RegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doSomething",
          value: function doSomething() {
            console.log("stuff");
            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var postData = {
              "first_name": this.first_name,
              "last_name": this.last_name,
              "age": this.age,
              "email": this.email,
              "password": this.password,
              "phone_number": this.phone_number
            };
            this.http.post("http://127.0.0.1:8000/api/users/register/", postData, {}).subscribe(function (data) {
              console.log(data['_body']);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return RegistrationPage;
      }();

      _RegistrationPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _RegistrationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)(), (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegistrationPage);
      /***/
    },

    /***/
    8283: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-input {\n  --background: #F3F3F3;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  text-indent: 10px;\n}\n\nion-title {\n  padding-bottom: 25px;\n  font-weight: bold;\n  font-size: 14px;\n  opacity: 50%;\n}\n\n.sign-up-btn {\n  --background: #06908F;\n  --color: white;\n  font-size: 12px;\n  font-weight: bold;\n  margin-left: auto;\n}\n\n.icon {\n  width: 80%;\n  height: 80%;\n  margin-left: auto;\n}\n\nion-back-button {\n  --color: #00A3FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG59XG5cbmlvbi1pbnB1dCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LWluZGVudDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4uc2lnbi11cC1idG4ge1xuICAgIC0tYmFja2dyb3VuZDogIzA2OTA4RjtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIC0tY29sb3I6ICMwMEEzRkY7XG59Il19 */";
      /***/
    },

    /***/
    94334: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <form>\n    <img class='icon' src=\"/../../assets/other/sign-up-banner.png\"/>\n    <ion-title>Sign up to explore.</ion-title>\n    <ion-input [(ngModel)]=\"first_name\" name=\"1\" type=\"text\" placeholder=\"First name\" required></ion-input>\n    <ion-input [(ngModel)]=\"last_name\" name=\"2\" type=\"text\" placeholder=\"Last name\" required></ion-input>\n    <ion-input [(ngModel)]=\"age\" name=\"3\" type=\"number\" placeholder=\"Age\" step=\"undefined\" required></ion-input>\n    <ion-input [(ngModel)]=\"email\" name=\"4\" type=\"text\" placeholder=\"Email\" required></ion-input>\n    <ion-input [(ngModel)]=\"phone_number\" name=\"5\" type=\"text\" placeholder=\"Phone Number\" required></ion-input>\n    <ion-input [(ngModel)]=\"password\" name=\"6\" type=\"password\" placeholder=\"Password\"  required></ion-input>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n      <ion-button class=\"sign-up-btn\" type=\"submit\" (click)=\"doSomething()\" shape=\"round\">Sign Up</ion-button>\n    </ion-buttons>\n  </form>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_public_registration_registration_module_ts-es5.js.map