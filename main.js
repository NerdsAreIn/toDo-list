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
let viewListsButton;
let openAddItemBoxButton;

function addMobileClass() {
    mainBox.classList.add("mobile");
    sidebar.classList.add("mobile-slide");
    addItemBox.classList.add("mobile-slide");
    sortBox.classList.add("mobile");
    document.body.classList.add("mobile-slide");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    sidebar.classList.remove("mobile-slide");
    addItemBox.classList.remove("mobile-slide");
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
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);
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
    }
}

let closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "Close";

function createCloseButton(popup) {
    if (popup.contains(closeButton)) return;
    else return closeButton;    
}

function viewLists() {
    sidebar.classList.add("visible");    
    sidebar.appendChild(createCloseButton(sidebar));
    closeButton.addEventListener("click", () => closePopup(sidebar));
    createOverlay();
}

function closePopup(popup) {
    popup.classList.remove("visible");
    document.body.removeChild(overlay);
}

function openAddItemBox() {
    addItemBox.classList.add("visible");
    addItemBox.appendChild(createCloseButton(addItemBox));    
    closeButton.addEventListener("click", () => closePopup(addItemBox));
    createOverlay();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFB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O1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG8uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG8uY3NzPzM4MzkiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9Eb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21lZGlhLXF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbndpZHRoOiAxMDB2dztcXG5mb250LXNpemU6IDE3cHg7XFxuLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxuLS12YXJpYWJsZUhlaWdodDogbWF4KDE1dmgsIDEyNXB4KTtcXG4tLW15WWVsbG93OiBoc2woNjAsIDEwMCUsIDg1JSk7XFxufVxcbioge1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbnBhZGRpbmc6IDA7XFxubWFyZ2luOiA1cHg7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogYXV0bztcXG5vdmVyZmxvdzogYXV0bztcXG56LWluZGV4OiAwO1xcbi8qYm9yZGVyOiAycHggc29saWQgcmViZWNjYXB1cnBsZTsqL1xcbn1cXG5oMSB7XFxubWFyZ2luOiAxNXB4IGF1dG8gNDBweDtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMnJlbTtcXG56LWluZGV4OiAzO1xcbn1cXG5oMiB7XFxuY29sb3I6IDtcXG5mb250LXNpemU6IDEuNnJlbTtcXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xcbnotaW5kZXg6IDE7XFxufVxcbmgzIHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS40cmVtO1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbmg0IHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMTVweCAwIDEwcHg7XFxufVxcbiNtYWluQm94IHtcXG53aWR0aDogNDB2dztcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxubGVmdDogMjJ2dztcXG5tYXJnaW4tbGVmdDogM3Z3O1xcbi8qYm9yZGVyOiAycHggc29saWQgc2xhdGVibHVlOyovXFxufVxcbiNtYWlubGlzdCB7XFxuYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG5taW4taGVpZ2h0OiAyMHB4O1xcbn1cXG4jbWFpbmxpc3QgLmxpc3RJdGVtIHtcXG5ib3JkZXItYm90dG9tOiA2cHggZG91YmxlIGJsdWU7XFxubWFyZ2luOiAwO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxubGlzdC1zdHlsZS10eXBlOiBBcmFiaWM7XFxucGFkZGluZzogNHB4IDJweCAxcHggM3B4O1xcbn1cXG4udG9Eb0JveCB7XFxucG9zaXRpb246IHJlbGF0aXZlOyAgICBcXG5mb250LXNpemU6IDFyZW07XFxufVxcbnN1bW1hcnkge1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbm1hcmdpbi1ib3R0b206IDdweDtcXG5mb250LXNpemU6IDEuMXJlbTtcXG50cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMXM7XFxufVxcbnN1bW1hcnkuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuZGV0YWlscyBwLmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayA0cHg7XFxufVxcbi5kdWVEYXRlIHtcXG5tYXJnaW46IDNweCAwO1xcbn1cXG4uY29tcGxldGVMYWJlbCB7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogLTNweDtcXG5yaWdodDogMHB4O1xcbmZvbnQ6IGluaGVyaXQ7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbmhlaWdodDogMTZweDtcXG53aWR0aDogMTZweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5tYXJnaW46IDVweCAwIDA7XFxufVxcbi5zbWFsbGVyLWxlZnQtbWFyZ2luIHtcXG5tYXJnaW4tbGVmdDogNTclO1xcbn1cXG4jc29ydEJveCB7XFxucG9zaXRpb246IHN0aWNreTtcXG5ib3R0b206IDc1dmg7XFxubGVmdDogNzB2dztcXG53aWR0aDogMjV2dztcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuLypib3JkZXI6IDJweCBzb2xpZCByZWQ7Ki9cXG59XFxuI3NvcnRCb3ggbGFiZWwge1xcbm1hcmdpbi1yaWdodDogMTBweDtcXG5mb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi8qICFGT1IgU09NRSBSRUFTT04sIEkgQ0FOJ1QgUkVNT1ZFIFRIRSBBVVRPLVNUWUxJTkcgR1JFWS9CTFVFIEJBQ0tHUk9VTkQgV0hFTiBIT1ZFUklORy4uLiEgKi9cXG4jc29ydEJveCBvcHRpb246aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbm9wdGlvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuc2VsZWN0IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmhlaWdodDogMjJweDtcXG5wYWRkaW5nOiAzcHg7XFxufVxcbiNhZGRJdGVtQm94IHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbmxlZnQ6IDY4JTtcXG5oZWlnaHQ6IDUwdmg7XFxuYm90dG9tOiAyMHZoO1xcbndpZHRoOiAzMCU7XFxuY29sb3I6IGJsdWU7XFxubWFyZ2luLXRvcDogMTBweDtcXG59XFxuZmllbGRzZXQge1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubGVnZW5kIHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDAgYXV0byAxNXB4O1xcbn1cXG5pbnB1dCB7XFxubWFyZ2luOiA2cHggMDtcXG5mb250LXNpemU6IDAuODVyZW07XFxucGFkZGluZzogM3B4IDJweDtcXG59XFxuLmNvbG91ci1jb2RlIHtcXG53aWR0aDogMTNweDtcXG5oZWlnaHQ6IDEzcHg7XFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbm1hcmdpbi1sZWZ0OiAxNXB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jcmVkLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuI29yYW5nZS1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuI2dyZWVuLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG5wIHtcXG5tYXJnaW46IDEwcHggMDtcXG5jb2xvcjogYmxhY2s7XFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uaGlnaC1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4ubG93LXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbiNsaXN0cy1zaWRlYmFyIHtcXG5ib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibHVlO1xcbmhlaWdodDogODB2aDtcXG53aWR0aDogMjB2dztcXG5wb3NpdGlvbjogZml4ZWQ7XFxubGVmdDogNXB4O1xcbmJvdHRvbTogMTBweDtcXG5vdmVyZmxvdzogYXV0bztcXG59XFxuI215bGlzdHMge1xcbmxpc3Qtc3R5bGU6IHNxdWFyZSBpbnNpZGU7XFxudGV4dC1hbGlnbjogbGVmdDtcXG59XFxuI215bGlzdHMgbGkge1xcbm1hcmdpbjogMTJweCA1cHggMTJweCAyNXB4O1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG53aWR0aDogNzAlO1xcbmNvbG9yOiBibHVlO1xcbn1cXG5hOmFjdGl2ZSwgYTpmb2N1cywgbGk6Zm9jdXMge1xcbmZvbnQtc2l6ZTogMS4zcmVtO1xcbmZvbnQtd2VpZ2h0OiBib2xkOyAgICBcXG59XFxuYSwgYTp2aXNpdGVkLCBhOmFjdGl2ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcbiNhZGRMaXN0QnV0dG9uLCAjYWRkQnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbmNvbG9yOiB3aGl0ZTtcXG5tYXJnaW46IDEycHggMDtcXG5wYWRkaW5nOiA0cHg7XFxuYm9yZGVyLXJhZGl1czogM3B4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4jbGlzdE5hbWUsICNsaXN0TmFtZTpmb2N1cyB7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbm91dGxpbmU6IG5vbmU7XFxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsdWU7XFxubWFyZ2luOiAxMHB4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uZGVsZXRlIHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnJpZ2h0OiAxcHg7XFxudG9wOiAxcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbmNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDE1cHg7XFxud2lkdGg6IDE1cHg7XFxucGFkZGluZzogMXB4O1xcbmZvbnQ6IGJvbGRlciAxcmVtO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmRlbGV0ZS1saSB7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG53aWR0aDogMTlweDtcXG5oZWlnaHQ6IDE5cHg7XFxuYm9yZGVyOiBub25lO1xcbmZsb2F0OiByaWdodDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5tYXJnaW4tdG9wOiA0cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbmJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuI3RvcE5hdkJhciB7XFxud2lkdGg6IDEwMCU7XFxuYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMDtcXG5oZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0KTtcXG56LWluZGV4OiAzO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teVllbGxvdyk7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNtYWluQm94Lm1vYmlsZSB7XFxud2lkdGg6IDgwdnc7XFxubWFyZ2luOiA1dmggYXV0bztcXG56LWluZGV4OiAxO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5sZWZ0OiAxMHZ3O1xcbnRvcDogbWF4KDI1dmgsIDE5MHB4KTtcXG59XFxuI3NvcnRCb3gubW9iaWxlIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiBtYXgoMjB2aCwgMTUwcHgpO1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5sZWZ0OiAyMHZ3O1xcbnotaW5kZXg6IDE7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbndpZHRoOiA2MHZ3O1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgxOHZoLCAxNTBweCk7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5ib3JkZXI6IDRweCBzb2xpZCBkb2RnZXJibHVlO1xcbnotaW5kZXg6IDM7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5vdmVyZmxvdzogYXV0bztcXG5wYWRkaW5nOiAyMHB4O1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxudmlzaWJpbGl0eTogaGlkZGVuO1xcbnRyYW5zaXRpb246IHZpc2liaWxpdHkgMTAwbXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSB7XFxubGVmdDogLTEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLnZpc2libGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZS52aXNpYmxlIHtcXG5sZWZ0OiAyMHZ3O1xcbnZpc2liaWxpdHk6IHZpc2libGU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiAxMDAlO1xcbnRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSBmaWVsZHNldCB7XFxuYm9yZGVyOiBub25lO1xcbn1cXG4jaW5uZXJOYXYge1xcbndpZHRoOiA4MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogMDtcXG5oZWlnaHQ6IDM3JTtcXG5tYXJnaW46IDAgMTAlO1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbmJvcmRlci10b3A6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4ubW9iaWxlLWJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxud2lkdGg6IDUwJTtcXG5mbG9hdDogbGVmdDtcXG5oZWlnaHQ6IDEwMCU7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5tb2JpbGUtYnV0dG9uOmhvdmVyLCAubW9iaWxlLWJ1dHRvbjphY3RpdmUsIC5tb2JpbGUtYnV0dG9uOmZvY3VzIHtcXG50ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAyNDQsIDI0OCk7XFxufVxcbiNvdmVybGF5IHtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMHZoO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQpIC0gM3B4KTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxuei1pbmRleDogMjtcXG5vcGFjaXR5OiAwLjg7XFxufVxcbi5jbG9zZS1idXR0b24ge1xcbmNvbG9yOiBkb2RnZXJibHVlO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmJvcmRlcjogM3B4IHNvbGlkIGRvZGdlcmJsdWU7XFxuaGVpZ2h0OiA2dmg7XFxud2lkdGg6IDExdnc7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmZvbnQtc2l6ZTogMXJlbTtcXG5tYXJnaW46IDI1cHggYXV0byAxNXB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvRG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxZQUFZO0FBQ1osY0FBYztBQUNkLFVBQVU7QUFDVixtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixPQUFPO0FBQ1AsZUFBZTtBQUNmLFVBQVU7QUFDVjtBQUNBO0FB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VztBQUNYLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixVQUFVO0FBQ1YsV0FBVztBQUNYLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiLGVBQWU7QUFDZixzQ0FBc0M7QUFDdEMsaUNBQWlDO0FBQ2pDLFVBQVU7QUFDVixZQUFZO0FBQ1o7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLFdBQVc7QUFDWCxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixzQkFBc0I7QUFDdEIsZUFBZTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbndpZHRoOiAxMDB2dztcXG5mb250LXNpemU6IDE3cHg7XFxuLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxuLS12YXJpYWJsZUhlaWdodDogbWF4KDE1dmgsIDEyNXB4KTtcXG4tLW15WWVsbG93OiBoc2woNjAsIDEwMCUsIDg1JSk7XFxufVxcbioge1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbnBhZGRpbmc6IDA7XFxubWFyZ2luOiA1cHg7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogYXV0bztcXG5vdmVyZmxvdzogYXV0bztcXG56LWluZGV4OiAwO1xcbi8qYm9yZGVyOiAycHggc29saWQgcmViZWNjYXB1cnBsZTsqL1xcbn1cXG5oMSB7XFxubWFyZ2luOiAxNXB4IGF1dG8gNDBweDtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMnJlbTtcXG56LWluZGV4OiAzO1xcbn1cXG5oMiB7XFxuY29sb3I6IDtcXG5mb250LXNpemU6IDEuNnJlbTtcXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xcbnotaW5kZXg6IDE7XFxufVxcbmgzIHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS40cmVtO1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbmg0IHtcXG5jb2xvcjogO1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMTVweCAwIDEwcHg7XFxufVxcbiNtYWluQm94IHtcXG53aWR0aDogNDB2dztcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxubGVmdDogMjJ2dztcXG5tYXJnaW4tbGVmdDogM3Z3O1xcbi8qYm9yZGVyOiAycHggc29saWQgc2xhdGVibHVlOyovXFxufVxcbiNtYWlubGlzdCB7XFxuYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG5taW4taGVpZ2h0OiAyMHB4O1xcbn1cXG4jbWFpbmxpc3QgLmxpc3RJdGVtIHtcXG5ib3JkZXItYm90dG9tOiA2cHggZG91YmxlIGJsdWU7XFxubWFyZ2luOiAwO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxubGlzdC1zdHlsZS10eXBlOiBBcmFiaWM7XFxucGFkZGluZzogNHB4IDJweCAxcHggM3B4O1xcbn1cXG4udG9Eb0JveCB7XFxucG9zaXRpb246IHJlbGF0aXZlOyAgICBcXG5mb250LXNpemU6IDFyZW07XFxufVxcbnN1bW1hcnkge1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbm1hcmdpbi1ib3R0b206IDdweDtcXG5mb250LXNpemU6IDEuMXJlbTtcXG50cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMXM7XFxufVxcbnN1bW1hcnkuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuZGV0YWlscyBwLmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayA0cHg7XFxufVxcbi5kdWVEYXRlIHtcXG5tYXJnaW46IDNweCAwO1xcbn1cXG4uY29tcGxldGVMYWJlbCB7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogLTNweDtcXG5yaWdodDogMHB4O1xcbmZvbnQ6IGluaGVyaXQ7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbmhlaWdodDogMTZweDtcXG53aWR0aDogMTZweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5tYXJnaW46IDVweCAwIDA7XFxufVxcbi5zbWFsbGVyLWxlZnQtbWFyZ2luIHtcXG5tYXJnaW4tbGVmdDogNTclO1xcbn1cXG4jc29ydEJveCB7XFxucG9zaXRpb246IHN0aWNreTtcXG5ib3R0b206IDc1dmg7XFxubGVmdDogNzB2dztcXG53aWR0aDogMjV2dztcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuLypib3JkZXI6IDJweCBzb2xpZCByZWQ7Ki9cXG59XFxuI3NvcnRCb3ggbGFiZWwge1xcbm1hcmdpbi1yaWdodDogMTBweDtcXG5mb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi8qICFGT1IgU09NRSBSRUFTT04sIEkgQ0FOJ1QgUkVNT1ZFIFRIRSBBVVRPLVNUWUxJTkcgR1JFWS9CTFVFIEJBQ0tHUk9VTkQgV0hFTiBIT1ZFUklORy4uLiEgKi9cXG4jc29ydEJveCBvcHRpb246aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbm9wdGlvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuc2VsZWN0IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmhlaWdodDogMjJweDtcXG5wYWRkaW5nOiAzcHg7XFxufVxcbiNhZGRJdGVtQm94IHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbmxlZnQ6IDY4JTtcXG5oZWlnaHQ6IDUwdmg7XFxuYm90dG9tOiAyMHZoO1xcbndpZHRoOiAzMCU7XFxuY29sb3I6IGJsdWU7XFxubWFyZ2luLXRvcDogMTBweDtcXG59XFxuZmllbGRzZXQge1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubGVnZW5kIHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDAgYXV0byAxNXB4O1xcbn1cXG5pbnB1dCB7XFxubWFyZ2luOiA2cHggMDtcXG5mb250LXNpemU6IDAuODVyZW07XFxucGFkZGluZzogM3B4IDJweDtcXG59XFxuLmNvbG91ci1jb2RlIHtcXG53aWR0aDogMTNweDtcXG5oZWlnaHQ6IDEzcHg7XFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbm1hcmdpbi1sZWZ0OiAxNXB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jcmVkLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuI29yYW5nZS1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuI2dyZWVuLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG5wIHtcXG5tYXJnaW46IDEwcHggMDtcXG5jb2xvcjogYmxhY2s7XFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uaGlnaC1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4ubG93LXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbiNsaXN0cy1zaWRlYmFyIHtcXG5ib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibHVlO1xcbmhlaWdodDogODB2aDtcXG53aWR0aDogMjB2dztcXG5wb3NpdGlvbjogZml4ZWQ7XFxubGVmdDogNXB4O1xcbmJvdHRvbTogMTBweDtcXG5vdmVyZmxvdzogYXV0bztcXG59XFxuI215bGlzdHMge1xcbmxpc3Qtc3R5bGU6IHNxdWFyZSBpbnNpZGU7XFxudGV4dC1hbGlnbjogbGVmdDtcXG59XFxuI215bGlzdHMgbGkge1xcbm1hcmdpbjogMTJweCA1cHggMTJweCAyNXB4O1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG53aWR0aDogNzAlO1xcbmNvbG9yOiBibHVlO1xcbn1cXG5hOmFjdGl2ZSwgYTpmb2N1cywgbGk6Zm9jdXMge1xcbmZvbnQtc2l6ZTogMS4zcmVtO1xcbmZvbnQtd2VpZ2h0OiBib2xkOyAgICBcXG59XFxuYSwgYTp2aXNpdGVkLCBhOmFjdGl2ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcbiNhZGRMaXN0QnV0dG9uLCAjYWRkQnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbmNvbG9yOiB3aGl0ZTtcXG5tYXJnaW46IDEycHggMDtcXG5wYWRkaW5nOiA0cHg7XFxuYm9yZGVyLXJhZGl1czogM3B4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4jbGlzdE5hbWUsICNsaXN0TmFtZTpmb2N1cyB7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbm91dGxpbmU6IG5vbmU7XFxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsdWU7XFxubWFyZ2luOiAxMHB4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uZGVsZXRlIHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnJpZ2h0OiAxcHg7XFxudG9wOiAxcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbmNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDE1cHg7XFxud2lkdGg6IDE1cHg7XFxucGFkZGluZzogMXB4O1xcbmZvbnQ6IGJvbGRlciAxcmVtO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmRlbGV0ZS1saSB7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG53aWR0aDogMTlweDtcXG5oZWlnaHQ6IDE5cHg7XFxuYm9yZGVyOiBub25lO1xcbmZsb2F0OiByaWdodDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5tYXJnaW4tdG9wOiA0cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbmJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuI3RvcE5hdkJhciB7XFxud2lkdGg6IDEwMCU7XFxuYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMDtcXG5oZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0KTtcXG56LWluZGV4OiAzO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teVllbGxvdyk7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNtYWluQm94Lm1vYmlsZSB7XFxud2lkdGg6IDgwdnc7XFxubWFyZ2luOiA1dmggYXV0bztcXG56LWluZGV4OiAxO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5sZWZ0OiAxMHZ3O1xcbnRvcDogbWF4KDI1dmgsIDE5MHB4KTtcXG59XFxuI3NvcnRCb3gubW9iaWxlIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiBtYXgoMjB2aCwgMTUwcHgpO1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5sZWZ0OiAyMHZ3O1xcbnotaW5kZXg6IDE7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbndpZHRoOiA2MHZ3O1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgxOHZoLCAxNTBweCk7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5ib3JkZXI6IDRweCBzb2xpZCBkb2RnZXJibHVlO1xcbnotaW5kZXg6IDM7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5vdmVyZmxvdzogYXV0bztcXG5wYWRkaW5nOiAyMHB4O1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxudmlzaWJpbGl0eTogaGlkZGVuO1xcbnRyYW5zaXRpb246IHZpc2liaWxpdHkgMTAwbXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSB7XFxubGVmdDogLTEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLnZpc2libGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZS52aXNpYmxlIHtcXG5sZWZ0OiAyMHZ3O1xcbnZpc2liaWxpdHk6IHZpc2libGU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiAxMDAlO1xcbnRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSBmaWVsZHNldCB7XFxuYm9yZGVyOiBub25lO1xcbn1cXG4jaW5uZXJOYXYge1xcbndpZHRoOiA4MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogMDtcXG5oZWlnaHQ6IDM3JTtcXG5tYXJnaW46IDAgMTAlO1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbmJvcmRlci10b3A6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4ubW9iaWxlLWJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxud2lkdGg6IDUwJTtcXG5mbG9hdDogbGVmdDtcXG5oZWlnaHQ6IDEwMCU7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5tb2JpbGUtYnV0dG9uOmhvdmVyLCAubW9iaWxlLWJ1dHRvbjphY3RpdmUsIC5tb2JpbGUtYnV0dG9uOmZvY3VzIHtcXG50ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAyNDQsIDI0OCk7XFxufVxcbiNvdmVybGF5IHtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMHZoO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQpIC0gM3B4KTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxuei1pbmRleDogMjtcXG5vcGFjaXR5OiAwLjg7XFxufVxcbi5jbG9zZS1idXR0b24ge1xcbmNvbG9yOiBkb2RnZXJibHVlO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmJvcmRlcjogM3B4IHNvbGlkIGRvZGdlcmJsdWU7XFxuaGVpZ2h0OiA2dmg7XFxud2lkdGg6IDExdnc7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmZvbnQtc2l6ZTogMXJlbTtcXG5tYXJnaW46IDI1cHggYXV0byAxNXB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b0RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9Eby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtsaXN0SXRlbX0gZnJvbSAnLi9tYW5hZ2VUb0RvSXRlbXMuanMnO1xuaW1wb3J0IHtsaXN0fSBmcm9tICcuL21hbmFnZUxpc3RzLmpzJztcbmltcG9ydCB7YWRkTW9iaWxlU3R5bGVzLCB3aWR0aFRyaWdnZXJ9IGZyb20gJy4vbWVkaWEtcXVlcmllcy5qcyc7XG5cbmNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJ1dHRvblwiKTtcbmNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUZpZWxkXCIpO1xuY29uc3QgZGVzY3JpcEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwRmllbGRcIik7XG5jb25zdCBkdWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRmllbGRcIik7XG5jb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eVwiKSk7XG5cbmxldCBMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCA9IFwidGFzay5teUxpc3RzQXJyYXlcIjtcbmxldCBteUxpc3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNUKSkgfHwgW107XG5cbmNvbnN0IG1haW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWlubGlzdFwiKTtcblxuLy9saXN0IGVsZW1lbnQgb2JqZWN0OlxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTGlzdEJ1dHRvblwiKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdE5hbWVcIik7XG5cbmNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC10aXRsZVwiKTtcblxuLy9PTDpcbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWxpc3RzXCIpO1xubGV0IGxpc3RFbGVtZW50cyA9IFttYWluXTtcbmxldCBsaXN0TmFtZXM7XG5sZXQgcHJpb3JpdHk7XHRcdFxuXG4vL25vbi1ET00/OlxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuXHRzZXRMaXN0TmFtZXMoKTsgICBcblx0bGlzdE5hbWVzLnRvU3RyaW5nKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0TmFtZXMyXCIsIGxpc3ROYW1lcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QsIEpTT04uc3RyaW5naWZ5KG15TGlzdHNBcnJheSkpO1xuXHRjb25zb2xlLmxvZyhcInBvcHVsYXRlZCFcIik7XHRcbn1cbi8vRE9NOlxuZnVuY3Rpb24gc2V0TGlzdE5hbWVzKCkge1xuXHRsaXN0TmFtZXMgPSBsaXN0RWxlbWVudHMubWFwKGxpc3RFbGVtZW50ID0+IHtcblx0XHRpZiAobGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBsaXN0TmFtZXM7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIHBvcHVsYXRlU3RvcmFnZSk7XG4vL2xvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vL0RPTTpcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKHtteUxpc3RzQXJyYXl9KTtcblx0aWYgKG15TGlzdHNBcnJheS5sZW5ndGggPT0gMCkge1xuXHRcdGNvbnN0IGZpcnN0ID0gbmV3IGxpc3QoXCJNYWluXCIpO1xuXHRcdGZpcnN0LmFjdGl2ZSA9IHRydWU7XHRcblx0fVx0XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdE5hbWVzMlwiKSkge1xuXHRcdC8vIHdpbGwgYWxyZWFkeSBpbmNsdWRlIFwibWFpblwiIGFzIGZpcnN0IGl0ZW06XG5cdFx0bGlzdE5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0TmFtZXMyXCIpLnNwbGl0KFwiLFwiKTtcblx0fVxuXHQvLyBmaXJzdCB0aW1lIGFwcCBpcyB1c2VkOlxuXHRlbHNlIGxpc3ROYW1lcyA9IFtcIk1haW5cIl07XG5cdGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpO1x0XG5cdGxvYWREZWZhdWx0TGlzdCgpO1xuXHRhZGRNb2JpbGVTdHlsZXMod2lkdGhUcmlnZ2VyKTtcbn07XG53aWR0aFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhZGRNb2JpbGVTdHlsZXMpO1xuXG4vL0RPTTpcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpIHtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHRcbiAgICBcdGxpc3RFbGVtZW50LmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPicgKyBsaXN0TmFtZXNbaV0gKyAnPC9hPjxidXR0b24gY2xhc3M9XCJkZWxldGUtbGlcIj5YPC9idXR0b24+Jztcblx0XHRsaXN0RWxlbWVudC5pZCA9IGxpc3ROYW1lc1tpXTsgICAgIFxuXHRcdGxpc3RFbGVtZW50cy5wdXNoKGxpc3RFbGVtZW50KTtcblx0XHRsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG5cdFx0Y29uZmlnTGlzdERlbGV0ZUJ1dHRvbnMoKTtcblx0XHRzZXRMaXN0RXZlbnRIYW5kbGVycygpO1xuXHR9XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gY2xlYXJMaXN0T2ZMaXN0cygpIHtcblx0d2hpbGUgKGxpc3RPZkxpc3RzLmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdH1cblx0cmV0dXJuO1xufVxuLy9ET006XG5mdW5jdGlvbiBjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpIHtcblx0bGV0IGRlbGV0ZUFycmF5MiA9IFsuLi5saXN0T2ZMaXN0cy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLWxpXCIpXTtcblx0ZGVsZXRlQXJyYXkyLmZvckVhY2goZGVsZXRlQnV0dG9uID0+IHtcblx0XHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0XHRsZXQgdG9CZURlbGV0ZWQgPSBsaXN0RWxlbWVudHMuZmluZEluZGV4KGxpc3RFbGVtZW50ID0+IGxpc3RFbGVtZW50LmlkID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuXHRcdFx0aWYgKHRvQmVEZWxldGVkID4gMCkge1xuXHRcdFx0XHRsaXN0RWxlbWVudHMuc3BsaWNlKHRvQmVEZWxldGVkLCAxKTtcblx0XHRcdFx0bGV0IGluZGV4ID0gbXlMaXN0c0FycmF5LmZpbmRJbmRleCAobGlzdE9iamVjdCA9PiBsaXN0T2JqZWN0Lm5hbWUgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0XHRcdG15TGlzdHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRsaXN0TmFtZXMgPSBzZXRMaXN0TmFtZXMoKTtcblx0XHRcdFx0bGlzdEVsZW1lbnRzID0gW21haW5dO1xuXHRcdFx0XHRjbGVhckxpc3RPZkxpc3RzKCk7XG5cdFx0XHRcdGxpc3RPZkxpc3RzLmFwcGVuZENoaWxkKG1haW4pO1xuXHRcdFx0XHRjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKTtcdFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy9ET006XG5mdW5jdGlvbiBsb2FkRGVmYXVsdExpc3QoKSB7XG5cdG15TGlzdHNBcnJheVswXS5hY3RpdmUgPSB0cnVlO1xuXHRzZXRJdGVtSW5kaWNlcyhteUxpc3RzQXJyYXlbMF0pO1x0XG5cdG15TGlzdHNBcnJheVswXS5jb250ZW50cy5mb3JFYWNoKGxpc3RJdGVtT2JqZWN0ID0+IHtcblx0XHRkaXNwbGF5TGlzdEl0ZW0obGlzdEl0ZW1PYmplY3QpO1xuXHR9KTtcblx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobXlMaXN0c0FycmF5WzBdKTtcblx0Y29uZmlnQ2hlY2tCb3hlcyhteUxpc3RzQXJyYXlbMF0pO1xufVxuXG4vL25vbi1ET006XG5mdW5jdGlvbiBzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KSB7XG5cdGxldCBudW1iZXIgPSAxO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzW2ldLmluZGV4ID0gbnVtYmVyO1xuXHRcdG51bWJlcisrO1xuXHR9XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCkge1xuXHRsZXQgZGVsZXRlQXJyYXkgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZVwiKV07XG5cdGRlbGV0ZUFycmF5LmZvckVhY2goZGVsZXRlQnV0dG9uID0+IHtcblx0XHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGxpc3RPYmplY3QuY29udGVudHNbaV0uaW5kZXggPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKSB7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5jb250ZW50cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0c2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRicmVhaztcdFx0XHRcdFxuXHRcdFx0XHR9XHRcdFx0XHQgICAgICAgXG5cdFx0XHR9IFxuXHRcdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyBcblx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCk7XG5cdFx0XHRsZXQgbWFpbkxpc3RBcnJheSA9IEFycmF5LmZyb20obWFpbkxpc3QuY2hpbGRyZW4pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7ICAgIFxuXHRcdFx0XHRtYWluTGlzdEFycmF5W2ldLmlkID0gZ2V0SW5kZXgobGlzdE9iamVjdC5jb250ZW50c1tpXSk7XG5cdFx0XHR9ICBcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0fSk7XG5cdH0pO1x0ICAgICAgIFxufVxuXG5mdW5jdGlvbiBjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpIHtcblx0bGV0IGNoZWNrYm94ZXMgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoZWNrYm94XCIpXTtcblx0bGV0IHRhcmdldEl0ZW07XG5cdGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG5cdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG5cdFx0XHRjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuXHRcdFx0dGFyZ2V0SXRlbSA9IGxpc3RPYmplY3QuY29udGVudHMuZmluZChsaXN0SXRlbSA9PiBsaXN0SXRlbS5pbmRleCA9PSBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0XHRpZiAodGFyZ2V0SXRlbS5jb21wbGV0ZSA9PSBmYWxzZSkge1xuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlID0gdHJ1ZTtcdFxuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlVmFsdWUgPSAwO1x0XHRcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHRhcmdldEl0ZW0uY29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlID0gZmFsc2U7XG5cdFx0XHRcdHRhcmdldEl0ZW0uY29tcGxldGVWYWx1ZSA9IDEwO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coe3RhcmdldEl0ZW19KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbi8vRE9NOlxucHJpb3JpdHlCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZShcImNoZWNrZWRcIikpIHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcbiAgICB9XG4gICBcdGJ1dHRvbi5vbmZvY3VzID0gKCkgPT4ge1xuXHRcdHByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuXG5cdH07ICAgIFxuXHRidXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcblx0fTtcbn0pO1xuXG4vL0RPTTpcbmZ1bmN0aW9uIGNsZWFyRmllbGRzKCkge1xuXHRjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGV4dGZpZWxkXCIpKTtcbiAgICBmaWVsZHMubWFwKGZpZWxkID0+IGZpZWxkLnZhbHVlID0gXCJcIik7XG59XG5cbi8vRE9NOlxuYWRkSXRlbUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRsZXQgaXRlbSA9IG5ldyBsaXN0SXRlbShuYW1lRmllbGQudmFsdWUsIGRlc2NyaXBGaWVsZC52YWx1ZSwgZHVlRmllbGQudmFsdWUsIHByaW9yaXR5KTtcblx0bXlMaXN0c0FycmF5LmZvckVhY2gobGlzdE9iamVjdCA9PiB7XG5cdFx0aWYgKGxpc3RPYmplY3QuYWN0aXZlID09IHRydWUpIHtcblx0XHRcdGxpc3RPYmplY3QuY29udGVudHMucHVzaChpdGVtKTtcblx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1x0XG5cdFx0XHRkaXNwbGF5TGlzdEl0ZW0oaXRlbSk7XG5cdFx0XHRjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KTtcblx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCk7XG5cdFx0fVxuXHR9KTsgIFx0XG4gICAgY2xlYXJGaWVsZHMoKTsgICBcbn1cblxuLy9ET006XG5hZGRMaXN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0xpc3QgPSBuZXcgbGlzdChuYW1lSW5wdXQudmFsdWUpO1xuICAgIGRpc3BsYXlMaXN0RWxlbWVudChuZXdMaXN0KTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiXG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gZGlzcGxheUxpc3RFbGVtZW50KGxpc3QpIHtcblx0Y29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHRcbiAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICsgbGlzdC5uYW1lICsgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7ICBcblx0bGlzdEVsZW1lbnQuaWQgPSBsaXN0Lm5hbWU7ICAgXG5cdGxpc3RFbGVtZW50cy5wdXNoKGxpc3RFbGVtZW50KTtcbiAgICBsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG5cdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XG4gICAgc2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcbn1cblxuLy9ET006XG5mdW5jdGlvbiBzZXRMaXN0RXZlbnRIYW5kbGVycygpIHtcblx0bGlzdEVsZW1lbnRzLmZvckVhY2gobGlzdEVsZW1lbnQgPT4ge1x0XHRcblx0XHRsaXN0RWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1x0XHRcblx0XHRcdG15TGlzdHNBcnJheS5mb3JFYWNoKGxpc3RPYmplY3QgPT4ge1xuXHRcdFx0XHRpZiAobGlzdE9iamVjdC5uYW1lID09IGxpc3RFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCkge1x0XG5cdFx0XHRcdFx0bWFpbkxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0XHRsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0T2JqZWN0Lm5hbWU7XG5cdFx0XHRcdFx0c2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5jb250ZW50cy5mb3JFYWNoKGxpc3RJdGVtT2JqZWN0ID0+IHtcblx0XHRcdFx0XHRcdGRpc3BsYXlMaXN0SXRlbShsaXN0SXRlbU9iamVjdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCk7XG5cdFx0XHRcdFx0Y29uZmlnQ2hlY2tCb3hlcyhsaXN0T2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlICB7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XHRcdFx0XG5cdFx0fTtcblx0fSk7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRwb3B1bGF0ZVN0b3JhZ2UoKTtcdFx0XG59XG5cbi8vbm9uLURPTT86XG5mdW5jdGlvbiBnZXRJbmRleChsaXN0SXRlbU9iamVjdCkge1xuXHRyZXR1cm4gbGlzdEl0ZW1PYmplY3QuaW5kZXg7XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gY3JlYXRlSXRlbUNvbnRlbnQoaXRlbSkge1xuXHRyZXR1cm4gJzxkaXYgY2xhc3M9XCJ0b0RvQm94XCI+PGRldGFpbHM+PHN1bW1hcnk+J1xuXHQgKyBpdGVtLm5hbWUgKyAnPC9zdW1tYXJ5PjxwPicgKyBpdGVtLmRlc2NyaXB0aW9uICsgXG5cdCAnPC9wPjwvZGV0YWlscz48cCBjbGFzcz1cImR1ZURhdGVcIj5EdWUgZGF0ZTogJyArIGl0ZW0uZHVlRGF0ZSArIFxuXHQgJzwvcD48bGFiZWwgY2xhc3M9XCJjb21wbGV0ZUxhYmVsXCI+Q29tcGxldGVkOiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZWRcIiB2YWx1ZT1cIlwiPjwvbGFiZWw+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPlg8L2J1dHRvbj48L2Rpdj4nOyAgICBcbn1cblxuLy9ET006XG5mdW5jdGlvbiBtYXJrQ29tcGxldGUoaXRlbUVsZW1lbnQpIHtcblx0aXRlbUVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuXHRpdGVtRWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpXG5cdGxldCBjaGVja2JveCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hcIik7XG5cdGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSk7XHRcbn1cblxuLy9ET006XG5mdW5jdGlvbiBhc3NpZ25Qcmlvcml0eShpdGVtRWxlbWVudCwgaXRlbU9iamVjdCkge1xuXHRzd2l0Y2goaXRlbU9iamVjdC5wcmlvcml0eSkge1xuXHRcdGNhc2UgXCJoaWdoXCI6IFxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuXHRcdGl0ZW1PYmplY3QudmFsdWUgPSAxMDtcblx0XHRicmVhaztcblx0XHRjYXNlIFwibWVkaXVtXCI6XG5cdFx0aXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcblx0XHRpdGVtT2JqZWN0LnZhbHVlID0gMjA7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImxvd1wiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIik7XG5cdFx0aXRlbU9iamVjdC52YWx1ZSA9IDMwO1xuXHRcdGJyZWFrO1xuXHR9XG59XG4vL0RPTTpcbmZ1bmN0aW9uIGRpc3BsYXlMaXN0SXRlbShpdGVtKSB7XG5cdGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdG5ld0l0ZW0uaWQgPSBnZXRJbmRleChpdGVtKTtcdFxuXHRuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbVwiKTtcblx0YXNzaWduUHJpb3JpdHkobmV3SXRlbSwgaXRlbSk7XG5cdG5ld0l0ZW0uaW5uZXJIVE1MID0gY3JlYXRlSXRlbUNvbnRlbnQoaXRlbSk7XG5cdGlmIChpdGVtLmNvbXBsZXRlID09IHRydWUpIG1hcmtDb21wbGV0ZShuZXdJdGVtKTtcbiAgICBtYWluTGlzdC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcdFxufVxuXG5leHBvcnQge2Rpc3BsYXlMaXN0SXRlbSwgbXlMaXN0c0FycmF5LCBsaXN0VGl0bGV9O1xuXG5jb25zdCBzb3J0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0Qm94XCIpO1xuXG4vL0RPTTpcbnNvcnRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGdldE9yZGVyKGUpIHtcblx0bGV0IGFjdGl2ZUxpc3QgPSBteUxpc3RzQXJyYXkuZmluZChsaXN0ID0+IGxpc3QuYWN0aXZlID09IHRydWUpO1xuXHRzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG5cdFx0Y2FzZSBcImhpZ2hQcmlvcml0eVwiOlxuXHRcdGdldEhpZ2hQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwibG93UHJpb3JpdHlcIjpcblx0XHRnZXRMb3dQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwiaW5jb21wbGV0ZUZpcnN0XCI6XG5cdFx0Z2V0SW5jb21wbGV0ZUZpcnN0T3JkZXIoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XHRcdFxuXHRcdGNhc2UgXCJjb21wbGV0ZUZpcnN0XCI6XG5cdFx0Z2V0Q29tcGxldGVGaXJzdE9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJkdWVEYXRlRWFybGllc3RcIjpcblx0XHRnZXRFYXJsaWVzdERhdGVGaXJzdChhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcdFx0XG5cdFx0Y2FzZSBcImR1ZURhdGVMYXRlc3RcIjpcblx0XHRnZXRMYXRlc3REYXRlRmlyc3QoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XG5cdH1cblx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMoYWN0aXZlTGlzdCk7XG5cdGNvbmZpZ0NoZWNrQm94ZXMoYWN0aXZlTGlzdCk7XG59KTtcblxuLy9ET006XG5mdW5jdGlvbiBkaXNwbGF5UmVvcmRlcmVkTGlzdChjdXJyZW50TGlzdE9yZGVyKSB7XG5cdG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblx0bGV0IG51bWJlciA9IDE7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExpc3RPcmRlci5sZW5ndGg7IGkrKykge1xuXHRcdGN1cnJlbnRMaXN0T3JkZXJbaV0uaW5kZXggPSBudW1iZXI7XG5cdFx0ZGlzcGxheUxpc3RJdGVtKGN1cnJlbnRMaXN0T3JkZXJbaV0pO1x0XHRcblx0XHRudW1iZXIrKztcblx0fVx0XG59XG4vL05PTi1ET006XG5mdW5jdGlvbiBnZXRIaWdoUHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGhpZ2hQcmlvcml0eU9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlID4gbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIDE7fVxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPT0gbGlzdEl0ZW1CLnZhbHVlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA8IGxpc3RJdGVtQi52YWx1ZSkge3JldHVybiAtMTt9XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChoaWdoUHJpb3JpdHlPcmRlcik7XG59XG4vL05PTi1ET006XG5mdW5jdGlvbiBnZXRMb3dQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpIHtcdFxuXHRsZXQgbG93UHJpb3JpdHlPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG4gICAgICAgIGlmIChsaXN0SXRlbUEudmFsdWUgPiBsaXN0SXRlbUIudmFsdWUpIHtyZXR1cm4gLTE7fVxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPT0gbGlzdEl0ZW1CLnZhbHVlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA8IGxpc3RJdGVtQi52YWx1ZSkge3JldHVybiAxO31cblx0fSk7XHRcblx0ZGlzcGxheVJlb3JkZXJlZExpc3QobG93UHJpb3JpdHlPcmRlcik7XG59XG4vL05PTi1ET006XG5mdW5jdGlvbiBnZXRJbmNvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGluY29tcGxldGVGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRcdGlmIChsaXN0SXRlbUEuY29tcGxldGVWYWx1ZSA8IGxpc3RJdGVtQi5jb21wbGV0ZVZhbHVlKSByZXR1cm4gMTtcblx0fSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGluY29tcGxldGVGaXJzdE9yZGVyKTtcbn1cblxuLy9OT04tRE9NOlxuZnVuY3Rpb24gZ2V0Q29tcGxldGVGaXJzdE9yZGVyKGFjdGl2ZUxpc3QpIHtcdFxuXHRsZXQgY29tcGxldGVGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRcdGlmIChsaXN0SXRlbUEuY29tcGxldGVWYWx1ZSA+IGxpc3RJdGVtQi5jb21wbGV0ZVZhbHVlKSByZXR1cm4gMTtcblx0fSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGNvbXBsZXRlRmlyc3RPcmRlcik7XG59XG5cbi8vTk9OLURPTTpcbmZ1bmN0aW9uIGdldEVhcmxpZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpIHtcblx0Y29uc29sZS5sb2coe2FjdGl2ZUxpc3R9KTtcblx0bGV0IGVhcmxpZXN0Rmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlID4gbGlzdEl0ZW1CLmR1ZURhdGUpIHtyZXR1cm4gMTt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlID09IGxpc3RJdGVtQi5kdWVEYXRlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlIDwgbGlzdEl0ZW1CLmR1ZURhdGUpIHtyZXR1cm4gLTE7fVxuXHR9KTtcblx0Y29uc29sZS5sb2coe2VhcmxpZXN0Rmlyc3RPcmRlcn0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChlYXJsaWVzdEZpcnN0T3JkZXIpO1xufVxuXG4vL05PTi1ET006XG5mdW5jdGlvbiBnZXRMYXRlc3REYXRlRmlyc3QoYWN0aXZlTGlzdCkge1xuXHRsZXQgbGF0ZXN0Rmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlID4gbGlzdEl0ZW1CLmR1ZURhdGUpIHtyZXR1cm4gLTE7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA9PSBsaXN0SXRlbUIuZHVlRGF0ZSl7cmV0dXJuIDA7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA8IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIDE7fVxuXHR9KTs7XG5cdGNvbnNvbGUubG9nKHtsYXRlc3RGaXJzdE9yZGVyfSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGxhdGVzdEZpcnN0T3JkZXIpO1xufVxuXG4iLCJpbXBvcnQge215TGlzdHNBcnJheX0gZnJvbSBcIi4vRE9NLmpzXCI7XG5cbmZ1bmN0aW9uIGxpc3QobmFtZSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGVudHMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlOyAgIFxuICAgIG15TGlzdHNBcnJheS5wdXNoKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQge2xpc3R9OyIsImZ1bmN0aW9uIGxpc3RJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHRcblx0dGhpcy5jb21wbGV0ZVZhbHVlID0gMTA7XG5cdHJldHVybiB0aGlzO1xufVxuZXhwb3J0IHtsaXN0SXRlbX07IiwiaW1wb3J0IHtsaXN0VGl0bGV9IGZyb20gJy4vRE9NLmpzJztcblxuY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkJveFwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RzLXNpZGViYXJcIik7XG5jb25zdCBhZGRJdGVtQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJdGVtQm94XCIpO1xuY29uc3Qgd2lkdGhUcmlnZ2VyID0gd2luZG93Lm1hdGNoTWVkaWEoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KVwiKTtcbmNvbnN0IHNvcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCb3hcIik7XG5sZXQgdmlld0xpc3RzQnV0dG9uO1xubGV0IG9wZW5BZGRJdGVtQm94QnV0dG9uO1xuXG5mdW5jdGlvbiBhZGRNb2JpbGVDbGFzcygpIHtcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLXNsaWRlXCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb2JpbGVDbGFzcygpIHtcbiAgICBtYWluQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vYmlsZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgaW5uZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVmlldyBMaXN0c1wiO1xuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG8gSXRlbVwiXG4gICAgaW5uZXJOYXYuaWQgPSBcImlubmVyTmF2XCI7ICAgIFxuICAgIHZpZXdMaXN0c0J1dHRvbi5jbGFzc05hbWUgPSBcIm1vYmlsZS1idXR0b25cIjsgIFxuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLmNsYXNzTmFtZSA9IFwibW9iaWxlLWJ1dHRvblwiOyBcbiAgICBpbm5lck5hdi5hcHBlbmRDaGlsZCh2aWV3TGlzdHNCdXR0b24pO1xuICAgIGlubmVyTmF2LmFwcGVuZENoaWxkKG9wZW5BZGRJdGVtQm94QnV0dG9uKTtcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZEl0ZW1Cb3gpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdmlld0xpc3RzKTtcbiAgICByZXR1cm4gaW5uZXJOYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcE5hdkJhcigpIHtcbiAgICBjb25zdCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvcE5hdkJhci5pZCA9IFwidG9wTmF2QmFyXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3BOYXZCYXIpO1xuICAgIHRvcE5hdkJhci5hcHBlbmRDaGlsZChtYWluVGl0bGUpOyAgICAgICBcbiAgICB0b3BOYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTW9iaWxlQnV0dG9ucygpKTsgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gYWRkTW9iaWxlU3R5bGVzKHgpIHtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICAgIGFkZE1vYmlsZUNsYXNzKCk7ICAgICAgIFxuICAgICAgICBjcmVhdGVUb3BOYXZCYXIoKTsgICAgICAgICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVNb2JpbGVDbGFzcygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvcE5hdkJhcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG1haW5UaXRsZSwgc2lkZWJhcik7XG4gICAgfVxufVxuXG5sZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtYnV0dG9uXCI7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsb3NlQnV0dG9uKHBvcHVwKSB7XG4gICAgaWYgKHBvcHVwLmNvbnRhaW5zKGNsb3NlQnV0dG9uKSkgcmV0dXJuO1xuICAgIGVsc2UgcmV0dXJuIGNsb3NlQnV0dG9uOyAgICBcbn1cblxuZnVuY3Rpb24gdmlld0xpc3RzKCkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7ICAgIFxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2xvc2VCdXR0b24oc2lkZWJhcikpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKHNpZGViYXIpKTtcbiAgICBjcmVhdGVPdmVybGF5KCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUG9wdXAocG9wdXApIHtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xufVxuXG5mdW5jdGlvbiBvcGVuQWRkSXRlbUJveCgpIHtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGFkZEl0ZW1Cb3guYXBwZW5kQ2hpbGQoY3JlYXRlQ2xvc2VCdXR0b24oYWRkSXRlbUJveCkpOyAgICBcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VQb3B1cChhZGRJdGVtQm94KSk7XG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufVxuXG5leHBvcnQge2FkZE1vYmlsZVN0eWxlcywgd2lkdGhUcmlnZ2VyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL0RPTS5qcyc7XG5pbXBvcnQgJy4vdG9Eby5jc3MnO1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=