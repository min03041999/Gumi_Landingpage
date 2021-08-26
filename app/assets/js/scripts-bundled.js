/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/js/modules/_banner.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/_banner.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banner)\n/* harmony export */ });\nfunction Banner() {\n  $('.slick').slick({\n    slidesToShow: 1,\n    dots: true,\n    autoplay: true,\n    autoplaySpeed: 2000\n  });\n}\n\n//# sourceURL=webpack://frontend-boilerplate/./app/assets/js/modules/_banner.js?");

/***/ }),

/***/ "./app/assets/js/modules/_sample.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/_sample.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sample)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Sample = /*#__PURE__*/function () {\n  /* ===================================\r\n   *  CONSTRUCTOR\r\n   * =================================== */\n  function Sample() {\n    _classCallCheck(this, Sample);\n\n    this.sampleGenerator();\n  }\n  /* ===================================\r\n   *  EVENTS\r\n   * =================================== */\n\n  /* ===================================\r\n   *  METHODS\r\n   * =================================== */\n\n\n  _createClass(Sample, [{\n    key: \"sampleGenerator\",\n    value: function sampleGenerator() {}\n  }]);\n\n  return Sample;\n}();\n\n\n\n//# sourceURL=webpack://frontend-boilerplate/./app/assets/js/modules/_sample.js?");

/***/ }),

/***/ "./app/assets/js/modules/_scroll.js":
/*!******************************************!*\
  !*** ./app/assets/js/modules/_scroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scroll)\n/* harmony export */ });\nfunction Scroll() {\n  $(window).on(\"scroll\", function () {\n    if ($(window).scrollTop() > 400) {\n      $(\".header\").addClass(\"active\");\n    } else {\n      $(\".header\").removeClass(\"active\");\n    }\n  });\n}\n\n//# sourceURL=webpack://frontend-boilerplate/./app/assets/js/modules/_scroll.js?");

/***/ }),

/***/ "./app/assets/js/modules/_sidebar.js":
/*!*******************************************!*\
  !*** ./app/assets/js/modules/_sidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sildebar)\n/* harmony export */ });\nfunction Sildebar() {\n  var open = document.querySelector('.open');\n  var navbarSlide = document.querySelector('.sidebar');\n  var close = document.querySelector('.closes');\n  open.addEventListener('click', function () {\n    navbarSlide.classList.add('active');\n    open.classList.remove('active');\n    close.classList.add('active');\n  });\n  close.addEventListener('click', function () {\n    navbarSlide.classList.remove('active');\n    open.classList.add('active');\n    close.classList.remove('active');\n  });\n}\n\n//# sourceURL=webpack://frontend-boilerplate/./app/assets/js/modules/_sidebar.js?");

/***/ }),

/***/ "./app/assets/js/modules/_slider-features.js":
/*!***************************************************!*\
  !*** ./app/assets/js/modules/_slider-features.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SilderFeatures)\n/* harmony export */ });\nfunction SilderFeatures() {\n  $('.features__slick').slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    dots: true,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  });\n}\n\n//# sourceURL=webpack://frontend-boilerplate/./app/assets/js/modules/_slider-features.js?");

/***/ }),

/***/ "./app/assets/js/modules/_slider-meet.js":
/*!***********************************************!*\
  !*** ./app/assets/js/modules/_slider-meet.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SilderMeet)\n/* harmony export */ });\nfunction SilderMeet() {\n  $('.meet__slick').slick({\n    slidesToShow: 4,\n    slidesToScroll: 4,\n    dots: true,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        infinite: true,\n        dots: true\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 2\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  });\n}\n\n//# sourceURL=webpack://frontend-boilerplate/./app/assets/js/modules/_slider-meet.js?");

/***/ }),

/***/ "./app/assets/js/scripts.js":
/*!**********************************!*\
  !*** ./app/assets/js/scripts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_sample */ \"./app/assets/js/modules/_sample.js\");\n/* harmony import */ var _modules_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_banner */ \"./app/assets/js/modules/_banner.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_scroll */ \"./app/assets/js/modules/_scroll.js\");\n/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/_sidebar */ \"./app/assets/js/modules/_sidebar.js\");\n/* harmony import */ var _modules_slider_features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_slider-features */ \"./app/assets/js/modules/_slider-features.js\");\n/* harmony import */ var _modules_slider_meet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/_slider-meet */ \"./app/assets/js/modules/_slider-meet.js\");\n\n$(document).ready(function () {\n  var sample = new _modules_sample__WEBPACK_IMPORTED_MODULE_0__.default();\n});\n\n\n\n\n\n$(document).ready(function () {\n  (0,_modules_banner__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_modules_slider_features__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_modules_slider_meet__WEBPACK_IMPORTED_MODULE_5__.default)();\n});\n\n//# sourceURL=webpack://frontend-boilerplate/./app/assets/js/scripts.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/assets/js/scripts.js");
/******/ 	
/******/ })()
;