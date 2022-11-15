/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n\r\n/* ========================================================================= */\r\n\r\n:root {\r\n    --primarycolor: #101010;\r\n    --secondarycolor: black;\r\n    --tertiarycolor: #CC854E;\r\n    --headercolor: #DC5F00;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template: 50px 1fr / 400px 1fr;\r\n    height: 100vh;\r\n    color: white;\r\n}\r\n\r\nheader {\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    background-color: var(--headercolor);\r\n}\r\n\r\n.sidebar {\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    background-color: var(--secondarycolor);\r\n}\r\n\r\nmain {\r\n    grid-area: 2 / 2 / 3 / 3;\r\n    background-color: var(--primarycolor);\r\n    padding: 3rem;\r\n}\r\n\r\nmain>.p-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\nmain>.p-header>h1 {\r\n    font-size: 4rem;\r\n    color: var(--tertiarycolor);\r\n}\r\n\r\nmain>.p-header>button {\r\n    width: 3rem;\r\n    height: 2rem;\r\n}\r\n\r\nmain>.p-description {\r\n    font-size: 1.2rem;\r\n    line-height: 1.3;\r\n}\r\n\r\n.modal-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: opacity 0.3s ease;\r\n}\r\n\r\n.modal-container.show {\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(26, 26, 26);\r\n    color: white;\r\n    border: 3px solid rgb(95, 252, 239);\r\n    height: 500px;\r\n    width: 400px;\r\n    max-width: 100%;\r\n    padding: 30px 50px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;;AAGA,8EAA8E;;AAI9E;IACI,uBAAuB;IACvB,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,oCAAoC;AACxC;;AAEA;IACI,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;IACI,wBAAwB;IACxB,qCAAqC;IACrC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,mCAAmC;IACnC,aAAa;IACb,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;AAClC","sourcesContent":["html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n\r\n/* ========================================================================= */\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n:root {\r\n    --primarycolor: #101010;\r\n    --secondarycolor: black;\r\n    --tertiarycolor: #CC854E;\r\n    --headercolor: #DC5F00;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template: 50px 1fr / 400px 1fr;\r\n    height: 100vh;\r\n    color: white;\r\n}\r\n\r\nheader {\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    background-color: var(--headercolor);\r\n}\r\n\r\n.sidebar {\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    background-color: var(--secondarycolor);\r\n}\r\n\r\nmain {\r\n    grid-area: 2 / 2 / 3 / 3;\r\n    background-color: var(--primarycolor);\r\n    padding: 3rem;\r\n}\r\n\r\nmain>.p-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\nmain>.p-header>h1 {\r\n    font-size: 4rem;\r\n    color: var(--tertiarycolor);\r\n}\r\n\r\nmain>.p-header>button {\r\n    width: 3rem;\r\n    height: 2rem;\r\n}\r\n\r\nmain>.p-description {\r\n    font-size: 1.2rem;\r\n    line-height: 1.3;\r\n}\r\n\r\n.modal-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: opacity 0.3s ease;\r\n}\r\n\r\n.modal-container.show {\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n}\r\n\r\n.modal {\r\n    background-color: rgb(26, 26, 26);\r\n    color: white;\r\n    border: 3px solid rgb(95, 252, 239);\r\n    height: 500px;\r\n    width: 400px;\r\n    max-width: 100%;\r\n    padding: 30px 50px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/controllers/project-folders.js":
/*!********************************************!*\
  !*** ./src/controllers/project-folders.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectFolder": () => (/* binding */ addProjectFolder)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _factory_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory-functions */ "./src/factory-functions.js");
/* harmony import */ var _dom_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/display */ "./src/dom/display.js");




function addProjectFolder() {
    const pfName = document.querySelector('#pf-name');
    const projFolder = pfName.value;
    const newProjFolder = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.ProjectFolder)(projFolder);
    _index__WEBPACK_IMPORTED_MODULE_0__.projectFolders.push(newProjFolder);
    (0,_dom_display__WEBPACK_IMPORTED_MODULE_2__.displayFolders)(_index__WEBPACK_IMPORTED_MODULE_0__.projectFolders);
}



/***/ }),

/***/ "./src/controllers/projects.js":
/*!*************************************!*\
  !*** ./src/controllers/projects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _factory_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory-functions */ "./src/factory-functions.js");
/* harmony import */ var _dom_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/display */ "./src/dom/display.js");
/* harmony import */ var _dom_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/modal */ "./src/dom/modal.js");





function addProject(e) {
    const projectName = document.querySelector('#p-name');
    const projectDescription = document.querySelector('#p-desc');
    const project = projectName.value;
    const description = projectDescription.value;
    const newProj = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.Project)(project, description);
    const index = e.target.dataset.buttonIndex;
    _index__WEBPACK_IMPORTED_MODULE_0__.projectFolders[index].projects.push(newProj);
    (0,_dom_modal__WEBPACK_IMPORTED_MODULE_3__.removeProjectModal)();
    (0,_dom_display__WEBPACK_IMPORTED_MODULE_2__.displayFolders)(_index__WEBPACK_IMPORTED_MODULE_0__.projectFolders);
    (0,_dom_display__WEBPACK_IMPORTED_MODULE_2__.displayProject)(newProj, index, _index__WEBPACK_IMPORTED_MODULE_0__.projectFolders[index].projects.length - 1);
}



/***/ }),

/***/ "./src/controllers/todos.js":
/*!**********************************!*\
  !*** ./src/controllers/todos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _factory_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory-functions */ "./src/factory-functions.js");
/* harmony import */ var _dom_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/display */ "./src/dom/display.js");
/* harmony import */ var _dom_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/modal */ "./src/dom/modal.js");





function addTodo(e) {
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const task = taskName.value;
    const date = dueDate.value
    const newTodo = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.Todo)(task, date);
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    _index__WEBPACK_IMPORTED_MODULE_0__.projectFolders[pfIndex].projects[pIndex].todos.push(newTodo);
    (0,_dom_modal__WEBPACK_IMPORTED_MODULE_3__.removeTodoModal)();
    (0,_dom_display__WEBPACK_IMPORTED_MODULE_2__.displayProject)(_index__WEBPACK_IMPORTED_MODULE_0__.projectFolders[pfIndex].projects[pIndex], pfIndex, pIndex);
}



/***/ }),

/***/ "./src/dom/display.js":
/*!****************************!*\
  !*** ./src/dom/display.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayFolders": () => (/* binding */ displayFolders),
/* harmony export */   "displayProject": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/dom/modal.js");



function displayFolders(folders) {
    const container = document.querySelector('.project-folder-list');
    container.innerHTML = '';
    const list = document.createElement('ul');
    folders.forEach((folder, index) => {
        const projFolder = document.createElement('li');
        const button = document.createElement('button');
        const div = document.createElement('div');
        const projectList = document.createElement('ul');
        const pfIndex = index;
        projectList.classList.add('project-list');
        projectList.setAttribute('data-pf-index', index);
        button.classList.add('pf-button');
        button.setAttribute('data-button-index', index);
        button.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_1__.displayProjectModal);
        div.textContent = folder.name;
        button.textContent = '+';
        div.appendChild(button);
        projFolder.appendChild(div);
        projFolder.appendChild(projectList);
        list.appendChild(projFolder);
        const projects = folder.projects;
        projects.forEach((project, index) => {
            const proj = document.createElement('li');
            proj.setAttribute('data-p-index', index);
            proj.setAttribute('data-pf-index', pfIndex);
            proj.textContent = project.name;
            projectList.appendChild(proj)
            proj.addEventListener('click', selectProject);
        })
    })
    container.appendChild(list);
}

function selectProject(e) {
    const index = e.target.dataset.pIndex;
    const pfIndex = e.target.dataset.pfIndex;
    const proj = _index__WEBPACK_IMPORTED_MODULE_0__.projectFolders[pfIndex].projects[index];
    displayProject(proj, pfIndex, index);
}


function displayProject(project, pfIndex, pIndex) {
    const mainContainer = document.querySelector('main');
    mainContainer.innerHTML = '';
    const divHeader = document.createElement('div');
    const description = document.createElement('p');
    const todoHeaderContainer = document.createElement('div');
    const todoList = document.createElement('ul');
    const projectHeader = document.createElement('h1');
    const projectDelete = document.createElement('button');
    const todoHeader = document.createElement('h2');
    const addTodo = document.createElement('button');
    addTodo.setAttribute('data-pf-index', pfIndex);
    addTodo.setAttribute('data-p-index', pIndex);
    addTodo.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_1__.displayTodoModal);
    divHeader.classList.add('p-header');
    description.classList.add('p-description');
    todoHeaderContainer.classList.add('todo-header');
    todoList.classList.add('todo-list');
    projectHeader.textContent = project.name;
    projectDelete.textContent = '-';
    description.textContent = project.description;
    todoHeader.textContent = 'Todos';
    addTodo.textContent = '+';
    divHeader.appendChild(projectHeader);
    divHeader.appendChild(projectDelete);
    todoHeaderContainer.appendChild(todoHeader);
    todoHeaderContainer.appendChild(addTodo);
    mainContainer.appendChild(divHeader);
    mainContainer.appendChild(description);
    mainContainer.appendChild(todoHeaderContainer);
    mainContainer.appendChild(todoList);
    const todos = project.todos;
    todos.forEach((todo) => {
        const todoContainer = document.createElement('li');
        const checkbox = document.createElement('input');
        const task = document.createElement('p');
        const date = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        checkbox.setAttribute('type', 'checkbox');
        task.textContent = todo.task;
        date.textContent = todo.date;
        editButton.textContent = '/';
        deleteButton.textContent = 'X';
        todoContainer.appendChild(checkbox);
        todoContainer.appendChild(task);
        todoContainer.appendChild(date);
        todoContainer.appendChild(editButton);
        todoContainer.appendChild(deleteButton);
        todoList.appendChild(todoContainer);
    })
}




/***/ }),

/***/ "./src/dom/modal.js":
/*!**************************!*\
  !*** ./src/dom/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectModal": () => (/* binding */ displayProjectModal),
/* harmony export */   "displayTodoModal": () => (/* binding */ displayTodoModal),
/* harmony export */   "removeProjectModal": () => (/* binding */ removeProjectModal),
/* harmony export */   "removeTodoModal": () => (/* binding */ removeTodoModal)
/* harmony export */ });
function displayProjectModal(e) {
    const modal = document.querySelector('.project-modal');
    const modalButton = document.querySelector('.p-button');
    const index = e.target.dataset.buttonIndex;
    modalButton.setAttribute('data-button-index', index);
    modal.classList.add('show');
}

function removeProjectModal() {
    const modal = document.querySelector('.project-modal');
    const modalButton = document.querySelector('.p-button');
    modalButton.removeAttribute('data-button-index');
    modal.classList.remove('show');
}

function displayTodoModal(e) {
    const modal = document.querySelector('.todo-modal');
    const modalButton = document.querySelector('.td-button');
    const pfIndex = e.target.dataset.pfIndex;
    const pIndex = e.target.dataset.pIndex;
    modalButton.setAttribute('data-pf-index', pfIndex);
    modalButton.setAttribute('data-p-index', pIndex);
    modal.classList.add('show');
}

function removeTodoModal() {
    const modal = document.querySelector('.todo-modal');
    const modalButton = document.querySelector('.td-button');
    modalButton.removeAttribute('data-pf-index');
    modalButton.removeAttribute('data-p-index');
    modal.classList.remove('show');
}




/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setExamples": () => (/* binding */ setExamples)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _factory_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory-functions */ "./src/factory-functions.js");
/* harmony import */ var _dom_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/display */ "./src/dom/display.js");





function setExamples() {
    const todo1 = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.Todo)('Todo 1', '11/14/2022');
    const todo2 = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.Todo)('Todo 2', '11/15/2022');
    const todo3 = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.Todo)('Todo 3', '11/16/2022');
    const exampleProject = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.Project)('Example Project', 'This is an example project. You can edit the name and description of this project by clicking the edit button. You can also delete this project from the project folder by clicking the project delete button. Clicking the add todo button will allow you to add as many todos as you want to this project!');
    const projectFolder1 = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.ProjectFolder)('Personal');
    const projectFolder2 = (0,_factory_functions__WEBPACK_IMPORTED_MODULE_1__.ProjectFolder)('Work');
    exampleProject.todos.push(todo1);
    exampleProject.todos.push(todo2);
    exampleProject.todos.push(todo3);
    projectFolder1.projects.push(exampleProject);
    _index__WEBPACK_IMPORTED_MODULE_0__.projectFolders.push(projectFolder1);
    _index__WEBPACK_IMPORTED_MODULE_0__.projectFolders.push(projectFolder2);
    (0,_dom_display__WEBPACK_IMPORTED_MODULE_2__.displayFolders)(_index__WEBPACK_IMPORTED_MODULE_0__.projectFolders);
    (0,_dom_display__WEBPACK_IMPORTED_MODULE_2__.displayProject)(exampleProject, 0, 0);
}



/***/ }),

/***/ "./src/factory-functions.js":
/*!**********************************!*\
  !*** ./src/factory-functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectFolder": () => (/* binding */ ProjectFolder),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
function Todo(task, date) {
    let dateCreated = new Date();
    let taskComplete = false;
    return { task, date, dateCreated, taskComplete };
}

function Project(name, description) {
    let todos = [];
    return { name, description, todos };
}

function ProjectFolder(name) {
    let projects = [];
    return { name, projects }
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFolders": () => (/* binding */ projectFolders)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controllers_project_folders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/project-folders */ "./src/controllers/project-folders.js");
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/projects */ "./src/controllers/projects.js");
/* harmony import */ var _controllers_todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/todos */ "./src/controllers/todos.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example */ "./src/example.js");






const projectFolders = [];

const todoButton = document.querySelector('.td-button');
todoButton.addEventListener('click', _controllers_todos__WEBPACK_IMPORTED_MODULE_3__.addTodo);

const projectButton = document.querySelector('.p-button');
projectButton.addEventListener('click', _controllers_projects__WEBPACK_IMPORTED_MODULE_2__.addProject);

const pfButton = document.querySelector('.pf-button');
pfButton.addEventListener('click', _controllers_project_folders__WEBPACK_IMPORTED_MODULE_1__.addProjectFolder);

(0,_example__WEBPACK_IMPORTED_MODULE_4__.setExamples)();



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZ0I7QUFDbkQ7QUFDQSxxREFBVztBQUNYOzs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3QtZm9sZGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlcnMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kb20vZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0Ly4vc3JjL2RvbS9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0Ly4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9mYWN0b3J5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXHJcXG5ib2R5LFxcclxcbmRpdixcXHJcXG5zcGFuLFxcclxcbmFwcGxldCxcXHJcXG5vYmplY3QsXFxyXFxuaWZyYW1lLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbnAsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5wcmUsXFxyXFxuYSxcXHJcXG5hYmJyLFxcclxcbmFjcm9ueW0sXFxyXFxuYWRkcmVzcyxcXHJcXG5iaWcsXFxyXFxuY2l0ZSxcXHJcXG5jb2RlLFxcclxcbmRlbCxcXHJcXG5kZm4sXFxyXFxuZW0sXFxyXFxuaW1nLFxcclxcbmlucyxcXHJcXG5rYmQsXFxyXFxucSxcXHJcXG5zLFxcclxcbnNhbXAsXFxyXFxuc21hbGwsXFxyXFxuc3RyaWtlLFxcclxcbnN0cm9uZyxcXHJcXG5zdWIsXFxyXFxuc3VwLFxcclxcbnR0LFxcclxcbnZhcixcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5jZW50ZXIsXFxyXFxuZGwsXFxyXFxuZHQsXFxyXFxuZGQsXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuZmllbGRzZXQsXFxyXFxuZm9ybSxcXHJcXG5sYWJlbCxcXHJcXG5sZWdlbmQsXFxyXFxudGFibGUsXFxyXFxuY2FwdGlvbixcXHJcXG50Ym9keSxcXHJcXG50Zm9vdCxcXHJcXG50aGVhZCxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmNhbnZhcyxcXHJcXG5kZXRhaWxzLFxcclxcbmVtYmVkLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5ydWJ5LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSxcXHJcXG50aW1lLFxcclxcbm1hcmssXFxyXFxuYXVkaW8sXFxyXFxudmlkZW8ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmRldGFpbHMsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5maWd1cmUsXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5xIHtcXHJcXG4gICAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSxcXHJcXG5ibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLFxcclxcbnE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1wcmltYXJ5Y29sb3I6ICMxMDEwMTA7XFxyXFxuICAgIC0tc2Vjb25kYXJ5Y29sb3I6IGJsYWNrO1xcclxcbiAgICAtLXRlcnRpYXJ5Y29sb3I6ICNDQzg1NEU7XFxyXFxuICAgIC0taGVhZGVyY29sb3I6ICNEQzVGMDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDUwcHggMWZyIC8gNDAwcHggMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Y29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Y29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluPi5wLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbj4ucC1oZWFkZXI+aDEge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbj4ucC1oZWFkZXI+YnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbj4ucC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyLnNob3cge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyNiwgMjYpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYig5NSwgMjUyLCAyMzkpO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlGSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0lBV0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7SUFJSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7OztBQUdBLDhFQUE4RTs7QUFJOUU7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHksXFxyXFxuZGl2LFxcclxcbnNwYW4sXFxyXFxuYXBwbGV0LFxcclxcbm9iamVjdCxcXHJcXG5pZnJhbWUsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYsXFxyXFxucCxcXHJcXG5ibG9ja3F1b3RlLFxcclxcbnByZSxcXHJcXG5hLFxcclxcbmFiYnIsXFxyXFxuYWNyb255bSxcXHJcXG5hZGRyZXNzLFxcclxcbmJpZyxcXHJcXG5jaXRlLFxcclxcbmNvZGUsXFxyXFxuZGVsLFxcclxcbmRmbixcXHJcXG5lbSxcXHJcXG5pbWcsXFxyXFxuaW5zLFxcclxcbmtiZCxcXHJcXG5xLFxcclxcbnMsXFxyXFxuc2FtcCxcXHJcXG5zbWFsbCxcXHJcXG5zdHJpa2UsXFxyXFxuc3Ryb25nLFxcclxcbnN1YixcXHJcXG5zdXAsXFxyXFxudHQsXFxyXFxudmFyLFxcclxcbmIsXFxyXFxudSxcXHJcXG5pLFxcclxcbmNlbnRlcixcXHJcXG5kbCxcXHJcXG5kdCxcXHJcXG5kZCxcXHJcXG5vbCxcXHJcXG51bCxcXHJcXG5saSxcXHJcXG5maWVsZHNldCxcXHJcXG5mb3JtLFxcclxcbmxhYmVsLFxcclxcbmxlZ2VuZCxcXHJcXG50YWJsZSxcXHJcXG5jYXB0aW9uLFxcclxcbnRib2R5LFxcclxcbnRmb290LFxcclxcbnRoZWFkLFxcclxcbnRyLFxcclxcbnRoLFxcclxcbnRkLFxcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuY2FudmFzLFxcclxcbmRldGFpbHMsXFxyXFxuZW1iZWQsXFxyXFxuZmlndXJlLFxcclxcbmZpZ2NhcHRpb24sXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxub3V0cHV0LFxcclxcbnJ1YnksXFxyXFxuc2VjdGlvbixcXHJcXG5zdW1tYXJ5LFxcclxcbnRpbWUsXFxyXFxubWFyayxcXHJcXG5hdWRpbyxcXHJcXG52aWRlbyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLFxcclxcbnEge1xcclxcbiAgICBxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcclxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsXFxyXFxucTphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeWNvbG9yOiAjMTAxMDEwO1xcclxcbiAgICAtLXNlY29uZGFyeWNvbG9yOiBibGFjaztcXHJcXG4gICAgLS10ZXJ0aWFyeWNvbG9yOiAjQ0M4NTRFO1xcclxcbiAgICAtLWhlYWRlcmNvbG9yOiAjREM1RjAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA1MHB4IDFmciAvIDQwMHB4IDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcmNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbj4ucC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4+LnAtaGVhZGVyPmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGVydGlhcnljb2xvcik7XFxyXFxufVxcclxcblxcclxcbm1haW4+LnAtaGVhZGVyPmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4+LnAtZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lci5zaG93IHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMjYsIDI2KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoOTUsIDI1MiwgMjM5KTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RGb2xkZXJzIH0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCB7IFByb2plY3RGb2xkZXIgfSBmcm9tICcuLi9mYWN0b3J5LWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGRpc3BsYXlGb2xkZXJzIH0gZnJvbSAnLi4vZG9tL2Rpc3BsYXknO1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdEZvbGRlcigpIHtcclxuICAgIGNvbnN0IHBmTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZi1uYW1lJyk7XHJcbiAgICBjb25zdCBwcm9qRm9sZGVyID0gcGZOYW1lLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJvakZvbGRlciA9IFByb2plY3RGb2xkZXIocHJvakZvbGRlcik7XHJcbiAgICBwcm9qZWN0Rm9sZGVycy5wdXNoKG5ld1Byb2pGb2xkZXIpO1xyXG4gICAgZGlzcGxheUZvbGRlcnMocHJvamVjdEZvbGRlcnMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0Rm9sZGVyIH07IiwiaW1wb3J0IHsgcHJvamVjdEZvbGRlcnMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9mYWN0b3J5LWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGRpc3BsYXlGb2xkZXJzLCBkaXNwbGF5UHJvamVjdCB9IGZyb20gJy4uL2RvbS9kaXNwbGF5J1xyXG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0TW9kYWwgfSBmcm9tICcuLi9kb20vbW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdChlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLW5hbWUnKTtcclxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWRlc2MnKTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TmFtZS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJvaiA9IFByb2plY3QocHJvamVjdCwgZGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmJ1dHRvbkluZGV4O1xyXG4gICAgcHJvamVjdEZvbGRlcnNbaW5kZXhdLnByb2plY3RzLnB1c2gobmV3UHJvaik7XHJcbiAgICByZW1vdmVQcm9qZWN0TW9kYWwoKTtcclxuICAgIGRpc3BsYXlGb2xkZXJzKHByb2plY3RGb2xkZXJzKTtcclxuICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2osIGluZGV4LCBwcm9qZWN0Rm9sZGVyc1tpbmRleF0ucHJvamVjdHMubGVuZ3RoIC0gMSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFByb2plY3QgfTsiLCJpbXBvcnQgeyBwcm9qZWN0Rm9sZGVycyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL2ZhY3RvcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tICcuLi9kb20vZGlzcGxheSc7XHJcbmltcG9ydCB7IHJlbW92ZVRvZG9Nb2RhbCB9IGZyb20gJy4uL2RvbS9tb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBhZGRUb2RvKGUpIHtcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpO1xyXG4gICAgY29uc3QgdGFzayA9IHRhc2tOYW1lLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGR1ZURhdGUudmFsdWVcclxuICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvKHRhc2ssIGRhdGUpO1xyXG4gICAgY29uc3QgcGZJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucGZJbmRleDtcclxuICAgIGNvbnN0IHBJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucEluZGV4O1xyXG4gICAgcHJvamVjdEZvbGRlcnNbcGZJbmRleF0ucHJvamVjdHNbcEluZGV4XS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG4gICAgcmVtb3ZlVG9kb01vZGFsKCk7XHJcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0Rm9sZGVyc1twZkluZGV4XS5wcm9qZWN0c1twSW5kZXhdLCBwZkluZGV4LCBwSW5kZXgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRUb2RvIH07IiwiaW1wb3J0IHsgcHJvamVjdEZvbGRlcnMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RNb2RhbCwgZGlzcGxheVRvZG9Nb2RhbCB9IGZyb20gXCIuL21vZGFsXCJcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb2xkZXJzKGZvbGRlcnMpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvbGRlci1saXN0Jyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2pGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBwZkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XHJcbiAgICAgICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdkYXRhLXBmLWluZGV4JywgaW5kZXgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwZi1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi1pbmRleCcsIGluZGV4KTtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvamVjdE1vZGFsKTtcclxuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBmb2xkZXIubmFtZTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgcHJvakZvbGRlci5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIHByb2pGb2xkZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQocHJvakZvbGRlcik7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBmb2xkZXIucHJvamVjdHM7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHByb2ouc2V0QXR0cmlidXRlKCdkYXRhLXAtaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHByb2ouc2V0QXR0cmlidXRlKCdkYXRhLXBmLWluZGV4JywgcGZJbmRleCk7XHJcbiAgICAgICAgICAgIHByb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2opXHJcbiAgICAgICAgICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChlKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucEluZGV4O1xyXG4gICAgY29uc3QgcGZJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucGZJbmRleDtcclxuICAgIGNvbnN0IHByb2ogPSBwcm9qZWN0Rm9sZGVyc1twZkluZGV4XS5wcm9qZWN0c1tpbmRleF07XHJcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qLCBwZkluZGV4LCBpbmRleCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0LCBwZkluZGV4LCBwSW5kZXgpIHtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHRvZG9IZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRUb2RvLnNldEF0dHJpYnV0ZSgnZGF0YS1wZi1pbmRleCcsIHBmSW5kZXgpO1xyXG4gICAgYWRkVG9kby5zZXRBdHRyaWJ1dGUoJ2RhdGEtcC1pbmRleCcsIHBJbmRleCk7XHJcbiAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRvZG9Nb2RhbCk7XHJcbiAgICBkaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgncC1oZWFkZXInKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3AtZGVzY3JpcHRpb24nKTtcclxuICAgIHRvZG9IZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1oZWFkZXInKTtcclxuICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xyXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIHByb2plY3REZWxldGUudGV4dENvbnRlbnQgPSAnLSc7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZG9zJztcclxuICAgIGFkZFRvZG8udGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZSk7XHJcbiAgICB0b2RvSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xyXG4gICAgdG9kb0hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyQ29udGFpbmVyKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xyXG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zO1xyXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSB0b2RvLnRhc2s7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcclxuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJy8nO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgZGlzcGxheUZvbGRlcnMsIGRpc3BsYXlQcm9qZWN0IH07IiwiZnVuY3Rpb24gZGlzcGxheVByb2plY3RNb2RhbChlKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsJyk7XHJcbiAgICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmJ1dHRvbkluZGV4O1xyXG4gICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi1pbmRleCcsIGluZGV4KTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdE1vZGFsKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xyXG4gICAgY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucC1idXR0b24nKTtcclxuICAgIG1vZGFsQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1idXR0b24taW5kZXgnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvZG9Nb2RhbChlKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLW1vZGFsJyk7XHJcbiAgICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZC1idXR0b24nKTtcclxuICAgIGNvbnN0IHBmSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnBmSW5kZXg7XHJcbiAgICBjb25zdCBwSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnBJbmRleDtcclxuICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wZi1pbmRleCcsIHBmSW5kZXgpO1xyXG4gICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXAtaW5kZXgnLCBwSW5kZXgpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUb2RvTW9kYWwoKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLW1vZGFsJyk7XHJcbiAgICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZC1idXR0b24nKTtcclxuICAgIG1vZGFsQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wZi1pbmRleCcpO1xyXG4gICAgbW9kYWxCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXAtaW5kZXgnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0TW9kYWwsIHJlbW92ZVByb2plY3RNb2RhbCwgZGlzcGxheVRvZG9Nb2RhbCwgcmVtb3ZlVG9kb01vZGFsIH07IiwiaW1wb3J0IHsgcHJvamVjdEZvbGRlcnMgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0Rm9sZGVyIH0gZnJvbSBcIi4vZmFjdG9yeS1mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUZvbGRlcnMsIGRpc3BsYXlQcm9qZWN0IH0gZnJvbSBcIi4vZG9tL2Rpc3BsYXlcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRFeGFtcGxlcygpIHtcclxuICAgIGNvbnN0IHRvZG8xID0gVG9kbygnVG9kbyAxJywgJzExLzE0LzIwMjInKTtcclxuICAgIGNvbnN0IHRvZG8yID0gVG9kbygnVG9kbyAyJywgJzExLzE1LzIwMjInKTtcclxuICAgIGNvbnN0IHRvZG8zID0gVG9kbygnVG9kbyAzJywgJzExLzE2LzIwMjInKTtcclxuICAgIGNvbnN0IGV4YW1wbGVQcm9qZWN0ID0gUHJvamVjdCgnRXhhbXBsZSBQcm9qZWN0JywgJ1RoaXMgaXMgYW4gZXhhbXBsZSBwcm9qZWN0LiBZb3UgY2FuIGVkaXQgdGhlIG5hbWUgYW5kIGRlc2NyaXB0aW9uIG9mIHRoaXMgcHJvamVjdCBieSBjbGlja2luZyB0aGUgZWRpdCBidXR0b24uIFlvdSBjYW4gYWxzbyBkZWxldGUgdGhpcyBwcm9qZWN0IGZyb20gdGhlIHByb2plY3QgZm9sZGVyIGJ5IGNsaWNraW5nIHRoZSBwcm9qZWN0IGRlbGV0ZSBidXR0b24uIENsaWNraW5nIHRoZSBhZGQgdG9kbyBidXR0b24gd2lsbCBhbGxvdyB5b3UgdG8gYWRkIGFzIG1hbnkgdG9kb3MgYXMgeW91IHdhbnQgdG8gdGhpcyBwcm9qZWN0IScpO1xyXG4gICAgY29uc3QgcHJvamVjdEZvbGRlcjEgPSBQcm9qZWN0Rm9sZGVyKCdQZXJzb25hbCcpO1xyXG4gICAgY29uc3QgcHJvamVjdEZvbGRlcjIgPSBQcm9qZWN0Rm9sZGVyKCdXb3JrJyk7XHJcbiAgICBleGFtcGxlUHJvamVjdC50b2Rvcy5wdXNoKHRvZG8xKTtcclxuICAgIGV4YW1wbGVQcm9qZWN0LnRvZG9zLnB1c2godG9kbzIpO1xyXG4gICAgZXhhbXBsZVByb2plY3QudG9kb3MucHVzaCh0b2RvMyk7XHJcbiAgICBwcm9qZWN0Rm9sZGVyMS5wcm9qZWN0cy5wdXNoKGV4YW1wbGVQcm9qZWN0KTtcclxuICAgIHByb2plY3RGb2xkZXJzLnB1c2gocHJvamVjdEZvbGRlcjEpO1xyXG4gICAgcHJvamVjdEZvbGRlcnMucHVzaChwcm9qZWN0Rm9sZGVyMik7XHJcbiAgICBkaXNwbGF5Rm9sZGVycyhwcm9qZWN0Rm9sZGVycyk7XHJcbiAgICBkaXNwbGF5UHJvamVjdChleGFtcGxlUHJvamVjdCwgMCwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEV4YW1wbGVzIH07IiwiZnVuY3Rpb24gVG9kbyh0YXNrLCBkYXRlKSB7XHJcbiAgICBsZXQgZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHRhc2tDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHsgdGFzaywgZGF0ZSwgZGF0ZUNyZWF0ZWQsIHRhc2tDb21wbGV0ZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBsZXQgdG9kb3MgPSBbXTtcclxuICAgIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCB0b2RvcyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0Rm9sZGVyKG5hbWUpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgcmV0dXJuIHsgbmFtZSwgcHJvamVjdHMgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0Rm9sZGVyIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGFkZFByb2plY3RGb2xkZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2plY3QtZm9sZGVycyc7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2plY3RzJztcclxuaW1wb3J0IHsgYWRkVG9kbyB9IGZyb20gJy4vY29udHJvbGxlcnMvdG9kb3MnO1xyXG5pbXBvcnQgeyBzZXRFeGFtcGxlcyB9IGZyb20gJy4vZXhhbXBsZSc7XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9sZGVycyA9IFtdO1xyXG5cclxuY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZC1idXR0b24nKTtcclxudG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvZG8pO1xyXG5cclxuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLWJ1dHRvbicpO1xyXG5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XHJcblxyXG5jb25zdCBwZkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZi1idXR0b24nKTtcclxucGZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0Rm9sZGVyKTtcclxuXHJcbnNldEV4YW1wbGVzKCk7XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0Rm9sZGVycyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9