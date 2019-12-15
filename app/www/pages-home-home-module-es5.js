(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <app-header [account]=\"account\"></app-header>\n  <main>\n\n    <section class=\"actions-content\">\n      <app-button \n        label=\"Receber\"\n        expand=\"block\"\n        (onClick)=\"showReceiveModal()\">\n      </app-button>\n      <app-button \n        label=\"Investir\"\n        expand=\"block\"\n        (onClick)=\"showInvestModal()\">\n      </app-button>\n    </section>\n\n    <h1>Minhas Transações</h1>\n\n    <div class=\"card\" *ngFor=\"let transaction of transactions;\">\n      <header class=\"card-header\">\n        <span class=\"card-title\">R$ {{ transaction.value }}</span>\n        <span class=\"card-subtitle\">{{ transaction.type ? 'Adicionou' : 'Investiu' }} através do <strong>{{ transaction.from }}</strong></span>\n      </header>\n    </div>\n\n    <h1>Produtos Contratados</h1>\n\n    <div class=\"card\" *ngFor=\"let product of products;\">\n      <header class=\"card-header\">\n        <span class=\"card-title\">{{ product.name }}</span>\n        <span class=\"card-subtitle\">{{ product.company }}</span>\n      </header>\n      <footer class=\"card-footer\">\n        <span class=\"card-information\">Investimento mínimo: </span>\n        <span class=\"card-subtitle\">R$ {{ product.monthlyPrice }}</span>\n      </footer>\n    </div>\n\n </main>\n</ion-content>\n\n<app-tabs></app-tabs>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/invest-modal/invest-modal.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/invest-modal/invest-modal.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\"\u001c>\n\n  <header>\n    <button class=\"close-button\" (click)=\"dismiss()\">X</button>\n  </header>\n\n  <section class=\"content\">\n    <h1>Aplique seu PrevCash</h1>\n    <p>Escolha um dos produtos contratados para usar seu PrevCash:</p>\n  </section>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let product of account.products;\">\n      <div class=\"card\" (click)=\"selectProduct(product\b)\">\n        <header class=\"card-header\">\n          <span class=\"card-title\">{{ product.name }}</span>\n          <span class=\"card-subtitle\">{{ product.company }}</span>\n        </header>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <section [hidden]=\"!selectedProduct\" class=\"content\">\n    <h3>Investimento</h3>\n    Valor: R$ \n    <form [formGroup]=\"productValueForm\">\n      <input type=\"number\" name=\"value\" formControlName=\"value\" required />\n    </form>\n  </section>\n\n  <section [hidden]=\"!selectedProduct\" class=\"content\" style=\"padding-top: 20px\">\n    <app-button \n      label=\"Continuar\"\n      expand=\"block\"\n      (click)=\"onSubmit()\">\n    </app-button>\n  </section>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/receive-modal/receive-modal.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/receive-modal/receive-modal.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\"\u001c>\n\n  <header>\n    <button class=\"close-button\" (click)=\"dismiss()\">X</button>\n  </header>\n\n  <section class=\"content\">\n    <h1>Adicionar dinheiro na minha carteira PrevPay</h1>\n    <p>Escolha um dos métodos de pagamento para carregar sua carteira:</p>\n  </section>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"card\" (click)=\"selectType('boleto'\b)\">\n        <img src=\"./assets/images/boleto.png\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"card\" (click)=\"selectType('transferencia'\b)\">\n        <img src=\"./assets/images/transferencia.png\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"card\" (click)=\"selectType('ame'\b)\">\n        <img src=\"./assets/images/ame.png\">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"card\" (click)=\"selectType('picpay'\b)\">\n        <img src=\"./assets/images/picpay.png\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <section [hidden]=\"!transaction.from\" class=\"content\">\n    <h3>Pagamento com <strong>{{ transaction.from }}</strong></h3>\n    Valor: R$ <form [formGroup]=\"transactionValueForm\">\n      <input type=\"number\" name=\"value\" formControlName=\"value\" required />\n    </form>\n  </section>\n\n  <section [hidden]=\"!transaction.from\" class=\"content\" style=\"padding-top: 20px\">\n    <app-button \n      label=\"Continuar\"\n      expand=\"block\"\n      (click)=\"onSubmit()\">\n    </app-button>\n  </section>\n\n</section>\n"

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
/* harmony import */ var _receive_modal_receive_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../receive-modal/receive-modal.page */ "./src/app/pages/receive-modal/receive-modal.page.ts");
/* harmony import */ var _invest_modal_invest_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../invest-modal/invest-modal.page */ "./src/app/pages/invest-modal/invest-modal.page.ts");










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
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                _receive_modal_receive_modal_page__WEBPACK_IMPORTED_MODULE_8__["ReceiveModal"],
                _invest_modal_invest_modal_page__WEBPACK_IMPORTED_MODULE_9__["InvestModal"]
            ],
            entryComponents: [
                _receive_modal_receive_modal_page__WEBPACK_IMPORTED_MODULE_8__["ReceiveModal"],
                _invest_modal_invest_modal_page__WEBPACK_IMPORTED_MODULE_9__["InvestModal"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.actions-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding-bottom: 40px;\n}\n\nh1 {\n  color: #038492;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card {\n  width: 100%;\n  margin: 20px 0;\n  padding: 20px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\n.card .card-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.card .card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px;\n  margin-top: 5px;\n  border-top: 1px solid #f1f1f1;\n}\n\n.card .card-title {\n  color: #333;\n  margin: 0;\n  padding: 0 0 5px 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-subtitle {\n  color: #666;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-information {\n  color: #b5b5b5;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWN0aW9ucy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuaDEge1xuICBjb2xvcjogIzAzODQ5MjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKTtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5jYXJkLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XG4gIH1cblxuICAuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMCA1cHggMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgLmNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgLmNhcmQtaW5mb3JtYXRpb24ge1xuICAgIGNvbG9yOiAjYjViNWI1O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cblxuXG59XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hY3Rpb25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjMDM4NDkyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FyZCAuY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLmNhcmQgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgY29sb3I6ICNiNWI1YjU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn0iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.state */ "./src/app/app.state.ts");
/* harmony import */ var _receive_modal_receive_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../receive-modal/receive-modal.page */ "./src/app/pages/receive-modal/receive-modal.page.ts");
/* harmony import */ var _invest_modal_invest_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../invest-modal/invest-modal.page */ "./src/app/pages/invest-modal/invest-modal.page.ts");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");







var HomePage = /** @class */ (function () {
    function HomePage(modalController, appState, accountService) {
        this.modalController = modalController;
        this.appState = appState;
        this.accountService = accountService;
        this.transactions = [];
        this.products = [];
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.appState.store.account) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.appState.store.account];
                    case 1:
                        _a.account = _b.sent();
                        console.log(this.account);
                        return [3 /*break*/, 3];
                    case 2:
                        this.accountService.getAccount('NzV1fU0kVAPBBPno8p3H')
                            .subscribe(function (acc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        this.appState.store.account = acc;
                                        _a = this;
                                        return [4 /*yield*/, this.appState.store.account];
                                    case 1:
                                        _a.account = _b.sent();
                                        this.transactions = this.account.transactions;
                                        this.products = this.account.products;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showReceiveModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _receive_modal_receive_modal_page__WEBPACK_IMPORTED_MODULE_4__["ReceiveModal"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.showInvestModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _invest_modal_invest_modal_page__WEBPACK_IMPORTED_MODULE_5__["InvestModal"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"] },
        { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"],
            src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/invest-modal/invest-modal.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/invest-modal/invest-modal.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.wrapper h3 {\n  color: #038492;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n  padding-top: 40px;\n}\n.wrapper ion-slides {\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n}\n.wrapper ion-slides ion-slide {\n  width: 70% !important;\n  padding: 10px;\n}\n.wrapper input {\n  border: 0;\n  border-bottom: 1px solid #000;\n}\n.wrapper header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n}\n.wrapper header button {\n  font-size: 30px;\n  font-weight: 100;\n  background: none;\n}\n.wrapper footer {\n  width: 100%;\n  position: fixed;\n  bottom: 10px;\n  padding: 10px;\n}\n.wrapper footer app-button {\n  width: 100%;\n}\n.wrapper .card {\n  width: 100%;\n  margin: 20px 0;\n  padding: 20px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.wrapper .card .card-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.wrapper .card .card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px;\n  margin-top: 5px;\n  border-top: 1px solid #f1f1f1;\n}\n.wrapper .card .card-title {\n  color: #333;\n  margin: 0;\n  padding: 0 0 5px 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.wrapper .card .card-subtitle {\n  color: #666;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.wrapper .card .card-information {\n  color: #b5b5b5;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvaW52ZXN0LW1vZGFsL2ludmVzdC1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludmVzdC1tb2RhbC9pbnZlc3QtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0FOO0FESUU7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7QUNGSjtBREtFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLFdBQUE7QUNISjtBREtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNITjtBRE9FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0xKO0FET0k7RUFDRSxXQUFBO0FDTE47QURTRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ1BKO0FEU0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNQTjtBRFVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDUk47QURXSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1ROO0FEWUk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1ZOO0FEYUk7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZXN0LW1vZGFsL2ludmVzdC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBoMyB7XG4gICAgY29sb3I6ICMwMzg0OTI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxuXG4gIGlvbi1zbGlkZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIHdpZHRoOiA3MCUhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGFwcC1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpO1xuICBcbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICBcbiAgICAuY2FyZC1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIH1cbiAgXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIFxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIFxuICAgIC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgICAgIGNvbG9yOiAjYjViNWI1O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIH0gIFxuXG59IiwiLndyYXBwZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud3JhcHBlciBoMyB7XG4gIGNvbG9yOiAjMDM4NDkyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4ud3JhcHBlciBpb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi53cmFwcGVyIGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLndyYXBwZXIgaW5wdXQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuLndyYXBwZXIgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcHBlciBoZWFkZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndyYXBwZXIgZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLndyYXBwZXIgZm9vdGVyIGFwcC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwcGVyIC5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ud3JhcHBlciAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndyYXBwZXIgLmNhcmQgLmNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbi53cmFwcGVyIC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDVweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ud3JhcHBlciAuY2FyZCAuY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ud3JhcHBlciAuY2FyZCAuY2FyZC1pbmZvcm1hdGlvbiB7XG4gIGNvbG9yOiAjYjViNWI1O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/invest-modal/invest-modal.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/invest-modal/invest-modal.page.ts ***!
  \*********************************************************/
/*! exports provided: InvestModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestModal", function() { return InvestModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.state */ "./src/app/app.state.ts");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var InvestModal = /** @class */ (function () {
    function InvestModal(modalController, appState, accountService, router) {
        this.modalController = modalController;
        this.appState = appState;
        this.accountService = accountService;
        this.router = router;
        this.transaction = {
            id: null,
            type: null,
            value: null,
            from: null,
            to: null,
        };
        this.selectedProduct = null;
        this.account = {
            id: null,
            name: null,
            email: null,
            currency: null,
            products: [],
            transactions: [],
        };
        this.slideOpts = {
            effect: 'flip'
        };
        this.productValueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    InvestModal.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.appState.store.account];
                    case 1:
                        _a.account = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvestModal.prototype.selectProduct = function (p) {
        this.transaction.from = p.company;
        this.selectedProduct = p;
        console.log(p);
    };
    InvestModal.prototype.onSubmit = function () {
        var value = this.productValueForm.value;
        this.transaction.value = value.value;
        this.transaction.type = false;
        this.transaction.id = Math.round(Math.random()).toString();
        this.account.transactions.push(this.transaction);
        this.account.currency = this.account.currency - this.transaction.value;
        this.accountService.updateAccount(this.account, 'NzV1fU0kVAPBBPno8p3H');
        this.goToSuccess();
        console.log(this.account);
    };
    InvestModal.prototype.goToSuccess = function () {
        this.router.navigate(['/success']);
        this.dismiss();
    };
    InvestModal.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    InvestModal.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"] },
        { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    InvestModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'invest-modal',
            template: __webpack_require__(/*! raw-loader!./invest-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/invest-modal/invest-modal.page.html"),
            styles: [__webpack_require__(/*! ./invest-modal.page.scss */ "./src/app/pages/invest-modal/invest-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"],
            src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], InvestModal);
    return InvestModal;
}());



/***/ }),

/***/ "./src/app/pages/receive-modal/receive-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/receive-modal/receive-modal.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.wrapper h3 {\n  color: #038492;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n  padding-top: 40px;\n}\n.wrapper ion-slides {\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n}\n.wrapper ion-slides ion-slide {\n  width: 60% !important;\n  padding: 10px;\n}\n.wrapper input {\n  border: 0;\n  border-bottom: 1px solid #000;\n}\n.wrapper header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n}\n.wrapper header button {\n  font-size: 30px;\n  font-weight: 100;\n  background: none;\n}\n.wrapper footer {\n  width: 100%;\n  position: fixed;\n  bottom: 10px;\n  padding: 10px;\n}\n.wrapper footer app-button {\n  width: 100%;\n}\n.wrapper .card {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin: 20px 0;\n  padding: 20px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  height: 120px;\n}\n.wrapper .card img {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvcmVjZWl2ZS1tb2RhbC9yZWNlaXZlLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVjZWl2ZS1tb2RhbC9yZWNlaXZlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUNBTjtBRElFO0VBQ0UsU0FBQTtFQUNBLDZCQUFBO0FDRko7QURLRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxXQUFBO0FDSEo7QURLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSE47QURPRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNMSjtBRE9JO0VBQ0UsV0FBQTtBQ0xOO0FEU0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0FDUEo7QURTSTtFQUNFLFlBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2VpdmUtbW9kYWwvcmVjZWl2ZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBoMyB7XG4gICAgY29sb3I6ICMwMzg0OTI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxuXG4gIGlvbi1zbGlkZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIHdpZHRoOiA2MCUhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGFwcC1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMik7XG4gICAgaGVpZ2h0OiAxMjBweDtcblxuICAgIGltZyB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cbn0iLCIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi53cmFwcGVyIGgzIHtcbiAgY29sb3I6ICMwMzg0OTI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi53cmFwcGVyIGlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLndyYXBwZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUge1xuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ud3JhcHBlciBpbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG59XG4ud3JhcHBlciBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwcGVyIGhlYWRlciBidXR0b24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud3JhcHBlciBmb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ud3JhcHBlciBmb290ZXIgYXBwLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXIgLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbi53cmFwcGVyIC5jYXJkIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/receive-modal/receive-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/receive-modal/receive-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: ReceiveModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveModal", function() { return ReceiveModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.state */ "./src/app/app.state.ts");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ReceiveModal = /** @class */ (function () {
    function ReceiveModal(modalController, appState, accountService, router) {
        this.modalController = modalController;
        this.appState = appState;
        this.accountService = accountService;
        this.router = router;
        this.transaction = {
            id: null,
            type: null,
            value: null,
            from: null,
            to: null,
        };
        this.account = {
            id: null,
            name: null,
            email: null,
            currency: null,
            products: [],
            transactions: [],
        };
        this.slideOpts = {
            effect: 'flip'
        };
        this.transactionValueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    ReceiveModal.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.appState.store.account];
                    case 1:
                        _a.account = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReceiveModal.prototype.selectType = function (from) {
        this.transaction.from = from;
    };
    ReceiveModal.prototype.onSubmit = function () {
        var value = this.transactionValueForm.value;
        this.transaction.value = value.value;
        this.transaction.type = true;
        this.transaction.id = Math.round(Math.random()).toString();
        this.account.transactions.push(this.transaction);
        this.account.currency = (this.account.currency + this.transaction.value);
        this.accountService.updateAccount(this.account, 'NzV1fU0kVAPBBPno8p3H');
        this.goToSuccess();
        console.log(this.account);
    };
    ReceiveModal.prototype.goToSuccess = function () {
        this.router.navigate(['/success']);
        this.dismiss();
    };
    ReceiveModal.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    ReceiveModal.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"] },
        { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ReceiveModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'receive-modal',
            template: __webpack_require__(/*! raw-loader!./receive-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/receive-modal/receive-modal.page.html"),
            styles: [__webpack_require__(/*! ./receive-modal.page.scss */ "./src/app/pages/receive-modal/receive-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"],
            src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ReceiveModal);
    return ReceiveModal;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map