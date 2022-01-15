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
___CSS_LOADER_EXPORT___.push([module.id, "html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--variableHeight2: max(40px, 9vh);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: var(--myYellow);\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 1;\n}\nh1 {\nmargin: auto;\nfont-size: 2rem;\n}\nh2 {\nfont-size: 1.6rem;\nmargin: 35px 0 30px;\nz-index: 1;\n}\nh3 {\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#title-bar {\nwidth: 100vw;\nbackground-color: azure;\nheight: var(--variableHeight2);\nposition: fixed;\ntop: 0;\npadding: 15px 0 12px;\nborder-bottom: 5px solid blue;\nbox-shadow: 0px -5px 10px 5px white inset;\nz-index: 3;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\ntop: 80px;\nleft: 22vw;\nmargin-left: 3vw;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n#clearButton {\nmargin: 25px 0 5vh;\nposition: absolute;\nleft: 5%;\npadding: 7px 10px;\nbackground-color: transparent;\nborder: none;\ncursor: pointer;\nfont-weight: bold;\ncolor: inherit;\nfont-size: 0.95rem;\ntext-shadow: 1px 1px 0px white, -1px -1px 0px white,  1px 1px 0 blue, -1px -1px 0 blue;\n}\n#clearButton:hover {\nbackground-color: azure;\nborder-radius: 20px;\n}\n#clearButton:focus {\noutline: none;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\nword-wrap: break-word;\n}\ndetails p {\nword-wrap: break-word;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 2px;\n}\np {\nmargin: 10px 0;\ncolor: iherit;\nfont-size: 1rem;\n}\n.dueDate {\nmargin: 3px 0;\ncolor: initial;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\ncolor: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n#right-sidebar {\nposition: sticky;\n/*top: calc(var(--variableHeight2) + 60px);*/\nbottom: 12vh;\nz-index: 2;\nleft: 67vw;\nwidth: fit-content;\nborder: 2px solid red;\nheight: max-content;\npadding: 0;\n}\n/*#sortBox {\nposition: fixed;\ntop: calc(var(--variableHeight2) + 60px);\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\nz-index: 2;\n}*/\n#sortBox {\ntext-align: center;\nz-index: 3;\nwidth: 25vw;\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nheight: 50vh;\nwidth: 30vw;\ncolor: blue;\nmargin-top: 20px;\nz-index: 3;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\nletter-spacing: 1px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box, .high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 75vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\nz-index: 2;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 13px 0 16px;\npadding: 5px;\nborder-radius: 3px;\nfont-size: 0.9rem;\nborder: 2px solid white;\noutline: 1px solid blue;\n}\n#addListButton:hover, #addButton:hover {\ncolor: blue;\nbackground-color: white;\ncursor: pointer;\nborder: 2px solid blue;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: var(--myYellow);\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: var(--myYellow);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\nbox-sizing: border-box;\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: max(7vh, 37px);\nwidth: 75px;\npadding: 6px;\nvertical-align: middle;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 20px auto 15px;\ncursor: pointer;\n}\n.close-button:hover {\nborder: 2px solid white;\noutline: 1px solid dodgerblue;\ncolor: white;\nbackground-color: dodgerblue;\n}\n\n", "",{"version":3,"sources":["webpack://./src/toDo.css"],"names":[],"mappings":"AAAA;AACA,YAAY;AACZ,eAAe;AACf,0BAA0B;AAC1B,kCAAkC;AAClC,iCAAiC;AACjC,8BAA8B;AAC9B;AACA;AACA,uBAAuB;AACvB,SAAS;AACT,UAAU;AACV;AACA;AACA,kBAAkB;AAClB,oBAAoB;AACpB,iCAAiC;AACjC,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ,cAAc;AACd,UAAU;AACV;AACA;AACA,YAAY;AACZ,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB,UAAU;AACV;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,iBAAiB;AACjB,mBAAmB;AACnB;AACA;AACA,YAAY;AACZ,uBAAuB;AACvB,8BAA8B;AAC9B,eAAe;AACf,MAAM;AACN,oBAAoB;AACpB,6BAA6B;AAC7B,yCAAyC;AACzC,UAAU;AACV;AACA;AACA,WAAW;AACX,kBAAkB;AAClB,SAAS;AACT,UAAU;AACV,gBAAgB;AAChB;AACA;AACA,sBAAsB;AACtB,gBAAgB;AAChB;AACA;AACA,8BAA8B;AAC9B,SAAS;AACT,gBAAgB;AAChB,uBAAuB;AACvB,wBAAwB;AACxB;AACA;AACA,kBAAkB;AAClB,kBAAkB;AAClB,QAAQ;AACR,iBAAiB;AACjB,6BAA6B;AAC7B,YAAY;AACZ,eAAe;AACf,iBAAiB;AACjB,cAAc;AACd,kBAAkB;AAClB,sFAAsF;AACtF;AACA;AACA,uBAAuB;AACvB,mBAAmB;AACnB;AACA;AACA,aAAa;AACb;AACA;AACA,kBAAkB;AAClB,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,kBAAkB;AAClB,iBAAiB;AACjB,8BAA8B;AAC9B,qBAAqB;AACrB;AACA;AACA,qBAAqB;AACrB;AACA;AACA,uCAAuC;AACvC;AACA;AACA,uCAAuC;AACvC;AACA;AACA,cAAc;AACd,aAAa;AACb,eAAe;AACf;AACA;AACA,aAAa;AACb,cAAc;AACd;AACA;AACA,kBAAkB;AAClB,YAAY;AACZ,UAAU;AACV,aAAa;AACb,cAAc;AACd;AACA;AACA,YAAY;AACZ,WAAW;AACX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","sourcesContent":["html {\nwidth: 100vw;\nfont-size: 17px;\n--myBlue: rgb(11, 11, 167);\n--variableHeight: max(15vh, 125px);\n--variableHeight2: max(40px, 9vh);\n--myYellow: hsl(60, 100%, 85%);\n}\n* {\nbox-sizing: content-box;\nmargin: 0;\npadding: 0;\n}\nbody {\ntext-align: center;\ncolor: var(--myBlue);\nbackground-color: var(--myYellow);\nposition: relative;\nwidth: 100%;\nheight: auto;\noverflow: auto;\nz-index: 1;\n}\nh1 {\nmargin: auto;\nfont-size: 2rem;\n}\nh2 {\nfont-size: 1.6rem;\nmargin: 35px 0 30px;\nz-index: 1;\n}\nh3 {\nfont-size: 1.4rem;\nmargin-bottom: 20px;\n}\nh4 {\nfont-size: 1.2rem;\nmargin: 15px 0 10px;\n}\n#title-bar {\nwidth: 100vw;\nbackground-color: azure;\nheight: var(--variableHeight2);\nposition: fixed;\ntop: 0;\npadding: 15px 0 12px;\nborder-bottom: 5px solid blue;\nbox-shadow: 0px -5px 10px 5px white inset;\nz-index: 3;\n}\n#mainBox {\nwidth: 40vw;\nposition: relative;\ntop: 80px;\nleft: 22vw;\nmargin-left: 3vw;\n}\n#mainlist {\nborder: 3px solid blue;\nmin-height: 20px;\n}\n#mainlist .listItem {\nborder-bottom: 6px double blue;\nmargin: 0;\ntext-align: left;\nlist-style-type: Arabic;\npadding: 4px 2px 1px 3px;\n}\n#clearButton {\nmargin: 25px 0 5vh;\nposition: absolute;\nleft: 5%;\npadding: 7px 10px;\nbackground-color: transparent;\nborder: none;\ncursor: pointer;\nfont-weight: bold;\ncolor: inherit;\nfont-size: 0.95rem;\ntext-shadow: 1px 1px 0px white, -1px -1px 0px white,  1px 1px 0 blue, -1px -1px 0 blue;\n}\n#clearButton:hover {\nbackground-color: azure;\nborder-radius: 20px;\n}\n#clearButton:focus {\noutline: none;\n}\n.toDoBox {\nposition: relative;    \nfont-size: 1rem;\n}\nsummary {\nfont-weight: bold;\nmargin-bottom: 7px;\nfont-size: 1.1rem;\ntransition: text-decoration 1s;\nword-wrap: break-word;\n}\ndetails p {\nword-wrap: break-word;\n}\nsummary.complete {\ntext-decoration: line-through black 4px;\n}\ndetails p.complete {\ntext-decoration: line-through black 2px;\n}\np {\nmargin: 10px 0;\ncolor: iherit;\nfont-size: 1rem;\n}\n.dueDate {\nmargin: 3px 0;\ncolor: initial;\n}\n.completeLabel {\nposition: absolute;\nbottom: -3px;\nright: 0px;\nfont: inherit;\ncolor: inherit;\n}\ninput[type=\"checkbox\"] {\nheight: 16px;\nwidth: 16px;\nborder: 1px solid black;\nmargin: 5px 0 0;\n}\n#right-sidebar {\nposition: sticky;\n/*top: calc(var(--variableHeight2) + 60px);*/\nbottom: 12vh;\nz-index: 2;\nleft: 67vw;\nwidth: fit-content;\nborder: 2px solid red;\nheight: max-content;\npadding: 0;\n}\n/*#sortBox {\nposition: fixed;\ntop: calc(var(--variableHeight2) + 60px);\nleft: 70vw;\nwidth: 25vw;\ntext-align: center;\nz-index: 2;\n}*/\n#sortBox {\ntext-align: center;\nz-index: 3;\nwidth: 25vw;\n}\n#sortBox label {\nmargin-right: 10px;\nfont-variant: small-caps;\nfont-size: 1.2rem;\n}\nselect {\nbackground-color: azure;\ncolor: var(--myBlue);\nfont-size: 0.9rem;\nborder: 2px solid blue;\nheight: 22px;\npadding: 3px;\n}\n#addItemBox {\nheight: 50vh;\nwidth: 30vw;\ncolor: blue;\nmargin-top: 20px;\nz-index: 3;\n}\nfieldset {\nborder-radius: 5px;\n}\nlegend {\nfont-size: 1.2rem;\nmargin: 0 auto 15px;\n}\ninput {\nmargin: 6px 0;\nfont-size: 0.85rem;\npadding: 3px 2px;\nletter-spacing: 1px;\n}\n.colour-code {\nwidth: 13px;\nheight: 13px;\ndisplay: inline-block;\nmargin-left: 15px;\nborder: 1px solid black;\n}\n#red-box, .high-priority {\nbackground-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\nbackground-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\nbackground-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\nborder-right: 4px solid blue;\nheight: 75vh;\nwidth: 20vw;\nposition: fixed;\nleft: 5px;\nbottom: 10px;\noverflow: auto;\nz-index: 2;\n}\n#mylists {\nlist-style: square inside;\ntext-align: left;\n}\n#mylists li {\nmargin: 12px 5px 12px 25px;\nfont-size: 1.2rem;\ntext-decoration: none;\nwidth: 70%;\ncolor: blue;\n}\na:active, a:focus, li:focus {\nfont-size: 1.3rem;\nfont-weight: bold;    \n}\na, a:visited, a:active {\ntext-decoration: none;\ncolor: currentColor;\n}\n#addListButton, #addButton {\nbackground-color: blue;\ncolor: white;\nmargin: 13px 0 16px;\npadding: 5px;\nborder-radius: 3px;\nfont-size: 0.9rem;\nborder: 2px solid white;\noutline: 1px solid blue;\n}\n#addListButton:hover, #addButton:hover {\ncolor: blue;\nbackground-color: white;\ncursor: pointer;\nborder: 2px solid blue;\n}\n#listName, #listName:focus {\nbackground-color: transparent;\nborder: none;\noutline: none;\nborder-bottom: 2px solid blue;\nmargin: 10px;\nfont-size: 0.9rem;\n}\n.delete {\nappearance: none;\n-moz-appearance: none;\nborder: none;\nposition: absolute;\nright: 1px;\ntop: 1px;\nbackground-color: red;\ncolor: white;\nheight: 15px;\nwidth: 15px;\npadding: 1px;\nfont: bolder 1rem;\ntext-align: center;\nvertical-align: middle;\ncursor: pointer;\nborder: 1px solid white;\n}\n.delete-li {\ncolor: white;\nbackground-color: red;\nwidth: 19px;\nheight: 19px;\nborder: none;\nfloat: right;\nfont-weight: bold;\nfont-size: 0.9rem;\nmargin-top: 4px;\ncursor: pointer;\nborder: 1px solid black;\nborder-radius: 30%;\n}\n#topNavBar {\nwidth: 100%;\nborder-bottom: 3px solid blue;\nposition: fixed;\ntop: 0;\nheight: var(--variableHeight);\nz-index: 3;\ntext-align: center;\nbackground-color: var(--myYellow);\noverflow: auto;\n}\n#mainBox.mobile {\nwidth: 80vw;\nmargin: 5vh auto;\nz-index: 1;\nposition: absolute;\nleft: 10vw;\ntop: max(25vh, 190px);\n}\n#sortBox.mobile {\nposition: absolute;\ntop: max(20vh, 150px);\nwidth: fit-content;\nleft: 20vw;\nz-index: 1;\nheight: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\nwidth: 60vw;\nposition: absolute;\ntop: max(18vh, 150px);\nheight: fit-content;\nborder: 4px solid dodgerblue;\nz-index: 3;\nbackground-color: var(--myYellow);\nborder-radius: 5px;\noverflow: auto;\npadding: 20px;\nbox-sizing: border-box;\nvisibility: hidden;\ntransition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\nleft: -100%;\ntransition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\nleft: 20vw;\nvisibility: visible;\nposition: absolute;\n}\n#addItemBox.mobile-slide {\nposition: fixed;\nleft: 100%;\ntransition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\nborder: none;\n}\n#innerNav {\nwidth: 80%;\nposition: absolute;\nbottom: 0;\nheight: 37%;\nmargin: 0 10%;\nbox-sizing: content-box;\nborder-top: 2px solid blue;\nborder-left: 2px solid blue;\nborder-right: 2px solid blue;\nborder-radius: 4px;\nbackground-color: blue;\n}\n.mobile-button {\nbackground-color: azure;\ncolor: var(--myBlue);\nwidth: 50%;\nfloat: left;\nheight: 100%;\nbox-sizing: border-box;\nborder: 2px solid blue;\nfont-size: 1.1rem;\ncursor: pointer;\nborder-radius: 4px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\ntext-shadow: 1px 1px 2px white;\nbackground-color: rgb(12, 244, 248);\n}\n#overlay {\nwidth: 100%;\nheight: 100vh;\nposition: fixed;\ntop: calc(var(--variableHeight) - 3px);\nbackground-color: rgb(78, 78, 78);\nz-index: 2;\nopacity: 0.8;\n}\n.close-button {\nbox-sizing: border-box;\ncolor: dodgerblue;\nbackground-color: white;\nborder: 3px solid dodgerblue;\nheight: max(7vh, 37px);\nwidth: 75px;\npadding: 6px;\nvertical-align: middle;\nborder-radius: 5px;\nfont-size: 1rem;\nmargin: 20px auto 15px;\ncursor: pointer;\n}\n.close-button:hover {\nborder: 2px solid white;\noutline: 1px solid dodgerblue;\ncolor: white;\nbackground-color: dodgerblue;\n}\n\n"],"sourceRoot":""}]);
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






//a comment






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGVBQWUsa0JBQWtCLDZCQUE2QixxQ0FBcUMsb0NBQW9DLGlDQUFpQyxHQUFHLEtBQUssMEJBQTBCLFlBQVksYUFBYSxHQUFHLFFBQVEscUJBQXFCLHVCQUF1QixvQ0FBb0MscUJBQXFCLGNBQWMsZUFBZSxpQkFBaUIsYUFBYSxHQUFHLE1BQU0sZUFBZSxrQkFBa0IsR0FBRyxNQUFNLG9CQUFvQixzQkFBc0IsYUFBYSxHQUFHLE1BQU0sb0JBQW9CLHNCQUFzQixHQUFHLE1BQU0sb0JBQW9CLHNCQUFzQixHQUFHLGNBQWMsZUFBZSwwQkFBMEIsaUNBQWlDLGtCQUFrQixTQUFTLHVCQUF1QixnQ0FBZ0MsNENBQTRDLGFBQWEsR0FBRyxZQUFZLGNBQWMscUJBQXFCLFlBQVksYUFBYSxtQkFBbUIsR0FBRyxhQUFhLHlCQUF5QixtQkFBbUIsR0FBRyx1QkFBdUIsaUNBQWlDLFlBQVksbUJBQW1CLDBCQUEwQiwyQkFBMkIsR0FBRyxnQkFBZ0IscUJBQXFCLHFCQUFxQixXQUFXLG9CQUFvQixnQ0FBZ0MsZUFBZSxrQkFBa0Isb0JBQW9CLGlCQUFpQixxQkFBcUIseUZBQXlGLEdBQUcsc0JBQXNCLDBCQUEwQixzQkFBc0IsR0FBRyxzQkFBc0IsZ0JBQWdCLEdBQUcsWUFBWSx5QkFBeUIsa0JBQWtCLEdBQUcsV0FBVyxvQkFBb0IscUJBQXFCLG9CQUFvQixpQ0FBaUMsd0JBQXdCLEdBQUcsYUFBYSx3QkFBd0IsR0FBRyxvQkFBb0IsMENBQTBDLEdBQUcsc0JBQXNCLDBDQUEwQyxHQUFHLEtBQUssaUJBQWlCLGdCQUFnQixrQkFBa0IsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0IscUJBQXFCLGVBQWUsYUFBYSxnQkFBZ0IsaUJBQWlCLEdBQUcsNEJBQTRCLGVBQWUsY0FBYywwQkFBMEIsa0JBQWtCLEdBQUcsa0JBQWtCLG1CQUFtQiw2Q0FBNkMsaUJBQWlCLGFBQWEsYUFBYSxxQkFBcUIsd0JBQXdCLHNCQUFzQixhQUFhLEdBQUcsY0FBYyxrQkFBa0IsMkNBQTJDLGFBQWEsY0FBYyxxQkFBcUIsYUFBYSxHQUFHLGNBQWMscUJBQXFCLGFBQWEsY0FBYyxHQUFHLGtCQUFrQixxQkFBcUIsMkJBQTJCLG9CQUFvQixHQUFHLFVBQVUsMEJBQTBCLHVCQUF1QixvQkFBb0IseUJBQXlCLGVBQWUsZUFBZSxHQUFHLGVBQWUsZUFBZSxjQUFjLGNBQWMsbUJBQW1CLGFBQWEsR0FBRyxZQUFZLHFCQUFxQixHQUFHLFVBQVUsb0JBQW9CLHNCQUFzQixHQUFHLFNBQVMsZ0JBQWdCLHFCQUFxQixtQkFBbUIsc0JBQXNCLEdBQUcsZ0JBQWdCLGNBQWMsZUFBZSx3QkFBd0Isb0JBQW9CLDBCQUEwQixHQUFHLDRCQUE0QixxQ0FBcUMsR0FBRyxpQ0FBaUMsdUNBQXVDLEdBQUcsNkJBQTZCLHVDQUF1QyxHQUFHLGtCQUFrQiwrQkFBK0IsZUFBZSxjQUFjLGtCQUFrQixZQUFZLGVBQWUsaUJBQWlCLGFBQWEsR0FBRyxZQUFZLDRCQUE0QixtQkFBbUIsR0FBRyxlQUFlLDZCQUE2QixvQkFBb0Isd0JBQXdCLGFBQWEsY0FBYyxHQUFHLCtCQUErQixvQkFBb0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixzQkFBc0IsR0FBRyw4QkFBOEIseUJBQXlCLGVBQWUsc0JBQXNCLGVBQWUscUJBQXFCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLEdBQUcsMENBQTBDLGNBQWMsMEJBQTBCLGtCQUFrQix5QkFBeUIsR0FBRyw4QkFBOEIsZ0NBQWdDLGVBQWUsZ0JBQWdCLGdDQUFnQyxlQUFlLG9CQUFvQixHQUFHLFdBQVcsbUJBQW1CLHdCQUF3QixlQUFlLHFCQUFxQixhQUFhLFdBQVcsd0JBQXdCLGVBQWUsZUFBZSxjQUFjLGVBQWUsb0JBQW9CLHFCQUFxQix5QkFBeUIsa0JBQWtCLDBCQUEwQixHQUFHLGNBQWMsZUFBZSx3QkFBd0IsY0FBYyxlQUFlLGVBQWUsZUFBZSxvQkFBb0Isb0JBQW9CLGtCQUFrQixrQkFBa0IsMEJBQTBCLHFCQUFxQixHQUFHLGNBQWMsY0FBYyxnQ0FBZ0Msa0JBQWtCLFNBQVMsZ0NBQWdDLGFBQWEscUJBQXFCLG9DQUFvQyxpQkFBaUIsR0FBRyxtQkFBbUIsY0FBYyxtQkFBbUIsYUFBYSxxQkFBcUIsYUFBYSx3QkFBd0IsR0FBRyxtQkFBbUIscUJBQXFCLHdCQUF3QixxQkFBcUIsYUFBYSxhQUFhLHNCQUFzQixHQUFHLHlEQUF5RCxjQUFjLHFCQUFxQix3QkFBd0Isc0JBQXNCLCtCQUErQixhQUFhLG9DQUFvQyxxQkFBcUIsaUJBQWlCLGdCQUFnQix5QkFBeUIscUJBQXFCLCtCQUErQixHQUFHLCtCQUErQixjQUFjLHNCQUFzQixHQUFHLHlFQUF5RSxhQUFhLHNCQUFzQixxQkFBcUIsR0FBRyw0QkFBNEIsa0JBQWtCLGFBQWEsc0JBQXNCLEdBQUcscUNBQXFDLGVBQWUsR0FBRyxhQUFhLGFBQWEscUJBQXFCLFlBQVksY0FBYyxnQkFBZ0IsMEJBQTBCLDZCQUE2Qiw4QkFBOEIsK0JBQStCLHFCQUFxQix5QkFBeUIsR0FBRyxrQkFBa0IsMEJBQTBCLHVCQUF1QixhQUFhLGNBQWMsZUFBZSx5QkFBeUIseUJBQXlCLG9CQUFvQixrQkFBa0IscUJBQXFCLEdBQUcscUVBQXFFLGlDQUFpQyxzQ0FBc0MsR0FBRyxZQUFZLGNBQWMsZ0JBQWdCLGtCQUFrQix5Q0FBeUMsb0NBQW9DLGFBQWEsZUFBZSxHQUFHLGlCQUFpQix5QkFBeUIsb0JBQW9CLDBCQUEwQiwrQkFBK0IseUJBQXlCLGNBQWMsZUFBZSx5QkFBeUIscUJBQXFCLGtCQUFrQix5QkFBeUIsa0JBQWtCLEdBQUcsdUJBQXVCLDBCQUEwQixnQ0FBZ0MsZUFBZSwrQkFBK0IsR0FBRyxXQUFXLCtFQUErRSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0I7QUFDRTtBQUNPO0FBQ0Y7QUFDRTs7QUFFM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcz8zODM5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NsZWFySXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdC1zb3J0aW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RJdGVtc0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9Eb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21lZGlhLXF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbndpZHRoOiAxMDB2dztcXG5mb250LXNpemU6IDE3cHg7XFxuLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxuLS12YXJpYWJsZUhlaWdodDogbWF4KDE1dmgsIDEyNXB4KTtcXG4tLXZhcmlhYmxlSGVpZ2h0MjogbWF4KDQwcHgsIDl2aCk7XFxuLS1teVllbGxvdzogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbn1cXG4qIHtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiBhdXRvO1xcbm92ZXJmbG93OiBhdXRvO1xcbnotaW5kZXg6IDE7XFxufVxcbmgxIHtcXG5tYXJnaW46IGF1dG87XFxuZm9udC1zaXplOiAycmVtO1xcbn1cXG5oMiB7XFxuZm9udC1zaXplOiAxLjZyZW07XFxubWFyZ2luOiAzNXB4IDAgMzBweDtcXG56LWluZGV4OiAxO1xcbn1cXG5oMyB7XFxuZm9udC1zaXplOiAxLjRyZW07XFxubWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuaDQge1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMTVweCAwIDEwcHg7XFxufVxcbiN0aXRsZS1iYXIge1xcbndpZHRoOiAxMDB2dztcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5oZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0Mik7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMDtcXG5wYWRkaW5nOiAxNXB4IDAgMTJweDtcXG5ib3JkZXItYm90dG9tOiA1cHggc29saWQgYmx1ZTtcXG5ib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IDVweCB3aGl0ZSBpbnNldDtcXG56LWluZGV4OiAzO1xcbn1cXG4jbWFpbkJveCB7XFxud2lkdGg6IDQwdnc7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbnRvcDogODBweDtcXG5sZWZ0OiAyMnZ3O1xcbm1hcmdpbi1sZWZ0OiAzdnc7XFxufVxcbiNtYWlubGlzdCB7XFxuYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG5taW4taGVpZ2h0OiAyMHB4O1xcbn1cXG4jbWFpbmxpc3QgLmxpc3RJdGVtIHtcXG5ib3JkZXItYm90dG9tOiA2cHggZG91YmxlIGJsdWU7XFxubWFyZ2luOiAwO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxubGlzdC1zdHlsZS10eXBlOiBBcmFiaWM7XFxucGFkZGluZzogNHB4IDJweCAxcHggM3B4O1xcbn1cXG4jY2xlYXJCdXR0b24ge1xcbm1hcmdpbjogMjVweCAwIDV2aDtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxubGVmdDogNSU7XFxucGFkZGluZzogN3B4IDEwcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5mb250LXdlaWdodDogYm9sZDtcXG5jb2xvcjogaW5oZXJpdDtcXG5mb250LXNpemU6IDAuOTVyZW07XFxudGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHdoaXRlLCAtMXB4IC0xcHggMHB4IHdoaXRlLCAgMXB4IDFweCAwIGJsdWUsIC0xcHggLTFweCAwIGJsdWU7XFxufVxcbiNjbGVhckJ1dHRvbjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuI2NsZWFyQnV0dG9uOmZvY3VzIHtcXG5vdXRsaW5lOiBub25lO1xcbn1cXG4udG9Eb0JveCB7XFxucG9zaXRpb246IHJlbGF0aXZlOyAgICBcXG5mb250LXNpemU6IDFyZW07XFxufVxcbnN1bW1hcnkge1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbm1hcmdpbi1ib3R0b206IDdweDtcXG5mb250LXNpemU6IDEuMXJlbTtcXG50cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMXM7XFxud29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5kZXRhaWxzIHAge1xcbndvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuc3VtbWFyeS5jb21wbGV0ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG5kZXRhaWxzIHAuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDJweDtcXG59XFxucCB7XFxubWFyZ2luOiAxMHB4IDA7XFxuY29sb3I6IGloZXJpdDtcXG5mb250LXNpemU6IDFyZW07XFxufVxcbi5kdWVEYXRlIHtcXG5tYXJnaW46IDNweCAwO1xcbmNvbG9yOiBpbml0aWFsO1xcbn1cXG4uY29tcGxldGVMYWJlbCB7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogLTNweDtcXG5yaWdodDogMHB4O1xcbmZvbnQ6IGluaGVyaXQ7XFxuY29sb3I6IGluaGVyaXQ7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbmhlaWdodDogMTZweDtcXG53aWR0aDogMTZweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5tYXJnaW46IDVweCAwIDA7XFxufVxcbiNyaWdodC1zaWRlYmFyIHtcXG5wb3NpdGlvbjogc3RpY2t5O1xcbi8qdG9wOiBjYWxjKHZhcigtLXZhcmlhYmxlSGVpZ2h0MikgKyA2MHB4KTsqL1xcbmJvdHRvbTogMTJ2aDtcXG56LWluZGV4OiAyO1xcbmxlZnQ6IDY3dnc7XFxud2lkdGg6IGZpdC1jb250ZW50O1xcbmJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG5oZWlnaHQ6IG1heC1jb250ZW50O1xcbnBhZGRpbmc6IDA7XFxufVxcbi8qI3NvcnRCb3gge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQyKSArIDYwcHgpO1xcbmxlZnQ6IDcwdnc7XFxud2lkdGg6IDI1dnc7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbnotaW5kZXg6IDI7XFxufSovXFxuI3NvcnRCb3gge1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG56LWluZGV4OiAzO1xcbndpZHRoOiAyNXZ3O1xcbn1cXG4jc29ydEJveCBsYWJlbCB7XFxubWFyZ2luLXJpZ2h0OiAxMHB4O1xcbmZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG5mb250LXNpemU6IDEuMnJlbTtcXG59XFxuc2VsZWN0IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmhlaWdodDogMjJweDtcXG5wYWRkaW5nOiAzcHg7XFxufVxcbiNhZGRJdGVtQm94IHtcXG5oZWlnaHQ6IDUwdmg7XFxud2lkdGg6IDMwdnc7XFxuY29sb3I6IGJsdWU7XFxubWFyZ2luLXRvcDogMjBweDtcXG56LWluZGV4OiAzO1xcbn1cXG5maWVsZHNldCB7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5sZWdlbmQge1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbm1hcmdpbjogMCBhdXRvIDE1cHg7XFxufVxcbmlucHV0IHtcXG5tYXJnaW46IDZweCAwO1xcbmZvbnQtc2l6ZTogMC44NXJlbTtcXG5wYWRkaW5nOiAzcHggMnB4O1xcbmxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5jb2xvdXItY29kZSB7XFxud2lkdGg6IDEzcHg7XFxuaGVpZ2h0OiAxM3B4O1xcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5tYXJnaW4tbGVmdDogMTVweDtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI3JlZC1ib3gsIC5oaWdoLXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNzAlLCA4MCUpO1xcbn1cXG4jb3JhbmdlLWJveCwgLm1lZGl1bS1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4jZ3JlZW4tYm94LCAubG93LXByaW9yaXR5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCA3MCUsIDgwJSk7XFxufVxcbiNsaXN0cy1zaWRlYmFyIHtcXG5ib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibHVlO1xcbmhlaWdodDogNzV2aDtcXG53aWR0aDogMjB2dztcXG5wb3NpdGlvbjogZml4ZWQ7XFxubGVmdDogNXB4O1xcbmJvdHRvbTogMTBweDtcXG5vdmVyZmxvdzogYXV0bztcXG56LWluZGV4OiAyO1xcbn1cXG4jbXlsaXN0cyB7XFxubGlzdC1zdHlsZTogc3F1YXJlIGluc2lkZTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jbXlsaXN0cyBsaSB7XFxubWFyZ2luOiAxMnB4IDVweCAxMnB4IDI1cHg7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbndpZHRoOiA3MCU7XFxuY29sb3I6IGJsdWU7XFxufVxcbmE6YWN0aXZlLCBhOmZvY3VzLCBsaTpmb2N1cyB7XFxuZm9udC1zaXplOiAxLjNyZW07XFxuZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxcbn1cXG5hLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuI2FkZExpc3RCdXR0b24sICNhZGRCdXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuY29sb3I6IHdoaXRlO1xcbm1hcmdpbjogMTNweCAwIDE2cHg7XFxucGFkZGluZzogNXB4O1xcbmJvcmRlci1yYWRpdXM6IDNweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5ib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG5vdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG59XFxuI2FkZExpc3RCdXR0b246aG92ZXIsICNhZGRCdXR0b246aG92ZXIge1xcbmNvbG9yOiBibHVlO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbn1cXG4jbGlzdE5hbWUsICNsaXN0TmFtZTpmb2N1cyB7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuYm9yZGVyOiBub25lO1xcbm91dGxpbmU6IG5vbmU7XFxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsdWU7XFxubWFyZ2luOiAxMHB4O1xcbmZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uZGVsZXRlIHtcXG5hcHBlYXJhbmNlOiBub25lO1xcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5ib3JkZXI6IG5vbmU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnJpZ2h0OiAxcHg7XFxudG9wOiAxcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbmNvbG9yOiB3aGl0ZTtcXG5oZWlnaHQ6IDE1cHg7XFxud2lkdGg6IDE1cHg7XFxucGFkZGluZzogMXB4O1xcbmZvbnQ6IGJvbGRlciAxcmVtO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmRlbGV0ZS1saSB7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG53aWR0aDogMTlweDtcXG5oZWlnaHQ6IDE5cHg7XFxuYm9yZGVyOiBub25lO1xcbmZsb2F0OiByaWdodDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG5tYXJnaW4tdG9wOiA0cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbmJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuI3RvcE5hdkJhciB7XFxud2lkdGg6IDEwMCU7XFxuYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMDtcXG5oZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0KTtcXG56LWluZGV4OiAzO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teVllbGxvdyk7XFxub3ZlcmZsb3c6IGF1dG87XFxufVxcbiNtYWluQm94Lm1vYmlsZSB7XFxud2lkdGg6IDgwdnc7XFxubWFyZ2luOiA1dmggYXV0bztcXG56LWluZGV4OiAxO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5sZWZ0OiAxMHZ3O1xcbnRvcDogbWF4KDI1dmgsIDE5MHB4KTtcXG59XFxuI3NvcnRCb3gubW9iaWxlIHtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiBtYXgoMjB2aCwgMTUwcHgpO1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5sZWZ0OiAyMHZ3O1xcbnotaW5kZXg6IDE7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbndpZHRoOiA2MHZ3O1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IG1heCgxOHZoLCAxNTBweCk7XFxuaGVpZ2h0OiBmaXQtY29udGVudDtcXG5ib3JkZXI6IDRweCBzb2xpZCBkb2RnZXJibHVlO1xcbnotaW5kZXg6IDM7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5vdmVyZmxvdzogYXV0bztcXG5wYWRkaW5nOiAyMHB4O1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxudmlzaWJpbGl0eTogaGlkZGVuO1xcbnRyYW5zaXRpb246IHZpc2liaWxpdHkgMTAwbXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSB7XFxubGVmdDogLTEwMCU7XFxudHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLnZpc2libGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZS52aXNpYmxlIHtcXG5sZWZ0OiAyMHZ3O1xcbnZpc2liaWxpdHk6IHZpc2libGU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5sZWZ0OiAxMDAlO1xcbnRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSBmaWVsZHNldCB7XFxuYm9yZGVyOiBub25lO1xcbn1cXG4jaW5uZXJOYXYge1xcbndpZHRoOiA4MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmJvdHRvbTogMDtcXG5oZWlnaHQ6IDM3JTtcXG5tYXJnaW46IDAgMTAlO1xcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbmJvcmRlci10b3A6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibHVlO1xcbmJvcmRlci1yYWRpdXM6IDRweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4ubW9iaWxlLWJ1dHRvbiB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxud2lkdGg6IDUwJTtcXG5mbG9hdDogbGVmdDtcXG5oZWlnaHQ6IDEwMCU7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbmZvbnQtc2l6ZTogMS4xcmVtO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5tb2JpbGUtYnV0dG9uOmhvdmVyLCAubW9iaWxlLWJ1dHRvbjphY3RpdmUsIC5tb2JpbGUtYnV0dG9uOmZvY3VzIHtcXG50ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAyNDQsIDI0OCk7XFxufVxcbiNvdmVybGF5IHtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMHZoO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQpIC0gM3B4KTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxuei1pbmRleDogMjtcXG5vcGFjaXR5OiAwLjg7XFxufVxcbi5jbG9zZS1idXR0b24ge1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuY29sb3I6IGRvZGdlcmJsdWU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcXG5oZWlnaHQ6IG1heCg3dmgsIDM3cHgpO1xcbndpZHRoOiA3NXB4O1xcbnBhZGRpbmc6IDZweDtcXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5mb250LXNpemU6IDFyZW07XFxubWFyZ2luOiAyMHB4IGF1dG8gMTVweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbm91dGxpbmU6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xcbmNvbG9yOiB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9Eby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxZQUFZO0FBQ1osZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsaUNBQWlDO0FBQ2pDLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsVUFBVTtBQUNWO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCLDhCQUE4QjtB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QUFrQjtBQUNsQiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLFVBQVU7QUFDVixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxXQUFXO0FBQ1gsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1QixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVixXQUFXO0FBQ1gsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2IsZUFBZTtBQUNmLHNDQUFzQztBQUN0QyxpQ0FBaUM7QUFDakMsVUFBVTtBQUNWLFlBQVk7QUFDWjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1gsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLDRCQUE0QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG53aWR0aDogMTAwdnc7XFxuZm9udC1zaXplOiAxN3B4O1xcbi0tbXlCbHVlOiByZ2IoMTEsIDExLCAxNjcpO1xcbi0tdmFyaWFibGVIZWlnaHQ6IG1heCgxNXZoLCAxMjVweCk7XFxuLS12YXJpYWJsZUhlaWdodDI6IG1heCg0MHB4LCA5dmgpO1xcbi0tbXlZZWxsb3c6IGhzbCg2MCwgMTAwJSwgODUlKTtcXG59XFxuKiB7XFxuYm94LXNpemluZzogY29udGVudC1ib3g7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teVllbGxvdyk7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogYXV0bztcXG5vdmVyZmxvdzogYXV0bztcXG56LWluZGV4OiAxO1xcbn1cXG5oMSB7XFxubWFyZ2luOiBhdXRvO1xcbmZvbnQtc2l6ZTogMnJlbTtcXG59XFxuaDIge1xcbmZvbnQtc2l6ZTogMS42cmVtO1xcbm1hcmdpbjogMzVweCAwIDMwcHg7XFxuei1pbmRleDogMTtcXG59XFxuaDMge1xcbmZvbnQtc2l6ZTogMS40cmVtO1xcbm1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbmg0IHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDE1cHggMCAxMHB4O1xcbn1cXG4jdGl0bGUtYmFyIHtcXG53aWR0aDogMTAwdnc7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuaGVpZ2h0OiB2YXIoLS12YXJpYWJsZUhlaWdodDIpO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDA7XFxucGFkZGluZzogMTVweCAwIDEycHg7XFxuYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsdWU7XFxuYm94LXNoYWRvdzogMHB4IC01cHggMTBweCA1cHggd2hpdGUgaW5zZXQ7XFxuei1pbmRleDogMztcXG59XFxuI21haW5Cb3gge1xcbndpZHRoOiA0MHZ3O1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG50b3A6IDgwcHg7XFxubGVmdDogMjJ2dztcXG5tYXJnaW4tbGVmdDogM3Z3O1xcbn1cXG4jbWFpbmxpc3Qge1xcbmJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxubWluLWhlaWdodDogMjBweDtcXG59XFxuI21haW5saXN0IC5saXN0SXRlbSB7XFxuYm9yZGVyLWJvdHRvbTogNnB4IGRvdWJsZSBibHVlO1xcbm1hcmdpbjogMDtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbmxpc3Qtc3R5bGUtdHlwZTogQXJhYmljO1xcbnBhZGRpbmc6IDRweCAycHggMXB4IDNweDtcXG59XFxuI2NsZWFyQnV0dG9uIHtcXG5tYXJnaW46IDI1cHggMCA1dmg7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDUlO1xcbnBhZGRpbmc6IDdweCAxMHB4O1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmJvcmRlcjogbm9uZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuY29sb3I6IGluaGVyaXQ7XFxuZm9udC1zaXplOiAwLjk1cmVtO1xcbnRleHQtc2hhZG93OiAxcHggMXB4IDBweCB3aGl0ZSwgLTFweCAtMXB4IDBweCB3aGl0ZSwgIDFweCAxcHggMCBibHVlLCAtMXB4IC0xcHggMCBibHVlO1xcbn1cXG4jY2xlYXJCdXR0b246aG92ZXIge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbiNjbGVhckJ1dHRvbjpmb2N1cyB7XFxub3V0bGluZTogbm9uZTtcXG59XFxuLnRvRG9Cb3gge1xcbnBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG5zdW1tYXJ5IHtcXG5mb250LXdlaWdodDogYm9sZDtcXG5tYXJnaW4tYm90dG9tOiA3cHg7XFxuZm9udC1zaXplOiAxLjFyZW07XFxudHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDFzO1xcbndvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuZGV0YWlscyBwIHtcXG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbnN1bW1hcnkuY29tcGxldGUge1xcbnRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuZGV0YWlscyBwLmNvbXBsZXRlIHtcXG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayAycHg7XFxufVxcbnAge1xcbm1hcmdpbjogMTBweCAwO1xcbmNvbG9yOiBpaGVyaXQ7XFxuZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZHVlRGF0ZSB7XFxubWFyZ2luOiAzcHggMDtcXG5jb2xvcjogaW5pdGlhbDtcXG59XFxuLmNvbXBsZXRlTGFiZWwge1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5ib3R0b206IC0zcHg7XFxucmlnaHQ6IDBweDtcXG5mb250OiBpbmhlcml0O1xcbmNvbG9yOiBpbmhlcml0O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5oZWlnaHQ6IDE2cHg7XFxud2lkdGg6IDE2cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxubWFyZ2luOiA1cHggMCAwO1xcbn1cXG4jcmlnaHQtc2lkZWJhciB7XFxucG9zaXRpb246IHN0aWNreTtcXG4vKnRvcDogY2FsYyh2YXIoLS12YXJpYWJsZUhlaWdodDIpICsgNjBweCk7Ki9cXG5ib3R0b206IDEydmg7XFxuei1pbmRleDogMjtcXG5sZWZ0OiA2N3Z3O1xcbndpZHRoOiBmaXQtY29udGVudDtcXG5ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuaGVpZ2h0OiBtYXgtY29udGVudDtcXG5wYWRkaW5nOiAwO1xcbn1cXG4vKiNzb3J0Qm94IHtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiBjYWxjKHZhcigtLXZhcmlhYmxlSGVpZ2h0MikgKyA2MHB4KTtcXG5sZWZ0OiA3MHZ3O1xcbndpZHRoOiAyNXZ3O1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG56LWluZGV4OiAyO1xcbn0qL1xcbiNzb3J0Qm94IHtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuei1pbmRleDogMztcXG53aWR0aDogMjV2dztcXG59XFxuI3NvcnRCb3ggbGFiZWwge1xcbm1hcmdpbi1yaWdodDogMTBweDtcXG5mb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuZm9udC1zaXplOiAxLjJyZW07XFxufVxcbnNlbGVjdCB7XFxuYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuZm9udC1zaXplOiAwLjlyZW07XFxuYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG5oZWlnaHQ6IDIycHg7XFxucGFkZGluZzogM3B4O1xcbn1cXG4jYWRkSXRlbUJveCB7XFxuaGVpZ2h0OiA1MHZoO1xcbndpZHRoOiAzMHZ3O1xcbmNvbG9yOiBibHVlO1xcbm1hcmdpbi10b3A6IDIwcHg7XFxuei1pbmRleDogMztcXG59XFxuZmllbGRzZXQge1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubGVnZW5kIHtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5tYXJnaW46IDAgYXV0byAxNXB4O1xcbn1cXG5pbnB1dCB7XFxubWFyZ2luOiA2cHggMDtcXG5mb250LXNpemU6IDAuODVyZW07XFxucGFkZGluZzogM3B4IDJweDtcXG5sZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4uY29sb3VyLWNvZGUge1xcbndpZHRoOiAxM3B4O1xcbmhlaWdodDogMTNweDtcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxubWFyZ2luLWxlZnQ6IDE1cHg7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNyZWQtYm94LCAuaGlnaC1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuI29yYW5nZS1ib3gsIC5tZWRpdW0tcHJpb3JpdHkge1xcbmJhY2tncm91bmQtY29sb3I6IGhzbCg0MCwgMTAwJSwgNzAlKTtcXG59XFxuI2dyZWVuLWJveCwgLmxvdy1wcmlvcml0eSB7XFxuYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG4jbGlzdHMtc2lkZWJhciB7XFxuYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmx1ZTtcXG5oZWlnaHQ6IDc1dmg7XFxud2lkdGg6IDIwdnc7XFxucG9zaXRpb246IGZpeGVkO1xcbmxlZnQ6IDVweDtcXG5ib3R0b206IDEwcHg7XFxub3ZlcmZsb3c6IGF1dG87XFxuei1pbmRleDogMjtcXG59XFxuI215bGlzdHMge1xcbmxpc3Qtc3R5bGU6IHNxdWFyZSBpbnNpZGU7XFxudGV4dC1hbGlnbjogbGVmdDtcXG59XFxuI215bGlzdHMgbGkge1xcbm1hcmdpbjogMTJweCA1cHggMTJweCAyNXB4O1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG53aWR0aDogNzAlO1xcbmNvbG9yOiBibHVlO1xcbn1cXG5hOmFjdGl2ZSwgYTpmb2N1cywgbGk6Zm9jdXMge1xcbmZvbnQtc2l6ZTogMS4zcmVtO1xcbmZvbnQtd2VpZ2h0OiBib2xkOyAgICBcXG59XFxuYSwgYTp2aXNpdGVkLCBhOmFjdGl2ZSB7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcbiNhZGRMaXN0QnV0dG9uLCAjYWRkQnV0dG9uIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbmNvbG9yOiB3aGl0ZTtcXG5tYXJnaW46IDEzcHggMCAxNnB4O1xcbnBhZGRpbmc6IDVweDtcXG5ib3JkZXItcmFkaXVzOiAzcHg7XFxuZm9udC1zaXplOiAwLjlyZW07XFxuYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxub3V0bGluZTogMXB4IHNvbGlkIGJsdWU7XFxufVxcbiNhZGRMaXN0QnV0dG9uOmhvdmVyLCAjYWRkQnV0dG9uOmhvdmVyIHtcXG5jb2xvcjogYmx1ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG59XFxuI2xpc3ROYW1lLCAjbGlzdE5hbWU6Zm9jdXMge1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmJvcmRlcjogbm9uZTtcXG5vdXRsaW5lOiBub25lO1xcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibHVlO1xcbm1hcmdpbjogMTBweDtcXG5mb250LXNpemU6IDAuOXJlbTtcXG59XFxuLmRlbGV0ZSB7XFxuYXBwZWFyYW5jZTogbm9uZTtcXG4tbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuYm9yZGVyOiBub25lO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5yaWdodDogMXB4O1xcbnRvcDogMXB4O1xcbmJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5jb2xvcjogd2hpdGU7XFxuaGVpZ2h0OiAxNXB4O1xcbndpZHRoOiAxNXB4O1xcbnBhZGRpbmc6IDFweDtcXG5mb250OiBib2xkZXIgMXJlbTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5kZWxldGUtbGkge1xcbmNvbG9yOiB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxud2lkdGg6IDE5cHg7XFxuaGVpZ2h0OiAxOXB4O1xcbmJvcmRlcjogbm9uZTtcXG5mbG9hdDogcmlnaHQ7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuZm9udC1zaXplOiAwLjlyZW07XFxubWFyZ2luLXRvcDogNHB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5ib3JkZXItcmFkaXVzOiAzMCU7XFxufVxcbiN0b3BOYXZCYXIge1xcbndpZHRoOiAxMDAlO1xcbmJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDA7XFxuaGVpZ2h0OiB2YXIoLS12YXJpYWJsZUhlaWdodCk7XFxuei1pbmRleDogMztcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbm92ZXJmbG93OiBhdXRvO1xcbn1cXG4jbWFpbkJveC5tb2JpbGUge1xcbndpZHRoOiA4MHZ3O1xcbm1hcmdpbjogNXZoIGF1dG87XFxuei1pbmRleDogMTtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxubGVmdDogMTB2dztcXG50b3A6IG1heCgyNXZoLCAxOTBweCk7XFxufVxcbiNzb3J0Qm94Lm1vYmlsZSB7XFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogbWF4KDIwdmgsIDE1MHB4KTtcXG53aWR0aDogZml0LWNvbnRlbnQ7XFxubGVmdDogMjB2dztcXG56LWluZGV4OiAxO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSwgI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIHtcXG53aWR0aDogNjB2dztcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiBtYXgoMTh2aCwgMTUwcHgpO1xcbmhlaWdodDogZml0LWNvbnRlbnQ7XFxuYm9yZGVyOiA0cHggc29saWQgZG9kZ2VyYmx1ZTtcXG56LWluZGV4OiAzO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxub3ZlcmZsb3c6IGF1dG87XFxucGFkZGluZzogMjBweDtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbnZpc2liaWxpdHk6IGhpZGRlbjtcXG50cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDEwMG1zO1xcbn1cXG4jbGlzdHMtc2lkZWJhci5tb2JpbGUtc2xpZGUge1xcbmxlZnQ6IC0xMDAlO1xcbnRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZS52aXNpYmxlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUudmlzaWJsZSB7XFxubGVmdDogMjB2dztcXG52aXNpYmlsaXR5OiB2aXNpYmxlO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIHtcXG5wb3NpdGlvbjogZml4ZWQ7XFxubGVmdDogMTAwJTtcXG50cmFuc2l0aW9uOiBsZWZ0IDFzO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUgZmllbGRzZXQge1xcbmJvcmRlcjogbm9uZTtcXG59XFxuI2lubmVyTmF2IHtcXG53aWR0aDogODAlO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5ib3R0b206IDA7XFxuaGVpZ2h0OiAzNyU7XFxubWFyZ2luOiAwIDEwJTtcXG5ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5ib3JkZXItdG9wOiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsdWU7XFxuYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmx1ZTtcXG5ib3JkZXItcmFkaXVzOiA0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLm1vYmlsZS1idXR0b24ge1xcbmJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbmNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbndpZHRoOiA1MCU7XFxuZmxvYXQ6IGxlZnQ7XFxuaGVpZ2h0OiAxMDAlO1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG5mb250LXNpemU6IDEuMXJlbTtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ubW9iaWxlLWJ1dHRvbjpob3ZlciwgLm1vYmlsZS1idXR0b246YWN0aXZlLCAubW9iaWxlLWJ1dHRvbjpmb2N1cyB7XFxudGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMjQ0LCAyNDgpO1xcbn1cXG4jb3ZlcmxheSB7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDB2aDtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiBjYWxjKHZhcigtLXZhcmlhYmxlSGVpZ2h0KSAtIDNweCk7XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xcbnotaW5kZXg6IDI7XFxub3BhY2l0eTogMC44O1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbmNvbG9yOiBkb2RnZXJibHVlO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmJvcmRlcjogM3B4IHNvbGlkIGRvZGdlcmJsdWU7XFxuaGVpZ2h0OiBtYXgoN3ZoLCAzN3B4KTtcXG53aWR0aDogNzVweDtcXG5wYWRkaW5nOiA2cHg7XFxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuZm9udC1zaXplOiAxcmVtO1xcbm1hcmdpbjogMjBweCBhdXRvIDE1cHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5ib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG5vdXRsaW5lOiAxcHggc29saWQgZG9kZ2VyYmx1ZTtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b0RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9Eby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtsaXN0fSBmcm9tICcuL21hbmFnZUxpc3RzLmpzJztcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlLCBsaXN0TmFtZXMsIHNldExpc3ROYW1lcywgTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1R9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7Y29uZmlnQ2hlY2tCb3hlcywgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMsIHNldEl0ZW1JbmRpY2VzLCBkaXNwbGF5TGlzdEl0ZW19IGZyb20gJy4vbGlzdEl0ZW1zRE9NLmpzJ1xuXG4vL09MOlxuY29uc3QgbWFpbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5saXN0XCIpO1xuLy9saXN0IGVsZW1lbnQgb2JqZWN0OlxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbmNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZExpc3RCdXR0b25cIik7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3ROYW1lXCIpO1xuY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LXRpdGxlXCIpO1xuLy9PTDpcbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWxpc3RzXCIpO1xuXG5sZXQgbGlzdEVsZW1lbnRzID0gW21haW5dO1xubGV0IG15TGlzdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QpKSB8fCBbXTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdEVsZW1lbnRzKGxpc3ROYW1lcykge1xuXHRmb3IgKGxldCBpID0gMTsgaSA8IGxpc3ROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcdFxuICAgIFx0bGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+JyArIGxpc3ROYW1lc1tpXSArICc8L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1saVwiPlg8L2J1dHRvbj4nO1xuXHRcdGxpc3RFbGVtZW50LmlkID0gbGlzdE5hbWVzW2ldOyAgICAgXG5cdFx0bGlzdEVsZW1lbnRzLnB1c2gobGlzdEVsZW1lbnQpO1xuXHRcdGxpc3RPZkxpc3RzLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcblx0XHRzZXRMaXN0RXZlbnRIYW5kbGVycygpO1xuXHRcdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XHRcdFxuXHR9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTGlzdE9mTGlzdHMoKSB7XG5cdHdoaWxlIChsaXN0T2ZMaXN0cy5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHR9XG5cdHJldHVybjtcbn1cblxuZnVuY3Rpb24gY29uZmlnTGlzdERlbGV0ZUJ1dHRvbnMoKSB7XG5cdGxldCBkZWxldGVBcnJheTIgPSBbLi4ubGlzdE9mTGlzdHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1saVwiKV07XG5cdGRlbGV0ZUFycmF5Mi5mb3JFYWNoKGRlbGV0ZUJ1dHRvbiA9PiB7XG5cdFx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuXHRcdFx0bGV0IHRvQmVEZWxldGVkID0gbGlzdEVsZW1lbnRzLmZpbmRJbmRleChsaXN0RWxlbWVudCA9PiBsaXN0RWxlbWVudC5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblx0XHRcdGlmICh0b0JlRGVsZXRlZCA+IDApIHtcblx0XHRcdFx0bGlzdEVsZW1lbnRzLnNwbGljZSh0b0JlRGVsZXRlZCwgMSk7XG5cdFx0XHRcdGxldCBpbmRleCA9IG15TGlzdHNBcnJheS5maW5kSW5kZXggKGxpc3RPYmplY3QgPT4gbGlzdE9iamVjdC5uYW1lID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuXHRcdFx0XHRteUxpc3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0bGlzdE5hbWVzID0gc2V0TGlzdE5hbWVzKCk7XG5cdFx0XHRcdGxpc3RFbGVtZW50cyA9IFttYWluXTtcblx0XHRcdFx0Y2xlYXJMaXN0T2ZMaXN0cygpO1xuXHRcdFx0XHRsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChtYWluKTtcblx0XHRcdFx0Y3JlYXRlTGlzdEVsZW1lbnRzKGxpc3ROYW1lcyk7XHRcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxvYWREZWZhdWx0TGlzdCgpIHtcblx0bXlMaXN0c0FycmF5WzBdLmFjdGl2ZSA9IHRydWU7XG5cdHNldEl0ZW1JbmRpY2VzKG15TGlzdHNBcnJheVswXSk7XHRcblx0bXlMaXN0c0FycmF5WzBdLmNvbnRlbnRzLmZvckVhY2gobGlzdEl0ZW1PYmplY3QgPT4ge1xuXHRcdGRpc3BsYXlMaXN0SXRlbShsaXN0SXRlbU9iamVjdCk7XG5cdH0pO1xuXHRjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhteUxpc3RzQXJyYXlbMF0pO1xuXHRjb25maWdDaGVja0JveGVzKCk7XG59XG5cbmFkZExpc3RCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBsZXQgbmV3TGlzdCA9IG5ldyBsaXN0KG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgZGlzcGxheUxpc3RFbGVtZW50KG5ld0xpc3QpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCJcbn1cblxuZnVuY3Rpb24gZGlzcGxheUxpc3RFbGVtZW50KGxpc3QpIHtcblx0Y29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHRcbiAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICsgbGlzdC5uYW1lICsgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7ICBcblx0bGlzdEVsZW1lbnQuaWQgPSBsaXN0Lm5hbWU7ICAgXG5cdGxpc3RFbGVtZW50cy5wdXNoKGxpc3RFbGVtZW50KTtcbiAgICBsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG5cdGNvbmZpZ0xpc3REZWxldGVCdXR0b25zKCk7XG4gICAgc2V0TGlzdEV2ZW50SGFuZGxlcnMoKTtcbn1cblxuZnVuY3Rpb24gc2V0TGlzdEV2ZW50SGFuZGxlcnMoKSB7XG5cdGxpc3RFbGVtZW50cy5mb3JFYWNoKGxpc3RFbGVtZW50ID0+IHtcdFx0XG5cdFx0bGlzdEVsZW1lbnQub25jbGljayA9ICgpID0+IHtcdFx0XG5cdFx0XHRteUxpc3RzQXJyYXkuZm9yRWFjaChsaXN0T2JqZWN0ID0+IHtcblx0XHRcdFx0aWYgKGxpc3RPYmplY3QubmFtZSA9PSBsaXN0RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQpIHtcdFxuXHRcdFx0XHRcdG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0XHRsaXN0T2JqZWN0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdFx0bGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdE9iamVjdC5uYW1lO1xuXHRcdFx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuY29udGVudHMuZm9yRWFjaChsaXN0SXRlbU9iamVjdCA9PiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5TGlzdEl0ZW0obGlzdEl0ZW1PYmplY3QpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpO1xuXHRcdFx0XHRcdGNvbmZpZ0NoZWNrQm94ZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlICB7XG5cdFx0XHRcdFx0bGlzdE9iamVjdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XHRcdFx0XG5cdFx0fTtcblx0fSk7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRwb3B1bGF0ZVN0b3JhZ2UoKTtcdFx0XG59XG5cbmV4cG9ydCB7bXlMaXN0c0FycmF5LCBsaXN0VGl0bGUsIG1haW5MaXN0LCBsaXN0RWxlbWVudHMsIGxvYWREZWZhdWx0TGlzdCwgY3JlYXRlTGlzdEVsZW1lbnRzfTtcbiIsImltcG9ydCB7bWFpbkxpc3QsIG15TGlzdHNBcnJheX0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHsgZGlzcGxheUxpc3RJdGVtLCBjb25maWdDaGVja0JveGVzLCBjb25maWdJdGVtRGVsZXRlQnV0dG9ucywgc2V0SXRlbUluZGljZXN9IGZyb20gJy4vbGlzdEl0ZW1zRE9NLmpzJztcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyQnV0dG9uXCIpO1xuXG5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBhY3RpdmVMaXN0ID0gbXlMaXN0c0FycmF5LmZpbmQobGlzdCA9PiBsaXN0LmFjdGl2ZSA9PSB0cnVlKTtcbiAgICBjbGVhckNvbXBsZXRlZEl0ZW1zKGFjdGl2ZUxpc3QpO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkSXRlbXMobGlzdE9iamVjdCkge1xuICAgIGxldCBpbmNvbXBsZXRlSXRlbXMgPSBsaXN0T2JqZWN0LmNvbnRlbnRzLmZpbHRlcihsaXN0SXRlbSA9PiBsaXN0SXRlbS5jb21wbGV0ZSA9PSBmYWxzZSk7XG4gICAgbGlzdE9iamVjdC5jb250ZW50cyA9IGluY29tcGxldGVJdGVtcztcbiAgICBtYWluTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgc2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XG4gICAgbGlzdE9iamVjdC5jb250ZW50cy5mb3JFYWNoKGl0ZW0gPT4gZGlzcGxheUxpc3RJdGVtKGl0ZW0pKTsgICAgXG4gICAgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCk7XG4gICAgY29uZmlnQ2hlY2tCb3hlcygpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufSIsImltcG9ydCB7bWFpbkxpc3QsIG15TGlzdHNBcnJheX0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHtkaXNwbGF5TGlzdEl0ZW0sIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zLCBjb25maWdDaGVja0JveGVzfSBmcm9tICcuL2xpc3RJdGVtc0RPTS5qcyc7XG5cbmNvbnN0IHNvcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCb3hcIik7XG5cbnNvcnRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGdldE9yZGVyKGUpIHtcblx0bGV0IGFjdGl2ZUxpc3QgPSBteUxpc3RzQXJyYXkuZmluZChsaXN0ID0+IGxpc3QuYWN0aXZlID09IHRydWUpO1xuXHRzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG5cdFx0Y2FzZSBcImhpZ2hQcmlvcml0eVwiOlxuXHRcdGdldEhpZ2hQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwibG93UHJpb3JpdHlcIjpcblx0XHRnZXRMb3dQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1x0XHRcblx0XHRjYXNlIFwiaW5jb21wbGV0ZUZpcnN0XCI6XG5cdFx0Z2V0SW5jb21wbGV0ZUZpcnN0T3JkZXIoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XHRcdFxuXHRcdGNhc2UgXCJjb21wbGV0ZUZpcnN0XCI6XG5cdFx0Z2V0Q29tcGxldGVGaXJzdE9yZGVyKGFjdGl2ZUxpc3QpO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJkdWVEYXRlRWFybGllc3RcIjpcblx0XHRnZXRFYXJsaWVzdERhdGVGaXJzdChhY3RpdmVMaXN0KTtcblx0XHRicmVhaztcdFx0XG5cdFx0Y2FzZSBcImR1ZURhdGVMYXRlc3RcIjpcblx0XHRnZXRMYXRlc3REYXRlRmlyc3QoYWN0aXZlTGlzdCk7XG5cdFx0YnJlYWs7XG5cdH1cblx0Y29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMoYWN0aXZlTGlzdCk7XG5cdGNvbmZpZ0NoZWNrQm94ZXMoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwbGF5UmVvcmRlcmVkTGlzdChjdXJyZW50TGlzdE9yZGVyKSB7XG5cdG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblx0bGV0IG51bWJlciA9IDE7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExpc3RPcmRlci5sZW5ndGg7IGkrKykge1xuXHRcdGN1cnJlbnRMaXN0T3JkZXJbaV0uaW5kZXggPSBudW1iZXI7XG5cdFx0ZGlzcGxheUxpc3RJdGVtKGN1cnJlbnRMaXN0T3JkZXJbaV0pO1x0XHRcblx0XHRudW1iZXIrKztcblx0fVx0XG59XG5cbmZ1bmN0aW9uIGdldEhpZ2hQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpIHtcdFxuXHRsZXQgaGlnaFByaW9yaXR5T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPiBsaXN0SXRlbUIudmFsdWUpIHtyZXR1cm4gMTt9XG5cdFx0aWYgKGxpc3RJdGVtQS52YWx1ZSA9PSBsaXN0SXRlbUIudmFsdWUpe3JldHVybiAwO31cblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlIDwgbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIC0xO31cblx0fSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGhpZ2hQcmlvcml0eU9yZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG93UHJpb3JpdHlPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGxvd1ByaW9yaXR5T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuICAgICAgICBpZiAobGlzdEl0ZW1BLnZhbHVlID4gbGlzdEl0ZW1CLnZhbHVlKSB7cmV0dXJuIC0xO31cblx0XHRpZiAobGlzdEl0ZW1BLnZhbHVlID09IGxpc3RJdGVtQi52YWx1ZSl7cmV0dXJuIDA7fVxuXHRcdGlmIChsaXN0SXRlbUEudmFsdWUgPCBsaXN0SXRlbUIudmFsdWUpIHtyZXR1cm4gMTt9XG5cdH0pO1x0XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGxvd1ByaW9yaXR5T3JkZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmNvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KSB7XHRcblx0bGV0IGluY29tcGxldGVGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRcdGlmIChsaXN0SXRlbUEuY29tcGxldGVWYWx1ZSA8IGxpc3RJdGVtQi5jb21wbGV0ZVZhbHVlKSByZXR1cm4gMTtcblx0fSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGluY29tcGxldGVGaXJzdE9yZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcGxldGVGaXJzdE9yZGVyKGFjdGl2ZUxpc3QpIHtcdFxuXHRsZXQgY29tcGxldGVGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4geyBcblx0XHRcdGlmIChsaXN0SXRlbUEuY29tcGxldGVWYWx1ZSA+IGxpc3RJdGVtQi5jb21wbGV0ZVZhbHVlKSByZXR1cm4gMTtcblx0fSk7XG5cdGRpc3BsYXlSZW9yZGVyZWRMaXN0KGNvbXBsZXRlRmlyc3RPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldEVhcmxpZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpIHtcblx0bGV0IGVhcmxpZXN0Rmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHsgXG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlID4gbGlzdEl0ZW1CLmR1ZURhdGUpIHtyZXR1cm4gMTt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlID09IGxpc3RJdGVtQi5kdWVEYXRlKXtyZXR1cm4gMDt9XG5cdFx0aWYgKGxpc3RJdGVtQS5kdWVEYXRlIDwgbGlzdEl0ZW1CLmR1ZURhdGUpIHtyZXR1cm4gLTE7fVxuXHR9KTtcblx0ZGlzcGxheVJlb3JkZXJlZExpc3QoZWFybGllc3RGaXJzdE9yZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpIHtcblx0bGV0IGxhdGVzdEZpcnN0T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7IFxuXHRcdGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA+IGxpc3RJdGVtQi5kdWVEYXRlKSB7cmV0dXJuIC0xO31cblx0XHRpZiAobGlzdEl0ZW1BLmR1ZURhdGUgPT0gbGlzdEl0ZW1CLmR1ZURhdGUpe3JldHVybiAwO31cblx0XHRpZiAobGlzdEl0ZW1BLmR1ZURhdGUgPCBsaXN0SXRlbUIuZHVlRGF0ZSkge3JldHVybiAxO31cblx0fSk7O1xuXHRkaXNwbGF5UmVvcmRlcmVkTGlzdChsYXRlc3RGaXJzdE9yZGVyKTtcbn1cblxuIiwiaW1wb3J0IHtsaXN0SXRlbSwgZ2V0SW5kZXh9IGZyb20gXCIuL21hbmFnZVRvRG9JdGVtcy5qc1wiO1xuaW1wb3J0IHtteUxpc3RzQXJyYXksIG1haW5MaXN0fSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7YXNzaWduUHJpb3JpdHksIHByaW9yaXR5fSBmcm9tIFwiLi9wcmlvcml0eS5qc1wiO1xuXG5jb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCdXR0b25cIik7XG5jb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVGaWVsZFwiKTtcbmNvbnN0IGRlc2NyaXBGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcEZpZWxkXCIpO1xuY29uc3QgZHVlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZUZpZWxkXCIpO1xuXG5mdW5jdGlvbiBjbGVhckZpZWxkcygpIHtcblx0Y29uc3QgZmllbGRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHRmaWVsZFwiKSk7XG4gICAgZmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZC52YWx1ZSA9IFwiXCIpO1xufVxuXG5hZGRJdGVtQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdGxldCBpdGVtID0gbmV3IGxpc3RJdGVtKG5hbWVGaWVsZC52YWx1ZSwgZGVzY3JpcEZpZWxkLnZhbHVlLCBkdWVGaWVsZC52YWx1ZSwgcHJpb3JpdHkpO1xuXHRteUxpc3RzQXJyYXkuZm9yRWFjaChsaXN0T2JqZWN0ID0+IHtcblx0XHRpZiAobGlzdE9iamVjdC5hY3RpdmUgPT0gdHJ1ZSkge1xuXHRcdFx0bGlzdE9iamVjdC5jb250ZW50cy5wdXNoKGl0ZW0pO1xuXHRcdFx0c2V0SXRlbUluZGljZXMobGlzdE9iamVjdCk7XHRcblx0XHRcdGRpc3BsYXlMaXN0SXRlbShpdGVtKTtcblx0XHRcdGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpO1xuXHRcdFx0Y29uZmlnQ2hlY2tCb3hlcygpO1x0XHRcdFxuXHRcdH1cblx0fSk7ICBcdFxuXHRjbGVhckZpZWxkcygpOyAgIFxufVxuXG5mdW5jdGlvbiBzZXRJdGVtSW5kaWNlcyhsaXN0T2JqZWN0KSB7XG5cdGxldCBudW1iZXIgPSAxO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRsaXN0T2JqZWN0LmNvbnRlbnRzW2ldLmluZGV4ID0gbnVtYmVyO1xuXHRcdG51bWJlcisrO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpIHtcblx0bGV0IGRlbGV0ZUFycmF5ID0gWy4uLm1haW5MaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVcIildO1xuXHRkZWxldGVBcnJheS5mb3JFYWNoKGRlbGV0ZUJ1dHRvbiA9PiB7XG5cdFx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChsaXN0T2JqZWN0LmNvbnRlbnRzW2ldLmluZGV4ID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCkge1xuXHRcdFx0XHRcdGxpc3RPYmplY3QuY29udGVudHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcblx0XHRcdFx0fVx0XHRcdFx0ICAgICAgIFxuXHRcdFx0fSBcblx0XHRcdGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTsgXG5cdFx0XHRjb25maWdDaGVja0JveGVzKCk7XG5cdFx0XHRsZXQgbWFpbkxpc3RBcnJheSA9IEFycmF5LmZyb20obWFpbkxpc3QuY2hpbGRyZW4pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7ICAgIFxuXHRcdFx0XHRtYWluTGlzdEFycmF5W2ldLmlkID0gZ2V0SW5kZXgobGlzdE9iamVjdC5jb250ZW50c1tpXSk7XG5cdFx0XHR9ICBcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0fSk7XG5cdH0pO1x0ICAgICAgIFxufVxuXG5mdW5jdGlvbiBjb25maWdDaGVja0JveGVzKCkge1xuXHRsZXQgY2hlY2tib3hlcyA9IFsuLi5tYWluTGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hlY2tib3hcIildO1x0ICAgXG5cdGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG5cdFx0Y2hlY2tib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc3BvbmRUb0NsaWNrKTtcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzcG9uZFRvQ2xpY2spO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVzcG9uZFRvQ2xpY2soZSkge1xuXHRcdGxldCB0YXJnZXRJdGVtO1xuXHRcdGxldCBhY3RpdmVMaXN0ID0gbXlMaXN0c0FycmF5LmZpbmQobGlzdCA9PiBsaXN0LmFjdGl2ZSA9PSB0cnVlKTtcblx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG5cdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcblx0XHR0YXJnZXRJdGVtID0gYWN0aXZlTGlzdC5jb250ZW50cy5maW5kKGxpc3RJdGVtID0+IGxpc3RJdGVtLmluZGV4ID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKTtcblx0XHRpZiAodGFyZ2V0SXRlbS5jb21wbGV0ZSA9PSBmYWxzZSkge1xuXHRcdFx0dGFyZ2V0SXRlbS5jb21wbGV0ZSA9IHRydWU7XHRcblx0XHRcdHRhcmdldEl0ZW0uY29tcGxldGVWYWx1ZSA9IDA7XHRcdFxuXHRcdH1cblx0XHRlbHNlIGlmICh0YXJnZXRJdGVtLmNvbXBsZXRlID09IHRydWUpIHtcblx0XHRcdHRhcmdldEl0ZW0uY29tcGxldGUgPSBmYWxzZTtcblx0XHRcdHRhcmdldEl0ZW0uY29tcGxldGVWYWx1ZSA9IDEwO1xuXHRcdH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUxpc3RJdGVtKGl0ZW1PYmplY3QpIHtcblx0Y29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdGl0ZW1FbGVtZW50LmlkID0gZ2V0SW5kZXgoaXRlbU9iamVjdCk7XG5cdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbVwiKTtcblx0YXNzaWduUHJpb3JpdHkoaXRlbUVsZW1lbnQsIGl0ZW1PYmplY3QpO1xuXHRpdGVtRWxlbWVudC5pbm5lckhUTUwgPSBjcmVhdGVJdGVtQ29udGVudChpdGVtT2JqZWN0KTtcblx0aWYgKGl0ZW1PYmplY3QuY29tcGxldGUgPT0gdHJ1ZSkgbWFya0NvbXBsZXRlKGl0ZW1FbGVtZW50KTtcbiAgICBtYWluTGlzdC5hcHBlbmRDaGlsZChpdGVtRWxlbWVudCk7XHRcbn1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbUNvbnRlbnQoaXRlbSkge1xuXHRyZXR1cm4gJzxkaXYgY2xhc3M9XCJ0b0RvQm94XCI+PGRldGFpbHM+PHN1bW1hcnk+J1xuXHQgKyBpdGVtLm5hbWUgKyAnPC9zdW1tYXJ5PjxwPicgKyBpdGVtLmRlc2NyaXB0aW9uICsgXG5cdCAnPC9wPjwvZGV0YWlscz48cCBjbGFzcz1cImR1ZURhdGVcIj5EdWUgZGF0ZTogJyArIGl0ZW0uZHVlRGF0ZSArIFxuXHQgJzwvcD48bGFiZWwgY2xhc3M9XCJjb21wbGV0ZUxhYmVsXCI+Q29tcGxldGVkOiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZWRcIiB2YWx1ZT1cIlwiPjwvbGFiZWw+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPlg8L2J1dHRvbj48L2Rpdj4nOyAgICBcbn1cblxuZnVuY3Rpb24gbWFya0NvbXBsZXRlKGl0ZW1FbGVtZW50KSB7XG5cdGl0ZW1FbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcblx0aXRlbUVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcblx0bGV0IGNoZWNrYm94ID0gaXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveFwiKTtcblx0Y2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB0cnVlKTtcdFxufVxuXG5leHBvcnQge2NvbmZpZ0NoZWNrQm94ZXMsIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zLCBzZXRJdGVtSW5kaWNlcywgZGlzcGxheUxpc3RJdGVtfTsiLCJpbXBvcnQge2xpc3RFbGVtZW50cywgbXlMaXN0c0FycmF5LCBjcmVhdGVMaXN0RWxlbWVudHMsIGxvYWREZWZhdWx0TGlzdH0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHthZGRNb2JpbGVTdHlsZXMsIHdpZHRoVHJpZ2dlcn0gZnJvbSAnLi9tZWRpYS1xdWVyaWVzLmpzJztcbmltcG9ydCB7bGlzdH0gZnJvbSAnLi9tYW5hZ2VMaXN0cy5qcyc7XG5cbmxldCBsaXN0TmFtZXM7XG5sZXQgTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QgPSBcInRhc2subXlMaXN0c0FycmF5XCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdGlmIChteUxpc3RzQXJyYXkubGVuZ3RoID09IDApIHtcblx0XHRjb25zdCBmaXJzdCA9IG5ldyBsaXN0KFwiTWFpblwiKTtcblx0XHRmaXJzdC5hY3RpdmUgPSB0cnVlO1x0XG5cdH1cdFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3ROYW1lczJcIikpIHtcblx0XHQvLyB3aWxsIGFscmVhZHkgaW5jbHVkZSBcIm1haW5cIiBhcyBmaXJzdCBpdGVtOlxuXHRcdGxpc3ROYW1lcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdE5hbWVzMlwiKS5zcGxpdChcIixcIik7XG5cdH1cblx0Ly8gZmlyc3QgdGltZSBhcHAgaXMgdXNlZDsgXCJtYWluXCIgaXMgYWRkZWQ6XG5cdGVsc2UgbGlzdE5hbWVzID0gW1wiTWFpblwiXTtcblx0Y3JlYXRlTGlzdEVsZW1lbnRzKGxpc3ROYW1lcyk7XHRcblx0bG9hZERlZmF1bHRMaXN0KCk7XG5cdGFkZE1vYmlsZVN0eWxlcyh3aWR0aFRyaWdnZXIpO1xufTtcblxuZnVuY3Rpb24gc2V0TGlzdE5hbWVzKCkge1xuXHRsaXN0TmFtZXMgPSBsaXN0RWxlbWVudHMubWFwKGxpc3RFbGVtZW50ID0+IHtcblx0XHRpZiAobGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBsaXN0TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcblx0c2V0TGlzdE5hbWVzKCk7ICAgXG5cdGxpc3ROYW1lcy50b1N0cmluZygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE5hbWVzMlwiLCBsaXN0TmFtZXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNULCBKU09OLnN0cmluZ2lmeShteUxpc3RzQXJyYXkpKTtcblx0Y29uc29sZS5sb2coXCJwb3B1bGF0ZWQhXCIpO1x0XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIHBvcHVsYXRlU3RvcmFnZSk7XG5cbmV4cG9ydCB7cG9wdWxhdGVTdG9yYWdlLCBsaXN0TmFtZXMsIHNldExpc3ROYW1lcywgTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1R9OyIsImltcG9ydCB7bXlMaXN0c0FycmF5fSBmcm9tIFwiLi9ET00uanNcIjtcblxuZnVuY3Rpb24gbGlzdChuYW1lKSB7XG5cdHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb250ZW50cyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7ICAgXG4gICAgbXlMaXN0c0FycmF5LnB1c2godGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCB7bGlzdH07IiwiZnVuY3Rpb24gbGlzdEl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdHRoaXMubmFtZSA9IG5hbWU7XG5cdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcdFxuXHR0aGlzLmNvbXBsZXRlVmFsdWUgPSAxMDtcblx0cmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4KGxpc3RJdGVtT2JqZWN0KSB7XG5cdHJldHVybiBsaXN0SXRlbU9iamVjdC5pbmRleDtcbn1cblxuZXhwb3J0IHtsaXN0SXRlbSwgZ2V0SW5kZXh9OyIsImNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbmNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Cb3hcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0cy1zaWRlYmFyXCIpO1xuY29uc3QgYWRkSXRlbUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSXRlbUJveFwiKTtcbmNvbnN0IHdpZHRoVHJpZ2dlciA9IHdpbmRvdy5tYXRjaE1lZGlhKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweClcIik7XG5jb25zdCBzb3J0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0Qm94XCIpO1xuXG5sZXQgdmlld0xpc3RzQnV0dG9uO1xubGV0IG9wZW5BZGRJdGVtQm94QnV0dG9uO1xubGV0IG92ZXJsYXk7XG5sZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcbmNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG5mdW5jdGlvbiBhZGRNb2JpbGVDbGFzcygpIHtcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1vYmlsZUNsYXNzKCkge1xuICAgIG1haW5Cb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtc2xpZGVcIik7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzb3J0Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vYmlsZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgaW5uZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVmlldyBMaXN0c1wiO1xuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG8gSXRlbVwiXG4gICAgaW5uZXJOYXYuaWQgPSBcImlubmVyTmF2XCI7ICAgIFxuICAgIHZpZXdMaXN0c0J1dHRvbi5jbGFzc05hbWUgPSBcIm1vYmlsZS1idXR0b25cIjsgIFxuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLmNsYXNzTmFtZSA9IFwibW9iaWxlLWJ1dHRvblwiOyBcbiAgICBpbm5lck5hdi5hcHBlbmRDaGlsZCh2aWV3TGlzdHNCdXR0b24pO1xuICAgIGlubmVyTmF2LmFwcGVuZENoaWxkKG9wZW5BZGRJdGVtQm94QnV0dG9uKTtcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZEl0ZW1Cb3gpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdmlld0xpc3RzKTtcbiAgICByZXR1cm4gaW5uZXJOYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcE5hdkJhcigpIHtcbiAgICBjb25zdCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvcE5hdkJhci5pZCA9IFwidG9wTmF2QmFyXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3BOYXZCYXIpO1xuICAgIHRvcE5hdkJhci5hcHBlbmRDaGlsZChtYWluVGl0bGUpOyAgICAgICBcbiAgICB0b3BOYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTW9iaWxlQnV0dG9ucygpKTsgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhvdmVybGF5KSkgcmV0dXJuO1xuICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgb3ZlcmxheS5pZCA9IFwib3ZlcmxheVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZE1vYmlsZVN0eWxlcyh4KSB7XG4gICAgaWYgKHgubWF0Y2hlcykge1xuICAgICAgICBhZGRNb2JpbGVDbGFzcygpOyAgICAgICBcbiAgICAgICAgY3JlYXRlVG9wTmF2QmFyKCk7ICAgICAgICAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlTW9iaWxlQ2xhc3MoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b3BOYXZCYXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShtYWluVGl0bGUsIHNpZGViYXIpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhvdmVybGF5KSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhjbG9zZUJ1dHRvbikpIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2aWV3TGlzdHMoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTsgICAgXG4gICAgaWYgKCFzaWRlYmFyLmNvbnRhaW5zKGNsb3NlQnV0dG9uKSkgc2lkZWJhci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAoc2lkZWJhcikpO1xuICAgIGNyZWF0ZU92ZXJsYXkoKTtcbn1cblxuZnVuY3Rpb24gb3BlbkFkZEl0ZW1Cb3goKSB7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICBpZiAoIWFkZEl0ZW1Cb3guY29udGFpbnMoY2xvc2VCdXR0b24pKSBhZGRJdGVtQm94LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTsgICAgXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAoYWRkSXRlbUJveCkpO1xuICAgIGNyZWF0ZU92ZXJsYXkoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG92ZXJsYXkpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgfVxufVxuXG53aWR0aFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhZGRNb2JpbGVTdHlsZXMpO1xuXG5leHBvcnQge2FkZE1vYmlsZVN0eWxlcywgd2lkdGhUcmlnZ2VyfTsiLCJjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eVwiKSk7XG5sZXQgcHJpb3JpdHk7XG5cbnByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoXCJjaGVja2VkXCIpKSB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfVxuICAgXHRidXR0b24ub25mb2N1cyA9ICgpID0+IHtcblx0XHRwcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcblxuXHR9OyAgICBcblx0YnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0cHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG5cdH07XG59KTtcblxuZnVuY3Rpb24gYXNzaWduUHJpb3JpdHkoaXRlbUVsZW1lbnQsIGl0ZW1PYmplY3QpIHtcblx0c3dpdGNoKGl0ZW1PYmplY3QucHJpb3JpdHkpIHtcblx0XHRjYXNlIFwiaGlnaFwiOiBcblx0XHRpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcblx0XHRpdGVtT2JqZWN0LnZhbHVlID0gMTA7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSBcIm1lZGl1bVwiOlxuXHRcdGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG5cdFx0aXRlbU9iamVjdC52YWx1ZSA9IDIwO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJsb3dcIjpcblx0XHRpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuXHRcdGl0ZW1PYmplY3QudmFsdWUgPSAzMDtcblx0XHRicmVhaztcblx0fVxufVxuXG5leHBvcnQge2Fzc2lnblByaW9yaXR5LCBwcmlvcml0eX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9ET00uanMnO1xuaW1wb3J0ICcuL3RvRG8uY3NzJztcbmltcG9ydCAnLi9saXN0LXNvcnRpbmcuanMnO1xuaW1wb3J0ICcuL2NsZWFySXRlbXMuanMnO1xuaW1wb3J0ICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5cbi8vYSBjb21tZW50XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9