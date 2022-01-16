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
___CSS_LOADER_EXPORT___.push([module.id, "html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--variableHeight2: max(40px, 9vh);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: var(--myYellow);\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 1;\n}\nh1 {\nmargin: auto;\nfont-size: 2rem;\n}\nh2 {\nfont-size: 1.6rem;\nmargin: 35px 0 30px;\nz-index: 1;\n}\nh3 {\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#title-bar {\nwidth: 100vw;\nbackground-color: azure;\nheight: var(--variableHeight2);\nposition: fixed;\ntop: 0;\npadding: 3vh 0 12px;\nborder-bottom: 3px solid blue;\nbox-shadow: 0px -5px 10px 5px white inset;\nz-index: 3;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\ntop: 80px;\nleft: 22vw;\nmargin-left: 3vw;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n#clearButton {\nmargin: 25px 0 5vh;\nposition: absolute;\nleft: 5%;\npadding: 7px 10px;\nbackground-color: transparent;\nborder: none;\ncursor: pointer;\nfont-weight: bold;\ncolor: inherit;\nfont-size: 0.95rem;\ntext-shadow: 1px 1px 0px white, -1px -1px 0px white,  1px 1px 0 blue, -1px -1px 0 blue;\n}\n#clearButton:hover {\nbackground-color: azure;\nborder-radius: 20px;\n}\n#clearButton:focus {\noutline: none;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\nword-wrap: break-word;\n}\ndetails p {\nword-wrap: break-word;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 2px;\n}\np {\nmargin: 10px 0;\ncolor: iherit;\nfont-size: 1rem;\n}\n.dueDate {\nmargin: 3px 0;\ncolor: initial;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\ncolor: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n#right-sidebar {\nposition: sticky;\n/*top: calc(var(--variableHeight2) + 60px);*/\nbottom: 12vh;\nz-index: 2;\nleft: 67vw;\nwidth: fit-content;\nborder: 2px solid red;\npadding: 0;\n}\n/*#sortBox {\nposition: fixed;\ntop: calc(var(--variableHeight2) + 60px);\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\nz-index: 2;\n}*/\n#sortBox {\ntext-align: center;\nz-index: 3;\nwidth: 25vw;\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nheight: 50vh;\nwidth: 30vw;\ncolor: blue;\nmargin-top: 20px;\nz-index: 3;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\nletter-spacing: 1px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box, .high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 75vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\nz-index: 2;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 13px 0 16px;\npadding: 5px;\nborder-radius: 3px;\nfont-size: 0.9rem;\nborder: 2px solid white;\noutline: 1px solid blue;\n}\n#addListButton:hover, #addButton:hover {\ncolor: blue;\nbackground-color: white;\ncursor: pointer;\nborder: 2px solid blue;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nbox-sizing: border-box;\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: azure;\noverflow: auto;\npadding-top: 17px;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: var(--myYellow);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: aliceblue;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\nbox-sizing: border-box;\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: max(7vh, 37px);\nwidth: 75px;\npadding: 6px;\nvertical-align: middle;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 20px auto 15px;\ncursor: pointer;\n}\n.close-button:hover {\nborder: 2px solid white;\noutline: 1px solid dodgerblue;\ncolor: white;\nbackground-color: dodgerblue;\n}\n\n", "",{"version":3,"sources":["webpack://./src/toDo.css"],"names":[],"mappings":"AAAA;AACA,YAAY;AACZ,eAAe;AACf,0BAA0B;AAC1B,kCAAkC;AAClC,iCAAiC;AACjC,8BAA8B;AAC9B;AACA;AACA,uBAAuB;AACvB,SAAS;AACT,UAAU;AACV;AACA;AACA,kBAAkB;AAClB,oBAAoB;AACpB,iCAAiC;AACjC,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ,cAAc;AACd,UAAU;AACV;AACA;AACA,YAAY;AACZ,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB,UAAU;AACV;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,YAAY;AACZ,uBAAuB;AACvB,8BAA8B;AAC9B,eAAe;AACf,MAAM;AACN,mBAAmB;AACnB,6BAA6B;AAC7B,yCAAyC;AACzC,UAAU;AACV;AACA;AACA,WAAW;AACX,kBAAkB;AAClB,SAAS;AACT,UAAU;AACV,gBAAgB;AAChB;AACA;AACA,sBAAsB;AACtB,gBAAgB;AAChB;AACA;AACA,8BAA8B;AAC9B,SAAS;AACT,gBAAgB;AAChB,uBAAuB;AACvB,wBAAwB;AACxB;AACA;AACA,kBAAkB;AAClB,kBAAkB;AAClB,QAAQ;AACR,iBAAiB;AACjB,6BAA6B;AAC7B,YAAY;AACZ,eAAe;AACf,iBAAiB;AACjB,cAAc;AACd,kBAAkB;AAClB,sFAAsF;AACtF;AACA;AACA,uBAAuB;AACvB,mBAAmB;AACnB;AACA;AACA,aAAa;AACb;AACA;AACA,kBAAkB;AAClB,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,kBAAkB;AAClB,iBAAiB;AACjB,8BAA8B;AAC9B,qBAAqB;AACrB;AACA;AACA,qBAAqB;AACrB;AACA;AACA,uCAAuC;AACvC;AACA;AACA,uCAAuC;AACvC;AACA;AACA,cAAc;AACd,aAAa;AACb,eAAe;AACf;AACA;AACA,aAAa;AACb,cAAc;AACd;AACA;AACA,kBAAkB;AAClB,YAAY;AACZ,UAAU;AACV,aAAa;AACb,cAAc;AACd;AACA;AACA,YAAY;AACZ,WAAW;AACX,uBAAuB;AACvB,eAAe;AACf;AACA;AACA,gBAAgB;AAChB,4CAA4C;AAC5C,YAAY;AACZ,UAAU;AACV,UAAU;AACV,kBAAkB;AAClB,qBAAqB;AACrB,UAAU;AACV;AACA;;;;;;;EAOE;AACF;AACA,kBAAkB;AAClB,UAAU;AACV,WAAW;AACX;AACA;AACA,kBAAkB;AAClB,wBAAwB;AACxB,iBAAiB;AACjB;AACA;AACA,uBAAuB;AACvB,oBAAoB;AACpB,iBAAiB;AACjB,sBAAsB;AACtB,YAAY;AACZ,YAAY;AACZ;AACA;AACA,YAAY;AACZ,WAAW;AACX,WAAW;AACX,gBAAgB;AAChB,UAAU;AACV;AACA;AACA,kBAAkB;AAClB;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,aAAa;AACb,kBAAkB;AAClB,gBAAgB;AAChB,mBAAmB;AACnB;AACA;AACA,WAAW;AACX,YAAY;AACZ,qBAAqB;AACrB,iBAAiB;AACjB,uBAAuB;AACvB;AACA;AACA,kCAAkC;AAClC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,oCAAoC;AACpC;AACA;AACA,4BAA4B;AAC5B,YAAY;AACZ,WAAW;AACX,eAAe;AACf,SAAS;AACT,YAAY;AACZ,cAAc;AACd,UAAU;AACV;AACA;AACA,yBAAyB;AACzB,gBAAgB;AAChB;AACA;AACA,0BAA0B;AAC1B,iBAAiB;AACjB,qBAAqB;AACrB,UAAU;AACV,WAAW;AACX;AACA;AACA,iBAAiB;AACjB,iBAAiB;AACjB;AACA;AACA,qBAAqB;AACrB,mBAAmB;AACnB;AACA;AACA,sBAAsB;AACtB,YAAY;AACZ,mBAAmB;AACnB,YAAY;AACZ,kBAAkB;AAClB,iBAAiB;AACjB,uBAAuB;AACvB,uBAAuB;AACvB;AACA;AACA,WAAW;AACX,uBAAuB;AACvB,eAAe;AACf,sBAAsB;AACtB;AACA;AACA,6BAA6B;AAC7B,YAAY;AACZ,aAAa;AACb,6BAA6B;AAC7B,YAAY;AACZ,iBAAiB;AACjB;AACA;AACA,gBAAgB;AAChB,qBAAqB;AACrB,YAAY;AACZ,kBAAkB;AAClB,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB,YAAY;AACZ,YAAY;AACZ,WAAW;AACX,YAAY;AACZ,iBAAiB;AACjB,kBAAkB;AAClB,sBAAsB;AACtB,eAAe;AACf,uBAAuB;AACvB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,WAAW;AACX,YAAY;AACZ,YAAY;AACZ,YAAY;AACZ,iBAAiB;AACjB,iBAAiB;AACjB,eAAe;AACf,eAAe;AACf,uBAAuB;AACvB,kBAAkB;AAClB;AACA;AACA,sBAAsB;AACtB,WAAW;AACX,6BAA6B;AAC7B,eAAe;AACf,MAAM;AACN,6BAA6B;AAC7B,UAAU;AACV,kBAAkB;AAClB,uBAAuB;AACvB,cAAc;AACd,iBAAiB;AACjB;AACA;AACA,WAAW;AACX,gBAAgB;AAChB,UAAU;AACV,kBAAkB;AAClB,UAAU;AACV,qBAAqB;AACrB;AACA;AACA,kBAAkB;AAClB,qBAAqB;AACrB,kBAAkB;AAClB,UAAU;AACV,UAAU;AACV,mBAAmB;AACnB;AACA;AACA,WAAW;AACX,kBAAkB;AAClB,qBAAqB;AACrB,mBAAmB;AACnB,4BAA4B;AAC5B,UAAU;AACV,iCAAiC;AACjC,kBAAkB;AAClB,cAAc;AACd,aAAa;AACb,sBAAsB;AACtB,kBAAkB;AAClB,4BAA4B;AAC5B;AACA;AACA,WAAW;AACX,mBAAmB;AACnB;AACA;AACA,UAAU;AACV,mBAAmB;AACnB,kBAAkB;AAClB;AACA;AACA,eAAe;AACf,UAAU;AACV,mBAAmB;AACnB;AACA;AACA,YAAY;AACZ;AACA;AACA,UAAU;AACV,kBAAkB;AAClB,SAAS;AACT,WAAW;AACX,aAAa;AACb,uBAAuB;AACvB,0BAA0B;AAC1B,2BAA2B;AAC3B,4BAA4B;AAC5B,kBAAkB;AAClB,sBAAsB;AACtB;AACA;AACA,2BAA2B;AAC3B,oBAAoB;AACpB,UAAU;AACV,WAAW;AACX,YAAY;AACZ,sBAAsB;AACtB,sBAAsB;AACtB,iBAAiB;AACjB,eAAe;AACf,kBAAkB;AAClB;AACA;AACA,8BAA8B;AAC9B,mCAAmC;AACnC;AACA;AACA,WAAW;AACX,aAAa;AACb,eAAe;AACf,sCAAsC;AACtC,iCAAiC;AACjC,UAAU;AACV,YAAY;AACZ;AACA;AACA,sBAAsB;AACtB,iBAAiB;AACjB,uBAAuB;AACvB,4BAA4B;AAC5B,sBAAsB;AACtB,WAAW;AACX,YAAY;AACZ,sBAAsB;AACtB,kBAAkB;AAClB,eAAe;AACf,sBAAsB;AACtB,eAAe;AACf;AACA;AACA,uBAAuB;AACvB,6BAA6B;AAC7B,YAAY;AACZ,4BAA4B;AAC5B","sourcesContent":["html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--variableHeight2: max(40px, 9vh);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: var(--myYellow);\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 1;\n}\nh1 {\nmargin: auto;\nfont-size: 2rem;\n}\nh2 {\nfont-size: 1.6rem;\nmargin: 35px 0 30px;\nz-index: 1;\n}\nh3 {\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#title-bar {\nwidth: 100vw;\nbackground-color: azure;\nheight: var(--variableHeight2);\nposition: fixed;\ntop: 0;\npadding: 3vh 0 12px;\nborder-bottom: 3px solid blue;\nbox-shadow: 0px -5px 10px 5px white inset;\nz-index: 3;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\ntop: 80px;\nleft: 22vw;\nmargin-left: 3vw;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n#clearButton {\nmargin: 25px 0 5vh;\nposition: absolute;\nleft: 5%;\npadding: 7px 10px;\nbackground-color: transparent;\nborder: none;\ncursor: pointer;\nfont-weight: bold;\ncolor: inherit;\nfont-size: 0.95rem;\ntext-shadow: 1px 1px 0px white, -1px -1px 0px white,  1px 1px 0 blue, -1px -1px 0 blue;\n}\n#clearButton:hover {\nbackground-color: azure;\nborder-radius: 20px;\n}\n#clearButton:focus {\noutline: none;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\nword-wrap: break-word;\n}\ndetails p {\nword-wrap: break-word;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 2px;\n}\np {\nmargin: 10px 0;\ncolor: iherit;\nfont-size: 1rem;\n}\n.dueDate {\nmargin: 3px 0;\ncolor: initial;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\ncolor: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n#right-sidebar {\nposition: sticky;\n/*top: calc(var(--variableHeight2) + 60px);*/\nbottom: 12vh;\nz-index: 2;\nleft: 67vw;\nwidth: fit-content;\nborder: 2px solid red;\npadding: 0;\n}\n/*#sortBox {\nposition: fixed;\ntop: calc(var(--variableHeight2) + 60px);\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\nz-index: 2;\n}*/\n#sortBox {\ntext-align: center;\nz-index: 3;\nwidth: 25vw;\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nheight: 50vh;\nwidth: 30vw;\ncolor: blue;\nmargin-top: 20px;\nz-index: 3;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\nletter-spacing: 1px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box, .high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 75vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\nz-index: 2;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 13px 0 16px;\npadding: 5px;\nborder-radius: 3px;\nfont-size: 0.9rem;\nborder: 2px solid white;\noutline: 1px solid blue;\n}\n#addListButton:hover, #addButton:hover {\ncolor: blue;\nbackground-color: white;\ncursor: pointer;\nborder: 2px solid blue;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nbox-sizing: border-box;\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: azure;\noverflow: auto;\npadding-top: 17px;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: var(--myYellow);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: aliceblue;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\nbox-sizing: border-box;\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: max(7vh, 37px);\nwidth: 75px;\npadding: 6px;\nvertical-align: middle;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 20px auto 15px;\ncursor: pointer;\n}\n.close-button:hover {\nborder: 2px solid white;\noutline: 1px solid dodgerblue;\ncolor: white;\nbackground-color: dodgerblue;\n}\n\n"],"sourceRoot":""}]);
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
		setListEventHandlers();
		configListDeleteButtons();		
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
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.configCheckBoxes)();
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
					(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_2__.configCheckBoxes)();
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
    (0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.configCheckBoxes)();
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
	(0,_listItemsDOM_js__WEBPACK_IMPORTED_MODULE_1__.configCheckBoxes)();
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
			configCheckBoxes();			
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
			configCheckBoxes();
			let mainListArray = Array.from(_DOM_js__WEBPACK_IMPORTED_MODULE_1__.mainList.children);
			for (let i = 0; i < listObject.contents.length; i++) {    
				mainListArray[i].id = (0,_manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.getIndex)(listObject.contents[i]);
			}  						                                           
		});
	});	       
}

function configCheckBoxes() {
	let checkboxes = [..._DOM_js__WEBPACK_IMPORTED_MODULE_1__.mainList.getElementsByClassName("checkbox")];	   
	checkboxes.forEach(checkbox => {
		checkbox.removeEventListener("click", respondToClick);
		checkbox.addEventListener("click", respondToClick);
	});
}

function respondToClick(e) {
		let targetItem;
		let activeList = _DOM_js__WEBPACK_IMPORTED_MODULE_1__.myListsArray.find(list => list.active == true);
		e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.classList.toggle("complete");
		e.target.parentElement.parentElement.parentElement.firstChild.firstChild.children[1].classList.toggle("complete");
		targetItem = activeList.contents.find(listItem => listItem.index == e.target.parentElement.parentElement.parentElement.id);
		if (targetItem.complete == false) {
			targetItem.complete = true;	
			targetItem.completeValue = 0;		
		}
		else if (targetItem.complete == true) {
			targetItem.complete = false;
			targetItem.completeValue = 10;
		}
}

function displayListItem(itemObject) {
	const itemElement = document.createElement("li");
	itemElement.id = (0,_manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.getIndex)(itemObject);
	itemElement.classList.add("listItem");
	(0,_priority_js__WEBPACK_IMPORTED_MODULE_2__.assignPriority)(itemElement, itemObject);
	itemElement.innerHTML = createItemContent(itemObject);
	if (itemObject.complete == true) markComplete(itemElement);
    _DOM_js__WEBPACK_IMPORTED_MODULE_1__.mainList.appendChild(itemElement);	
}

function createItemContent(item) {
	return '<div class="toDoBox"><details><summary>'
	 + item.name + '</summary><p>' + item.description + 
	 '</p></details><p class="dueDate">Due date: ' + item.dueDate + 
	 '</p><label class="completeLabel">Completed: <input type="checkbox" class="checkbox" name="completed" value=""></label><button class="delete">X</button></div>';    
}

function markComplete(itemElement) {
	itemElement.firstChild.firstChild.firstChild.classList.add("complete");
	itemElement.firstChild.firstChild.children[1].classList.add("complete");
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
const ribbon = document.getElementById("title-bar");
const mainBox = document.getElementById("mainBox");
const leftSidebar = document.getElementById("lists-sidebar");
const rightSidebar = document.getElementById("right-sidebar");
const addItemBox = document.getElementById("addItemBox");
const sortBox = document.getElementById("sortBox");
const widthTrigger = window.matchMedia("screen and (max-width: 750px)");


let viewListsButton;
let openAddItemBoxButton;
let overlay;
let closeButton = document.createElement("button");
closeButton.className = "close-button";
closeButton.textContent = "Close";

function addMobileClass() {
    mainBox.classList.add("mobile");
    leftSidebar.classList.add("mobile-slide");
    addItemBox.classList.add("mobile-slide");
    sortBox.classList.add("mobile");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    leftSidebar.classList.remove("mobile-slide");
    addItemBox.classList.remove("mobile-slide");
    addItemBox.classList.remove("visible");
    leftSidebar.classList.remove("visible");
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
        rightSidebar.remove();
        ribbon.remove();    
        createTopNavBar();
        document.body.appendChild(sortBox);                          
    }
    else {
        removeMobileClass();
        document.body.appendChild(rightSidebar);
        rightSidebar.appendChild(sortBox);
        rightSidebar.appendChild(addItemBox);
        document.body.removeChild(topNavBar);
        document.body.appendChild(ribbon);
        ribbon.appendChild(mainTitle);
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
        if (document.body.contains(closeButton)) {
            closeButton.remove();
        }
    }
}

function viewLists() {
    leftSidebar.classList.add("visible");    
    if (!leftSidebar.contains(closeButton)) leftSidebar.appendChild(closeButton);
    closeButton.addEventListener("click", () => closePopup(leftSidebar));
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






//a comment






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFV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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQjtBQUNFO0FBQ087QUFDRjtBQUNFOztBQUUzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG8uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvRG8uY3NzPzM4MzkiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2xlYXJJdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9saXN0LXNvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdEl0ZW1zRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWVkaWEtcXVlcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxud2lkdGg6IDEwMHZ3O1xcbmZvbnQtc2l6ZTogMTdweDtcXG4tLW15Qmx1ZTogcmdiKDExLCAxMSwgMTY3KTtcXG4tLXZhcmlhYmxlSGVpZ2h0OiBtYXgoMTV2aCwgMTI1cHgpO1xcbi0tdmFyaWFibGVIZWlnaHQyOiBtYXgoNDBweCwgOXZoKTtcXG4tLW15WWVsbG93OiBoc2woNjAsIDEwMCUsIDg1JSk7XFxufVxcbioge1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IGF1dG87XFxub3ZlcmZsb3c6IGF1dG87XFxuei1pbmRleDogMTtcXG59XFxuaDEge1xcbm1hcmdpbjogYXV0bztcXG5mb250LXNpemU6IDJyZW07XFxufVxcbmgyIHtcXG5mb250LXNpemU6IDEuNnJlbTtcXG5tYXJnaW46IDM1cHggMCAzMHB4O1xcbnotaW5kZXg6IDE7XFxufVxcbmgzIHtcXG5mb250LXNpemU6IDEuNHJlbTtcXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5oNCB7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAxNXB4IDAgMTBweDtcXG59XFxuI3RpdGxlLWJhciB7XFxud2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmhlaWdodDogdmFyKC0tdmFyaWFibGVIZWlnaHQyKTtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAwO1xcbnBhZGRpbmc6IDN2aCAwIDEycHg7XFxuYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XFxuYm94LXNoYWRvdzogMHB4IC01cHggMTBweCA1cHggd2hpdGUgaW5zZXQ7XFxuei1pbmRleDogMztcXG59XFxuI21haW5Cb3gge1xcbndpZHRoOiA0MHZ3O1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG50b3A6IDgwcHg7XFxubGVmdDogMjJ2dztcXG5tYXJnaW4tbGVmdDogM3Z3O1xcbn1cXG4jbWFpbmxpc3Qge1xcbmJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxubWluLWhlaWdodDogMjBweDtcXG59XFxuI21haW5saXN0IC5saXN0SXRlbSB7XFxuYm9yZGVyLWJvdHRvbTogNnB4IGRvdWJsZSBibHVlO1xcbm1hcmdpbjogMDtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbmxpc3Qtc3R5bGUtdHlwZTogQXJhYmljO1xcbnBhZGRpbmc6IDRweCAycHggMXB4IDNweDtcXG59XFxuI2NsZWFyQnV0dG9uIHtcXG5tYXJnaW46IDI1cHggMCA1dmg7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDUlO1xcbnBhZGRpbmc6IDdweCAxMHB4O1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmJvcmRlcjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuY29sb3I6IGluaGVyaXQ7XFxuZm9udC1zaXplOiAwLjk1cmVtO1xcbnRleHQtc2hhZG93OiAxcHggMXB4IDBweCB3aGl0ZSwgLTFweCAtMXB4IDBweCB3aGl0ZSwgIDFweCAxcHggMCBibHVlLCAtMXB4IC0xcHggMCBibHVlO1xcbn1cXG4jY2xlYXJCdXR0b246aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbiNjbGVhckJ1dHRvbjpmb2N1cyB7XFxub3V0bGluZTogbm9uZTtcXG59XFxuLnRvRG9Cb3gge1xcbnBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG5zdW1tYXJ5IHtcXG5mb250LXdlaWdodDogYm9sZDtcXG5tYXJnaW4tYm90dG9tOiA3cHg7XFxuZm9udC1zaXplOiAxLjFyZW07XFxudHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDFzO1xcbndvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuZGV0YWlscyBwIHtcXG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbnN1bW1hcnkuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuZGV0YWlscyBwLmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayAycHg7XFxufVxcbnAge1xcbm1hcmdpbjogMTBweCAwO1xcbmNvbG9yOiBpaGVyaXQ7XFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZHVlRGF0ZSB7XFxubWFyZ2luOiAzcHggMDtcXG5jb2xvcjogaW5pdGlhbDtcXG59XFxuLmNvbXBsZXRlTGFiZWwge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5ib3R0b206IC0zcHg7XFxucmlnaHQ6IDBweDtcXG5mb250OiBpbmhlcml0O1xcbmNvbG9yOiBpbmhlcml0O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5oZWlnaHQ6IDE2cHg7XFxud2lkdGg6IDE2cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxubWFyZ2luOiA1cHggMCAwO1xcbn1cXG4jcmlnaHQtc2lkZWJhciB7XFxucG9zaXRpb246IHN0aWNreTtcXG4vKnRvcDogY2FsYyh2YXIoLS12YXJpYWJsZUhlaWdodDIpICsgNjBweCk7Ki9cXG5ib3R0b206IDEydmg7XFxuei1pbmRleDogMjtcXG5sZWZ0OiA2N3Z3O1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxucGFkZGluZzogMDtcXG59XFxuLyojc29ydEJveCB7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogY2FsYyh2YXIoLS12YXJpYWJsZUhlaWdodDIpICsgNjBweCk7XFxubGVmdDogNzB2dztcXG53aWR0aDogMjV2dztcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuei1pbmRleDogMjtcXG59Ki9cXG4jc29ydEJveCB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnotaW5kZXg6IDM7XFxud2lkdGg6IDI1dnc7XFxufVxcbiNzb3J0Qm94IGxhYmVsIHtcXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XFxuZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5zZWxlY3Qge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiAyMnB4O1xcbnBhZGRpbmc6IDNweDtcXG59XFxuI2FkZEl0ZW1Cb3gge1xcbmhlaWdodDogNTB2aDtcXG53aWR0aDogMzB2dztcXG5jb2xvcjogYmx1ZTtcXG5tYXJnaW4tdG9wOiAyMHB4O1xcbnotaW5kZXg6IDM7XFxufVxcbmZpZWxkc2V0IHtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmxlZ2VuZCB7XFxuZm9udC1zaXplOiAxLjJyZW07XFxubWFyZ2luOiAwIGF1dG8gMTVweDtcXG59XFxuaW5wdXQge1xcbm1hcmdpbjogNnB4IDA7XFxuZm9udC1zaXplOiAwLjg1cmVtO1xcbnBhZGRpbmc6IDNweCAycHg7XFxubGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLmNvbG91ci1jb2RlIHtcXG53aWR0aDogMTNweDtcXG5oZWlnaHQ6IDEzcHg7XFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbm1hcmdpbi1sZWZ0OiAxNXB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jcmVkLWJveCwgLmhpZ2gtcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA3MCUsIDgwJSk7XFxufVxcbiNvcmFuZ2UtYm94LCAubWVkaXVtLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDAsIDEwMCUsIDcwJSk7XFxufVxcbiNncmVlbi1ib3gsIC5sb3ctcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDcwJSwgODAlKTtcXG59XFxuI2xpc3RzLXNpZGViYXIge1xcbmJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsdWU7XFxuaGVpZ2h0OiA3NXZoO1xcbndpZHRoOiAyMHZ3O1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiA1cHg7XFxuYm90dG9tOiAxMHB4O1xcbm92ZXJmbG93OiBhdXRvO1xcbnotaW5kZXg6IDI7XFxufVxcbiNteWxpc3RzIHtcXG5saXN0LXN0eWxlOiBzcXVhcmUgaW5zaWRlO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxufVxcbiNteWxpc3RzIGxpIHtcXG5tYXJnaW46IDEycHggNXB4IDEycHggMjVweDtcXG5mb250LXNpemU6IDEuMnJlbTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxud2lkdGg6IDcwJTtcXG5jb2xvcjogYmx1ZTtcXG59XFxuYTphY3RpdmUsIGE6Zm9jdXMsIGxpOmZvY3VzIHtcXG5mb250LXNpemU6IDEuM3JlbTtcXG5mb250LXdlaWdodDogYm9sZDsgICAgXFxufVxcbmEsIGE6dmlzaXRlZCwgYTphY3RpdmUge1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG4jYWRkTGlzdEJ1dHRvbiwgI2FkZEJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5jb2xvcjogd2hpdGU7XFxubWFyZ2luOiAxM3B4IDAgMTZweDtcXG5wYWRkaW5nOiA1cHg7XFxuYm9yZGVyLXJhZGl1czogM3B4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbm91dGxpbmU6IDFweCBzb2xpZCBibHVlO1xcbn1cXG4jYWRkTGlzdEJ1dHRvbjpob3ZlciwgI2FkZEJ1dHRvbjpob3ZlciB7XFxuY29sb3I6IGJsdWU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxufVxcbiNsaXN0TmFtZSwgI2xpc3ROYW1lOmZvY3VzIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IG5vbmU7XFxub3V0bGluZTogbm9uZTtcXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTtcXG5tYXJnaW46IDEwcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5kZWxldGUge1xcbmFwcGVhcmFuY2U6IG5vbmU7XFxuLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbmJvcmRlcjogbm9uZTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxucmlnaHQ6IDFweDtcXG50b3A6IDFweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuY29sb3I6IHdoaXRlO1xcbmhlaWdodDogMTVweDtcXG53aWR0aDogMTVweDtcXG5wYWRkaW5nOiAxcHg7XFxuZm9udDogYm9sZGVyIDFyZW07XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uZGVsZXRlLWxpIHtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbndpZHRoOiAxOXB4O1xcbmhlaWdodDogMTlweDtcXG5ib3JkZXI6IG5vbmU7XFxuZmxvYXQ6IHJpZ2h0O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbm1hcmdpbi10b3A6IDRweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG4jdG9wTmF2QmFyIHtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbndpZHRoOiAxMDAlO1xcbmJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDA7XFxuaGVpZ2h0OiB2YXIoLS12YXJpYWJsZUhlaWdodCk7XFxuei1pbmRleDogMztcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxub3ZlcmZsb3c6IGF1dG87XFxucGFkZGluZy10b3A6IDE3cHg7XFxufVxcbiNtYWluQm94Lm1vYmlsZSB7XFxud2lkdGg6IDgwdnc7XFxubWFyZ2luOiA1dmggYXV0bztcXG56LWluZGV4OiAxO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5sZWZ0OiAxMHZ3O1xcbnRvcDogbWF4KDI1dmgsIDE5MHB4KTtcXG59XFxuI3NvcnRCb3gubW9iaWxlIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiBtYXgoMjB2aCwgMTUwcHgpO1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5sZWZ0OiAyMHZ3O1xcbnotaW5kZXg6IDE7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbndpZHRoOiA2MHZ3O1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgxOHZoLCAxNTBweCk7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5ib3JkZXI6IDRweCBzb2xpZCBkb2RnZXJibHVlO1xcbnotaW5kZXg6IDM7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5vdmVyZmxvdzogYXV0bztcXG5wYWRkaW5nOiAyMHB4O1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxudmlzaWJpbGl0eTogaGlkZGVuO1xcbnRyYW5zaXRpb246IHZpc2liaWxpdHkgMTAwbXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSB7XFxubGVmdDogLTEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLnZpc2libGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZS52aXNpYmxlIHtcXG5sZWZ0OiAyMHZ3O1xcbnZpc2liaWxpdHk6IHZpc2libGU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiAxMDAlO1xcbnRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSBmaWVsZHNldCB7XFxuYm9yZGVyOiBub25lO1xcbn1cXG4jaW5uZXJOYXYge1xcbndpZHRoOiA4MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogMDtcXG5oZWlnaHQ6IDM3JTtcXG5tYXJnaW46IDAgMTAlO1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbmJvcmRlci10b3A6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4ubW9iaWxlLWJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbndpZHRoOiA1MCU7XFxuZmxvYXQ6IGxlZnQ7XFxuaGVpZ2h0OiAxMDAlO1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG5mb250LXNpemU6IDEuMXJlbTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ubW9iaWxlLWJ1dHRvbjpob3ZlciwgLm1vYmlsZS1idXR0b246YWN0aXZlLCAubW9iaWxlLWJ1dHRvbjpmb2N1cyB7XFxudGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMjQ0LCAyNDgpO1xcbn1cXG4jb3ZlcmxheSB7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDB2aDtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiBjYWxjKHZhcigtLXZhcmlhYmxlSGVpZ2h0KSAtIDNweCk7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xcbnotaW5kZXg6IDI7XFxub3BhY2l0eTogMC44O1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbmNvbG9yOiBkb2RnZXJibHVlO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmJvcmRlcjogM3B4IHNvbGlkIGRvZGdlcmJsdWU7XFxuaGVpZ2h0OiBtYXgoN3ZoLCAzN3B4KTtcXG53aWR0aDogNzVweDtcXG5wYWRkaW5nOiA2cHg7XFxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuZm9udC1zaXplOiAxcmVtO1xcbm1hcmdpbjogMjBweCBhdXRvIDE1cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5ib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG5vdXRsaW5lOiAxcHggc29saWQgZG9kZ2VyYmx1ZTtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvRG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7QUFDWixjQUFjO0FBQ2QsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZO0FBQ1osZUFBZTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLE1BQU07QUFDTixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLHlDQUF5QztBQUN6QyxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsU0FBUztBQUNULFVBQVU7QUFDVixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsY0FBYztBQUNkLGtCQUFrQjtBQUNsQixzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsY0FBYztBQUNkLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osVUFBVTtBQUNWLGFBQWE7QUFDYixjQUFjO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1gsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLDRDQUE0QztBQUM1QyxZQUFZO0FBQ1osVUFBVTtBQUNWLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLFVBQVU7QUFDVjtBQUNBOzs7Ozs7O0VBT0U7QUFDRjtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsV0FBVztBQUNYO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1gsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixVQUFVO0FBQ1Y7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsWUFBWTtBQUNaLFdBQVc7QUFDWCxlQUFlO0FBQ2YsU0FBUztBQUNULFlBQVk7QUFDWixjQUFjO0FBQ2QsVUFBVTtBQUNWO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixVQUFVO0FBQ1YsV0FBVztBQUNYO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osYUFBYTtBQUNiLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFFBQVE7QUFDUixxQkFBcUI7QUFDckIsWUFBWTtBQUNaLFlBQVk7QUFDWixXQUFXO0FBQ1gsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsV0FBVztBQUNYLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGVBQWU7QUFDZix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsV0FBVztBQUNYLDZCQUE2QjtBQUM3QixlQUFlO0FBQ2YsTUFBTTtBQUNOLDZCQUE2QjtBQUM3QixVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFVBQVU7QUFDVixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsVUFBVTtBQUNWLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGVBQWU7QUFDZixVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsU0FBUztBQUNULFdBQVc7QUFDWCxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixvQkFBb0I7QUFDcEIsVUFBVTtBQUNWLFdBQVc7QUFDWCxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsV0FBVztBQUNYLGFBQWE7QUFDYixlQUFlO0FBQ2Ysc0NBQXNDO0FBQ3RDLGlDQUFpQztBQUNqQyxVQUFVO0FBQ1YsWUFBWTtBQUNaO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWCxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNEJBQTRCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbndpZHRoOiAxMDB2dztcXG5mb250LXNpemU6IDE3cHg7XFxuLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxuLS12YXJpYWJsZUhlaWdodDogbWF4KDE1dmgsIDEyNXB4KTtcXG4tLXZhcmlhYmxlSGVpZ2h0MjogbWF4KDQwcHgsIDl2aCk7XFxuLS1teVllbGxvdzogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbn1cXG4qIHtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiBhdXRvO1xcbm92ZXJmbG93OiBhdXRvO1xcbnotaW5kZXg6IDE7XFxufVxcbmgxIHtcXG5tYXJnaW46IGF1dG87XFxuZm9udC1zaXplOiAycmVtO1xcbn1cXG5oMiB7XFxuZm9udC1zaXplOiAxLjZyZW07XFxubWFyZ2luOiAzNXB4IDAgMzBweDtcXG56LWluZGV4OiAxO1xcbn1cXG5oMyB7XFxuZm9udC1zaXplOiAxLjRyZW07XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuaDQge1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMTVweCAwIDEwcHg7XFxufVxcbiN0aXRsZS1iYXIge1xcbndpZHRoOiAxMDB2dztcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5oZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0Mik7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMDtcXG5wYWRkaW5nOiAzdmggMCAxMnB4O1xcbmJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xcbmJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggNXB4IHdoaXRlIGluc2V0O1xcbnotaW5kZXg6IDM7XFxufVxcbiNtYWluQm94IHtcXG53aWR0aDogNDB2dztcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxudG9wOiA4MHB4O1xcbmxlZnQ6IDIydnc7XFxubWFyZ2luLWxlZnQ6IDN2dztcXG59XFxuI21haW5saXN0IHtcXG5ib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbm1pbi1oZWlnaHQ6IDIwcHg7XFxufVxcbiNtYWlubGlzdCAubGlzdEl0ZW0ge1xcbmJvcmRlci1ib3R0b206IDZweCBkb3VibGUgYmx1ZTtcXG5tYXJnaW46IDA7XFxudGV4dC1hbGlnbjogbGVmdDtcXG5saXN0LXN0eWxlLXR5cGU6IEFyYWJpYztcXG5wYWRkaW5nOiA0cHggMnB4IDFweCAzcHg7XFxufVxcbiNjbGVhckJ1dHRvbiB7XFxubWFyZ2luOiAyNXB4IDAgNXZoO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5sZWZ0OiA1JTtcXG5wYWRkaW5nOiA3cHggMTBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IG5vbmU7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmNvbG9yOiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMC45NXJlbTtcXG50ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggd2hpdGUsIC0xcHggLTFweCAwcHggd2hpdGUsICAxcHggMXB4IDAgYmx1ZSwgLTFweCAtMXB4IDAgYmx1ZTtcXG59XFxuI2NsZWFyQnV0dG9uOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5ib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4jY2xlYXJCdXR0b246Zm9jdXMge1xcbm91dGxpbmU6IG5vbmU7XFxufVxcbi50b0RvQm94IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxcbmZvbnQtc2l6ZTogMXJlbTtcXG59XFxuc3VtbWFyeSB7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxubWFyZ2luLWJvdHRvbTogN3B4O1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbnRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbiAxcztcXG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbmRldGFpbHMgcCB7XFxud29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5zdW1tYXJ5LmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayA0cHg7XFxufVxcbmRldGFpbHMgcC5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgMnB4O1xcbn1cXG5wIHtcXG5tYXJnaW46IDEwcHggMDtcXG5jb2xvcjogaWhlcml0O1xcbmZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmR1ZURhdGUge1xcbm1hcmdpbjogM3B4IDA7XFxuY29sb3I6IGluaXRpYWw7XFxufVxcbi5jb21wbGV0ZUxhYmVsIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxuYm90dG9tOiAtM3B4O1xcbnJpZ2h0OiAwcHg7XFxuZm9udDogaW5oZXJpdDtcXG5jb2xvcjogaW5oZXJpdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuaGVpZ2h0OiAxNnB4O1xcbndpZHRoOiAxNnB4O1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbm1hcmdpbjogNXB4IDAgMDtcXG59XFxuI3JpZ2h0LXNpZGViYXIge1xcbnBvc2l0aW9uOiBzdGlja3k7XFxuLyp0b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQyKSArIDYwcHgpOyovXFxuYm90dG9tOiAxMnZoO1xcbnotaW5kZXg6IDI7XFxubGVmdDogNjd2dztcXG53aWR0aDogZml0LWNvbnRlbnQ7XFxuYm9yZGVyOiAycHggc29saWQgcmVkO1xcbnBhZGRpbmc6IDA7XFxufVxcbi8qI3NvcnRCb3gge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQyKSArIDYwcHgpO1xcbmxlZnQ6IDcwdnc7XFxud2lkdGg6IDI1dnc7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnotaW5kZXg6IDI7XFxufSovXFxuI3NvcnRCb3gge1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG56LWluZGV4OiAzO1xcbndpZHRoOiAyNXZ3O1xcbn1cXG4jc29ydEJveCBsYWJlbCB7XFxubWFyZ2luLXJpZ2h0OiAxMHB4O1xcbmZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG5mb250LXNpemU6IDEuMnJlbTtcXG59XFxuc2VsZWN0IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmhlaWdodDogMjJweDtcXG5wYWRkaW5nOiAzcHg7XFxufVxcbiNhZGRJdGVtQm94IHtcXG5oZWlnaHQ6IDUwdmg7XFxud2lkdGg6IDMwdnc7XFxuY29sb3I6IGJsdWU7XFxubWFyZ2luLXRvcDogMjBweDtcXG56LWluZGV4OiAzO1xcbn1cXG5maWVsZHNldCB7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5sZWdlbmQge1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMCBhdXRvIDE1cHg7XFxufVxcbmlucHV0IHtcXG5tYXJnaW46IDZweCAwO1xcbmZvbnQtc2l6ZTogMC44NXJlbTtcXG5wYWRkaW5nOiAzcHggMnB4O1xcbmxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5jb2xvdXItY29kZSB7XFxud2lkdGg6IDEzcHg7XFxuaGVpZ2h0OiAxM3B4O1xcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5tYXJnaW4tbGVmdDogMTVweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI3JlZC1ib3gsIC5oaWdoLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNzAlLCA4MCUpO1xcbn1cXG4jb3JhbmdlLWJveCwgLm1lZGl1bS1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4jZ3JlZW4tYm94LCAubG93LXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbiNsaXN0cy1zaWRlYmFyIHtcXG5ib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibHVlO1xcbmhlaWdodDogNzV2aDtcXG53aWR0aDogMjB2dztcXG5wb3NpdGlvbjogZml4ZWQ7XFxubGVmdDogNXB4O1xcbmJvdHRvbTogMTBweDtcXG5vdmVyZmxvdzogYXV0bztcXG56LWluZGV4OiAyO1xcbn1cXG4jbXlsaXN0cyB7XFxubGlzdC1zdHlsZTogc3F1YXJlIGluc2lkZTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jbXlsaXN0cyBsaSB7XFxubWFyZ2luOiAxMnB4IDVweCAxMnB4IDI1cHg7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbndpZHRoOiA3MCU7XFxuY29sb3I6IGJsdWU7XFxufVxcbmE6YWN0aXZlLCBhOmZvY3VzLCBsaTpmb2N1cyB7XFxuZm9udC1zaXplOiAxLjNyZW07XFxuZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxcbn1cXG5hLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuI2FkZExpc3RCdXR0b24sICNhZGRCdXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbm1hcmdpbjogMTNweCAwIDE2cHg7XFxucGFkZGluZzogNXB4O1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG5vdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG59XFxuI2FkZExpc3RCdXR0b246aG92ZXIsICNhZGRCdXR0b246aG92ZXIge1xcbmNvbG9yOiBibHVlO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbn1cXG4jbGlzdE5hbWUsICNsaXN0TmFtZTpmb2N1cyB7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbm91dGxpbmU6IG5vbmU7XFxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsdWU7XFxubWFyZ2luOiAxMHB4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uZGVsZXRlIHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnJpZ2h0OiAxcHg7XFxudG9wOiAxcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbmNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDE1cHg7XFxud2lkdGg6IDE1cHg7XFxucGFkZGluZzogMXB4O1xcbmZvbnQ6IGJvbGRlciAxcmVtO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmRlbGV0ZS1saSB7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG53aWR0aDogMTlweDtcXG5oZWlnaHQ6IDE5cHg7XFxuYm9yZGVyOiBub25lO1xcbmZsb2F0OiByaWdodDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5tYXJnaW4tdG9wOiA0cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbmJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuI3RvcE5hdkJhciB7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG53aWR0aDogMTAwJTtcXG5ib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAwO1xcbmhlaWdodDogdmFyKC0tdmFyaWFibGVIZWlnaHQpO1xcbnotaW5kZXg6IDM7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbm92ZXJmbG93OiBhdXRvO1xcbnBhZGRpbmctdG9wOiAxN3B4O1xcbn1cXG4jbWFpbkJveC5tb2JpbGUge1xcbndpZHRoOiA4MHZ3O1xcbm1hcmdpbjogNXZoIGF1dG87XFxuei1pbmRleDogMTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxubGVmdDogMTB2dztcXG50b3A6IG1heCgyNXZoLCAxOTBweCk7XFxufVxcbiNzb3J0Qm94Lm1vYmlsZSB7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogbWF4KDIwdmgsIDE1MHB4KTtcXG53aWR0aDogZml0LWNvbnRlbnQ7XFxubGVmdDogMjB2dztcXG56LWluZGV4OiAxO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSwgI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIHtcXG53aWR0aDogNjB2dztcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiBtYXgoMTh2aCwgMTUwcHgpO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxuYm9yZGVyOiA0cHggc29saWQgZG9kZ2VyYmx1ZTtcXG56LWluZGV4OiAzO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxub3ZlcmZsb3c6IGF1dG87XFxucGFkZGluZzogMjBweDtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbnZpc2liaWxpdHk6IGhpZGRlbjtcXG50cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDEwMG1zO1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUge1xcbmxlZnQ6IC0xMDAlO1xcbnRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZS52aXNpYmxlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUudmlzaWJsZSB7XFxubGVmdDogMjB2dztcXG52aXNpYmlsaXR5OiB2aXNpYmxlO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIHtcXG5wb3NpdGlvbjogZml4ZWQ7XFxubGVmdDogMTAwJTtcXG50cmFuc2l0aW9uOiBsZWZ0IDFzO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUgZmllbGRzZXQge1xcbmJvcmRlcjogbm9uZTtcXG59XFxuI2lubmVyTmF2IHtcXG53aWR0aDogODAlO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5ib3R0b206IDA7XFxuaGVpZ2h0OiAzNyU7XFxubWFyZ2luOiAwIDEwJTtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5ib3JkZXItdG9wOiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLm1vYmlsZS1idXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG53aWR0aDogNTAlO1xcbmZsb2F0OiBsZWZ0O1xcbmhlaWdodDogMTAwJTtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuZm9udC1zaXplOiAxLjFyZW07XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLm1vYmlsZS1idXR0b246aG92ZXIsIC5tb2JpbGUtYnV0dG9uOmFjdGl2ZSwgLm1vYmlsZS1idXR0b246Zm9jdXMge1xcbnRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDI0NCwgMjQ4KTtcXG59XFxuI292ZXJsYXkge1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwdmg7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogY2FsYyh2YXIoLS12YXJpYWJsZUhlaWdodCkgLSAzcHgpO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXG56LWluZGV4OiAyO1xcbm9wYWNpdHk6IDAuODtcXG59XFxuLmNsb3NlLWJ1dHRvbiB7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5jb2xvcjogZG9kZ2VyYmx1ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5ib3JkZXI6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xcbmhlaWdodDogbWF4KDd2aCwgMzdweCk7XFxud2lkdGg6IDc1cHg7XFxucGFkZGluZzogNnB4O1xcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmZvbnQtc2l6ZTogMXJlbTtcXG5tYXJnaW46IDIwcHggYXV0byAxNXB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxub3V0bGluZTogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9Eby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvRG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7bGlzdH0gZnJvbSAnLi9tYW5hZ2VMaXN0cy5qcyc7XG5pbXBvcnQge3BvcHVsYXRlU3RvcmFnZSwgbGlzdE5hbWVzLCBzZXRMaXN0TmFtZXMsIExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNUfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQge2NvbmZpZ0NoZWNrQm94ZXMsIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zLCBzZXRJdGVtSW5kaWNlcywgZGlzcGxheUxpc3RJdGVtfSBmcm9tICcuL2xpc3RJdGVtc0RPTS5qcydcblxuLy9PTDpcbmNvbnN0IG1haW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWlubGlzdFwiKTtcbi8vbGlzdCBlbGVtZW50IG9iamVjdDpcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5jb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRMaXN0QnV0dG9uXCIpO1xuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0TmFtZVwiKTtcbmNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC10aXRsZVwiKTtcbi8vT0w6XG5jb25zdCBsaXN0T2ZMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlsaXN0c1wiKTtcblxubGV0IGxpc3RFbGVtZW50cyA9IFttYWluXTtcbmxldCBteUxpc3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNUKSkgfHwgW107XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpIHtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHRcbiAgICBcdGxpc3RFbGVtZW50LmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiPicgKyBsaXN0TmFtZXNbaV0gKyAnPC9hPjxidXR0b24gY2xhc3M9XCJkZWxldGUtbGlcIj5YPC9idXR0b24+Jztcblx0XHRsaXN0RWxlbWVudC5pZCA9IGxpc3ROYW1lc1tpXTsgICAgIFxuXHRcdGxpc3RFbGVtZW50cy5wdXNoKGxpc3RFbGVtZW50KTtcblx0XHRsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG5cdFx0c2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcblx0XHRjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpO1x0XHRcblx0fVxufVxuXG5mdW5jdGlvbiBjbGVhckxpc3RPZkxpc3RzKCkge1xuXHR3aGlsZSAobGlzdE9mTGlzdHMuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0bGlzdE9mTGlzdHMuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0fVxuXHRyZXR1cm47XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCkge1xuXHRsZXQgZGVsZXRlQXJyYXkyID0gWy4uLmxpc3RPZkxpc3RzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtbGlcIildO1xuXHRkZWxldGVBcnJheTIuZm9yRWFjaChkZWxldGVCdXR0b24gPT4ge1xuXHRcdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcblx0XHRcdGxldCB0b0JlRGVsZXRlZCA9IGxpc3RFbGVtZW50cy5maW5kSW5kZXgobGlzdEVsZW1lbnQgPT4gbGlzdEVsZW1lbnQuaWQgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0XHRpZiAodG9CZURlbGV0ZWQgPiAwKSB7XG5cdFx0XHRcdGxpc3RFbGVtZW50cy5zcGxpY2UodG9CZURlbGV0ZWQsIDEpO1xuXHRcdFx0XHRsZXQgaW5kZXggPSBteUxpc3RzQXJyYXkuZmluZEluZGV4IChsaXN0T2JqZWN0ID0+IGxpc3RPYmplY3QubmFtZSA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblx0XHRcdFx0bXlMaXN0c0FycmF5LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdGxpc3ROYW1lcyA9IHNldExpc3ROYW1lcygpO1xuXHRcdFx0XHRsaXN0RWxlbWVudHMgPSBbbWFpbl07XG5cdFx0XHRcdGNsZWFyTGlzdE9mTGlzdHMoKTtcblx0XHRcdFx0bGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobWFpbik7XG5cdFx0XHRcdGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpO1x0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkRGVmYXVsdExpc3QoKSB7XG5cdG15TGlzdHNBcnJheVswXS5hY3RpdmUgPSB0cnVlO1xuXHRzZXRJdGVtSW5kaWNlcyhteUxpc3RzQXJyYXlbMF0pO1x0XG5cdG15TGlzdHNBcnJheVswXS5jb250ZW50cy5mb3JFYWNoKGxpc3RJdGVtT2JqZWN0ID0+IHtcblx0XHRkaXNwbGF5TGlzdEl0ZW0obGlzdEl0ZW1PYmplY3QpO1xuXHR9KTtcblx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobXlMaXN0c0FycmF5WzBdKTtcblx0Y29uZmlnQ2hlY2tCb3hlcygpO1xufVxuXG5hZGRMaXN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0xpc3QgPSBuZXcgbGlzdChuYW1lSW5wdXQudmFsdWUpO1xuICAgIGRpc3BsYXlMaXN0RWxlbWVudChuZXdMaXN0KTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0RWxlbWVudChsaXN0KSB7XG5cdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1x0XG4gICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+JyArIGxpc3QubmFtZSArICc8L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1saVwiPlg8L2J1dHRvbj4nOyAgXG5cdGxpc3RFbGVtZW50LmlkID0gbGlzdC5uYW1lOyAgIFxuXHRsaXN0RWxlbWVudHMucHVzaChsaXN0RWxlbWVudCk7XG4gICAgbGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuXHRjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpO1xuICAgIHNldExpc3RFdmVudEhhbmRsZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldExpc3RFdmVudEhhbmRsZXJzKCkge1xuXHRsaXN0RWxlbWVudHMuZm9yRWFjaChsaXN0RWxlbWVudCA9PiB7XHRcdFxuXHRcdGxpc3RFbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XHRcdFxuXHRcdFx0bXlMaXN0c0FycmF5LmZvckVhY2gobGlzdE9iamVjdCA9PiB7XG5cdFx0XHRcdGlmIChsaXN0T2JqZWN0Lm5hbWUgPT0gbGlzdEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0KSB7XHRcblx0XHRcdFx0XHRtYWluTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGxpc3RPYmplY3QubmFtZTtcblx0XHRcdFx0XHRzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KTtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzLmZvckVhY2gobGlzdEl0ZW1PYmplY3QgPT4ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheUxpc3RJdGVtKGxpc3RJdGVtT2JqZWN0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KTtcblx0XHRcdFx0XHRjb25maWdDaGVja0JveGVzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSAge1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1x0XHRcdFxuXHRcdH07XG5cdH0pO1xuXHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0cG9wdWxhdGVTdG9yYWdlKCk7XHRcdFxufVxuXG5leHBvcnQge215TGlzdHNBcnJheSwgbGlzdFRpdGxlLCBtYWluTGlzdCwgbGlzdEVsZW1lbnRzLCBsb2FkRGVmYXVsdExpc3QsIGNyZWF0ZUxpc3RFbGVtZW50c307XG4iLCJpbXBvcnQge21haW5MaXN0LCBteUxpc3RzQXJyYXl9IGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCB7IGRpc3BsYXlMaXN0SXRlbSwgY29uZmlnQ2hlY2tCb3hlcywgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMsIHNldEl0ZW1JbmRpY2VzfSBmcm9tICcuL2xpc3RJdGVtc0RPTS5qcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5cbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhckJ1dHRvblwiKTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgYWN0aXZlTGlzdCA9IG15TGlzdHNBcnJheS5maW5kKGxpc3QgPT4gbGlzdC5hY3RpdmUgPT0gdHJ1ZSk7XG4gICAgY2xlYXJDb21wbGV0ZWRJdGVtcyhhY3RpdmVMaXN0KTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhckNvbXBsZXRlZEl0ZW1zKGxpc3RPYmplY3QpIHtcbiAgICBsZXQgaW5jb21wbGV0ZUl0ZW1zID0gbGlzdE9iamVjdC5jb250ZW50cy5maWx0ZXIobGlzdEl0ZW0gPT4gbGlzdEl0ZW0uY29tcGxldGUgPT0gZmFsc2UpO1xuICAgIGxpc3RPYmplY3QuY29udGVudHMgPSBpbmNvbXBsZXRlSXRlbXM7XG4gICAgbWFpbkxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuICAgIGxpc3RPYmplY3QuY29udGVudHMuZm9yRWFjaChpdGVtID0+IGRpc3BsYXlMaXN0SXRlbShpdGVtKSk7ICAgIFxuICAgIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpO1xuICAgIGNvbmZpZ0NoZWNrQm94ZXMoKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbn0iLCJpbXBvcnQge21haW5MaXN0LCBteUxpc3RzQXJyYXl9IGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCB7ZGlzcGxheUxpc3RJdGVtLCBjb25maWdJdGVtRGVsZXRlQnV0dG9ucywgY29uZmlnQ2hlY2tCb3hlc30gZnJvbSAnLi9saXN0SXRlbXNET00uanMnO1xuXG5jb25zdCBzb3J0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0Qm94XCIpO1xuXG5zb3J0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBnZXRPcmRlcihlKSB7XG5cdGxldCBhY3RpdmVMaXN0ID0gbXlMaXN0c0FycmF5LmZpbmQobGlzdCA9PiBsaXN0LmFjdGl2ZSA9PSB0cnVlKTtcblx0c3dpdGNoIChlLnRhcmdldC5pZCkge1xuXHRcdGNhc2UgXCJoaWdoUHJpb3JpdHlcIjpcblx0XHRnZXRIaWdoUHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcdFx0XG5cdFx0Y2FzZSBcImxvd1ByaW9yaXR5XCI6XG5cdFx0Z2V0TG93UHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcdFx0XG5cdFx0Y2FzZSBcImluY29tcGxldGVGaXJzdFwiOlxuXHRcdGdldEluY29tcGxldGVGaXJzdE9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwiY29tcGxldGVGaXJzdFwiOlxuXHRcdGdldENvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcblx0XHRjYXNlIFwiZHVlRGF0ZUVhcmxpZXN0XCI6XG5cdFx0Z2V0RWFybGllc3REYXRlRmlyc3QoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XHRcdFxuXHRcdGNhc2UgXCJkdWVEYXRlTGF0ZXN0XCI6XG5cdFx0Z2V0TGF0ZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1xuXHR9XG5cdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGFjdGl2ZUxpc3QpO1xuXHRjb25maWdDaGVja0JveGVzKCk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheVJlb3JkZXJlZExpc3QoY3VycmVudExpc3RPcmRlcikge1xuXHRtYWluTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdGxldCBudW1iZXIgPSAxO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMaXN0T3JkZXIubGVuZ3RoOyBpKyspIHtcblx0XHRjdXJyZW50TGlzdE9yZGVyW2ldLmluZGV4ID0gbnVtYmVyO1xuXHRcdGRpc3BsYXlMaXN0SXRlbShjdXJyZW50TGlzdE9yZGVyW2ldKTtcdFx0XG5cdFx0bnVtYmVyKys7XG5cdH1cdFxufVxuXG5mdW5jdGlvbiBnZXRIaWdoUHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGhpZ2hQcmlvcml0eU9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlID4gbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIDE7fVxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPT0gbGlzdEl0ZW1CLnZhbHVlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA8IGxpc3RJdGVtQi52YWx1ZSkge3JldHVybiAtMTt9XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChoaWdoUHJpb3JpdHlPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldExvd1ByaW9yaXR5T3JkZXIoYWN0aXZlTGlzdCkge1x0XG5cdGxldCBsb3dQcmlvcml0eU9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcbiAgICAgICAgaWYgKGxpc3RJdGVtQS52YWx1ZSA+IGxpc3RJdGVtQi52YWx1ZSkge3JldHVybiAtMTt9XG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA9PSBsaXN0SXRlbUIudmFsdWUpe3JldHVybiAwO31cblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlIDwgbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIDE7fVxuXHR9KTtcdFxuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChsb3dQcmlvcml0eU9yZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5jb21wbGV0ZUZpcnN0T3JkZXIoYWN0aXZlTGlzdCkge1x0XG5cdGxldCBpbmNvbXBsZXRlRmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0XHRpZiAobGlzdEl0ZW1BLmNvbXBsZXRlVmFsdWUgPCBsaXN0SXRlbUIuY29tcGxldGVWYWx1ZSkgcmV0dXJuIDE7XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChpbmNvbXBsZXRlRmlyc3RPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGNvbXBsZXRlRmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0XHRpZiAobGlzdEl0ZW1BLmNvbXBsZXRlVmFsdWUgPiBsaXN0SXRlbUIuY29tcGxldGVWYWx1ZSkgcmV0dXJuIDE7XG5cdH0pO1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChjb21wbGV0ZUZpcnN0T3JkZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRFYXJsaWVzdERhdGVGaXJzdChhY3RpdmVMaXN0KSB7XG5cdGxldCBlYXJsaWVzdEZpcnN0T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA+IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIDE7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA9PSBsaXN0SXRlbUIuZHVlRGF0ZSl7cmV0dXJuIDA7fVxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA8IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIC0xO31cblx0fSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGVhcmxpZXN0Rmlyc3RPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdERhdGVGaXJzdChhY3RpdmVMaXN0KSB7XG5cdGxldCBsYXRlc3RGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRpZiAobGlzdEl0ZW1BLmR1ZURhdGUgPiBsaXN0SXRlbUIuZHVlRGF0ZSkge3JldHVybiAtMTt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlID09IGxpc3RJdGVtQi5kdWVEYXRlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlIDwgbGlzdEl0ZW1CLmR1ZURhdGUpIHtyZXR1cm4gMTt9XG5cdH0pOztcblx0ZGlzcGxheVJlb3JkZXJlZExpc3QobGF0ZXN0Rmlyc3RPcmRlcik7XG59XG5cbiIsImltcG9ydCB7bGlzdEl0ZW0sIGdldEluZGV4fSBmcm9tIFwiLi9tYW5hZ2VUb0RvSXRlbXMuanNcIjtcbmltcG9ydCB7bXlMaXN0c0FycmF5LCBtYWluTGlzdH0gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQge2Fzc2lnblByaW9yaXR5LCBwcmlvcml0eX0gZnJvbSBcIi4vcHJpb3JpdHkuanNcIjtcblxuY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnV0dG9uXCIpO1xuY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lRmllbGRcIik7XG5jb25zdCBkZXNjcmlwRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXBGaWVsZFwiKTtcbmNvbnN0IGR1ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVGaWVsZFwiKTtcblxuZnVuY3Rpb24gY2xlYXJGaWVsZHMoKSB7XG5cdGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXh0ZmllbGRcIikpO1xuICAgIGZpZWxkcy5tYXAoZmllbGQgPT4gZmllbGQudmFsdWUgPSBcIlwiKTtcbn1cblxuYWRkSXRlbUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRsZXQgaXRlbSA9IG5ldyBsaXN0SXRlbShuYW1lRmllbGQudmFsdWUsIGRlc2NyaXBGaWVsZC52YWx1ZSwgZHVlRmllbGQudmFsdWUsIHByaW9yaXR5KTtcblx0bXlMaXN0c0FycmF5LmZvckVhY2gobGlzdE9iamVjdCA9PiB7XG5cdFx0aWYgKGxpc3RPYmplY3QuYWN0aXZlID09IHRydWUpIHtcblx0XHRcdGxpc3RPYmplY3QuY29udGVudHMucHVzaChpdGVtKTtcblx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1x0XG5cdFx0XHRkaXNwbGF5TGlzdEl0ZW0oaXRlbSk7XG5cdFx0XHRjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KTtcblx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMoKTtcdFx0XHRcblx0XHR9XG5cdH0pOyAgXHRcblx0Y2xlYXJGaWVsZHMoKTsgICBcbn1cblxuZnVuY3Rpb24gc2V0SXRlbUluZGljZXMobGlzdE9iamVjdCkge1xuXHRsZXQgbnVtYmVyID0gMTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdE9iamVjdC5jb250ZW50c1tpXS5pbmRleCA9IG51bWJlcjtcblx0XHRudW1iZXIrKztcblx0fVxufVxuXG5mdW5jdGlvbiBjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhsaXN0T2JqZWN0KSB7XG5cdGxldCBkZWxldGVBcnJheSA9IFsuLi5tYWluTGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlXCIpXTtcblx0ZGVsZXRlQXJyYXkuZm9yRWFjaChkZWxldGVCdXR0b24gPT4ge1xuXHRcdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9iamVjdC5jb250ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAobGlzdE9iamVjdC5jb250ZW50c1tpXS5pbmRleCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpIHtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KTtcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XG5cdFx0XHRcdH1cdFx0XHRcdCAgICAgICBcblx0XHRcdH0gXG5cdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7IFxuXHRcdFx0Y29uZmlnQ2hlY2tCb3hlcygpO1xuXHRcdFx0bGV0IG1haW5MaXN0QXJyYXkgPSBBcnJheS5mcm9tKG1haW5MaXN0LmNoaWxkcmVuKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9iamVjdC5jb250ZW50cy5sZW5ndGg7IGkrKykgeyAgICBcblx0XHRcdFx0bWFpbkxpc3RBcnJheVtpXS5pZCA9IGdldEluZGV4KGxpc3RPYmplY3QuY29udGVudHNbaV0pO1xuXHRcdFx0fSAgXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdH0pO1xuXHR9KTtcdCAgICAgICBcbn1cblxuZnVuY3Rpb24gY29uZmlnQ2hlY2tCb3hlcygpIHtcblx0bGV0IGNoZWNrYm94ZXMgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoZWNrYm94XCIpXTtcdCAgIFxuXHRjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuXHRcdGNoZWNrYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNwb25kVG9DbGljayk7XG5cdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc3BvbmRUb0NsaWNrKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlc3BvbmRUb0NsaWNrKGUpIHtcblx0XHRsZXQgdGFyZ2V0SXRlbTtcblx0XHRsZXQgYWN0aXZlTGlzdCA9IG15TGlzdHNBcnJheS5maW5kKGxpc3QgPT4gbGlzdC5hY3RpdmUgPT0gdHJ1ZSk7XG5cdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuXHRcdGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jaGlsZHJlblsxXS5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG5cdFx0dGFyZ2V0SXRlbSA9IGFjdGl2ZUxpc3QuY29udGVudHMuZmluZChsaXN0SXRlbSA9PiBsaXN0SXRlbS5pbmRleCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XG5cdFx0aWYgKHRhcmdldEl0ZW0uY29tcGxldGUgPT0gZmFsc2UpIHtcblx0XHRcdHRhcmdldEl0ZW0uY29tcGxldGUgPSB0cnVlO1x0XG5cdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlVmFsdWUgPSAwO1x0XHRcblx0XHR9XG5cdFx0ZWxzZSBpZiAodGFyZ2V0SXRlbS5jb21wbGV0ZSA9PSB0cnVlKSB7XG5cdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlID0gZmFsc2U7XG5cdFx0XHR0YXJnZXRJdGVtLmNvbXBsZXRlVmFsdWUgPSAxMDtcblx0XHR9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0SXRlbShpdGVtT2JqZWN0KSB7XG5cdGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRpdGVtRWxlbWVudC5pZCA9IGdldEluZGV4KGl0ZW1PYmplY3QpO1xuXHRpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1cIik7XG5cdGFzc2lnblByaW9yaXR5KGl0ZW1FbGVtZW50LCBpdGVtT2JqZWN0KTtcblx0aXRlbUVsZW1lbnQuaW5uZXJIVE1MID0gY3JlYXRlSXRlbUNvbnRlbnQoaXRlbU9iamVjdCk7XG5cdGlmIChpdGVtT2JqZWN0LmNvbXBsZXRlID09IHRydWUpIG1hcmtDb21wbGV0ZShpdGVtRWxlbWVudCk7XG4gICAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1x0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1Db250ZW50KGl0ZW0pIHtcblx0cmV0dXJuICc8ZGl2IGNsYXNzPVwidG9Eb0JveFwiPjxkZXRhaWxzPjxzdW1tYXJ5Pidcblx0ICsgaXRlbS5uYW1lICsgJzwvc3VtbWFyeT48cD4nICsgaXRlbS5kZXNjcmlwdGlvbiArIFxuXHQgJzwvcD48L2RldGFpbHM+PHAgY2xhc3M9XCJkdWVEYXRlXCI+RHVlIGRhdGU6ICcgKyBpdGVtLmR1ZURhdGUgKyBcblx0ICc8L3A+PGxhYmVsIGNsYXNzPVwiY29tcGxldGVMYWJlbFwiPkNvbXBsZXRlZDogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVkXCIgdmFsdWU9XCJcIj48L2xhYmVsPjxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5YPC9idXR0b24+PC9kaXY+JzsgICAgXG59XG5cbmZ1bmN0aW9uIG1hcmtDb21wbGV0ZShpdGVtRWxlbWVudCkge1xuXHRpdGVtRWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG5cdGl0ZW1FbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG5cdGxldCBjaGVja2JveCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hcIik7XG5cdGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSk7XHRcbn1cblxuZXhwb3J0IHtjb25maWdDaGVja0JveGVzLCBjb25maWdJdGVtRGVsZXRlQnV0dG9ucywgc2V0SXRlbUluZGljZXMsIGRpc3BsYXlMaXN0SXRlbX07IiwiaW1wb3J0IHtsaXN0RWxlbWVudHMsIG15TGlzdHNBcnJheSwgY3JlYXRlTGlzdEVsZW1lbnRzLCBsb2FkRGVmYXVsdExpc3R9IGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCB7YWRkTW9iaWxlU3R5bGVzLCB3aWR0aFRyaWdnZXJ9IGZyb20gJy4vbWVkaWEtcXVlcmllcy5qcyc7XG5pbXBvcnQge2xpc3R9IGZyb20gJy4vbWFuYWdlTGlzdHMuanMnO1xuXG5sZXQgbGlzdE5hbWVzO1xubGV0IExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNUID0gXCJ0YXNrLm15TGlzdHNBcnJheVwiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRpZiAobXlMaXN0c0FycmF5Lmxlbmd0aCA9PSAwKSB7XG5cdFx0Y29uc3QgZmlyc3QgPSBuZXcgbGlzdChcIk1haW5cIik7XG5cdFx0Zmlyc3QuYWN0aXZlID0gdHJ1ZTtcdFxuXHR9XHRcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0TmFtZXMyXCIpKSB7XG5cdFx0Ly8gd2lsbCBhbHJlYWR5IGluY2x1ZGUgXCJtYWluXCIgYXMgZmlyc3QgaXRlbTpcblx0XHRsaXN0TmFtZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3ROYW1lczJcIikuc3BsaXQoXCIsXCIpO1xuXHR9XG5cdC8vIGZpcnN0IHRpbWUgYXBwIGlzIHVzZWQ7IFwibWFpblwiIGlzIGFkZGVkOlxuXHRlbHNlIGxpc3ROYW1lcyA9IFtcIk1haW5cIl07XG5cdGNyZWF0ZUxpc3RFbGVtZW50cyhsaXN0TmFtZXMpO1x0XG5cdGxvYWREZWZhdWx0TGlzdCgpO1xuXHRhZGRNb2JpbGVTdHlsZXMod2lkdGhUcmlnZ2VyKTtcbn07XG5cbmZ1bmN0aW9uIHNldExpc3ROYW1lcygpIHtcblx0bGlzdE5hbWVzID0gbGlzdEVsZW1lbnRzLm1hcChsaXN0RWxlbWVudCA9PiB7XG5cdFx0aWYgKGxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlICE9IG51bGwpIHtcblx0XHRcdHJldHVybiBsaXN0RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbGlzdE5hbWVzO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG5cdHNldExpc3ROYW1lcygpOyAgIFxuXHRsaXN0TmFtZXMudG9TdHJpbmcoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3ROYW1lczJcIiwgbGlzdE5hbWVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCwgSlNPTi5zdHJpbmdpZnkobXlMaXN0c0FycmF5KSk7XG5cdGNvbnNvbGUubG9nKFwicG9wdWxhdGVkIVwiKTtcdFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCBwb3B1bGF0ZVN0b3JhZ2UpO1xuXG5leHBvcnQge3BvcHVsYXRlU3RvcmFnZSwgbGlzdE5hbWVzLCBzZXRMaXN0TmFtZXMsIExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNUfTsiLCJpbXBvcnQge215TGlzdHNBcnJheX0gZnJvbSBcIi4vRE9NLmpzXCI7XG5cbmZ1bmN0aW9uIGxpc3QobmFtZSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGVudHMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlOyAgIFxuICAgIG15TGlzdHNBcnJheS5wdXNoKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQge2xpc3R9OyIsImZ1bmN0aW9uIGxpc3RJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHRcblx0dGhpcy5jb21wbGV0ZVZhbHVlID0gMTA7XG5cdHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRleChsaXN0SXRlbU9iamVjdCkge1xuXHRyZXR1cm4gbGlzdEl0ZW1PYmplY3QuaW5kZXg7XG59XG5cbmV4cG9ydCB7bGlzdEl0ZW0sIGdldEluZGV4fTsiLCJjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG5jb25zdCByaWJib24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWJhclwiKTtcbmNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Cb3hcIik7XG5jb25zdCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdHMtc2lkZWJhclwiKTtcbmNvbnN0IHJpZ2h0U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtc2lkZWJhclwiKTtcbmNvbnN0IGFkZEl0ZW1Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEl0ZW1Cb3hcIik7XG5jb25zdCBzb3J0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0Qm94XCIpO1xuY29uc3Qgd2lkdGhUcmlnZ2VyID0gd2luZG93Lm1hdGNoTWVkaWEoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KVwiKTtcblxuXG5sZXQgdmlld0xpc3RzQnV0dG9uO1xubGV0IG9wZW5BZGRJdGVtQm94QnV0dG9uO1xubGV0IG92ZXJsYXk7XG5sZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcbmNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG5mdW5jdGlvbiBhZGRNb2JpbGVDbGFzcygpIHtcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgbGVmdFNpZGViYXIuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtc2xpZGVcIik7XG4gICAgc29ydEJveC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb2JpbGVDbGFzcygpIHtcbiAgICBtYWluQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gICAgbGVmdFNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtc2xpZGVcIik7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBsZWZ0U2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7ICAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2JpbGVCdXR0b25zKCkge1xuICAgIGNvbnN0IGlubmVyTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICB2aWV3TGlzdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB2aWV3TGlzdHNCdXR0b24udGV4dENvbnRlbnQgPSBcIlZpZXcgTGlzdHNcIjtcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvIEl0ZW1cIlxuICAgIGlubmVyTmF2LmlkID0gXCJpbm5lck5hdlwiOyAgICBcbiAgICB2aWV3TGlzdHNCdXR0b24uY2xhc3NOYW1lID0gXCJtb2JpbGUtYnV0dG9uXCI7ICBcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbi5jbGFzc05hbWUgPSBcIm1vYmlsZS1idXR0b25cIjsgXG4gICAgaW5uZXJOYXYuYXBwZW5kQ2hpbGQodmlld0xpc3RzQnV0dG9uKTtcbiAgICBpbm5lck5hdi5hcHBlbmRDaGlsZChvcGVuQWRkSXRlbUJveEJ1dHRvbik7XG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5BZGRJdGVtQm94KTtcbiAgICB2aWV3TGlzdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZpZXdMaXN0cyk7XG4gICAgcmV0dXJuIGlubmVyTmF2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb3BOYXZCYXIoKSB7XG4gICAgY29uc3QgdG9wTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b3BOYXZCYXIuaWQgPSBcInRvcE5hdkJhclwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9wTmF2QmFyKTtcbiAgICB0b3BOYXZCYXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTsgICAgICAgXG4gICAgdG9wTmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZU1vYmlsZUJ1dHRvbnMoKSk7ICAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMob3ZlcmxheSkpIHJldHVybjtcbiAgICBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG92ZXJsYXkuaWQgPSBcIm92ZXJsYXlcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRNb2JpbGVTdHlsZXMoeCkge1xuICAgIGlmICh4Lm1hdGNoZXMpIHtcbiAgICAgICAgYWRkTW9iaWxlQ2xhc3MoKTsgICAgXG4gICAgICAgIHJpZ2h0U2lkZWJhci5yZW1vdmUoKTtcbiAgICAgICAgcmliYm9uLnJlbW92ZSgpOyAgICBcbiAgICAgICAgY3JlYXRlVG9wTmF2QmFyKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc29ydEJveCk7ICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZU1vYmlsZUNsYXNzKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmlnaHRTaWRlYmFyKTtcbiAgICAgICAgcmlnaHRTaWRlYmFyLmFwcGVuZENoaWxkKHNvcnRCb3gpO1xuICAgICAgICByaWdodFNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkSXRlbUJveCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG9wTmF2QmFyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyaWJib24pO1xuICAgICAgICByaWJib24uYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMob3ZlcmxheSkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoY2xvc2VCdXR0b24pKSB7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdmlld0xpc3RzKCkge1xuICAgIGxlZnRTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpOyAgICBcbiAgICBpZiAoIWxlZnRTaWRlYmFyLmNvbnRhaW5zKGNsb3NlQnV0dG9uKSkgbGVmdFNpZGViYXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKGxlZnRTaWRlYmFyKSk7XG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufVxuXG5mdW5jdGlvbiBvcGVuQWRkSXRlbUJveCgpIHtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGlmICghYWRkSXRlbUJveC5jb250YWlucyhjbG9zZUJ1dHRvbikpIGFkZEl0ZW1Cb3guYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pOyAgICBcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VQb3B1cChhZGRJdGVtQm94KSk7XG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwKSB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMob3ZlcmxheSkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICB9XG59XG5cbndpZHRoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFkZE1vYmlsZVN0eWxlcyk7XG5cbmV4cG9ydCB7YWRkTW9iaWxlU3R5bGVzLCB3aWR0aFRyaWdnZXJ9OyIsImNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByaW9yaXR5XCIpKTtcbmxldCBwcmlvcml0eTtcblxucHJpb3JpdHlCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZShcImNoZWNrZWRcIikpIHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcbiAgICB9XG4gICBcdGJ1dHRvbi5vbmZvY3VzID0gKCkgPT4ge1xuXHRcdHByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuXG5cdH07ICAgIFxuXHRidXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBhc3NpZ25Qcmlvcml0eShpdGVtRWxlbWVudCwgaXRlbU9iamVjdCkge1xuXHRzd2l0Y2goaXRlbU9iamVjdC5wcmlvcml0eSkge1xuXHRcdGNhc2UgXCJoaWdoXCI6IFxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuXHRcdGl0ZW1PYmplY3QudmFsdWUgPSAxMDtcblx0XHRicmVhaztcblx0XHRjYXNlIFwibWVkaXVtXCI6XG5cdFx0aXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcblx0XHRpdGVtT2JqZWN0LnZhbHVlID0gMjA7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcImxvd1wiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIik7XG5cdFx0aXRlbU9iamVjdC52YWx1ZSA9IDMwO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbmV4cG9ydCB7YXNzaWduUHJpb3JpdHksIHByaW9yaXR5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL0RPTS5qcyc7XG5pbXBvcnQgJy4vdG9Eby5jc3MnO1xuaW1wb3J0ICcuL2xpc3Qtc29ydGluZy5qcyc7XG5pbXBvcnQgJy4vY2xlYXJJdGVtcy5qcyc7XG5pbXBvcnQgJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuLy9hIGNvbW1lbnRcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=