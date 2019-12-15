(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"./assets/illustrations/welcome1.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"textbox\">\n            <h1 class=\"slide-title\">Olá, somos a PrevPay!</h1>\n            <p class=\"slide-description\">Somos uma nova forma de você construir seu futuro </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src=\"./assets/illustrations/pork.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"textbox\">\n              <h1 class=\"slide-title\">Cada gasto é guardado na sua previdência digital</h1>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src=\"./assets/illustrations/disc.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"textbox\">\n              <h1 class=\"slide-title\">Ou outros produtos de seguros</h1>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n\n      <ion-slide>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img src=\"./assets/illustrations/start.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"textbox\">\n                <h1 class=\"slide-title\">Vamos começar essa jornada?</h1>\n              </ion-col>\n            </ion-row>\n\n            <ion-row style=\"margin-top: 30px\">\n              <ion-col>\n                <app-button \n                  label=\"Começar\"\n                  expand=\"block\"\n                  (onClick)=\"goToLogin()\">\n                </app-button>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </ion-slide>\n  </ion-slides>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    { path: '', component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"] }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
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
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #FFF;\n}\n\nion-slides {\n  width: 100%;\n  height: 100%;\n}\n\n.textbox {\n  padding: 20px;\n}\n\n.slide-title {\n  color: #00B5E6;\n  font-weight: bold;\n  text-align: left;\n}\n\n.slide-description {\n  color: #888;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRleHRib3gge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBjb2xvcjogIzAwQjVFNjs7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2xpZGUtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXh0Ym94IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgY29sb3I6ICMwMEI1RTY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2xpZGUtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { LocalStorageService } from 'src/app/core/services/local-storage.service';
var WelcomePage = /** @class */ (function () {
    function WelcomePage(
    // private localstorage: LocalStorageService ,
    router) {
        this.router = router;
        this.slideOpts = {
            effect: 'flip'
        };
    }
    WelcomePage.prototype.goToLogin = function () {
        //this.localstorage.setValue('NOT_FIRST_VIEW', true);
        this.router.navigate(['/home']);
    };
    WelcomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map