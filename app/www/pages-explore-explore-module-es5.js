(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-explore-explore-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/explore/explore.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/explore/explore.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <app-header></app-header>\n  <main>\n    <section #mapRef class=\"map\" [hidden]=\"!map.show\"></section>\n    \n    <section class=\"content-header\">\n      <h1>EXPLORE YOUR WORLD</h1>\n      <section [hidden]=\"!mission.show\" class=\"mission-details\">\n        <div class=\"card\" (click)=\"showMissionDetailsModal()\">\n\n          <div class=\"card-avatar\">\n            <img src=\"./assets/images/brand.jpg\" />\n          </div>\n\n          <div class=\"card-body\">\n            <span class=\"card-title\">{{ mission.name }}</span>\n            <span class=\"card-information\">\n              <svg-icon src=\"./assets/icon/pin-outline.svg\" [svgStyle]=\"{ 'width.px':12 , 'fill':'#b5b5b5' }\"></svg-icon>\n              {{ mission.address }}\n            </span>\n            <span class=\"card-price\">\n              {{ mission.price }}\n            </span>\n            <span class=\"card-action\">\n              <button>Mais Detalhes</button>\n            </span>\n          </div>\n\n        </div>\n      </section>\n    </section>\n\n    <section class=\"fail-message-wrapper\" [hidden]=\"!failMessage.show\">\n      <fail-message \n        [title]=\"failMessage.title\"\n        [message]=\"failMessage.message\"\n        [icon]=\"failMessage.icon\"></fail-message>\n    </section>\n  </main>\n</ion-content>\n<app-tabs></app-tabs>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mission-detail/mission-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mission-detail/mission-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\"\u001c>\n\n  <header>\n    <button class=\"close-button\" (click)=\"dismiss()\">X</button>\n  </header>\n\n  <section class=\"content\">\n    <h1>{{ mission.name }}</h1>\n    <p>{{ mission.address }}</p>\n  </section>\n\n  <footer>\n    <app-button \n      label=\"\u001cVAMOS NESSA\"\n      expand=\"block\">\n    </app-button>\n  </footer>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/explore/data.ts":
/*!***************************************!*\
  !*** ./src/app/pages/explore/data.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Data = [
    {
        "position": {
            "lat": -23.6245629,
            "lng": -46.6392116
        },
        "name": "Verificar Cardápio",
        "company": "Pizzaria Nova Veneza São Judas",
        "address": "R. Prof. Aprígio Gonzaga, 290 - São Judas, São Paulo - SP, 04303-001",
        "price": "R$ 10,00",
        "icon": "assets/markercluster/marker.svg"
    },
    {
        "position": {
            "lat": -23.6322311,
            "lng": -46.6379475
        },
        "name": "Coletar o preço das cervejas na loja",
        "company": "Pizzaria Nova Veneza São Judas",
        "address": "R. Prof. Aprígio Gonzaga, 290 - São Judas, São Paulo - SP, 04303-001",
        "price": "R$ 10,00",
        "icon": "assets/markercluster/marker.svg"
    },
    {
        "position": {
            "lat": -23.6322311,
            "lng": -46.6379475
        },
        "name": "Quantas maças está em estoque",
        "company": "Pizzaria Nova Veneza São Judas",
        "address": "R. Prof. Aprígio Gonzaga, 290 - São Judas, São Paulo - SP, 04303-001",
        "price": "R$ 10,00",
        "icon": "assets/markercluster/marker.svg"
    },
    {
        "position": {
            "lat": -23.6487139,
            "lng": -46.639928
        },
        "name": "Verificar Cardápio",
        "company": "Pizzaria Nova Veneza São Judas",
        "address": "R. Prof. Aprígio Gonzaga, 290 - São Judas, São Paulo - SP, 04303-001",
        "price": "R$ 10,00",
        "icon": "assets/markercluster/marker.svg"
    },
    {
        "position": {
            "lat": -23.6487139,
            "lng": -46.639928
        },
        "name": "Verificar Cardápio",
        "company": "Pizzaria Nova Veneza São Judas",
        "address": "R. Prof. Aprígio Gonzaga, 290 - São Judas, São Paulo - SP, 04303-001",
        "price": "R$ 10,00",
        "icon": "assets/markercluster/marker.svg"
    },
];
/* harmony default export */ __webpack_exports__["default"] = (Data);


/***/ }),

/***/ "./src/app/pages/explore/explore.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.module.ts ***!
  \*************************************************/
/*! exports provided: ExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore.page */ "./src/app/pages/explore/explore.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mission-detail/mission-detail.page */ "./src/app/pages/mission-detail/mission-detail.page.ts");









var routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]
    }
];
var ExplorePageModule = /** @class */ (function () {
    function ExplorePageModule() {
    }
    ExplorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"],
                _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_8__["MissionDetailPage"]
            ],
            entryComponents: [
                _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_8__["MissionDetailPage"]
            ]
        })
    ], ExplorePageModule);
    return ExplorePageModule;
}());



/***/ }),

/***/ "./src/app/pages/explore/explore.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content main {\n  padding: 0;\n}\n\n.map {\n  width: 100%;\n  height: 100%;\n  position: static;\n  background-color: #e5e3df;\n}\n\n.fail-message-wrapper {\n  width: 100%;\n  height: 90%;\n  padding: 100px 30px;\n}\n\n.content-header {\n  width: 100%;\n  height: 120px;\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: white;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, white 70%);\n}\n\nh1 {\n  color: #06aa6c;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.mission-details {\n  width: 100%;\n  height: 200px;\n}\n\n.card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 150px;\n  margin: 20px 0;\n  padding: 15px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\n.card .card-avatar {\n  width: 100px;\n}\n\n.card .card-avatar img {\n  background: yellow;\n  border-radius: 100%;\n}\n\n.card .card-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-left: 20px;\n}\n\n.card .card-body .card-title {\n  color: #333;\n  margin: 0;\n  padding: 0 0 5px 0;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.card .card-body .card-price {\n  color: var(--ion-color-primary);\n  margin: 0;\n  padding: 5px 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-body .card-information {\n  color: #666;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.card .card-body .card-action {\n  padding: 5px 0;\n}\n\n.card .card-body .card-action button {\n  width: 100%;\n  border-radius: 30px;\n  color: #fff;\n  background: #555;\n  text-transform: uppercase;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUhBQUE7RUFBQSx1RUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNERjs7QURHRTtFQUNFLFlBQUE7QUNESjs7QURFSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNBTjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0ZOOztBREtJO0VBQ0UsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSE47O0FETUk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pOOztBRE9JO0VBQ0UsY0FBQTtBQ0xOOztBRE1NO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBsb3JlL2V4cGxvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjcsIDIyMyk7XG59XG5cbi5mYWlsLW1lc3NhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgcGFkZGluZzogMTAwcHggMzBweDtcbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA3MCUpO1xufVxuXG5oMXtcbiAgY29sb3I6ICMwNmFhNmM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubWlzc2lvbi1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpO1xuXG4gIC5jYXJkLWF2YXRhciB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGltZyB7XG4gICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDAgMCA1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAuY2FyZC1wcmljZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG5cbiAgICAuY2FyZC1pbmZvcm1hdGlvbiB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuXG4gICAgLmNhcmQtYWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuIiwiaW9uLWNvbnRlbnQgbWFpbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlM2RmO1xufVxuXG4uZmFpbC1tZXNzYWdlLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHBhZGRpbmc6IDEwMHB4IDMwcHg7XG59XG5cbi5jb250ZW50LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCB3aGl0ZSA3MCUpO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjMDZhYTZjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLm1pc3Npb24tZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uY2FyZCAuY2FyZC1hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG59XG4uY2FyZCAuY2FyZC1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLmNhcmQgLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtcHJpY2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYWN0aW9uIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFjdGlvbiBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/explore/explore.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/explore/explore.page.ts ***!
  \***********************************************/
/*! exports provided: ExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePage", function() { return ExplorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/* harmony import */ var _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mission-detail/mission-detail.page */ "./src/app/pages/mission-detail/mission-detail.page.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./src/app/pages/explore/data.ts");







var ExplorePage = /** @class */ (function () {
    function ExplorePage(platform, loadingCtrl, modalController) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.map = {
            show: true
        };
        this.mission = {
            show: false
        };
        this.failMessage = {
            icon: src_app_models__WEBPACK_IMPORTED_MODULE_4__["FailMessageIcon"].NOT_FOUND,
            title: "Ops, cadê você?",
            message: "para encontrar missões próximas você precisa habilitar sua localização.",
            show: false
        };
    }
    ExplorePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadMap()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ExplorePage.prototype.loadMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.mapElement.nativeElement.style.position = 'static';
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Por favor, aguarde...' })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Environment"].setEnv({
                            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY',
                            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY'
                        });
                        this.googleMaps = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create(this.mapElement.nativeElement, { controls: { zoom: false } });
                        this.googleMaps.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_READY).subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.googleMaps.getMyLocation()
                                    .then(function (location) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.googleMaps.moveCamera({
                                                    target: location.latLng,
                                                    zoom: 18
                                                })];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, this.googleMaps.addMarkerSync({
                                                        icon: 'assets/markercluster/pointer.svg',
                                                        animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAnimation"].DROP,
                                                        position: location.latLng
                                                    })];
                                            case 2:
                                                _a.sent();
                                                this.addCluster(_data__WEBPACK_IMPORTED_MODULE_6__["default"]);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })
                                    .catch(function () { return _this.showFailMessage(); })
                                    .finally(function () { return _this.loading.dismiss(); });
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExplorePage.prototype.addCluster = function (data) {
        var _this = this;
        var markerCluster = this.googleMaps.addMarkerClusterSync({
            markers: data,
            icons: [
                {
                    min: 3,
                    max: 9,
                    url: "./assets/markercluster/small.png",
                    label: {
                        color: "white"
                    }
                },
                {
                    min: 10,
                    url: "./assets/markercluster/large.png",
                    label: {
                        color: "white"
                    }
                }
            ]
        });
        this.googleMaps.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_DRAG_START).subscribe(function () {
            _this.mission.show = false;
        });
        markerCluster.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function (params) {
            var marker = params[1];
            marker.hideInfoWindow();
            _this.mission.name = marker.get("name");
            _this.mission.company = marker.get("company");
            _this.mission.address = marker.get("address");
            _this.mission.price = marker.get("price");
            _this.mission.show = true;
            console.log(marker);
        });
    };
    ExplorePage.prototype.showFailMessage = function () {
        this.googleMaps.remove();
        this.map.show = false;
        this.failMessage.show = true;
    };
    ExplorePage.prototype.showMissionDetailsModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_5__["MissionDetailPage"],
                            componentProps: {
                                mission: this.mission
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExplorePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapRef', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExplorePage.prototype, "mapElement", void 0);
    ExplorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! raw-loader!./explore.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/explore/explore.page.html"),
            styles: [__webpack_require__(/*! ./explore.page.scss */ "./src/app/pages/explore/explore.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ExplorePage);
    return ExplorePage;
}());



/***/ }),

/***/ "./src/app/pages/mission-detail/mission-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/mission-detail/mission-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.wrapper header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n}\n.wrapper header button {\n  font-size: 30px;\n  font-weight: 100;\n  background: none;\n}\n.wrapper footer {\n  width: 100%;\n  position: fixed;\n  bottom: 10px;\n  padding: 10px;\n}\n.wrapper footer app-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL3ByZXZwYXkvYXBwL3NyYy9hcHAvcGFnZXMvbWlzc2lvbi1kZXRhaWwvbWlzc2lvbi1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taXNzaW9uLWRldGFpbC9taXNzaW9uLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREdFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taXNzaW9uLWRldGFpbC9taXNzaW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgYXBwLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxufSIsIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLndyYXBwZXIgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JhcHBlciBoZWFkZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndyYXBwZXIgZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLndyYXBwZXIgZm9vdGVyIGFwcC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/mission-detail/mission-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/mission-detail/mission-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: MissionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionDetailPage", function() { return MissionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MissionDetailPage = /** @class */ (function () {
    function MissionDetailPage(modalController) {
        this.modalController = modalController;
    }
    MissionDetailPage.prototype.dismiss = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    MissionDetailPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MissionDetailPage.prototype, "mission", void 0);
    MissionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mission-detail',
            template: __webpack_require__(/*! raw-loader!./mission-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mission-detail/mission-detail.page.html"),
            styles: [__webpack_require__(/*! ./mission-detail.page.scss */ "./src/app/pages/mission-detail/mission-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], MissionDetailPage);
    return MissionDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-explore-explore-module-es5.js.map