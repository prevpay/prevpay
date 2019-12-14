(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"./assets/illustrations/map-person.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"textbox\">\n            <h1 class=\"slide-title\">Hello there!</h1>\n            <p class=\"slide-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium, erat a dictum ullamcorpera.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"./assets/illustrations/survey-flow.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"textbox\">\n            <h1 class=\"slide-title\">Second Content</h1>\n            <p class=\"slide-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium, erat a dictum ullamcorpera.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src=\"./assets/illustrations/money-pork.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"textbox\">\n              <h1 class=\"slide-title\">Third content</h1>\n              <p class=\"slide-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium, erat a dictum ullamcorpera.</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n\n      <ion-slide>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img src=\"./assets/illustrations/result-chart.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"textbox\">\n                <h1 class=\"slide-title\">Last One</h1>\n                <p class=\"slide-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium, erat a dictum ullamcorpera.</p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row style=\"margin-top: 30px\">\n              <ion-col>\n                <app-button \n                  label=\"\u001cVAMOS NESSA\"\n                  expand=\"block\"\n                  (onClick)=\"goToLogin()\">\n                </app-button>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    { path: '', component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"] }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"],
        ]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #FFF;\n}\n\nion-slides {\n  width: 100%;\n  height: 100%;\n}\n\n.textbox {\n  padding: 20px;\n}\n\n.slide-title {\n  color: #07c07b;\n  font-weight: bold;\n  text-align: left;\n}\n\n.slide-description {\n  color: #888;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1ib2lsZXJwbGF0ZS9zcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXh0Ym94IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgY29sb3I6ICMwN2MwN2I7O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNsaWRlLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGRkY7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGV4dGJveCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIGNvbG9yOiAjMDdjMDdiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNsaWRlLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



// import { LocalStorageService } from 'src/app/core/services/local-storage.service';
let WelcomePage = class WelcomePage {
    constructor(
    // private localstorage: LocalStorageService ,
    router) {
        this.router = router;
        this.slideOpts = {
            effect: 'flip'
        };
    }
    goToLogin() {
        //this.localstorage.setValue('NOT_FIRST_VIEW', true);
        this.router.navigate(['/explore']);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html"),
        styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map