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
const Data = [
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore.page */ "./src/app/pages/explore/explore.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mission-detail/mission-detail.page */ "./src/app/pages/mission-detail/mission-detail.page.ts");









const routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]
    }
];
let ExplorePageModule = class ExplorePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/explore/explore.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content main {\n  padding: 0;\n}\n\n.map {\n  width: 100%;\n  height: 100%;\n  position: static;\n  background-color: #e5e3df;\n}\n\n.fail-message-wrapper {\n  width: 100%;\n  height: 90%;\n  padding: 100px 30px;\n}\n\n.content-header {\n  width: 100%;\n  height: 120px;\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: white;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), color-stop(70%, white));\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, white 70%);\n}\n\nh1 {\n  color: #06aa6c;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.mission-details {\n  width: 100%;\n  height: 200px;\n}\n\n.card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 150px;\n  margin: 20px 0;\n  padding: 15px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\n.card .card-avatar {\n  width: 100px;\n}\n\n.card .card-avatar img {\n  background: yellow;\n  border-radius: 100%;\n}\n\n.card .card-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-left: 20px;\n}\n\n.card .card-body .card-title {\n  color: #333;\n  margin: 0;\n  padding: 0 0 5px 0;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.card .card-body .card-price {\n  color: var(--ion-color-primary);\n  margin: 0;\n  padding: 5px 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-body .card-information {\n  color: #666;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.card .card-body .card-action {\n  padding: 5px 0;\n}\n\n.card .card-body .card-action button {\n  width: 100%;\n  border-radius: 30px;\n  color: #fff;\n  background: #555;\n  text-transform: uppercase;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1ib2lsZXJwbGF0ZS9zcmMvYXBwL3BhZ2VzL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FDQUo7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGlIQUFBO0VBQUEsdUVBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDREY7O0FER0U7RUFDRSxZQUFBO0FDREo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQU47O0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNGTjs7QURLSTtFQUNFLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLGNBQUE7QUNMTjs7QURNTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgbWFpbiB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4ubWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI3LCAyMjMpO1xufVxuXG4uZmFpbC1tZXNzYWdlLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHBhZGRpbmc6IDEwMHB4IDMwcHg7XG59XG5cbi5jb250ZW50LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNzAlKTtcbn1cblxuaDF7XG4gIGNvbG9yOiAjMDZhYTZjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLm1pc3Npb24tZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKTtcblxuICAuY2FyZC1hdmF0YXIge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBpbWcge1xuICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLmNhcmQtcHJpY2Uge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuXG4gICAgLmNhcmQtaW5mb3JtYXRpb24ge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIH1cblxuICAgIC5jYXJkLWFjdGlvbiB7XG4gICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cbiIsImlvbi1jb250ZW50IG1haW4ge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTNkZjtcbn1cblxuLmZhaWwtbWVzc2FnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBwYWRkaW5nOiAxMDBweCAzMHB4O1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgd2hpdGUgNzAlKTtcbn1cblxuaDEge1xuICBjb2xvcjogIzA2YWE2YztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5taXNzaW9uLWRldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNhcmQgLmNhcmQtYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmNhcmQgLmNhcmQtYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDVweCAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXByaWNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1pbmZvcm1hdGlvbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFjdGlvbiB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hY3Rpb24gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/* harmony import */ var _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mission-detail/mission-detail.page */ "./src/app/pages/mission-detail/mission-detail.page.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./src/app/pages/explore/data.ts");







let ExplorePage = class ExplorePage {
    constructor(platform, loadingCtrl, modalController) {
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
    ionViewDidEnter() {
        this.platform.ready().then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadMap();
        }));
    }
    loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mapElement.nativeElement.style.position = 'static';
            this.loading = yield this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
            yield this.loading.present();
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Environment"].setEnv({
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY',
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY'
            });
            this.googleMaps = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create(this.mapElement.nativeElement, { controls: { zoom: false } });
            this.googleMaps.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_READY).subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.googleMaps.getMyLocation()
                    .then((location) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.googleMaps.moveCamera({
                        target: location.latLng,
                        zoom: 18
                    });
                    yield this.googleMaps.addMarkerSync({
                        icon: 'assets/markercluster/pointer.svg',
                        animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAnimation"].DROP,
                        position: location.latLng
                    });
                    this.addCluster(_data__WEBPACK_IMPORTED_MODULE_6__["default"]);
                }))
                    .catch(() => this.showFailMessage())
                    .finally(() => this.loading.dismiss());
            }));
        });
    }
    addCluster(data) {
        let markerCluster = this.googleMaps.addMarkerClusterSync({
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
        this.googleMaps.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_DRAG_START).subscribe(() => {
            this.mission.show = false;
        });
        markerCluster.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MARKER_CLICK).subscribe((params) => {
            let marker = params[1];
            marker.hideInfoWindow();
            this.mission.name = marker.get("name");
            this.mission.company = marker.get("company");
            this.mission.address = marker.get("address");
            this.mission.price = marker.get("price");
            this.mission.show = true;
            console.log(marker);
        });
    }
    showFailMessage() {
        this.googleMaps.remove();
        this.map.show = false;
        this.failMessage.show = true;
    }
    showMissionDetailsModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _mission_detail_mission_detail_page__WEBPACK_IMPORTED_MODULE_5__["MissionDetailPage"],
                componentProps: {
                    mission: this.mission
                }
            });
            return yield modal.present();
        });
    }
};
ExplorePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
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



/***/ }),

/***/ "./src/app/pages/mission-detail/mission-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/mission-detail/mission-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.wrapper header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n}\n.wrapper header button {\n  font-size: 30px;\n  font-weight: 100;\n  background: none;\n}\n.wrapper footer {\n  width: 100%;\n  position: fixed;\n  bottom: 10px;\n  padding: 10px;\n}\n.wrapper footer app-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1ib2lsZXJwbGF0ZS9zcmMvYXBwL3BhZ2VzL21pc3Npb24tZGV0YWlsL21pc3Npb24tZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWlzc2lvbi1kZXRhaWwvbWlzc2lvbi1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ047QURHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQ0UsV0FBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWlzc2lvbi1kZXRhaWwvbWlzc2lvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGFwcC1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbn0iLCIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi53cmFwcGVyIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXIgaGVhZGVyIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53cmFwcGVyIGZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi53cmFwcGVyIGZvb3RlciBhcHAtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let MissionDetailPage = class MissionDetailPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
MissionDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-explore-explore-module-es2015.js.map