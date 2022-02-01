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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  width: 100vw;\n  font-size: 17px;\n  --myBlue: rgb(11, 11, 167);\n  --variableHeight: max(15vh, 125px);\n  --variableHeight2: 45px;\n  --myYellow: hsl(60, 100%, 85%);\n}\n* {\n  box-sizing: content-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  text-align: center;\n  color: var(--myBlue);\n  background-color: var(--myYellow);\n  position: relative;\n  width: 100%;\n  height: auto;\n  overflow: auto;\n  z-index: 1;\n}\nh1 {\n  margin: auto;\n  font-size: 2rem;\n}\nh2 {\n  font-size: 1.6rem;\n  margin: 35px 0 30px;\n  z-index: 1;\n}\nh3 {\n  font-size: 1.4rem;\n  margin-bottom: 20px;\n}\nh4 {\n  font-size: 1.2rem;\n  margin: 15px 0 10px;\n}\n#title-bar {\n  width: 100vw;\n  background-color: azure;\n  height: var(--variableHeight2);\n  position: fixed;\n  top: 0;\n  padding: 3.5vh 0 12px;\n  border-bottom: 3px solid blue;\n  box-shadow: 0px -3px 10px 1px white inset;\n  z-index: 3;\n}\n#mainBox {\n  width: 40vw;\n  position: relative;\n  top: 80px;\n  left: 22vw;\n  margin-left: 3vw;\n}\n#mainlist {\n  border: 3px solid blue;\n  min-height: 20px;\n}\n#mainlist .listItem {\n  border-bottom: 6px double blue;\n  text-align: left;\n  list-style-type: Arabic;\n  padding: 4px 2px 1px 3px;\n}\n#clearButton {\n  margin: 25px 0 5vh;\n  position: absolute;\n  left: 5%;\n  padding: 7px 10px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  color: inherit;\n  font-size: 0.95rem;\n  text-shadow: 1px 1px 0px white, -1px -1px 0px white, 1px 1px 0 blue,\n    -1px -1px 0 blue;\n}\n#clearButton:hover {\n  background-color: azure;\n  border-radius: 20px;\n}\n#clearButton:focus {\n  outline: none;\n}\n.toDoBox {\n  position: relative;\n  font-size: 1rem;\n}\nsummary {\n  font-weight: bold;\n  margin-bottom: 7px;\n  font-size: 1.1rem;\n  transition: text-decoration 1s;\n  word-wrap: break-word;\n}\ndetails p {\n  word-wrap: break-word;\n}\nsummary.complete {\n  text-decoration: line-through black 4px;\n}\ndetails p.complete {\n  text-decoration: line-through black 2px;\n}\np {\n  margin: 10px 0;\n  color: iherit;\n  font-size: 1rem;\n}\n.dueDate {\n  margin: 3px 0;\n  color: initial;\n}\n.completeLabel {\n  position: absolute;\n  bottom: -3px;\n  right: 0px;\n  font: inherit;\n  color: inherit;\n}\ninput[type=\"checkbox\"] {\n  height: 16px;\n  width: 16px;\n  border: 1px solid black;\n  margin: 5px 0 0;\n}\n#right-sidebar {\n  position: sticky;\n  bottom: 12vh;\n  z-index: 2;\n  left: 67vw;\n  width: fit-content;\n}\n#sortBox {\n  text-align: center;\n  z-index: 3;\n  width: 25vw;\n}\n#sortBox label {\n  margin-right: 10px;\n  font-variant: small-caps;\n  font-size: 1.2rem;\n}\nselect {\n  background-color: azure;\n  color: var(--myBlue);\n  font-size: 0.9rem;\n  border: 2px solid blue;\n  height: 22px;\n  padding: 3px;\n}\n#addItemBox {\n  height: 50vh;\n  width: 30vw;\n  color: blue;\n  margin-top: 20px;\n  z-index: 3;\n}\nfieldset {\n  border-radius: 5px;\n}\nlegend {\n  font-size: 1.2rem;\n  margin: 0 auto 15px;\n}\ninput {\n  margin: 6px 0;\n  font-size: 0.85rem;\n  padding: 3px 2px;\n  letter-spacing: 1px;\n}\n.colour-code {\n  width: 13px;\n  height: 13px;\n  display: inline-block;\n  margin-left: 15px;\n  border: 1px solid black;\n}\n#red-box, .high-priority {\n  background-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\n  background-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\n  background-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\n  border-right: 4px solid blue;\n  height: 75vh;\n  width: 20vw;\n  position: fixed;\n  left: 5px;\n  bottom: 10px;\n  overflow: auto;\n  z-index: 2;\n}\n#mylists {\n  list-style: square inside;\n  text-align: left;\n}\n#mylists li {\n  margin: 12px 5px 12px 25px;\n  font-size: 1.2rem;\n  text-decoration: none;\n  width: 70%;\n  color: blue;\n}\na:active, a:focus, li:focus {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\na,\na:visited, a:active {\n  text-decoration: none;\n  color: currentColor;\n}\n#addListButton, #addButton {\n  background-color: blue;\n  color: white;\n  margin: 13px 0 16px;\n  padding: 5px 6px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  border: 2px solid white;\n  outline: 1px solid blue;\n  height: 22px;\n}\n#addListButton:hover, #addButton:hover {\n  color: blue;\n  background-color: white;\n  cursor: pointer;\n  border: 2px solid blue;\n}\n#listName, #listName:focus {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  border-bottom: 2px solid blue;\n  margin: 10px;\n  font-size: 0.9rem;\n}\n.delete {\n  appearance: none;\n  -moz-appearance: none;\n  border: none;\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  background-color: red;\n  color: white;\n  height: 15px;\n  width: 15px;\n  padding: 1px;\n  font: bolder 1rem;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  border: 1px solid white;\n}\n.delete-li {\n  color: white;\n  background-color: red;\n  width: 19px;\n  height: 19px;\n  border: none;\n  float: right;\n  font-weight: bold;\n  font-size: 0.9rem;\n  margin-top: 4px;\n  cursor: pointer;\n  border: 1px solid black;\n  border-radius: 30%;\n}\n#topNavBar {\n  box-sizing: border-box;\n  width: 100%;\n  border-bottom: 2px solid blue;\n  position: fixed;\n  top: 0;\n  height: var(--variableHeight);\n  z-index: 4;\n  text-align: center;\n  background-color: azure;\n  overflow: auto;\n  padding-top: 18px;\n}\n#mainBox.mobile {\n  width: 80vw;\n  margin: 5vh auto;\n  z-index: 1;\n  position: absolute;\n  left: 10vw;\n  top: max(25vh, 190px);\n}\n#sortBox.mobile {\n  position: absolute;\n  top: max(23vh, 170px);\n  width: fit-content;\n  left: 20vw;\n  z-index: 1;\n  height: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\n  width: 60vw;\n  position: absolute;\n  top: max(18vh, 150px);\n  height: fit-content;\n  border: 4px solid dodgerblue;\n  z-index: 3;\n  background-color: var(--myYellow);\n  border-radius: 5px;\n  overflow: auto;\n  padding: 20px;\n  box-sizing: border-box;\n  visibility: hidden;\n  transition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\n  left: -100%;\n  transition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\n  left: 20vw;\n  visibility: visible;\n  position: absolute;\n}\n#addItemBox.mobile-slide {\n  position: fixed;\n  left: 100%;\n  transition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\n  border: none;\n}\n#innerNav {\n  width: 80%;\n  position: absolute;\n  bottom: 0;\n  height: 37%;\n  margin: 0 10%;\n  border: 1px solid blue;\n  border-bottom: none;\n  border-radius: 4px;\n  background-color: blue;\n}\n.mobile-button {\n  background-color: aliceblue;\n  color: var(--myBlue);\n  width: 50%;\n  float: left;\n  height: 100%;\n  box-sizing: border-box;\n  border: 2px solid blue;\n  font-size: 1.1rem;\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 2px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\n  text-shadow: 1px 1px 2px white;\n  background-color: rgb(12, 244, 248);\n}\n#overlay {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: calc(var(--variableHeight) - 3px);\n  background-color: rgb(78, 78, 78);\n  z-index: 2;\n  opacity: 0.8;\n}\n.close-button {\n  box-sizing: border-box;\n  color: dodgerblue;\n  background-color: white;\n  border: 3px solid dodgerblue;\n  height: 40px;\n  width: 75px;\n  padding: 6px;\n  vertical-align: middle;\n  border-radius: 5px;\n  font-size: 1rem;\n  margin: 20px auto 15px;\n  cursor: pointer;\n}\n.close-button:hover {\n  border: 2px solid white;\n  outline: 1px solid dodgerblue;\n  color: white;\n  background-color: dodgerblue;\n}\nbody::-webkit-scrollbar {\n  width: 15px;\n}\n#lists-sidebar::-webkit-scrollbar {\n  width: 10px; \n}\n::-webkit-scrollbar-track {\n  background: azure;\n  border-radius: 10px;   \n}\n::-webkit-scrollbar-thumb {\n  background: dodgerblue;\n  border-radius: 10px;\n  border: 1px solid var(--myBlue);\n  border-top: 20px solid azure;\n  border-bottom: 20px solid azure;\n  /* how to specify size?*/\n  }  \n::-webkit-scrollbar-corner {\n  background-color: var(--myBlue);\n  border-radius: 10px;\n}\nbody.mobile::-webkit-scrollbar {\n  display: none;\n}\n#lists-sidebar::-webkit-scrollbar-track {\n margin-right: 2px;\n}\n#lists-sidebar::-webkit-scrollbar-corner {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/toDo.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  width: 100vw;\n  font-size: 17px;\n  --myBlue: rgb(11, 11, 167);\n  --variableHeight: max(15vh, 125px);\n  --variableHeight2: 45px;\n  --myYellow: hsl(60, 100%, 85%);\n}\n* {\n  box-sizing: content-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  text-align: center;\n  color: var(--myBlue);\n  background-color: var(--myYellow);\n  position: relative;\n  width: 100%;\n  height: auto;\n  overflow: auto;\n  z-index: 1;\n}\nh1 {\n  margin: auto;\n  font-size: 2rem;\n}\nh2 {\n  font-size: 1.6rem;\n  margin: 35px 0 30px;\n  z-index: 1;\n}\nh3 {\n  font-size: 1.4rem;\n  margin-bottom: 20px;\n}\nh4 {\n  font-size: 1.2rem;\n  margin: 15px 0 10px;\n}\n#title-bar {\n  width: 100vw;\n  background-color: azure;\n  height: var(--variableHeight2);\n  position: fixed;\n  top: 0;\n  padding: 3.5vh 0 12px;\n  border-bottom: 3px solid blue;\n  box-shadow: 0px -3px 10px 1px white inset;\n  z-index: 3;\n}\n#mainBox {\n  width: 40vw;\n  position: relative;\n  top: 80px;\n  left: 22vw;\n  margin-left: 3vw;\n}\n#mainlist {\n  border: 3px solid blue;\n  min-height: 20px;\n}\n#mainlist .listItem {\n  border-bottom: 6px double blue;\n  text-align: left;\n  list-style-type: Arabic;\n  padding: 4px 2px 1px 3px;\n}\n#clearButton {\n  margin: 25px 0 5vh;\n  position: absolute;\n  left: 5%;\n  padding: 7px 10px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  color: inherit;\n  font-size: 0.95rem;\n  text-shadow: 1px 1px 0px white, -1px -1px 0px white, 1px 1px 0 blue,\n    -1px -1px 0 blue;\n}\n#clearButton:hover {\n  background-color: azure;\n  border-radius: 20px;\n}\n#clearButton:focus {\n  outline: none;\n}\n.toDoBox {\n  position: relative;\n  font-size: 1rem;\n}\nsummary {\n  font-weight: bold;\n  margin-bottom: 7px;\n  font-size: 1.1rem;\n  transition: text-decoration 1s;\n  word-wrap: break-word;\n}\ndetails p {\n  word-wrap: break-word;\n}\nsummary.complete {\n  text-decoration: line-through black 4px;\n}\ndetails p.complete {\n  text-decoration: line-through black 2px;\n}\np {\n  margin: 10px 0;\n  color: iherit;\n  font-size: 1rem;\n}\n.dueDate {\n  margin: 3px 0;\n  color: initial;\n}\n.completeLabel {\n  position: absolute;\n  bottom: -3px;\n  right: 0px;\n  font: inherit;\n  color: inherit;\n}\ninput[type=\"checkbox\"] {\n  height: 16px;\n  width: 16px;\n  border: 1px solid black;\n  margin: 5px 0 0;\n}\n#right-sidebar {\n  position: sticky;\n  bottom: 12vh;\n  z-index: 2;\n  left: 67vw;\n  width: fit-content;\n}\n#sortBox {\n  text-align: center;\n  z-index: 3;\n  width: 25vw;\n}\n#sortBox label {\n  margin-right: 10px;\n  font-variant: small-caps;\n  font-size: 1.2rem;\n}\nselect {\n  background-color: azure;\n  color: var(--myBlue);\n  font-size: 0.9rem;\n  border: 2px solid blue;\n  height: 22px;\n  padding: 3px;\n}\n#addItemBox {\n  height: 50vh;\n  width: 30vw;\n  color: blue;\n  margin-top: 20px;\n  z-index: 3;\n}\nfieldset {\n  border-radius: 5px;\n}\nlegend {\n  font-size: 1.2rem;\n  margin: 0 auto 15px;\n}\ninput {\n  margin: 6px 0;\n  font-size: 0.85rem;\n  padding: 3px 2px;\n  letter-spacing: 1px;\n}\n.colour-code {\n  width: 13px;\n  height: 13px;\n  display: inline-block;\n  margin-left: 15px;\n  border: 1px solid black;\n}\n#red-box, .high-priority {\n  background-color: hsl(0, 70%, 80%);\n}\n#orange-box, .medium-priority {\n  background-color: hsl(40, 100%, 70%);\n}\n#green-box, .low-priority {\n  background-color: hsl(120, 70%, 80%);\n}\n#lists-sidebar {\n  border-right: 4px solid blue;\n  height: 75vh;\n  width: 20vw;\n  position: fixed;\n  left: 5px;\n  bottom: 10px;\n  overflow: auto;\n  z-index: 2;\n}\n#mylists {\n  list-style: square inside;\n  text-align: left;\n}\n#mylists li {\n  margin: 12px 5px 12px 25px;\n  font-size: 1.2rem;\n  text-decoration: none;\n  width: 70%;\n  color: blue;\n}\na:active, a:focus, li:focus {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\na,\na:visited, a:active {\n  text-decoration: none;\n  color: currentColor;\n}\n#addListButton, #addButton {\n  background-color: blue;\n  color: white;\n  margin: 13px 0 16px;\n  padding: 5px 6px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  border: 2px solid white;\n  outline: 1px solid blue;\n  height: 22px;\n}\n#addListButton:hover, #addButton:hover {\n  color: blue;\n  background-color: white;\n  cursor: pointer;\n  border: 2px solid blue;\n}\n#listName, #listName:focus {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  border-bottom: 2px solid blue;\n  margin: 10px;\n  font-size: 0.9rem;\n}\n.delete {\n  appearance: none;\n  -moz-appearance: none;\n  border: none;\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  background-color: red;\n  color: white;\n  height: 15px;\n  width: 15px;\n  padding: 1px;\n  font: bolder 1rem;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  border: 1px solid white;\n}\n.delete-li {\n  color: white;\n  background-color: red;\n  width: 19px;\n  height: 19px;\n  border: none;\n  float: right;\n  font-weight: bold;\n  font-size: 0.9rem;\n  margin-top: 4px;\n  cursor: pointer;\n  border: 1px solid black;\n  border-radius: 30%;\n}\n#topNavBar {\n  box-sizing: border-box;\n  width: 100%;\n  border-bottom: 2px solid blue;\n  position: fixed;\n  top: 0;\n  height: var(--variableHeight);\n  z-index: 4;\n  text-align: center;\n  background-color: azure;\n  overflow: auto;\n  padding-top: 18px;\n}\n#mainBox.mobile {\n  width: 80vw;\n  margin: 5vh auto;\n  z-index: 1;\n  position: absolute;\n  left: 10vw;\n  top: max(25vh, 190px);\n}\n#sortBox.mobile {\n  position: absolute;\n  top: max(23vh, 170px);\n  width: fit-content;\n  left: 20vw;\n  z-index: 1;\n  height: fit-content;\n}\n#lists-sidebar.mobile-slide, #addItemBox.mobile-slide {\n  width: 60vw;\n  position: absolute;\n  top: max(18vh, 150px);\n  height: fit-content;\n  border: 4px solid dodgerblue;\n  z-index: 3;\n  background-color: var(--myYellow);\n  border-radius: 5px;\n  overflow: auto;\n  padding: 20px;\n  box-sizing: border-box;\n  visibility: hidden;\n  transition: visibility 100ms;\n}\n#lists-sidebar.mobile-slide {\n  left: -100%;\n  transition: left 1s;\n}\n#lists-sidebar.mobile-slide.visible, #addItemBox.mobile-slide.visible {\n  left: 20vw;\n  visibility: visible;\n  position: absolute;\n}\n#addItemBox.mobile-slide {\n  position: fixed;\n  left: 100%;\n  transition: left 1s;\n}\n#addItemBox.mobile-slide fieldset {\n  border: none;\n}\n#innerNav {\n  width: 80%;\n  position: absolute;\n  bottom: 0;\n  height: 37%;\n  margin: 0 10%;\n  border: 1px solid blue;\n  border-bottom: none;\n  border-radius: 4px;\n  background-color: blue;\n}\n.mobile-button {\n  background-color: aliceblue;\n  color: var(--myBlue);\n  width: 50%;\n  float: left;\n  height: 100%;\n  box-sizing: border-box;\n  border: 2px solid blue;\n  font-size: 1.1rem;\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 2px;\n}\n.mobile-button:hover, .mobile-button:active, .mobile-button:focus {\n  text-shadow: 1px 1px 2px white;\n  background-color: rgb(12, 244, 248);\n}\n#overlay {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: calc(var(--variableHeight) - 3px);\n  background-color: rgb(78, 78, 78);\n  z-index: 2;\n  opacity: 0.8;\n}\n.close-button {\n  box-sizing: border-box;\n  color: dodgerblue;\n  background-color: white;\n  border: 3px solid dodgerblue;\n  height: 40px;\n  width: 75px;\n  padding: 6px;\n  vertical-align: middle;\n  border-radius: 5px;\n  font-size: 1rem;\n  margin: 20px auto 15px;\n  cursor: pointer;\n}\n.close-button:hover {\n  border: 2px solid white;\n  outline: 1px solid dodgerblue;\n  color: white;\n  background-color: dodgerblue;\n}\nbody::-webkit-scrollbar {\n  width: 15px;\n}\n#lists-sidebar::-webkit-scrollbar {\n  width: 10px; \n}\n::-webkit-scrollbar-track {\n  background: azure;\n  border-radius: 10px;   \n}\n::-webkit-scrollbar-thumb {\n  background: dodgerblue;\n  border-radius: 10px;\n  border: 1px solid var(--myBlue);\n  border-top: 20px solid azure;\n  border-bottom: 20px solid azure;\n  /* how to specify size?*/\n  }  \n::-webkit-scrollbar-corner {\n  background-color: var(--myBlue);\n  border-radius: 10px;\n}\nbody.mobile::-webkit-scrollbar {\n  display: none;\n}\n#lists-sidebar::-webkit-scrollbar-track {\n margin-right: 2px;\n}\n#lists-sidebar::-webkit-scrollbar-corner {\n  display: none;\n}"],"sourceRoot":""}]);
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
        listElement.innerHTML = '<a href="#">' +
            listNames[i] +
            '</a><button class="delete-li">X</button>';
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
            let toBeDeleted = listElements.findIndex(
                listElement => listElement.id == e.target.parentElement.id
            );
            if (toBeDeleted > 0) {
                listElements.splice(toBeDeleted, 1);
                let index = myListsArray.findIndex(
                    listObject => listObject.name == e.target.parentElement.id
                );
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
    nameInput.value = "";
};

function displayListElement(list) {
    const listElement = document.createElement("li");
    listElement.innerHTML = '<a href="#">' + 
        list.name + 
        '</a><button class="delete-li">X</button>';
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
                else {
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
    let incompleteItems = listObject.contents.filter(
        listItem => listItem.complete == false
    );
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
        if (listItemA.value > listItemB.value) return 1;
        else if (listItemA.value == listItemB.value) return 0;
        else if (listItemA.value < listItemB.value) return -1;
    });
    displayReorderedList(highPriorityOrder);
}

function getLowPriorityOrder(activeList) {
    let lowPriorityOrder = activeList.contents.sort((listItemA, listItemB) => {
        if (listItemA.value > listItemB.value) return -1;
        if (listItemA.value == listItemB.value) return 0;
        if (listItemA.value < listItemB.value) return 1;
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
        if (listItemA.dueDate > listItemB.dueDate) return 1;
        if (listItemA.dueDate == listItemB.dueDate) return 0;
        if (listItemA.dueDate < listItemB.dueDate) return -1;
    });
    displayReorderedList(earliestFirstOrder);
}

function getLatestDateFirst(activeList) {
    let latestFirstOrder = activeList.contents.sort((listItemA, listItemB) => {
        if (listItemA.dueDate > listItemB.dueDate) return -1;
        if (listItemA.dueDate == listItemB.dueDate) return 0;
        if (listItemA.dueDate < listItemB.dueDate) return 1;
    });
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
};

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
    e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.classList.toggle(
      "complete"
    );
    e.target.parentElement.parentElement.parentElement.firstChild.firstChild.children[1].classList.toggle(
      "complete"
    );
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
    return '<div class="toDoBox"><details><summary>' +
      item.name +
      "</summary><p>" +
      item.description +
      '</p></details><p class="dueDate">Due date: ' +
      item.dueDate +
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
let topNavBar;
closeButton.className = "close-button";
closeButton.textContent = "Close";

function addMobileClass() {
    mainBox.classList.add("mobile");
    leftSidebar.classList.add("mobile-slide");
    addItemBox.classList.add("mobile-slide");
    sortBox.classList.add("mobile");
    document.body.classList.add("mobile");
}

function removeMobileClass() {
    mainBox.classList.remove("mobile");
    leftSidebar.classList.remove("mobile-slide");
    addItemBox.classList.remove("mobile-slide");
    addItemBox.classList.remove("visible");
    leftSidebar.classList.remove("visible");
    sortBox.classList.remove("mobile");
    document.body.classList.remove("mobile");
}

function createMobileButtons() {
    const innerNav = document.createElement("nav");
    viewListsButton = document.createElement("button");
    openAddItemBoxButton = document.createElement("button");
    viewListsButton.textContent = "View Lists";
    openAddItemBoxButton.textContent = "Add To-Do Item";
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
    topNavBar = document.createElement("div");
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
        rightSidebar.remove();
        addMobileClass();
        ribbon.remove();
        createTopNavBar();
        document.body.appendChild(sortBox);
        document.body.appendChild(addItemBox);
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
    switch (itemObject.priority) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGlCQUFpQixvQkFBb0IsK0JBQStCLHVDQUF1Qyw0QkFBNEIsbUNBQW1DLEdBQUcsS0FBSyw0QkFBNEIsY0FBYyxlQUFlLEdBQUcsUUFBUSx1QkFBdUIseUJBQXlCLHNDQUFzQyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsZUFBZSxHQUFHLE1BQU0saUJBQWlCLG9CQUFvQixHQUFHLE1BQU0sc0JBQXNCLHdCQUF3QixlQUFlLEdBQUcsTUFBTSxzQkFBc0Isd0JBQXdCLEdBQUcsTUFBTSxzQkFBc0Isd0JBQXdCLEdBQUcsY0FBYyxpQkFBaUIsNEJBQTRCLG1DQUFtQyxvQkFBb0IsV0FBVywwQkFBMEIsa0NBQWtDLDhDQUE4QyxlQUFlLEdBQUcsWUFBWSxnQkFBZ0IsdUJBQXVCLGNBQWMsZUFBZSxxQkFBcUIsR0FBRyxhQUFhLDJCQUEyQixxQkFBcUIsR0FBRyx1QkFBdUIsbUNBQW1DLHFCQUFxQiw0QkFBNEIsNkJBQTZCLEdBQUcsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsYUFBYSxzQkFBc0Isa0NBQWtDLGlCQUFpQixvQkFBb0Isc0JBQXNCLG1CQUFtQix1QkFBdUIsK0ZBQStGLEdBQUcsc0JBQXNCLDRCQUE0Qix3QkFBd0IsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsWUFBWSx1QkFBdUIsb0JBQW9CLEdBQUcsV0FBVyxzQkFBc0IsdUJBQXVCLHNCQUFzQixtQ0FBbUMsMEJBQTBCLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxvQkFBb0IsNENBQTRDLEdBQUcsc0JBQXNCLDRDQUE0QyxHQUFHLEtBQUssbUJBQW1CLGtCQUFrQixvQkFBb0IsR0FBRyxZQUFZLGtCQUFrQixtQkFBbUIsR0FBRyxrQkFBa0IsdUJBQXVCLGlCQUFpQixlQUFlLGtCQUFrQixtQkFBbUIsR0FBRyw0QkFBNEIsaUJBQWlCLGdCQUFnQiw0QkFBNEIsb0JBQW9CLEdBQUcsa0JBQWtCLHFCQUFxQixpQkFBaUIsZUFBZSxlQUFlLHVCQUF1QixHQUFHLFlBQVksdUJBQXVCLGVBQWUsZ0JBQWdCLEdBQUcsa0JBQWtCLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLEdBQUcsVUFBVSw0QkFBNEIseUJBQXlCLHNCQUFzQiwyQkFBMkIsaUJBQWlCLGlCQUFpQixHQUFHLGVBQWUsaUJBQWlCLGdCQUFnQixnQkFBZ0IscUJBQXFCLGVBQWUsR0FBRyxZQUFZLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLHdCQUF3QixHQUFHLFNBQVMsa0JBQWtCLHVCQUF1QixxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixpQkFBaUIsMEJBQTBCLHNCQUFzQiw0QkFBNEIsR0FBRyw0QkFBNEIsdUNBQXVDLEdBQUcsaUNBQWlDLHlDQUF5QyxHQUFHLDZCQUE2Qix5Q0FBeUMsR0FBRyxrQkFBa0IsaUNBQWlDLGlCQUFpQixnQkFBZ0Isb0JBQW9CLGNBQWMsaUJBQWlCLG1CQUFtQixlQUFlLEdBQUcsWUFBWSw4QkFBOEIscUJBQXFCLEdBQUcsZUFBZSwrQkFBK0Isc0JBQXNCLDBCQUEwQixlQUFlLGdCQUFnQixHQUFHLCtCQUErQixzQkFBc0Isc0JBQXNCLEdBQUcsMkJBQTJCLDBCQUEwQix3QkFBd0IsR0FBRyw4QkFBOEIsMkJBQTJCLGlCQUFpQix3QkFBd0IscUJBQXFCLHVCQUF1QixzQkFBc0IsNEJBQTRCLDRCQUE0QixpQkFBaUIsR0FBRywwQ0FBMEMsZ0JBQWdCLDRCQUE0QixvQkFBb0IsMkJBQTJCLEdBQUcsOEJBQThCLGtDQUFrQyxpQkFBaUIsa0JBQWtCLGtDQUFrQyxpQkFBaUIsc0JBQXNCLEdBQUcsV0FBVyxxQkFBcUIsMEJBQTBCLGlCQUFpQix1QkFBdUIsZUFBZSxhQUFhLDBCQUEwQixpQkFBaUIsaUJBQWlCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHVCQUF1QiwyQkFBMkIsb0JBQW9CLDRCQUE0QixHQUFHLGNBQWMsaUJBQWlCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixpQkFBaUIsc0JBQXNCLHNCQUFzQixvQkFBb0Isb0JBQW9CLDRCQUE0Qix1QkFBdUIsR0FBRyxjQUFjLDJCQUEyQixnQkFBZ0Isa0NBQWtDLG9CQUFvQixXQUFXLGtDQUFrQyxlQUFlLHVCQUF1Qiw0QkFBNEIsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0IscUJBQXFCLGVBQWUsdUJBQXVCLGVBQWUsMEJBQTBCLEdBQUcsbUJBQW1CLHVCQUF1QiwwQkFBMEIsdUJBQXVCLGVBQWUsZUFBZSx3QkFBd0IsR0FBRyx5REFBeUQsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLGlDQUFpQyxlQUFlLHNDQUFzQyx1QkFBdUIsbUJBQW1CLGtCQUFrQiwyQkFBMkIsdUJBQXVCLGlDQUFpQyxHQUFHLCtCQUErQixnQkFBZ0Isd0JBQXdCLEdBQUcseUVBQXlFLGVBQWUsd0JBQXdCLHVCQUF1QixHQUFHLDRCQUE0QixvQkFBb0IsZUFBZSx3QkFBd0IsR0FBRyxxQ0FBcUMsaUJBQWlCLEdBQUcsYUFBYSxlQUFlLHVCQUF1QixjQUFjLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3Qix1QkFBdUIsMkJBQTJCLEdBQUcsa0JBQWtCLGdDQUFnQyx5QkFBeUIsZUFBZSxnQkFBZ0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIsc0JBQXNCLG9CQUFvQix1QkFBdUIsaUJBQWlCLEdBQUcscUVBQXFFLG1DQUFtQyx3Q0FBd0MsR0FBRyxZQUFZLGdCQUFnQixrQkFBa0Isb0JBQW9CLDJDQUEyQyxzQ0FBc0MsZUFBZSxpQkFBaUIsR0FBRyxpQkFBaUIsMkJBQTJCLHNCQUFzQiw0QkFBNEIsaUNBQWlDLGlCQUFpQixnQkFBZ0IsaUJBQWlCLDJCQUEyQix1QkFBdUIsb0JBQW9CLDJCQUEyQixvQkFBb0IsR0FBRyx1QkFBdUIsNEJBQTRCLGtDQUFrQyxpQkFBaUIsaUNBQWlDLEdBQUcsMkJBQTJCLGdCQUFnQixHQUFHLHFDQUFxQyxpQkFBaUIsR0FBRyw2QkFBNkIsc0JBQXNCLDJCQUEyQixHQUFHLDZCQUE2QiwyQkFBMkIsd0JBQXdCLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLG9DQUFvQyw4QkFBOEIsb0NBQW9DLHdCQUF3QixHQUFHLGtDQUFrQyxrQkFBa0IsR0FBRywyQ0FBMkMscUJBQXFCLEdBQUcsNENBQTRDLGtCQUFrQixHQUFHLE9BQU8sK0VBQStFLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0M7Ozs7Ozs7VUNoQ2xDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmtCO0FBQ0U7QUFDTztBQUNGO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b0RvLmNzcz8zODM5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NsZWFySXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdC1zb3J0aW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RJdGVtc0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9Eb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21lZGlhLXF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgLS1teUJsdWU6IHJnYigxMSwgMTEsIDE2Nyk7XFxuICAtLXZhcmlhYmxlSGVpZ2h0OiBtYXgoMTV2aCwgMTI1cHgpO1xcbiAgLS12YXJpYWJsZUhlaWdodDI6IDQ1cHg7XFxuICAtLW15WWVsbG93OiBoc2woNjAsIDEwMCUsIDg1JSk7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHotaW5kZXg6IDE7XFxufVxcbmgxIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBtYXJnaW46IDM1cHggMCAzMHB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5oNCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMTVweCAwIDEwcHg7XFxufVxcbiN0aXRsZS1iYXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICBoZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0Mik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAzLjV2aCAwIDEycHg7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggMXB4IHdoaXRlIGluc2V0O1xcbiAgei1pbmRleDogMztcXG59XFxuI21haW5Cb3gge1xcbiAgd2lkdGg6IDQwdnc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDgwcHg7XFxuICBsZWZ0OiAyMnZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDN2dztcXG59XFxuI21haW5saXN0IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxuICBtaW4taGVpZ2h0OiAyMHB4O1xcbn1cXG4jbWFpbmxpc3QgLmxpc3RJdGVtIHtcXG4gIGJvcmRlci1ib3R0b206IDZweCBkb3VibGUgYmx1ZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IEFyYWJpYztcXG4gIHBhZGRpbmc6IDRweCAycHggMXB4IDNweDtcXG59XFxuI2NsZWFyQnV0dG9uIHtcXG4gIG1hcmdpbjogMjVweCAwIDV2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUlO1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDAuOTVyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggd2hpdGUsIC0xcHggLTFweCAwcHggd2hpdGUsIDFweCAxcHggMCBibHVlLFxcbiAgICAtMXB4IC0xcHggMCBibHVlO1xcbn1cXG4jY2xlYXJCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4jY2xlYXJCdXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvRG9Cb3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5zdW1tYXJ5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24gMXM7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbmRldGFpbHMgcCB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbnN1bW1hcnkuY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgNHB4O1xcbn1cXG5kZXRhaWxzIHAuY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggYmxhY2sgMnB4O1xcbn1cXG5wIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgY29sb3I6IGloZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmR1ZURhdGUge1xcbiAgbWFyZ2luOiAzcHggMDtcXG4gIGNvbG9yOiBpbml0aWFsO1xcbn1cXG4uY29tcGxldGVMYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zcHg7XFxuICByaWdodDogMHB4O1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweCAwIDA7XFxufVxcbiNyaWdodC1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDEydmg7XFxuICB6LWluZGV4OiAyO1xcbiAgbGVmdDogNjd2dztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuI3NvcnRCb3gge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMztcXG4gIHdpZHRoOiAyNXZ3O1xcbn1cXG4jc29ydEJveCBsYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbiNhZGRJdGVtQm94IHtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgY29sb3I6IGJsdWU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgei1pbmRleDogMztcXG59XFxuZmllbGRzZXQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5sZWdlbmQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDAgYXV0byAxNXB4O1xcbn1cXG5pbnB1dCB7XFxuICBtYXJnaW46IDZweCAwO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgcGFkZGluZzogM3B4IDJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5jb2xvdXItY29kZSB7XFxuICB3aWR0aDogMTNweDtcXG4gIGhlaWdodDogMTNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNyZWQtYm94LCAuaGlnaC1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNzAlLCA4MCUpO1xcbn1cXG4jb3JhbmdlLWJveCwgLm1lZGl1bS1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDAsIDEwMCUsIDcwJSk7XFxufVxcbiNncmVlbi1ib3gsIC5sb3ctcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgNzAlLCA4MCUpO1xcbn1cXG4jbGlzdHMtc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibHVlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1cHg7XFxuICBib3R0b206IDEwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNteWxpc3RzIHtcXG4gIGxpc3Qtc3R5bGU6IHNxdWFyZSBpbnNpZGU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jbXlsaXN0cyBsaSB7XFxuICBtYXJnaW46IDEycHggNXB4IDEycHggMjVweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5hOmFjdGl2ZSwgYTpmb2N1cywgbGk6Zm9jdXMge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuYSxcXG5hOnZpc2l0ZWQsIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcbiNhZGRMaXN0QnV0dG9uLCAjYWRkQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDEzcHggMCAxNnB4O1xcbiAgcGFkZGluZzogNXB4IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuI2FkZExpc3RCdXR0b246aG92ZXIsICNhZGRCdXR0b246aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxufVxcbiNsaXN0TmFtZSwgI2xpc3ROYW1lOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibHVlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5kZWxldGUge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcHg7XFxuICB0b3A6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZm9udDogYm9sZGVyIDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5kZWxldGUtbGkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgd2lkdGg6IDE5cHg7XFxuICBoZWlnaHQ6IDE5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAzMCU7XFxufVxcbiN0b3BOYXZCYXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsdWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IHZhcigtLXZhcmlhYmxlSGVpZ2h0KTtcXG4gIHotaW5kZXg6IDQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDE4cHg7XFxufVxcbiNtYWluQm94Lm1vYmlsZSB7XFxuICB3aWR0aDogODB2dztcXG4gIG1hcmdpbjogNXZoIGF1dG87XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTB2dztcXG4gIHRvcDogbWF4KDI1dmgsIDE5MHB4KTtcXG59XFxuI3NvcnRCb3gubW9iaWxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogbWF4KDIzdmgsIDE3MHB4KTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGxlZnQ6IDIwdnc7XFxuICB6LWluZGV4OiAxO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbiAgd2lkdGg6IDYwdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IG1heCgxOHZoLCAxNTBweCk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiA0cHggc29saWQgZG9kZ2VyYmx1ZTtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teVllbGxvdyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxMDBtcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlIHtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgdHJhbnNpdGlvbjogbGVmdCAxcztcXG59XFxuI2xpc3RzLXNpZGViYXIubW9iaWxlLXNsaWRlLnZpc2libGUsICNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZS52aXNpYmxlIHtcXG4gIGxlZnQ6IDIwdnc7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNhZGRJdGVtQm94Lm1vYmlsZS1zbGlkZSBmaWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNpbm5lck5hdiB7XFxuICB3aWR0aDogODAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAzNyU7XFxuICBtYXJnaW46IDAgMTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4ubW9iaWxlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBjb2xvcjogdmFyKC0tbXlCbHVlKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcbi5tb2JpbGUtYnV0dG9uOmhvdmVyLCAubW9iaWxlLWJ1dHRvbjphY3RpdmUsIC5tb2JpbGUtYnV0dG9uOmZvY3VzIHtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMjQ0LCAyNDgpO1xcbn1cXG4jb3ZlcmxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IGNhbGModmFyKC0tdmFyaWFibGVIZWlnaHQpIC0gM3B4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcbi5jbG9zZS1idXR0b24ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbiNsaXN0cy1zaWRlYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDsgXFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogYXp1cmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyAgIFxcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbXlCbHVlKTtcXG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgYXp1cmU7XFxuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIGF6dXJlO1xcbiAgLyogaG93IHRvIHNwZWNpZnkgc2l6ZT8qL1xcbiAgfSAgXFxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlCbHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbmJvZHkubW9iaWxlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jbGlzdHMtc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuI2xpc3RzLXNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9Eby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLE1BQU07RUFDTixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QyxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCO29CQUNrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixNQUFNO0VBQ04sNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHdCQUF3QjtFQUN4QjtBQUNGO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIC0tbXlCbHVlOiByZ2IoMTEsIDExLCAxNjcpO1xcbiAgLS12YXJpYWJsZUhlaWdodDogbWF4KDE1dmgsIDEyNXB4KTtcXG4gIC0tdmFyaWFibGVIZWlnaHQyOiA0NXB4O1xcbiAgLS1teVllbGxvdzogaHNsKDYwLCAxMDAlLCA4NSUpO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbXlCbHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15WWVsbG93KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB6LWluZGV4OiAxO1xcbn1cXG5oMSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbWFyZ2luOiAzNXB4IDAgMzBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDE1cHggMCAxMHB4O1xcbn1cXG4jdGl0bGUtYmFyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgaGVpZ2h0OiB2YXIoLS12YXJpYWJsZUhlaWdodDIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMy41dmggMCAxMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XFxuICBib3gtc2hhZG93OiAwcHggLTNweCAxMHB4IDFweCB3aGl0ZSBpbnNldDtcXG4gIHotaW5kZXg6IDM7XFxufVxcbiNtYWluQm94IHtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA4MHB4O1xcbiAgbGVmdDogMjJ2dztcXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XFxufVxcbiNtYWlubGlzdCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbiAgbWluLWhlaWdodDogMjBweDtcXG59XFxuI21haW5saXN0IC5saXN0SXRlbSB7XFxuICBib3JkZXItYm90dG9tOiA2cHggZG91YmxlIGJsdWU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBBcmFiaWM7XFxuICBwYWRkaW5nOiA0cHggMnB4IDFweCAzcHg7XFxufVxcbiNjbGVhckJ1dHRvbiB7XFxuICBtYXJnaW46IDI1cHggMCA1dmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1JTtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHdoaXRlLCAtMXB4IC0xcHggMHB4IHdoaXRlLCAxcHggMXB4IDAgYmx1ZSxcXG4gICAgLTFweCAtMXB4IDAgYmx1ZTtcXG59XFxuI2NsZWFyQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuI2NsZWFyQnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi50b0RvQm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuc3VtbWFyeSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDFzO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5kZXRhaWxzIHAge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5zdW1tYXJ5LmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDRweDtcXG59XFxuZGV0YWlscyBwLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIGJsYWNrIDJweDtcXG59XFxucCB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGNvbG9yOiBpaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5kdWVEYXRlIHtcXG4gIG1hcmdpbjogM3B4IDA7XFxuICBjb2xvcjogaW5pdGlhbDtcXG59XFxuLmNvbXBsZXRlTGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbn1cXG4jcmlnaHQtc2lkZWJhciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAxMnZoO1xcbiAgei1pbmRleDogMjtcXG4gIGxlZnQ6IDY3dnc7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbiNzb3J0Qm94IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDM7XFxuICB3aWR0aDogMjV2dztcXG59XFxuI3NvcnRCb3ggbGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbnNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gIGNvbG9yOiB2YXIoLS1teUJsdWUpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG4jYWRkSXRlbUJveCB7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogMzB2dztcXG4gIGNvbG9yOiBibHVlO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHotaW5kZXg6IDM7XFxufVxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubGVnZW5kIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMTVweDtcXG59XFxuaW5wdXQge1xcbiAgbWFyZ2luOiA2cHggMDtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIHBhZGRpbmc6IDNweCAycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4uY29sb3VyLWNvZGUge1xcbiAgd2lkdGg6IDEzcHg7XFxuICBoZWlnaHQ6IDEzcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jcmVkLWJveCwgLmhpZ2gtcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDcwJSwgODAlKTtcXG59XFxuI29yYW5nZS1ib3gsIC5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQwLCAxMDAlLCA3MCUpO1xcbn1cXG4jZ3JlZW4tYm94LCAubG93LXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDcwJSwgODAlKTtcXG59XFxuI2xpc3RzLXNpZGViYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmx1ZTtcXG4gIGhlaWdodDogNzV2aDtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB6LWluZGV4OiAyO1xcbn1cXG4jbXlsaXN0cyB7XFxuICBsaXN0LXN0eWxlOiBzcXVhcmUgaW5zaWRlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuI215bGlzdHMgbGkge1xcbiAgbWFyZ2luOiAxMnB4IDVweCAxMnB4IDI1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuYTphY3RpdmUsIGE6Zm9jdXMsIGxpOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmEsXFxuYTp2aXNpdGVkLCBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG4jYWRkTGlzdEJ1dHRvbiwgI2FkZEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxM3B4IDAgMTZweDtcXG4gIHBhZGRpbmc6IDVweCA2cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcbiNhZGRMaXN0QnV0dG9uOmhvdmVyLCAjYWRkQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbn1cXG4jbGlzdE5hbWUsICNsaXN0TmFtZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4uZGVsZXRlIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXB4O1xcbiAgdG9wOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGZvbnQ6IGJvbGRlciAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uZGVsZXRlLWxpIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxOXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG4jdG9wTmF2QmFyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibHVlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiB2YXIoLS12YXJpYWJsZUhlaWdodCk7XFxuICB6LWluZGV4OiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbn1cXG4jbWFpbkJveC5tb2JpbGUge1xcbiAgd2lkdGg6IDgwdnc7XFxuICBtYXJnaW46IDV2aCBhdXRvO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwdnc7XFxuICB0b3A6IG1heCgyNXZoLCAxOTBweCk7XFxufVxcbiNzb3J0Qm94Lm1vYmlsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IG1heCgyM3ZoLCAxNzBweCk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBsZWZ0OiAyMHZ3O1xcbiAgei1pbmRleDogMTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSwgI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIHtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBtYXgoMTh2aCwgMTUwcHgpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGRvZGdlcmJsdWU7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlZZWxsb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMTAwbXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZSB7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMXM7XFxufVxcbiNsaXN0cy1zaWRlYmFyLm1vYmlsZS1zbGlkZS52aXNpYmxlLCAjYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUudmlzaWJsZSB7XFxuICBsZWZ0OiAyMHZ3O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuI2FkZEl0ZW1Cb3gubW9iaWxlLXNsaWRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDFzO1xcbn1cXG4jYWRkSXRlbUJveC5tb2JpbGUtc2xpZGUgZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jaW5uZXJOYXYge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMzclO1xcbiAgbWFyZ2luOiAwIDEwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLm1vYmlsZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuICB3aWR0aDogNTAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG4ubW9iaWxlLWJ1dHRvbjpob3ZlciwgLm1vYmlsZS1idXR0b246YWN0aXZlLCAubW9iaWxlLWJ1dHRvbjpmb2N1cyB7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDI0NCwgMjQ4KTtcXG59XFxuI292ZXJsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiBjYWxjKHZhcigtLXZhcmlhYmxlSGVpZ2h0KSAtIDNweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxuICB6LWluZGV4OiAyO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBvdXRsaW5lOiAxcHggc29saWQgZG9kZ2VyYmx1ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4jbGlzdHMtc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7IFxcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IGF6dXJlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgICBcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW15Qmx1ZSk7XFxuICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIGF6dXJlO1xcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCBhenVyZTtcXG4gIC8qIGhvdyB0byBzcGVjaWZ5IHNpemU/Ki9cXG4gIH0gIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15Qmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5ib2R5Lm1vYmlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2xpc3RzLXNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcbiNsaXN0cy1zaWRlYmFyOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b0RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9Eby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtsaXN0fSBmcm9tIFwiLi9tYW5hZ2VMaXN0cy5qc1wiO1xuaW1wb3J0IHtcbiAgcG9wdWxhdGVTdG9yYWdlLFxuICBsaXN0TmFtZXMsXG4gIHNldExpc3ROYW1lcyxcbiAgTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xuaW1wb3J0IHtcbiAgY29uZmlnQ2hlY2tCb3hlcyxcbiAgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMsXG4gIHNldEl0ZW1JbmRpY2VzLFxuICBkaXNwbGF5TGlzdEl0ZW0sXG59IGZyb20gXCIuL2xpc3RJdGVtc0RPTS5qc1wiO1xuXG4vL09MOlxuY29uc3QgbWFpbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5saXN0XCIpO1xuLy9saXN0IGVsZW1lbnQgb2JqZWN0OlxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbmNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZExpc3RCdXR0b25cIik7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3ROYW1lXCIpO1xuY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LXRpdGxlXCIpO1xuLy9PTDpcbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWxpc3RzXCIpO1xuXG5sZXQgbGlzdEVsZW1lbnRzID0gW21haW5dO1xubGV0IG15TGlzdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUU19PQkpFQ1QpKSB8fCBbXTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdEVsZW1lbnRzKGxpc3ROYW1lcykge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIj4nICtcbiAgICAgICAgICAgIGxpc3ROYW1lc1tpXSArXG4gICAgICAgICAgICAnPC9hPjxidXR0b24gY2xhc3M9XCJkZWxldGUtbGlcIj5YPC9idXR0b24+JztcbiAgICAgICAgbGlzdEVsZW1lbnQuaWQgPSBsaXN0TmFtZXNbaV07XG4gICAgICAgIGxpc3RFbGVtZW50cy5wdXNoKGxpc3RFbGVtZW50KTtcbiAgICAgICAgbGlzdE9mTGlzdHMuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuICAgICAgICBzZXRMaXN0RXZlbnRIYW5kbGVycygpO1xuICAgICAgICBjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJMaXN0T2ZMaXN0cygpIHtcbiAgICB3aGlsZSAobGlzdE9mTGlzdHMuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gY29uZmlnTGlzdERlbGV0ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGRlbGV0ZUFycmF5MiA9IFsuLi5saXN0T2ZMaXN0cy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLWxpXCIpXTtcbiAgICBkZWxldGVBcnJheTIuZm9yRWFjaChkZWxldGVCdXR0b24gPT4ge1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBsZXQgdG9CZURlbGV0ZWQgPSBsaXN0RWxlbWVudHMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIGxpc3RFbGVtZW50ID0+IGxpc3RFbGVtZW50LmlkID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodG9CZURlbGV0ZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRzLnNwbGljZSh0b0JlRGVsZXRlZCwgMSk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gbXlMaXN0c0FycmF5LmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgbGlzdE9iamVjdCA9PiBsaXN0T2JqZWN0Lm5hbWUgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbXlMaXN0c0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgbGlzdE5hbWVzID0gc2V0TGlzdE5hbWVzKCk7XG4gICAgICAgICAgICAgICAgbGlzdEVsZW1lbnRzID0gW21haW5dO1xuICAgICAgICAgICAgICAgIGNsZWFyTGlzdE9mTGlzdHMoKTtcbiAgICAgICAgICAgICAgICBsaXN0T2ZMaXN0cy5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWREZWZhdWx0TGlzdCgpIHtcbiAgICBteUxpc3RzQXJyYXlbMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICBzZXRJdGVtSW5kaWNlcyhteUxpc3RzQXJyYXlbMF0pO1xuICAgIG15TGlzdHNBcnJheVswXS5jb250ZW50cy5mb3JFYWNoKGxpc3RJdGVtT2JqZWN0ID0+IHtcbiAgICAgICAgZGlzcGxheUxpc3RJdGVtKGxpc3RJdGVtT2JqZWN0KTtcbiAgICB9KTtcbiAgICBjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhteUxpc3RzQXJyYXlbMF0pO1xuICAgIGNvbmZpZ0NoZWNrQm94ZXMoKTtcbn1cblxuYWRkTGlzdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGxldCBuZXdMaXN0ID0gbmV3IGxpc3QobmFtZUlucHV0LnZhbHVlKTtcbiAgICBkaXNwbGF5TGlzdEVsZW1lbnQobmV3TGlzdCk7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0RWxlbWVudChsaXN0KSB7XG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjXCI+JyArIFxuICAgICAgICBsaXN0Lm5hbWUgKyBcbiAgICAgICAgJzwvYT48YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpXCI+WDwvYnV0dG9uPic7XG4gICAgbGlzdEVsZW1lbnQuaWQgPSBsaXN0Lm5hbWU7XG4gICAgbGlzdEVsZW1lbnRzLnB1c2gobGlzdEVsZW1lbnQpO1xuICAgIGxpc3RPZkxpc3RzLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgICBjb25maWdMaXN0RGVsZXRlQnV0dG9ucygpO1xuICAgIHNldExpc3RFdmVudEhhbmRsZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldExpc3RFdmVudEhhbmRsZXJzKCkge1xuICAgIGxpc3RFbGVtZW50cy5mb3JFYWNoKGxpc3RFbGVtZW50ID0+IHtcbiAgICAgICAgbGlzdEVsZW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG15TGlzdHNBcnJheS5mb3JFYWNoKGxpc3RPYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0T2JqZWN0Lm5hbWUgPT0gbGlzdEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgbGlzdE9iamVjdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0T2JqZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0T2JqZWN0LmNvbnRlbnRzLmZvckVhY2gobGlzdEl0ZW1PYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUxpc3RJdGVtKGxpc3RJdGVtT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25maWdDaGVja0JveGVzKCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdE9iamVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IHtcbiAgbXlMaXN0c0FycmF5LFxuICBsaXN0VGl0bGUsXG4gIG1haW5MaXN0LFxuICBsaXN0RWxlbWVudHMsXG4gIGxvYWREZWZhdWx0TGlzdCxcbiAgY3JlYXRlTGlzdEVsZW1lbnRzLFxufTtcbiIsImltcG9ydCB7bWFpbkxpc3QsIG15TGlzdHNBcnJheX0gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQge1xuICAgIGRpc3BsYXlMaXN0SXRlbSxcbiAgICBjb25maWdDaGVja0JveGVzLFxuICAgIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zLFxuICAgIHNldEl0ZW1JbmRpY2VzLFxufSBmcm9tIFwiLi9saXN0SXRlbXNET00uanNcIjtcbmltcG9ydCB7cG9wdWxhdGVTdG9yYWdlfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2UuanNcIjtcblxuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyQnV0dG9uXCIpO1xuXG5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBhY3RpdmVMaXN0ID0gbXlMaXN0c0FycmF5LmZpbmQobGlzdCA9PiBsaXN0LmFjdGl2ZSA9PSB0cnVlKTtcbiAgICBjbGVhckNvbXBsZXRlZEl0ZW1zKGFjdGl2ZUxpc3QpO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkSXRlbXMobGlzdE9iamVjdCkge1xuICAgIGxldCBpbmNvbXBsZXRlSXRlbXMgPSBsaXN0T2JqZWN0LmNvbnRlbnRzLmZpbHRlcihcbiAgICAgICAgbGlzdEl0ZW0gPT4gbGlzdEl0ZW0uY29tcGxldGUgPT0gZmFsc2VcbiAgICApO1xuICAgIGxpc3RPYmplY3QuY29udGVudHMgPSBpbmNvbXBsZXRlSXRlbXM7XG4gICAgbWFpbkxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuICAgIGxpc3RPYmplY3QuY29udGVudHMuZm9yRWFjaChpdGVtID0+IGRpc3BsYXlMaXN0SXRlbShpdGVtKSk7XG4gICAgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCk7XG4gICAgY29uZmlnQ2hlY2tCb3hlcygpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufVxuIiwiaW1wb3J0IHttYWluTGlzdCwgbXlMaXN0c0FycmF5fSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7XG4gIGRpc3BsYXlMaXN0SXRlbSxcbiAgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMsXG4gIGNvbmZpZ0NoZWNrQm94ZXMsXG59IGZyb20gXCIuL2xpc3RJdGVtc0RPTS5qc1wiO1xuXG5jb25zdCBzb3J0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0Qm94XCIpO1xuXG5zb3J0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBnZXRPcmRlcihlKSB7XG4gICAgbGV0IGFjdGl2ZUxpc3QgPSBteUxpc3RzQXJyYXkuZmluZChsaXN0ID0+IGxpc3QuYWN0aXZlID09IHRydWUpO1xuICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgIGNhc2UgXCJoaWdoUHJpb3JpdHlcIjpcbiAgICAgICAgZ2V0SGlnaFByaW9yaXR5T3JkZXIoYWN0aXZlTGlzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxvd1ByaW9yaXR5XCI6XG4gICAgICAgIGdldExvd1ByaW9yaXR5T3JkZXIoYWN0aXZlTGlzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImluY29tcGxldGVGaXJzdFwiOlxuICAgICAgICBnZXRJbmNvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY29tcGxldGVGaXJzdFwiOlxuICAgICAgICBnZXRDb21wbGV0ZUZpcnN0T3JkZXIoYWN0aXZlTGlzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImR1ZURhdGVFYXJsaWVzdFwiOlxuICAgICAgICBnZXRFYXJsaWVzdERhdGVGaXJzdChhY3RpdmVMaXN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZHVlRGF0ZUxhdGVzdFwiOlxuICAgICAgICBnZXRMYXRlc3REYXRlRmlyc3QoYWN0aXZlTGlzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25maWdJdGVtRGVsZXRlQnV0dG9ucyhhY3RpdmVMaXN0KTtcbiAgICBjb25maWdDaGVja0JveGVzKCk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheVJlb3JkZXJlZExpc3QoY3VycmVudExpc3RPcmRlcikge1xuICAgIG1haW5MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBsZXQgbnVtYmVyID0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMaXN0T3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3VycmVudExpc3RPcmRlcltpXS5pbmRleCA9IG51bWJlcjtcbiAgICAgICAgZGlzcGxheUxpc3RJdGVtKGN1cnJlbnRMaXN0T3JkZXJbaV0pO1xuICAgICAgICBudW1iZXIrKztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEhpZ2hQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpIHtcbiAgICBsZXQgaGlnaFByaW9yaXR5T3JkZXIgPSBhY3RpdmVMaXN0LmNvbnRlbnRzLnNvcnQoKGxpc3RJdGVtQSwgbGlzdEl0ZW1CKSA9PiB7XG4gICAgICAgIGlmIChsaXN0SXRlbUEudmFsdWUgPiBsaXN0SXRlbUIudmFsdWUpIHJldHVybiAxO1xuICAgICAgICBlbHNlIGlmIChsaXN0SXRlbUEudmFsdWUgPT0gbGlzdEl0ZW1CLnZhbHVlKSByZXR1cm4gMDtcbiAgICAgICAgZWxzZSBpZiAobGlzdEl0ZW1BLnZhbHVlIDwgbGlzdEl0ZW1CLnZhbHVlKSByZXR1cm4gLTE7XG4gICAgfSk7XG4gICAgZGlzcGxheVJlb3JkZXJlZExpc3QoaGlnaFByaW9yaXR5T3JkZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRMb3dQcmlvcml0eU9yZGVyKGFjdGl2ZUxpc3QpIHtcbiAgICBsZXQgbG93UHJpb3JpdHlPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHtcbiAgICAgICAgaWYgKGxpc3RJdGVtQS52YWx1ZSA+IGxpc3RJdGVtQi52YWx1ZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAobGlzdEl0ZW1BLnZhbHVlID09IGxpc3RJdGVtQi52YWx1ZSkgcmV0dXJuIDA7XG4gICAgICAgIGlmIChsaXN0SXRlbUEudmFsdWUgPCBsaXN0SXRlbUIudmFsdWUpIHJldHVybiAxO1xuICAgIH0pO1xuICAgIGRpc3BsYXlSZW9yZGVyZWRMaXN0KGxvd1ByaW9yaXR5T3JkZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmNvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KSB7XG4gICAgbGV0IGluY29tcGxldGVGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4ge1xuICAgICAgICAgIGlmIChsaXN0SXRlbUEuY29tcGxldGVWYWx1ZSA8IGxpc3RJdGVtQi5jb21wbGV0ZVZhbHVlKSByZXR1cm4gMTtcbiAgICB9KTtcbiAgICBkaXNwbGF5UmVvcmRlcmVkTGlzdChpbmNvbXBsZXRlRmlyc3RPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBsZXRlRmlyc3RPcmRlcihhY3RpdmVMaXN0KSB7XG4gICAgbGV0IGNvbXBsZXRlRmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHtcbiAgICAgICAgaWYgKGxpc3RJdGVtQS5jb21wbGV0ZVZhbHVlID4gbGlzdEl0ZW1CLmNvbXBsZXRlVmFsdWUpIHJldHVybiAxO1xuICAgIH0pO1xuICAgIGRpc3BsYXlSZW9yZGVyZWRMaXN0KGNvbXBsZXRlRmlyc3RPcmRlcik7XG59XG5cbmZ1bmN0aW9uIGdldEVhcmxpZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpIHtcbiAgICBsZXQgZWFybGllc3RGaXJzdE9yZGVyID0gYWN0aXZlTGlzdC5jb250ZW50cy5zb3J0KChsaXN0SXRlbUEsIGxpc3RJdGVtQikgPT4ge1xuICAgICAgICBpZiAobGlzdEl0ZW1BLmR1ZURhdGUgPiBsaXN0SXRlbUIuZHVlRGF0ZSkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA9PSBsaXN0SXRlbUIuZHVlRGF0ZSkgcmV0dXJuIDA7XG4gICAgICAgIGlmIChsaXN0SXRlbUEuZHVlRGF0ZSA8IGxpc3RJdGVtQi5kdWVEYXRlKSByZXR1cm4gLTE7XG4gICAgfSk7XG4gICAgZGlzcGxheVJlb3JkZXJlZExpc3QoZWFybGllc3RGaXJzdE9yZGVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0RGF0ZUZpcnN0KGFjdGl2ZUxpc3QpIHtcbiAgICBsZXQgbGF0ZXN0Rmlyc3RPcmRlciA9IGFjdGl2ZUxpc3QuY29udGVudHMuc29ydCgobGlzdEl0ZW1BLCBsaXN0SXRlbUIpID0+IHtcbiAgICAgICAgaWYgKGxpc3RJdGVtQS5kdWVEYXRlID4gbGlzdEl0ZW1CLmR1ZURhdGUpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGxpc3RJdGVtQS5kdWVEYXRlID09IGxpc3RJdGVtQi5kdWVEYXRlKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKGxpc3RJdGVtQS5kdWVEYXRlIDwgbGlzdEl0ZW1CLmR1ZURhdGUpIHJldHVybiAxO1xuICAgIH0pO1xuICAgIGRpc3BsYXlSZW9yZGVyZWRMaXN0KGxhdGVzdEZpcnN0T3JkZXIpO1xufVxuIiwiaW1wb3J0IHtsaXN0SXRlbSwgZ2V0SW5kZXh9IGZyb20gXCIuL21hbmFnZVRvRG9JdGVtcy5qc1wiO1xuaW1wb3J0IHtteUxpc3RzQXJyYXksIG1haW5MaXN0fSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7YXNzaWduUHJpb3JpdHksIHByaW9yaXR5fSBmcm9tIFwiLi9wcmlvcml0eS5qc1wiO1xuXG5jb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCdXR0b25cIik7XG5jb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVGaWVsZFwiKTtcbmNvbnN0IGRlc2NyaXBGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcEZpZWxkXCIpO1xuY29uc3QgZHVlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZUZpZWxkXCIpO1xuXG5mdW5jdGlvbiBjbGVhckZpZWxkcygpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGV4dGZpZWxkXCIpKTtcbiAgICBmaWVsZHMubWFwKGZpZWxkID0+IGZpZWxkLnZhbHVlID0gXCJcIik7XG59XG5cbmFkZEl0ZW1CdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBsZXQgaXRlbSA9IG5ldyBsaXN0SXRlbShuYW1lRmllbGQudmFsdWUsIGRlc2NyaXBGaWVsZC52YWx1ZSwgZHVlRmllbGQudmFsdWUsIHByaW9yaXR5KTtcbiAgICBteUxpc3RzQXJyYXkuZm9yRWFjaChsaXN0T2JqZWN0ID0+IHtcbiAgICAgICAgaWYgKGxpc3RPYmplY3QuYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIGxpc3RPYmplY3QuY29udGVudHMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuICAgICAgICAgICAgZGlzcGxheUxpc3RJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMobGlzdE9iamVjdCk7XG4gICAgICAgICAgICBjb25maWdDaGVja0JveGVzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjbGVhckZpZWxkcygpO1xufTtcblxuZnVuY3Rpb24gc2V0SXRlbUluZGljZXMobGlzdE9iamVjdCkge1xuICAgIGxldCBudW1iZXIgPSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9iamVjdC5jb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0T2JqZWN0LmNvbnRlbnRzW2ldLmluZGV4ID0gbnVtYmVyO1xuICAgICAgICBudW1iZXIrKztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0l0ZW1EZWxldGVCdXR0b25zKGxpc3RPYmplY3QpIHtcbiAgICBsZXQgZGVsZXRlQXJyYXkgPSBbLi4ubWFpbkxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZVwiKV07XG4gICAgZGVsZXRlQXJyYXkuZm9yRWFjaChkZWxldGVCdXR0b24gPT4ge1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPYmplY3QuY29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdE9iamVjdC5jb250ZW50c1tpXS5pbmRleCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdE9iamVjdC5jb250ZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW1JbmRpY2VzKGxpc3RPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25maWdDaGVja0JveGVzKCk7XG4gICAgICAgICAgICBsZXQgbWFpbkxpc3RBcnJheSA9IEFycmF5LmZyb20obWFpbkxpc3QuY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2JqZWN0LmNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWFpbkxpc3RBcnJheVtpXS5pZCA9IGdldEluZGV4KGxpc3RPYmplY3QuY29udGVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uZmlnQ2hlY2tCb3hlcygpIHtcbiAgICBsZXQgY2hlY2tib3hlcyA9IFsuLi5tYWluTGlzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hlY2tib3hcIildO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNwb25kVG9DbGljayk7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNwb25kVG9DbGljayk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc3BvbmRUb0NsaWNrKGUpIHtcbiAgICBsZXQgdGFyZ2V0SXRlbTtcbiAgICBsZXQgYWN0aXZlTGlzdCA9IG15TGlzdHNBcnJheS5maW5kKGxpc3QgPT4gbGlzdC5hY3RpdmUgPT0gdHJ1ZSk7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwiY29tcGxldGVcIlxuICAgICk7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcImNvbXBsZXRlXCJcbiAgICApO1xuICAgIHRhcmdldEl0ZW0gPSBhY3RpdmVMaXN0LmNvbnRlbnRzLmZpbmQobGlzdEl0ZW0gPT4gbGlzdEl0ZW0uaW5kZXggPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpO1xuICAgIGlmICh0YXJnZXRJdGVtLmNvbXBsZXRlID09IGZhbHNlKSB7XG4gICAgICAgIHRhcmdldEl0ZW0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB0YXJnZXRJdGVtLmNvbXBsZXRlVmFsdWUgPSAwO1xuICAgIH0gXG4gICAgZWxzZSBpZiAodGFyZ2V0SXRlbS5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgIHRhcmdldEl0ZW0uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdGFyZ2V0SXRlbS5jb21wbGV0ZVZhbHVlID0gMTA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGlzdEl0ZW0oaXRlbU9iamVjdCkge1xuICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGl0ZW1FbGVtZW50LmlkID0gZ2V0SW5kZXgoaXRlbU9iamVjdCk7XG4gICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3RJdGVtXCIpO1xuICAgIGFzc2lnblByaW9yaXR5KGl0ZW1FbGVtZW50LCBpdGVtT2JqZWN0KTtcbiAgICBpdGVtRWxlbWVudC5pbm5lckhUTUwgPSBjcmVhdGVJdGVtQ29udGVudChpdGVtT2JqZWN0KTtcbiAgICBpZiAoaXRlbU9iamVjdC5jb21wbGV0ZSA9PSB0cnVlKSBtYXJrQ29tcGxldGUoaXRlbUVsZW1lbnQpO1xuICAgIG1haW5MaXN0LmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbUNvbnRlbnQoaXRlbSkge1xuICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRvRG9Cb3hcIj48ZGV0YWlscz48c3VtbWFyeT4nICtcbiAgICAgIGl0ZW0ubmFtZSArXG4gICAgICBcIjwvc3VtbWFyeT48cD5cIiArXG4gICAgICBpdGVtLmRlc2NyaXB0aW9uICtcbiAgICAgICc8L3A+PC9kZXRhaWxzPjxwIGNsYXNzPVwiZHVlRGF0ZVwiPkR1ZSBkYXRlOiAnICtcbiAgICAgIGl0ZW0uZHVlRGF0ZSArXG4gICAgICAnPC9wPjxsYWJlbCBjbGFzcz1cImNvbXBsZXRlTGFiZWxcIj5Db21wbGV0ZWQ6IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgbmFtZT1cImNvbXBsZXRlZFwiIHZhbHVlPVwiXCI+PC9sYWJlbD48YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+WDwvYnV0dG9uPjwvZGl2Pic7XG59XG5cbmZ1bmN0aW9uIG1hcmtDb21wbGV0ZShpdGVtRWxlbWVudCkge1xuICAgIGl0ZW1FbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICBpdGVtRWxlbWVudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgIGxldCBjaGVja2JveCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB0cnVlKTtcbn1cblxuZXhwb3J0IHtcbiAgY29uZmlnQ2hlY2tCb3hlcyxcbiAgY29uZmlnSXRlbURlbGV0ZUJ1dHRvbnMsXG4gIHNldEl0ZW1JbmRpY2VzLFxuICBkaXNwbGF5TGlzdEl0ZW0sXG59O1xuIiwiaW1wb3J0IHtcbiAgbGlzdEVsZW1lbnRzLFxuICBteUxpc3RzQXJyYXksXG4gIGNyZWF0ZUxpc3RFbGVtZW50cyxcbiAgbG9hZERlZmF1bHRMaXN0LFxufSBmcm9tIFwiLi9ET00uanNcIjtcbmltcG9ydCB7YWRkTW9iaWxlU3R5bGVzLCB3aWR0aFRyaWdnZXJ9IGZyb20gXCIuL21lZGlhLXF1ZXJpZXMuanNcIjtcbmltcG9ydCB7bGlzdH0gZnJvbSBcIi4vbWFuYWdlTGlzdHMuanNcIjtcblxubGV0IGxpc3ROYW1lcztcbmxldCBMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCA9IFwidGFzay5teUxpc3RzQXJyYXlcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBpZiAobXlMaXN0c0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gbmV3IGxpc3QoXCJNYWluXCIpO1xuICAgICAgICBmaXJzdC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0TmFtZXMyXCIpKSB7XG4gICAgICAgIC8vIHdpbGwgYWxyZWFkeSBpbmNsdWRlIFwibWFpblwiIGFzIGZpcnN0IGl0ZW06XG4gICAgICAgIGxpc3ROYW1lcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdE5hbWVzMlwiKS5zcGxpdChcIixcIik7XG4gICAgfVxuICAgIC8vIGZpcnN0IHRpbWUgYXBwIGlzIHVzZWQ7IFwibWFpblwiIGlzIGFkZGVkOlxuICAgIGVsc2UgbGlzdE5hbWVzID0gW1wiTWFpblwiXTtcbiAgICBjcmVhdGVMaXN0RWxlbWVudHMobGlzdE5hbWVzKTtcbiAgICBsb2FkRGVmYXVsdExpc3QoKTtcbiAgICBhZGRNb2JpbGVTdHlsZXMod2lkdGhUcmlnZ2VyKTtcbn07XG5cbmZ1bmN0aW9uIHNldExpc3ROYW1lcygpIHtcbiAgICBsaXN0TmFtZXMgPSBsaXN0RWxlbWVudHMubWFwKGxpc3RFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsaXN0TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBzZXRMaXN0TmFtZXMoKTtcbiAgICBsaXN0TmFtZXMudG9TdHJpbmcoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3ROYW1lczJcIiwgbGlzdE5hbWVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RTX09CSkVDVCwgSlNPTi5zdHJpbmdpZnkobXlMaXN0c0FycmF5KSk7XG4gICAgY29uc29sZS5sb2coXCJwb3B1bGF0ZWQhXCIpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCBwb3B1bGF0ZVN0b3JhZ2UpO1xuXG5leHBvcnQge3BvcHVsYXRlU3RvcmFnZSwgbGlzdE5hbWVzLCBzZXRMaXN0TmFtZXMsIExPQ0FMX1NUT1JBR0VfTElTVFNfT0JKRUNUfTtcbiIsImltcG9ydCB7bXlMaXN0c0FycmF5fSBmcm9tIFwiLi9ET00uanNcIjtcblxuZnVuY3Rpb24gbGlzdChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRlbnRzID0gW107XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICBteUxpc3RzQXJyYXkucHVzaCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IHtsaXN0fTtcbiIsImZ1bmN0aW9uIGxpc3RJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbXBsZXRlVmFsdWUgPSAxMDtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXgobGlzdEl0ZW1PYmplY3QpIHtcbiAgICByZXR1cm4gbGlzdEl0ZW1PYmplY3QuaW5kZXg7XG59XG5cbmV4cG9ydCB7bGlzdEl0ZW0sIGdldEluZGV4fTtcbiIsImNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbmNvbnN0IHJpYmJvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtYmFyXCIpO1xuY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkJveFwiKTtcbmNvbnN0IGxlZnRTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0cy1zaWRlYmFyXCIpO1xuY29uc3QgcmlnaHRTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1zaWRlYmFyXCIpO1xuY29uc3QgYWRkSXRlbUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSXRlbUJveFwiKTtcbmNvbnN0IHNvcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRCb3hcIik7XG5jb25zdCB3aWR0aFRyaWdnZXIgPSB3aW5kb3cubWF0Y2hNZWRpYShcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpXCIpO1xuXG5sZXQgdmlld0xpc3RzQnV0dG9uO1xubGV0IG9wZW5BZGRJdGVtQm94QnV0dG9uO1xubGV0IG92ZXJsYXk7XG5sZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubGV0IHRvcE5hdkJhcjtcbmNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtYnV0dG9uXCI7XG5jbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcblxuZnVuY3Rpb24gYWRkTW9iaWxlQ2xhc3MoKSB7XG4gICAgbWFpbkJveC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICAgIGxlZnRTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtc2xpZGVcIik7XG4gICAgYWRkSXRlbUJveC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIHNvcnRCb3guY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1vYmlsZUNsYXNzKCkge1xuICAgIG1haW5Cb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICBsZWZ0U2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLXNsaWRlXCIpO1xuICAgIGFkZEl0ZW1Cb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1zbGlkZVwiKTtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIGxlZnRTaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNvcnRCb3guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vYmlsZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgaW5uZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgb3BlbkFkZEl0ZW1Cb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVmlldyBMaXN0c1wiO1xuICAgIG9wZW5BZGRJdGVtQm94QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG8gSXRlbVwiO1xuICAgIGlubmVyTmF2LmlkID0gXCJpbm5lck5hdlwiO1xuICAgIHZpZXdMaXN0c0J1dHRvbi5jbGFzc05hbWUgPSBcIm1vYmlsZS1idXR0b25cIjtcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbi5jbGFzc05hbWUgPSBcIm1vYmlsZS1idXR0b25cIjtcbiAgICBpbm5lck5hdi5hcHBlbmRDaGlsZCh2aWV3TGlzdHNCdXR0b24pO1xuICAgIGlubmVyTmF2LmFwcGVuZENoaWxkKG9wZW5BZGRJdGVtQm94QnV0dG9uKTtcbiAgICBvcGVuQWRkSXRlbUJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkFkZEl0ZW1Cb3gpO1xuICAgIHZpZXdMaXN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdmlld0xpc3RzKTtcbiAgICByZXR1cm4gaW5uZXJOYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcE5hdkJhcigpIHtcbiAgICB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvcE5hdkJhci5pZCA9IFwidG9wTmF2QmFyXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3BOYXZCYXIpO1xuICAgIHRvcE5hdkJhci5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICAgIHRvcE5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVNb2JpbGVCdXR0b25zKCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG92ZXJsYXkpKSByZXR1cm47XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBvdmVybGF5LmlkID0gXCJvdmVybGF5XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkTW9iaWxlU3R5bGVzKHgpIHtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICAgIHJpZ2h0U2lkZWJhci5yZW1vdmUoKTtcbiAgICAgICAgYWRkTW9iaWxlQ2xhc3MoKTtcbiAgICAgICAgcmliYm9uLnJlbW92ZSgpO1xuICAgICAgICBjcmVhdGVUb3BOYXZCYXIoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzb3J0Qm94KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRJdGVtQm94KTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVNb2JpbGVDbGFzcygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJpZ2h0U2lkZWJhcik7XG4gICAgICAgIHJpZ2h0U2lkZWJhci5hcHBlbmRDaGlsZChzb3J0Qm94KTtcbiAgICAgICAgcmlnaHRTaWRlYmFyLmFwcGVuZENoaWxkKGFkZEl0ZW1Cb3gpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvcE5hdkJhcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmliYm9uKTtcbiAgICAgICAgcmliYm9uLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG92ZXJsYXkpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGNsb3NlQnV0dG9uKSkge1xuICAgICAgICAgICAgY2xvc2VCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdMaXN0cygpIHtcbiAgICBsZWZ0U2lkZWJhci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICBpZiAoIWxlZnRTaWRlYmFyLmNvbnRhaW5zKGNsb3NlQnV0dG9uKSkgbGVmdFNpZGViYXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKGxlZnRTaWRlYmFyKSk7XG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufVxuXG5mdW5jdGlvbiBvcGVuQWRkSXRlbUJveCgpIHtcbiAgICBhZGRJdGVtQm94LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIGlmICghYWRkSXRlbUJveC5jb250YWlucyhjbG9zZUJ1dHRvbikpIGFkZEl0ZW1Cb3guYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKGFkZEl0ZW1Cb3gpKTtcbiAgICBjcmVhdGVPdmVybGF5KCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUG9wdXAocG9wdXApIHtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhvdmVybGF5KSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuICAgIH1cbn1cblxud2lkdGhUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYWRkTW9iaWxlU3R5bGVzKTtcblxuZXhwb3J0IHthZGRNb2JpbGVTdHlsZXMsIHdpZHRoVHJpZ2dlcn07XG4iLCJjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eVwiKSk7XG5sZXQgcHJpb3JpdHk7XG5cbnByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoXCJjaGVja2VkXCIpKSB7XG4gICAgICAgIHByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuICAgIH1cbiAgICBidXR0b24ub25mb2N1cyA9ICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfTtcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBhc3NpZ25Qcmlvcml0eShpdGVtRWxlbWVudCwgaXRlbU9iamVjdCkge1xuICAgIHN3aXRjaCAoaXRlbU9iamVjdC5wcmlvcml0eSkge1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICAgICAgICAgIGl0ZW1PYmplY3QudmFsdWUgPSAxMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG4gICAgICAgICAgaXRlbU9iamVjdC52YWx1ZSA9IDIwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKTtcbiAgICAgICAgICBpdGVtT2JqZWN0LnZhbHVlID0gMzA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQge2Fzc2lnblByaW9yaXR5LCBwcmlvcml0eX07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9ET00uanNcIjtcbmltcG9ydCBcIi4vdG9Eby5jc3NcIjtcbmltcG9ydCBcIi4vbGlzdC1zb3J0aW5nLmpzXCI7XG5pbXBvcnQgXCIuL2NsZWFySXRlbXMuanNcIjtcbmltcG9ydCBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=