(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"./assets/illustrations/map-person.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"textbox\">\n            <h1 class=\"slide-title\">Encontre missões</h1>\n            <p class=\"slide-description\">Em lugares comuns do seu dia-a-dia ou explore novos lugares em busca de missões.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"./assets/illustrations/survey-flow.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"textbox\">\n            <h1 class=\"slide-title\">Colete ou valide informações</h1>\n            <p class=\"slide-description\">Responda perguntas simples, tire fotos ou coloque sua opinião sobre lugares, serviços ou produtos.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src=\"./assets/illustrations/money-pork.png\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"textbox\">\n              <h1 class=\"slide-title\">Ganhe dinheiro a cada missão</h1>\n              <p class=\"slide-description\">Cada missão finalizada você ganha cashback pela sua contribuição</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n\n      <ion-slide>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img src=\"./assets/illustrations/result-chart.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"textbox\">\n                <h1 class=\"slide-title\">Ajude empresas</h1>\n                <p class=\"slide-description\">A cada missão você ajuda empresas a validar informações e melhorar seus serviços.</p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row style=\"margin-top: 30px\">\n              <ion-col>\n                <campoo-button \n                  label=\"\u001cVAMOS NESSA\"\n                  expand=\"block\"\n                  (onClick)=\"goToLogin()\">\n                </campoo-button>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </ion-slide>\n  </ion-slides>\n</ion-content>\n"

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

module.exports = "ion-content {\n  --background: #FFF;\n}\n\nion-slides {\n  width: 100%;\n  height: 100%;\n}\n\n.textbox {\n  padding: 20px;\n}\n\n.slide-title {\n  color: #07c07b;\n  font-weight: bold;\n  text-align: left;\n}\n\n.slide-description {\n  color: #888;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL0NhbXBvby9kZXZlbG9wbWVudC9jYW1wb28vc3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGRkY7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGV4dGJveCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIGNvbG9yOiAjMDdjMDdiOztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zbGlkZS1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRleHRib3gge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBjb2xvcjogIzA3YzA3YjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zbGlkZS1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

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
        this.router.navigate(['/home']);
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