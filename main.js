/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/toDo.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/toDo.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: hsl(60, 100%, 85%);\npadding: 0;\nmargin: 5px;\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 0;\n/*border: 2px solid rebeccapurple;*/\n}\nh1 {\nmargin: 15px auto 40px;\ncolor: ;\nfont-size: 2rem;\nz-index: 3;\n}\nh2 {\ncolor: ;\nfont-size: 1.6rem;\nmargin-bottom: 30px;\nz-index: 1;\n}\nh3 {\ncolor: ;\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\ncolor: ;\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\nleft: 22vw;\nmargin-left: 3vw;\n/*border: 2px solid slateblue;*/\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 4px;\n}\n.dueDate {\nmargin: 3px 0;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n.smaller-left-margin {\nmargin-left: 57%;\n}\n#sortBox {\nposition: sticky;\nbottom: 75vh;\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\n/*border: 2px solid red;*/\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\n/* !FOR SOME REASON, I CAN'T REMOVE THE AUTO-STYLING GREY/BLUE BACKGROUND WHEN HOVERING...! */\n#sortBox option:hover {\nbackground-color: aquamarine;\n}\noption:hover {\nbackground-color: aquamarine;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nposition: sticky;\nleft: 68%;\nheight: 50vh;\nbottom: 20vh;\nwidth: 30%;\ncolor: blue;\nmargin-top: 10px;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box {\nbackground-color: hsl(120, 70%, 80%);\n}\np {\nmargin: 10px 0;\ncolor: black;\nfont-size: 1rem;\n}\n.high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n.medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n.low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 12px 0;\npadding: 4px;\nborder-radius: 3px;\nfont-size: 0.9rem;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: max(15vh, 125px);\nz-index: 2;\ntext-align: center;\nbackground-color: inherit;\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\n/*top: clamp(21vh, 27vh, 35vh);*/\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\n/* good mobile values:\ntop: clamp(18vh, 23vh, 28vh);*/\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#addItemBox.mobile {\ndisplay: none;\n}\n#lists-sidebar.mobile {\ndisplay: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}", "",{"version":3,"sources":["webpack://./src/toDo.css"],"names":[],"mappings":"AAAA;AACA,YAAY;AACZ,eAAe;AACf,0BAA0B;AAC1B;AACA;AACA,uBAAuB;AACvB,SAAS;AACT,UAAU;AACV;AACA;AACA,kBAAkB;AAClB,oBAAoB;AACpB,oCAAoC;AACpC,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ,cAAc;AACd,UAAU;AACV,mCAAmC;AACnC;AACA;AACA,sBAAsB;AACtB,OAAO;AACP,eAAe;AACf,UAAU;AACV;AACA;AACA,OAAO;AACP,iBAAiB;AACjB,mBAAmB;AACnB,UAAU;AACV;AACA;AACA,OAAO;AACP,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,OAAO;AACP,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,WAAW;AACX,kBAAkB;AAClB,UAAU;AACV,gBAAgB;AAChB,+BAA+B;AAC/B;AACA;AACA,sBAAsB;AACtB,gBAAgB;AAChB;AACA;AACA,8BAA8B;AAC9B,SAAS;AACT,gBAAgB;AAChB,uBAAuB;AACvB,wBAAwB;AACxB;AACA;AACA,kBAAkB;AAClB,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,kBAAkB;AAClB,iBAAiB;AACjB,8BAA8B;AAC9B;AACA;AACA,uCAAuC;AACvC;AACA;AACA,uCAAuC;AACvC;AACA;AACA,aAAa;AACb;AACA;AACA,kBAAkB;AAClB,YAAY;AACZ,UAAU;AACV,aAAa;AACb;AACA;AACA,YAAY;AACZ,WAAW;AACX,uBAAuB;AACvB,eAAe;AACf;AACA;AACA,gBAAgB;AAChB;AACA;AACA,gBAAgB;AAChB,YAAY;AACZ,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,yBAAyB;AACzB;AACA;AACA,kBAAkB;AAClB,wBAAwB;AACxB,iBAAiB;AACjB;AACA,6FAA6F;AAC7F;AACA,4BAA4B;AAC5B;AACA;AACA,4BAA4B;AAC5B;AACA;AACA,uBAAuB;AACvB,oBAAoB;AACpB,iBAAiB;AACjB,sBAAsB;AACtB,YAAY;AACZ,YAAY;AACZ;AACA;AACA,gBAAgB;AAChB,SAAS;AACT,YAAY;AACZ,YAAY;AACZ,UAAU;AACV,WAAW;AACX,gBAAgB;AAChB;AACA;AACA,kBAAkB;AAClB;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,aAAa;AACb,kBAAkB;AAClB,gBAAgB;AAChB;AACA;AACA,WAAW;AACX,YAAY;AACZ,qBAAqB;AACrB,iBAAiB;AACjB,uBAAuB;AACvB;AACA;AACA,kCAAkC;AAClC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,cAAc;AACd,YAAY;AACZ,eAAe;AACf;AACA;AACA,kCAAkC;AAClC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,4BAA4B;AAC5B,YAAY;AACZ,WAAW;AACX,eAAe;AACf,SAAS;AACT,YAAY;AACZ,cAAc;AACd;AACA;AACA,yBAAyB;AACzB,gBAAgB;AAChB;AACA;AACA,0BAA0B;AAC1B,iBAAiB;AACjB,qBAAqB;AACrB,UAAU;AACV,WAAW;AACX;AACA;AACA,iBAAiB;AACjB,iBAAiB;AACjB;AACA;AACA,qBAAqB;AACrB,mBAAmB;AACnB;AACA;AACA,sBAAsB;AACtB,YAAY;AACZ,cAAc;AACd,YAAY;AACZ,kBAAkB;AAClB,iBAAiB;AACjB;AACA;AACA,6BAA6B;AAC7B,YAAY;AACZ,aAAa;AACb,6BAA6B;AAC7B,YAAY;AACZ,iBAAiB;AACjB;AACA;AACA,gBAAgB;AAChB,qBAAqB;AACrB,YAAY;AACZ,kBAAkB;AAClB,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB,YAAY;AACZ,YAAY;AACZ,WAAW;AACX,YAAY;AACZ,iBAAiB;AACjB,kBAAkB;AAClB,sBAAsB;AACtB,eAAe;AACf,uBAAuB;AACvB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,WAAW;AACX,YAAY;AACZ,YAAY;AACZ,YAAY;AACZ,iBAAiB;AACjB,iBAAiB;AACjB,eAAe;AACf,eAAe;AACf,uBAAuB;AACvB,kBAAkB;AAClB;AACA;AACA,WAAW;AACX,6BAA6B;AAC7B,eAAe;AACf,MAAM;AACN,wBAAwB;AACxB,UAAU;AACV,kBAAkB;AAClB,yBAAyB;AACzB,cAAc;AACd;AACA;AACA,WAAW;AACX,gBAAgB;AAChB,UAAU;AACV,kBAAkB;AAClB,UAAU;AACV,gCAAgC;AAChC,qBAAqB;AACrB;AACA;AACA,kBAAkB;AAClB;8BAC8B;AAC9B,qBAAqB;AACrB,kBAAkB;AAClB,UAAU;AACV,UAAU;AACV,mBAAmB;AACnB;AACA;AACA,aAAa;AACb;AACA;AACA,aAAa;AACb;AACA;AACA,UAAU;AACV,kBAAkB;AAClB,SAAS;AACT,WAAW;AACX,aAAa;AACb,uBAAuB;AACvB,0BAA0B;AAC1B,2BAA2B;AAC3B,4BAA4B;AAC5B,kBAAkB;AAClB,sBAAsB;AACtB;AACA;AACA,uBAAuB;AACvB,oBAAoB;AACpB,UAAU;AACV,WAAW;AACX,YAAY;AACZ,sBAAsB;AACtB,sBAAsB;AACtB,iBAAiB;AACjB,eAAe;AACf,kBAAkB;AAClB;AACA;AACA,8BAA8B;AAC9B,mCAAmC;AACnC","sourcesContent":["html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: hsl(60, 100%, 85%);\npadding: 0;\nmargin: 5px;\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 0;\n/*border: 2px solid rebeccapurple;*/\n}\nh1 {\nmargin: 15px auto 40px;\ncolor: ;\nfont-size: 2rem;\nz-index: 3;\n}\nh2 {\ncolor: ;\nfont-size: 1.6rem;\nmargin-bottom: 30px;\nz-index: 1;\n}\nh3 {\ncolor: ;\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\ncolor: ;\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\nleft: 22vw;\nmargin-left: 3vw;\n/*border: 2px solid slateblue;*/\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 4px;\n}\n.dueDate {\nmargin: 3px 0;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n.smaller-left-margin {\nmargin-left: 57%;\n}\n#sortBox {\nposition: sticky;\nbottom: 75vh;\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\n/*border: 2px solid red;*/\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\n/* !FOR SOME REASON, I CAN'T REMOVE THE AUTO-STYLING GREY/BLUE BACKGROUND WHEN HOVERING...! */\n#sortBox option:hover {\nbackground-color: aquamarine;\n}\noption:hover {\nbackground-color: aquamarine;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nposition: sticky;\nleft: 68%;\nheight: 50vh;\nbottom: 20vh;\nwidth: 30%;\ncolor: blue;\nmargin-top: 10px;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box {\nbackground-color: hsl(120, 70%, 80%);\n}\np {\nmargin: 10px 0;\ncolor: black;\nfont-size: 1rem;\n}\n.high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n.medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n.low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 12px 0;\npadding: 4px;\nborder-radius: 3px;\nfont-size: 0.9rem;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: max(15vh, 125px);\nz-index: 2;\ntext-align: center;\nbackground-color: inherit;\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\n/*top: clamp(21vh, 27vh, 35vh);*/\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\n/* good mobile values:\ntop: clamp(18vh, 23vh, 28vh);*/\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#addItemBox.mobile {\ndisplay: none;\n}\n#lists-sidebar.mobile {\ndisplay: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/toDo.css":
/*!**********************!*\
  !*** ./src/toDo.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toDo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./toDo.css */ "./node_modules/css-loader/dist/cjs.js!./src/toDo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toDo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toDo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_toDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_toDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayListItem": () => (/* binding */ displayListItem),
/* harmony export */   "myListsArray": () => (/* binding */ myListsArray),
/* harmony export */   "listTitle": () => (/* binding */ listTitle)
/* harmony export */ });
/* harmony import */ var _manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageToDoItems.js */ "./src/manageToDoItems.js");
/* harmony import */ var _manageLists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageLists.js */ "./src/manageLists.js");
/* harmony import */ var _media_queries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-queries.js */ "./src/media-queries.js");




const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));

let LOCAL_STORAGE_LISTS_OBJECT = "task.myListsArray";
let myListsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LISTS_OBJECT)) || [];

const mainList = document.querySelector("#mainlist");

//list element object:
const main = document.getElementById("main");

const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");

const listTitle = document.getElementById("list-title");

//OL:
const listOfLists = document.getElementById("mylists");
let listElements = [main];
let listNames;
let priority;		

//non-DOM?:
function populateStorage() {
	setListNames();   
	listNames.toString();
    localStorage.setItem("listNames2", listNames);
    localStorage.setItem(LOCAL_STORAGE_LISTS_OBJECT, JSON.stringify(myListsArray));
	console.log("populated!");	
}
//DOM:
function setListNames() {
	listNames = listElements.map(listElement => {
		if (listElement.children[0].childNodes[0].nodeValue != null) {
			return listElement.children[0].childNodes[0].nodeValue;
		}
	});
	return listNames;
}

window.addEventListener("beforeunload", populateStorage);
//localStorage.clear();

//DOM:
window.onload = () => {
	console.log({myListsArray});
	if (myListsArray.length == 0) {
		const first = new _manageLists_js__WEBPACK_IMPORTED_MODULE_1__.list("Main");
		first.active = true;	
	}	
    if (localStorage.getItem("listNames2")) {
		// will already include "main" as first item:
		listNames = localStorage.getItem("listNames2").split(",");
	}
	// first time app is used:
	else listNames = ["Main"];
	createListElements(listNames);	
	loadDefaultList();
	(0,_media_queries_js__WEBPACK_IMPORTED_MODULE_2__.addMobileStyles)(_media_queries_js__WEBPACK_IMPORTED_MODULE_2__.widthTrigger);
};
_media_queries_js__WEBPACK_IMPORTED_MODULE_2__.widthTrigger.addEventListener("change", _media_queries_js__WEBPACK_IMPORTED_MODULE_2__.addMobileStyles);

//DOM:
function createListElements(listNames) {
	for (let i = 1; i < listNames.length; i++) {
        const listElement = document.createElement("li");	
    	listElement.innerHTML = '<a href="#">' + listNames[i] + '</a><button class="delete-li">X</button>';
		listElement.id = listNames[i];     
		listElements.push(listElement);
		listOfLists.appendChild(listElement);
		configListDeleteButtons();
		setListEventHandlers();
	}
}

//DOM:
function clearListOfLists() {
	while (listOfLists.hasChildNodes()) {
		listOfLists.firstChild.remove();
	}
	return;
}
//DOM:
function configListDeleteButtons() {
	let deleteArray2 = [...listOfLists.getElementsByClassName("delete-li")];
	deleteArray2.forEach(deleteButton => {
		deleteButton.addEventListener("click", (e) => {
			e.stopPropagation();
			deleteButton.parentElement.remove();
			let toBeDeleted = listElements.findIndex(listElement => listElement.id == e.target.parentElement.id);
			if (toBeDeleted > 0) {
				listElements.splice(toBeDeleted, 1);
				let index = myListsArray.findIndex (listObject => listObject.name == e.target.parentElement.id);
				myListsArray.splice(index, 1);
				listNames = setListNames();
				listElements = [main];
				clearListOfLists();
				listOfLists.appendChild(main);
				createListElements(listNames);	
			}
		});
	});
}

//DOM:
function loadDefaultList() {
	myListsArray[0].active = true;
	setItemIndices(myListsArray[0]);	
	myListsArray[0].contents.forEach(listItemObject => {
		displayListItem(listItemObject);
	});
	configItemDeleteButtons(myListsArray[0]);
	configCheckBoxes(myListsArray[0]);
}

//non-DOM:
function setItemIndices(listObject) {
	let number = 1;
	for (let i = 0; i < listObject.contents.length; i++) {
		listObject.contents[i].index = number;
		number++;
	}
}

//DOM:
function configItemDeleteButtons(listObject) {
	let deleteArray = [...mainList.getElementsByClassName("delete")];
	deleteArray.forEach(deleteButton => {
		deleteButton.addEventListener("click", (e) => {
			for (let i = 0; i < listObject.contents.length; i++) {
				if (listObject.contents[i].index == e.target.parentElement.parentElement.id) {
					listObject.contents.splice(i, 1);
					setItemIndices(listObject);							
					break;				
				}				       
			} 
			e.target.parentElement.parentElement.remove(); 
			configCheckBoxes(listObject);
			let mainListArray = Array.from(mainList.children);
			for (let i = 0; i < listObject.contents.length; i++) {    
				mainListArray[i].id = getIndex(listObject.contents[i]);
			}  						                                           
		});
	});	       
}

function configCheckBoxes(listObject) {
	let checkboxes = [...mainList.getElementsByClassName("checkbox")];
	let targetItem;
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener("click", (e) => {
			checkbox.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.classList.toggle("complete");
			checkbox.parentElement.parentElement.parentElement.firstChild.firstChild.children[1].classList.toggle("complete");
			targetItem = listObject.contents.find(listItem => listItem.index == checkbox.parentElement.parentElement.parentElement.id);
			if (targetItem.complete == false) {
				targetItem.complete = true;	
				targetItem.completeValue = 0;		
			}
			else if (targetItem.complete == true) {
				targetItem.complete = false;
				targetItem.completeValue = 10;
			}
			console.log({targetItem});
		});
	});
}

//DOM:
priorityButtons.forEach(button => {
    if (button.hasAttribute("checked")) {
		priority = button.value;
    }
   	button.onfocus = () => {
		priority = button.value;

	};    
	button.onclick = () => {
		priority = button.value;
	};
});

//DOM:
function clearFields() {
	const fields = Array.from(document.querySelectorAll(".textfield"));
    fields.map(field => field.value = "");
}

//DOM:
addItemButton.onclick = () => {
	let item = new _manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.listItem(nameField.value, descripField.value, dueField.value, priority);
	myListsArray.forEach(listObject => {
		if (listObject.active == true) {
			listObject.contents.push(item);
			setItemIndices(listObject);	
			displayListItem(item);
			configItemDeleteButtons(listObject);
			configCheckBoxes(listObject);
		}
	});  	
    clearFields();   
}

//DOM:
addListButton.onclick = () => {
    let newList = new _manageLists_js__WEBPACK_IMPORTED_MODULE_1__.list(nameInput.value);
    displayListElement(newList);
    nameInput.value = ""
}

//DOM:
function displayListElement(list) {
	const listElement = document.createElement("li");	
    listElement.innerHTML = '<a href="#">' + list.name + '</a><button class="delete-li">X</button>';  
	listElement.id = list.name;   
	listElements.push(listElement);
    listOfLists.appendChild(listElement);
	configListDeleteButtons();
    setListEventHandlers();
}

//DOM:
function setListEventHandlers() {
	listElements.forEach(listElement => {		
		listElement.onclick = () => {		
			myListsArray.forEach(listObject => {
				if (listObject.name == listElement.firstElementChild.innerText) {	
					mainList.textContent = "";
					listObject.active = true;
					listTitle.textContent = listObject.name;
					setItemIndices(listObject);
					listObject.contents.forEach(listItemObject => {
						displayListItem(listItemObject);
					});
					configItemDeleteButtons(listObject);
					configCheckBoxes(listObject);
				}
				else  {
					listObject.active = false;
				}
			});			
		};
	});
	localStorage.clear();
	populateStorage();		
}

//non-DOM?:
function getIndex(listItemObject) {
	return listItemObject.index;
}

//DOM:
function createItemContent(item) {
	return '<div class="toDoBox"><details><summary>'
	 + item.name + '</summary><p>' + item.description + 
	 '</p></details><p class="dueDate">Due date: ' + item.dueDate + 
	 '</p><label class="completeLabel">Completed: <input type="checkbox" class="checkbox" name="completed" value=""></label><button class="delete">X</button></div>';    
}

//DOM:
function markComplete(itemElement) {
	itemElement.firstChild.firstChild.firstChild.classList.add("complete");
	itemElement.firstChild.firstChild.children[1].classList.add("complete")
	let checkbox = itemElement.querySelector(".checkbox");
	checkbox.setAttribute("checked", true);	
}

//DOM:
function assignPriority(itemElement, itemObject) {
	switch(itemObject.priority) {
		case "high": 
		itemElement.classList.add("high-priority");
		itemObject.value = 10;
		break;
		case "medium":
		itemElement.classList.add("medium-priority");
		itemObject.value = 20;
		break;
		case "low":
		itemElement.classList.add("low-priority");
		itemObject.value = 30;
		break;
	}
}
//DOM:
function displayListItem(item) {
	const newItem = document.createElement("li");
	newItem.id = getIndex(item);	
	newItem.classList.add("listItem");
	assignPriority(newItem, item);
	newItem.innerHTML = createItemContent(item);
	if (item.complete == true) markComplete(newItem);
    mainList.appendChild(newItem);	
}



const sortBox = document.getElementById("sortBox");

//DOM:
sortBox.addEventListener("click", function getOrder(e) {
	let activeList = myListsArray.find(list => list.active == true);
	switch (e.target.id) {
		case "highPriority":
		getHighPriorityOrder(activeList);
		break;		
		case "lowPriority":
		getLowPriorityOrder(activeList);
		break;		
		case "incompleteFirst":
		getIncompleteFirstOrder(activeList);
		break;		
		case "completeFirst":
		getCompleteFirstOrder(activeList);
		break;
		case "dueDateEarliest":
		getEarliestDateFirst(activeList);
		break;		
		case "dueDateLatest":
		getLatestDateFirst(activeList);
		break;
	}
	configItemDeleteButtons(activeList);
	configCheckBoxes(activeList);
});

//DOM:
function displayReorderedList(currentListOrder) {
	mainList.textContent = "";
	let number = 1;
	for (let i = 0; i < currentListOrder.length; i++) {
		currentListOrder[i].index = number;
		displayListItem(currentListOrder[i]);		
		number++;
	}	
}
//NON-DOM:
function getHighPriorityOrder(activeList) {	
	let highPriorityOrder = activeList.contents.sort((listItemA, listItemB) => { 
		if (listItemA.value > listItemB.value) {return 1;}
		if (listItemA.value == listItemB.value){return 0;}
		if (listItemA.value < listItemB.value) {return -1;}
	});
	displayReorderedList(highPriorityOrder);
}
//NON-DOM:
function getLowPriorityOrder(activeList) {	
	let lowPriorityOrder = activeList.contents.sort((listItemA, listItemB) => { 
        if (listItemA.value > listItemB.value) {return -1;}
		if (listItemA.value == listItemB.value){return 0;}
		if (listItemA.value < listItemB.value) {return 1;}
	});	
	displayReorderedList(lowPriorityOrder);
}
//NON-DOM:
function getIncompleteFirstOrder(activeList) {	
	let incompleteFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
			if (listItemA.completeValue < listItemB.completeValue) return 1;
	});
	displayReorderedList(incompleteFirstOrder);
}

//NON-DOM:
function getCompleteFirstOrder(activeList) {	
	let completeFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
			if (listItemA.completeValue > listItemB.completeValue) return 1;
	});
	displayReorderedList(completeFirstOrder);
}

//NON-DOM:
function getEarliestDateFirst(activeList) {
	console.log({activeList});
	let earliestFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
		if (listItemA.dueDate > listItemB.dueDate) {return 1;}
		if (listItemA.dueDate == listItemB.dueDate){return 0;}
		if (listItemA.dueDate < listItemB.dueDate) {return -1;}
	});
	console.log({earliestFirstOrder});
	displayReorderedList(earliestFirstOrder);
}

//NON-DOM:
function getLatestDateFirst(activeList) {
	let latestFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
		if (listItemA.dueDate > listItemB.dueDate) {return -1;}
		if (listItemA.dueDate == listItemB.dueDate){return 0;}
		if (listItemA.dueDate < listItemB.dueDate) {return 1;}
	});;
	console.log({latestFirstOrder});
	displayReorderedList(latestFirstOrder);
}



/***/ }),

/***/ "./src/manageLists.js":
/*!****************************!*\
  !*** ./src/manageLists.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


function list(name) {
	this.name = name;
    this.contents = [];
    this.active = false;   
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.myListsArray.push(this);
    return this;
}



/***/ }),

/***/ "./src/manageToDoItems.js":
/*!********************************!*\
  !*** ./src/manageToDoItems.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listItem": () => (/* binding */ listItem)
/* harmony export */ });
function listItem(name, description, dueDate, priority) {
	this.name = name;
	this.description = description;
	this.dueDate = dueDate;
	this.priority = priority;
    this.complete = false;	
	this.completeValue = 10;
	return this;
}


/***/ }),

/***/ "./src/media-queries.js":
/*!******************************!*\
  !*** ./src/media-queries.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMobileStyles": () => (/* binding */ addMobileStyles),
/* harmony export */   "widthTrigger": () => (/* binding */ widthTrigger)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


const mainTitle = document.querySelector("h1");
const mainBox = document.getElementById("mainBox");
const sidebar = document.getElementById("lists-sidebar");
const addItemBox = document.getElementById("addItemBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");
const sortBox = document.getElementById("sortBox");

function addMobileClass() {
    mainBox.classList.add("mobile");
    sidebar.classList.add("mobile");
    addItemBox.classList.add("mobile");
    sortBox.classList.add("mobile");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    sidebar.classList.remove("mobile");
    addItemBox.classList.remove("mobile");
    sortBox.classList.remove("mobile");
}

function createMobileButtons() {
    const innerNav = document.createElement("nav");
    const viewListsButton = document.createElement("button");
    const openAddItemBoxButton = document.createElement("button");
    viewListsButton.textContent = "View Lists";
    openAddItemBoxButton.textContent = "Add To-Do Item"
    innerNav.id = "innerNav";    
    viewListsButton.className = "mobile-button";  
    openAddItemBoxButton.className = "mobile-button"; 
    innerNav.appendChild(viewListsButton);
    innerNav.appendChild(openAddItemBoxButton);
    return innerNav;
}

function addMobileStyles(x) {
    if (x.matches) {
        addMobileClass();       
        const topNavBar = document.createElement("div");
        topNavBar.id = "topNavBar";
        document.body.appendChild(topNavBar);
        topNavBar.appendChild(mainTitle);       
        topNavBar.appendChild(createMobileButtons());               
    }
    else {
        removeMobileClass();
        document.body.removeChild(topNavBar);
        document.body.insertBefore(mainTitle, sidebar);
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _toDo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo.css */ "./src/toDo.css");










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxL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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtCO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcz8zODM5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21hbmFnZUxpc3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21hbmFnZVRvRG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tZWRpYS1xdWVyaWVzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG53aWR0aDogMTAwdnc7XFxuZm9udC1zaXplOiAxN3B4O1xcbi0tbXlCbHVlOiByZ2IoMTEsIDExLCAxNjcpO1xcbn1cXG4qIHtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg2MCwgMTAwJSwgODUlKTtcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjogNXB4O1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IGF1dG87XFxub3ZlcmZsb3c6IGF1dG87XFxuei1pbmRleDogMDtcXG4vKmJvcmRlcjogMnB4IHNvbGlkIHJlYmVjY2FwdXJwbGU7Ki9cXG59XFxuaDEge1xcbm1hcmdpbjogMTVweCBhdXRvIDQwcHg7XFxuY29sb3I6IDtcXG5mb250LXNpemU6IDJyZW07XFxuei1pbmRleDogMztcXG59XFxuaDIge1xcbmNvbG9yOiA7XFxuZm9udC1zaXplOiAxLjZyZW07XFxubWFyZ2luLWJvdHRvbTogMzBweDtcXG56LWluZGV4OiAxO1xcbn1cXG5oMyB7XFxuY29sb3I6IDtcXG5mb250LXNpemU6IDEuNHJlbTtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5oNCB7XFxuY29sb3I6IDtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDE1cHggMCAxMHB4O1xcbn1cXG4jbWFpbkJveCB7XFxud2lkdGg6IDQwdnc7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbmxlZnQ6IDIydnc7XFxubWFyZ2luLWxlZnQ6IDN2dztcXG4vKmJvcmRlcjogMnB4IHNvbGlkIHNsYXRlYmx1ZTsqL1xcbn1cXG4jbWFpbmxpc3Qge1xcbmJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxubWluLWhlaWdodDogMjBweDtcXG59XFxuI21haW5saXN0IC5saXN0SXRlbSB7XFxuYm9yZGVyLWJvdHRvbTogNnB4IGRvdWJsZSBibHVlO1xcbm1hcmdpbjogMDtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbmxpc3Qtc3R5bGUtdHlwZTogQXJhYmljO1xcbnBhZGRpbmc6IDRweCAycHggMXB4IDNweDtcXG59XFxuLnRvRG9Cb3gge1xcbnBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG5zdW1tYXJ5IHtcXG5mb250LXdlaWdodDogYm9sZDtcXG5tYXJnaW4tYm90dG9tOiA3cHg7XFxuZm9udC1zaXplOiAxLjFyZW07XFxudHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDFzO1xcbn1cXG5zdW1tYXJ5LmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayA0cHg7XFxufVxcbmRldGFpbHMgcC5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG4uZHVlRGF0ZSB7XFxubWFyZ2luOiAzcHggMDtcXG59XFxuLmNvbXBsZXRlTGFiZWwge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5ib3R0b206IC0zcHg7XFxucmlnaHQ6IDBweDtcXG5mb250OiBpbmhlcml0O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5oZWlnaHQ6IDE2cHg7XFxud2lkdGg6IDE2cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxubWFyZ2luOiA1cHggMCAwO1xcbn1cXG4uc21hbGxlci1sZWZ0LW1hcmdpbiB7XFxubWFyZ2luLWxlZnQ6IDU3JTtcXG59XFxuI3NvcnRCb3gge1xcbnBvc2l0aW9uOiBzdGlja3k7XFxuYm90dG9tOiA3NXZoO1xcbmxlZnQ6IDcwdnc7XFxud2lkdGg6IDI1dnc7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbi8qYm9yZGVyOiAycHggc29saWQgcmVkOyovXFxufVxcbiNzb3J0Qm94IGxhYmVsIHtcXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XFxuZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4vKiAhRk9SIFNPTUUgUkVBU09OLCBJIENBTidUIFJFTU9WRSBUSEUgQVVUTy1TVFlMSU5HIEdSRVkvQkxVRSBCQUNLR1JPVU5EIFdIRU4gSE9WRVJJTkcuLi4hICovXFxuI3NvcnRCb3ggb3B0aW9uOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5vcHRpb246aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbnNlbGVjdCB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuZm9udC1zaXplOiAwLjlyZW07XFxuYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG5oZWlnaHQ6IDIycHg7XFxucGFkZGluZzogM3B4O1xcbn1cXG4jYWRkSXRlbUJveCB7XFxucG9zaXRpb246IHN0aWNreTtcXG5sZWZ0OiA2OCU7XFxuaGVpZ2h0OiA1MHZoO1xcbmJvdHRvbTogMjB2aDtcXG53aWR0aDogMzAlO1xcbmNvbG9yOiBibHVlO1xcbm1hcmdpbi10b3A6IDEwcHg7XFxufVxcbmZpZWxkc2V0IHtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmxlZ2VuZCB7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAwIGF1dG8gMTVweDtcXG59XFxuaW5wdXQge1xcbm1hcmdpbjogNnB4IDA7XFxuZm9udC1zaXplOiAwLjg1cmVtO1xcbnBhZGRpbmc6IDNweCAycHg7XFxufVxcbi5jb2xvdXItY29kZSB7XFxud2lkdGg6IDEzcHg7XFxuaGVpZ2h0OiAxM3B4O1xcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5tYXJnaW4tbGVmdDogMTVweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI3JlZC1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA3MCUsIDgwJSk7XFxufVxcbiNvcmFuZ2UtYm94IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDAsIDEwMCUsIDcwJSk7XFxufVxcbiNncmVlbi1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDcwJSwgODAlKTtcXG59XFxucCB7XFxubWFyZ2luOiAxMHB4IDA7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmhpZ2gtcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA3MCUsIDgwJSk7XFxufVxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuLmxvdy1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG4jbGlzdHMtc2lkZWJhciB7XFxuYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmx1ZTtcXG5oZWlnaHQ6IDgwdmg7XFxud2lkdGg6IDIwdnc7XFxucG9zaXRpb246IGZpeGVkO1xcbmxlZnQ6IDVweDtcXG5ib3R0b206IDEwcHg7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNteWxpc3RzIHtcXG5saXN0LXN0eWxlOiBzcXVhcmUgaW5zaWRlO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxufVxcbiNteWxpc3RzIGxpIHtcXG5tYXJnaW46IDEycHggNXB4IDEycHggMjVweDtcXG5mb250LXNpemU6IDEuMnJlbTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxud2lkdGg6IDcwJTtcXG5jb2xvcjogYmx1ZTtcXG59XFxuYTphY3RpdmUsIGE6Zm9jdXMsIGxpOmZvY3VzIHtcXG5mb250LXNpemU6IDEuM3JlbTtcXG5mb250LXdlaWdodDogYm9sZDsgICAgXFxufVxcbmEsIGE6dmlzaXRlZCwgYTphY3RpdmUge1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG4jYWRkTGlzdEJ1dHRvbiwgI2FkZEJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5jb2xvcjogd2hpdGU7XFxubWFyZ2luOiAxMnB4IDA7XFxucGFkZGluZzogNHB4O1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG59XFxuI2xpc3ROYW1lLCAjbGlzdE5hbWU6Zm9jdXMge1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmJvcmRlcjogbm9uZTtcXG5vdXRsaW5lOiBub25lO1xcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibHVlO1xcbm1hcmdpbjogMTBweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG59XFxuLmRlbGV0ZSB7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG4tbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5yaWdodDogMXB4O1xcbnRvcDogMXB4O1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAxNXB4O1xcbndpZHRoOiAxNXB4O1xcbnBhZGRpbmc6IDFweDtcXG5mb250OiBib2xkZXIgMXJlbTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5kZWxldGUtbGkge1xcbmNvbG9yOiB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxud2lkdGg6IDE5cHg7XFxuaGVpZ2h0OiAxOXB4O1xcbmJvcmRlcjogbm9uZTtcXG5mbG9hdDogcmlnaHQ7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuZm9udC1zaXplOiAwLjlyZW07XFxubWFyZ2luLXRvcDogNHB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5ib3JkZXItcmFkaXVzOiAzMCU7XFxufVxcbiN0b3BOYXZCYXIge1xcbndpZHRoOiAxMDAlO1xcbmJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDA7XFxuaGVpZ2h0OiBtYXgoMTV2aCwgMTI1cHgpO1xcbnotaW5kZXg6IDI7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNtYWluQm94Lm1vYmlsZSB7XFxud2lkdGg6IDgwdnc7XFxubWFyZ2luOiA1dmggYXV0bztcXG56LWluZGV4OiAxO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5sZWZ0OiAxMHZ3O1xcbi8qdG9wOiBjbGFtcCgyMXZoLCAyN3ZoLCAzNXZoKTsqL1xcbnRvcDogbWF4KDI1dmgsIDE5MHB4KTtcXG59XFxuI3NvcnRCb3gubW9iaWxlIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuLyogZ29vZCBtb2JpbGUgdmFsdWVzOlxcbnRvcDogY2xhbXAoMTh2aCwgMjN2aCwgMjh2aCk7Ki9cXG50b3A6IG1heCgyMHZoLCAxNTBweCk7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmxlZnQ6IDIwdnc7XFxuei1pbmRleDogMTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUge1xcbmRpc3BsYXk6IG5vbmU7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZSB7XFxuZGlzcGxheTogbm9uZTtcXG59XFxuI2lubmVyTmF2IHtcXG53aWR0aDogODAlO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5ib3R0b206IDA7XFxuaGVpZ2h0OiAzNyU7XFxubWFyZ2luOiAwIDEwJTtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5ib3JkZXItdG9wOiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLm1vYmlsZS1idXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbndpZHRoOiA1MCU7XFxuZmxvYXQ6IGxlZnQ7XFxuaGVpZ2h0OiAxMDAlO1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG5mb250LXNpemU6IDEuMXJlbTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ubW9iaWxlLWJ1dHRvbjpob3ZlciwgLm1vYmlsZS1idXR0b246YWN0aXZlLCAubW9iaWxlLWJ1dHRvbjpmb2N1cyB7XFxudGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMjQ0LCAyNDgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9Eby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxZQUFZO0FBQ1osZUFBZTtBQUNmLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxZQUFZO0FBQ1osY0FBYztBQUNkLFVBQVU7QUFDVixtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixPQUFPO0FBQ1AsZUFBZTtBQUNmLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsT0FBTztBQUNQLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixnQkFB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QUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsV0FBVztBQUNYLDZCQUE2QjtBQUM3QixlQUFlO0FBQ2YsTUFBTTtBQUNOLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOzhCQUM4QjtBQUM5QixxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsV0FBVztBQUNYLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixVQUFVO0FBQ1YsV0FBVztBQUNYLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbndpZHRoOiAxMDB2dztcXG5mb250LXNpemU6IDE3cHg7XFxuLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxufVxcbioge1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbnBhZGRpbmc6IDA7XFxubWFyZ2luOiA1cHg7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogYXV0bztcXG5vdmVyZmxvdzogYXV0bztcXG56LWluZGV4OiAwO1xcbi8qYm9yZGVyOiAycHggc29saWQgcmViZWNjYXB1cnBsZTsqL1xcbn1cXG5oMSB7XFxubWFyZ2luOiAxNXB4IGF1dG8gNDBweDtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMnJlbTtcXG56LWluZGV4OiAzO1xcbn1cXG5oMiB7XFxuY29sb3I6IDtcXG5mb250LXNpemU6IDEuNnJlbTtcXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xcbnotaW5kZXg6IDE7XFxufVxcbmgzIHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS40cmVtO1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbmg0IHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMTVweCAwIDEwcHg7XFxufVxcbiNtYWluQm94IHtcXG53aWR0aDogNDB2dztcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxubGVmdDogMjJ2dztcXG5tYXJnaW4tbGVmdDogM3Z3O1xcbi8qYm9yZGVyOiAycHggc29saWQgc2xhdGVibHVlOyovXFxufVxcbiNtYWlubGlzdCB7XFxuYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG5taW4taGVpZ2h0OiAyMHB4O1xcbn1cXG4jbWFpbmxpc3QgLmxpc3RJdGVtIHtcXG5ib3JkZXItYm90dG9tOiA2cHggZG91YmxlIGJsdWU7XFxubWFyZ2luOiAwO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxubGlzdC1zdHlsZS10eXBlOiBBcmFiaWM7XFxucGFkZGluZzogNHB4IDJweCAxcHggM3B4O1xcbn1cXG4udG9Eb0JveCB7XFxucG9zaXRpb246IHJlbGF0aXZlOyAgICBcXG5mb250LXNpemU6IDFyZW07XFxufVxcbnN1bW1hcnkge1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbm1hcmdpbi1ib3R0b206IDdweDtcXG5mb250LXNpemU6IDEuMXJlbTtcXG50cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMXM7XFxufVxcbnN1bW1hcnkuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuZGV0YWlscyBwLmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayA0cHg7XFxufVxcbi5kdWVEYXRlIHtcXG5tYXJnaW46IDNweCAwO1xcbn1cXG4uY29tcGxldGVMYWJlbCB7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogLTNweDtcXG5yaWdodDogMHB4O1xcbmZvbnQ6IGluaGVyaXQ7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbmhlaWdodDogMTZweDtcXG53aWR0aDogMTZweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5tYXJnaW46IDVweCAwIDA7XFxufVxcbi5zbWFsbGVyLWxlZnQtbWFyZ2luIHtcXG5tYXJnaW4tbGVmdDogNTclO1xcbn1cXG4jc29ydEJveCB7XFxucG9zaXRpb246IHN0aWNreTtcXG5ib3R0b206IDc1dmg7XFxubGVmdDogNzB2dztcXG53aWR0aDogMjV2dztcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuLypib3JkZXI6IDJweCBzb2xpZCByZWQ7Ki9cXG59XFxuI3NvcnRCb3ggbGFiZWwge1xcbm1hcmdpbi1yaWdodDogMTBweDtcXG5mb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi8qICFGT1IgU09NRSBSRUFTT04sIEkgQ0FOJ1QgUkVNT1ZFIFRIRSBBVVRPLVNUWUxJTkcgR1JFWS9CTFVFIEJBQ0tHUk9VTkQgV0hFTiBIT1ZFUklORy4uLiEgKi9cXG4jc29ydEJveCBvcHRpb246aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbm9wdGlvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuc2VsZWN0IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmhlaWdodDogMjJweDtcXG5wYWRkaW5nOiAzcHg7XFxufVxcbiNhZGRJdGVtQm94IHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbmxlZnQ6IDY4JTtcXG5oZWlnaHQ6IDUwdmg7XFxuYm90dG9tOiAyMHZoO1xcbndpZHRoOiAzMCU7XFxuY29sb3I6IGJsdWU7XFxubWFyZ2luLXRvcDogMTBweDtcXG59XFxuZmllbGRzZXQge1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubGVnZW5kIHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDAgYXV0byAxNXB4O1xcbn1cXG5pbnB1dCB7XFxubWFyZ2luOiA2cHggMDtcXG5mb250LXNpemU6IDAuODVyZW07XFxucGFkZGluZzogM3B4IDJweDtcXG59XFxuLmNvbG91ci1jb2RlIHtcXG53aWR0aDogMTNweDtcXG5oZWlnaHQ6IDEzcHg7XFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbm1hcmdpbi1sZWZ0OiAxNXB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jcmVkLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuI29yYW5nZS1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuI2dyZWVuLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG5wIHtcXG5tYXJnaW46IDEwcHggMDtcXG5jb2xvcjogYmxhY2s7XFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uaGlnaC1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4ubG93LXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbiNsaXN0cy1zaWRlYmFyIHtcXG5ib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibHVlO1xcbmhlaWdodDogODB2aDtcXG53aWR0aDogMjB2dztcXG5wb3NpdGlvbjogZml4ZWQ7XFxubGVmdDogNXB4O1xcbmJvdHRvbTogMTBweDtcXG5vdmVyZmxvdzogYXV0bztcXG59XFxuI215bGlzdHMge1xcbmxpc3Qtc3R5bGU6IHNxdWFyZSBpbnNpZGU7XFxudGV4dC1hbGlnbjogbGVmdDtcXG59XFxuI215bGlzdHMgbGkge1xcbm1hcmdpbjogMTJweCA1cHggMTJweCAyNXB4O1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG53aWR0aDogNzAlO1xcbmNvbG9yOiBibHVlO1xcbn1cXG5hOmFjdGl2ZSwgYTpmb2N1cywgbGk6Zm9jdXMge1xcbmZvbnQtc2l6ZTogMS4zcmVtO1xcbmZvbnQtd2VpZ2h0OiBib2xkOyAgICBcXG59XFxuYSwgYTp2aXNpdGVkLCBhOmFjdGl2ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcbiNhZGRMaXN0QnV0dG9uLCAjYWRkQnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbmNvbG9yOiB3aGl0ZTtcXG5tYXJnaW46IDEycHggMDtcXG5wYWRkaW5nOiA0cHg7XFxuYm9yZGVyLXJhZGl1czogM3B4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4jbGlzdE5hbWUsICNsaXN0TmFtZTpmb2N1cyB7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbm91dGxpbmU6IG5vbmU7XFxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsdWU7XFxubWFyZ2luOiAxMHB4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uZGVsZXRlIHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnJpZ2h0OiAxcHg7XFxudG9wOiAxcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbmNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDE1cHg7XFxud2lkdGg6IDE1cHg7XFxucGFkZGluZzogMXB4O1xcbmZvbnQ6IGJvbGRlciAxcmVtO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmRlbGV0ZS1saSB7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG53aWR0aDogMTlweDtcXG5oZWlnaHQ6IDE5cHg7XFxuYm9yZGVyOiBub25lO1xcbmZsb2F0OiByaWdodDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5tYXJnaW4tdG9wOiA0cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbmJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuI3RvcE5hdkJhciB7XFxud2lkdGg6IDEwMCU7XFxuYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMDtcXG5oZWlnaHQ6IG1heCgxNXZoLCAxMjVweCk7XFxuei1pbmRleDogMjtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG5vdmVyZmxvdzogYXV0bztcXG59XFxuI21haW5Cb3gubW9iaWxlIHtcXG53aWR0aDogODB2dztcXG5tYXJnaW46IDV2aCBhdXRvO1xcbnotaW5kZXg6IDE7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDEwdnc7XFxuLyp0b3A6IGNsYW1wKDIxdmgsIDI3dmgsIDM1dmgpOyovXFxudG9wOiBtYXgoMjV2aCwgMTkwcHgpO1xcbn1cXG4jc29ydEJveC5tb2JpbGUge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4vKiBnb29kIG1vYmlsZSB2YWx1ZXM6XFxudG9wOiBjbGFtcCgxOHZoLCAyM3ZoLCAyOHZoKTsqL1xcbnRvcDogbWF4KDIwdmgsIDE1MHB4KTtcXG53aWR0aDogZml0LWNvbnRlbnQ7XFxubGVmdDogMjB2dztcXG56LWluZGV4OiAxO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZSB7XFxuZGlzcGxheTogbm9uZTtcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlIHtcXG5kaXNwbGF5OiBub25lO1xcbn1cXG4jaW5uZXJOYXYge1xcbndpZHRoOiA4MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogMDtcXG5oZWlnaHQ6IDM3JTtcXG5tYXJnaW46IDAgMTAlO1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbmJvcmRlci10b3A6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4ubW9iaWxlLWJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxud2lkdGg6IDUwJTtcXG5mbG9hdDogbGVmdDtcXG5oZWlnaHQ6IDEwMCU7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5tb2JpbGUtYnV0dG9uOmhvdmVyLCAubW9iaWxlLWJ1dHRvbjphY3RpdmUsIC5tb2JpbGUtYnV0dG9uOmZvY3VzIHtcXG50ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAyNDQsIDI0OCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9Eby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvRG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7bGlzdEl0ZW19IGZyb20gJy4vbWFuYWdlVG9Eb0l0ZW1zLmpzJztcbmltcG9ydCB7bGlzdH0gZnJvbSAnLi9tYW5hZ2VMaXN0cy5qcyc7XG5pbXBvcnQge2FkZE1vYmlsZVN0eWxlcywgd2lkdGhUcmlnZ2VyfSBmcm9tICcuL21lZGlhLXF1ZXJpZXMuanMnO1xuXG5jb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCdXR0b25cIik7XG5jb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVGaWVsZFwiKTtcbmNvbnN0IGRlc2NyaXBGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcEZpZWxkXCIpO1xuY29uc3QgZHVlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZUZpZWxkXCIpO1xuY29uc3QgcHJpb3JpdHlCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJpb3JpdHlcIikpO1xuXG5sZXQgTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QgPSBcInRhc2subXlMaXN0c0FycmF5XCI7XG5sZXQgbXlMaXN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCkpIHx8IFtdO1xuXG5jb25zdCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbmxpc3RcIik7XG5cbi8vbGlzdCBlbGVtZW50IG9iamVjdDpcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbmNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZExpc3RCdXR0b25cIik7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3ROYW1lXCIpO1xuXG5jb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtdGl0bGVcIik7XG5cbi8vT0w6XG5jb25zdCBsaXN0T2ZMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlsaXN0c1wiKTtcbmxldCBsaXN0RWxlbWVudHMgPSBbbWFpbl07XG5sZXQgbGlzdE5hbWVzO1xubGV0IHByaW9yaXR5O1x0XHRcblxuLy9ub24tRE9NPzpcbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcblx0c2V0TGlzdE5hbWVzKCk7ICAgXG5cdGxpc3ROYW1lcy50b1N0cmluZygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE5hbWVzMlwiLCBsaXN0TmFtZXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNULCBKU09OLnN0cmluZ2lmeShteUxpc3RzQXJyYXkpKTtcblx0Y29uc29sZS5sb2coXCJwb3B1bGF0ZWQhXCIpO1x0XG59XG4vL0RPTTpcbmZ1bmN0aW9uIHNldExpc3ROYW1lcygpIHtcblx0bGlzdE5hbWVzID0gbGlzdEVsZW1lbnRzLm1hcChsaXN0RWxlbWVudCA9PiB7XG5cdFx0aWYgKGxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlICE9IG51bGwpIHtcblx0XHRcdHJldHVybiBsaXN0RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbGlzdE5hbWVzO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBwb3B1bGF0ZVN0b3JhZ2UpO1xuLy9sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy9ET006XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRjb25zb2xlLmxvZyh7bXlMaXN0c0FycmF5fSk7XG5cdGlmIChteUxpc3RzQXJyYXkubGVuZ3RoID09IDApIHtcblx0XHRjb25zdCBmaXJzdCA9IG5ldyBsaXN0KFwiTWFpblwiKTtcblx0XHRmaXJzdC5hY3RpdmUgPSB0cnVlO1x0XG5cdH1cdFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3ROYW1lczJcIikpIHtcblx0XHQvLyB3aWxsIGFscmVhZHkgaW5jbHVkZSBcIm1haW5cIiBhcyBmaXJzdCBpdGVtOlxuXHRcdGxpc3ROYW1lcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdE5hbWVzMlwiKS5zcGxpdChcIixcIik7XG5cdH1cblx0Ly8gZmlyc3QgdGltZSBhcHAgaXMgdXNlZDpcblx0ZWxzZSBsaXN0TmFtZXMgPSBbXCJNYWluXCJdO1xuXHRjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKTtcdFxuXHRsb2FkRGVmYXVsdExpc3QoKTtcblx0YWRkTW9iaWxlU3R5bGVzKHdpZHRoVHJpZ2dlcik7XG59O1xud2lkdGhUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYWRkTW9iaWxlU3R5bGVzKTtcblxuLy9ET006XG5mdW5jdGlvbiBjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKSB7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgXHRsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICsgbGlzdE5hbWVzW2ldICsgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7XG5cdFx0bGlzdEVsZW1lbnQuaWQgPSBsaXN0TmFtZXNbaV07ICAgICBcblx0XHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRcdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XG5cdFx0c2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcblx0fVxufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGNsZWFyTGlzdE9mTGlzdHMoKSB7XG5cdHdoaWxlIChsaXN0T2ZMaXN0cy5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHR9XG5cdHJldHVybjtcbn1cbi8vRE9NOlxuZnVuY3Rpb24gY29uZmlnTGlzdERlbGV0ZUJ1dHRvbnMoKSB7XG5cdGxldCBkZWxldGVBcnJheTIgPSBbLi4ubGlzdE9mTGlzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1saVwiKV07XG5cdGRlbGV0ZUFycmF5Mi5mb3JFYWNoKGRlbGV0ZUJ1dHRvbiA9PiB7XG5cdFx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuXHRcdFx0bGV0IHRvQmVEZWxldGVkID0gbGlzdEVsZW1lbnRzLmZpbmRJbmRleChsaXN0RWxlbWVudCA9PiBsaXN0RWxlbWVudC5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblx0XHRcdGlmICh0b0JlRGVsZXRlZCA+IDApIHtcblx0XHRcdFx0bGlzdEVsZW1lbnRzLnNwbGljZSh0b0JlRGVsZXRlZCwgMSk7XG5cdFx0XHRcdGxldCBpbmRleCA9IG15TGlzdHNBcnJheS5maW5kSW5kZXggKGxpc3RPYmplY3QgPT4gbGlzdE9iamVjdC5uYW1lID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuXHRcdFx0XHRteUxpc3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0bGlzdE5hbWVzID0gc2V0TGlzdE5hbWVzKCk7XG5cdFx0XHRcdGxpc3RFbGVtZW50cyA9IFttYWluXTtcblx0XHRcdFx0Y2xlYXJMaXN0T2ZMaXN0cygpO1xuXHRcdFx0XHRsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChtYWluKTtcblx0XHRcdFx0Y3JlYXRlTGlzdEVsZW1lbnRzKGxpc3ROYW1lcyk7XHRcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gbG9hZERlZmF1bHRMaXN0KCkge1xuXHRteUxpc3RzQXJyYXlbMF0uYWN0aXZlID0gdHJ1ZTtcblx0c2V0SXRlbUluZGljZXMobXlMaXN0c0FycmF5WzBdKTtcdFxuXHRteUxpc3RzQXJyYXlbMF0uY29udGVudHMuZm9yRWFjaChsaXN0SXRlbU9iamVjdCA9PiB7XG5cdFx0ZGlzcGxheUxpc3RJdGVtKGxpc3RJdGVtT2JqZWN0KTtcblx0fSk7XG5cdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKG15TGlzdHNBcnJheVswXSk7XG5cdGNvbmZpZ0NoZWNrQm94ZXMobXlMaXN0c0FycmF5WzBdKTtcbn1cblxuLy9ub24tRE9NOlxuZnVuY3Rpb24gc2V0SXRlbUluZGljZXMobGlzdE9iamVjdCkge1xuXHRsZXQgbnVtYmVyID0gMTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdE9iamVjdC5jb250ZW50c1tpXS5pbmRleCA9IG51bWJlcjtcblx0XHRudW1iZXIrKztcblx0fVxufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpIHtcblx0bGV0IGRlbGV0ZUFycmF5ID0gWy4uLm1haW5MaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVcIildO1xuXHRkZWxldGVBcnJheS5mb3JFYWNoKGRlbGV0ZUJ1dHRvbiA9PiB7XG5cdFx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChsaXN0T2JqZWN0LmNvbnRlbnRzW2ldLmluZGV4ID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCkge1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuY29udGVudHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcblx0XHRcdFx0fVx0XHRcdFx0ICAgICAgIFxuXHRcdFx0fSBcblx0XHRcdGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTsgXG5cdFx0XHRjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpO1xuXHRcdFx0bGV0IG1haW5MaXN0QXJyYXkgPSBBcnJheS5mcm9tKG1haW5MaXN0LmNoaWxkcmVuKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9iamVjdC5jb250ZW50cy5sZW5ndGg7IGkrKykgeyAgICBcblx0XHRcdFx0bWFpbkxpc3RBcnJheVtpXS5pZCA9IGdldEluZGV4KGxpc3RPYmplY3QuY29udGVudHNbaV0pO1xuXHRcdFx0fSAgXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdH0pO1xuXHR9KTtcdCAgICAgICBcbn1cblxuZnVuY3Rpb24gY29uZmlnQ2hlY2tCb3hlcyhsaXN0T2JqZWN0KSB7XG5cdGxldCBjaGVja2JveGVzID0gWy4uLm1haW5MaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGVja2JveFwiKV07XG5cdGxldCB0YXJnZXRJdGVtO1xuXHRjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuXHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuXHRcdFx0Y2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcblx0XHRcdHRhcmdldEl0ZW0gPSBsaXN0T2JqZWN0LmNvbnRlbnRzLmZpbmQobGlzdEl0ZW0gPT4gbGlzdEl0ZW0uaW5kZXggPT0gY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpO1xuXHRcdFx0aWYgKHRhcmdldEl0ZW0uY29tcGxldGUgPT0gZmFsc2UpIHtcblx0XHRcdFx0dGFyZ2V0SXRlbS5jb21wbGV0ZSA9IHRydWU7XHRcblx0XHRcdFx0dGFyZ2V0SXRlbS5jb21wbGV0ZVZhbHVlID0gMDtcdFx0XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICh0YXJnZXRJdGVtLmNvbXBsZXRlID09IHRydWUpIHtcblx0XHRcdFx0dGFyZ2V0SXRlbS5jb21wbGV0ZSA9IGZhbHNlO1xuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlVmFsdWUgPSAxMDtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKHt0YXJnZXRJdGVtfSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vL0RPTTpcbnByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoXCJjaGVja2VkXCIpKSB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfVxuICAgXHRidXR0b24ub25mb2N1cyA9ICgpID0+IHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcblxuXHR9OyAgICBcblx0YnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG5cdH07XG59KTtcblxuLy9ET006XG5mdW5jdGlvbiBjbGVhckZpZWxkcygpIHtcblx0Y29uc3QgZmllbGRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHRmaWVsZFwiKSk7XG4gICAgZmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZC52YWx1ZSA9IFwiXCIpO1xufVxuXG4vL0RPTTpcbmFkZEl0ZW1CdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0bGV0IGl0ZW0gPSBuZXcgbGlzdEl0ZW0obmFtZUZpZWxkLnZhbHVlLCBkZXNjcmlwRmllbGQudmFsdWUsIGR1ZUZpZWxkLnZhbHVlLCBwcmlvcml0eSk7XG5cdG15TGlzdHNBcnJheS5mb3JFYWNoKGxpc3RPYmplY3QgPT4ge1xuXHRcdGlmIChsaXN0T2JqZWN0LmFjdGl2ZSA9PSB0cnVlKSB7XG5cdFx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzLnB1c2goaXRlbSk7XG5cdFx0XHRzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KTtcdFxuXHRcdFx0ZGlzcGxheUxpc3RJdGVtKGl0ZW0pO1xuXHRcdFx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCk7XG5cdFx0XHRjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpO1xuXHRcdH1cblx0fSk7ICBcdFxuICAgIGNsZWFyRmllbGRzKCk7ICAgXG59XG5cbi8vRE9NOlxuYWRkTGlzdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGxldCBuZXdMaXN0ID0gbmV3IGxpc3QobmFtZUlucHV0LnZhbHVlKTtcbiAgICBkaXNwbGF5TGlzdEVsZW1lbnQobmV3TGlzdCk7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gXCJcIlxufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGRpc3BsYXlMaXN0RWxlbWVudChsaXN0KSB7XG5cdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+JyArIGxpc3QubmFtZSArICc8L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1saVwiPlg8L2J1dHRvbj4nOyAgXG5cdGxpc3RFbGVtZW50LmlkID0gbGlzdC5uYW1lOyAgIFxuXHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG4gICAgbGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpO1xuICAgIHNldExpc3RFdmVudEhhbmRsZXJzKCk7XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gc2V0TGlzdEV2ZW50SGFuZGxlcnMoKSB7XG5cdGxpc3RFbGVtZW50cy5mb3JFYWNoKGxpc3RFbGVtZW50ID0+IHtcdFx0XG5cdFx0bGlzdEVsZW1lbnQub25jbGljayA9ICgpID0+IHtcdFx0XG5cdFx0XHRteUxpc3RzQXJyYXkuZm9yRWFjaChsaXN0T2JqZWN0ID0+IHtcblx0XHRcdFx0aWYgKGxpc3RPYmplY3QubmFtZSA9PSBsaXN0RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQpIHtcdFxuXHRcdFx0XHRcdG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdFx0bGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdE9iamVjdC5uYW1lO1xuXHRcdFx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuY29udGVudHMuZm9yRWFjaChsaXN0SXRlbU9iamVjdCA9PiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5TGlzdEl0ZW0obGlzdEl0ZW1PYmplY3QpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpO1xuXHRcdFx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSAge1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1x0XHRcdFxuXHRcdH07XG5cdH0pO1xuXHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0cG9wdWxhdGVTdG9yYWdlKCk7XHRcdFxufVxuXG4vL25vbi1ET00/OlxuZnVuY3Rpb24gZ2V0SW5kZXgobGlzdEl0ZW1PYmplY3QpIHtcblx0cmV0dXJuIGxpc3RJdGVtT2JqZWN0LmluZGV4O1xufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1Db250ZW50KGl0ZW0pIHtcblx0cmV0dXJuICc8ZGl2IGNsYXNzPVwidG9Eb0JveFwiPjxkZXRhaWxzPjxzdW1tYXJ5Pidcblx0ICsgaXRlbS5uYW1lICsgJzwvc3VtbWFyeT48cD4nICsgaXRlbS5kZXNjcmlwdGlvbiArIFxuXHQgJzwvcD48L2RldGFpbHM+PHAgY2xhc3M9XCJkdWVEYXRlXCI+RHVlIGRhdGU6ICcgKyBpdGVtLmR1ZURhdGUgKyBcblx0ICc8L3A+PGxhYmVsIGNsYXNzPVwiY29tcGxldGVMYWJlbFwiPkNvbXBsZXRlZDogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVkXCIgdmFsdWU9XCJcIj48L2xhYmVsPjxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5YPC9idXR0b24+PC9kaXY+JzsgICAgXG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gbWFya0NvbXBsZXRlKGl0ZW1FbGVtZW50KSB7XG5cdGl0ZW1FbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcblx0aXRlbUVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKVxuXHRsZXQgY2hlY2tib3ggPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrYm94XCIpO1xuXHRjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpO1x0XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gYXNzaWduUHJpb3JpdHkoaXRlbUVsZW1lbnQsIGl0ZW1PYmplY3QpIHtcblx0c3dpdGNoKGl0ZW1PYmplY3QucHJpb3JpdHkpIHtcblx0XHRjYXNlIFwiaGlnaFwiOiBcblx0XHRpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcblx0XHRpdGVtT2JqZWN0LnZhbHVlID0gMTA7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIm1lZGl1bVwiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG5cdFx0aXRlbU9iamVjdC52YWx1ZSA9IDIwO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJsb3dcIjpcblx0XHRpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuXHRcdGl0ZW1PYmplY3QudmFsdWUgPSAzMDtcblx0XHRicmVhaztcblx0fVxufVxuLy9ET006XG5mdW5jdGlvbiBkaXNwbGF5TGlzdEl0ZW0oaXRlbSkge1xuXHRjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRuZXdJdGVtLmlkID0gZ2V0SW5kZXgoaXRlbSk7XHRcblx0bmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1cIik7XG5cdGFzc2lnblByaW9yaXR5KG5ld0l0ZW0sIGl0ZW0pO1xuXHRuZXdJdGVtLmlubmVySFRNTCA9IGNyZWF0ZUl0ZW1Db250ZW50KGl0ZW0pO1xuXHRpZiAoaXRlbS5jb21wbGV0ZSA9PSB0cnVlKSBtYXJrQ29tcGxldGUobmV3SXRlbSk7XG4gICAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHRcbn1cblxuZXhwb3J0IHtkaXNwbGF5TGlzdEl0ZW0sIG15TGlzdHNBcnJheSwgbGlzdFRpdGxlfTtcblxuY29uc3Qgc29ydEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEJveFwiKTtcblxuLy9ET006XG5zb3J0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBnZXRPcmRlcihlKSB7XG5cdGxldCBhY3RpdmVMaXN0ID0gbXlMaXN0c0FycmF5LmZpbmQobGlzdCA9PiBsaXN0LmFjdGl2ZSA9PSB0cnVlKTtcblx0c3dpdGNoIChlLnRhcmdldC5pZCkge1xuXHRcdGNhc2UgXCJoaWdoUHJpb3JpdHlcIjpcblx0XHRnZXRIaWdoUHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcdFx0XG5cdFx0Y2FzZSBcImxvd1ByaW9yaXR5XCI6XG5cdFx0Z2V0TG93UHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcdFx0XG5cdFx0Y2FzZSBcImluY29tcGxldGVGaXJzdFwiOlxuXHRcdGdldEluY29tcGxldGVGaXJzdE9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwiY29tcGxldGVGaXJzdFwiOlxuXHRcdGdldENvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcblx0XHRjYXNlIFwiZHVlRGF0ZUVhcmxpZXN0XCI6XG5cdFx0Z2V0RWFybGllc3REYXRlRmlyc3QoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XHRcdFxuXHRcdGNhc2UgXCJkdWVEYXRlTGF0ZXN0XCI6XG5cdFx0Z2V0TGF0ZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1xuXHR9XG5cdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGFjdGl2ZUxpc3QpO1xuXHRjb25maWdDaGVja0JveGVzKGFjdGl2ZUxpc3QpO1xufSk7XG5cbi8vRE9NOlxuZnVuY3Rpb24gZGlzcGxheVJlb3JkZXJlZExpc3QoY3VycmVudExpc3RPcmRlcikge1xuXHRtYWluTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdGxldCBudW1iZXIgPSAxO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMaXN0T3JkZXIubGVuZ3RoOyBpKyspIHtcblx0XHRjdXJyZW50TGlzdE9yZGVyW2ldLmluZGV4ID0gbnVtYmVyO1xuXHRcdGRpc3BsYXlMaXN0SXRlbShjdXJyZW50TGlzdE9yZGVyW2ldKTtcdFx0XG5cdFx0bnVtYmVyKys7XG5cdH1cdFxufVxuLy9OT04tRE9NOlxuZnVuY3Rpb24gZ2V0SGlnaFByaW9yaXR5T3JkZXIoYWN0aXZlTGlzdCkge1x0XG5cdGxldCBoaWdoUHJpb3JpdHlPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA+IGxpc3RJdGVtQi52YWx1ZSkge3JldHVybiAxO31cblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlID09IGxpc3RJdGVtQi52YWx1ZSl7cmV0dXJuIDA7fVxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPCBsaXN0SXRlbUIudmFsdWUpIHtyZXR1cm4gLTE7fVxuXHR9KTtcblx0ZGlzcGxheVJlb3JkZXJlZExpc3QoaGlnaFByaW9yaXR5T3JkZXIpO1xufVxuLy9OT04tRE9NOlxuZnVuY3Rpb24gZ2V0TG93UHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGxvd1ByaW9yaXR5T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuICAgICAgICBpZiAobGlzdEl0ZW1BLnZhbHVlID4gbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIC0xO31cblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlID09IGxpc3RJdGVtQi52YWx1ZSl7cmV0dXJuIDA7fVxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPCBsaXN0SXRlbUIudmFsdWUpIHtyZXR1cm4gMTt9XG5cdH0pO1x0XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGxvd1ByaW9yaXR5T3JkZXIpO1xufVxuLy9OT04tRE9NOlxuZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZUZpcnN0T3JkZXIoYWN0aXZlTGlzdCkge1x0XG5cdGxldCBpbmNvbXBsZXRlRmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0XHRpZiAobGlzdEl0ZW1BLmNvbXBsZXRlVmFsdWUgPCBsaXN0SXRlbUIuY29tcGxldGVWYWx1ZSkgcmV0dXJuIDE7XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChpbmNvbXBsZXRlRmlyc3RPcmRlcik7XG59XG5cbi8vTk9OLURPTTpcbmZ1bmN0aW9uIGdldENvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGNvbXBsZXRlRmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0XHRpZiAobGlzdEl0ZW1BLmNvbXBsZXRlVmFsdWUgPiBsaXN0SXRlbUIuY29tcGxldGVWYWx1ZSkgcmV0dXJuIDE7XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChjb21wbGV0ZUZpcnN0T3JkZXIpO1xufVxuXG4vL05PTi1ET006XG5mdW5jdGlvbiBnZXRFYXJsaWVzdERhdGVGaXJzdChhY3RpdmVMaXN0KSB7XG5cdGNvbnNvbGUubG9nKHthY3RpdmVMaXN0fSk7XG5cdGxldCBlYXJsaWVzdEZpcnN0T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA+IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIDE7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA9PSBsaXN0SXRlbUIuZHVlRGF0ZSl7cmV0dXJuIDA7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA8IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIC0xO31cblx0fSk7XG5cdGNvbnNvbGUubG9nKHtlYXJsaWVzdEZpcnN0T3JkZXJ9KTtcblx0ZGlzcGxheVJlb3JkZXJlZExpc3QoZWFybGllc3RGaXJzdE9yZGVyKTtcbn1cblxuLy9OT04tRE9NOlxuZnVuY3Rpb24gZ2V0TGF0ZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpIHtcblx0bGV0IGxhdGVzdEZpcnN0T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA+IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIC0xO31cblx0XHRpZiAobGlzdEl0ZW1BLmR1ZURhdGUgPT0gbGlzdEl0ZW1CLmR1ZURhdGUpe3JldHVybiAwO31cblx0XHRpZiAobGlzdEl0ZW1BLmR1ZURhdGUgPCBsaXN0SXRlbUIuZHVlRGF0ZSkge3JldHVybiAxO31cblx0fSk7O1xuXHRjb25zb2xlLmxvZyh7bGF0ZXN0Rmlyc3RPcmRlcn0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChsYXRlc3RGaXJzdE9yZGVyKTtcbn1cblxuIiwiaW1wb3J0IHtteUxpc3RzQXJyYXl9IGZyb20gXCIuL0RPTS5qc1wiO1xuXG5mdW5jdGlvbiBsaXN0KG5hbWUpIHtcblx0dGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRlbnRzID0gW107XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTsgICBcbiAgICBteUxpc3RzQXJyYXkucHVzaCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IHtsaXN0fTsiLCJmdW5jdGlvbiBsaXN0SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblx0dGhpcy5uYW1lID0gbmFtZTtcblx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1x0XG5cdHRoaXMuY29tcGxldGVWYWx1ZSA9IDEwO1xuXHRyZXR1cm4gdGhpcztcbn1cbmV4cG9ydCB7bGlzdEl0ZW19OyIsImltcG9ydCB7bGlzdFRpdGxlfSBmcm9tICcuL0RPTS5qcyc7XG5cbmNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbmNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Cb3hcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0cy1zaWRlYmFyXCIpO1xuY29uc3QgYWRkSXRlbUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSXRlbUJveFwiKTtcbmNvbnN0IHdpZHRoVHJpZ2dlciA9IHdpbmRvdy5tYXRjaE1lZGlhKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweClcIik7XG5jb25zdCBzb3J0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0Qm94XCIpO1xuXG5mdW5jdGlvbiBhZGRNb2JpbGVDbGFzcygpIHtcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1vYmlsZUNsYXNzKCkge1xuICAgIG1haW5Cb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICAgIHNvcnRCb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9iaWxlQnV0dG9ucygpIHtcbiAgICBjb25zdCBpbm5lck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3Qgdmlld0xpc3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBvcGVuQWRkSXRlbUJveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmlld0xpc3RzQnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3IExpc3RzXCI7XG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUby1EbyBJdGVtXCJcbiAgICBpbm5lck5hdi5pZCA9IFwiaW5uZXJOYXZcIjsgICAgXG4gICAgdmlld0xpc3RzQnV0dG9uLmNsYXNzTmFtZSA9IFwibW9iaWxlLWJ1dHRvblwiOyAgXG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24uY2xhc3NOYW1lID0gXCJtb2JpbGUtYnV0dG9uXCI7IFxuICAgIGlubmVyTmF2LmFwcGVuZENoaWxkKHZpZXdMaXN0c0J1dHRvbik7XG4gICAgaW5uZXJOYXYuYXBwZW5kQ2hpbGQob3BlbkFkZEl0ZW1Cb3hCdXR0b24pO1xuICAgIHJldHVybiBpbm5lck5hdjtcbn1cblxuZnVuY3Rpb24gYWRkTW9iaWxlU3R5bGVzKHgpIHtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICAgIGFkZE1vYmlsZUNsYXNzKCk7ICAgICAgIFxuICAgICAgICBjb25zdCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b3BOYXZCYXIuaWQgPSBcInRvcE5hdkJhclwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvcE5hdkJhcik7XG4gICAgICAgIHRvcE5hdkJhci5hcHBlbmRDaGlsZChtYWluVGl0bGUpOyAgICAgICBcbiAgICAgICAgdG9wTmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZU1vYmlsZUJ1dHRvbnMoKSk7ICAgICAgICAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVNb2JpbGVDbGFzcygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvcE5hdkJhcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG1haW5UaXRsZSwgc2lkZWJhcik7XG4gICAgfVxufVxuXG5leHBvcnQge2FkZE1vYmlsZVN0eWxlcywgd2lkdGhUcmlnZ2VyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL0RPTS5qcyc7XG5pbXBvcnQgJy4vdG9Eby5jc3MnO1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=