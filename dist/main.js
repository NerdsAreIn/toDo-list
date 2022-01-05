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
___CSS_LOADER_EXPORT___.push([module.id, "html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: hsl(60, 100%, 85%);\npadding: 0;\nmargin: 5px;\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 0;\n/*border: 2px solid rebeccapurple;*/\n}\nh1 {\nmargin: 15px auto 40px;\ncolor: ;\nfont-size: 2rem;\nz-index: 3;\n}\nh2 {\ncolor: ;\nfont-size: 1.6rem;\nmargin-bottom: 30px;\nz-index: 1;\n}\nh3 {\ncolor: ;\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\ncolor: ;\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\nleft: 22vw;\nmargin-left: 3vw;\n/*border: 2px solid slateblue;*/\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 4px;\n}\n.dueDate {\nmargin: 3px 0;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n.smaller-left-margin {\nmargin-left: 57%;\n}\n#sortBox {\nposition: sticky;\nbottom: 75vh;\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\n/*border: 2px solid red;*/\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\n/* !FOR SOME REASON, I CAN'T REMOVE THE AUTO-STYLING GREY/BLUE BACKGROUND WHEN HOVERING...! */\n#sortBox option:hover {\nbackground-color: aquamarine;\n}\noption:hover {\nbackground-color: aquamarine;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nposition: sticky;\nleft: 68%;\nheight: 50vh;\nbottom: 20vh;\nwidth: 30%;\ncolor: blue;\nmargin-top: 10px;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box {\nbackground-color: hsl(120, 70%, 80%);\n}\np {\nmargin: 10px 0;\ncolor: black;\nfont-size: 1rem;\n}\n.high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n.medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n.low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 12px 0;\npadding: 4px;\nborder-radius: 3px;\nfont-size: 0.9rem;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: var(--myYellow);\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: hsl(60, 100%, 85%);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: 6vh;\nwidth: 11vw;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 25px auto 15px;\ncursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/toDo.css"],"names":[],"mappings":"AAAA;AACA,YAAY;AACZ,eAAe;AACf,0BAA0B;AAC1B,kCAAkC;AAClC,8BAA8B;AAC9B;AACA;AACA,uBAAuB;AACvB,SAAS;AACT,UAAU;AACV;AACA;AACA,kBAAkB;AAClB,oBAAoB;AACpB,oCAAoC;AACpC,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ,cAAc;AACd,UAAU;AACV,mCAAmC;AACnC;AACA;AACA,sBAAsB;AACtB,OAAO;AACP,eAAe;AACf,UAAU;AACV;AACA;AACA,OAAO;AACP,iBAAiB;AACjB,mBAAmB;AACnB,UAAU;AACV;AACA;AACA,OAAO;AACP,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,OAAO;AACP,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,WAAW;AACX,kBAAkB;AAClB,UAAU;AACV,gBAAgB;AAChB,+BAA+B;AAC/B;AACA;AACA,sBAAsB;AACtB,gBAAgB;AAChB;AACA;AACA,8BAA8B;AAC9B,SAAS;AACT,gBAAgB;AAChB,uBAAuB;AACvB,wBAAwB;AACxB;AACA;AACA,kBAAkB;AAClB,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,kBAAkB;AAClB,iBAAiB;AACjB,8BAA8B;AAC9B;AACA;AACA,uCAAuC;AACvC;AACA;AACA,uCAAuC;AACvC;AACA;AACA,aAAa;AACb;AACA;AACA,kBAAkB;AAClB,YAAY;AACZ,UAAU;AACV,aAAa;AACb;AACA;AACA,YAAY;AACZ,WAAW;AACX,uBAAuB;AACvB,eAAe;AACf;AACA;AACA,gBAAgB;AAChB;AACA;AACA,gBAAgB;AAChB,YAAY;AACZ,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,yBAAyB;AACzB;AACA;AACA,kBAAkB;AAClB,wBAAwB;AACxB,iBAAiB;AACjB;AACA,6FAA6F;AAC7F;AACA,4BAA4B;AAC5B;AACA;AACA,4BAA4B;AAC5B;AACA;AACA,uBAAuB;AACvB,oBAAoB;AACpB,iBAAiB;AACjB,sBAAsB;AACtB,YAAY;AACZ,YAAY;AACZ;AACA;AACA,gBAAgB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","sourcesContent":["html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: hsl(60, 100%, 85%);\npadding: 0;\nmargin: 5px;\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 0;\n/*border: 2px solid rebeccapurple;*/\n}\nh1 {\nmargin: 15px auto 40px;\ncolor: ;\nfont-size: 2rem;\nz-index: 3;\n}\nh2 {\ncolor: ;\nfont-size: 1.6rem;\nmargin-bottom: 30px;\nz-index: 1;\n}\nh3 {\ncolor: ;\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\ncolor: ;\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\nleft: 22vw;\nmargin-left: 3vw;\n/*border: 2px solid slateblue;*/\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 4px;\n}\n.dueDate {\nmargin: 3px 0;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n.smaller-left-margin {\nmargin-left: 57%;\n}\n#sortBox {\nposition: sticky;\nbottom: 75vh;\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\n/*border: 2px solid red;*/\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\n/* !FOR SOME REASON, I CAN'T REMOVE THE AUTO-STYLING GREY/BLUE BACKGROUND WHEN HOVERING...! */\n#sortBox option:hover {\nbackground-color: aquamarine;\n}\noption:hover {\nbackground-color: aquamarine;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nposition: sticky;\nleft: 68%;\nheight: 50vh;\nbottom: 20vh;\nwidth: 30%;\ncolor: blue;\nmargin-top: 10px;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box {\nbackground-color: hsl(120, 70%, 80%);\n}\np {\nmargin: 10px 0;\ncolor: black;\nfont-size: 1rem;\n}\n.high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n.medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n.low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 12px 0;\npadding: 4px;\nborder-radius: 3px;\nfont-size: 0.9rem;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: var(--myYellow);\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: hsl(60, 100%, 85%);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: 6vh;\nwidth: 11vw;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 25px auto 15px;\ncursor: pointer;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "listElements": () => (/* binding */ listElements)
/* harmony export */ });
/* harmony import */ var _manageLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageLists.js */ "./src/manageLists.js");
/* harmony import */ var _media_queries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-queries.js */ "./src/media-queries.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listItemsDOM.js */ "./src/listItemsDOM.js");





const mainList = document.querySelector("#mainlist");
//list element object:
const main = document.getElementById("main");
const addListButton = document.getElementById("addListButton");
const nameInput = document.getElementById("listName");
const listTitle = document.getElementById("list-title");
//OL:
const listOfLists = document.getElementById("mylists");

let listElements = [main];
let myListsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LISTS_OBJECT)) || [];

_media_queries_js__WEBPACK_IMPORTED_MODULE_1__.widthTrigger.addEventListener("change", _media_queries_js__WEBPACK_IMPORTED_MODULE_1__.addMobileStyles);


window.onload = () => {
	console.log({myListsArray});
	if (myListsArray.length == 0) {
		const first = new _manageLists_js__WEBPACK_IMPORTED_MODULE_0__.list("Main");
		first.active = true;	
	}	
    if (localStorage.getItem("listNames2")) {
		// will already include "main" as first item:
		_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.listNames = localStorage.getItem("listNames2").split(",");
	}
	// first time app is used:
	else _localStorage_js__WEBPACK_IMPORTED_MODULE_2__.listNames = ["Main"];
	createListElements(_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.listNames);	
	loadDefaultList();
	(0,_media_queries_js__WEBPACK_IMPORTED_MODULE_1__.addMobileStyles)(_media_queries_js__WEBPACK_IMPORTED_MODULE_1__.widthTrigger);
};


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
				_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.listNames = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.setListNames)();
				listElements = [main];
				clearListOfLists();
				listOfLists.appendChild(main);
				createListElements(_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.listNames);	
			}
		});
	});
}

//DOM:
function loadDefaultList() {
	myListsArray[0].active = true;
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.setItemIndices)(myListsArray[0]);	
	myListsArray[0].contents.forEach(listItemObject => {
		(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.displayListItem)(listItemObject);
	});
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.configItemDeleteButtons)(myListsArray[0]);
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.configCheckBoxes)(myListsArray[0]);
}

//DOM:
addListButton.onclick = () => {
    let newList = new _manageLists_js__WEBPACK_IMPORTED_MODULE_0__.list(nameInput.value);
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
					(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.setItemIndices)(listObject);
					listObject.contents.forEach(listItemObject => {
						(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.displayListItem)(listItemObject);
					});
					(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.configItemDeleteButtons)(listObject);
					(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_3__.configCheckBoxes)(listObject);
				}
				else  {
					listObject.active = false;
				}
			});			
		};
	});
	localStorage.clear();
	(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.populateStorage)();		
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

//DOM:
addItemButton.onclick = () => {
	let item = new _manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.listItem(nameField.value, descripField.value, dueField.value, priority);
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

//DOM:
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

function displayListItem(item) {
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
/* harmony export */   "setListNames": () => (/* binding */ setListNames)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


let listNames;
let LOCAL_STORAGE_LISTS_OBJECT = "task.myListsArray";

//DOM:
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

window.addEventListener("beforeunload", populateStorage);



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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


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










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFB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azovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG8uY3NzPzM4MzkiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdEl0ZW1zRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWVkaWEtcXVlcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxud2lkdGg6IDEwMHZ3O1xcbmZvbnQtc2l6ZTogMTdweDtcXG4tLW15Qmx1ZTogcmdiKDExLCAxMSwgMTY3KTtcXG4tLXZhcmlhYmxlSGVpZ2h0OiBtYXgoMTV2aCwgMTI1cHgpO1xcbi0tbXlZZWxsb3c6IGhzbCg2MCwgMTAwJSwgODUlKTtcXG59XFxuKiB7XFxuYm94LXNpemluZzogY29udGVudC1ib3g7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNjAsIDEwMCUsIDg1JSk7XFxucGFkZGluZzogMDtcXG5tYXJnaW46IDVweDtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiBhdXRvO1xcbm92ZXJmbG93OiBhdXRvO1xcbnotaW5kZXg6IDA7XFxuLypib3JkZXI6IDJweCBzb2xpZCByZWJlY2NhcHVycGxlOyovXFxufVxcbmgxIHtcXG5tYXJnaW46IDE1cHggYXV0byA0MHB4O1xcbmNvbG9yOiA7XFxuZm9udC1zaXplOiAycmVtO1xcbnotaW5kZXg6IDM7XFxufVxcbmgyIHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS42cmVtO1xcbm1hcmdpbi1ib3R0b206IDMwcHg7XFxuei1pbmRleDogMTtcXG59XFxuaDMge1xcbmNvbG9yOiA7XFxuZm9udC1zaXplOiAxLjRyZW07XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuaDQge1xcbmNvbG9yOiA7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAxNXB4IDAgMTBweDtcXG59XFxuI21haW5Cb3gge1xcbndpZHRoOiA0MHZ3O1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG5sZWZ0OiAyMnZ3O1xcbm1hcmdpbi1sZWZ0OiAzdnc7XFxuLypib3JkZXI6IDJweCBzb2xpZCBzbGF0ZWJsdWU7Ki9cXG59XFxuI21haW5saXN0IHtcXG5ib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbm1pbi1oZWlnaHQ6IDIwcHg7XFxufVxcbiNtYWlubGlzdCAubGlzdEl0ZW0ge1xcbmJvcmRlci1ib3R0b206IDZweCBkb3VibGUgYmx1ZTtcXG5tYXJnaW46IDA7XFxudGV4dC1hbGlnbjogbGVmdDtcXG5saXN0LXN0eWxlLXR5cGU6IEFyYWJpYztcXG5wYWRkaW5nOiA0cHggMnB4IDFweCAzcHg7XFxufVxcbi50b0RvQm94IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxcbmZvbnQtc2l6ZTogMXJlbTtcXG59XFxuc3VtbWFyeSB7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxubWFyZ2luLWJvdHRvbTogN3B4O1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbnRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAxcztcXG59XFxuc3VtbWFyeS5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG5kZXRhaWxzIHAuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuLmR1ZURhdGUge1xcbm1hcmdpbjogM3B4IDA7XFxufVxcbi5jb21wbGV0ZUxhYmVsIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAtM3B4O1xcbnJpZ2h0OiAwcHg7XFxuZm9udDogaW5oZXJpdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuaGVpZ2h0OiAxNnB4O1xcbndpZHRoOiAxNnB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbm1hcmdpbjogNXB4IDAgMDtcXG59XFxuLnNtYWxsZXItbGVmdC1tYXJnaW4ge1xcbm1hcmdpbi1sZWZ0OiA1NyU7XFxufVxcbiNzb3J0Qm94IHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbmJvdHRvbTogNzV2aDtcXG5sZWZ0OiA3MHZ3O1xcbndpZHRoOiAyNXZ3O1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG4vKmJvcmRlcjogMnB4IHNvbGlkIHJlZDsqL1xcbn1cXG4jc29ydEJveCBsYWJlbCB7XFxubWFyZ2luLXJpZ2h0OiAxMHB4O1xcbmZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG5mb250LXNpemU6IDEuMnJlbTtcXG59XFxuLyogIUZPUiBTT01FIFJFQVNPTiwgSSBDQU4nVCBSRU1PVkUgVEhFIEFVVE8tU1RZTElORyBHUkVZL0JMVUUgQkFDS0dST1VORCBXSEVOIEhPVkVSSU5HLi4uISAqL1xcbiNzb3J0Qm94IG9wdGlvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxub3B0aW9uOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5zZWxlY3Qge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiAyMnB4O1xcbnBhZGRpbmc6IDNweDtcXG59XFxuI2FkZEl0ZW1Cb3gge1xcbnBvc2l0aW9uOiBzdGlja3k7XFxubGVmdDogNjglO1xcbmhlaWdodDogNTB2aDtcXG5ib3R0b206IDIwdmg7XFxud2lkdGg6IDMwJTtcXG5jb2xvcjogYmx1ZTtcXG5tYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5maWVsZHNldCB7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5sZWdlbmQge1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMCBhdXRvIDE1cHg7XFxufVxcbmlucHV0IHtcXG5tYXJnaW46IDZweCAwO1xcbmZvbnQtc2l6ZTogMC44NXJlbTtcXG5wYWRkaW5nOiAzcHggMnB4O1xcbn1cXG4uY29sb3VyLWNvZGUge1xcbndpZHRoOiAxM3B4O1xcbmhlaWdodDogMTNweDtcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxubWFyZ2luLWxlZnQ6IDE1cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNyZWQtYm94IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNzAlLCA4MCUpO1xcbn1cXG4jb3JhbmdlLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4jZ3JlZW4tYm94IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbnAge1xcbm1hcmdpbjogMTBweCAwO1xcbmNvbG9yOiBibGFjaztcXG5mb250LXNpemU6IDFyZW07XFxufVxcbi5oaWdoLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNzAlLCA4MCUpO1xcbn1cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDAsIDEwMCUsIDcwJSk7XFxufVxcbi5sb3ctcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDcwJSwgODAlKTtcXG59XFxuI2xpc3RzLXNpZGViYXIge1xcbmJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiA4MHZoO1xcbndpZHRoOiAyMHZ3O1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiA1cHg7XFxuYm90dG9tOiAxMHB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbn1cXG4jbXlsaXN0cyB7XFxubGlzdC1zdHlsZTogc3F1YXJlIGluc2lkZTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jbXlsaXN0cyBsaSB7XFxubWFyZ2luOiAxMnB4IDVweCAxMnB4IDI1cHg7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbndpZHRoOiA3MCU7XFxuY29sb3I6IGJsdWU7XFxufVxcbmE6YWN0aXZlLCBhOmZvY3VzLCBsaTpmb2N1cyB7XFxuZm9udC1zaXplOiAxLjNyZW07XFxuZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxcbn1cXG5hLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuI2FkZExpc3RCdXR0b24sICNhZGRCdXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbm1hcmdpbjogMTJweCAwO1xcbnBhZGRpbmc6IDRweDtcXG5ib3JkZXItcmFkaXVzOiAzcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbiNsaXN0TmFtZSwgI2xpc3ROYW1lOmZvY3VzIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IG5vbmU7XFxub3V0bGluZTogbm9uZTtcXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTtcXG5tYXJnaW46IDEwcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5kZWxldGUge1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxucmlnaHQ6IDFweDtcXG50b3A6IDFweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMTVweDtcXG53aWR0aDogMTVweDtcXG5wYWRkaW5nOiAxcHg7XFxuZm9udDogYm9sZGVyIDFyZW07XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uZGVsZXRlLWxpIHtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbndpZHRoOiAxOXB4O1xcbmhlaWdodDogMTlweDtcXG5ib3JkZXI6IG5vbmU7XFxuZmxvYXQ6IHJpZ2h0O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbm1hcmdpbi10b3A6IDRweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG4jdG9wTmF2QmFyIHtcXG53aWR0aDogMTAwJTtcXG5ib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAwO1xcbmhlaWdodDogdmFyKC0tdmFyaWFibGVIZWlnaHQpO1xcbnotaW5kZXg6IDM7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5vdmVyZmxvdzogYXV0bztcXG59XFxuI21haW5Cb3gubW9iaWxlIHtcXG53aWR0aDogODB2dztcXG5tYXJnaW46IDV2aCBhdXRvO1xcbnotaW5kZXg6IDE7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDEwdnc7XFxudG9wOiBtYXgoMjV2aCwgMTkwcHgpO1xcbn1cXG4jc29ydEJveC5tb2JpbGUge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgyMHZoLCAxNTBweCk7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmxlZnQ6IDIwdnc7XFxuei1pbmRleDogMTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSB7XFxud2lkdGg6IDYwdnc7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogbWF4KDE4dmgsIDE1MHB4KTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbmJvcmRlcjogNHB4IHNvbGlkIGRvZGdlcmJsdWU7XFxuei1pbmRleDogMztcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNjAsIDEwMCUsIDg1JSk7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbnBhZGRpbmc6IDIwcHg7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG52aXNpYmlsaXR5OiBoaWRkZW47XFxudHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxMDBtcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlIHtcXG5sZWZ0OiAtMTAwJTtcXG50cmFuc2l0aW9uOiBsZWZ0IDFzO1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUudmlzaWJsZSwgI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlLnZpc2libGUge1xcbmxlZnQ6IDIwdnc7XFxudmlzaWJpbGl0eTogdmlzaWJsZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSB7XFxucG9zaXRpb246IGZpeGVkO1xcbmxlZnQ6IDEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIGZpZWxkc2V0IHtcXG5ib3JkZXI6IG5vbmU7XFxufVxcbiNpbm5lck5hdiB7XFxud2lkdGg6IDgwJTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAwO1xcbmhlaWdodDogMzclO1xcbm1hcmdpbjogMCAxMCU7XFxuYm94LXNpemluZzogY29udGVudC1ib3g7XFxuYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLXJhZGl1czogNHB4O1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi5tb2JpbGUtYnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG53aWR0aDogNTAlO1xcbmZsb2F0OiBsZWZ0O1xcbmhlaWdodDogMTAwJTtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuZm9udC1zaXplOiAxLjFyZW07XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLm1vYmlsZS1idXR0b246aG92ZXIsIC5tb2JpbGUtYnV0dG9uOmFjdGl2ZSwgLm1vYmlsZS1idXR0b246Zm9jdXMge1xcbnRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDI0NCwgMjQ4KTtcXG59XFxuI292ZXJsYXkge1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwdmg7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogY2FsYyh2YXIoLS12YXJpYWJsZUhlaWdodCkgLSAzcHgpO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXG56LWluZGV4OiAyO1xcbm9wYWNpdHk6IDAuODtcXG59XFxuLmNsb3NlLWJ1dHRvbiB7XFxuY29sb3I6IGRvZGdlcmJsdWU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcXG5oZWlnaHQ6IDZ2aDtcXG53aWR0aDogMTF2dztcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuZm9udC1zaXplOiAxcmVtO1xcbm1hcmdpbjogMjVweCBhdXRvIDE1cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9Eby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxZQUFZO0FBQ1osZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsU0FBUztBQUNULFVBQVU7QUFDVjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixvQ0FBb0M7QUFDcEMsVUFBVTtBQUNWLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7QUFDWixjQUFjO0FBQ2QsVUFBVTtBQUNWLG1DQUFtQztBQUNuQztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLE9BQU87QUFDUCxlQUFlO0FBQ2YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CO0FBQ0E7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QUFDQSx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVixXQUFXO0FBQ1gsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2IsZUFBZTtBQUNmLHNDQUFzQztBQUN0QyxpQ0FBaUM7QUFDakMsVUFBVTtBQUNWLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUIsV0FBVztBQUNYLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxud2lkdGg6IDEwMHZ3O1xcbmZvbnQtc2l6ZTogMTdweDtcXG4tLW15Qmx1ZTogcmdiKDExLCAxMSwgMTY3KTtcXG4tLXZhcmlhYmxlSGVpZ2h0OiBtYXgoMTV2aCwgMTI1cHgpO1xcbi0tbXlZZWxsb3c6IGhzbCg2MCwgMTAwJSwgODUlKTtcXG59XFxuKiB7XFxuYm94LXNpemluZzogY29udGVudC1ib3g7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNjAsIDEwMCUsIDg1JSk7XFxucGFkZGluZzogMDtcXG5tYXJnaW46IDVweDtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiBhdXRvO1xcbm92ZXJmbG93OiBhdXRvO1xcbnotaW5kZXg6IDA7XFxuLypib3JkZXI6IDJweCBzb2xpZCByZWJlY2NhcHVycGxlOyovXFxufVxcbmgxIHtcXG5tYXJnaW46IDE1cHggYXV0byA0MHB4O1xcbmNvbG9yOiA7XFxuZm9udC1zaXplOiAycmVtO1xcbnotaW5kZXg6IDM7XFxufVxcbmgyIHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS42cmVtO1xcbm1hcmdpbi1ib3R0b206IDMwcHg7XFxuei1pbmRleDogMTtcXG59XFxuaDMge1xcbmNvbG9yOiA7XFxuZm9udC1zaXplOiAxLjRyZW07XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuaDQge1xcbmNvbG9yOiA7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAxNXB4IDAgMTBweDtcXG59XFxuI21haW5Cb3gge1xcbndpZHRoOiA0MHZ3O1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG5sZWZ0OiAyMnZ3O1xcbm1hcmdpbi1sZWZ0OiAzdnc7XFxuLypib3JkZXI6IDJweCBzb2xpZCBzbGF0ZWJsdWU7Ki9cXG59XFxuI21haW5saXN0IHtcXG5ib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbm1pbi1oZWlnaHQ6IDIwcHg7XFxufVxcbiNtYWlubGlzdCAubGlzdEl0ZW0ge1xcbmJvcmRlci1ib3R0b206IDZweCBkb3VibGUgYmx1ZTtcXG5tYXJnaW46IDA7XFxudGV4dC1hbGlnbjogbGVmdDtcXG5saXN0LXN0eWxlLXR5cGU6IEFyYWJpYztcXG5wYWRkaW5nOiA0cHggMnB4IDFweCAzcHg7XFxufVxcbi50b0RvQm94IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxcbmZvbnQtc2l6ZTogMXJlbTtcXG59XFxuc3VtbWFyeSB7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxubWFyZ2luLWJvdHRvbTogN3B4O1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbnRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAxcztcXG59XFxuc3VtbWFyeS5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG5kZXRhaWxzIHAuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuLmR1ZURhdGUge1xcbm1hcmdpbjogM3B4IDA7XFxufVxcbi5jb21wbGV0ZUxhYmVsIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAtM3B4O1xcbnJpZ2h0OiAwcHg7XFxuZm9udDogaW5oZXJpdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuaGVpZ2h0OiAxNnB4O1xcbndpZHRoOiAxNnB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbm1hcmdpbjogNXB4IDAgMDtcXG59XFxuLnNtYWxsZXItbGVmdC1tYXJnaW4ge1xcbm1hcmdpbi1sZWZ0OiA1NyU7XFxufVxcbiNzb3J0Qm94IHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbmJvdHRvbTogNzV2aDtcXG5sZWZ0OiA3MHZ3O1xcbndpZHRoOiAyNXZ3O1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG4vKmJvcmRlcjogMnB4IHNvbGlkIHJlZDsqL1xcbn1cXG4jc29ydEJveCBsYWJlbCB7XFxubWFyZ2luLXJpZ2h0OiAxMHB4O1xcbmZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG5mb250LXNpemU6IDEuMnJlbTtcXG59XFxuLyogIUZPUiBTT01FIFJFQVNPTiwgSSBDQU4nVCBSRU1PVkUgVEhFIEFVVE8tU1RZTElORyBHUkVZL0JMVUUgQkFDS0dST1VORCBXSEVOIEhPVkVSSU5HLi4uISAqL1xcbiNzb3J0Qm94IG9wdGlvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxub3B0aW9uOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5zZWxlY3Qge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiAyMnB4O1xcbnBhZGRpbmc6IDNweDtcXG59XFxuI2FkZEl0ZW1Cb3gge1xcbnBvc2l0aW9uOiBzdGlja3k7XFxubGVmdDogNjglO1xcbmhlaWdodDogNTB2aDtcXG5ib3R0b206IDIwdmg7XFxud2lkdGg6IDMwJTtcXG5jb2xvcjogYmx1ZTtcXG5tYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5maWVsZHNldCB7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5sZWdlbmQge1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMCBhdXRvIDE1cHg7XFxufVxcbmlucHV0IHtcXG5tYXJnaW46IDZweCAwO1xcbmZvbnQtc2l6ZTogMC44NXJlbTtcXG5wYWRkaW5nOiAzcHggMnB4O1xcbn1cXG4uY29sb3VyLWNvZGUge1xcbndpZHRoOiAxM3B4O1xcbmhlaWdodDogMTNweDtcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxubWFyZ2luLWxlZnQ6IDE1cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNyZWQtYm94IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNzAlLCA4MCUpO1xcbn1cXG4jb3JhbmdlLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4jZ3JlZW4tYm94IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbnAge1xcbm1hcmdpbjogMTBweCAwO1xcbmNvbG9yOiBibGFjaztcXG5mb250LXNpemU6IDFyZW07XFxufVxcbi5oaWdoLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNzAlLCA4MCUpO1xcbn1cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDAsIDEwMCUsIDcwJSk7XFxufVxcbi5sb3ctcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDcwJSwgODAlKTtcXG59XFxuI2xpc3RzLXNpZGViYXIge1xcbmJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiA4MHZoO1xcbndpZHRoOiAyMHZ3O1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiA1cHg7XFxuYm90dG9tOiAxMHB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbn1cXG4jbXlsaXN0cyB7XFxubGlzdC1zdHlsZTogc3F1YXJlIGluc2lkZTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jbXlsaXN0cyBsaSB7XFxubWFyZ2luOiAxMnB4IDVweCAxMnB4IDI1cHg7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbndpZHRoOiA3MCU7XFxuY29sb3I6IGJsdWU7XFxufVxcbmE6YWN0aXZlLCBhOmZvY3VzLCBsaTpmb2N1cyB7XFxuZm9udC1zaXplOiAxLjNyZW07XFxuZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxcbn1cXG5hLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuI2FkZExpc3RCdXR0b24sICNhZGRCdXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbm1hcmdpbjogMTJweCAwO1xcbnBhZGRpbmc6IDRweDtcXG5ib3JkZXItcmFkaXVzOiAzcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbiNsaXN0TmFtZSwgI2xpc3ROYW1lOmZvY3VzIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IG5vbmU7XFxub3V0bGluZTogbm9uZTtcXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTtcXG5tYXJnaW46IDEwcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5kZWxldGUge1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxucmlnaHQ6IDFweDtcXG50b3A6IDFweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMTVweDtcXG53aWR0aDogMTVweDtcXG5wYWRkaW5nOiAxcHg7XFxuZm9udDogYm9sZGVyIDFyZW07XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uZGVsZXRlLWxpIHtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbndpZHRoOiAxOXB4O1xcbmhlaWdodDogMTlweDtcXG5ib3JkZXI6IG5vbmU7XFxuZmxvYXQ6IHJpZ2h0O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbm1hcmdpbi10b3A6IDRweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG4jdG9wTmF2QmFyIHtcXG53aWR0aDogMTAwJTtcXG5ib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAwO1xcbmhlaWdodDogdmFyKC0tdmFyaWFibGVIZWlnaHQpO1xcbnotaW5kZXg6IDM7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5vdmVyZmxvdzogYXV0bztcXG59XFxuI21haW5Cb3gubW9iaWxlIHtcXG53aWR0aDogODB2dztcXG5tYXJnaW46IDV2aCBhdXRvO1xcbnotaW5kZXg6IDE7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDEwdnc7XFxudG9wOiBtYXgoMjV2aCwgMTkwcHgpO1xcbn1cXG4jc29ydEJveC5tb2JpbGUge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgyMHZoLCAxNTBweCk7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmxlZnQ6IDIwdnc7XFxuei1pbmRleDogMTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSB7XFxud2lkdGg6IDYwdnc7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogbWF4KDE4dmgsIDE1MHB4KTtcXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xcbmJvcmRlcjogNHB4IHNvbGlkIGRvZGdlcmJsdWU7XFxuei1pbmRleDogMztcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNjAsIDEwMCUsIDg1JSk7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbnBhZGRpbmc6IDIwcHg7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG52aXNpYmlsaXR5OiBoaWRkZW47XFxudHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxMDBtcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlIHtcXG5sZWZ0OiAtMTAwJTtcXG50cmFuc2l0aW9uOiBsZWZ0IDFzO1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUudmlzaWJsZSwgI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlLnZpc2libGUge1xcbmxlZnQ6IDIwdnc7XFxudmlzaWJpbGl0eTogdmlzaWJsZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSB7XFxucG9zaXRpb246IGZpeGVkO1xcbmxlZnQ6IDEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIGZpZWxkc2V0IHtcXG5ib3JkZXI6IG5vbmU7XFxufVxcbiNpbm5lck5hdiB7XFxud2lkdGg6IDgwJTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAwO1xcbmhlaWdodDogMzclO1xcbm1hcmdpbjogMCAxMCU7XFxuYm94LXNpemluZzogY29udGVudC1ib3g7XFxuYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLXJhZGl1czogNHB4O1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi5tb2JpbGUtYnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG53aWR0aDogNTAlO1xcbmZsb2F0OiBsZWZ0O1xcbmhlaWdodDogMTAwJTtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuZm9udC1zaXplOiAxLjFyZW07XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLm1vYmlsZS1idXR0b246aG92ZXIsIC5tb2JpbGUtYnV0dG9uOmFjdGl2ZSwgLm1vYmlsZS1idXR0b246Zm9jdXMge1xcbnRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDI0NCwgMjQ4KTtcXG59XFxuI292ZXJsYXkge1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwdmg7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogY2FsYyh2YXIoLS12YXJpYWJsZUhlaWdodCkgLSAzcHgpO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXG56LWluZGV4OiAyO1xcbm9wYWNpdHk6IDAuODtcXG59XFxuLmNsb3NlLWJ1dHRvbiB7XFxuY29sb3I6IGRvZGdlcmJsdWU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcXG5oZWlnaHQ6IDZ2aDtcXG53aWR0aDogMTF2dztcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuZm9udC1zaXplOiAxcmVtO1xcbm1hcmdpbjogMjVweCBhdXRvIDE1cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvRG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b0RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2xpc3R9IGZyb20gJy4vbWFuYWdlTGlzdHMuanMnO1xuaW1wb3J0IHthZGRNb2JpbGVTdHlsZXMsIHdpZHRoVHJpZ2dlcn0gZnJvbSAnLi9tZWRpYS1xdWVyaWVzLmpzJztcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSwgbGlzdE5hbWVzLCBzZXRMaXN0TmFtZXN9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7Y29uZmlnQ2hlY2tCb3hlcywgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMsIHNldEl0ZW1JbmRpY2VzLCBkaXNwbGF5TGlzdEl0ZW19IGZyb20gJy4vbGlzdEl0ZW1zRE9NLmpzJ1xuXG5jb25zdCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbmxpc3RcIik7XG4vL2xpc3QgZWxlbWVudCBvYmplY3Q6XG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTGlzdEJ1dHRvblwiKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdE5hbWVcIik7XG5jb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtdGl0bGVcIik7XG4vL09MOlxuY29uc3QgbGlzdE9mTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15bGlzdHNcIik7XG5cbmxldCBsaXN0RWxlbWVudHMgPSBbbWFpbl07XG5sZXQgbXlMaXN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCkpIHx8IFtdO1xuXG53aWR0aFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhZGRNb2JpbGVTdHlsZXMpO1xuXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKHtteUxpc3RzQXJyYXl9KTtcblx0aWYgKG15TGlzdHNBcnJheS5sZW5ndGggPT0gMCkge1xuXHRcdGNvbnN0IGZpcnN0ID0gbmV3IGxpc3QoXCJNYWluXCIpO1xuXHRcdGZpcnN0LmFjdGl2ZSA9IHRydWU7XHRcblx0fVx0XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdE5hbWVzMlwiKSkge1xuXHRcdC8vIHdpbGwgYWxyZWFkeSBpbmNsdWRlIFwibWFpblwiIGFzIGZpcnN0IGl0ZW06XG5cdFx0bGlzdE5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0TmFtZXMyXCIpLnNwbGl0KFwiLFwiKTtcblx0fVxuXHQvLyBmaXJzdCB0aW1lIGFwcCBpcyB1c2VkOlxuXHRlbHNlIGxpc3ROYW1lcyA9IFtcIk1haW5cIl07XG5cdGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpO1x0XG5cdGxvYWREZWZhdWx0TGlzdCgpO1xuXHRhZGRNb2JpbGVTdHlsZXMod2lkdGhUcmlnZ2VyKTtcbn07XG5cblxuLy9ET006XG5mdW5jdGlvbiBjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKSB7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgXHRsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICsgbGlzdE5hbWVzW2ldICsgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7XG5cdFx0bGlzdEVsZW1lbnQuaWQgPSBsaXN0TmFtZXNbaV07ICAgICBcblx0XHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRcdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XG5cdFx0c2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcblx0fVxufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGNsZWFyTGlzdE9mTGlzdHMoKSB7XG5cdHdoaWxlIChsaXN0T2ZMaXN0cy5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHR9XG5cdHJldHVybjtcbn1cbi8vRE9NOlxuZnVuY3Rpb24gY29uZmlnTGlzdERlbGV0ZUJ1dHRvbnMoKSB7XG5cdGxldCBkZWxldGVBcnJheTIgPSBbLi4ubGlzdE9mTGlzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1saVwiKV07XG5cdGRlbGV0ZUFycmF5Mi5mb3JFYWNoKGRlbGV0ZUJ1dHRvbiA9PiB7XG5cdFx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuXHRcdFx0bGV0IHRvQmVEZWxldGVkID0gbGlzdEVsZW1lbnRzLmZpbmRJbmRleChsaXN0RWxlbWVudCA9PiBsaXN0RWxlbWVudC5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblx0XHRcdGlmICh0b0JlRGVsZXRlZCA+IDApIHtcblx0XHRcdFx0bGlzdEVsZW1lbnRzLnNwbGljZSh0b0JlRGVsZXRlZCwgMSk7XG5cdFx0XHRcdGxldCBpbmRleCA9IG15TGlzdHNBcnJheS5maW5kSW5kZXggKGxpc3RPYmplY3QgPT4gbGlzdE9iamVjdC5uYW1lID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuXHRcdFx0XHRteUxpc3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0bGlzdE5hbWVzID0gc2V0TGlzdE5hbWVzKCk7XG5cdFx0XHRcdGxpc3RFbGVtZW50cyA9IFttYWluXTtcblx0XHRcdFx0Y2xlYXJMaXN0T2ZMaXN0cygpO1xuXHRcdFx0XHRsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChtYWluKTtcblx0XHRcdFx0Y3JlYXRlTGlzdEVsZW1lbnRzKGxpc3ROYW1lcyk7XHRcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gbG9hZERlZmF1bHRMaXN0KCkge1xuXHRteUxpc3RzQXJyYXlbMF0uYWN0aXZlID0gdHJ1ZTtcblx0c2V0SXRlbUluZGljZXMobXlMaXN0c0FycmF5WzBdKTtcdFxuXHRteUxpc3RzQXJyYXlbMF0uY29udGVudHMuZm9yRWFjaChsaXN0SXRlbU9iamVjdCA9PiB7XG5cdFx0ZGlzcGxheUxpc3RJdGVtKGxpc3RJdGVtT2JqZWN0KTtcblx0fSk7XG5cdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKG15TGlzdHNBcnJheVswXSk7XG5cdGNvbmZpZ0NoZWNrQm94ZXMobXlMaXN0c0FycmF5WzBdKTtcbn1cblxuLy9ET006XG5hZGRMaXN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0xpc3QgPSBuZXcgbGlzdChuYW1lSW5wdXQudmFsdWUpO1xuICAgIGRpc3BsYXlMaXN0RWxlbWVudChuZXdMaXN0KTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiXG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gZGlzcGxheUxpc3RFbGVtZW50KGxpc3QpIHtcblx0Y29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHRcbiAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICsgbGlzdC5uYW1lICsgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7ICBcblx0bGlzdEVsZW1lbnQuaWQgPSBsaXN0Lm5hbWU7ICAgXG5cdGxpc3RFbGVtZW50cy5wdXNoKGxpc3RFbGVtZW50KTtcbiAgICBsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG5cdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XG4gICAgc2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcbn1cblxuLy9ET006XG5mdW5jdGlvbiBzZXRMaXN0RXZlbnRIYW5kbGVycygpIHtcblx0bGlzdEVsZW1lbnRzLmZvckVhY2gobGlzdEVsZW1lbnQgPT4ge1x0XHRcblx0XHRsaXN0RWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1x0XHRcblx0XHRcdG15TGlzdHNBcnJheS5mb3JFYWNoKGxpc3RPYmplY3QgPT4ge1xuXHRcdFx0XHRpZiAobGlzdE9iamVjdC5uYW1lID09IGxpc3RFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCkge1x0XG5cdFx0XHRcdFx0bWFpbkxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0XHRsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0T2JqZWN0Lm5hbWU7XG5cdFx0XHRcdFx0c2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5jb250ZW50cy5mb3JFYWNoKGxpc3RJdGVtT2JqZWN0ID0+IHtcblx0XHRcdFx0XHRcdGRpc3BsYXlMaXN0SXRlbShsaXN0SXRlbU9iamVjdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCk7XG5cdFx0XHRcdFx0Y29uZmlnQ2hlY2tCb3hlcyhsaXN0T2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlICB7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XHRcdFx0XG5cdFx0fTtcblx0fSk7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRwb3B1bGF0ZVN0b3JhZ2UoKTtcdFx0XG59XG5cbmV4cG9ydCB7bXlMaXN0c0FycmF5LCBsaXN0VGl0bGUsIG1haW5MaXN0LCBsaXN0RWxlbWVudHN9O1xuIiwiaW1wb3J0IHsgbGlzdEl0ZW0sIGdldEluZGV4fSBmcm9tIFwiLi9tYW5hZ2VUb0RvSXRlbXMuanNcIjtcbmltcG9ydCB7IG15TGlzdHNBcnJheSwgbWFpbkxpc3QgfSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7IGFzc2lnblByaW9yaXR5IH0gZnJvbSBcIi4vcHJpb3JpdHkuanNcIjtcblxuY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnV0dG9uXCIpO1xuY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lRmllbGRcIik7XG5jb25zdCBkZXNjcmlwRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXBGaWVsZFwiKTtcbmNvbnN0IGR1ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVGaWVsZFwiKTtcblxuZnVuY3Rpb24gY2xlYXJGaWVsZHMoKSB7XG5cdGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXh0ZmllbGRcIikpO1xuICAgIGZpZWxkcy5tYXAoZmllbGQgPT4gZmllbGQudmFsdWUgPSBcIlwiKTtcbn1cblxuLy9ET006XG5hZGRJdGVtQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdGxldCBpdGVtID0gbmV3IGxpc3RJdGVtKG5hbWVGaWVsZC52YWx1ZSwgZGVzY3JpcEZpZWxkLnZhbHVlLCBkdWVGaWVsZC52YWx1ZSwgcHJpb3JpdHkpO1xuXHRteUxpc3RzQXJyYXkuZm9yRWFjaChsaXN0T2JqZWN0ID0+IHtcblx0XHRpZiAobGlzdE9iamVjdC5hY3RpdmUgPT0gdHJ1ZSkge1xuXHRcdFx0bGlzdE9iamVjdC5jb250ZW50cy5wdXNoKGl0ZW0pO1xuXHRcdFx0c2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XHRcblx0XHRcdGRpc3BsYXlMaXN0SXRlbShpdGVtKTtcblx0XHRcdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpO1xuXHRcdFx0Y29uZmlnQ2hlY2tCb3hlcyhsaXN0T2JqZWN0KTtcblx0XHR9XG5cdH0pOyAgXHRcbiAgICBjbGVhckZpZWxkcygpOyAgIFxufVxuXG5mdW5jdGlvbiBzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KSB7XG5cdGxldCBudW1iZXIgPSAxO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzW2ldLmluZGV4ID0gbnVtYmVyO1xuXHRcdG51bWJlcisrO1xuXHR9XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCkge1xuXHRsZXQgZGVsZXRlQXJyYXkgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZVwiKV07XG5cdGRlbGV0ZUFycmF5LmZvckVhY2goZGVsZXRlQnV0dG9uID0+IHtcblx0XHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGxpc3RPYmplY3QuY29udGVudHNbaV0uaW5kZXggPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKSB7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5jb250ZW50cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0c2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRicmVhaztcdFx0XHRcdFxuXHRcdFx0XHR9XHRcdFx0XHQgICAgICAgXG5cdFx0XHR9IFxuXHRcdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyBcblx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCk7XG5cdFx0XHRsZXQgbWFpbkxpc3RBcnJheSA9IEFycmF5LmZyb20obWFpbkxpc3QuY2hpbGRyZW4pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7ICAgIFxuXHRcdFx0XHRtYWluTGlzdEFycmF5W2ldLmlkID0gZ2V0SW5kZXgobGlzdE9iamVjdC5jb250ZW50c1tpXSk7XG5cdFx0XHR9ICBcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0fSk7XG5cdH0pO1x0ICAgICAgIFxufVxuXG5mdW5jdGlvbiBjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpIHtcblx0bGV0IGNoZWNrYm94ZXMgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoZWNrYm94XCIpXTtcblx0bGV0IHRhcmdldEl0ZW07XG5cdGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG5cdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG5cdFx0XHRjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuXHRcdFx0dGFyZ2V0SXRlbSA9IGxpc3RPYmplY3QuY29udGVudHMuZmluZChsaXN0SXRlbSA9PiBsaXN0SXRlbS5pbmRleCA9PSBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0XHRpZiAodGFyZ2V0SXRlbS5jb21wbGV0ZSA9PSBmYWxzZSkge1xuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlID0gdHJ1ZTtcdFxuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlVmFsdWUgPSAwO1x0XHRcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHRhcmdldEl0ZW0uY29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlID0gZmFsc2U7XG5cdFx0XHRcdHRhcmdldEl0ZW0uY29tcGxldGVWYWx1ZSA9IDEwO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coe3RhcmdldEl0ZW19KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0SXRlbShpdGVtKSB7XG5cdGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdG5ld0l0ZW0uaWQgPSBnZXRJbmRleChpdGVtKTtcdFxuXHRuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbVwiKTtcblx0YXNzaWduUHJpb3JpdHkobmV3SXRlbSwgaXRlbSk7XG5cdG5ld0l0ZW0uaW5uZXJIVE1MID0gY3JlYXRlSXRlbUNvbnRlbnQoaXRlbSk7XG5cdGlmIChpdGVtLmNvbXBsZXRlID09IHRydWUpIG1hcmtDb21wbGV0ZShuZXdJdGVtKTtcbiAgICBtYWluTGlzdC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcdFxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtQ29udGVudChpdGVtKSB7XG5cdHJldHVybiAnPGRpdiBjbGFzcz1cInRvRG9Cb3hcIj48ZGV0YWlscz48c3VtbWFyeT4nXG5cdCArIGl0ZW0ubmFtZSArICc8L3N1bW1hcnk+PHA+JyArIGl0ZW0uZGVzY3JpcHRpb24gKyBcblx0ICc8L3A+PC9kZXRhaWxzPjxwIGNsYXNzPVwiZHVlRGF0ZVwiPkR1ZSBkYXRlOiAnICsgaXRlbS5kdWVEYXRlICsgXG5cdCAnPC9wPjxsYWJlbCBjbGFzcz1cImNvbXBsZXRlTGFiZWxcIj5Db21wbGV0ZWQ6IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgbmFtZT1cImNvbXBsZXRlZFwiIHZhbHVlPVwiXCI+PC9sYWJlbD48YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+WDwvYnV0dG9uPjwvZGl2Pic7ICAgIFxufVxuXG5mdW5jdGlvbiBtYXJrQ29tcGxldGUoaXRlbUVsZW1lbnQpIHtcblx0aXRlbUVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuXHRpdGVtRWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpXG5cdGxldCBjaGVja2JveCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hcIik7XG5cdGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSk7XHRcbn1cblxuZXhwb3J0IHtjb25maWdDaGVja0JveGVzLCBjb25maWdJdGVtRGVsZXRlQnV0dG9ucywgc2V0SXRlbUluZGljZXMsIGRpc3BsYXlMaXN0SXRlbX07IiwiaW1wb3J0IHtsaXN0RWxlbWVudHMsIG15TGlzdHNBcnJheX0gZnJvbSAnLi9ET00uanMnO1xuXG5sZXQgbGlzdE5hbWVzO1xubGV0IExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNUID0gXCJ0YXNrLm15TGlzdHNBcnJheVwiO1xuXG4vL0RPTTpcbmZ1bmN0aW9uIHNldExpc3ROYW1lcygpIHtcblx0bGlzdE5hbWVzID0gbGlzdEVsZW1lbnRzLm1hcChsaXN0RWxlbWVudCA9PiB7XG5cdFx0aWYgKGxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlICE9IG51bGwpIHtcblx0XHRcdHJldHVybiBsaXN0RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbGlzdE5hbWVzO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG5cdHNldExpc3ROYW1lcygpOyAgIFxuXHRsaXN0TmFtZXMudG9TdHJpbmcoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3ROYW1lczJcIiwgbGlzdE5hbWVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCwgSlNPTi5zdHJpbmdpZnkobXlMaXN0c0FycmF5KSk7XG5cdGNvbnNvbGUubG9nKFwicG9wdWxhdGVkIVwiKTtcdFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBwb3B1bGF0ZVN0b3JhZ2UpO1xuXG5leHBvcnQge3BvcHVsYXRlU3RvcmFnZSwgbGlzdE5hbWVzLCBzZXRMaXN0TmFtZXN9OyIsImltcG9ydCB7bXlMaXN0c0FycmF5fSBmcm9tIFwiLi9ET00uanNcIjtcblxuZnVuY3Rpb24gbGlzdChuYW1lKSB7XG5cdHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb250ZW50cyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7ICAgXG4gICAgbXlMaXN0c0FycmF5LnB1c2godGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCB7bGlzdH07IiwiZnVuY3Rpb24gbGlzdEl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdHRoaXMubmFtZSA9IG5hbWU7XG5cdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcdFxuXHR0aGlzLmNvbXBsZXRlVmFsdWUgPSAxMDtcblx0cmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4KGxpc3RJdGVtT2JqZWN0KSB7XG5cdHJldHVybiBsaXN0SXRlbU9iamVjdC5pbmRleDtcbn1cblxuZXhwb3J0IHtsaXN0SXRlbSwgZ2V0SW5kZXh9OyIsImltcG9ydCB7bGlzdFRpdGxlfSBmcm9tICcuL0RPTS5qcyc7XG5cbmNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbmNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Cb3hcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0cy1zaWRlYmFyXCIpO1xuY29uc3QgYWRkSXRlbUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSXRlbUJveFwiKTtcbmNvbnN0IHdpZHRoVHJpZ2dlciA9IHdpbmRvdy5tYXRjaE1lZGlhKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweClcIik7XG5jb25zdCBzb3J0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0Qm94XCIpO1xuXG5sZXQgdmlld0xpc3RzQnV0dG9uO1xubGV0IG9wZW5BZGRJdGVtQm94QnV0dG9uO1xubGV0IG92ZXJsYXk7XG5sZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcbmNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG5mdW5jdGlvbiBhZGRNb2JpbGVDbGFzcygpIHtcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1vYmlsZUNsYXNzKCkge1xuICAgIG1haW5Cb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtc2xpZGVcIik7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vYmlsZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgaW5uZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVmlldyBMaXN0c1wiO1xuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG8gSXRlbVwiXG4gICAgaW5uZXJOYXYuaWQgPSBcImlubmVyTmF2XCI7ICAgIFxuICAgIHZpZXdMaXN0c0J1dHRvbi5jbGFzc05hbWUgPSBcIm1vYmlsZS1idXR0b25cIjsgIFxuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLmNsYXNzTmFtZSA9IFwibW9iaWxlLWJ1dHRvblwiOyBcbiAgICBpbm5lck5hdi5hcHBlbmRDaGlsZCh2aWV3TGlzdHNCdXR0b24pO1xuICAgIGlubmVyTmF2LmFwcGVuZENoaWxkKG9wZW5BZGRJdGVtQm94QnV0dG9uKTtcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZEl0ZW1Cb3gpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdmlld0xpc3RzKTtcbiAgICByZXR1cm4gaW5uZXJOYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcE5hdkJhcigpIHtcbiAgICBjb25zdCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvcE5hdkJhci5pZCA9IFwidG9wTmF2QmFyXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3BOYXZCYXIpO1xuICAgIHRvcE5hdkJhci5hcHBlbmRDaGlsZChtYWluVGl0bGUpOyAgICAgICBcbiAgICB0b3BOYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTW9iaWxlQnV0dG9ucygpKTsgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhvdmVybGF5KSkgcmV0dXJuO1xuICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgb3ZlcmxheS5pZCA9IFwib3ZlcmxheVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZE1vYmlsZVN0eWxlcyh4KSB7XG4gICAgaWYgKHgubWF0Y2hlcykge1xuICAgICAgICBhZGRNb2JpbGVDbGFzcygpOyAgICAgICBcbiAgICAgICAgY3JlYXRlVG9wTmF2QmFyKCk7ICAgICAgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlTW9iaWxlQ2xhc3MoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b3BOYXZCYXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShtYWluVGl0bGUsIHNpZGViYXIpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhvdmVybGF5KSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhjbG9zZUJ1dHRvbikpIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2aWV3TGlzdHMoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTsgICAgXG4gICAgaWYgKCFzaWRlYmFyLmNvbnRhaW5zKGNsb3NlQnV0dG9uKSkgc2lkZWJhci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAoc2lkZWJhcikpO1xuICAgIGNyZWF0ZU92ZXJsYXkoKTtcbn1cblxuZnVuY3Rpb24gb3BlbkFkZEl0ZW1Cb3goKSB7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICBpZiAoIWFkZEl0ZW1Cb3guY29udGFpbnMoY2xvc2VCdXR0b24pKSBhZGRJdGVtQm94LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTsgICAgXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAoYWRkSXRlbUJveCkpO1xuICAgIGNyZWF0ZU92ZXJsYXkoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG92ZXJsYXkpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgfVxufVxuXG5leHBvcnQge2FkZE1vYmlsZVN0eWxlcywgd2lkdGhUcmlnZ2VyfTsiLCJjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eVwiKSk7XG5sZXQgcHJpb3JpdHk7XG5cbnByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoXCJjaGVja2VkXCIpKSB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfVxuICAgXHRidXR0b24ub25mb2N1cyA9ICgpID0+IHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcblxuXHR9OyAgICBcblx0YnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG5cdH07XG59KTtcblxuZnVuY3Rpb24gYXNzaWduUHJpb3JpdHkoaXRlbUVsZW1lbnQsIGl0ZW1PYmplY3QpIHtcblx0c3dpdGNoKGl0ZW1PYmplY3QucHJpb3JpdHkpIHtcblx0XHRjYXNlIFwiaGlnaFwiOiBcblx0XHRpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcblx0XHRpdGVtT2JqZWN0LnZhbHVlID0gMTA7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIm1lZGl1bVwiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG5cdFx0aXRlbU9iamVjdC52YWx1ZSA9IDIwO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJsb3dcIjpcblx0XHRpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuXHRcdGl0ZW1PYmplY3QudmFsdWUgPSAzMDtcblx0XHRicmVhaztcblx0fVxufVxuXG5leHBvcnQge2Fzc2lnblByaW9yaXR5LCBwcmlvcml0eX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9ET00uanMnO1xuaW1wb3J0ICcuL3RvRG8uY3NzJztcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9