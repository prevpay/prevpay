(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <app-header></app-header>\n  <main>\n\n    <h1>SEUS BOLETOS</h1>\n\n    <div class=\"card\">\n      <header class=\"card-header\">\n        <span class=\"card-title\">R$ 20,00</span>\n        <span class=\"card-subtitle\">pago para Sabesp SA</span>\n      </header>\n    </div>\n\n    <div class=\"card\">\n      <header class=\"card-header\">\n        <span class=\"card-title\">R$ 40,00</span>\n        <span class=\"card-subtitle\">pago para Eletropaulo SA</span>\n      </header>\n    </div>\n\n\n    <!--\n    <div class=\"card\">\n      <header class=\"card-header\">\n        <span class=\"card-title\">R$ 200,00</span>\n        <span class=\"card-subtitle\">Caixa Seguradora Brasil S.A</span>\n        <span class=\"card-information\">\n          <svg-icon src=\"./assets/icon/pin-outline.svg\" [svgStyle]=\"{ 'width.px':12 , 'fill':'#b5b5b5' }\"></svg-icon>\n          Rua da consolação, 2223, Apto 31...\n        </span>\n      </header>\n      <footer class=\"card-footer\">\n        <span class=\"card-subtitle\">R$ 20,00</span>\n        <span class=\"card-information\">10 min</span>\n      </footer>\n    </div>\n    -->\n\n </main>\n</ion-content>\n\n<app-tabs></app-tabs>"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nh1 {\n  color: #06aa6c;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card {\n  width: 100%;\n  margin: 20px 0;\n  padding: 20px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\n.card .card-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.card .card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px;\n  margin-top: 5px;\n  border-top: 1px solid #f1f1f1;\n}\n\n.card .card-title {\n  color: #333;\n  margin: 0;\n  padding: 0 0 5px 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-subtitle {\n  color: #666;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-information {\n  color: #b5b5b5;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1ib2lsZXJwbGF0ZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgxIHtcbiAgY29sb3I6ICMwNmFhNmM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMik7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY2FyZC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgICBjb2xvcjogI2I1YjViNTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG5cblxufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjMDZhYTZjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FyZCAuY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLmNhcmQgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgY29sb3I6ICNiNWI1YjU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map