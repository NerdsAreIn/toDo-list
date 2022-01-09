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
___CSS_LOADER_EXPORT___.push([module.id, "html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: var(--myYellow);\npadding: 0;\nmargin: 5px;\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 0;\n}\nh1 {\nmargin: 15px auto 40px;\nfont-size: 2rem;\nz-index: 3;\n}\nh2 {\nfont-size: 1.6rem;\nmargin-bottom: 30px;\nz-index: 1;\n}\nh3 {\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\nleft: 22vw;\nmargin-left: 3vw;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n#clearButton {\nmargin: 25px 0 20px;\nposition: absolute;\nleft: 5%;\nbackground-color: transparent;\nborder: none;\ncursor: pointer;\nfont-weight: bold;\ncolor: inherit;\n/*text-decoration: underline solid blue 1px;*/\nfont-size: 0.95rem;\ntext-shadow: 1px 1px 0px white, -1px -1px 0px white,  1px 1px 0 blue, -1px -1px 0 blue;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete, details p.complete {\ntext-decoration: line-through black 4px;\n}\np {\nmargin: 10px 0;\ncolor: iherit;\nfont-size: 1rem;\n}\n.dueDate {\nmargin: 3px 0;\ncolor: initial;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\ncolor: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n#sortBox {\nposition: sticky;\nbottom: 75vh;\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\n/* !FOR SOME REASON, I CAN'T REMOVE THE AUTO-STYLING GREY/BLUE BACKGROUND WHEN HOVERING...! */\n#sortBox option:hover {\nbackground-color: aquamarine;\n}\noption:hover {\nbackground-color: aquamarine;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nposition: sticky;\nleft: 68%;\nheight: 50vh;\nbottom: 20vh;\nwidth: 30%;\ncolor: blue;\nmargin-top: 10px;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box, .high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 13px 0 16px;\npadding: 5px;\nborder-radius: 3px;\nfont-size: 0.9rem;\nborder: 2px solid white;\noutline: 1px solid blue;\n}\n#addListButton:hover, #addButton:hover {\ncolor: blue;\nbackground-color: white;\ncursor: pointer;\nborder: 2px solid blue;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: var(--myYellow);\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: var(--myYellow);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\nbox-sizing: border-box;\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: max(7vh, 35px);\nwidth: 50px;\npadding: 6px;\nvertical-align: middle;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 20px auto 15px;\ncursor: pointer;\n}\n.close-button:hover {\nborder: 2px solid white;\noutline: 1px solid dodgerblue;\ncolor: white;\nbackground-color: dodgerblue;\n}", "",{"version":3,"sources":["webpack://./src/toDo.css"],"names":[],"mappings":"AAAA;AACA,YAAY;AACZ,eAAe;AACf,0BAA0B;AAC1B,kCAAkC;AAClC,8BAA8B;AAC9B;AACA;AACA,uBAAuB;AACvB,SAAS;AACT,UAAU;AACV;AACA;AACA,kBAAkB;AAClB,oBAAoB;AACpB,iCAAiC;AACjC,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ,cAAc;AACd,UAAU;AACV;AACA;AACA,sBAAsB;AACtB,eAAe;AACf,UAAU;AACV;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB,UAAU;AACV;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,WAAW;AACX,kBAAkB;AAClB,UAAU;AACV,gBAAgB;AAChB;AACA;AACA,sBAAsB;AACtB,gBAAgB;AAChB;AACA;AACA,8BAA8B;AAC9B,SAAS;AACT,gBAAgB;AAChB,uBAAuB;AACvB,wBAAwB;AACxB;AACA;AACA,mBAAmB;AACnB,kBAAkB;AAClB,QAAQ;AACR,6BAA6B;AAC7B,YAAY;AACZ,eAAe;AACf,iBAAiB;AACjB,cAAc;AACd,6CAA6C;AAC7C,kBAAkB;AAClB,sFAAsF;AACtF;AACA;AACA,kBAAkB;AAClB,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,kBAAkB;AAClB,iBAAiB;AACjB,8BAA8B;AAC9B;AACA;AACA,uCAAuC;AACvC;AACA;AACA,cAAc;AACd,aAAa;AACb,eAAe;AACf;AACA;AACA,aAAa;AACb,cAAc;AACd;AACA;AACA,kBAAkB;AAClB,YAAY;AACZ,UAAU;AACV,aAAa;AACb,cAAc;AACd;AACA;AACA,YAAY;AACZ,WAAW;AACX,uBAAuB;AACvB,eAAe;AACf;AACA;AACA,gBAAgB;AAChB,YAAY;AACZ,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB;AACA;AACA,kBAAkB;AAClB,wBAAwB;AACxB,iBAAiB;AACjB;AACA,6FAA6F;AAC7F;AACA,4BAA4B;AAC5B;AACA;AACA,4BAA4B;AAC5B;AACA;AACA,uBAAuB;AACvB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","sourcesContent":["html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: var(--myYellow);\npadding: 0;\nmargin: 5px;\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 0;\n}\nh1 {\nmargin: 15px auto 40px;\nfont-size: 2rem;\nz-index: 3;\n}\nh2 {\nfont-size: 1.6rem;\nmargin-bottom: 30px;\nz-index: 1;\n}\nh3 {\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\nleft: 22vw;\nmargin-left: 3vw;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n#clearButton {\nmargin: 25px 0 20px;\nposition: absolute;\nleft: 5%;\nbackground-color: transparent;\nborder: none;\ncursor: pointer;\nfont-weight: bold;\ncolor: inherit;\n/*text-decoration: underline solid blue 1px;*/\nfont-size: 0.95rem;\ntext-shadow: 1px 1px 0px white, -1px -1px 0px white,  1px 1px 0 blue, -1px -1px 0 blue;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete, details p.complete {\ntext-decoration: line-through black 4px;\n}\np {\nmargin: 10px 0;\ncolor: iherit;\nfont-size: 1rem;\n}\n.dueDate {\nmargin: 3px 0;\ncolor: initial;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\ncolor: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n#sortBox {\nposition: sticky;\nbottom: 75vh;\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\n/* !FOR SOME REASON, I CAN'T REMOVE THE AUTO-STYLING GREY/BLUE BACKGROUND WHEN HOVERING...! */\n#sortBox option:hover {\nbackground-color: aquamarine;\n}\noption:hover {\nbackground-color: aquamarine;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nposition: sticky;\nleft: 68%;\nheight: 50vh;\nbottom: 20vh;\nwidth: 30%;\ncolor: blue;\nmargin-top: 10px;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box, .high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 13px 0 16px;\npadding: 5px;\nborder-radius: 3px;\nfont-size: 0.9rem;\nborder: 2px solid white;\noutline: 1px solid blue;\n}\n#addListButton:hover, #addButton:hover {\ncolor: blue;\nbackground-color: white;\ncursor: pointer;\nborder: 2px solid blue;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: var(--myYellow);\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: var(--myYellow);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\nbox-sizing: border-box;\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: max(7vh, 35px);\nwidth: 50px;\npadding: 6px;\nvertical-align: middle;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 20px auto 15px;\ncursor: pointer;\n}\n.close-button:hover {\nborder: 2px solid white;\noutline: 1px solid dodgerblue;\ncolor: white;\nbackground-color: dodgerblue;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "myListsArray": () => (/* binding */ myListsArray),
/* harmony export */   "listTitle": () => (/* binding */ listTitle),
/* harmony export */   "mainList": () => (/* binding */ mainList),
/* harmony export */   "listElements": () => (/* binding */ listElements),
/* harmony export */   "loadDefaultList": () => (/* binding */ loadDefaultList),
/* harmony export */   "createListElements": () => (/* binding */ createListElements)
/* harmony export */ });
/* harmony import */ var _manageLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageLists.js */ "./src/manageLists.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItemsDOM.js */ "./src/listItemsDOM.js");




//OL:
const mainList = document.querySelector("#mainlist");
//list element object:
const main = document.getElementById("main");
const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");
const listTitle = document.getElementById("list-title");
//OL:
const listOfLists = document.getElementById("mylists");

let listElements = [main];
let myListsArray = JSON.parse(localStorage.getItem(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_LISTS_OBJECT)) || [];

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

function clearListOfLists() {
	while (listOfLists.hasChildNodes()) {
		listOfLists.firstChild.remove();
	}
	return;
}

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
				_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.listNames = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.setListNames)();
				listElements = [main];
				clearListOfLists();
				listOfLists.appendChild(main);
				createListElements(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.listNames);	
			}
		});
	});
}

function loadDefaultList() {
	myListsArray[0].active = true;
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.setItemIndices)(myListsArray[0]);	
	myListsArray[0].contents.forEach(listItemObject => {
		(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.displayListItem)(listItemObject);
	});
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.configItemDeleteButtons)(myListsArray[0]);
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.configCheckBoxes)(myListsArray[0]);
}

addListButton.onclick = () => {
    let newList = new _manageLists_js__WEBPACK_IMPORTED_MODULE_0__.list(nameInput.value);
    displayListElement(newList);
    nameInput.value = ""
}

function displayListElement(list) {
	const listElement = document.createElement("li");	
    listElement.innerHTML = '<a href="#">' + list.name + '</a><button class="delete-li">X</button>';  
	listElement.id = list.name;   
	listElements.push(listElement);
    listOfLists.appendChild(listElement);
	configListDeleteButtons();
    setListEventHandlers();
}

function setListEventHandlers() {
	listElements.forEach(listElement => {		
		listElement.onclick = () => {		
			myListsArray.forEach(listObject => {
				if (listObject.name == listElement.firstElementChild.innerText) {	
					mainList.textContent = "";
					listObject.active = true;
					listTitle.textContent = listObject.name;
					(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.setItemIndices)(listObject);
					listObject.contents.forEach(listItemObject => {
						(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.displayListItem)(listItemObject);
					});
					(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.configItemDeleteButtons)(listObject);
					(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.configCheckBoxes)(listObject);
				}
				else  {
					listObject.active = false;
				}
			});			
		};
	});
	localStorage.clear();
	(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();		
}




/***/ }),

/***/ "./src/clearItems.js":
/*!***************************!*\
  !*** ./src/clearItems.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItemsDOM.js */ "./src/listItemsDOM.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");




const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    let activeList = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.myListsArray.find(list => list.active == true);
    clearCompletedItems(activeList);
});

function clearCompletedItems(listObject) {
    let incompleteItems = listObject.contents.filter(listItem => listItem.complete == false);
    listObject.contents = incompleteItems;
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.mainList.textContent = "";
    (0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.setItemIndices)(listObject);
    listObject.contents.forEach(item => (0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.displayListItem)(item));    
    (0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.configItemDeleteButtons)(listObject);
    (0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.configCheckBoxes)(listObject);
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.populateStorage)();
}

/***/ }),

/***/ "./src/list-sorting.js":
/*!*****************************!*\
  !*** ./src/list-sorting.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItemsDOM.js */ "./src/listItemsDOM.js");



const sortBox = document.getElementById("sortBox");

sortBox.addEventListener("click", function getOrder(e) {
	let activeList = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.myListsArray.find(list => list.active == true);
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
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.configItemDeleteButtons)(activeList);
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.configCheckBoxes)(activeList);
});

function displayReorderedList(currentListOrder) {
	_DOM_js__WEBPACK_IMPORTED_MODULE_0__.mainList.textContent = "";
	let number = 1;
	for (let i = 0; i < currentListOrder.length; i++) {
		currentListOrder[i].index = number;
		(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.displayListItem)(currentListOrder[i]);		
		number++;
	}	
}

function getHighPriorityOrder(activeList) {	
	let highPriorityOrder = activeList.contents.sort((listItemA, listItemB) => { 
		if (listItemA.value > listItemB.value) {return 1;}
		if (listItemA.value == listItemB.value){return 0;}
		if (listItemA.value < listItemB.value) {return -1;}
	});
	displayReorderedList(highPriorityOrder);
}

function getLowPriorityOrder(activeList) {	
	let lowPriorityOrder = activeList.contents.sort((listItemA, listItemB) => { 
        if (listItemA.value > listItemB.value) {return -1;}
		if (listItemA.value == listItemB.value){return 0;}
		if (listItemA.value < listItemB.value) {return 1;}
	});	
	displayReorderedList(lowPriorityOrder);
}

function getIncompleteFirstOrder(activeList) {	
	let incompleteFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
			if (listItemA.completeValue < listItemB.completeValue) return 1;
	});
	displayReorderedList(incompleteFirstOrder);
}

function getCompleteFirstOrder(activeList) {	
	let completeFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
			if (listItemA.completeValue > listItemB.completeValue) return 1;
	});
	displayReorderedList(completeFirstOrder);
}

function getEarliestDateFirst(activeList) {
	let earliestFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
		if (listItemA.dueDate > listItemB.dueDate) {return 1;}
		if (listItemA.dueDate == listItemB.dueDate){return 0;}
		if (listItemA.dueDate < listItemB.dueDate) {return -1;}
	});
	displayReorderedList(earliestFirstOrder);
}

function getLatestDateFirst(activeList) {
	let latestFirstOrder = activeList.contents.sort((listItemA, listItemB) => { 
		if (listItemA.dueDate > listItemB.dueDate) {return -1;}
		if (listItemA.dueDate == listItemB.dueDate){return 0;}
		if (listItemA.dueDate < listItemB.dueDate) {return 1;}
	});;
	displayReorderedList(latestFirstOrder);
}



/***/ }),

/***/ "./src/listItemsDOM.js":
/*!*****************************!*\
  !*** ./src/listItemsDOM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configCheckBoxes": () => (/* binding */ configCheckBoxes),
/* harmony export */   "configItemDeleteButtons": () => (/* binding */ configItemDeleteButtons),
/* harmony export */   "setItemIndices": () => (/* binding */ setItemIndices),
/* harmony export */   "displayListItem": () => (/* binding */ displayListItem)
/* harmony export */ });
/* harmony import */ var _manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageToDoItems.js */ "./src/manageToDoItems.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priority.js */ "./src/priority.js");




const addItemButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");

function clearFields() {
	const fields = Array.from(document.querySelectorAll(".textfield"));
    fields.map(field => field.value = "");
}

addItemButton.onclick = () => {
	let item = new _manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.listItem(nameField.value, descripField.value, dueField.value, _priority_js__WEBPACK_IMPORTED_MODULE_2__.priority);
	_DOM_js__WEBPACK_IMPORTED_MODULE_1__.myListsArray.forEach(listObject => {
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

function setItemIndices(listObject) {
	let number = 1;
	for (let i = 0; i < listObject.contents.length; i++) {
		listObject.contents[i].index = number;
		number++;
	}
}

function configItemDeleteButtons(listObject) {
	let deleteArray = [..._DOM_js__WEBPACK_IMPORTED_MODULE_1__.mainList.getElementsByClassName("delete")];
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
			let mainListArray = Array.from(_DOM_js__WEBPACK_IMPORTED_MODULE_1__.mainList.children);
			for (let i = 0; i < listObject.contents.length; i++) {    
				mainListArray[i].id = (0,_manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.getIndex)(listObject.contents[i]);
			}  						                                           
		});
	});	       
}

function configCheckBoxes(listObject) {
	let checkboxes = [..._DOM_js__WEBPACK_IMPORTED_MODULE_1__.mainList.getElementsByClassName("checkbox")];
	let targetItem;
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener("click", (e) => {
			e.stopPropagation();
			console.log("checked");
			e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.classList.toggle("complete");
			e.target.parentElement.parentElement.parentElement.firstChild.firstChild.children[1].classList.toggle("complete");
			targetItem = listObject.contents.find(listItem => listItem.index == e.target.parentElement.parentElement.parentElement.id);
			if (targetItem.complete == false) {
				targetItem.complete = true;	
				targetItem.completeValue = 0;		
			}
			else if (targetItem.complete == true) {
				targetItem.complete = false;
				targetItem.completeValue = 10;
			}
		});
	});
}

function displayListItem(item) {
	console.log("displayed item");
	console.log({myListsArray: _DOM_js__WEBPACK_IMPORTED_MODULE_1__.myListsArray});
	const newItem = document.createElement("li");
	newItem.id = (0,_manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.getIndex)(item);
	newItem.classList.add("listItem");
	(0,_priority_js__WEBPACK_IMPORTED_MODULE_2__.assignPriority)(newItem, item);
	newItem.innerHTML = createItemContent(item);
	if (item.complete == true) markComplete(newItem);
    _DOM_js__WEBPACK_IMPORTED_MODULE_1__.mainList.appendChild(newItem);	
}

function createItemContent(item) {
	return '<div class="toDoBox"><details><summary>'
	 + item.name + '</summary><p>' + item.description + 
	 '</p></details><p class="dueDate">Due date: ' + item.dueDate + 
	 '</p><label class="completeLabel">Completed: <input type="checkbox" class="checkbox" name="completed" value=""></label><button class="delete">X</button></div>';    
}

function markComplete(itemElement) {
	itemElement.firstChild.firstChild.firstChild.classList.add("complete");
	itemElement.firstChild.firstChild.children[1].classList.add("complete")
	let checkbox = itemElement.querySelector(".checkbox");
	checkbox.setAttribute("checked", true);	
}



/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateStorage": () => (/* binding */ populateStorage),
/* harmony export */   "listNames": () => (/* binding */ listNames),
/* harmony export */   "setListNames": () => (/* binding */ setListNames),
/* harmony export */   "LOCAL_STORAGE_LISTS_OBJECT": () => (/* binding */ LOCAL_STORAGE_LISTS_OBJECT)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _media_queries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-queries.js */ "./src/media-queries.js");
/* harmony import */ var _manageLists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageLists.js */ "./src/manageLists.js");




let listNames;
let LOCAL_STORAGE_LISTS_OBJECT = "task.myListsArray";

window.onload = () => {
	console.log({myListsArray: _DOM_js__WEBPACK_IMPORTED_MODULE_0__.myListsArray});
	if (_DOM_js__WEBPACK_IMPORTED_MODULE_0__.myListsArray.length == 0) {
		const first = new _manageLists_js__WEBPACK_IMPORTED_MODULE_2__.list("Main");
		first.active = true;	
	}	
    if (localStorage.getItem("listNames2")) {
		// will already include "main" as first item:
		listNames = localStorage.getItem("listNames2").split(",");
	}
	// first time app is used; "main" is added:
	else listNames = ["Main"];
	(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createListElements)(listNames);	
	(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.loadDefaultList)();
	(0,_media_queries_js__WEBPACK_IMPORTED_MODULE_1__.addMobileStyles)(_media_queries_js__WEBPACK_IMPORTED_MODULE_1__.widthTrigger);
};

function setListNames() {
	listNames = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.listElements.map(listElement => {
		if (listElement.children[0].childNodes[0].nodeValue != null) {
			return listElement.children[0].childNodes[0].nodeValue;
		}
	});
	return listNames;
}

function populateStorage() {
	setListNames();   
	listNames.toString();
    localStorage.setItem("listNames2", listNames);
    localStorage.setItem(LOCAL_STORAGE_LISTS_OBJECT, JSON.stringify(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.myListsArray));
	console.log("populated!");	
}

window.addEventListener("unload", populateStorage);



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
/* harmony export */   "listItem": () => (/* binding */ listItem),
/* harmony export */   "getIndex": () => (/* binding */ getIndex)
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

function getIndex(listItemObject) {
	return listItemObject.index;
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
const mainTitle = document.querySelector("h1");
const mainBox = document.getElementById("mainBox");
const sidebar = document.getElementById("lists-sidebar");
const addItemBox = document.getElementById("addItemBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");
const sortBox = document.getElementById("sortBox");

let viewListsButton;
let openAddItemBoxButton;
let overlay;
let closeButton = document.createElement("button");
closeButton.className = "close-button";
closeButton.textContent = "Close";

function addMobileClass() {
    mainBox.classList.add("mobile");
    sidebar.classList.add("mobile-slide");
    addItemBox.classList.add("mobile-slide");
    sortBox.classList.add("mobile");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    sidebar.classList.remove("mobile-slide");
    addItemBox.classList.remove("mobile-slide");
    addItemBox.classList.remove("visible");
    sidebar.classList.remove("visible");
    sortBox.classList.remove("mobile");
}

function createMobileButtons() {
    const innerNav = document.createElement("nav");
    viewListsButton = document.createElement("button");
    openAddItemBoxButton = document.createElement("button");
    viewListsButton.textContent = "View Lists";
    openAddItemBoxButton.textContent = "Add To-Do Item"
    innerNav.id = "innerNav";    
    viewListsButton.className = "mobile-button";  
    openAddItemBoxButton.className = "mobile-button"; 
    innerNav.appendChild(viewListsButton);
    innerNav.appendChild(openAddItemBoxButton);
    openAddItemBoxButton.addEventListener("click", openAddItemBox);
    viewListsButton.addEventListener("click", viewLists);
    return innerNav;
}

function createTopNavBar() {
    const topNavBar = document.createElement("div");
    topNavBar.id = "topNavBar";
    document.body.appendChild(topNavBar);
    topNavBar.appendChild(mainTitle);       
    topNavBar.appendChild(createMobileButtons());   
}

function createOverlay() {
    if (document.body.contains(overlay)) return;
    else {
        setTimeout(() => {
            overlay = document.createElement("div");
            overlay.id = "overlay";
            document.body.appendChild(overlay);
        }, 200);
    }
}

function addMobileStyles(x) {
    if (x.matches) {
        addMobileClass();       
        createTopNavBar();             
    }
    else {
        removeMobileClass();
        document.body.removeChild(topNavBar);
        document.body.insertBefore(mainTitle, sidebar);
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
        if (document.body.contains(closeButton)) {
            closeButton.remove();
        }
    }
}

function viewLists() {
    sidebar.classList.add("visible");    
    if (!sidebar.contains(closeButton)) sidebar.appendChild(closeButton);
    closeButton.addEventListener("click", () => closePopup(sidebar));
    createOverlay();
}

function openAddItemBox() {
    addItemBox.classList.add("visible");
    if (!addItemBox.contains(closeButton)) addItemBox.appendChild(closeButton);    
    closeButton.addEventListener("click", () => closePopup(addItemBox));
    createOverlay();
}

function closePopup(popup) {
    popup.classList.remove("visible");
    if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
    }
}

widthTrigger.addEventListener("change", addMobileStyles);



/***/ }),

/***/ "./src/priority.js":
/*!*************************!*\
  !*** ./src/priority.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignPriority": () => (/* binding */ assignPriority),
/* harmony export */   "priority": () => (/* binding */ priority)
/* harmony export */ });
const priorityButtons = Array.from(document.getElementsByClassName("priority"));
let priority;

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
/* harmony import */ var _list_sorting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sorting.js */ "./src/list-sorting.js");
/* harmony import */ var _clearItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearItems.js */ "./src/clearItems.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZ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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmtCO0FBQ0U7QUFDTztBQUNGO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcz8zODM5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NsZWFySXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdC1zb3J0aW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RJdGVtc0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9Eb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21lZGlhLXF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbndpZHRoOiAxMDB2dztcXG5mb250LXNpemU6IDE3cHg7XFxuLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxuLS12YXJpYWJsZUhlaWdodDogbWF4KDE1dmgsIDEyNXB4KTtcXG4tLW15WWVsbG93OiBoc2woNjAsIDEwMCUsIDg1JSk7XFxufVxcbioge1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbnBhZGRpbmc6IDA7XFxubWFyZ2luOiA1cHg7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogYXV0bztcXG5vdmVyZmxvdzogYXV0bztcXG56LWluZGV4OiAwO1xcbn1cXG5oMSB7XFxubWFyZ2luOiAxNXB4IGF1dG8gNDBweDtcXG5mb250LXNpemU6IDJyZW07XFxuei1pbmRleDogMztcXG59XFxuaDIge1xcbmZvbnQtc2l6ZTogMS42cmVtO1xcbm1hcmdpbi1ib3R0b206IDMwcHg7XFxuei1pbmRleDogMTtcXG59XFxuaDMge1xcbmZvbnQtc2l6ZTogMS40cmVtO1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbmg0IHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDE1cHggMCAxMHB4O1xcbn1cXG4jbWFpbkJveCB7XFxud2lkdGg6IDQwdnc7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbmxlZnQ6IDIydnc7XFxubWFyZ2luLWxlZnQ6IDN2dztcXG59XFxuI21haW5saXN0IHtcXG5ib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbm1pbi1oZWlnaHQ6IDIwcHg7XFxufVxcbiNtYWlubGlzdCAubGlzdEl0ZW0ge1xcbmJvcmRlci1ib3R0b206IDZweCBkb3VibGUgYmx1ZTtcXG5tYXJnaW46IDA7XFxudGV4dC1hbGlnbjogbGVmdDtcXG5saXN0LXN0eWxlLXR5cGU6IEFyYWJpYztcXG5wYWRkaW5nOiA0cHggMnB4IDFweCAzcHg7XFxufVxcbiNjbGVhckJ1dHRvbiB7XFxubWFyZ2luOiAyNXB4IDAgMjBweDtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxubGVmdDogNSU7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5mb250LXdlaWdodDogYm9sZDtcXG5jb2xvcjogaW5oZXJpdDtcXG4vKnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHNvbGlkIGJsdWUgMXB4OyovXFxuZm9udC1zaXplOiAwLjk1cmVtO1xcbnRleHQtc2hhZG93OiAxcHggMXB4IDBweCB3aGl0ZSwgLTFweCAtMXB4IDBweCB3aGl0ZSwgIDFweCAxcHggMCBibHVlLCAtMXB4IC0xcHggMCBibHVlO1xcbn1cXG4udG9Eb0JveCB7XFxucG9zaXRpb246IHJlbGF0aXZlOyAgICBcXG5mb250LXNpemU6IDFyZW07XFxufVxcbnN1bW1hcnkge1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbm1hcmdpbi1ib3R0b206IDdweDtcXG5mb250LXNpemU6IDEuMXJlbTtcXG50cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMXM7XFxufVxcbnN1bW1hcnkuY29tcGxldGUsIGRldGFpbHMgcC5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG5wIHtcXG5tYXJnaW46IDEwcHggMDtcXG5jb2xvcjogaWhlcml0O1xcbmZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmR1ZURhdGUge1xcbm1hcmdpbjogM3B4IDA7XFxuY29sb3I6IGluaXRpYWw7XFxufVxcbi5jb21wbGV0ZUxhYmVsIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAtM3B4O1xcbnJpZ2h0OiAwcHg7XFxuZm9udDogaW5oZXJpdDtcXG5jb2xvcjogaW5oZXJpdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuaGVpZ2h0OiAxNnB4O1xcbndpZHRoOiAxNnB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbm1hcmdpbjogNXB4IDAgMDtcXG59XFxuI3NvcnRCb3gge1xcbnBvc2l0aW9uOiBzdGlja3k7XFxuYm90dG9tOiA3NXZoO1xcbmxlZnQ6IDcwdnc7XFxud2lkdGg6IDI1dnc7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jc29ydEJveCBsYWJlbCB7XFxubWFyZ2luLXJpZ2h0OiAxMHB4O1xcbmZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG5mb250LXNpemU6IDEuMnJlbTtcXG59XFxuLyogIUZPUiBTT01FIFJFQVNPTiwgSSBDQU4nVCBSRU1PVkUgVEhFIEFVVE8tU1RZTElORyBHUkVZL0JMVUUgQkFDS0dST1VORCBXSEVOIEhPVkVSSU5HLi4uISAqL1xcbiNzb3J0Qm94IG9wdGlvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxub3B0aW9uOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5zZWxlY3Qge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiAyMnB4O1xcbnBhZGRpbmc6IDNweDtcXG59XFxuI2FkZEl0ZW1Cb3gge1xcbnBvc2l0aW9uOiBzdGlja3k7XFxubGVmdDogNjglO1xcbmhlaWdodDogNTB2aDtcXG5ib3R0b206IDIwdmg7XFxud2lkdGg6IDMwJTtcXG5jb2xvcjogYmx1ZTtcXG5tYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5maWVsZHNldCB7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5sZWdlbmQge1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMCBhdXRvIDE1cHg7XFxufVxcbmlucHV0IHtcXG5tYXJnaW46IDZweCAwO1xcbmZvbnQtc2l6ZTogMC44NXJlbTtcXG5wYWRkaW5nOiAzcHggMnB4O1xcbn1cXG4uY29sb3VyLWNvZGUge1xcbndpZHRoOiAxM3B4O1xcbmhlaWdodDogMTNweDtcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxubWFyZ2luLWxlZnQ6IDE1cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNyZWQtYm94LCAuaGlnaC1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuI29yYW5nZS1ib3gsIC5tZWRpdW0tcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuI2dyZWVuLWJveCwgLmxvdy1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG4jbGlzdHMtc2lkZWJhciB7XFxuYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmx1ZTtcXG5oZWlnaHQ6IDgwdmg7XFxud2lkdGg6IDIwdnc7XFxucG9zaXRpb246IGZpeGVkO1xcbmxlZnQ6IDVweDtcXG5ib3R0b206IDEwcHg7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNteWxpc3RzIHtcXG5saXN0LXN0eWxlOiBzcXVhcmUgaW5zaWRlO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxufVxcbiNteWxpc3RzIGxpIHtcXG5tYXJnaW46IDEycHggNXB4IDEycHggMjVweDtcXG5mb250LXNpemU6IDEuMnJlbTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxud2lkdGg6IDcwJTtcXG5jb2xvcjogYmx1ZTtcXG59XFxuYTphY3RpdmUsIGE6Zm9jdXMsIGxpOmZvY3VzIHtcXG5mb250LXNpemU6IDEuM3JlbTtcXG5mb250LXdlaWdodDogYm9sZDsgICAgXFxufVxcbmEsIGE6dmlzaXRlZCwgYTphY3RpdmUge1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG4jYWRkTGlzdEJ1dHRvbiwgI2FkZEJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5jb2xvcjogd2hpdGU7XFxubWFyZ2luOiAxM3B4IDAgMTZweDtcXG5wYWRkaW5nOiA1cHg7XFxuYm9yZGVyLXJhZGl1czogM3B4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbm91dGxpbmU6IDFweCBzb2xpZCBibHVlO1xcbn1cXG4jYWRkTGlzdEJ1dHRvbjpob3ZlciwgI2FkZEJ1dHRvbjpob3ZlciB7XFxuY29sb3I6IGJsdWU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxufVxcbiNsaXN0TmFtZSwgI2xpc3ROYW1lOmZvY3VzIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IG5vbmU7XFxub3V0bGluZTogbm9uZTtcXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTtcXG5tYXJnaW46IDEwcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5kZWxldGUge1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxucmlnaHQ6IDFweDtcXG50b3A6IDFweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMTVweDtcXG53aWR0aDogMTVweDtcXG5wYWRkaW5nOiAxcHg7XFxuZm9udDogYm9sZGVyIDFyZW07XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uZGVsZXRlLWxpIHtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbndpZHRoOiAxOXB4O1xcbmhlaWdodDogMTlweDtcXG5ib3JkZXI6IG5vbmU7XFxuZmxvYXQ6IHJpZ2h0O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbm1hcmdpbi10b3A6IDRweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG4jdG9wTmF2QmFyIHtcXG53aWR0aDogMTAwJTtcXG5ib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAwO1xcbmhlaWdodDogdmFyKC0tdmFyaWFibGVIZWlnaHQpO1xcbnotaW5kZXg6IDM7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5vdmVyZmxvdzogYXV0bztcXG59XFxuI21haW5Cb3gubW9iaWxlIHtcXG53aWR0aDogODB2dztcXG5tYXJnaW46IDV2aCBhdXRvO1xcbnotaW5kZXg6IDE7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDEwdnc7XFxudG9wOiBtYXgoMjV2aCwgMTkwcHgpO1xcbn1cXG4jc29ydEJveC5tb2JpbGUge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgyMHZoLCAxNTBweCk7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmxlZnQ6IDIwdnc7XFxuei1pbmRleDogMTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSB7XFxud2lkdGg6IDYwdnc7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogbWF4KDE4dmgsIDE1MHB4KTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbmJvcmRlcjogNHB4IHNvbGlkIGRvZGdlcmJsdWU7XFxuei1pbmRleDogMztcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teVllbGxvdyk7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbnBhZGRpbmc6IDIwcHg7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG52aXNpYmlsaXR5OiBoaWRkZW47XFxudHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxMDBtcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlIHtcXG5sZWZ0OiAtMTAwJTtcXG50cmFuc2l0aW9uOiBsZWZ0IDFzO1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUudmlzaWJsZSwgI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlLnZpc2libGUge1xcbmxlZnQ6IDIwdnc7XFxudmlzaWJpbGl0eTogdmlzaWJsZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSB7XFxucG9zaXRpb246IGZpeGVkO1xcbmxlZnQ6IDEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIGZpZWxkc2V0IHtcXG5ib3JkZXI6IG5vbmU7XFxufVxcbiNpbm5lck5hdiB7XFxud2lkdGg6IDgwJTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAwO1xcbmhlaWdodDogMzclO1xcbm1hcmdpbjogMCAxMCU7XFxuYm94LXNpemluZzogY29udGVudC1ib3g7XFxuYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLXJhZGl1czogNHB4O1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi5tb2JpbGUtYnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG53aWR0aDogNTAlO1xcbmZsb2F0OiBsZWZ0O1xcbmhlaWdodDogMTAwJTtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuZm9udC1zaXplOiAxLjFyZW07XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLm1vYmlsZS1idXR0b246aG92ZXIsIC5tb2JpbGUtYnV0dG9uOmFjdGl2ZSwgLm1vYmlsZS1idXR0b246Zm9jdXMge1xcbnRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDI0NCwgMjQ4KTtcXG59XFxuI292ZXJsYXkge1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwdmg7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogY2FsYyh2YXIoLS12YXJpYWJsZUhlaWdodCkgLSAzcHgpO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXG56LWluZGV4OiAyO1xcbm9wYWNpdHk6IDAuODtcXG59XFxuLmNsb3NlLWJ1dHRvbiB7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5jb2xvcjogZG9kZ2VyYmx1ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5ib3JkZXI6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xcbmhlaWdodDogbWF4KDd2aCwgMzVweCk7XFxud2lkdGg6IDUwcHg7XFxucGFkZGluZzogNnB4O1xcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmZvbnQtc2l6ZTogMXJlbTtcXG5tYXJnaW46IDIwcHggYXV0byAxNXB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxub3V0bGluZTogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b0RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGlDQUFpQztBQUNqQyxVQUFVO0FBQ1YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsU0FBUztBQUNULGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLGVBQWU7QUFDZixp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QUFhO0FBQ2IsZUFBZTtBQUNmLHNDQUFzQztBQUN0QyxpQ0FBaUM7QUFDakMsVUFBVTtBQUNWLFlBQVk7QUFDWjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1gsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLDRCQUE0QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG53aWR0aDogMTAwdnc7XFxuZm9udC1zaXplOiAxN3B4O1xcbi0tbXlCbHVlOiByZ2IoMTEsIDExLCAxNjcpO1xcbi0tdmFyaWFibGVIZWlnaHQ6IG1heCgxNXZoLCAxMjVweCk7XFxuLS1teVllbGxvdzogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbn1cXG4qIHtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjogNXB4O1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IGF1dG87XFxub3ZlcmZsb3c6IGF1dG87XFxuei1pbmRleDogMDtcXG59XFxuaDEge1xcbm1hcmdpbjogMTVweCBhdXRvIDQwcHg7XFxuZm9udC1zaXplOiAycmVtO1xcbnotaW5kZXg6IDM7XFxufVxcbmgyIHtcXG5mb250LXNpemU6IDEuNnJlbTtcXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xcbnotaW5kZXg6IDE7XFxufVxcbmgzIHtcXG5mb250LXNpemU6IDEuNHJlbTtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5oNCB7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAxNXB4IDAgMTBweDtcXG59XFxuI21haW5Cb3gge1xcbndpZHRoOiA0MHZ3O1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG5sZWZ0OiAyMnZ3O1xcbm1hcmdpbi1sZWZ0OiAzdnc7XFxufVxcbiNtYWlubGlzdCB7XFxuYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG5taW4taGVpZ2h0OiAyMHB4O1xcbn1cXG4jbWFpbmxpc3QgLmxpc3RJdGVtIHtcXG5ib3JkZXItYm90dG9tOiA2cHggZG91YmxlIGJsdWU7XFxubWFyZ2luOiAwO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxubGlzdC1zdHlsZS10eXBlOiBBcmFiaWM7XFxucGFkZGluZzogNHB4IDJweCAxcHggM3B4O1xcbn1cXG4jY2xlYXJCdXR0b24ge1xcbm1hcmdpbjogMjVweCAwIDIwcHg7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDUlO1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmJvcmRlcjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuY29sb3I6IGluaGVyaXQ7XFxuLyp0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZCBibHVlIDFweDsqL1xcbmZvbnQtc2l6ZTogMC45NXJlbTtcXG50ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggd2hpdGUsIC0xcHggLTFweCAwcHggd2hpdGUsICAxcHggMXB4IDAgYmx1ZSwgLTFweCAtMXB4IDAgYmx1ZTtcXG59XFxuLnRvRG9Cb3gge1xcbnBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG5zdW1tYXJ5IHtcXG5mb250LXdlaWdodDogYm9sZDtcXG5tYXJnaW4tYm90dG9tOiA3cHg7XFxuZm9udC1zaXplOiAxLjFyZW07XFxudHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDFzO1xcbn1cXG5zdW1tYXJ5LmNvbXBsZXRlLCBkZXRhaWxzIHAuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxucCB7XFxubWFyZ2luOiAxMHB4IDA7XFxuY29sb3I6IGloZXJpdDtcXG5mb250LXNpemU6IDFyZW07XFxufVxcbi5kdWVEYXRlIHtcXG5tYXJnaW46IDNweCAwO1xcbmNvbG9yOiBpbml0aWFsO1xcbn1cXG4uY29tcGxldGVMYWJlbCB7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogLTNweDtcXG5yaWdodDogMHB4O1xcbmZvbnQ6IGluaGVyaXQ7XFxuY29sb3I6IGluaGVyaXQ7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbmhlaWdodDogMTZweDtcXG53aWR0aDogMTZweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5tYXJnaW46IDVweCAwIDA7XFxufVxcbiNzb3J0Qm94IHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbmJvdHRvbTogNzV2aDtcXG5sZWZ0OiA3MHZ3O1xcbndpZHRoOiAyNXZ3O1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3NvcnRCb3ggbGFiZWwge1xcbm1hcmdpbi1yaWdodDogMTBweDtcXG5mb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi8qICFGT1IgU09NRSBSRUFTT04sIEkgQ0FOJ1QgUkVNT1ZFIFRIRSBBVVRPLVNUWUxJTkcgR1JFWS9CTFVFIEJBQ0tHUk9VTkQgV0hFTiBIT1ZFUklORy4uLiEgKi9cXG4jc29ydEJveCBvcHRpb246aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbm9wdGlvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuc2VsZWN0IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmhlaWdodDogMjJweDtcXG5wYWRkaW5nOiAzcHg7XFxufVxcbiNhZGRJdGVtQm94IHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbmxlZnQ6IDY4JTtcXG5oZWlnaHQ6IDUwdmg7XFxuYm90dG9tOiAyMHZoO1xcbndpZHRoOiAzMCU7XFxuY29sb3I6IGJsdWU7XFxubWFyZ2luLXRvcDogMTBweDtcXG59XFxuZmllbGRzZXQge1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubGVnZW5kIHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDAgYXV0byAxNXB4O1xcbn1cXG5pbnB1dCB7XFxubWFyZ2luOiA2cHggMDtcXG5mb250LXNpemU6IDAuODVyZW07XFxucGFkZGluZzogM3B4IDJweDtcXG59XFxuLmNvbG91ci1jb2RlIHtcXG53aWR0aDogMTNweDtcXG5oZWlnaHQ6IDEzcHg7XFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbm1hcmdpbi1sZWZ0OiAxNXB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jcmVkLWJveCwgLmhpZ2gtcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA3MCUsIDgwJSk7XFxufVxcbiNvcmFuZ2UtYm94LCAubWVkaXVtLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDAsIDEwMCUsIDcwJSk7XFxufVxcbiNncmVlbi1ib3gsIC5sb3ctcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDcwJSwgODAlKTtcXG59XFxuI2xpc3RzLXNpZGViYXIge1xcbmJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiA4MHZoO1xcbndpZHRoOiAyMHZ3O1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiA1cHg7XFxuYm90dG9tOiAxMHB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbn1cXG4jbXlsaXN0cyB7XFxubGlzdC1zdHlsZTogc3F1YXJlIGluc2lkZTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jbXlsaXN0cyBsaSB7XFxubWFyZ2luOiAxMnB4IDVweCAxMnB4IDI1cHg7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbndpZHRoOiA3MCU7XFxuY29sb3I6IGJsdWU7XFxufVxcbmE6YWN0aXZlLCBhOmZvY3VzLCBsaTpmb2N1cyB7XFxuZm9udC1zaXplOiAxLjNyZW07XFxuZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxcbn1cXG5hLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuI2FkZExpc3RCdXR0b24sICNhZGRCdXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbm1hcmdpbjogMTNweCAwIDE2cHg7XFxucGFkZGluZzogNXB4O1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG5vdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG59XFxuI2FkZExpc3RCdXR0b246aG92ZXIsICNhZGRCdXR0b246aG92ZXIge1xcbmNvbG9yOiBibHVlO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbn1cXG4jbGlzdE5hbWUsICNsaXN0TmFtZTpmb2N1cyB7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbm91dGxpbmU6IG5vbmU7XFxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsdWU7XFxubWFyZ2luOiAxMHB4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uZGVsZXRlIHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnJpZ2h0OiAxcHg7XFxudG9wOiAxcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbmNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDE1cHg7XFxud2lkdGg6IDE1cHg7XFxucGFkZGluZzogMXB4O1xcbmZvbnQ6IGJvbGRlciAxcmVtO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmRlbGV0ZS1saSB7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG53aWR0aDogMTlweDtcXG5oZWlnaHQ6IDE5cHg7XFxuYm9yZGVyOiBub25lO1xcbmZsb2F0OiByaWdodDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5tYXJnaW4tdG9wOiA0cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbmJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuI3RvcE5hdkJhciB7XFxud2lkdGg6IDEwMCU7XFxuYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMDtcXG5oZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0KTtcXG56LWluZGV4OiAzO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teVllbGxvdyk7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNtYWluQm94Lm1vYmlsZSB7XFxud2lkdGg6IDgwdnc7XFxubWFyZ2luOiA1dmggYXV0bztcXG56LWluZGV4OiAxO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5sZWZ0OiAxMHZ3O1xcbnRvcDogbWF4KDI1dmgsIDE5MHB4KTtcXG59XFxuI3NvcnRCb3gubW9iaWxlIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiBtYXgoMjB2aCwgMTUwcHgpO1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5sZWZ0OiAyMHZ3O1xcbnotaW5kZXg6IDE7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbndpZHRoOiA2MHZ3O1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgxOHZoLCAxNTBweCk7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5ib3JkZXI6IDRweCBzb2xpZCBkb2RnZXJibHVlO1xcbnotaW5kZXg6IDM7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5vdmVyZmxvdzogYXV0bztcXG5wYWRkaW5nOiAyMHB4O1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxudmlzaWJpbGl0eTogaGlkZGVuO1xcbnRyYW5zaXRpb246IHZpc2liaWxpdHkgMTAwbXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSB7XFxubGVmdDogLTEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLnZpc2libGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZS52aXNpYmxlIHtcXG5sZWZ0OiAyMHZ3O1xcbnZpc2liaWxpdHk6IHZpc2libGU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiAxMDAlO1xcbnRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSBmaWVsZHNldCB7XFxuYm9yZGVyOiBub25lO1xcbn1cXG4jaW5uZXJOYXYge1xcbndpZHRoOiA4MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogMDtcXG5oZWlnaHQ6IDM3JTtcXG5tYXJnaW46IDAgMTAlO1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbmJvcmRlci10b3A6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4ubW9iaWxlLWJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxud2lkdGg6IDUwJTtcXG5mbG9hdDogbGVmdDtcXG5oZWlnaHQ6IDEwMCU7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5tb2JpbGUtYnV0dG9uOmhvdmVyLCAubW9iaWxlLWJ1dHRvbjphY3RpdmUsIC5tb2JpbGUtYnV0dG9uOmZvY3VzIHtcXG50ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAyNDQsIDI0OCk7XFxufVxcbiNvdmVybGF5IHtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMHZoO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQpIC0gM3B4KTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxuei1pbmRleDogMjtcXG5vcGFjaXR5OiAwLjg7XFxufVxcbi5jbG9zZS1idXR0b24ge1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuY29sb3I6IGRvZGdlcmJsdWU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcXG5oZWlnaHQ6IG1heCg3dmgsIDM1cHgpO1xcbndpZHRoOiA1MHB4O1xcbnBhZGRpbmc6IDZweDtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5mb250LXNpemU6IDFyZW07XFxubWFyZ2luOiAyMHB4IGF1dG8gMTVweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbm91dGxpbmU6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xcbmNvbG9yOiB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvRG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b0RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2xpc3R9IGZyb20gJy4vbWFuYWdlTGlzdHMuanMnO1xuaW1wb3J0IHtwb3B1bGF0ZVN0b3JhZ2UsIGxpc3ROYW1lcywgc2V0TGlzdE5hbWVzLCBMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHtjb25maWdDaGVja0JveGVzLCBjb25maWdJdGVtRGVsZXRlQnV0dG9ucywgc2V0SXRlbUluZGljZXMsIGRpc3BsYXlMaXN0SXRlbX0gZnJvbSAnLi9saXN0SXRlbXNET00uanMnXG5cbi8vT0w6XG5jb25zdCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbmxpc3RcIik7XG4vL2xpc3QgZWxlbWVudCBvYmplY3Q6XG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTGlzdEJ1dHRvblwiKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdE5hbWVcIik7XG5jb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtdGl0bGVcIik7XG4vL09MOlxuY29uc3QgbGlzdE9mTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15bGlzdHNcIik7XG5cbmxldCBsaXN0RWxlbWVudHMgPSBbbWFpbl07XG5sZXQgbXlMaXN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCkpIHx8IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKSB7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgXHRsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICsgbGlzdE5hbWVzW2ldICsgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7XG5cdFx0bGlzdEVsZW1lbnQuaWQgPSBsaXN0TmFtZXNbaV07ICAgICBcblx0XHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRcdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XG5cdFx0c2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjbGVhckxpc3RPZkxpc3RzKCkge1xuXHR3aGlsZSAobGlzdE9mTGlzdHMuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0bGlzdE9mTGlzdHMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0fVxuXHRyZXR1cm47XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCkge1xuXHRsZXQgZGVsZXRlQXJyYXkyID0gWy4uLmxpc3RPZkxpc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtbGlcIildO1xuXHRkZWxldGVBcnJheTIuZm9yRWFjaChkZWxldGVCdXR0b24gPT4ge1xuXHRcdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcblx0XHRcdGxldCB0b0JlRGVsZXRlZCA9IGxpc3RFbGVtZW50cy5maW5kSW5kZXgobGlzdEVsZW1lbnQgPT4gbGlzdEVsZW1lbnQuaWQgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0XHRpZiAodG9CZURlbGV0ZWQgPiAwKSB7XG5cdFx0XHRcdGxpc3RFbGVtZW50cy5zcGxpY2UodG9CZURlbGV0ZWQsIDEpO1xuXHRcdFx0XHRsZXQgaW5kZXggPSBteUxpc3RzQXJyYXkuZmluZEluZGV4IChsaXN0T2JqZWN0ID0+IGxpc3RPYmplY3QubmFtZSA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblx0XHRcdFx0bXlMaXN0c0FycmF5LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdGxpc3ROYW1lcyA9IHNldExpc3ROYW1lcygpO1xuXHRcdFx0XHRsaXN0RWxlbWVudHMgPSBbbWFpbl07XG5cdFx0XHRcdGNsZWFyTGlzdE9mTGlzdHMoKTtcblx0XHRcdFx0bGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobWFpbik7XG5cdFx0XHRcdGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpO1x0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkRGVmYXVsdExpc3QoKSB7XG5cdG15TGlzdHNBcnJheVswXS5hY3RpdmUgPSB0cnVlO1xuXHRzZXRJdGVtSW5kaWNlcyhteUxpc3RzQXJyYXlbMF0pO1x0XG5cdG15TGlzdHNBcnJheVswXS5jb250ZW50cy5mb3JFYWNoKGxpc3RJdGVtT2JqZWN0ID0+IHtcblx0XHRkaXNwbGF5TGlzdEl0ZW0obGlzdEl0ZW1PYmplY3QpO1xuXHR9KTtcblx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobXlMaXN0c0FycmF5WzBdKTtcblx0Y29uZmlnQ2hlY2tCb3hlcyhteUxpc3RzQXJyYXlbMF0pO1xufVxuXG5hZGRMaXN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0xpc3QgPSBuZXcgbGlzdChuYW1lSW5wdXQudmFsdWUpO1xuICAgIGRpc3BsYXlMaXN0RWxlbWVudChuZXdMaXN0KTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0RWxlbWVudChsaXN0KSB7XG5cdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+JyArIGxpc3QubmFtZSArICc8L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1saVwiPlg8L2J1dHRvbj4nOyAgXG5cdGxpc3RFbGVtZW50LmlkID0gbGlzdC5uYW1lOyAgIFxuXHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG4gICAgbGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpO1xuICAgIHNldExpc3RFdmVudEhhbmRsZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldExpc3RFdmVudEhhbmRsZXJzKCkge1xuXHRsaXN0RWxlbWVudHMuZm9yRWFjaChsaXN0RWxlbWVudCA9PiB7XHRcdFxuXHRcdGxpc3RFbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XHRcdFxuXHRcdFx0bXlMaXN0c0FycmF5LmZvckVhY2gobGlzdE9iamVjdCA9PiB7XG5cdFx0XHRcdGlmIChsaXN0T2JqZWN0Lm5hbWUgPT0gbGlzdEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0KSB7XHRcblx0XHRcdFx0XHRtYWluTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGxpc3RPYmplY3QubmFtZTtcblx0XHRcdFx0XHRzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KTtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzLmZvckVhY2gobGlzdEl0ZW1PYmplY3QgPT4ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheUxpc3RJdGVtKGxpc3RJdGVtT2JqZWN0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KTtcblx0XHRcdFx0XHRjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgIHtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcdFx0XHRcblx0XHR9O1xuXHR9KTtcblx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdHBvcHVsYXRlU3RvcmFnZSgpO1x0XHRcbn1cblxuZXhwb3J0IHtteUxpc3RzQXJyYXksIGxpc3RUaXRsZSwgbWFpbkxpc3QsIGxpc3RFbGVtZW50cywgbG9hZERlZmF1bHRMaXN0LCBjcmVhdGVMaXN0RWxlbWVudHN9O1xuIiwiaW1wb3J0IHttYWluTGlzdCwgbXlMaXN0c0FycmF5fSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TGlzdEl0ZW0sIGNvbmZpZ0NoZWNrQm94ZXMsIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zLCBzZXRJdGVtSW5kaWNlc30gZnJvbSAnLi9saXN0SXRlbXNET00uanMnO1xuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuXG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXJCdXR0b25cIik7XG5cbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZUxpc3QgPSBteUxpc3RzQXJyYXkuZmluZChsaXN0ID0+IGxpc3QuYWN0aXZlID09IHRydWUpO1xuICAgIGNsZWFyQ29tcGxldGVkSXRlbXMoYWN0aXZlTGlzdCk7XG59KTtcblxuZnVuY3Rpb24gY2xlYXJDb21wbGV0ZWRJdGVtcyhsaXN0T2JqZWN0KSB7XG4gICAgbGV0IGluY29tcGxldGVJdGVtcyA9IGxpc3RPYmplY3QuY29udGVudHMuZmlsdGVyKGxpc3RJdGVtID0+IGxpc3RJdGVtLmNvbXBsZXRlID09IGZhbHNlKTtcbiAgICBsaXN0T2JqZWN0LmNvbnRlbnRzID0gaW5jb21wbGV0ZUl0ZW1zO1xuICAgIG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KTtcbiAgICBsaXN0T2JqZWN0LmNvbnRlbnRzLmZvckVhY2goaXRlbSA9PiBkaXNwbGF5TGlzdEl0ZW0oaXRlbSkpOyAgICBcbiAgICBjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KTtcbiAgICBjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufSIsImltcG9ydCB7bWFpbkxpc3QsIG15TGlzdHNBcnJheX0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHtkaXNwbGF5TGlzdEl0ZW0sIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zLCBjb25maWdDaGVja0JveGVzfSBmcm9tICcuL2xpc3RJdGVtc0RPTS5qcyc7XG5cbmNvbnN0IHNvcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCb3hcIik7XG5cbnNvcnRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGdldE9yZGVyKGUpIHtcblx0bGV0IGFjdGl2ZUxpc3QgPSBteUxpc3RzQXJyYXkuZmluZChsaXN0ID0+IGxpc3QuYWN0aXZlID09IHRydWUpO1xuXHRzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG5cdFx0Y2FzZSBcImhpZ2hQcmlvcml0eVwiOlxuXHRcdGdldEhpZ2hQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwibG93UHJpb3JpdHlcIjpcblx0XHRnZXRMb3dQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwiaW5jb21wbGV0ZUZpcnN0XCI6XG5cdFx0Z2V0SW5jb21wbGV0ZUZpcnN0T3JkZXIoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XHRcdFxuXHRcdGNhc2UgXCJjb21wbGV0ZUZpcnN0XCI6XG5cdFx0Z2V0Q29tcGxldGVGaXJzdE9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJkdWVEYXRlRWFybGllc3RcIjpcblx0XHRnZXRFYXJsaWVzdERhdGVGaXJzdChhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcdFx0XG5cdFx0Y2FzZSBcImR1ZURhdGVMYXRlc3RcIjpcblx0XHRnZXRMYXRlc3REYXRlRmlyc3QoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XG5cdH1cblx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMoYWN0aXZlTGlzdCk7XG5cdGNvbmZpZ0NoZWNrQm94ZXMoYWN0aXZlTGlzdCk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheVJlb3JkZXJlZExpc3QoY3VycmVudExpc3RPcmRlcikge1xuXHRtYWluTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdGxldCBudW1iZXIgPSAxO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMaXN0T3JkZXIubGVuZ3RoOyBpKyspIHtcblx0XHRjdXJyZW50TGlzdE9yZGVyW2ldLmluZGV4ID0gbnVtYmVyO1xuXHRcdGRpc3BsYXlMaXN0SXRlbShjdXJyZW50TGlzdE9yZGVyW2ldKTtcdFx0XG5cdFx0bnVtYmVyKys7XG5cdH1cdFxufVxuXG5mdW5jdGlvbiBnZXRIaWdoUHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGhpZ2hQcmlvcml0eU9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlID4gbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIDE7fVxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPT0gbGlzdEl0ZW1CLnZhbHVlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA8IGxpc3RJdGVtQi52YWx1ZSkge3JldHVybiAtMTt9XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChoaWdoUHJpb3JpdHlPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldExvd1ByaW9yaXR5T3JkZXIoYWN0aXZlTGlzdCkge1x0XG5cdGxldCBsb3dQcmlvcml0eU9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcbiAgICAgICAgaWYgKGxpc3RJdGVtQS52YWx1ZSA+IGxpc3RJdGVtQi52YWx1ZSkge3JldHVybiAtMTt9XG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA9PSBsaXN0SXRlbUIudmFsdWUpe3JldHVybiAwO31cblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlIDwgbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIDE7fVxuXHR9KTtcdFxuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChsb3dQcmlvcml0eU9yZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZUZpcnN0T3JkZXIoYWN0aXZlTGlzdCkge1x0XG5cdGxldCBpbmNvbXBsZXRlRmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0XHRpZiAobGlzdEl0ZW1BLmNvbXBsZXRlVmFsdWUgPCBsaXN0SXRlbUIuY29tcGxldGVWYWx1ZSkgcmV0dXJuIDE7XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChpbmNvbXBsZXRlRmlyc3RPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGNvbXBsZXRlRmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0XHRpZiAobGlzdEl0ZW1BLmNvbXBsZXRlVmFsdWUgPiBsaXN0SXRlbUIuY29tcGxldGVWYWx1ZSkgcmV0dXJuIDE7XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChjb21wbGV0ZUZpcnN0T3JkZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRFYXJsaWVzdERhdGVGaXJzdChhY3RpdmVMaXN0KSB7XG5cdGxldCBlYXJsaWVzdEZpcnN0T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA+IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIDE7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA9PSBsaXN0SXRlbUIuZHVlRGF0ZSl7cmV0dXJuIDA7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA8IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIC0xO31cblx0fSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGVhcmxpZXN0Rmlyc3RPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdERhdGVGaXJzdChhY3RpdmVMaXN0KSB7XG5cdGxldCBsYXRlc3RGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRpZiAobGlzdEl0ZW1BLmR1ZURhdGUgPiBsaXN0SXRlbUIuZHVlRGF0ZSkge3JldHVybiAtMTt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlID09IGxpc3RJdGVtQi5kdWVEYXRlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlIDwgbGlzdEl0ZW1CLmR1ZURhdGUpIHtyZXR1cm4gMTt9XG5cdH0pOztcblx0ZGlzcGxheVJlb3JkZXJlZExpc3QobGF0ZXN0Rmlyc3RPcmRlcik7XG59XG5cbiIsImltcG9ydCB7bGlzdEl0ZW0sIGdldEluZGV4fSBmcm9tIFwiLi9tYW5hZ2VUb0RvSXRlbXMuanNcIjtcbmltcG9ydCB7bXlMaXN0c0FycmF5LCBtYWluTGlzdH0gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQge2Fzc2lnblByaW9yaXR5LCBwcmlvcml0eX0gZnJvbSBcIi4vcHJpb3JpdHkuanNcIjtcblxuY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnV0dG9uXCIpO1xuY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lRmllbGRcIik7XG5jb25zdCBkZXNjcmlwRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXBGaWVsZFwiKTtcbmNvbnN0IGR1ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVGaWVsZFwiKTtcblxuZnVuY3Rpb24gY2xlYXJGaWVsZHMoKSB7XG5cdGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXh0ZmllbGRcIikpO1xuICAgIGZpZWxkcy5tYXAoZmllbGQgPT4gZmllbGQudmFsdWUgPSBcIlwiKTtcbn1cblxuYWRkSXRlbUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRsZXQgaXRlbSA9IG5ldyBsaXN0SXRlbShuYW1lRmllbGQudmFsdWUsIGRlc2NyaXBGaWVsZC52YWx1ZSwgZHVlRmllbGQudmFsdWUsIHByaW9yaXR5KTtcblx0bXlMaXN0c0FycmF5LmZvckVhY2gobGlzdE9iamVjdCA9PiB7XG5cdFx0aWYgKGxpc3RPYmplY3QuYWN0aXZlID09IHRydWUpIHtcblx0XHRcdGxpc3RPYmplY3QuY29udGVudHMucHVzaChpdGVtKTtcblx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1x0XG5cdFx0XHRkaXNwbGF5TGlzdEl0ZW0oaXRlbSk7XG5cdFx0XHRjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KTtcblx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCk7XG5cdFx0fVxuXHR9KTsgIFx0XG4gICAgY2xlYXJGaWVsZHMoKTsgICBcbn1cblxuZnVuY3Rpb24gc2V0SXRlbUluZGljZXMobGlzdE9iamVjdCkge1xuXHRsZXQgbnVtYmVyID0gMTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdE9iamVjdC5jb250ZW50c1tpXS5pbmRleCA9IG51bWJlcjtcblx0XHRudW1iZXIrKztcblx0fVxufVxuXG5mdW5jdGlvbiBjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KSB7XG5cdGxldCBkZWxldGVBcnJheSA9IFsuLi5tYWluTGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlXCIpXTtcblx0ZGVsZXRlQXJyYXkuZm9yRWFjaChkZWxldGVCdXR0b24gPT4ge1xuXHRcdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9iamVjdC5jb250ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAobGlzdE9iamVjdC5jb250ZW50c1tpXS5pbmRleCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpIHtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KTtcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XG5cdFx0XHRcdH1cdFx0XHRcdCAgICAgICBcblx0XHRcdH0gXG5cdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7IFxuXHRcdFx0Y29uZmlnQ2hlY2tCb3hlcyhsaXN0T2JqZWN0KTtcblx0XHRcdGxldCBtYWluTGlzdEFycmF5ID0gQXJyYXkuZnJvbShtYWluTGlzdC5jaGlsZHJlbik7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHsgICAgXG5cdFx0XHRcdG1haW5MaXN0QXJyYXlbaV0uaWQgPSBnZXRJbmRleChsaXN0T2JqZWN0LmNvbnRlbnRzW2ldKTtcblx0XHRcdH0gIFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHR9KTtcblx0fSk7XHQgICAgICAgXG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCkge1xuXHRsZXQgY2hlY2tib3hlcyA9IFsuLi5tYWluTGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hlY2tib3hcIildO1xuXHRsZXQgdGFyZ2V0SXRlbTtcblx0Y2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG5cdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG5cdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuXHRcdFx0dGFyZ2V0SXRlbSA9IGxpc3RPYmplY3QuY29udGVudHMuZmluZChsaXN0SXRlbSA9PiBsaXN0SXRlbS5pbmRleCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0XHRpZiAodGFyZ2V0SXRlbS5jb21wbGV0ZSA9PSBmYWxzZSkge1xuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlID0gdHJ1ZTtcdFxuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlVmFsdWUgPSAwO1x0XHRcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHRhcmdldEl0ZW0uY29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlID0gZmFsc2U7XG5cdFx0XHRcdHRhcmdldEl0ZW0uY29tcGxldGVWYWx1ZSA9IDEwO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUxpc3RJdGVtKGl0ZW0pIHtcblx0Y29uc29sZS5sb2coXCJkaXNwbGF5ZWQgaXRlbVwiKTtcblx0Y29uc29sZS5sb2coe215TGlzdHNBcnJheX0pO1xuXHRjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRuZXdJdGVtLmlkID0gZ2V0SW5kZXgoaXRlbSk7XG5cdG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3RJdGVtXCIpO1xuXHRhc3NpZ25Qcmlvcml0eShuZXdJdGVtLCBpdGVtKTtcblx0bmV3SXRlbS5pbm5lckhUTUwgPSBjcmVhdGVJdGVtQ29udGVudChpdGVtKTtcblx0aWYgKGl0ZW0uY29tcGxldGUgPT0gdHJ1ZSkgbWFya0NvbXBsZXRlKG5ld0l0ZW0pO1xuICAgIG1haW5MaXN0LmFwcGVuZENoaWxkKG5ld0l0ZW0pO1x0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1Db250ZW50KGl0ZW0pIHtcblx0cmV0dXJuICc8ZGl2IGNsYXNzPVwidG9Eb0JveFwiPjxkZXRhaWxzPjxzdW1tYXJ5Pidcblx0ICsgaXRlbS5uYW1lICsgJzwvc3VtbWFyeT48cD4nICsgaXRlbS5kZXNjcmlwdGlvbiArIFxuXHQgJzwvcD48L2RldGFpbHM+PHAgY2xhc3M9XCJkdWVEYXRlXCI+RHVlIGRhdGU6ICcgKyBpdGVtLmR1ZURhdGUgKyBcblx0ICc8L3A+PGxhYmVsIGNsYXNzPVwiY29tcGxldGVMYWJlbFwiPkNvbXBsZXRlZDogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVkXCIgdmFsdWU9XCJcIj48L2xhYmVsPjxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5YPC9idXR0b24+PC9kaXY+JzsgICAgXG59XG5cbmZ1bmN0aW9uIG1hcmtDb21wbGV0ZShpdGVtRWxlbWVudCkge1xuXHRpdGVtRWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG5cdGl0ZW1FbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIilcblx0bGV0IGNoZWNrYm94ID0gaXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveFwiKTtcblx0Y2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB0cnVlKTtcdFxufVxuXG5leHBvcnQge2NvbmZpZ0NoZWNrQm94ZXMsIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zLCBzZXRJdGVtSW5kaWNlcywgZGlzcGxheUxpc3RJdGVtfTsiLCJpbXBvcnQge2xpc3RFbGVtZW50cywgbXlMaXN0c0FycmF5LCBjcmVhdGVMaXN0RWxlbWVudHMsIGxvYWREZWZhdWx0TGlzdH0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHthZGRNb2JpbGVTdHlsZXMsIHdpZHRoVHJpZ2dlcn0gZnJvbSAnLi9tZWRpYS1xdWVyaWVzLmpzJztcbmltcG9ydCB7bGlzdH0gZnJvbSAnLi9tYW5hZ2VMaXN0cy5qcyc7XG5cbmxldCBsaXN0TmFtZXM7XG5sZXQgTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QgPSBcInRhc2subXlMaXN0c0FycmF5XCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKHtteUxpc3RzQXJyYXl9KTtcblx0aWYgKG15TGlzdHNBcnJheS5sZW5ndGggPT0gMCkge1xuXHRcdGNvbnN0IGZpcnN0ID0gbmV3IGxpc3QoXCJNYWluXCIpO1xuXHRcdGZpcnN0LmFjdGl2ZSA9IHRydWU7XHRcblx0fVx0XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdE5hbWVzMlwiKSkge1xuXHRcdC8vIHdpbGwgYWxyZWFkeSBpbmNsdWRlIFwibWFpblwiIGFzIGZpcnN0IGl0ZW06XG5cdFx0bGlzdE5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0TmFtZXMyXCIpLnNwbGl0KFwiLFwiKTtcblx0fVxuXHQvLyBmaXJzdCB0aW1lIGFwcCBpcyB1c2VkOyBcIm1haW5cIiBpcyBhZGRlZDpcblx0ZWxzZSBsaXN0TmFtZXMgPSBbXCJNYWluXCJdO1xuXHRjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKTtcdFxuXHRsb2FkRGVmYXVsdExpc3QoKTtcblx0YWRkTW9iaWxlU3R5bGVzKHdpZHRoVHJpZ2dlcik7XG59O1xuXG5mdW5jdGlvbiBzZXRMaXN0TmFtZXMoKSB7XG5cdGxpc3ROYW1lcyA9IGxpc3RFbGVtZW50cy5tYXAobGlzdEVsZW1lbnQgPT4ge1xuXHRcdGlmIChsaXN0RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGxpc3ROYW1lcztcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuXHRzZXRMaXN0TmFtZXMoKTsgICBcblx0bGlzdE5hbWVzLnRvU3RyaW5nKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0TmFtZXMyXCIsIGxpc3ROYW1lcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QsIEpTT04uc3RyaW5naWZ5KG15TGlzdHNBcnJheSkpO1xuXHRjb25zb2xlLmxvZyhcInBvcHVsYXRlZCFcIik7XHRcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgcG9wdWxhdGVTdG9yYWdlKTtcblxuZXhwb3J0IHtwb3B1bGF0ZVN0b3JhZ2UsIGxpc3ROYW1lcywgc2V0TGlzdE5hbWVzLCBMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVH07IiwiaW1wb3J0IHtteUxpc3RzQXJyYXl9IGZyb20gXCIuL0RPTS5qc1wiO1xuXG5mdW5jdGlvbiBsaXN0KG5hbWUpIHtcblx0dGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRlbnRzID0gW107XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTsgICBcbiAgICBteUxpc3RzQXJyYXkucHVzaCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IHtsaXN0fTsiLCJmdW5jdGlvbiBsaXN0SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblx0dGhpcy5uYW1lID0gbmFtZTtcblx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1x0XG5cdHRoaXMuY29tcGxldGVWYWx1ZSA9IDEwO1xuXHRyZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXgobGlzdEl0ZW1PYmplY3QpIHtcblx0cmV0dXJuIGxpc3RJdGVtT2JqZWN0LmluZGV4O1xufVxuXG5leHBvcnQge2xpc3RJdGVtLCBnZXRJbmRleH07IiwiY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkJveFwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RzLXNpZGViYXJcIik7XG5jb25zdCBhZGRJdGVtQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJdGVtQm94XCIpO1xuY29uc3Qgd2lkdGhUcmlnZ2VyID0gd2luZG93Lm1hdGNoTWVkaWEoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KVwiKTtcbmNvbnN0IHNvcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCb3hcIik7XG5cbmxldCB2aWV3TGlzdHNCdXR0b247XG5sZXQgb3BlbkFkZEl0ZW1Cb3hCdXR0b247XG5sZXQgb3ZlcmxheTtcbmxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLWJ1dHRvblwiO1xuY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG5cbmZ1bmN0aW9uIGFkZE1vYmlsZUNsYXNzKCkge1xuICAgIG1haW5Cb3guY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtc2xpZGVcIik7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIHNvcnRCb3guY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTW9iaWxlQ2xhc3MoKSB7XG4gICAgbWFpbkJveC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtc2xpZGVcIik7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNvcnRCb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9iaWxlQnV0dG9ucygpIHtcbiAgICBjb25zdCBpbm5lck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgdmlld0xpc3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmlld0xpc3RzQnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3IExpc3RzXCI7XG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUby1EbyBJdGVtXCJcbiAgICBpbm5lck5hdi5pZCA9IFwiaW5uZXJOYXZcIjsgICAgXG4gICAgdmlld0xpc3RzQnV0dG9uLmNsYXNzTmFtZSA9IFwibW9iaWxlLWJ1dHRvblwiOyAgXG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24uY2xhc3NOYW1lID0gXCJtb2JpbGUtYnV0dG9uXCI7IFxuICAgIGlubmVyTmF2LmFwcGVuZENoaWxkKHZpZXdMaXN0c0J1dHRvbik7XG4gICAgaW5uZXJOYXYuYXBwZW5kQ2hpbGQob3BlbkFkZEl0ZW1Cb3hCdXR0b24pO1xuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQWRkSXRlbUJveCk7XG4gICAgdmlld0xpc3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB2aWV3TGlzdHMpO1xuICAgIHJldHVybiBpbm5lck5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9wTmF2QmFyKCkge1xuICAgIGNvbnN0IHRvcE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wTmF2QmFyLmlkID0gXCJ0b3BOYXZCYXJcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvcE5hdkJhcik7XG4gICAgdG9wTmF2QmFyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7ICAgICAgIFxuICAgIHRvcE5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVNb2JpbGVCdXR0b25zKCkpOyAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG92ZXJsYXkpKSByZXR1cm47XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkTW9iaWxlU3R5bGVzKHgpIHtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICAgIGFkZE1vYmlsZUNsYXNzKCk7ICAgICAgIFxuICAgICAgICBjcmVhdGVUb3BOYXZCYXIoKTsgICAgICAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVNb2JpbGVDbGFzcygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvcE5hdkJhcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG1haW5UaXRsZSwgc2lkZWJhcik7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG92ZXJsYXkpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGNsb3NlQnV0dG9uKSkge1xuICAgICAgICAgICAgY2xvc2VCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdMaXN0cygpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpOyAgICBcbiAgICBpZiAoIXNpZGViYXIuY29udGFpbnMoY2xvc2VCdXR0b24pKSBzaWRlYmFyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VQb3B1cChzaWRlYmFyKSk7XG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufVxuXG5mdW5jdGlvbiBvcGVuQWRkSXRlbUJveCgpIHtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGlmICghYWRkSXRlbUJveC5jb250YWlucyhjbG9zZUJ1dHRvbikpIGFkZEl0ZW1Cb3guYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pOyAgICBcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VQb3B1cChhZGRJdGVtQm94KSk7XG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwKSB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMob3ZlcmxheSkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICB9XG59XG5cbndpZHRoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFkZE1vYmlsZVN0eWxlcyk7XG5cbmV4cG9ydCB7YWRkTW9iaWxlU3R5bGVzLCB3aWR0aFRyaWdnZXJ9OyIsImNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByaW9yaXR5XCIpKTtcbmxldCBwcmlvcml0eTtcblxucHJpb3JpdHlCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZShcImNoZWNrZWRcIikpIHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcbiAgICB9XG4gICBcdGJ1dHRvbi5vbmZvY3VzID0gKCkgPT4ge1xuXHRcdHByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuXG5cdH07ICAgIFxuXHRidXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBhc3NpZ25Qcmlvcml0eShpdGVtRWxlbWVudCwgaXRlbU9iamVjdCkge1xuXHRzd2l0Y2goaXRlbU9iamVjdC5wcmlvcml0eSkge1xuXHRcdGNhc2UgXCJoaWdoXCI6IFxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuXHRcdGl0ZW1PYmplY3QudmFsdWUgPSAxMDtcblx0XHRicmVhaztcblx0XHRjYXNlIFwibWVkaXVtXCI6XG5cdFx0aXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcblx0XHRpdGVtT2JqZWN0LnZhbHVlID0gMjA7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImxvd1wiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIik7XG5cdFx0aXRlbU9iamVjdC52YWx1ZSA9IDMwO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbmV4cG9ydCB7YXNzaWduUHJpb3JpdHksIHByaW9yaXR5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL0RPTS5qcyc7XG5pbXBvcnQgJy4vdG9Eby5jc3MnO1xuaW1wb3J0ICcuL2xpc3Qtc29ydGluZy5qcyc7XG5pbXBvcnQgJy4vY2xlYXJJdGVtcy5qcyc7XG5pbXBvcnQgJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==