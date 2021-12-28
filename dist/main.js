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
___CSS_LOADER_EXPORT___.push([module.id, "html {\nwidth: 100%;\nheight: 100%;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: hsl(60, 100%, 85%);\npadding: 0;\nmargin: 0;\nposition: relative;\nwidth: 100%;\nheight: 100%;\n}\nh1 {\nmargin: 15px auto 40px;\ncolor: red;\nfont-size: 2rem;\n}\nh2 {\ncolor: red;\nfont-size: 1.6rem;\nmargin-bottom: 20px;\n}\nh3 {\ncolor: red;\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\ncolor: red;\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40%;\nposition: relative;\nleft: 22%;\nmargin-left: 3%;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n/*border: 2px solid red;*/\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 4px;\n}\n.dueDate {\nmargin: 3px 0;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n.smaller-left-margin {\nmargin-left: 57%;\n}\n#addItemBox {\nposition: fixed;\nright: 20px;\ntop: 70px;\nwidth: 30%;\ncolor: blue;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box {\nbackground-color: hsl(120, 70%, 80%);\n}\np {\nmargin: 10px 0;\ncolor: black;\nfont-size: 1rem;\n}\n.high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n.medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n.low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80%;\nwidth: 20%;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 12px 0;\npadding: 4px;\nborder-radius: 3px;\nfont-size: 0.9rem;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n", "",{"version":3,"sources":["webpack://./src/toDo.css"],"names":[],"mappings":"AAAA;AACA,WAAW;AACX,YAAY;AACZ,eAAe;AACf,0BAA0B;AAC1B;AACA;AACA,uBAAuB;AACvB,SAAS;AACT,UAAU;AACV;AACA;AACA,kBAAkB;AAClB,oBAAoB;AACpB,oCAAoC;AACpC,UAAU;AACV,SAAS;AACT,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ;AACA;AACA,sBAAsB;AACtB,UAAU;AACV,eAAe;AACf;AACA;AACA,UAAU;AACV,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,UAAU;AACV,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,UAAU;AACV,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,UAAU;AACV,kBAAkB;AAClB,SAAS;AACT,eAAe;AACf;AACA;AACA,sBAAsB;AACtB,gBAAgB;AAChB;AACA;AACA,8BAA8B;AAC9B,SAAS;AACT,gBAAgB;AAChB,uBAAuB;AACvB,wBAAwB;AACxB;AACA;AACA,kBAAkB;AAClB,eAAe;AACf,yBAAyB;AACzB;AACA;AACA,iBAAiB;AACjB,kBAAkB;AAClB,iBAAiB;AACjB,8BAA8B;AAC9B;AACA;AACA,uCAAuC;AACvC;AACA;AACA,uCAAuC;AACvC;AACA;AACA,aAAa;AACb;AACA;AACA,kBAAkB;AAClB,YAAY;AACZ,UAAU;AACV,aAAa;AACb;AACA;AACA,YAAY;AACZ,WAAW;AACX,uBAAuB;AACvB,eAAe;AACf;AACA;AACA,gBAAgB;AAChB;AACA;AACA,eAAe;AACf,WAAW;AACX,SAAS;AACT,UAAU;AACV,WAAW;AACX;AACA;AACA,kBAAkB;AAClB;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,aAAa;AACb,kBAAkB;AAClB,gBAAgB;AAChB;AACA;AACA,WAAW;AACX,YAAY;AACZ,qBAAqB;AACrB,iBAAiB;AACjB,uBAAuB;AACvB;AACA;AACA,kCAAkC;AAClC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,cAAc;AACd,YAAY;AACZ,eAAe;AACf;AACA;AACA,kCAAkC;AAClC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,4BAA4B;AAC5B,WAAW;AACX,UAAU;AACV,eAAe;AACf,SAAS;AACT,YAAY;AACZ,cAAc;AACd;AACA;AACA,yBAAyB;AACzB,gBAAgB;AAChB;AACA;AACA,0BAA0B;AAC1B,iBAAiB;AACjB,qBAAqB;AACrB,UAAU;AACV,WAAW;AACX;AACA;AACA,iBAAiB;AACjB,iBAAiB;AACjB;AACA;AACA,qBAAqB;AACrB,mBAAmB;AACnB;AACA;AACA,sBAAsB;AACtB,YAAY;AACZ,cAAc;AACd,YAAY;AACZ,kBAAkB;AAClB,iBAAiB;AACjB;AACA;AACA,6BAA6B;AAC7B,YAAY;AACZ,aAAa;AACb,6BAA6B;AAC7B,YAAY;AACZ,iBAAiB;AACjB;AACA;AACA,gBAAgB;AAChB,qBAAqB;AACrB,YAAY;AACZ,kBAAkB;AAClB,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB,YAAY;AACZ,YAAY;AACZ,WAAW;AACX,YAAY;AACZ,iBAAiB;AACjB,kBAAkB;AAClB,sBAAsB;AACtB,eAAe;AACf,uBAAuB;AACvB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,WAAW;AACX,YAAY;AACZ,YAAY;AACZ,YAAY;AACZ,iBAAiB;AACjB,iBAAiB;AACjB,eAAe;AACf,eAAe;AACf,uBAAuB;AACvB,kBAAkB;AAClB","sourcesContent":["html {\nwidth: 100%;\nheight: 100%;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: hsl(60, 100%, 85%);\npadding: 0;\nmargin: 0;\nposition: relative;\nwidth: 100%;\nheight: 100%;\n}\nh1 {\nmargin: 15px auto 40px;\ncolor: red;\nfont-size: 2rem;\n}\nh2 {\ncolor: red;\nfont-size: 1.6rem;\nmargin-bottom: 20px;\n}\nh3 {\ncolor: red;\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\ncolor: red;\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#mainBox {\nwidth: 40%;\nposition: relative;\nleft: 22%;\nmargin-left: 3%;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n/*border: 2px solid red;*/\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 4px;\n}\n.dueDate {\nmargin: 3px 0;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n.smaller-left-margin {\nmargin-left: 57%;\n}\n#addItemBox {\nposition: fixed;\nright: 20px;\ntop: 70px;\nwidth: 30%;\ncolor: blue;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box {\nbackground-color: hsl(120, 70%, 80%);\n}\np {\nmargin: 10px 0;\ncolor: black;\nfont-size: 1rem;\n}\n.high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n.medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n.low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 80%;\nwidth: 20%;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 12px 0;\npadding: 4px;\nborder-radius: 3px;\nfont-size: 0.9rem;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "myListsArray": () => (/* binding */ myListsArray)
/* harmony export */ });
/* harmony import */ var _manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageToDoItems.js */ "./src/manageToDoItems.js");
/* harmony import */ var _manageLists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageLists.js */ "./src/manageLists.js");



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
	console.log({checkboxes});
	let targetItem;
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener("click", (e) => {
			console.log(e.target.parentElement.parentElement.parentElement);
			e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.classList.toggle("complete");
			e.target.parentElement.parentElement.parentElement.firstChild.firstChild.children[1].classList.toggle("complete");
			targetItem = listObject.contents.find(listItem => listItem.index == checkbox.parentElement.parentElement.parentElement.id);
			if (targetItem.complete == false) targetItem.complete = true;
			else if (targetItem.complete == true) targetItem.complete = false;
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
		break;
		case "medium":
		itemElement.classList.add("medium-priority");
		break;
		case "low":
		itemElement.classList.add("low-priority");
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



myListsArray.forEach(listObject => {	
	let priorityOrder = listObject.contents.sort(a, b => { 
        if (a.priority == "high") return -1;
		if (a.priority == "medium") return 0;
		if (a.priority == "low") return 1;
		});
		console.log({priorityOrder});
	}
);

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
	return this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rQjtBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9Eby5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9Eby5jc3M/MzgzOSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5mb250LXNpemU6IDE3cHg7XFxuLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxufVxcbioge1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbnBhZGRpbmc6IDA7XFxubWFyZ2luOiAwO1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxufVxcbmgxIHtcXG5tYXJnaW46IDE1cHggYXV0byA0MHB4O1xcbmNvbG9yOiByZWQ7XFxuZm9udC1zaXplOiAycmVtO1xcbn1cXG5oMiB7XFxuY29sb3I6IHJlZDtcXG5mb250LXNpemU6IDEuNnJlbTtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5oMyB7XFxuY29sb3I6IHJlZDtcXG5mb250LXNpemU6IDEuNHJlbTtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5oNCB7XFxuY29sb3I6IHJlZDtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDE1cHggMCAxMHB4O1xcbn1cXG4jbWFpbkJveCB7XFxud2lkdGg6IDQwJTtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxubGVmdDogMjIlO1xcbm1hcmdpbi1sZWZ0OiAzJTtcXG59XFxuI21haW5saXN0IHtcXG5ib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbm1pbi1oZWlnaHQ6IDIwcHg7XFxufVxcbiNtYWlubGlzdCAubGlzdEl0ZW0ge1xcbmJvcmRlci1ib3R0b206IDZweCBkb3VibGUgYmx1ZTtcXG5tYXJnaW46IDA7XFxudGV4dC1hbGlnbjogbGVmdDtcXG5saXN0LXN0eWxlLXR5cGU6IEFyYWJpYztcXG5wYWRkaW5nOiA0cHggMnB4IDFweCAzcHg7XFxufVxcbi50b0RvQm94IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxcbmZvbnQtc2l6ZTogMXJlbTtcXG4vKmJvcmRlcjogMnB4IHNvbGlkIHJlZDsqL1xcbn1cXG5zdW1tYXJ5IHtcXG5mb250LXdlaWdodDogYm9sZDtcXG5tYXJnaW4tYm90dG9tOiA3cHg7XFxuZm9udC1zaXplOiAxLjFyZW07XFxudHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDFzO1xcbn1cXG5zdW1tYXJ5LmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayA0cHg7XFxufVxcbmRldGFpbHMgcC5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG4uZHVlRGF0ZSB7XFxubWFyZ2luOiAzcHggMDtcXG59XFxuLmNvbXBsZXRlTGFiZWwge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5ib3R0b206IC0zcHg7XFxucmlnaHQ6IDBweDtcXG5mb250OiBpbmhlcml0O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5oZWlnaHQ6IDE2cHg7XFxud2lkdGg6IDE2cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxubWFyZ2luOiA1cHggMCAwO1xcbn1cXG4uc21hbGxlci1sZWZ0LW1hcmdpbiB7XFxubWFyZ2luLWxlZnQ6IDU3JTtcXG59XFxuI2FkZEl0ZW1Cb3gge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5yaWdodDogMjBweDtcXG50b3A6IDcwcHg7XFxud2lkdGg6IDMwJTtcXG5jb2xvcjogYmx1ZTtcXG59XFxuZmllbGRzZXQge1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubGVnZW5kIHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDAgYXV0byAxNXB4O1xcbn1cXG5pbnB1dCB7XFxubWFyZ2luOiA2cHggMDtcXG5mb250LXNpemU6IDAuODVyZW07XFxucGFkZGluZzogM3B4IDJweDtcXG59XFxuLmNvbG91ci1jb2RlIHtcXG53aWR0aDogMTNweDtcXG5oZWlnaHQ6IDEzcHg7XFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbm1hcmdpbi1sZWZ0OiAxNXB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jcmVkLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuI29yYW5nZS1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuI2dyZWVuLWJveCB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG5wIHtcXG5tYXJnaW46IDEwcHggMDtcXG5jb2xvcjogYmxhY2s7XFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uaGlnaC1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4ubG93LXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbiNsaXN0cy1zaWRlYmFyIHtcXG5ib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibHVlO1xcbmhlaWdodDogODAlO1xcbndpZHRoOiAyMCU7XFxucG9zaXRpb246IGZpeGVkO1xcbmxlZnQ6IDVweDtcXG5ib3R0b206IDEwcHg7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNteWxpc3RzIHtcXG5saXN0LXN0eWxlOiBzcXVhcmUgaW5zaWRlO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxufVxcbiNteWxpc3RzIGxpIHtcXG5tYXJnaW46IDEycHggNXB4IDEycHggMjVweDtcXG5mb250LXNpemU6IDEuMnJlbTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxud2lkdGg6IDcwJTtcXG5jb2xvcjogYmx1ZTtcXG59XFxuYTphY3RpdmUsIGE6Zm9jdXMsIGxpOmZvY3VzIHtcXG5mb250LXNpemU6IDEuM3JlbTtcXG5mb250LXdlaWdodDogYm9sZDsgICAgXFxufVxcbmEsIGE6dmlzaXRlZCwgYTphY3RpdmUge1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG4jYWRkTGlzdEJ1dHRvbiwgI2FkZEJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5jb2xvcjogd2hpdGU7XFxubWFyZ2luOiAxMnB4IDA7XFxucGFkZGluZzogNHB4O1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG59XFxuI2xpc3ROYW1lLCAjbGlzdE5hbWU6Zm9jdXMge1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmJvcmRlcjogbm9uZTtcXG5vdXRsaW5lOiBub25lO1xcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibHVlO1xcbm1hcmdpbjogMTBweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG59XFxuLmRlbGV0ZSB7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG4tbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5yaWdodDogMXB4O1xcbnRvcDogMXB4O1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAxNXB4O1xcbndpZHRoOiAxNXB4O1xcbnBhZGRpbmc6IDFweDtcXG5mb250OiBib2xkZXIgMXJlbTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5kZWxldGUtbGkge1xcbmNvbG9yOiB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxud2lkdGg6IDE5cHg7XFxuaGVpZ2h0OiAxOXB4O1xcbmJvcmRlcjogbm9uZTtcXG5mbG9hdDogcmlnaHQ7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuZm9udC1zaXplOiAwLjlyZW07XFxubWFyZ2luLXRvcDogNHB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5ib3JkZXItcmFkaXVzOiAzMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b0RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osZUFBZTtBQUNmLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVixTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxZQUFZO0FBQ1o7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixVQUFVO0FBQ1YsZUFBZTtBQUNmO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxlQUFlO0FBQ2Y7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osVUFBVTtBQUNWLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCx1QkFBdUI7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGVBQWU7QUFDZixXQUFXO0FBQ1gsU0FBUztBQUNULFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLGNBQWM7QUFDZCxZQUFZO0FBQ1osZUFBZTtBQUNmO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsV0FBVztBQUNYLFVBQVU7QUFDVixlQUFlO0FBQ2YsU0FBUztBQUNULFlBQVk7QUFDWixjQUFjO0FBQ2Q7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osY0FBYztBQUNkLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixRQUFRO0FBQ1IscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixZQUFZO0FBQ1osV0FBVztBQUNYLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWCxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxuZm9udC1zaXplOiAxN3B4O1xcbi0tbXlCbHVlOiByZ2IoMTEsIDExLCAxNjcpO1xcbn1cXG4qIHtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg2MCwgMTAwJSwgODUlKTtcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjogMDtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDAlO1xcbn1cXG5oMSB7XFxubWFyZ2luOiAxNXB4IGF1dG8gNDBweDtcXG5jb2xvcjogcmVkO1xcbmZvbnQtc2l6ZTogMnJlbTtcXG59XFxuaDIge1xcbmNvbG9yOiByZWQ7XFxuZm9udC1zaXplOiAxLjZyZW07XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuaDMge1xcbmNvbG9yOiByZWQ7XFxuZm9udC1zaXplOiAxLjRyZW07XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuaDQge1xcbmNvbG9yOiByZWQ7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAxNXB4IDAgMTBweDtcXG59XFxuI21haW5Cb3gge1xcbndpZHRoOiA0MCU7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbmxlZnQ6IDIyJTtcXG5tYXJnaW4tbGVmdDogMyU7XFxufVxcbiNtYWlubGlzdCB7XFxuYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG5taW4taGVpZ2h0OiAyMHB4O1xcbn1cXG4jbWFpbmxpc3QgLmxpc3RJdGVtIHtcXG5ib3JkZXItYm90dG9tOiA2cHggZG91YmxlIGJsdWU7XFxubWFyZ2luOiAwO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxubGlzdC1zdHlsZS10eXBlOiBBcmFiaWM7XFxucGFkZGluZzogNHB4IDJweCAxcHggM3B4O1xcbn1cXG4udG9Eb0JveCB7XFxucG9zaXRpb246IHJlbGF0aXZlOyAgICBcXG5mb250LXNpemU6IDFyZW07XFxuLypib3JkZXI6IDJweCBzb2xpZCByZWQ7Ki9cXG59XFxuc3VtbWFyeSB7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxubWFyZ2luLWJvdHRvbTogN3B4O1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbnRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAxcztcXG59XFxuc3VtbWFyeS5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG5kZXRhaWxzIHAuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuLmR1ZURhdGUge1xcbm1hcmdpbjogM3B4IDA7XFxufVxcbi5jb21wbGV0ZUxhYmVsIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAtM3B4O1xcbnJpZ2h0OiAwcHg7XFxuZm9udDogaW5oZXJpdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuaGVpZ2h0OiAxNnB4O1xcbndpZHRoOiAxNnB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbm1hcmdpbjogNXB4IDAgMDtcXG59XFxuLnNtYWxsZXItbGVmdC1tYXJnaW4ge1xcbm1hcmdpbi1sZWZ0OiA1NyU7XFxufVxcbiNhZGRJdGVtQm94IHtcXG5wb3NpdGlvbjogZml4ZWQ7XFxucmlnaHQ6IDIwcHg7XFxudG9wOiA3MHB4O1xcbndpZHRoOiAzMCU7XFxuY29sb3I6IGJsdWU7XFxufVxcbmZpZWxkc2V0IHtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmxlZ2VuZCB7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAwIGF1dG8gMTVweDtcXG59XFxuaW5wdXQge1xcbm1hcmdpbjogNnB4IDA7XFxuZm9udC1zaXplOiAwLjg1cmVtO1xcbnBhZGRpbmc6IDNweCAycHg7XFxufVxcbi5jb2xvdXItY29kZSB7XFxud2lkdGg6IDEzcHg7XFxuaGVpZ2h0OiAxM3B4O1xcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5tYXJnaW4tbGVmdDogMTVweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI3JlZC1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA3MCUsIDgwJSk7XFxufVxcbiNvcmFuZ2UtYm94IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDAsIDEwMCUsIDcwJSk7XFxufVxcbiNncmVlbi1ib3gge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDcwJSwgODAlKTtcXG59XFxucCB7XFxubWFyZ2luOiAxMHB4IDA7XFxuY29sb3I6IGJsYWNrO1xcbmZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmhpZ2gtcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA3MCUsIDgwJSk7XFxufVxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuLmxvdy1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG4jbGlzdHMtc2lkZWJhciB7XFxuYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmx1ZTtcXG5oZWlnaHQ6IDgwJTtcXG53aWR0aDogMjAlO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiA1cHg7XFxuYm90dG9tOiAxMHB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbn1cXG4jbXlsaXN0cyB7XFxubGlzdC1zdHlsZTogc3F1YXJlIGluc2lkZTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jbXlsaXN0cyBsaSB7XFxubWFyZ2luOiAxMnB4IDVweCAxMnB4IDI1cHg7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbndpZHRoOiA3MCU7XFxuY29sb3I6IGJsdWU7XFxufVxcbmE6YWN0aXZlLCBhOmZvY3VzLCBsaTpmb2N1cyB7XFxuZm9udC1zaXplOiAxLjNyZW07XFxuZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxcbn1cXG5hLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuI2FkZExpc3RCdXR0b24sICNhZGRCdXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbm1hcmdpbjogMTJweCAwO1xcbnBhZGRpbmc6IDRweDtcXG5ib3JkZXItcmFkaXVzOiAzcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbiNsaXN0TmFtZSwgI2xpc3ROYW1lOmZvY3VzIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IG5vbmU7XFxub3V0bGluZTogbm9uZTtcXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTtcXG5tYXJnaW46IDEwcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5kZWxldGUge1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxucmlnaHQ6IDFweDtcXG50b3A6IDFweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMTVweDtcXG53aWR0aDogMTVweDtcXG5wYWRkaW5nOiAxcHg7XFxuZm9udDogYm9sZGVyIDFyZW07XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uZGVsZXRlLWxpIHtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbndpZHRoOiAxOXB4O1xcbmhlaWdodDogMTlweDtcXG5ib3JkZXI6IG5vbmU7XFxuZmxvYXQ6IHJpZ2h0O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbm1hcmdpbi10b3A6IDRweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvRG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b0RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2xpc3RJdGVtfSBmcm9tICcuL21hbmFnZVRvRG9JdGVtcy5qcyc7XG5pbXBvcnQge2xpc3R9IGZyb20gJy4vbWFuYWdlTGlzdHMuanMnO1xuXG5jb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCdXR0b25cIik7XG5jb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVGaWVsZFwiKTtcbmNvbnN0IGRlc2NyaXBGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcEZpZWxkXCIpO1xuY29uc3QgZHVlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZUZpZWxkXCIpO1xuY29uc3QgcHJpb3JpdHlCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJpb3JpdHlcIikpO1xuXG5sZXQgTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QgPSBcInRhc2subXlMaXN0c0FycmF5XCI7XG5sZXQgbXlMaXN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCkpIHx8IFtdO1xuXG5jb25zdCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbmxpc3RcIik7XG5cbi8vbGlzdCBlbGVtZW50IG9iamVjdDpcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbmNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZExpc3RCdXR0b25cIik7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3ROYW1lXCIpO1xuXG5jb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtdGl0bGVcIik7XG5cbi8vT0w6XG5jb25zdCBsaXN0T2ZMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlsaXN0c1wiKTtcbmxldCBsaXN0RWxlbWVudHMgPSBbbWFpbl07XG5sZXQgbGlzdE5hbWVzO1xubGV0IHByaW9yaXR5O1x0XHRcblxuLy9ub24tRE9NPzpcbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcblx0c2V0TGlzdE5hbWVzKCk7ICAgXG5cdGxpc3ROYW1lcy50b1N0cmluZygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE5hbWVzMlwiLCBsaXN0TmFtZXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNULCBKU09OLnN0cmluZ2lmeShteUxpc3RzQXJyYXkpKTtcblx0Y29uc29sZS5sb2coXCJwb3B1bGF0ZWQhXCIpO1x0XG59XG4vL0RPTTpcbmZ1bmN0aW9uIHNldExpc3ROYW1lcygpIHtcblx0bGlzdE5hbWVzID0gbGlzdEVsZW1lbnRzLm1hcChsaXN0RWxlbWVudCA9PiB7XG5cdFx0aWYgKGxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlICE9IG51bGwpIHtcblx0XHRcdHJldHVybiBsaXN0RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbGlzdE5hbWVzO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBwb3B1bGF0ZVN0b3JhZ2UpO1xuLy9sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy9ET006XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRjb25zb2xlLmxvZyh7bXlMaXN0c0FycmF5fSk7XG4gICAgaWYgKG15TGlzdHNBcnJheS5sZW5ndGggPT0gMCkge1xuXHRcdGNvbnN0IGZpcnN0ID0gbmV3IGxpc3QoXCJNYWluXCIpO1xuXHRcdGZpcnN0LmFjdGl2ZSA9IHRydWU7XHRcblx0fVx0XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdE5hbWVzMlwiKSkge1xuXHRcdC8vIHdpbGwgYWxyZWFkeSBpbmNsdWRlIFwibWFpblwiIGFzIGZpcnN0IGl0ZW06XG5cdFx0bGlzdE5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0TmFtZXMyXCIpLnNwbGl0KFwiLFwiKTtcblx0fVxuXHQvLyBmaXJzdCB0aW1lIGFwcCBpcyB1c2VkOlxuXHRlbHNlIGxpc3ROYW1lcyA9IFtcIk1haW5cIl07XG5cdGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpO1x0XG5cdGxvYWREZWZhdWx0TGlzdCgpO1xufTtcblxuLy9ET006XG5mdW5jdGlvbiBjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKSB7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgXHRsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICsgbGlzdE5hbWVzW2ldICsgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7XG5cdFx0bGlzdEVsZW1lbnQuaWQgPSBsaXN0TmFtZXNbaV07ICAgICBcblx0XHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRcdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XG5cdFx0c2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcblx0fVxufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGNsZWFyTGlzdE9mTGlzdHMoKSB7XG5cdHdoaWxlIChsaXN0T2ZMaXN0cy5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHR9XG5cdHJldHVybjtcbn1cbi8vRE9NOlxuZnVuY3Rpb24gY29uZmlnTGlzdERlbGV0ZUJ1dHRvbnMoKSB7XG5cdGxldCBkZWxldGVBcnJheTIgPSBbLi4ubGlzdE9mTGlzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1saVwiKV07XG5cdGRlbGV0ZUFycmF5Mi5mb3JFYWNoKGRlbGV0ZUJ1dHRvbiA9PiB7XG5cdFx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuXHRcdFx0bGV0IHRvQmVEZWxldGVkID0gbGlzdEVsZW1lbnRzLmZpbmRJbmRleChsaXN0RWxlbWVudCA9PiBsaXN0RWxlbWVudC5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblx0XHRcdGlmICh0b0JlRGVsZXRlZCA+IDApIHtcblx0XHRcdFx0bGlzdEVsZW1lbnRzLnNwbGljZSh0b0JlRGVsZXRlZCwgMSk7XG5cdFx0XHRcdGxldCBpbmRleCA9IG15TGlzdHNBcnJheS5maW5kSW5kZXggKGxpc3RPYmplY3QgPT4gbGlzdE9iamVjdC5uYW1lID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuXHRcdFx0XHRteUxpc3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0bGlzdE5hbWVzID0gc2V0TGlzdE5hbWVzKCk7XG5cdFx0XHRcdGxpc3RFbGVtZW50cyA9IFttYWluXTtcblx0XHRcdFx0Y2xlYXJMaXN0T2ZMaXN0cygpO1xuXHRcdFx0XHRsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChtYWluKTtcblx0XHRcdFx0Y3JlYXRlTGlzdEVsZW1lbnRzKGxpc3ROYW1lcyk7XHRcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gbG9hZERlZmF1bHRMaXN0KCkge1xuXHRzZXRJdGVtSW5kaWNlcyhteUxpc3RzQXJyYXlbMF0pO1x0XG5cdG15TGlzdHNBcnJheVswXS5jb250ZW50cy5mb3JFYWNoKGxpc3RJdGVtT2JqZWN0ID0+IHtcblx0XHRkaXNwbGF5TGlzdEl0ZW0obGlzdEl0ZW1PYmplY3QpO1xuXHR9KTtcblx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobXlMaXN0c0FycmF5WzBdKTtcblx0Y29uZmlnQ2hlY2tCb3hlcyhteUxpc3RzQXJyYXlbMF0pO1xufVxuXG4vL25vbi1ET006XG5mdW5jdGlvbiBzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KSB7XG5cdGxldCBudW1iZXIgPSAxO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzW2ldLmluZGV4ID0gbnVtYmVyO1xuXHRcdG51bWJlcisrO1xuXHR9XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCkge1xuXHRsZXQgZGVsZXRlQXJyYXkgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZVwiKV07XG5cdGRlbGV0ZUFycmF5LmZvckVhY2goZGVsZXRlQnV0dG9uID0+IHtcblx0XHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGxpc3RPYmplY3QuY29udGVudHNbaV0uaW5kZXggPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKSB7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5jb250ZW50cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0c2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRicmVhaztcdFx0XHRcdFxuXHRcdFx0XHR9XHRcdFx0XHQgICAgICAgXG5cdFx0XHR9IFxuXHRcdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyBcblx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCk7XG5cdFx0XHRsZXQgbWFpbkxpc3RBcnJheSA9IEFycmF5LmZyb20obWFpbkxpc3QuY2hpbGRyZW4pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7ICAgIFxuXHRcdFx0XHRtYWluTGlzdEFycmF5W2ldLmlkID0gZ2V0SW5kZXgobGlzdE9iamVjdC5jb250ZW50c1tpXSk7XG5cdFx0XHR9ICBcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0fSk7XG5cdH0pO1x0ICAgICAgIFxufVxuXG5mdW5jdGlvbiBjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpIHtcblx0bGV0IGNoZWNrYm94ZXMgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoZWNrYm94XCIpXTtcblx0Y29uc29sZS5sb2coe2NoZWNrYm94ZXN9KTtcblx0bGV0IHRhcmdldEl0ZW07XG5cdGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG5cdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG5cdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG5cdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuXHRcdFx0dGFyZ2V0SXRlbSA9IGxpc3RPYmplY3QuY29udGVudHMuZmluZChsaXN0SXRlbSA9PiBsaXN0SXRlbS5pbmRleCA9PSBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0XHRpZiAodGFyZ2V0SXRlbS5jb21wbGV0ZSA9PSBmYWxzZSkgdGFyZ2V0SXRlbS5jb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0YXJnZXRJdGVtLmNvbXBsZXRlID09IHRydWUpIHRhcmdldEl0ZW0uY29tcGxldGUgPSBmYWxzZTtcblx0XHRcdGNvbnNvbGUubG9nKHt0YXJnZXRJdGVtfSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vL0RPTTpcbnByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoXCJjaGVja2VkXCIpKSB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfVxuICAgXHRidXR0b24ub25mb2N1cyA9ICgpID0+IHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcblxuXHR9OyAgICBcblx0YnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG5cdH07XG59KTtcblxuLy9ET006XG5mdW5jdGlvbiBjbGVhckZpZWxkcygpIHtcblx0Y29uc3QgZmllbGRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHRmaWVsZFwiKSk7XG4gICAgZmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZC52YWx1ZSA9IFwiXCIpO1xufVxuXG4vL0RPTTpcbmFkZEl0ZW1CdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0bGV0IGl0ZW0gPSBuZXcgbGlzdEl0ZW0obmFtZUZpZWxkLnZhbHVlLCBkZXNjcmlwRmllbGQudmFsdWUsIGR1ZUZpZWxkLnZhbHVlLCBwcmlvcml0eSk7XG5cdG15TGlzdHNBcnJheS5mb3JFYWNoKGxpc3RPYmplY3QgPT4ge1xuXHRcdGlmIChsaXN0T2JqZWN0LmFjdGl2ZSA9PSB0cnVlKSB7XG5cdFx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzLnB1c2goaXRlbSk7XG5cdFx0XHRzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KTtcdFxuXHRcdFx0ZGlzcGxheUxpc3RJdGVtKGl0ZW0pO1xuXHRcdFx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCk7XG5cdFx0XHRjb25maWdDaGVja0JveGVzKGxpc3RPYmplY3QpO1xuXHRcdH1cblx0fSk7ICBcdFxuICAgIGNsZWFyRmllbGRzKCk7ICAgXG59XG5cbi8vRE9NOlxuYWRkTGlzdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGxldCBuZXdMaXN0ID0gbmV3IGxpc3QobmFtZUlucHV0LnZhbHVlKTtcbiAgICBkaXNwbGF5TGlzdEVsZW1lbnQobmV3TGlzdCk7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gXCJcIlxufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGRpc3BsYXlMaXN0RWxlbWVudChsaXN0KSB7XG5cdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+JyArIGxpc3QubmFtZSArICc8L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1saVwiPlg8L2J1dHRvbj4nOyAgXG5cdGxpc3RFbGVtZW50LmlkID0gbGlzdC5uYW1lOyAgIFxuXHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG4gICAgbGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpO1xuICAgIHNldExpc3RFdmVudEhhbmRsZXJzKCk7XG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gc2V0TGlzdEV2ZW50SGFuZGxlcnMoKSB7XG5cdGxpc3RFbGVtZW50cy5mb3JFYWNoKGxpc3RFbGVtZW50ID0+IHtcdFx0XG5cdFx0bGlzdEVsZW1lbnQub25jbGljayA9ICgpID0+IHtcdFx0XG5cdFx0XHRteUxpc3RzQXJyYXkuZm9yRWFjaChsaXN0T2JqZWN0ID0+IHtcblx0XHRcdFx0aWYgKGxpc3RPYmplY3QubmFtZSA9PSBsaXN0RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQpIHtcdFxuXHRcdFx0XHRcdG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdFx0bGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdE9iamVjdC5uYW1lO1xuXHRcdFx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuY29udGVudHMuZm9yRWFjaChsaXN0SXRlbU9iamVjdCA9PiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5TGlzdEl0ZW0obGlzdEl0ZW1PYmplY3QpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpO1xuXHRcdFx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMobGlzdE9iamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSAge1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1x0XHRcdFxuXHRcdH07XG5cdH0pO1xuXHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0cG9wdWxhdGVTdG9yYWdlKCk7XHRcdFxufVxuXG4vL25vbi1ET00/OlxuZnVuY3Rpb24gZ2V0SW5kZXgobGlzdEl0ZW1PYmplY3QpIHtcblx0cmV0dXJuIGxpc3RJdGVtT2JqZWN0LmluZGV4O1xufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1Db250ZW50KGl0ZW0pIHtcblx0cmV0dXJuICc8ZGl2IGNsYXNzPVwidG9Eb0JveFwiPjxkZXRhaWxzPjxzdW1tYXJ5Pidcblx0ICsgaXRlbS5uYW1lICsgJzwvc3VtbWFyeT48cD4nICsgaXRlbS5kZXNjcmlwdGlvbiArIFxuXHQgJzwvcD48L2RldGFpbHM+PHAgY2xhc3M9XCJkdWVEYXRlXCI+RHVlIGRhdGU6ICcgKyBpdGVtLmR1ZURhdGUgKyBcblx0ICc8L3A+PGxhYmVsIGNsYXNzPVwiY29tcGxldGVMYWJlbFwiPkNvbXBsZXRlZDogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVkXCIgdmFsdWU9XCJcIj48L2xhYmVsPjxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5YPC9idXR0b24+PC9kaXY+JzsgICAgXG59XG5cbi8vRE9NOlxuZnVuY3Rpb24gbWFya0NvbXBsZXRlKGl0ZW1FbGVtZW50KSB7XG5cdGl0ZW1FbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcblx0aXRlbUVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKVxuXHRsZXQgY2hlY2tib3ggPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrYm94XCIpO1xuXHRjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpO1xufVxuXG4vL0RPTTpcbmZ1bmN0aW9uIGFzc2lnblByaW9yaXR5KGl0ZW1FbGVtZW50LCBpdGVtT2JqZWN0KSB7XG5cdHN3aXRjaChpdGVtT2JqZWN0LnByaW9yaXR5KSB7XG5cdFx0Y2FzZSBcImhpZ2hcIjogXG5cdFx0aXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIm1lZGl1bVwiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImxvd1wiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIik7XG5cdFx0YnJlYWs7XG5cdH1cbn1cbi8vRE9NOlxuZnVuY3Rpb24gZGlzcGxheUxpc3RJdGVtKGl0ZW0pIHtcblx0Y29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0bmV3SXRlbS5pZCA9IGdldEluZGV4KGl0ZW0pO1x0XG5cdG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3RJdGVtXCIpO1xuXHRhc3NpZ25Qcmlvcml0eShuZXdJdGVtLCBpdGVtKTtcblx0bmV3SXRlbS5pbm5lckhUTUwgPSBjcmVhdGVJdGVtQ29udGVudChpdGVtKTtcblx0aWYgKGl0ZW0uY29tcGxldGUgPT0gdHJ1ZSkgbWFya0NvbXBsZXRlKG5ld0l0ZW0pO1xuICAgIG1haW5MaXN0LmFwcGVuZENoaWxkKG5ld0l0ZW0pO1x0XG59XG5cbmV4cG9ydCB7ZGlzcGxheUxpc3RJdGVtLCBteUxpc3RzQXJyYXl9O1xuXG5teUxpc3RzQXJyYXkuZm9yRWFjaChsaXN0T2JqZWN0ID0+IHtcdFxuXHRsZXQgcHJpb3JpdHlPcmRlciA9IGxpc3RPYmplY3QuY29udGVudHMuc29ydChhLCBiID0+IHsgXG4gICAgICAgIGlmIChhLnByaW9yaXR5ID09IFwiaGlnaFwiKSByZXR1cm4gLTE7XG5cdFx0aWYgKGEucHJpb3JpdHkgPT0gXCJtZWRpdW1cIikgcmV0dXJuIDA7XG5cdFx0aWYgKGEucHJpb3JpdHkgPT0gXCJsb3dcIikgcmV0dXJuIDE7XG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coe3ByaW9yaXR5T3JkZXJ9KTtcblx0fVxuKTsiLCJpbXBvcnQge215TGlzdHNBcnJheX0gZnJvbSBcIi4vRE9NLmpzXCI7XG5cbmZ1bmN0aW9uIGxpc3QobmFtZSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGVudHMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlOyAgIFxuICAgIG15TGlzdHNBcnJheS5wdXNoKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQge2xpc3R9OyIsImZ1bmN0aW9uIGxpc3RJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHRcblx0cmV0dXJuIHRoaXM7XG59XG5leHBvcnQge2xpc3RJdGVtfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL0RPTS5qcyc7XG5pbXBvcnQgJy4vdG9Eby5jc3MnO1xuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9