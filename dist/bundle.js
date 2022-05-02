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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n#sidebar {\n  border-right: 2px solid black;\n  box-shadow: 7px 0px 0px 0px rgba(0,0,0,0.2);\n\n  display: grid;\n  grid-template-rows: 2rem 1fr;\n  gap: 3rem;\n  padding: 2rem;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.link + .link {\n  margin-top: 1.3rem;\n}\n\n#main {\n  grid-column: 2;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.24fr;\n  grid-template-rows: 2rem 1fr;\n  gap: 1rem;\n}\n\n.title,\n#edit-title {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.return {\n  grid-column: -2;\n  grid-row: 1;\n  justify-self: end;\n\n  cursor: pointer;\n}\n\n.projects {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 18rem);\n  grid-auto-rows: 9rem;\n  gap: 1rem;\n}\n\n.card {\n  border: 1px solid black;\n  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.2);\n  padding: 0.5rem 2rem;\n\n  cursor: pointer;\n}\n\n.add,\n.editor {\n  /* Change these to font icons later */\n  font-weight: bold;\n  font-size: 2rem;\n  border: 2px solid black;\n  border-radius: 100%;\n  height: 2.5rem;\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n}\n\n.add {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n}\n\n#project-edit,\n#project-save {\n  position: fixed;\n  bottom: 4rem;\n  right: 1rem;\n}\n\n#project-delete {\n  position: fixed;\n  bottom: 7rem;\n  right: 1rem;\n}\n\n#project-edit::before,\n.todo-edit::before,\n.note-edit::before {\n  content: \"e\";\n}\n\n#project-delete::before,\n.todo-delete::before,\n.note-delete::before {\n  content: \"❌\";\n}\n\n#project-delete-confirm {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.project-info,\n.notes {\n  grid-column: 1 / -2;\n  grid-row: 2;\n\n  display: grid;\n  grid-template-rows: repeat(50, auto) 1fr;\n  gap: 0.5rem;\n}\n\n.project-info .description,\n.project-info #edit-description {\n  grid-row: 1;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.5fr 1fr 2rem;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.type,\n#edit-type {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.priority,\n#edit-priority {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.priority::before,\n#priority::before {\n  content: \"Priority: \";\n}\n\n.due-date,\n#due-date {\n  grid-column: 4;\n  grid-row: 1;\n}\n\n.due-date::before {\n  content: \"Due: \";\n}\n\n.status {\n  grid-column: 5;\n  grid-row: 1;\n\n  height: 2rem;\n  width: 2rem;\n  border: 1px solid black;\n  border-radius: 100%;\n  justify-self: end;\n}\n\n.status.true {\n  background-color: green;\n}\n\n.todo .description,\n.todo #edit-description {\n  grid-column: 1 / 3;\n  grid-row: 2;\n}\n\n.todo .checklist {\n  grid-column: 4 / 6;\n  grid-row: 2;\n}\n\n.todo .buttons,\n.note .buttons {\n  grid-column: 1;\n  grid-row: 3;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 2rem 2rem;\n  gap: 0.5rem;\n}\n\n.note-edit,\n#note-save,\n.todo-edit,\n#todo-save {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.note-delete,\n.todo-delete {\n  grid-column: 2;\n}\n\n.buttons .editor {\n  font-size: 1.5rem;\n  height: 2rem;\n  width: 2rem;\n}\n\n.notes {\n  margin-right: 3.5rem;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.note .description,\n.note .edit-description {\n  grid-row: 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,2CAA2C;;EAE3C,aAAa;EACb,4BAA4B;EAC5B,SAAS;EACT,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,4BAA4B;EAC5B,SAAS;AACX;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;EACX,iBAAiB;;EAEjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,8CAA8C;EAC9C,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,2CAA2C;EAC3C,oBAAoB;;EAEpB,eAAe;AACjB;;AAEA;;EAEE,qCAAqC;EACrC,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;;;EAGE,YAAY;AACd;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;;AAEA;;EAEE,mBAAmB;EACnB,WAAW;;EAEX,aAAa;EACb,wCAAwC;EACxC,WAAW;AACb;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,wBAAwB;EACxB,YAAY;AACd;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,WAAW;;EAEX,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,WAAW;AACb;;AAEA;;;;EAIE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;;EAEE,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n#sidebar {\n  border-right: 2px solid black;\n  box-shadow: 7px 0px 0px 0px rgba(0,0,0,0.2);\n\n  display: grid;\n  grid-template-rows: 2rem 1fr;\n  gap: 3rem;\n  padding: 2rem;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.link + .link {\n  margin-top: 1.3rem;\n}\n\n#main {\n  grid-column: 2;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.24fr;\n  grid-template-rows: 2rem 1fr;\n  gap: 1rem;\n}\n\n.title,\n#edit-title {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.return {\n  grid-column: -2;\n  grid-row: 1;\n  justify-self: end;\n\n  cursor: pointer;\n}\n\n.projects {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 18rem);\n  grid-auto-rows: 9rem;\n  gap: 1rem;\n}\n\n.card {\n  border: 1px solid black;\n  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.2);\n  padding: 0.5rem 2rem;\n\n  cursor: pointer;\n}\n\n.add,\n.editor {\n  /* Change these to font icons later */\n  font-weight: bold;\n  font-size: 2rem;\n  border: 2px solid black;\n  border-radius: 100%;\n  height: 2.5rem;\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n}\n\n.add {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n}\n\n#project-edit,\n#project-save {\n  position: fixed;\n  bottom: 4rem;\n  right: 1rem;\n}\n\n#project-delete {\n  position: fixed;\n  bottom: 7rem;\n  right: 1rem;\n}\n\n#project-edit::before,\n.todo-edit::before,\n.note-edit::before {\n  content: \"e\";\n}\n\n#project-delete::before,\n.todo-delete::before,\n.note-delete::before {\n  content: \"❌\";\n}\n\n#project-delete-confirm {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.project-info,\n.notes {\n  grid-column: 1 / -2;\n  grid-row: 2;\n\n  display: grid;\n  grid-template-rows: repeat(50, auto) 1fr;\n  gap: 0.5rem;\n}\n\n.project-info .description,\n.project-info #edit-description {\n  grid-row: 1;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.5fr 1fr 2rem;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.type,\n#edit-type {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.priority,\n#edit-priority {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.priority::before,\n#priority::before {\n  content: \"Priority: \";\n}\n\n.due-date,\n#due-date {\n  grid-column: 4;\n  grid-row: 1;\n}\n\n.due-date::before {\n  content: \"Due: \";\n}\n\n.status {\n  grid-column: 5;\n  grid-row: 1;\n\n  height: 2rem;\n  width: 2rem;\n  border: 1px solid black;\n  border-radius: 100%;\n  justify-self: end;\n}\n\n.status.true {\n  background-color: green;\n}\n\n.todo .description,\n.todo #edit-description {\n  grid-column: 1 / 3;\n  grid-row: 2;\n}\n\n.todo .checklist {\n  grid-column: 4 / 6;\n  grid-row: 2;\n}\n\n.todo .buttons,\n.note .buttons {\n  grid-column: 1;\n  grid-row: 3;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 2rem 2rem;\n  gap: 0.5rem;\n}\n\n.note-edit,\n#note-save,\n.todo-edit,\n#todo-save {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.note-delete,\n.todo-delete {\n  grid-column: 2;\n}\n\n.buttons .editor {\n  font-size: 1.5rem;\n  height: 2rem;\n  width: 2rem;\n}\n\n.notes {\n  margin-right: 3.5rem;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.note .description,\n.note .edit-description {\n  grid-row: 2;\n}"],"sourceRoot":""}]);
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

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
const displayController = (() => {
  const initialSetup = (projectList) => {
    const body = document.querySelector("body");
    const content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);

    content.appendChild(__sidebarCreate());
    content.appendChild(__projectsOverviewMain(projectList));
  };
  const __sidebarCreate = () => {
    const sidebar = document.createElement("nav");
    sidebar.id = "sidebar";

    const title = document.createElement("h1");
    title.textContent = "title tk"
    const links = document.createElement("div");
    links.id = "links";
    const projectsLink = document.createElement("div");
    projectsLink.textContent = "Projects";
    projectsLink.classList.add("link");
    projectsLink.id = "projects";
    const notesLink = document.createElement("div");
    notesLink.textContent = "Notes";
    notesLink.classList.add("link");
    notesLink.id = "notes";
    const settingsLink = document.createElement("div");
    settingsLink.textContent = "Settings";
    settingsLink.classList.add("link");
    settingsLink.id = "settings";
    
    sidebar.appendChild(title);
    links.appendChild(projectsLink);
    links.appendChild(notesLink);
    links.appendChild(settingsLink);
    sidebar.appendChild(links);
    return sidebar;
  };

  const projectsOverview = (projectsList) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__projectsOverviewMain(projectsList));
  };

  const __projectsOverviewMain = (projectsList) => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Projects";
    main.appendChild(title);

    const projects = document.createElement("div");
    projects.classList.add("projects");

    for(let i = 0; i < projectsList.length; i++) {
      projects.appendChild(__createProjectCard(projectsList[i], i));
    }
    main.appendChild(projects);

    const addNewProjectBtn = document.createElement("div");
    addNewProjectBtn.classList.add("add", "new-project");
    addNewProjectBtn.textContent = "+";
    main.appendChild(addNewProjectBtn);

    return main;
  };

  const __createProjectCard = (project, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "project");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = project.getTitle();
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = project.getDescription();

    card.appendChild(title);
    card.appendChild(description);

    card.addEventListener("click", () => projectFocus(project, index));

    return card;
  };

  const addNewProject = (project, index) => {
    const projects = document.querySelector(".projects")
    const newProject = __createProjectCard(project, index);
    projects.appendChild(newProject);
  };

  const editProject = (project, card) => {
    const projectInfo = document.querySelector(".project-info");

    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.name = "edit-title";
    editTitle.id = "edit-title";
    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.name = "edit-description";
    editDescription.id = "edit-description";
    const confirmBtn = document.createElement("div");
    confirmBtn.classList.add("editor");
    confirmBtn.id = "project-save";

    const title = document.querySelector("h2.title");
    editTitle.value = title.textContent;
    const description = document.querySelector(".project.description");
    editDescription.value = description.textContent;
    const editBtn = document.querySelector("#project-edit");

    card.removeChild(title);
    projectInfo.removeChild(description);
    card.removeChild(editBtn);
    card.appendChild(editTitle);
    projectInfo.appendChild(editDescription);
    card.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () =>{
      project.setTitle(editTitle.value);
      project.setDescription(editDescription.value);

      title.textContent = project.getTitle();
      description.textContent = project.getDescription();

      card.removeChild(editTitle);
      projectInfo.removeChild(editDescription);
      card.removeChild(confirmBtn);
      card.appendChild(title);
      projectInfo.appendChild(description);
      card.appendChild(editBtn);
    });
    
  };

  const projectFocus = (project, index) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__projectFocusMain(project, index));
  };

  const __projectFocusMain = (project, index) => {
    const main = document.createElement("div");
    main.id = "main";
    main.classList.add(index);

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = project.getTitle();
    main.appendChild(title);

    const goBack = document.createElement("div");
    goBack.classList.add("return", "return-projects");
    goBack.textContent = "<- Go Back";
    main.appendChild(goBack);

    const editBtn = document.createElement("div");
    editBtn.classList.add("editor");
    editBtn.id = "project-edit";
    main.appendChild(editBtn);

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("editor");
    deleteBtn.id = "project-delete";
    main.appendChild(deleteBtn);

    const projectInfo = document.createElement("div")
    projectInfo.classList.add("project-info");
    const description = document.createElement("p");
    description.classList.add("project", "description");
    description.textContent = project.getDescription();
    projectInfo.appendChild(description);


    for(let i = 0; i < project.getTodoList().length; i++) {
      projectInfo.appendChild(__createTodoCard(project.getTodoList()[i], i));
    }

    const addNewTodoBtn = document.createElement("div");
    addNewTodoBtn.classList.add("add", "new-todo");
    addNewTodoBtn.textContent = "+";
    main.appendChild(addNewTodoBtn);

    main.appendChild(projectInfo);

    return main;
  };

  const __createTodoCard = (todo, index) => {
    const card = document.createElement("div");
    card.classList.add(index, "card", "todo");

    const title = document.createElement("h3");
    title.classList.add(index, "title");
    title.textContent = todo.getTitle();
    const type = document.createElement("div");
    type.classList.add(index, "type");
    type.textContent = todo.getType();
    const priority = document.createElement("p");
    priority.classList.add(index, "priority");
    priority.textContent = todo.getPriority();
    const dueDate = document.createElement("p");
    dueDate.classList.add(index, "due-date");
    dueDate.textContent = todo.getDueDate();
    const status = document.createElement("div");
    status.classList.add(index, "status", todo.getStatus());

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(priority);
    card.appendChild(dueDate);
    card.appendChild(status);

    title.addEventListener("click", () => __expandTodo(todo, card), {once: true});

    return card;
  };

  const addNewTodo = (todo, index) => {
    const todos = document.querySelector(".project-info")
    const newTodo = __createTodoCard(todo, index);
    todos.appendChild(newTodo);
  };

  const __expandTodo = (todo, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement("p");
    description.classList.add(card.classList[0], "description");
    description.textContent = todo.getDescription();

    const checklist = document.createElement("ul");
    checklist.classList.add(card.classList[0], "checklist");

    const list = todo.getList();
    for(let i = 0; i < list.length; i++) {
      checklist.appendChild(__createListItem(list[i]));
    }

    card.appendChild(description);
    card.appendChild(checklist);

    title.addEventListener("click", () => __undoExpandTodo(todo, card), {once: true});

    const buttons = document.createElement("div");
    buttons.classList.add(card.classList[0], "buttons");
    const editBtn = document.createElement("div");
    editBtn.classList.add(card.classList[0], "editor", "todo-edit");
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add(card.classList[0], "editor", "todo-delete");
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
  };

  const __createListItem = (item) => {
    const card = document.createElement("div");
    card.classList.add("list-item");
    const name = document.createElement("p");
    name.classList.add("list-name");
    name.textContent = item.name;
    const status = document.createElement("div");
    status.classList.add("list-status", item.completed);

    card.appendChild(name);
    card.appendChild(status);
    return card;
  };

  const __undoExpandTodo = (todo, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);
    const checklist = document.querySelector(`[class = '${card.classList[0]} checklist']`)
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(checklist);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener("click", () => __expandTodo(todo, card), {once: true});
  };

  const editTodo = (todo, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`)

    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.name = "edit-title";
    editTitle.id = "edit-title";

    const editType = document.createElement("select");
    editType.name = "edit-type";
    editType.id = "edit-type";
    const optionExercise = document.createElement("option");
    optionExercise.textContent = "Exercise";
    editType.appendChild(optionExercise);
    const optionSelfImprovement = document.createElement("option");
    optionSelfImprovement.textContent = "Self-Improvement";
    editType.appendChild(optionSelfImprovement);
    const optionLearning = document.createElement("option");
    optionLearning.textContent = "Learning";
    editType.appendChild(optionLearning);
    const optionPersonal = document.createElement("option");
    optionPersonal.textContent = "Personal";
    editType.appendChild(optionPersonal);
    const optionWork = document.createElement("option");
    optionWork.textContent = "Work";
    editType.appendChild(optionWork);
    const optionSchool = document.createElement("option");
    optionSchool.textContent = "School";
    editType.appendChild(optionSchool);
    const optionCleaning = document.createElement("option");
    optionCleaning.textContent = "Cleaning";
    editType.appendChild(optionCleaning);
    const optionOther = document.createElement("option");
    optionOther.textContent = "Other";
    editType.appendChild(optionOther);

    const editPriority = document.createElement("select");
    editPriority.name = "edit-priority";
    editPriority.id = "edit-priority";
    const priority1 = document.createElement("option");
    priority1.textContent = "1";
    const priority2 = document.createElement("option");
    priority2.textContent = "2";
    const priority3 = document.createElement("option");
    priority3.textContent = "3";
    const priority4 = document.createElement("option");
    priority4.textContent = "4";
    const priority5 = document.createElement("option");
    priority5.textContent = "5";
    editPriority.appendChild(priority1);
    editPriority.appendChild(priority2);
    editPriority.appendChild(priority3);
    editPriority.appendChild(priority4);
    editPriority.appendChild(priority5);
    const editDueDate = document.createElement("input");
    editDueDate.type = "datetime-local";
    editDueDate.name = "edit-due-date";
    editDueDate.id = "edit-due-date";
    editDueDate.min = "2022-05-01";
    const editDescription = document.createElement("textarea");
    const confirmBtn = document.createElement("div");
    confirmBtn.classList.add("editor");
    confirmBtn.id = "todo-save";

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);
    editTitle.value = title.textContent;
    const type = document.querySelector(`[class = '${card.classList[0]} type']`);
    editType.value = type.textContent;
    const priority = document.querySelector(`[class = '${card.classList[0]} priority']`);
    editPriority.value = priority.textContent;
    const dueDate = document.querySelector(`[class = '${card.classList[0]} due-date']`);
    editDueDate.value = dueDate.textContent;
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    editDescription.value = description.textContent;
    const editBtn = document.querySelector(`[class = '${card.classList[0]} editor todo-edit`);

    card.removeChild(title);
    card.removeChild(type);
    card.removeChild(priority);
    card.removeChild(dueDate);
    card.removeChild(description);
    buttons.removeChild(editBtn);
    card.appendChild(editTitle);
    card.appendChild(editType);
    card.appendChild(editPriority);
    card.appendChild(editDueDate);
    card.appendChild(editDescription);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () =>{
      todo.setTitle(editTitle.value);
      todo.setType(editType.value);
      todo.setPriority(editPriority.value);
      todo.setDueDate(editDueDate.value);
      todo.setDescription(editDescription.value);

      title.textContent = todo.getTitle();
      type.textContent = todo.getType();
      priority.textContent = todo.getPriority();
      dueDate.textContent = todo.getDueDate();
      description.textContent = todo.getDescription();

      card.removeChild(editTitle);
      card.removeChild(editType);
      card.removeChild(editPriority);
      card.removeChild(editDueDate);
      card.removeChild(editDescription);
      buttons.removeChild(confirmBtn);
      card.appendChild(title);
      card.appendChild(type);
      card.appendChild(priority);
      card.appendChild(dueDate);
      card.appendChild(description);
      buttons.appendChild(editBtn);
    });
  };

  const removeTodo = (index) => {
    const projectInfo = document.querySelector(".project-info");
    const badChild = document.querySelector(`[class = '${index} card todo']`);
    projectInfo.removeChild(badChild);
    const childrenLength = projectInfo.childNodes.length;
    for(let i = parseInt(index) + 1; i < childrenLength; i++) {
      const currentChild = document.querySelector(`[class = '${i} card todo']`);
      currentChild.classList.replace(currentChild.classList[0], currentChild.classList[0] - 1);
      for(let j = 0; j < currentChild.childNodes.length; j++) {
        currentChild.childNodes[j].classList.replace(currentChild.childNodes[j].classList[0], currentChild.childNodes[j].classList[0] - 1);
      }
      if(currentChild.childNodes.length > 5) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(currentButtons.childNodes[0].classList[0], currentButtons.childNodes[0].classList[0] - 1);
        currentButtons.childNodes[1].classList.replace(currentButtons.childNodes[1].classList[0], currentButtons.childNodes[1].classList[0] - 1);
      }
    }
  };

  const notesOverview = (notesList) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__notesOverviewMain(notesList));
  };

  const __notesOverviewMain = (notesList) => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Notes";
    main.appendChild(title);

    const notes = document.createElement("div");
    notes.classList.add("notes");

    for(let i = 0; i < notesList.length; i++) {
      notes.appendChild(__createNoteCard(notesList[i], i));
    }
    main.appendChild(notes);

    const addNewNoteBtn = document.createElement("div");
    addNewNoteBtn.classList.add("add", "new-note");
    addNewNoteBtn.textContent = "+";
    main.appendChild(addNewNoteBtn);

    return main;
  };

  const __createNoteCard = (note, index) => {
    const card = document.createElement("div");
    card.classList.add(index, "card", "note");

    const title = document.createElement("h3");
    title.classList.add(index, "title");
    title.textContent = note.getTitle();

    title.addEventListener("click", () => __expandNote(note, card), {once: true});

    card.appendChild(title);

    return card;
  };

  const addNewNote = (note, index) => {
    const notes = document.querySelector(".notes")
    const newNote = __createNoteCard(note, index);
    notes.appendChild(newNote);
  };

  const __expandNote = (note, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement("p");
    description.classList.add(card.classList[0], "description");
    description.textContent = note.getDescription();

    card.appendChild(description);

    title.addEventListener("click", () => __undoExpandNote(note, card), {once: true});

    const buttons = document.createElement("div");
    buttons.classList.add(card.classList[0], "buttons");
    const editBtn = document.createElement("div");
    editBtn.classList.add(card.classList[0], "editor", "note-edit");
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add(card.classList[0], "editor", "note-delete");
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
  };

  const __undoExpandNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener("click", () => __expandNote(note, card), {once: true});
  };

  const editNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`)

    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.name = "edit-title";
    editTitle.id = "edit-title";
    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.name = "edit-description";
    editDescription.id = "edit-description";
    const confirmBtn = document.createElement("div");
    confirmBtn.classList.add("editor");
    confirmBtn.id = "note-save";

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);
    editTitle.value = title.textContent;
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    editDescription.value = description.textContent;
    const editBtn = document.querySelector(`[class = '${card.classList[0]} editor note-edit`);

    card.removeChild(title);
    card.removeChild(description);
    buttons.removeChild(editBtn);
    card.appendChild(editTitle);
    card.appendChild(editDescription);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () =>{
      note.setTitle(editTitle.value);
      note.setDescription(editDescription.value);

      title.textContent = note.getTitle();
      description.textContent = note.getDescription();

      card.removeChild(editTitle);
      card.removeChild(editDescription);
      buttons.removeChild(confirmBtn);
      card.appendChild(title);
      card.appendChild(description);
      buttons.appendChild(editBtn);
    });
  };

  const removeNote = (index) => {
    const notes = document.querySelector(".notes");
    const badChild = document.querySelector(`[class = '${index} card note']`);
    notes.removeChild(badChild);
    const childrenLength = notes.childNodes.length;
    for(let i = parseInt(index) + 1; i < childrenLength + 1; i++) {
      const currentChild = document.querySelector(`[class = '${i} card note']`);
      currentChild.classList.replace(currentChild.classList[0], currentChild.classList[0] - 1);
      for(let j = 0; j < currentChild.childNodes.length; j++) {
        currentChild.childNodes[j].classList.replace(currentChild.childNodes[j].classList[0], currentChild.childNodes[j].classList[0] - 1);
      }
      if(currentChild.childNodes.length > 1) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(currentButtons.childNodes[0].classList[0], currentButtons.childNodes[0].classList[0] - 1);
        currentButtons.childNodes[1].classList.replace(currentButtons.childNodes[1].classList[0], currentButtons.childNodes[1].classList[0] - 1);
      }
    }
  };

  const settingsOverview = () => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__settingsOverviewMain());
  };

  const __settingsOverviewMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Settings";
    main.appendChild(title);

    return main;
  }

  const __deleteMain = () => {
    const content = document.querySelector("#content");
    const main = document.querySelector("#main");
    content.removeChild(main);
  };

  return {initialSetup, projectsOverview, projectFocus, notesOverview, settingsOverview,
    addNewProject, addNewNote, addNewTodo, editProject, editTodo, removeTodo, editNote, removeNote};
})();



/***/ }),

/***/ "./src/todo-create.js":
/*!****************************!*\
  !*** ./src/todo-create.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "note": () => (/* binding */ note),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
const todo = (title, description, dueDate, priority, type) => {
  let status = false;
  let list = [];

  const getTitle = () => {
    return title;
  };
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => {
    return description;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getDueDate = () => {
    return dueDate;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const getPriority = () => {
    return priority;
  };
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const getType = () => {
    return type;
  };
  const setType = (newType) => {
    type = newType;
  };

  const changeStatus = () => {
    status = !status;
  };
  const getStatus = () => {
    return status;
  };

  const getList = () => {
    return list;
  };
  const addItem = (title) => {
    list.push({name: title, completed: false});
  };
  const removeItem = (item) => {
    list.splice(list.indexOf(item), 1);
  };
  const checkItem = (item) => {
    item.completed = !(item.completed);
  };

  return {getTitle, setTitle, getDescription, setDescription, getDueDate, 
    setDueDate, getPriority, setPriority, getType, setType, changeStatus,
    getStatus, getList, addItem, removeItem, checkItem};
};

const project = (title, description) => {
  let todoList = [];

  const getTitle = () => {
    return title;
  };
  const setTitle = (newTitle) => {
    title = newTitle;
  }
  const getDescription = () => {
    return description;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getTodoList = () => {
    return todoList;
  };

  const addTodo = (newTodo) => {
    todoList.push(newTodo);
  };
  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  return {getTitle, setTitle, getDescription, setDescription, getTodoList, 
    addTodo, removeTodo};
}

const note = (title, description) => {
  const getTitle = () => {
    return title;
  };
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => {
    return description;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  return {getTitle, setTitle, getDescription, setDescription};
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-create.js */ "./src/todo-create.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");




let projectList = [];
let noteList = [];

let defaultProject = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.project)("Default", "Default project");
let firstTodo = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.todo)("First todo", "This todo will help set up the layout of the site", "saturday", 5, "Exercise");
firstTodo.addItem("Write a checklist");
firstTodo.addItem("Add items to checklist");
firstTodo.addItem("Put the todo in the project");
firstTodo.addItem("Get the layout working");
defaultProject.addTodo(firstTodo);
let secondTodo = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.todo)("Second todo", "This todo will also help set up the layout of the site", "12-23-45", 5, "Exercise");
secondTodo.addItem("Write a checklist");
secondTodo.addItem("Also help");
defaultProject.addTodo(secondTodo);
projectList.push(defaultProject);

let default2 = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.project)("Test", "This is a test");
let default3 = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.project)("Layout Helper", "These are added to assit with layout creation");
let default4 = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.project)("Get on the mostest correct track", "Yet another helper");
projectList.push(default2);
projectList.push(default3);
projectList.push(default4);

let note1 = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.note)("Note tester", "Day 90687, I've somehow kept track of the day despite this being my first note. That is all, I'm just impressed.");
noteList.push(note1);
let note2 = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.note)("Yet Another Note tester", "Day 7, I've somehow kept track of the day despite this being my second note. That is all, I'm just impressed.");
noteList.push(note2);

_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.initialSetup(projectList);

const projectsLink = document.querySelector("#projects");
projectsLink.addEventListener("click", () => _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.projectsOverview(projectList));

const notesLink = document.querySelector("#notes");
notesLink.addEventListener("click", () => _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.notesOverview(noteList));

const settingsLink = document.querySelector("#settings");
settingsLink.addEventListener("click", () => _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.settingsOverview());

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.return-projects")) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.projectsOverview(projectList);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.new-project")) {
    const newProject = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.project)("New Project", "Description");
    projectList.push(newProject);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.addNewProject(newProject, projectList.length - 1);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.new-note")) {
    const newNote = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.project)("New Note", "Description");
    noteList.push(newNote);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.addNewNote(newNote, noteList.length - 1);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.new-todo")) {
    const newTodo = (0,_todo_create_js__WEBPACK_IMPORTED_MODULE_1__.todo)("New Todo", "Description", "", 5, "Self-Improvement");
    const currentProject = projectList[document.querySelector("#main").classList[0]];
    currentProject.addTodo(newTodo);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.addNewTodo(newTodo, currentProject.getTodoList().length - 1);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div#project-edit")) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.editProject(projectList[document.querySelector("#main").classList[0]], document.querySelector("#main"));
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div#project-delete")) {
    projectList.splice(document.querySelector("#main").classList[0], 1);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.projectsOverview(projectList);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.todo-edit")) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.editTodo(projectList[document.querySelector("#main").classList[0]].getTodoList()[e.target.classList[0]], document.querySelector(`[class = '${e.target.classList[0]} card todo']`));
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.todo-delete")) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.removeTodo(e.target.classList[0]);
    projectList[document.querySelector("#main").classList[0]].removeTodo(e.target.classList[0]);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.note-edit")) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.editNote(noteList[e.target.classList[0]], document.querySelector(`[class = '${e.target.classList[0]} card note']`));
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.note-delete")) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.removeNote(e.target.classList[0]);
    noteList.splice(document.querySelector("#main").classList[0], 1);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3RCLGVBQWUsd0RBQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBLFlBQVkscURBQUk7QUFDaEI7QUFDQSxZQUFZLHFEQUFJO0FBQ2hCOztBQUVBLCtFQUE4Qjs7QUFFOUI7QUFDQSw2Q0FBNkMsbUZBQWtDOztBQUUvRTtBQUNBLDBDQUEwQyxnRkFBK0I7O0FBRXpFO0FBQ0EsNkNBQTZDLG1GQUFrQzs7QUFFL0U7QUFDQTtBQUNBLElBQUksbUZBQWtDO0FBQ3RDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsdUJBQXVCLHdEQUFPO0FBQzlCO0FBQ0EsSUFBSSxnRkFBK0I7QUFDbkM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQU87QUFDM0I7QUFDQSxJQUFJLDZFQUE0QjtBQUNoQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG9CQUFvQixxREFBSTtBQUN4QjtBQUNBO0FBQ0EsSUFBSSw2RUFBNEI7QUFDaEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDhFQUE2QjtBQUNqQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRkFBa0M7QUFDdEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDJFQUEwQixxSUFBcUksdUJBQXVCO0FBQzFMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSw2RUFBNEI7QUFDaEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksMkVBQTBCLHNFQUFzRSx1QkFBdUI7QUFDM0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDZFQUE0QjtBQUNoQztBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8tY3JlYXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogN3B4IDBweCAwcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGluayArIC5saW5rIHtcXG4gIG1hcmdpbi10b3A6IDEuM3JlbTtcXG59XFxuXFxuI21haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuMjRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50aXRsZSxcXG4jZWRpdC10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucmV0dXJuIHtcXG4gIGdyaWQtY29sdW1uOiAtMjtcXG4gIGdyaWQtcm93OiAxO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDE4cmVtKTtcXG4gIGdyaWQtYXV0by1yb3dzOiA5cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZCxcXG4uZWRpdG9yIHtcXG4gIC8qIENoYW5nZSB0aGVzZSB0byBmb250IGljb25zIGxhdGVyICovXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWVkaXQsXFxuI3Byb2plY3Qtc2F2ZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDRyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZGVsZXRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogN3JlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1lZGl0OjpiZWZvcmUsXFxuLnRvZG8tZWRpdDo6YmVmb3JlLFxcbi5ub3RlLWVkaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiZVxcXCI7XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZTo6YmVmb3JlLFxcbi50b2RvLWRlbGV0ZTo6YmVmb3JlLFxcbi5ub3RlLWRlbGV0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinYxcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGUtY29uZmlybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyxcXG4ubm90ZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMjtcXG4gIGdyaWQtcm93OiAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCBhdXRvKSAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyAuZGVzY3JpcHRpb24sXFxuLnByb2plY3QtaW5mbyAjZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjVmciAxZnIgMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLnR5cGUsXFxuI2VkaXQtdHlwZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHksXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnByaW9yaXR5OjpiZWZvcmUsXFxuI3ByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlByaW9yaXR5OiBcXFwiO1xcbn1cXG5cXG4uZHVlLWRhdGUsXFxuI2R1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5kdWUtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEdWU6IFxcXCI7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxuICBncmlkLXJvdzogMTtcXG5cXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zdGF0dXMudHJ1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8gLmRlc2NyaXB0aW9uLFxcbi50b2RvICNlZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4udG9kbyAuY2hlY2tsaXN0IHtcXG4gIGdyaWQtY29sdW1uOiA0IC8gNjtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4udG9kbyAuYnV0dG9ucyxcXG4ubm90ZSAuYnV0dG9ucyB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAzO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDJyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5vdGUtZWRpdCxcXG4jbm90ZS1zYXZlLFxcbi50b2RvLWVkaXQsXFxuI3RvZG8tc2F2ZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubm90ZS1kZWxldGUsXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uYnV0dG9ucyAuZWRpdG9yIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5ub3RlcyB7XFxuICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLm5vdGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLm5vdGUgLmRlc2NyaXB0aW9uLFxcbi5ub3RlIC5lZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtcm93OiAyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQ0FBMkM7O0VBRTNDLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7O0VBRWpCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0Msb0JBQW9COztFQUVwQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZDQUE2QztFQUM3Qyx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXOztFQUVYLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBOzs7O0VBSUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDdweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gIGdhcDogM3JlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpbmsgKyAubGluayB7XFxuICBtYXJnaW4tdG9wOiAxLjNyZW07XFxufVxcblxcbiNtYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjI0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUsXFxuI2VkaXQtdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBncmlkLWNvbHVtbjogLTI7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxOHJlbSk7XFxuICBncmlkLWF1dG8tcm93czogOXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQsXFxuLmVkaXRvciB7XFxuICAvKiBDaGFuZ2UgdGhlc2UgdG8gZm9udCBpY29ucyBsYXRlciAqL1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1lZGl0LFxcbiNwcm9qZWN0LXNhdmUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA0cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDdyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZWRpdDo6YmVmb3JlLFxcbi50b2RvLWVkaXQ6OmJlZm9yZSxcXG4ubm90ZS1lZGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcImVcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGU6OmJlZm9yZSxcXG4udG9kby1kZWxldGU6OmJlZm9yZSxcXG4ubm90ZS1kZWxldGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4p2MXFxcIjtcXG59XFxuXFxuI3Byb2plY3QtZGVsZXRlLWNvbmZpcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWluZm8sXFxuLm5vdGVzIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTI7XFxuICBncmlkLXJvdzogMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgYXV0bykgMWZyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWluZm8gLmRlc2NyaXB0aW9uLFxcbi5wcm9qZWN0LWluZm8gI2VkaXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC41ZnIgMWZyIDJyZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW07XFxuICBnYXA6IDAuMjVyZW07XFxufVxcblxcbi50eXBlLFxcbiNlZGl0LXR5cGUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnByaW9yaXR5LFxcbiNlZGl0LXByaW9yaXR5IHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5wcmlvcml0eTo6YmVmb3JlLFxcbiNwcmlvcml0eTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJQcmlvcml0eTogXFxcIjtcXG59XFxuXFxuLmR1ZS1kYXRlLFxcbiNkdWUtZGF0ZSB7XFxuICBncmlkLWNvbHVtbjogNDtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4uZHVlLWRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiRHVlOiBcXFwiO1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIGdyaWQtY29sdW1uOiA1O1xcbiAgZ3JpZC1yb3c6IDE7XFxuXFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc3RhdHVzLnRydWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvIC5kZXNjcmlwdGlvbixcXG4udG9kbyAjZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMjtcXG59XFxuXFxuLnRvZG8gLmNoZWNrbGlzdCB7XFxuICBncmlkLWNvbHVtbjogNCAvIDY7XFxuICBncmlkLXJvdzogMjtcXG59XFxuXFxuLnRvZG8gLmJ1dHRvbnMsXFxuLm5vdGUgLmJ1dHRvbnMge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMztcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAycmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5ub3RlLWVkaXQsXFxuI25vdGUtc2F2ZSxcXG4udG9kby1lZGl0LFxcbiN0b2RvLXNhdmUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLm5vdGUtZGVsZXRlLFxcbi50b2RvLWRlbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLmJ1dHRvbnMgLmVkaXRvciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ubm90ZXMge1xcbiAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XFxufVxcblxcbi5ub3RlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW07XFxuICBnYXA6IDAuMjVyZW07XFxufVxcblxcbi5ub3RlIC5kZXNjcmlwdGlvbixcXG4ubm90ZSAuZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTZXR1cCA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19zaWRlYmFyQ3JlYXRlKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19wcm9qZWN0c092ZXJ2aWV3TWFpbihwcm9qZWN0TGlzdCkpO1xuICB9O1xuICBjb25zdCBfX3NpZGViYXJDcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcInRpdGxlIHRrXCJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlua3MuaWQgPSBcImxpbmtzXCI7XG4gICAgY29uc3QgcHJvamVjdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0xpbmsudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHNMaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICAgIHByb2plY3RzTGluay5pZCA9IFwicHJvamVjdHNcIjtcbiAgICBjb25zdCBub3Rlc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzTGluay50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcbiAgICBub3Rlc0xpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gICAgbm90ZXNMaW5rLmlkID0gXCJub3Rlc1wiO1xuICAgIGNvbnN0IHNldHRpbmdzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2V0dGluZ3NMaW5rLnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuICAgIHNldHRpbmdzTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICBzZXR0aW5nc0xpbmsuaWQgPSBcInNldHRpbmdzXCI7XG4gICAgXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQocHJvamVjdHNMaW5rKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChub3Rlc0xpbmspO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKHNldHRpbmdzTGluayk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaW5rcyk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHNPdmVydmlldyA9IChwcm9qZWN0c0xpc3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIF9fZGVsZXRlTWFpbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19wcm9qZWN0c092ZXJ2aWV3TWFpbihwcm9qZWN0c0xpc3QpKTtcbiAgfTtcblxuICBjb25zdCBfX3Byb2plY3RzT3ZlcnZpZXdNYWluID0gKHByb2plY3RzTGlzdCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChfX2NyZWF0ZVByb2plY3RDYXJkKHByb2plY3RzTGlzdFtpXSwgaSkpO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcIm5ldy1wcm9qZWN0XCIpO1xuICAgIGFkZE5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3RCdG4pO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH07XG5cbiAgY29uc3QgX19jcmVhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJwcm9qZWN0XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcm9qZWN0Rm9jdXMocHJvamVjdCwgaW5kZXgpKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIilcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gX19jcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0LCBpbmRleCk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAocHJvamVjdCwgY2FyZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9cIik7XG5cbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBlZGl0VGl0bGUubmFtZSA9IFwiZWRpdC10aXRsZVwiO1xuICAgIGVkaXRUaXRsZS5pZCA9IFwiZWRpdC10aXRsZVwiO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIGVkaXREZXNjcmlwdGlvbi5uYW1lID0gXCJlZGl0LWRlc2NyaXB0aW9uXCI7XG4gICAgZWRpdERlc2NyaXB0aW9uLmlkID0gXCJlZGl0LWRlc2NyaXB0aW9uXCI7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdG9yXCIpO1xuICAgIGNvbmZpcm1CdG4uaWQgPSBcInByb2plY3Qtc2F2ZVwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDIudGl0bGVcIik7XG4gICAgZWRpdFRpdGxlLnZhbHVlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuZGVzY3JpcHRpb25cIik7XG4gICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1lZGl0XCIpO1xuXG4gICAgY2FyZC5yZW1vdmVDaGlsZCh0aXRsZSk7XG4gICAgcHJvamVjdEluZm8ucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdEJ0bik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgcHJvamVjdC5zZXRUaXRsZShlZGl0VGl0bGUudmFsdWUpO1xuICAgICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRUaXRsZSk7XG4gICAgICBwcm9qZWN0SW5mby5yZW1vdmVDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICB9KTtcbiAgICBcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Rm9jdXMgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIF9fZGVsZXRlTWFpbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19wcm9qZWN0Rm9jdXNNYWluKHByb2plY3QsIGluZGV4KSk7XG4gIH07XG5cbiAgY29uc3QgX19wcm9qZWN0Rm9jdXNNYWluID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChpbmRleCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBnb0JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdvQmFjay5jbGFzc0xpc3QuYWRkKFwicmV0dXJuXCIsIFwicmV0dXJuLXByb2plY3RzXCIpO1xuICAgIGdvQmFjay50ZXh0Q29udGVudCA9IFwiPC0gR28gQmFja1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ29CYWNrKTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBlZGl0QnRuLmlkID0gXCJwcm9qZWN0LWVkaXRcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBkZWxldGVCdG4uaWQgPSBcInByb2plY3QtZGVsZXRlXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5mb1wiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChfX2NyZWF0ZVRvZG9DYXJkKHByb2plY3QuZ2V0VG9kb0xpc3QoKVtpXSwgaSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1RvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE5ld1RvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcIm5ldy10b2RvXCIpO1xuICAgIGFkZE5ld1RvZG9CdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE5ld1RvZG9CdG4pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCBfX2NyZWF0ZVRvZG9DYXJkID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGluZGV4LCBcImNhcmRcIiwgXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChpbmRleCwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0eXBlLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwidHlwZVwiKTtcbiAgICB0eXBlLnRleHRDb250ZW50ID0gdG9kby5nZXRUeXBlKCk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKGluZGV4LCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwiZHVlLWRhdGVcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwic3RhdHVzXCIsIHRvZG8uZ2V0U3RhdHVzKCkpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0eXBlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2V4cGFuZFRvZG8odG9kbywgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfTtcblxuICBjb25zdCBhZGROZXdUb2RvID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5mb1wiKVxuICAgIGNvbnN0IG5ld1RvZG8gPSBfX2NyZWF0ZVRvZG9DYXJkKHRvZG8sIGluZGV4KTtcbiAgICB0b2Rvcy5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfTtcblxuICBjb25zdCBfX2V4cGFuZFRvZG8gPSAodG9kbywgY2FyZCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjaGVja2xpc3QuY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJjaGVja2xpc3RcIik7XG5cbiAgICBjb25zdCBsaXN0ID0gdG9kby5nZXRMaXN0KCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChfX2NyZWF0ZUxpc3RJdGVtKGxpc3RbaV0pKTtcbiAgICB9XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrbGlzdCk7XG5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gX191bmRvRXhwYW5kVG9kbyh0b2RvLCBjYXJkKSwge29uY2U6IHRydWV9KTtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJidXR0b25zXCIpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJlZGl0b3JcIiwgXCJ0b2RvLWVkaXRcIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJlZGl0b3JcIiwgXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICB9O1xuXG4gIGNvbnN0IF9fY3JlYXRlTGlzdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcImxpc3Qtc3RhdHVzXCIsIGl0ZW0uY29tcGxldGVkKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIGNvbnN0IF9fdW5kb0V4cGFuZFRvZG8gPSAodG9kbywgY2FyZCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gYnV0dG9ucyddYCk7XG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGNoZWNrbGlzdCddYClcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBkZXNjcmlwdGlvbiddYCk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChidXR0b25zKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGNoZWNrbGlzdCk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0aXRsZSddYCk7XG5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gX19leHBhbmRUb2RvKHRvZG8sIGNhcmQpLCB7b25jZTogdHJ1ZX0pO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKHRvZG8sIGNhcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGJ1dHRvbnMnXWApXG5cbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBlZGl0VGl0bGUubmFtZSA9IFwiZWRpdC10aXRsZVwiO1xuICAgIGVkaXRUaXRsZS5pZCA9IFwiZWRpdC10aXRsZVwiO1xuXG4gICAgY29uc3QgZWRpdFR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGVkaXRUeXBlLm5hbWUgPSBcImVkaXQtdHlwZVwiO1xuICAgIGVkaXRUeXBlLmlkID0gXCJlZGl0LXR5cGVcIjtcbiAgICBjb25zdCBvcHRpb25FeGVyY2lzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uRXhlcmNpc2UudGV4dENvbnRlbnQgPSBcIkV4ZXJjaXNlXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uRXhlcmNpc2UpO1xuICAgIGNvbnN0IG9wdGlvblNlbGZJbXByb3ZlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uU2VsZkltcHJvdmVtZW50LnRleHRDb250ZW50ID0gXCJTZWxmLUltcHJvdmVtZW50XCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uU2VsZkltcHJvdmVtZW50KTtcbiAgICBjb25zdCBvcHRpb25MZWFybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uTGVhcm5pbmcudGV4dENvbnRlbnQgPSBcIkxlYXJuaW5nXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uTGVhcm5pbmcpO1xuICAgIGNvbnN0IG9wdGlvblBlcnNvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25QZXJzb25hbC50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIjtcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25QZXJzb25hbCk7XG4gICAgY29uc3Qgb3B0aW9uV29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uV29yay50ZXh0Q29udGVudCA9IFwiV29ya1wiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbldvcmspO1xuICAgIGNvbnN0IG9wdGlvblNjaG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uU2Nob29sLnRleHRDb250ZW50ID0gXCJTY2hvb2xcIjtcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25TY2hvb2wpO1xuICAgIGNvbnN0IG9wdGlvbkNsZWFuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25DbGVhbmluZy50ZXh0Q29udGVudCA9IFwiQ2xlYW5pbmdcIjtcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25DbGVhbmluZyk7XG4gICAgY29uc3Qgb3B0aW9uT3RoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbk90aGVyLnRleHRDb250ZW50ID0gXCJPdGhlclwiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbk90aGVyKTtcblxuICAgIGNvbnN0IGVkaXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZWRpdFByaW9yaXR5Lm5hbWUgPSBcImVkaXQtcHJpb3JpdHlcIjtcbiAgICBlZGl0UHJpb3JpdHkuaWQgPSBcImVkaXQtcHJpb3JpdHlcIjtcbiAgICBjb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5MS50ZXh0Q29udGVudCA9IFwiMVwiO1xuICAgIGNvbnN0IHByaW9yaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkyLnRleHRDb250ZW50ID0gXCIyXCI7XG4gICAgY29uc3QgcHJpb3JpdHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eTMudGV4dENvbnRlbnQgPSBcIjNcIjtcbiAgICBjb25zdCBwcmlvcml0eTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5NC50ZXh0Q29udGVudCA9IFwiNFwiO1xuICAgIGNvbnN0IHByaW9yaXR5NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHk1LnRleHRDb250ZW50ID0gXCI1XCI7XG4gICAgZWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5MSk7XG4gICAgZWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Mik7XG4gICAgZWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Myk7XG4gICAgZWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5NCk7XG4gICAgZWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5NSk7XG4gICAgY29uc3QgZWRpdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdER1ZURhdGUudHlwZSA9IFwiZGF0ZXRpbWUtbG9jYWxcIjtcbiAgICBlZGl0RHVlRGF0ZS5uYW1lID0gXCJlZGl0LWR1ZS1kYXRlXCI7XG4gICAgZWRpdER1ZURhdGUuaWQgPSBcImVkaXQtZHVlLWRhdGVcIjtcbiAgICBlZGl0RHVlRGF0ZS5taW4gPSBcIjIwMjItMDUtMDFcIjtcbiAgICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdG9yXCIpO1xuICAgIGNvbmZpcm1CdG4uaWQgPSBcInRvZG8tc2F2ZVwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdGl0bGUnXWApO1xuICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdHlwZSddYCk7XG4gICAgZWRpdFR5cGUudmFsdWUgPSB0eXBlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHByaW9yaXR5J11gKTtcbiAgICBlZGl0UHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGR1ZS1kYXRlJ11gKTtcbiAgICBlZGl0RHVlRGF0ZS52YWx1ZSA9IGR1ZURhdGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZGVzY3JpcHRpb24nXWApO1xuICAgIGVkaXREZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZWRpdG9yIHRvZG8tZWRpdGApO1xuXG4gICAgY2FyZC5yZW1vdmVDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZCh0eXBlKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKHByaW9yaXR5KTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGR1ZURhdGUpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGJ1dHRvbnMucmVtb3ZlQ2hpbGQoZWRpdEJ0bik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFR5cGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFByaW9yaXR5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXREdWVEYXRlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgdG9kby5zZXRUaXRsZShlZGl0VGl0bGUudmFsdWUpO1xuICAgICAgdG9kby5zZXRUeXBlKGVkaXRUeXBlLnZhbHVlKTtcbiAgICAgIHRvZG8uc2V0UHJpb3JpdHkoZWRpdFByaW9yaXR5LnZhbHVlKTtcbiAgICAgIHRvZG8uc2V0RHVlRGF0ZShlZGl0RHVlRGF0ZS52YWx1ZSk7XG4gICAgICB0b2RvLnNldERlc2NyaXB0aW9uKGVkaXREZXNjcmlwdGlvbi52YWx1ZSk7XG5cbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgdHlwZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VHlwZSgpO1xuICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKCk7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VGl0bGUpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VHlwZSk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRQcmlvcml0eSk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXREdWVEYXRlKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdERlc2NyaXB0aW9uKTtcbiAgICAgIGJ1dHRvbnMucmVtb3ZlQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodHlwZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9cIik7XG4gICAgY29uc3QgYmFkQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtpbmRleH0gY2FyZCB0b2RvJ11gKTtcbiAgICBwcm9qZWN0SW5mby5yZW1vdmVDaGlsZChiYWRDaGlsZCk7XG4gICAgY29uc3QgY2hpbGRyZW5MZW5ndGggPSBwcm9qZWN0SW5mby5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSBwYXJzZUludChpbmRleCkgKyAxOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aX0gY2FyZCB0b2RvJ11gKTtcbiAgICAgIGN1cnJlbnRDaGlsZC5jbGFzc0xpc3QucmVwbGFjZShjdXJyZW50Q2hpbGQuY2xhc3NMaXN0WzBdLCBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VycmVudENoaWxkLmNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdLCBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlc1tqXS5jbGFzc0xpc3RbMF0gLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmKGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtpIC0gMX0gYnV0dG9ucyddYCk7XG4gICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudEJ1dHRvbnMuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3RbMF0sIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudEJ1dHRvbnMuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3RbMF0sIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5vdGVzT3ZlcnZpZXcgPSAobm90ZXNMaXN0KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBfX2RlbGV0ZU1haW4oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKF9fbm90ZXNPdmVydmlld01haW4obm90ZXNMaXN0KSk7XG4gIH07XG5cbiAgY29uc3QgX19ub3Rlc092ZXJ2aWV3TWFpbiA9IChub3Rlc0xpc3QpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmlkID0gXCJtYWluXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZXMuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5vdGVzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbm90ZXMuYXBwZW5kQ2hpbGQoX19jcmVhdGVOb3RlQ2FyZChub3Rlc0xpc3RbaV0sIGkpKTtcbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgICBjb25zdCBhZGROZXdOb3RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGROZXdOb3RlQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJuZXctbm90ZVwiKTtcbiAgICBhZGROZXdOb3RlQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGROZXdOb3RlQnRuKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIGNvbnN0IF9fY3JlYXRlTm90ZUNhcmQgPSAobm90ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwiY2FyZFwiLCBcIm5vdGVcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKGluZGV4LCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbm90ZS5nZXRUaXRsZSgpO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fZXhwYW5kTm90ZShub3RlLCBjYXJkKSwge29uY2U6IHRydWV9KTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3Tm90ZSA9IChub3RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKVxuICAgIGNvbnN0IG5ld05vdGUgPSBfX2NyZWF0ZU5vdGVDYXJkKG5vdGUsIGluZGV4KTtcbiAgICBub3Rlcy5hcHBlbmRDaGlsZChuZXdOb3RlKTtcbiAgfTtcblxuICBjb25zdCBfX2V4cGFuZE5vdGUgPSAobm90ZSwgY2FyZCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5vdGUuZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fdW5kb0V4cGFuZE5vdGUobm90ZSwgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiYnV0dG9uc1wiKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiZWRpdG9yXCIsIFwibm90ZS1lZGl0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiZWRpdG9yXCIsIFwibm90ZS1kZWxldGVcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgfTtcblxuICBjb25zdCBfX3VuZG9FeHBhbmROb3RlID0gKG5vdGUsIGNhcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGJ1dHRvbnMnXWApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGRlc2NyaXB0aW9uJ11gKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGJ1dHRvbnMpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdGl0bGUnXWApO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fZXhwYW5kTm90ZShub3RlLCBjYXJkKSwge29uY2U6IHRydWV9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0Tm90ZSA9IChub3RlLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBidXR0b25zJ11gKVxuXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZWRpdFRpdGxlLm5hbWUgPSBcImVkaXQtdGl0bGVcIjtcbiAgICBlZGl0VGl0bGUuaWQgPSBcImVkaXQtdGl0bGVcIjtcbiAgICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdERlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcbiAgICBlZGl0RGVzY3JpcHRpb24ubmFtZSA9IFwiZWRpdC1kZXNjcmlwdGlvblwiO1xuICAgIGVkaXREZXNjcmlwdGlvbi5pZCA9IFwiZWRpdC1kZXNjcmlwdGlvblwiO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBjb25maXJtQnRuLmlkID0gXCJub3RlLXNhdmVcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcbiAgICBlZGl0VGl0bGUudmFsdWUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBkZXNjcmlwdGlvbiddYCk7XG4gICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBlZGl0b3Igbm90ZS1lZGl0YCk7XG5cbiAgICBjYXJkLnJlbW92ZUNoaWxkKHRpdGxlKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBidXR0b25zLnJlbW92ZUNoaWxkKGVkaXRCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgbm90ZS5zZXRUaXRsZShlZGl0VGl0bGUudmFsdWUpO1xuICAgICAgbm90ZS5zZXREZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5vdGUuZ2V0VGl0bGUoKTtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbm90ZS5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRUaXRsZSk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLnJlbW92ZUNoaWxkKGNvbmZpcm1CdG4pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlTm90ZSA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKTtcbiAgICBjb25zdCBiYWRDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2luZGV4fSBjYXJkIG5vdGUnXWApO1xuICAgIG5vdGVzLnJlbW92ZUNoaWxkKGJhZENoaWxkKTtcbiAgICBjb25zdCBjaGlsZHJlbkxlbmd0aCA9IG5vdGVzLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IHBhcnNlSW50KGluZGV4KSArIDE7IGkgPCBjaGlsZHJlbkxlbmd0aCArIDE7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aX0gY2FyZCBub3RlJ11gKTtcbiAgICAgIGN1cnJlbnRDaGlsZC5jbGFzc0xpc3QucmVwbGFjZShjdXJyZW50Q2hpbGQuY2xhc3NMaXN0WzBdLCBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VycmVudENoaWxkLmNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdLCBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlc1tqXS5jbGFzc0xpc3RbMF0gLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmKGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtpIC0gMX0gYnV0dG9ucyddYCk7XG4gICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudEJ1dHRvbnMuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3RbMF0sIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudEJ1dHRvbnMuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3RbMF0sIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHRpbmdzT3ZlcnZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBfX2RlbGV0ZU1haW4oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKF9fc2V0dGluZ3NPdmVydmlld01haW4oKSk7XG4gIH07XG5cbiAgY29uc3QgX19zZXR0aW5nc092ZXJ2aWV3TWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmlkID0gXCJtYWluXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG4gIGNvbnN0IF9fZGVsZXRlTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluKTtcbiAgfTtcblxuICByZXR1cm4ge2luaXRpYWxTZXR1cCwgcHJvamVjdHNPdmVydmlldywgcHJvamVjdEZvY3VzLCBub3Rlc092ZXJ2aWV3LCBzZXR0aW5nc092ZXJ2aWV3LFxuICAgIGFkZE5ld1Byb2plY3QsIGFkZE5ld05vdGUsIGFkZE5ld1RvZG8sIGVkaXRQcm9qZWN0LCBlZGl0VG9kbywgcmVtb3ZlVG9kbywgZWRpdE5vdGUsIHJlbW92ZU5vdGV9O1xufSkoKTtcblxuZXhwb3J0IHtkaXNwbGF5Q29udHJvbGxlcn07IiwiY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0eXBlKSA9PiB7XG4gIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgbGV0IGxpc3QgPSBbXTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGR1ZURhdGU7XG4gIH07XG4gIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9O1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJpb3JpdHk7XG4gIH07XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfTtcbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcbiAgY29uc3Qgc2V0VHlwZSA9IChuZXdUeXBlKSA9PiB7XG4gICAgdHlwZSA9IG5ld1R5cGU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKCkgPT4ge1xuICAgIHN0YXR1cyA9ICFzdGF0dXM7XG4gIH07XG4gIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdHVzO1xuICB9O1xuXG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG4gIGNvbnN0IGFkZEl0ZW0gPSAodGl0bGUpID0+IHtcbiAgICBsaXN0LnB1c2goe25hbWU6IHRpdGxlLCBjb21wbGV0ZWQ6IGZhbHNlfSk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gIH07XG4gIGNvbnN0IGNoZWNrSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgaXRlbS5jb21wbGV0ZWQgPSAhKGl0ZW0uY29tcGxldGVkKTtcbiAgfTtcblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBcbiAgICBzZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIGdldFR5cGUsIHNldFR5cGUsIGNoYW5nZVN0YXR1cyxcbiAgICBnZXRTdGF0dXMsIGdldExpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIGNoZWNrSXRlbX07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICBsZXQgdG9kb0xpc3QgPSBbXTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0O1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAobmV3VG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7Z2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIGdldFRvZG9MaXN0LCBcbiAgICBhZGRUb2RvLCByZW1vdmVUb2RvfTtcbn1cblxuY29uc3Qgbm90ZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH07XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIHJldHVybiB7Z2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb259O1xufVxuXG5leHBvcnQge3RvZG8sIHByb2plY3QsIG5vdGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHt0b2RvLCBwcm9qZWN0LCBub3RlfSBmcm9tIFwiLi90b2RvLWNyZWF0ZS5qc1wiO1xuaW1wb3J0IHtkaXNwbGF5Q29udHJvbGxlcn0gZnJvbSBcIi4vZGlzcGxheS1jb250cm9sbGVyXCI7XG5cbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xubGV0IG5vdGVMaXN0ID0gW107XG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0XCIsIFwiRGVmYXVsdCBwcm9qZWN0XCIpO1xubGV0IGZpcnN0VG9kbyA9IHRvZG8oXCJGaXJzdCB0b2RvXCIsIFwiVGhpcyB0b2RvIHdpbGwgaGVscCBzZXQgdXAgdGhlIGxheW91dCBvZiB0aGUgc2l0ZVwiLCBcInNhdHVyZGF5XCIsIDUsIFwiRXhlcmNpc2VcIik7XG5maXJzdFRvZG8uYWRkSXRlbShcIldyaXRlIGEgY2hlY2tsaXN0XCIpO1xuZmlyc3RUb2RvLmFkZEl0ZW0oXCJBZGQgaXRlbXMgdG8gY2hlY2tsaXN0XCIpO1xuZmlyc3RUb2RvLmFkZEl0ZW0oXCJQdXQgdGhlIHRvZG8gaW4gdGhlIHByb2plY3RcIik7XG5maXJzdFRvZG8uYWRkSXRlbShcIkdldCB0aGUgbGF5b3V0IHdvcmtpbmdcIik7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvKGZpcnN0VG9kbyk7XG5sZXQgc2Vjb25kVG9kbyA9IHRvZG8oXCJTZWNvbmQgdG9kb1wiLCBcIlRoaXMgdG9kbyB3aWxsIGFsc28gaGVscCBzZXQgdXAgdGhlIGxheW91dCBvZiB0aGUgc2l0ZVwiLCBcIjEyLTIzLTQ1XCIsIDUsIFwiRXhlcmNpc2VcIik7XG5zZWNvbmRUb2RvLmFkZEl0ZW0oXCJXcml0ZSBhIGNoZWNrbGlzdFwiKTtcbnNlY29uZFRvZG8uYWRkSXRlbShcIkFsc28gaGVscFwiKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG8oc2Vjb25kVG9kbyk7XG5wcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcblxubGV0IGRlZmF1bHQyID0gcHJvamVjdChcIlRlc3RcIiwgXCJUaGlzIGlzIGEgdGVzdFwiKTtcbmxldCBkZWZhdWx0MyA9IHByb2plY3QoXCJMYXlvdXQgSGVscGVyXCIsIFwiVGhlc2UgYXJlIGFkZGVkIHRvIGFzc2l0IHdpdGggbGF5b3V0IGNyZWF0aW9uXCIpO1xubGV0IGRlZmF1bHQ0ID0gcHJvamVjdChcIkdldCBvbiB0aGUgbW9zdGVzdCBjb3JyZWN0IHRyYWNrXCIsIFwiWWV0IGFub3RoZXIgaGVscGVyXCIpO1xucHJvamVjdExpc3QucHVzaChkZWZhdWx0Mik7XG5wcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHQzKTtcbnByb2plY3RMaXN0LnB1c2goZGVmYXVsdDQpO1xuXG5sZXQgbm90ZTEgPSBub3RlKFwiTm90ZSB0ZXN0ZXJcIiwgXCJEYXkgOTA2ODcsIEkndmUgc29tZWhvdyBrZXB0IHRyYWNrIG9mIHRoZSBkYXkgZGVzcGl0ZSB0aGlzIGJlaW5nIG15IGZpcnN0IG5vdGUuIFRoYXQgaXMgYWxsLCBJJ20ganVzdCBpbXByZXNzZWQuXCIpO1xubm90ZUxpc3QucHVzaChub3RlMSk7XG5sZXQgbm90ZTIgPSBub3RlKFwiWWV0IEFub3RoZXIgTm90ZSB0ZXN0ZXJcIiwgXCJEYXkgNywgSSd2ZSBzb21laG93IGtlcHQgdHJhY2sgb2YgdGhlIGRheSBkZXNwaXRlIHRoaXMgYmVpbmcgbXkgc2Vjb25kIG5vdGUuIFRoYXQgaXMgYWxsLCBJJ20ganVzdCBpbXByZXNzZWQuXCIpO1xubm90ZUxpc3QucHVzaChub3RlMik7XG5cbmRpc3BsYXlDb250cm9sbGVyLmluaXRpYWxTZXR1cChwcm9qZWN0TGlzdCk7XG5cbmNvbnN0IHByb2plY3RzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5wcm9qZWN0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlDb250cm9sbGVyLnByb2plY3RzT3ZlcnZpZXcocHJvamVjdExpc3QpKTtcblxuY29uc3Qgbm90ZXNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3Rlc1wiKTtcbm5vdGVzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheUNvbnRyb2xsZXIubm90ZXNPdmVydmlldyhub3RlTGlzdCkpO1xuXG5jb25zdCBzZXR0aW5nc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHRpbmdzXCIpO1xuc2V0dGluZ3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5Q29udHJvbGxlci5zZXR0aW5nc092ZXJ2aWV3KCkpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5yZXR1cm4tcHJvamVjdHNcIikpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5wcm9qZWN0c092ZXJ2aWV3KHByb2plY3RMaXN0KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2Lm5ldy1wcm9qZWN0XCIpKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QoXCJOZXcgUHJvamVjdFwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0LCBwcm9qZWN0TGlzdC5sZW5ndGggLSAxKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2Lm5ldy1ub3RlXCIpKSB7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHByb2plY3QoXCJOZXcgTm90ZVwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIG5vdGVMaXN0LnB1c2gobmV3Tm90ZSk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkTmV3Tm90ZShuZXdOb3RlLCBub3RlTGlzdC5sZW5ndGggLSAxKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2Lm5ldy10b2RvXCIpKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG8oXCJOZXcgVG9kb1wiLCBcIkRlc2NyaXB0aW9uXCIsIFwiXCIsIDUsIFwiU2VsZi1JbXByb3ZlbWVudFwiKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF1dO1xuICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkTmV3VG9kbyhuZXdUb2RvLCBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmxlbmd0aCAtIDEpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYjcHJvamVjdC1lZGl0XCIpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZWRpdFByb2plY3QocHJvamVjdExpc3RbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLmNsYXNzTGlzdFswXV0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdiNwcm9qZWN0LWRlbGV0ZVwiKSkge1xuICAgIHByb2plY3RMaXN0LnNwbGljZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdLCAxKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5wcm9qZWN0c092ZXJ2aWV3KHByb2plY3RMaXN0KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2LnRvZG8tZWRpdFwiKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmVkaXRUb2RvKHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF1dLmdldFRvZG9MaXN0KClbZS50YXJnZXQuY2xhc3NMaXN0WzBdXSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7ZS50YXJnZXQuY2xhc3NMaXN0WzBdfSBjYXJkIHRvZG8nXWApKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2LnRvZG8tZGVsZXRlXCIpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlVG9kbyhlLnRhcmdldC5jbGFzc0xpc3RbMF0pO1xuICAgIHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF1dLnJlbW92ZVRvZG8oZS50YXJnZXQuY2xhc3NMaXN0WzBdKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2Lm5vdGUtZWRpdFwiKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmVkaXROb3RlKG5vdGVMaXN0W2UudGFyZ2V0LmNsYXNzTGlzdFswXV0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2UudGFyZ2V0LmNsYXNzTGlzdFswXX0gY2FyZCBub3RlJ11gKSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5ub3RlLWRlbGV0ZVwiKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZU5vdGUoZS50YXJnZXQuY2xhc3NMaXN0WzBdKTtcbiAgICBub3RlTGlzdC5zcGxpY2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLmNsYXNzTGlzdFswXSwgMSk7XG4gIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==