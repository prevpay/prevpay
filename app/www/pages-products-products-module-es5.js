(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products-modal/products-modal.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products-modal/products-modal.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\"\u001c>\n\n  <header>\n    <button class=\"close-button\" (click)=\"dismiss()\">X</button>\n  </header>\n\n  <section class=\"content\">\n    <h1>Previdência Vida Toda</h1>\n    <p>Você é o responsável por manter seu padrão de vida na aposentadoria e o quanto antes você começar a se preparar, melhor. Com aplicações mensais a partir de R$ 100, você cria uma reserva financeira para o seu futuro.\n      Além disso, o plano de previdência Vida Toda é uma forma de realizar seus sonhos, como juntar dinheiro para abrir seu próprio negócio ou garantir recursos para a educação do seu filho no futuro. Você faz uma reserva financeira e pode optar, no final do tempo estipulado, por receber uma quantia de uma vez só ou como uma renda mensal.</p>\n\n    <p>Investimento mínimo mensal: <strong>R$ 100,00</strong></p>\n  </section>\n\n  <app-button \n    label=\"CONTRATAR\"\n    expand=\"block\"\n    (click)=\"goToSuccess()\">\n  </app-button>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/products/products.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <app-header [account]=\"account\"></app-header>\n  <main>\n\n    <h1>PREVIDÊNCIA PRIVADA</h1>\n\n    <div class=\"card\" (click)=\"showReceiveModal()\">\n      <header class=\"card-header\">\n        <span class=\"card-title\">Previdência Vida Toda</span>\n        <span class=\"card-subtitle\">Mongeral Aegon</span>\n      </header>\n      <footer class=\"card-footer\">\n        <span class=\"card-information\">Investimento mínimo: </span>\n        <span class=\"card-subtitle\">R$ 100,00</span>\n      </footer>\n    </div>\n\n    <h1>SEGUROS</h1>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"card\">\n          <header class=\"card-header\">\n            <span class=\"card-title\">R$ 78,00 - 50% OFF</span>\n            <span class=\"card-subtitle\">Seguro Automotivo</span>\n            <span class=\"card-information\">Caixa Seguradora</span>\n          </header>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class=\"card\">\n          <header class=\"card-header\">\n            <span class=\"card-title\">R$ 49,00 - 40% OFF</span>\n            <span class=\"card-subtitle\">Seguro Residencial</span>\n            <span class=\"card-information\">Youse</span>\n          </header>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n </main>\n</ion-content>\n\n<app-tabs></app-tabs>"

/***/ }),

/***/ "./src/app/pages/products-modal/products-modal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/products-modal/products-modal.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.wrapper header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n}\n.wrapper header button {\n  font-size: 30px;\n  font-weight: 100;\n  background: none;\n}\n.wrapper footer {\n  width: 100%;\n  position: fixed;\n  bottom: 10px;\n  padding: 10px;\n}\n.wrapper footer app-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMtbW9kYWwvcHJvZHVjdHMtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy1tb2RhbC9wcm9kdWN0cy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREdFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy1tb2RhbC9wcm9kdWN0cy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgYXBwLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxufSIsIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLndyYXBwZXIgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcHBlciBoZWFkZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndyYXBwZXIgZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLndyYXBwZXIgZm9vdGVyIGFwcC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/products-modal/products-modal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/products-modal/products-modal.page.ts ***!
  \*************************************************************/
/*! exports provided: ProductsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModal", function() { return ProductsModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductsModal = /** @class */ (function () {
    function ProductsModal(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ProductsModal.prototype.goToSuccess = function () {
        this.router.navigate(['/success']);
        this.dismiss();
    };
    ProductsModal.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    ProductsModal.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProductsModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'products-modal',
            template: __webpack_require__(/*! raw-loader!./products-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products-modal/products-modal.page.html"),
            styles: [__webpack_require__(/*! ./products-modal.page.scss */ "./src/app/pages/products-modal/products-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductsModal);
    return ProductsModal;
}());



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/products/products.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _products_modal_products_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../products-modal/products-modal.page */ "./src/app/pages/products-modal/products-modal.page.ts");









var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
                    }
                ])
            ],
            declarations: [
                _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"],
                _products_modal_products_modal_page__WEBPACK_IMPORTED_MODULE_8__["ProductsModal"],
            ],
            entryComponents: [
                _products_modal_products_modal_page__WEBPACK_IMPORTED_MODULE_8__["ProductsModal"]
            ]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/products/products.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nh1 {\n  color: #038492;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nion-slides {\n  width: 100%;\n  height: 180px;\n  position: absolute;\n  left: 0;\n}\n\nion-slides ion-slide {\n  width: 70% !important;\n  padding: 10px;\n}\n\n.card {\n  width: 100%;\n  margin: 20px 0;\n  padding: 20px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  min-height: 135px;\n}\n\n.card .card-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.card .card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px;\n  margin-top: 5px;\n  border-top: 1px solid #f1f1f1;\n}\n\n.card .card-title {\n  color: #333;\n  margin: 0;\n  padding: 0 0 5px 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-subtitle {\n  color: #666;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-information {\n  color: #b5b5b5;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNDRjs7QURDRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FKOztBREdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjMDM4NDkyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG5cbiAgaW9uLXNsaWRlIHtcbiAgICB3aWR0aDogNzAlIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgbWluLWhlaWdodDogMTM1cHg7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY2FyZC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgICBjb2xvcjogI2I1YjViNTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG59XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgxIHtcbiAgY29sb3I6ICMwMzg0OTI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtaW4taGVpZ2h0OiAxMzVweDtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FyZCAuY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLmNhcmQgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgY29sb3I6ICNiNWI1YjU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/products/products.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_modal_products_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products-modal/products-modal.page */ "./src/app/pages/products-modal/products-modal.page.ts");
/* harmony import */ var src_app_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.state */ "./src/app/app.state.ts");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");






var ProductsPage = /** @class */ (function () {
    function ProductsPage(modalController, appState, accountService) {
        this.modalController = modalController;
        this.appState = appState;
        this.accountService = accountService;
        this.account = {
            id: null,
            name: null,
            email: null,
            currency: null,
            products: [],
            transactions: [],
        };
    }
    ProductsPage.prototype.ngOnInit = function () {
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
    ProductsPage.prototype.showReceiveModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _products_modal_products_modal_page__WEBPACK_IMPORTED_MODULE_3__["ProductsModal"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"] },
        { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }
    ]; };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/pages/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"],
            src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es5.js.map