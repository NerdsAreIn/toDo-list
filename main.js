/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayListItem": () => (/* binding */ displayListItem)
/* harmony export */ });
function displayListItem(item) {
	const newItem = document.createELement("li");
	newItem.classList.add("listItem");
    switch (item.priority) {
		case ("high"): 
		newItem.classList.add("high-priority");
		break;
		case ("medium"):
		newItem.classList.add("medium-priority");
		break;
		case ("low"):
		newItem.classList.add("low-priority");
		break;
	}
	newItem.innerHTML = '<details><summary>' + item.name + '</summary><p>' + item.description + '</p></details><label>Due date:' + item.dueDate + '<input type="checkbox" name="completed" value=""></label>';
	mainList.appendChild(newItem);	
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
/******/ 			// no module.id needed
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
/* harmony import */ var _manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageToDoItems.js */ "./src/manageToDoItems.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



const addButton = document.getElementById("addButton");
const nameField = document.getElementById("nameField");
const descripField = document.getElementById("descripField");
const dueField = document.getElementById("dueField");
const priorityButtons = Array.from(document.getElementsByClassName("priority"));

function getPriority() {
	let priority = "medium";
    priorityButtons.forEach(button => {
		if (button.hasAttribute("checked")) {
			priority = button
		}
	
	})

}

addButton.onclick = () => {
	let item = (0,_manageToDoItems_js__WEBPACK_IMPORTED_MODULE_0__.listItem)(nameField.value, descripField.value, dueField.value, priority.value);
	(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.displayListItem)(item);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDTDs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQSxZQUFZLDZEQUFRO0FBQ3BCLENBQUMsd0RBQWU7QUFDaEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkaXNwbGF5TGlzdEl0ZW0oaXRlbSkge1xuXHRjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRUxlbWVudChcImxpXCIpO1xuXHRuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbVwiKTtcbiAgICBzd2l0Y2ggKGl0ZW0ucHJpb3JpdHkpIHtcblx0XHRjYXNlIChcImhpZ2hcIik6IFxuXHRcdG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSAoXCJtZWRpdW1cIik6XG5cdFx0bmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtLXByaW9yaXR5XCIpO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgKFwibG93XCIpOlxuXHRcdG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKTtcblx0XHRicmVhaztcblx0fVxuXHRuZXdJdGVtLmlubmVySFRNTCA9ICc8ZGV0YWlscz48c3VtbWFyeT4nICsgaXRlbS5uYW1lICsgJzwvc3VtbWFyeT48cD4nICsgaXRlbS5kZXNjcmlwdGlvbiArICc8L3A+PC9kZXRhaWxzPjxsYWJlbD5EdWUgZGF0ZTonICsgaXRlbS5kdWVEYXRlICsgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVkXCIgdmFsdWU9XCJcIj48L2xhYmVsPic7XG5cdG1haW5MaXN0LmFwcGVuZENoaWxkKG5ld0l0ZW0pO1x0XG59XG5cbmV4cG9ydCB7ZGlzcGxheUxpc3RJdGVtfTsiLCJmdW5jdGlvbiBsaXN0SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblx0dGhpcy5uYW1lID0gbmFtZTtcblx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5leHBvcnQge2xpc3RJdGVtfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bGlzdEl0ZW19IGZyb20gJy4vbWFuYWdlVG9Eb0l0ZW1zLmpzJztcbmltcG9ydCB7ZGlzcGxheUxpc3RJdGVtfSBmcm9tICcuL0RPTS5qcyc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnV0dG9uXCIpO1xuY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lRmllbGRcIik7XG5jb25zdCBkZXNjcmlwRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXBGaWVsZFwiKTtcbmNvbnN0IGR1ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVGaWVsZFwiKTtcbmNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByaW9yaXR5XCIpKTtcblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XG5cdGxldCBwcmlvcml0eSA9IFwibWVkaXVtXCI7XG4gICAgcHJpb3JpdHlCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcblx0XHRpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZShcImNoZWNrZWRcIikpIHtcblx0XHRcdHByaW9yaXR5ID0gYnV0dG9uXG5cdFx0fVxuXHRcblx0fSlcblxufVxuXG5hZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0bGV0IGl0ZW0gPSBsaXN0SXRlbShuYW1lRmllbGQudmFsdWUsIGRlc2NyaXBGaWVsZC52YWx1ZSwgZHVlRmllbGQudmFsdWUsIHByaW9yaXR5LnZhbHVlKTtcblx0ZGlzcGxheUxpc3RJdGVtKGl0ZW0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==