(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-explore-explore-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/explore/explore.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/explore/explore.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <campoo-header></campoo-header>\n  <main>\n    <div #mapRef style=\"width: 100%; height: 100%; position: static; background-color: rgb(229, 227, 223);\"></div>\n    <section class=\"content-header\">\n      <h1>MISSIONS NEAR BY</h1>\n      <section class=\"mission-details\">\n        <div [hidden]=\"hideMissionCard\" class=\"card\">\n          <header class=\"card-header\">\n            <span class=\"card-title\">Avaliar atendimento dos caixas</span>\n            <span class=\"card-subtitle\">Potcake da Lu</span>\n            <span class=\"card-information\">\n              <svg-icon src=\"./assets/icon/pin-outline.svg\" [svgStyle]=\"{ 'width.px':12 , 'fill':'#b5b5b5' }\"></svg-icon>\n              Rua da consolação, 2223, Apto 31 - Consola...\n            </span>\n          </header>\n          <footer class=\"card-footer\">\n            <span class=\"card-subtitle\">R$ 20,00</span>\n            <span class=\"card-information\">10 min</span>\n          </footer>\n        </div>\n      </section>\n    </section>\n  </main>\n</ion-content>\n<campoo-tabs></campoo-tabs>\n\n"

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
            "lat": 21.382314,
            "lng": -157.933097
        },
        "name": "Starbucks - HI - Aiea  03641",
        "address": "Aiea Shopping Center_99-115\nAiea Heights Drive #125_Aiea, Hawaii 96701",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.3871,
            "lng": -157.9482
        },
        "name": "Starbucks - HI - Aiea  03642",
        "address": "Pearlridge Center_98-125\nKaonohi Street_Aiea, Hawaii 96701",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.363402,
            "lng": -157.928275
        },
        "name": "Starbucks - HI - Aiea  03643",
        "address": "Stadium Marketplace_4561\nSalt Lake Boulevard_Aiea, Hawaii 96818",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.3884,
            "lng": -157.9431
        },
        "name": "Starbucks - HI - Aiea  03644",
        "address": "Pearlridge Mall_98-1005\nMoanalua Road_Aiea, Hawaii 96701",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.6507,
            "lng": -158.0652
        },
        "name": "Starbucks - HI - Haleiwa  03645",
        "address": "Pupukea_59-720 Kamehameha Highway\nHaleiwa, Hawaii 96712",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 19.699335,
            "lng": -155.06566
        },
        "name": "Starbucks - HI - Hilo  03646",
        "address": "Border Waiakea Center_315-325\nMakaala Street_Hilo, Hawaii 96720",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 19.698399,
            "lng": -155.064864
        },
        "name": "Starbucks - HI - Hilo  03647",
        "address": "Prince Kuhio Plaza_111\nEast Puainako Street_Hilo, Hawaii 96720",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 19.722763,
            "lng": -155.085598
        },
        "name": "Starbucks - HI - Hilo [D]  03648",
        "address": "Hilo_438 Kilauea Ave_Hilo, Hawaii 96720",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.338183,
            "lng": -157.917579
        },
        "name": "Starbucks - HI - Honolulu  03649",
        "address": "Airport Trade Center_550\nPaiea Street_Honolulu, Hawaii 96819",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.3074,
            "lng": -157.865199
        },
        "name": "Starbucks - HI - Honolulu  03650",
        "address": "Aloha Tower_1 Aloha Tower Drive\nHonolulu, Hawaii 96813",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.30846253,
            "lng": -157.8614898
        },
        "name": "Starbucks - HI - Honolulu  03651",
        "address": "Bishop_1000 Bishop Street #104\nHonolulu, Hawaii 96813",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.311363,
            "lng": -157.863751
        },
        "name": "Starbucks - HI - Honolulu  03652",
        "address": "Central Pacific Bank_220 South King Street\nHonolulu, Hawaii 96813",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.28507546,
            "lng": -157.838214
        },
        "name": "Starbucks - HI - Honolulu  03653",
        "address": "Discovery Bay_1778 Ala Moana Boulevard\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.342733,
            "lng": -158.027408
        },
        "name": "Starbucks - HI - Honolulu  03654",
        "address": "Ewa Beach_91-1401 Fort Weaver Road\nHonolulu, Hawaii 96706",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.28005068,
            "lng": -157.8285093
        },
        "name": "Starbucks - HI - Honolulu  03655",
        "address": "Duty Free Shopper_330 Royal Hawaiian Avenue\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.3115,
            "lng": -157.8649
        },
        "name": "Starbucks - HI - Honolulu  03656",
        "address": "Financial Plaza_130 Merchant Street #111\nHonolulu, Hawaii 96813",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.282048,
            "lng": -157.713041
        },
        "name": "Starbucks - HI - Honolulu  03657",
        "address": "Hawaii Kai Town Center_6700\nKalanianaole Highway_Honolulu, Hawaii 96825",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.291345,
            "lng": -157.848791
        },
        "name": "Starbucks - HI - Honolulu  03658",
        "address": "Hokua_1288 Ala Moana Blvd\nHonolulu, Hawaii 96814",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.335164,
            "lng": -157.868742
        },
        "name": "Starbucks - HI - Honolulu  03659",
        "address": "Kamehameha Shopping Center_1620 North School Street\nHonolulu, Hawaii 96817",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.27852422,
            "lng": -157.7875773
        },
        "name": "Starbucks - HI - Honolulu  03660",
        "address": "Kahala Mall_4211 Waialae Avenue\nHonolulu, Hawaii 96816",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.294372,
            "lng": -157.841963
        },
        "name": "Starbucks - HI - Honolulu  03661",
        "address": "Keeaumoku_678 Keeamoku Street #106\nHonolulu, Hawaii 96814",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.2819,
            "lng": -157.8163
        },
        "name": "Starbucks - HI - Honolulu  03662",
        "address": "Kapahulu Avenue_625 Kapahulu Avenue\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.27608195,
            "lng": -157.7049835
        },
        "name": "Starbucks - HI - Honolulu  03663",
        "address": "Koko Marina_7192 Kalanianaole Highway\nHonolulu, Hawaii 96825",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.3129,
            "lng": -157.8129
        },
        "name": "Starbucks - HI - Honolulu  03664",
        "address": "Manoa Valley_2902 East Manoa Road\nHonolulu, Hawaii 96822",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.293082,
            "lng": -157.847092
        },
        "name": "Starbucks - HI - Honolulu  03665",
        "address": "Macys Ala Moana_1450 Ala Moan Boulevard\nHonolulu, Hawaii 96814",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.341957,
            "lng": -157.929089
        },
        "name": "Starbucks - HI - Honolulu  03666",
        "address": "Moanalua Shopping Center_930 Valkenburgh Street\nHonolulu, Hawaii 96818",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.279503,
            "lng": -157.833101
        },
        "name": "Starbucks - HI - Honolulu  03667",
        "address": "Outrigger Reef_2169 Kalia Road #102\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.282251,
            "lng": -157.828172
        },
        "name": "Starbucks - HI - Honolulu  03668",
        "address": "Ohana Waikiki West_2330 Kuhio Avenue\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.323602,
            "lng": -157.890904
        },
        "name": "Starbucks - HI - Honolulu  03669",
        "address": "Sand Island_120 Sand Island Access Road #4\nHonolulu, Hawaii 96819",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.270016,
            "lng": -157.82381
        },
        "name": "Starbucks - HI - Honolulu  03670",
        "address": "Park Shore Hotel_2856 Kalakaua Avenue\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.289497,
            "lng": -157.842832
        },
        "name": "Starbucks - HI - Honolulu  03671",
        "address": "Sears Ala Moana Center_1450 Ala Moana Blvd.\nHonolulu, Hawaii 96814",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.28201,
            "lng": -157.831087
        },
        "name": "Starbucks - HI - Honolulu  03672",
        "address": "Waikiki Shopping Plaza_2270 Kalakaua Avenue #1800\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.2833,
            "lng": -157.8298
        },
        "name": "Starbucks - HI - Honolulu  03673",
        "address": "Waikiki Trade Center_2255 Kuhio Avenue S-1\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.297,
            "lng": -157.8555
        },
        "name": "Starbucks - HI - Honolulu  03674",
        "address": "Ward Entertainment Center_310 Kamakee Street #6\nHonolulu, Hawaii 96814",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.406095,
            "lng": -157.800761
        },
        "name": "Starbucks - HI - Honolulu  03675",
        "address": "Windward City Shopping Center_45-480 Kaneohe Bay Drive\nHonolulu, Hawaii 96744",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.2829,
            "lng": -157.8318
        },
        "name": "Starbucks - HI - Honolulu  03676",
        "address": "Waikiki Walk_2222 Kalakaua Avenue\nHonolulu, Hawaii 96815",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.293045,
            "lng": -157.852223
        },
        "name": "Starbucks - HI - Honolulu  03677",
        "address": "Ward Gateway_1142 Auahi Street\nHonolulu, Hawaii 96814",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.3067,
            "lng": -157.858444
        },
        "name": "Starbucks - HI - Honolulu [A]  03678",
        "address": "HNL Honolulu Airport_300 Rogers Blvd\nHonolulu, Hawaii 96820",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.891963,
            "lng": -156.477614
        },
        "name": "Starbucks - HI - Kahului  03679",
        "address": "Queen Kaahumanu Center_275 West Kaahuman Avenue #1200 F5\nKahului, Hawaii 96732",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.8843,
            "lng": -156.4583
        },
        "name": "Starbucks - HI - Kahului  03680",
        "address": "Maui Marketplace_270 Dairy Road\nKahului, Hawaii 96732",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.39356972,
            "lng": -157.7403334
        },
        "name": "Starbucks - HI - Kailua  03681",
        "address": "Kailua Village_539 Kailua Road\nKailua, Hawaii 96734",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 19.6512,
            "lng": -155.9944
        },
        "name": "Starbucks - HI - Kailua-Kona  03682",
        "address": "Kona Coast Shopping Center_74-5588 Palani Road\nKailua-Kona, Hawaii 96740",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 19.8434,
            "lng": -155.7652
        },
        "name": "Starbucks - HI - Kamuela  03683",
        "address": "Parker Ranch Center_67-1185 Mamalahoa Highway D108\nKamuela, Hawaii 96743",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.34306,
            "lng": -158.078906
        },
        "name": "Starbucks - HI - Kapolei  03684",
        "address": "Halekuai Center_563 Farrington Highway #101\nKapolei, Hawaii 96707",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.336,
            "lng": -158.0802
        },
        "name": "Starbucks - HI - Kapolei [D]  03685",
        "address": "Kapolei Parkway_338 Kamokila Boulevard #108\nKapolei, Hawaii 96797",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.740343,
            "lng": -156.456218
        },
        "name": "Starbucks - HI - Kihei  03686",
        "address": "Kukui Mall_1819 South Kihei Road\nKihei, Hawaii 96738",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.7575,
            "lng": -156.4559
        },
        "name": "Starbucks - HI - Kihei  03687",
        "address": "Piilani Village Shopping Center_247 Piikea Avenue #106\nKihei, Hawaii 96753",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 19.9338,
            "lng": -155.8422
        },
        "name": "Starbucks - HI - Kohala Coast  03688",
        "address": "Mauna Lani_68-1330 Mauna Lani Drive H-101b\nKohala Coast, Hawaii 96743",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.886244,
            "lng": -156.684697
        },
        "name": "Starbucks - HI - Lahaina  03689",
        "address": "Lahaina Cannery Mall_1221 Honoapiilani Highway\nLahaina, Hawaii 96761",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.8804,
            "lng": -156.6816
        },
        "name": "Starbucks - HI - Lahaina  03690",
        "address": "Lahaina_845 Wainee Street\nLahaina, Hawaii 96761",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.970661,
            "lng": -159.396274
        },
        "name": "Starbucks - HI - Lihue  03691",
        "address": "Kukui Grove_3-2600 Kaumualii Highway #A8\nLihue, Hawaii 96766",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.8818,
            "lng": -156.4633
        },
        "name": "Starbucks - HI - Maui [A]  03692",
        "address": "OGG Kahului Main Concourse_New Terminal Bldg @ Bldg 340\nMaui, Hawaii 96732",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.4585,
            "lng": -158.0178
        },
        "name": "Starbucks - HI - Mililani  03693",
        "address": "Mililani Shopping Center_95-221 Kipapa Drive\nMililani, Hawaii 96789",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.474341,
            "lng": -158.001864
        },
        "name": "Starbucks - HI - Mililani  03694",
        "address": "Mililani Town Center_95-1249 Meheula Parkway\nMililani, Hawaii 96789",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 20.838965,
            "lng": -156.34192
        },
        "name": "Starbucks - HI - Pukalani  03695",
        "address": "Pukalani Foodland_55 Pukalani Street\nPukalani, Hawaii 96768",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.378675,
            "lng": -157.728499
        },
        "name": "Starbucks - HI - Waipahu  03696",
        "address": "Enchanted Lakes_1020 Keolu Drive\nWaipahu, Hawaii 96734",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.39662113,
            "lng": -158.0317397
        },
        "name": "Starbucks - HI - Waipahu  03697",
        "address": "Kunia Shopping Center_94-673 Kupuohi Street\nWaipahu, Hawaii 96797",
        "icon": "assets/markercluster/marker.png"
    },
    {
        "position": {
            "lat": 21.403688,
            "lng": -158.006128
        },
        "name": "Starbucks - HI - Waipahu  03698",
        "address": "Waikele_94-799 Lumiaina Street\nWaipahu, Hawaii 96797",
        "icon": "assets/markercluster/marker.png"
    }
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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
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

module.exports = "ion-content main {\n  padding: 0;\n}\n\n.content-header {\n  width: 100%;\n  height: 200px;\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: white;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), color-stop(58%, white));\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, white 58%);\n}\n\nh1 {\n  color: #06aa6c;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.mission-details {\n  width: 100%;\n  height: 200px;\n}\n\n.card {\n  width: 100%;\n  height: 150px;\n  margin: 20px 0;\n  padding: 15px;\n  background: #FFF;\n  border-radius: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\n.card .card-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.card .card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-top: 5px;\n  margin-top: 5px;\n  border-top: 1px solid #f1f1f1;\n}\n\n.card .card-title {\n  color: #333;\n  margin: 0;\n  padding: 0 0 5px 0;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-subtitle {\n  color: #666;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.card .card-information {\n  color: #b5b5b5;\n  margin: 0;\n  padding: 5px 0;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3JtYXRoMTIvRG9jdW1lbnRzL0NhbXBvby9kZXZlbG9wbWVudC9jYW1wb28vc3JjL2FwcC9wYWdlcy9leHBsb3JlL2V4cGxvcmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9leHBsb3JlL2V4cGxvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQ0FKOztBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUhBQUE7RUFBQSx1RUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDREY7O0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNESjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA1OCUpO1xufVxuXG5oMXtcbiAgY29sb3I6ICMwNmFhNmM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubWlzc2lvbi1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKTtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5jYXJkLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAwIDVweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIH1cblxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIH1cblxuICAuY2FyZC1pbmZvcm1hdGlvbiB7XG4gICAgY29sb3I6ICNiNWI1YjU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIH1cbn0iLCJpb24tY29udGVudCBtYWluIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHdoaXRlIDU4JSk7XG59XG5cbmgxIHtcbiAgY29sb3I6ICMwNmFhNmM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubWlzc2lvbi1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNhcmQgLmNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLmNhcmQgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jYXJkIC5jYXJkLWluZm9ybWF0aW9uIHtcbiAgY29sb3I6ICNiNWI1YjU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn0iXX0= */"

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
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/app/pages/explore/data.ts");





var ExplorePage = /** @class */ (function () {
    function ExplorePage(platform, loadingCtrl) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.hideMissionCard = true;
    }
    ExplorePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.mapRef);
                        this.mapRef.nativeElement.style.position = 'static';
                        return [4 /*yield*/, this.loadMap()];
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
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Por favor, aguarde...' })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["Environment"].setEnv({
                            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY',
                            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBBeiv9AiQcsrRbU1veU95qbaEIsCkcUrY'
                        });
                        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create(this.mapRef.nativeElement, {
                            'camera': {
                                'target': {
                                    "lat": 21.382314,
                                    "lng": -157.933097
                                },
                                'zoom': 10
                            },
                            'controls': {
                                'zoom': false
                            },
                        });
                        this.addCluster(_data__WEBPACK_IMPORTED_MODULE_4__["default"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ExplorePage.prototype.addCluster = function (data) {
        var _this = this;
        var markerCluster = this.map.addMarkerClusterSync({
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
        this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var myLocation, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('MAP READY');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        return [4 /*yield*/, this.map.getMyLocation()];
                    case 2:
                        myLocation = _a.sent();
                        return [4 /*yield*/, this.map.moveCamera({
                                target: myLocation.latLng,
                                zoom: 18
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.map.addMarkerSync({
                                title: 'Origem',
                                icon: '#000',
                                animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAnimation"].DROP,
                                position: myLocation.latLng
                            })];
                    case 4:
                        _a.sent();
                        console.log(myLocation);
                        return [3 /*break*/, 7];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 6:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
        markerCluster.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function (params) {
            var marker = params[1];
            marker.hideInfoWindow();
            // marker.setTitle(marker.get("name"));
            // marker.setSnippet(marker.get("address"));
            _this.hideMissionCard = false;
            console.log(marker);
            // marker.showInfoWindow();
        });
    };
    ExplorePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapRef', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExplorePage.prototype, "mapRef", void 0);
    ExplorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! raw-loader!./explore.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/explore/explore.page.html"),
            styles: [__webpack_require__(/*! ./explore.page.scss */ "./src/app/pages/explore/explore.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], ExplorePage);
    return ExplorePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-explore-explore-module-es5.js.map