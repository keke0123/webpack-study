(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return print; });\nfunction print(text) {\r\n    console.log(\"text\", text);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"LvDl\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ \"dSPy\");\n\r\n\r\n\r\n\r\nfunction component() {\r\n    const element = document.createElement(\"div\");\r\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join([\"Hello\", \"Webpack\"], \" \");\r\n    element.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(null, \"hello webpack\");\r\n    return element;\r\n}\r\n\r\ndocument.body.appendChild(component());\r\n\r\n// async function getComponent() {\r\n//     // return import(\"lodash\")\r\n//     //     .then(({ default: _ }) => {\r\n//     //         const element = document.createElement(\"div\");\r\n//     //         element.innerHTML = _.join([\"Hello\", \"Webpack\"], \" \");\r\n//     //         return element;\r\n//     //     })\r\n//     //     .catch(error => \"An Error occurred while loading the component\");\r\n//     const element = document.createElement(\"div\");\r\n//     const { default: _ } = await import(\"lodash\");\r\n//     element.innerHTML = _.join([\"Hello\", \"Webpack\"], \" \");\r\n//     return element;\r\n// }\r\n\r\n// getComponent().then(component => {\r\n//     document.body.appendChild(component);\r\n// });\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["tjUo","runtime","venders"]]]);