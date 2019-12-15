(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-success-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/success/success.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/success/success.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <section class=\"login-container\">\n    <img src=\"./assets/illustrations/yes.png\" />\n    <h1>Yeah! Deu tudo certo!</h1>\n    <p>Sua solicitação ja foi processada.</p>\n    <app-button \n      label=\"Continuar navegando\"\n      expand=\"block\"\n      (onClick)=\"goToHome()\">\n    </app-button>\n  </section>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/success/success.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.module.ts ***!
  \*************************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/pages/success/success.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    { path: '', component: _success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"] }
];
let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"],
        ]
    })
], SuccessPageModule);



/***/ }),

/***/ "./src/app/pages/success/success.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #FFF;\n}\n\n.login-container {\n  padding: 120px 50px 50px 50px;\n}\n\nh1 {\n  color: #52bb15;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4ubG9naW4tY29udGFpbmVye1xuICBwYWRkaW5nOiAxMjBweCA1MHB4IDUwcHggNTBweDtcbn1cblxuaDEge1xuICBjb2xvcjogcmdiKDgyLCAxODcsIDIxKTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEyMHB4IDUwcHggNTBweCA1MHB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjNTJiYjE1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/success/success.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/success/success.page.ts ***!
  \***********************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SuccessPage = class SuccessPage {
    constructor(
    // private localstorage: LocalStorageService ,
    router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToHome() {
        //this.localstorage.setValue('NOT_FIRST_VIEW', true);
        this.router.navigate(['/home']);
    }
};
SuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: __webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/success/success.page.html"),
        styles: [__webpack_require__(/*! ./success.page.scss */ "./src/app/pages/success/success.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SuccessPage);



/***/ })

}]);
//# sourceMappingURL=pages-success-success-module-es2015.js.map