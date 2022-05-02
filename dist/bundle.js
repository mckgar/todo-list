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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n#sidebar {\n  border-right: 2px solid black;\n  box-shadow: 7px 0px 0px 0px rgba(0,0,0,0.2);\n\n  display: grid;\n  grid-template-rows: 2rem 1fr;\n  gap: 3rem;\n  padding: 2rem;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.link + .link {\n  margin-top: 1.3rem;\n}\n\n#main {\n  grid-column: 2;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.24fr;\n  grid-template-rows: 2rem 1fr;\n  gap: 1rem;\n}\n\n.title,\n#edit-title {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.return {\n  grid-column: -2;\n  grid-row: 1;\n  justify-self: end;\n\n  cursor: pointer;\n}\n\n.projects {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 18rem);\n  grid-auto-rows: 9rem;\n  gap: 1rem;\n}\n\n.card {\n  border: 1px solid black;\n  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.2);\n  padding: 0.5rem 2rem;\n\n  cursor: pointer;\n}\n\n.add,\n.editor {\n  /* Change these to font icons later */\n  font-weight: bold;\n  font-size: 2rem;\n  border: 2px solid black;\n  border-radius: 100%;\n  height: 2.5rem;\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n}\n\n.add {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n}\n\n#project-edit,\n#project-save {\n  position: fixed;\n  bottom: 4rem;\n  right: 1rem;\n}\n\n#project-delete {\n  position: fixed;\n  bottom: 7rem;\n  right: 1rem;\n}\n\n#project-edit::before,\n.todo-edit::before,\n.note-edit::before {\n  content: \"e\";\n}\n\n#project-save::before,\n#todo-save::before,\n#note-save::before {\n  content: \"s\";\n}\n\n#project-delete::before,\n.todo-delete::before,\n.note-delete::before {\n  content: \"❌\";\n}\n\n#project-delete-confirm {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.project-info,\n.notes {\n  grid-column: 1 / -2;\n  grid-row: 2;\n\n  display: grid;\n  grid-template-rows: repeat(50, auto) 1fr;\n  gap: 0.5rem;\n}\n\n.project-info .description,\n.project-info #edit-description {\n  grid-row: 1;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.5fr 1fr 2rem;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.type,\n#edit-type {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.priority,\n#edit-priority {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.priority::before,\n#priority::before {\n  content: \"Priority: \";\n}\n\n.due-date,\n#due-date {\n  grid-column: 4;\n  grid-row: 1;\n}\n\n.due-date::before {\n  content: \"Due: \";\n}\n\n.status {\n  grid-column: 5;\n  grid-row: 1;\n\n  height: 2rem;\n  width: 2rem;\n  border: 1px solid black;\n  border-radius: 100%;\n  justify-self: end;\n}\n\n.status.true {\n  background-color: green;\n}\n\n.todo .description,\n.todo #edit-description {\n  grid-column: 1 / 3;\n  grid-row: 2;\n}\n\n.todo .checklist {\n  grid-column: 4 / 6;\n  grid-row: 2;\n}\n\n.todo .buttons,\n.note .buttons {\n  grid-column: 1;\n  grid-row: 3;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 2rem 2rem;\n  gap: 0.5rem;\n}\n\n.note-edit,\n#note-save,\n.todo-edit,\n#todo-save {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.note-delete,\n.todo-delete {\n  grid-column: 2;\n}\n\n.buttons .editor {\n  font-size: 1.5rem;\n  height: 2rem;\n  width: 2rem;\n}\n\n.notes {\n  margin-right: 3.5rem;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.note .description,\n.note .edit-description {\n  grid-row: 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,2CAA2C;;EAE3C,aAAa;EACb,4BAA4B;EAC5B,SAAS;EACT,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,4BAA4B;EAC5B,SAAS;AACX;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;EACX,iBAAiB;;EAEjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,8CAA8C;EAC9C,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,2CAA2C;EAC3C,oBAAoB;;EAEpB,eAAe;AACjB;;AAEA;;EAEE,qCAAqC;EACrC,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;;;EAGE,YAAY;AACd;;AAEA;;;EAGE,YAAY;AACd;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;;AAEA;;EAEE,mBAAmB;EACnB,WAAW;;EAEX,aAAa;EACb,wCAAwC;EACxC,WAAW;AACb;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,wBAAwB;EACxB,YAAY;AACd;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,WAAW;;EAEX,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,WAAW;AACb;;AAEA;;;;EAIE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;;EAEE,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n#sidebar {\n  border-right: 2px solid black;\n  box-shadow: 7px 0px 0px 0px rgba(0,0,0,0.2);\n\n  display: grid;\n  grid-template-rows: 2rem 1fr;\n  gap: 3rem;\n  padding: 2rem;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.link + .link {\n  margin-top: 1.3rem;\n}\n\n#main {\n  grid-column: 2;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.24fr;\n  grid-template-rows: 2rem 1fr;\n  gap: 1rem;\n}\n\n.title,\n#edit-title {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.return {\n  grid-column: -2;\n  grid-row: 1;\n  justify-self: end;\n\n  cursor: pointer;\n}\n\n.projects {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 18rem);\n  grid-auto-rows: 9rem;\n  gap: 1rem;\n}\n\n.card {\n  border: 1px solid black;\n  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.2);\n  padding: 0.5rem 2rem;\n\n  cursor: pointer;\n}\n\n.add,\n.editor {\n  /* Change these to font icons later */\n  font-weight: bold;\n  font-size: 2rem;\n  border: 2px solid black;\n  border-radius: 100%;\n  height: 2.5rem;\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n}\n\n.add {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n}\n\n#project-edit,\n#project-save {\n  position: fixed;\n  bottom: 4rem;\n  right: 1rem;\n}\n\n#project-delete {\n  position: fixed;\n  bottom: 7rem;\n  right: 1rem;\n}\n\n#project-edit::before,\n.todo-edit::before,\n.note-edit::before {\n  content: \"e\";\n}\n\n#project-save::before,\n#todo-save::before,\n#note-save::before {\n  content: \"s\";\n}\n\n#project-delete::before,\n.todo-delete::before,\n.note-delete::before {\n  content: \"❌\";\n}\n\n#project-delete-confirm {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.project-info,\n.notes {\n  grid-column: 1 / -2;\n  grid-row: 2;\n\n  display: grid;\n  grid-template-rows: repeat(50, auto) 1fr;\n  gap: 0.5rem;\n}\n\n.project-info .description,\n.project-info #edit-description {\n  grid-row: 1;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.5fr 1fr 2rem;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.type,\n#edit-type {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.priority,\n#edit-priority {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.priority::before,\n#priority::before {\n  content: \"Priority: \";\n}\n\n.due-date,\n#due-date {\n  grid-column: 4;\n  grid-row: 1;\n}\n\n.due-date::before {\n  content: \"Due: \";\n}\n\n.status {\n  grid-column: 5;\n  grid-row: 1;\n\n  height: 2rem;\n  width: 2rem;\n  border: 1px solid black;\n  border-radius: 100%;\n  justify-self: end;\n}\n\n.status.true {\n  background-color: green;\n}\n\n.todo .description,\n.todo #edit-description {\n  grid-column: 1 / 3;\n  grid-row: 2;\n}\n\n.todo .checklist {\n  grid-column: 4 / 6;\n  grid-row: 2;\n}\n\n.todo .buttons,\n.note .buttons {\n  grid-column: 1;\n  grid-row: 3;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 2rem 2rem;\n  gap: 0.5rem;\n}\n\n.note-edit,\n#note-save,\n.todo-edit,\n#todo-save {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.note-delete,\n.todo-delete {\n  grid-column: 2;\n}\n\n.buttons .editor {\n  font-size: 1.5rem;\n  height: 2rem;\n  width: 2rem;\n}\n\n.notes {\n  margin-right: 3.5rem;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.note .description,\n.note .edit-description {\n  grid-row: 2;\n}"],"sourceRoot":""}]);
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

    status.addEventListener("click", () => {
      todo.changeStatus();
      status.classList.replace(status.classList[2], todo.getStatus());
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsd0RBQU87QUFDdEIsZUFBZSx3REFBTztBQUN0QixlQUFlLHdEQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHFEQUFJO0FBQ2hCO0FBQ0EsWUFBWSxxREFBSTtBQUNoQjs7QUFFQSwrRUFBOEI7O0FBRTlCO0FBQ0EsNkNBQTZDLG1GQUFrQzs7QUFFL0U7QUFDQSwwQ0FBMEMsZ0ZBQStCOztBQUV6RTtBQUNBLDZDQUE2QyxtRkFBa0M7O0FBRS9FO0FBQ0E7QUFDQSxJQUFJLG1GQUFrQztBQUN0QztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHVCQUF1Qix3REFBTztBQUM5QjtBQUNBLElBQUksZ0ZBQStCO0FBQ25DO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFPO0FBQzNCO0FBQ0EsSUFBSSw2RUFBNEI7QUFDaEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxvQkFBb0IscURBQUk7QUFDeEI7QUFDQTtBQUNBLElBQUksNkVBQTRCO0FBQ2hDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSw4RUFBNkI7QUFDakM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksbUZBQWtDO0FBQ3RDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSwyRUFBMEIscUlBQXFJLHVCQUF1QjtBQUMxTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksNkVBQTRCO0FBQ2hDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDJFQUEwQixzRUFBc0UsdUJBQXVCO0FBQzNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSw2RUFBNEI7QUFDaEM7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDdweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gIGdhcDogM3JlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpbmsgKyAubGluayB7XFxuICBtYXJnaW4tdG9wOiAxLjNyZW07XFxufVxcblxcbiNtYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjI0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUsXFxuI2VkaXQtdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBncmlkLWNvbHVtbjogLTI7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxOHJlbSk7XFxuICBncmlkLWF1dG8tcm93czogOXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQsXFxuLmVkaXRvciB7XFxuICAvKiBDaGFuZ2UgdGhlc2UgdG8gZm9udCBpY29ucyBsYXRlciAqL1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1lZGl0LFxcbiNwcm9qZWN0LXNhdmUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA0cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDdyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZWRpdDo6YmVmb3JlLFxcbi50b2RvLWVkaXQ6OmJlZm9yZSxcXG4ubm90ZS1lZGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcImVcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1zYXZlOjpiZWZvcmUsXFxuI3RvZG8tc2F2ZTo6YmVmb3JlLFxcbiNub3RlLXNhdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwic1xcXCI7XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZTo6YmVmb3JlLFxcbi50b2RvLWRlbGV0ZTo6YmVmb3JlLFxcbi5ub3RlLWRlbGV0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinYxcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGUtY29uZmlybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyxcXG4ubm90ZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMjtcXG4gIGdyaWQtcm93OiAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCBhdXRvKSAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyAuZGVzY3JpcHRpb24sXFxuLnByb2plY3QtaW5mbyAjZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjVmciAxZnIgMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLnR5cGUsXFxuI2VkaXQtdHlwZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHksXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnByaW9yaXR5OjpiZWZvcmUsXFxuI3ByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlByaW9yaXR5OiBcXFwiO1xcbn1cXG5cXG4uZHVlLWRhdGUsXFxuI2R1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5kdWUtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEdWU6IFxcXCI7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxuICBncmlkLXJvdzogMTtcXG5cXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zdGF0dXMudHJ1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8gLmRlc2NyaXB0aW9uLFxcbi50b2RvICNlZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4udG9kbyAuY2hlY2tsaXN0IHtcXG4gIGdyaWQtY29sdW1uOiA0IC8gNjtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4udG9kbyAuYnV0dG9ucyxcXG4ubm90ZSAuYnV0dG9ucyB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAzO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDJyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5vdGUtZWRpdCxcXG4jbm90ZS1zYXZlLFxcbi50b2RvLWVkaXQsXFxuI3RvZG8tc2F2ZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubm90ZS1kZWxldGUsXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uYnV0dG9ucyAuZWRpdG9yIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5ub3RlcyB7XFxuICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLm5vdGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLm5vdGUgLmRlc2NyaXB0aW9uLFxcbi5ub3RlIC5lZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtcm93OiAyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQ0FBMkM7O0VBRTNDLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7O0VBRWpCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0Msb0JBQW9COztFQUVwQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7O0VBRVgsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogN3B4IDBweCAwcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGluayArIC5saW5rIHtcXG4gIG1hcmdpbi10b3A6IDEuM3JlbTtcXG59XFxuXFxuI21haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuMjRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50aXRsZSxcXG4jZWRpdC10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucmV0dXJuIHtcXG4gIGdyaWQtY29sdW1uOiAtMjtcXG4gIGdyaWQtcm93OiAxO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDE4cmVtKTtcXG4gIGdyaWQtYXV0by1yb3dzOiA5cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZCxcXG4uZWRpdG9yIHtcXG4gIC8qIENoYW5nZSB0aGVzZSB0byBmb250IGljb25zIGxhdGVyICovXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWVkaXQsXFxuI3Byb2plY3Qtc2F2ZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDRyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZGVsZXRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogN3JlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1lZGl0OjpiZWZvcmUsXFxuLnRvZG8tZWRpdDo6YmVmb3JlLFxcbi5ub3RlLWVkaXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiZVxcXCI7XFxufVxcblxcbiNwcm9qZWN0LXNhdmU6OmJlZm9yZSxcXG4jdG9kby1zYXZlOjpiZWZvcmUsXFxuI25vdGUtc2F2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJzXFxcIjtcXG59XFxuXFxuI3Byb2plY3QtZGVsZXRlOjpiZWZvcmUsXFxuLnRvZG8tZGVsZXRlOjpiZWZvcmUsXFxuLm5vdGUtZGVsZXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKdjFxcXCI7XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZS1jb25maXJtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLFxcbi5ub3RlcyB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0yO1xcbiAgZ3JpZC1yb3c6IDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIGF1dG8pIDFmcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIC5kZXNjcmlwdGlvbixcXG4ucHJvamVjdC1pbmZvICNlZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuNWZyIDFmciAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4udHlwZSxcXG4jZWRpdC10eXBlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5wcmlvcml0eSxcXG4jZWRpdC1wcmlvcml0eSB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHk6OmJlZm9yZSxcXG4jcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiUHJpb3JpdHk6IFxcXCI7XFxufVxcblxcbi5kdWUtZGF0ZSxcXG4jZHVlLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmR1ZS1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkR1ZTogXFxcIjtcXG59XFxuXFxuLnN0YXR1cyB7XFxuICBncmlkLWNvbHVtbjogNTtcXG4gIGdyaWQtcm93OiAxO1xcblxcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnN0YXR1cy50cnVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kbyAuZGVzY3JpcHRpb24sXFxuLnRvZG8gI2VkaXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvIC5jaGVja2xpc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDQgLyA2O1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvIC5idXR0b25zLFxcbi5ub3RlIC5idXR0b25zIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDM7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMnJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubm90ZS1lZGl0LFxcbiNub3RlLXNhdmUsXFxuLnRvZG8tZWRpdCxcXG4jdG9kby1zYXZlIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5ub3RlLWRlbGV0ZSxcXG4udG9kby1kZWxldGUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5idXR0b25zIC5lZGl0b3Ige1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLm5vdGVzIHtcXG4gIG1hcmdpbi1yaWdodDogMy41cmVtO1xcbn1cXG5cXG4ubm90ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4ubm90ZSAuZGVzY3JpcHRpb24sXFxuLm5vdGUgLmVkaXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0aWFsU2V0dXAgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKF9fc2lkZWJhckNyZWF0ZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKF9fcHJvamVjdHNPdmVydmlld01haW4ocHJvamVjdExpc3QpKTtcbiAgfTtcbiAgY29uc3QgX19zaWRlYmFyQ3JlYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJ0aXRsZSB0a1wiXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpbmtzLmlkID0gXCJsaW5rc1wiO1xuICAgIGNvbnN0IHByb2plY3RzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNMaW5rLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIHByb2plY3RzTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICBwcm9qZWN0c0xpbmsuaWQgPSBcInByb2plY3RzXCI7XG4gICAgY29uc3Qgbm90ZXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3Rlc0xpbmsudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG4gICAgbm90ZXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICAgIG5vdGVzTGluay5pZCA9IFwibm90ZXNcIjtcbiAgICBjb25zdCBzZXR0aW5nc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNldHRpbmdzTGluay50ZXh0Q29udGVudCA9IFwiU2V0dGluZ3NcIjtcbiAgICBzZXR0aW5nc0xpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gICAgc2V0dGluZ3NMaW5rLmlkID0gXCJzZXR0aW5nc1wiO1xuICAgIFxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKHByb2plY3RzTGluayk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobm90ZXNMaW5rKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChzZXR0aW5nc0xpbmspO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlua3MpO1xuICAgIHJldHVybiBzaWRlYmFyO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzT3ZlcnZpZXcgPSAocHJvamVjdHNMaXN0KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBfX2RlbGV0ZU1haW4oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKF9fcHJvamVjdHNPdmVydmlld01haW4ocHJvamVjdHNMaXN0KSk7XG4gIH07XG5cbiAgY29uc3QgX19wcm9qZWN0c092ZXJ2aWV3TWFpbiA9IChwcm9qZWN0c0xpc3QpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmlkID0gXCJtYWluXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoX19jcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0c0xpc3RbaV0sIGkpKTtcbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGROZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJuZXctcHJvamVjdFwiKTtcbiAgICBhZGROZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0QnRuKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIGNvbnN0IF9fY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwicHJvamVjdFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcHJvamVjdEZvY3VzKHByb2plY3QsIGluZGV4KSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IF9fY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCwgaW5kZXgpO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gKHByb2plY3QsIGNhcmQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbmZvXCIpO1xuXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZWRpdFRpdGxlLm5hbWUgPSBcImVkaXQtdGl0bGVcIjtcbiAgICBlZGl0VGl0bGUuaWQgPSBcImVkaXQtdGl0bGVcIjtcbiAgICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdERlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcbiAgICBlZGl0RGVzY3JpcHRpb24ubmFtZSA9IFwiZWRpdC1kZXNjcmlwdGlvblwiO1xuICAgIGVkaXREZXNjcmlwdGlvbi5pZCA9IFwiZWRpdC1kZXNjcmlwdGlvblwiO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBjb25maXJtQnRuLmlkID0gXCJwcm9qZWN0LXNhdmVcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyLnRpdGxlXCIpO1xuICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LmRlc2NyaXB0aW9uXCIpO1xuICAgIGVkaXREZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZWRpdFwiKTtcblxuICAgIGNhcmQucmVtb3ZlQ2hpbGQodGl0bGUpO1xuICAgIHByb2plY3RJbmZvLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgIHByb2plY3Quc2V0VGl0bGUoZWRpdFRpdGxlLnZhbHVlKTtcbiAgICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24oZWRpdERlc2NyaXB0aW9uLnZhbHVlKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VGl0bGUpO1xuICAgICAgcHJvamVjdEluZm8ucmVtb3ZlQ2hpbGQoZWRpdERlc2NyaXB0aW9uKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgfSk7XG4gICAgXG4gIH07XG5cbiAgY29uc3QgcHJvamVjdEZvY3VzID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBfX2RlbGV0ZU1haW4oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKF9fcHJvamVjdEZvY3VzTWFpbihwcm9qZWN0LCBpbmRleCkpO1xuICB9O1xuXG4gIGNvbnN0IF9fcHJvamVjdEZvY3VzTWFpbiA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoaW5kZXgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZ29CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnb0JhY2suY2xhc3NMaXN0LmFkZChcInJldHVyblwiLCBcInJldHVybi1wcm9qZWN0c1wiKTtcbiAgICBnb0JhY2sudGV4dENvbnRlbnQgPSBcIjwtIEdvIEJhY2tcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGdvQmFjayk7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0b3JcIik7XG4gICAgZWRpdEJ0bi5pZCA9IFwicHJvamVjdC1lZGl0XCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0b3JcIik7XG4gICAgZGVsZXRlQnRuLmlkID0gXCJwcm9qZWN0LWRlbGV0ZVwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWluZm9cIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QuZ2V0VG9kb0xpc3QoKS5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoX19jcmVhdGVUb2RvQ2FyZChwcm9qZWN0LmdldFRvZG9MaXN0KClbaV0sIGkpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGROZXdUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJuZXctdG9kb1wiKTtcbiAgICBhZGROZXdUb2RvQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGROZXdUb2RvQnRuKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH07XG5cbiAgY29uc3QgX19jcmVhdGVUb2RvQ2FyZCA9ICh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChpbmRleCwgXCJjYXJkXCIsIFwidG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgY29uc3QgdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHlwZS5jbGFzc0xpc3QuYWRkKGluZGV4LCBcInR5cGVcIik7XG4gICAgdHlwZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VHlwZSgpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChpbmRleCwgXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKGluZGV4LCBcImR1ZS1kYXRlXCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmdldER1ZURhdGUoKTtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKGluZGV4LCBcInN0YXR1c1wiLCB0b2RvLmdldFN0YXR1cygpKTtcblxuICAgIHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9kby5jaGFuZ2VTdGF0dXMoKTtcbiAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVwbGFjZShzdGF0dXMuY2xhc3NMaXN0WzJdLCB0b2RvLmdldFN0YXR1cygpKTtcbiAgICB9KTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQodHlwZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHN0YXR1cyk7XG5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gX19leHBhbmRUb2RvKHRvZG8sIGNhcmQpLCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3VG9kbyA9ICh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9cIilcbiAgICBjb25zdCBuZXdUb2RvID0gX19jcmVhdGVUb2RvQ2FyZCh0b2RvLCBpbmRleCk7XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gIH07XG5cbiAgY29uc3QgX19leHBhbmRUb2RvID0gKHRvZG8sIGNhcmQpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0aXRsZSddYCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY2hlY2tsaXN0LmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiY2hlY2tsaXN0XCIpO1xuXG4gICAgY29uc3QgbGlzdCA9IHRvZG8uZ2V0TGlzdCgpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQoX19jcmVhdGVMaXN0SXRlbShsaXN0W2ldKSk7XG4gICAgfVxuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjaGVja2xpc3QpO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fdW5kb0V4cGFuZFRvZG8odG9kbywgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiYnV0dG9uc1wiKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiZWRpdG9yXCIsIFwidG9kby1lZGl0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiZWRpdG9yXCIsIFwidG9kby1kZWxldGVcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgfTtcblxuICBjb25zdCBfX2NyZWF0ZUxpc3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcImxpc3QtbmFtZVwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJsaXN0LXN0YXR1c1wiLCBpdGVtLmNvbXBsZXRlZCk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfTtcblxuICBjb25zdCBfX3VuZG9FeHBhbmRUb2RvID0gKHRvZG8sIGNhcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGJ1dHRvbnMnXWApO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBjaGVja2xpc3QnXWApXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZGVzY3JpcHRpb24nXWApO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoYnV0dG9ucyk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChjaGVja2xpc3QpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdGl0bGUnXWApO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fZXhwYW5kVG9kbyh0b2RvLCBjYXJkKSwge29uY2U6IHRydWV9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9ICh0b2RvLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBidXR0b25zJ11gKVxuXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZWRpdFRpdGxlLm5hbWUgPSBcImVkaXQtdGl0bGVcIjtcbiAgICBlZGl0VGl0bGUuaWQgPSBcImVkaXQtdGl0bGVcIjtcblxuICAgIGNvbnN0IGVkaXRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBlZGl0VHlwZS5uYW1lID0gXCJlZGl0LXR5cGVcIjtcbiAgICBlZGl0VHlwZS5pZCA9IFwiZWRpdC10eXBlXCI7XG4gICAgY29uc3Qgb3B0aW9uRXhlcmNpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbkV4ZXJjaXNlLnRleHRDb250ZW50ID0gXCJFeGVyY2lzZVwiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkV4ZXJjaXNlKTtcbiAgICBjb25zdCBvcHRpb25TZWxmSW1wcm92ZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvblNlbGZJbXByb3ZlbWVudC50ZXh0Q29udGVudCA9IFwiU2VsZi1JbXByb3ZlbWVudFwiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvblNlbGZJbXByb3ZlbWVudCk7XG4gICAgY29uc3Qgb3B0aW9uTGVhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbkxlYXJuaW5nLnRleHRDb250ZW50ID0gXCJMZWFybmluZ1wiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkxlYXJuaW5nKTtcbiAgICBjb25zdCBvcHRpb25QZXJzb25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uUGVyc29uYWwudGV4dENvbnRlbnQgPSBcIlBlcnNvbmFsXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uUGVyc29uYWwpO1xuICAgIGNvbnN0IG9wdGlvbldvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbldvcmsudGV4dENvbnRlbnQgPSBcIldvcmtcIjtcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25Xb3JrKTtcbiAgICBjb25zdCBvcHRpb25TY2hvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvblNjaG9vbC50ZXh0Q29udGVudCA9IFwiU2Nob29sXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uU2Nob29sKTtcbiAgICBjb25zdCBvcHRpb25DbGVhbmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uQ2xlYW5pbmcudGV4dENvbnRlbnQgPSBcIkNsZWFuaW5nXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uQ2xlYW5pbmcpO1xuICAgIGNvbnN0IG9wdGlvbk90aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25PdGhlci50ZXh0Q29udGVudCA9IFwiT3RoZXJcIjtcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25PdGhlcik7XG5cbiAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGVkaXRQcmlvcml0eS5uYW1lID0gXCJlZGl0LXByaW9yaXR5XCI7XG4gICAgZWRpdFByaW9yaXR5LmlkID0gXCJlZGl0LXByaW9yaXR5XCI7XG4gICAgY29uc3QgcHJpb3JpdHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eTEudGV4dENvbnRlbnQgPSBcIjFcIjtcbiAgICBjb25zdCBwcmlvcml0eTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5Mi50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgIGNvbnN0IHByaW9yaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkzLnRleHRDb250ZW50ID0gXCIzXCI7XG4gICAgY29uc3QgcHJpb3JpdHk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eTQudGV4dENvbnRlbnQgPSBcIjRcIjtcbiAgICBjb25zdCBwcmlvcml0eTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5NS50ZXh0Q29udGVudCA9IFwiNVwiO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTEpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTIpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTMpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTQpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTUpO1xuICAgIGNvbnN0IGVkaXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXREdWVEYXRlLnR5cGUgPSBcImRhdGV0aW1lLWxvY2FsXCI7XG4gICAgZWRpdER1ZURhdGUubmFtZSA9IFwiZWRpdC1kdWUtZGF0ZVwiO1xuICAgIGVkaXREdWVEYXRlLmlkID0gXCJlZGl0LWR1ZS1kYXRlXCI7XG4gICAgZWRpdER1ZURhdGUubWluID0gXCIyMDIyLTA1LTAxXCI7XG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBjb25maXJtQnRuLmlkID0gXCJ0b2RvLXNhdmVcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcbiAgICBlZGl0VGl0bGUudmFsdWUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHR5cGUnXWApO1xuICAgIGVkaXRUeXBlLnZhbHVlID0gdHlwZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBwcmlvcml0eSddYCk7XG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHkudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBkdWUtZGF0ZSddYCk7XG4gICAgZWRpdER1ZURhdGUudmFsdWUgPSBkdWVEYXRlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGRlc2NyaXB0aW9uJ11gKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGVkaXRvciB0b2RvLWVkaXRgKTtcblxuICAgIGNhcmQucmVtb3ZlQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQodHlwZSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChwcmlvcml0eSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChkdWVEYXRlKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBidXR0b25zLnJlbW92ZUNoaWxkKGVkaXRCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUeXBlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRQcmlvcml0eSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RHVlRGF0ZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgIHRvZG8uc2V0VGl0bGUoZWRpdFRpdGxlLnZhbHVlKTtcbiAgICAgIHRvZG8uc2V0VHlwZShlZGl0VHlwZS52YWx1ZSk7XG4gICAgICB0b2RvLnNldFByaW9yaXR5KGVkaXRQcmlvcml0eS52YWx1ZSk7XG4gICAgICB0b2RvLnNldER1ZURhdGUoZWRpdER1ZURhdGUudmFsdWUpO1xuICAgICAgdG9kby5zZXREZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgIHR5cGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFR5cGUoKTtcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdFR5cGUpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0UHJpb3JpdHkpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0RHVlRGF0ZSk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLnJlbW92ZUNoaWxkKGNvbmZpcm1CdG4pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHR5cGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbmZvXCIpO1xuICAgIGNvbnN0IGJhZENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aW5kZXh9IGNhcmQgdG9kbyddYCk7XG4gICAgcHJvamVjdEluZm8ucmVtb3ZlQ2hpbGQoYmFkQ2hpbGQpO1xuICAgIGNvbnN0IGNoaWxkcmVuTGVuZ3RoID0gcHJvamVjdEluZm8uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gcGFyc2VJbnQoaW5kZXgpICsgMTsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2l9IGNhcmQgdG9kbyddYCk7XG4gICAgICBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICB9XG4gICAgICBpZihjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGggPiA1KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aSAtIDF9IGJ1dHRvbnMnXWApO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBub3Rlc092ZXJ2aWV3ID0gKG5vdGVzTGlzdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgX19kZWxldGVNYWluKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChfX25vdGVzT3ZlcnZpZXdNYWluKG5vdGVzTGlzdCkpO1xuICB9O1xuXG4gIGNvbnN0IF9fbm90ZXNPdmVydmlld01haW4gPSAobm90ZXNMaXN0KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzLmNsYXNzTGlzdC5hZGQoXCJub3Rlc1wiKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub3Rlc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vdGVzLmFwcGVuZENoaWxkKF9fY3JlYXRlTm90ZUNhcmQobm90ZXNMaXN0W2ldLCBpKSk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG4gICAgY29uc3QgYWRkTmV3Tm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkTmV3Tm90ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIsIFwibmV3LW5vdGVcIik7XG4gICAgYWRkTmV3Tm90ZUJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkTmV3Tm90ZUJ0bik7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCBfX2NyZWF0ZU5vdGVDYXJkID0gKG5vdGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGluZGV4LCBcImNhcmRcIiwgXCJub3RlXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChpbmRleCwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5vdGUuZ2V0VGl0bGUoKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2V4cGFuZE5vdGUobm90ZSwgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld05vdGUgPSAobm90ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNcIilcbiAgICBjb25zdCBuZXdOb3RlID0gX19jcmVhdGVOb3RlQ2FyZChub3RlLCBpbmRleCk7XG4gICAgbm90ZXMuYXBwZW5kQ2hpbGQobmV3Tm90ZSk7XG4gIH07XG5cbiAgY29uc3QgX19leHBhbmROb3RlID0gKG5vdGUsIGNhcmQpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0aXRsZSddYCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX3VuZG9FeHBhbmROb3RlKG5vdGUsIGNhcmQpLCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCBcImJ1dHRvbnNcIik7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCBcImVkaXRvclwiLCBcIm5vdGUtZWRpdFwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCBcImVkaXRvclwiLCBcIm5vdGUtZGVsZXRlXCIpO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gIH07XG5cbiAgY29uc3QgX191bmRvRXhwYW5kTm90ZSA9IChub3RlLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBidXR0b25zJ11gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBkZXNjcmlwdGlvbiddYCk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChidXR0b25zKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2V4cGFuZE5vdGUobm90ZSwgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdE5vdGUgPSAobm90ZSwgY2FyZCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gYnV0dG9ucyddYClcblxuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIGVkaXRUaXRsZS5uYW1lID0gXCJlZGl0LXRpdGxlXCI7XG4gICAgZWRpdFRpdGxlLmlkID0gXCJlZGl0LXRpdGxlXCI7XG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXREZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZWRpdERlc2NyaXB0aW9uLm5hbWUgPSBcImVkaXQtZGVzY3JpcHRpb25cIjtcbiAgICBlZGl0RGVzY3JpcHRpb24uaWQgPSBcImVkaXQtZGVzY3JpcHRpb25cIjtcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0b3JcIik7XG4gICAgY29uZmlybUJ0bi5pZCA9IFwibm90ZS1zYXZlXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0aXRsZSddYCk7XG4gICAgZWRpdFRpdGxlLnZhbHVlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZGVzY3JpcHRpb24nXWApO1xuICAgIGVkaXREZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZWRpdG9yIG5vdGUtZWRpdGApO1xuXG4gICAgY2FyZC5yZW1vdmVDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgYnV0dG9ucy5yZW1vdmVDaGlsZChlZGl0QnRuKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUaXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgIG5vdGUuc2V0VGl0bGUoZWRpdFRpdGxlLnZhbHVlKTtcbiAgICAgIG5vdGUuc2V0RGVzY3JpcHRpb24oZWRpdERlc2NyaXB0aW9uLnZhbHVlKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLmdldFRpdGxlKCk7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5vdGUuZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VGl0bGUpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgICAgYnV0dG9ucy5yZW1vdmVDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU5vdGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNcIik7XG4gICAgY29uc3QgYmFkQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtpbmRleH0gY2FyZCBub3RlJ11gKTtcbiAgICBub3Rlcy5yZW1vdmVDaGlsZChiYWRDaGlsZCk7XG4gICAgY29uc3QgY2hpbGRyZW5MZW5ndGggPSBub3Rlcy5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSBwYXJzZUludChpbmRleCkgKyAxOyBpIDwgY2hpbGRyZW5MZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2l9IGNhcmQgbm90ZSddYCk7XG4gICAgICBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICB9XG4gICAgICBpZihjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aSAtIDF9IGJ1dHRvbnMnXWApO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR0aW5nc092ZXJ2aWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgX19kZWxldGVNYWluKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChfX3NldHRpbmdzT3ZlcnZpZXdNYWluKCkpO1xuICB9O1xuXG4gIGNvbnN0IF9fc2V0dGluZ3NPdmVydmlld01haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuICBjb25zdCBfX2RlbGV0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbik7XG4gIH07XG5cbiAgcmV0dXJuIHtpbml0aWFsU2V0dXAsIHByb2plY3RzT3ZlcnZpZXcsIHByb2plY3RGb2N1cywgbm90ZXNPdmVydmlldywgc2V0dGluZ3NPdmVydmlldyxcbiAgICBhZGROZXdQcm9qZWN0LCBhZGROZXdOb3RlLCBhZGROZXdUb2RvLCBlZGl0UHJvamVjdCwgZWRpdFRvZG8sIHJlbW92ZVRvZG8sIGVkaXROb3RlLCByZW1vdmVOb3RlfTtcbn0pKCk7XG5cbmV4cG9ydCB7ZGlzcGxheUNvbnRyb2xsZXJ9OyIsImNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdHlwZSkgPT4ge1xuICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gIGxldCBsaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH07XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkdWVEYXRlO1xuICB9O1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH07XG4gIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG4gIGNvbnN0IHNldFR5cGUgPSAobmV3VHlwZSkgPT4ge1xuICAgIHR5cGUgPSBuZXdUeXBlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVN0YXR1cyA9ICgpID0+IHtcbiAgICBzdGF0dXMgPSAhc3RhdHVzO1xuICB9O1xuICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBsaXN0O1xuICB9O1xuICBjb25zdCBhZGRJdGVtID0gKHRpdGxlKSA9PiB7XG4gICAgbGlzdC5wdXNoKHtuYW1lOiB0aXRsZSwgY29tcGxldGVkOiBmYWxzZX0pO1xuICB9O1xuICBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICB9O1xuICBjb25zdCBjaGVja0l0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGl0ZW0uY29tcGxldGVkID0gIShpdGVtLmNvbXBsZXRlZCk7XG4gIH07XG5cbiAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgXG4gICAgc2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBnZXRUeXBlLCBzZXRUeXBlLCBjaGFuZ2VTdGF0dXMsXG4gICAgZ2V0U3RhdHVzLCBnZXRMaXN0LCBhZGRJdGVtLCByZW1vdmVJdGVtLCBjaGVja0l0ZW19O1xufTtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH1cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvID0gKG5ld1RvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuICB9O1xuICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBnZXRUb2RvTGlzdCwgXG4gICAgYWRkVG9kbywgcmVtb3ZlVG9kb307XG59XG5cbmNvbnN0IG5vdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9ufTtcbn1cblxuZXhwb3J0IHt0b2RvLCBwcm9qZWN0LCBub3RlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7dG9kbywgcHJvamVjdCwgbm90ZX0gZnJvbSBcIi4vdG9kby1jcmVhdGUuanNcIjtcbmltcG9ydCB7ZGlzcGxheUNvbnRyb2xsZXJ9IGZyb20gXCIuL2Rpc3BsYXktY29udHJvbGxlclwiO1xuXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcbmxldCBub3RlTGlzdCA9IFtdO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdFwiLCBcIkRlZmF1bHQgcHJvamVjdFwiKTtcbmxldCBmaXJzdFRvZG8gPSB0b2RvKFwiRmlyc3QgdG9kb1wiLCBcIlRoaXMgdG9kbyB3aWxsIGhlbHAgc2V0IHVwIHRoZSBsYXlvdXQgb2YgdGhlIHNpdGVcIiwgXCJzYXR1cmRheVwiLCA1LCBcIkV4ZXJjaXNlXCIpO1xuZmlyc3RUb2RvLmFkZEl0ZW0oXCJXcml0ZSBhIGNoZWNrbGlzdFwiKTtcbmZpcnN0VG9kby5hZGRJdGVtKFwiQWRkIGl0ZW1zIHRvIGNoZWNrbGlzdFwiKTtcbmZpcnN0VG9kby5hZGRJdGVtKFwiUHV0IHRoZSB0b2RvIGluIHRoZSBwcm9qZWN0XCIpO1xuZmlyc3RUb2RvLmFkZEl0ZW0oXCJHZXQgdGhlIGxheW91dCB3b3JraW5nXCIpO1xuZGVmYXVsdFByb2plY3QuYWRkVG9kbyhmaXJzdFRvZG8pO1xubGV0IHNlY29uZFRvZG8gPSB0b2RvKFwiU2Vjb25kIHRvZG9cIiwgXCJUaGlzIHRvZG8gd2lsbCBhbHNvIGhlbHAgc2V0IHVwIHRoZSBsYXlvdXQgb2YgdGhlIHNpdGVcIiwgXCIxMi0yMy00NVwiLCA1LCBcIkV4ZXJjaXNlXCIpO1xuc2Vjb25kVG9kby5hZGRJdGVtKFwiV3JpdGUgYSBjaGVja2xpc3RcIik7XG5zZWNvbmRUb2RvLmFkZEl0ZW0oXCJBbHNvIGhlbHBcIik7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvKHNlY29uZFRvZG8pO1xucHJvamVjdExpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbmxldCBkZWZhdWx0MiA9IHByb2plY3QoXCJUZXN0XCIsIFwiVGhpcyBpcyBhIHRlc3RcIik7XG5sZXQgZGVmYXVsdDMgPSBwcm9qZWN0KFwiTGF5b3V0IEhlbHBlclwiLCBcIlRoZXNlIGFyZSBhZGRlZCB0byBhc3NpdCB3aXRoIGxheW91dCBjcmVhdGlvblwiKTtcbmxldCBkZWZhdWx0NCA9IHByb2plY3QoXCJHZXQgb24gdGhlIG1vc3Rlc3QgY29ycmVjdCB0cmFja1wiLCBcIllldCBhbm90aGVyIGhlbHBlclwiKTtcbnByb2plY3RMaXN0LnB1c2goZGVmYXVsdDIpO1xucHJvamVjdExpc3QucHVzaChkZWZhdWx0Myk7XG5wcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHQ0KTtcblxubGV0IG5vdGUxID0gbm90ZShcIk5vdGUgdGVzdGVyXCIsIFwiRGF5IDkwNjg3LCBJJ3ZlIHNvbWVob3cga2VwdCB0cmFjayBvZiB0aGUgZGF5IGRlc3BpdGUgdGhpcyBiZWluZyBteSBmaXJzdCBub3RlLiBUaGF0IGlzIGFsbCwgSSdtIGp1c3QgaW1wcmVzc2VkLlwiKTtcbm5vdGVMaXN0LnB1c2gobm90ZTEpO1xubGV0IG5vdGUyID0gbm90ZShcIllldCBBbm90aGVyIE5vdGUgdGVzdGVyXCIsIFwiRGF5IDcsIEkndmUgc29tZWhvdyBrZXB0IHRyYWNrIG9mIHRoZSBkYXkgZGVzcGl0ZSB0aGlzIGJlaW5nIG15IHNlY29uZCBub3RlLiBUaGF0IGlzIGFsbCwgSSdtIGp1c3QgaW1wcmVzc2VkLlwiKTtcbm5vdGVMaXN0LnB1c2gobm90ZTIpO1xuXG5kaXNwbGF5Q29udHJvbGxlci5pbml0aWFsU2V0dXAocHJvamVjdExpc3QpO1xuXG5jb25zdCBwcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xucHJvamVjdHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5Q29udHJvbGxlci5wcm9qZWN0c092ZXJ2aWV3KHByb2plY3RMaXN0KSk7XG5cbmNvbnN0IG5vdGVzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIik7XG5ub3Rlc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlDb250cm9sbGVyLm5vdGVzT3ZlcnZpZXcobm90ZUxpc3QpKTtcblxuY29uc3Qgc2V0dGluZ3NMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR0aW5nc1wiKTtcbnNldHRpbmdzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheUNvbnRyb2xsZXIuc2V0dGluZ3NPdmVydmlldygpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYucmV0dXJuLXByb2plY3RzXCIpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucHJvamVjdHNPdmVydmlldyhwcm9qZWN0TGlzdCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5uZXctcHJvamVjdFwiKSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KFwiTmV3IFByb2plY3RcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld1Byb2plY3QobmV3UHJvamVjdCwgcHJvamVjdExpc3QubGVuZ3RoIC0gMSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5uZXctbm90ZVwiKSkge1xuICAgIGNvbnN0IG5ld05vdGUgPSBwcm9qZWN0KFwiTmV3IE5vdGVcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBub3RlTGlzdC5wdXNoKG5ld05vdGUpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld05vdGUobmV3Tm90ZSwgbm90ZUxpc3QubGVuZ3RoIC0gMSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5uZXctdG9kb1wiKSkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKFwiTmV3IFRvZG9cIiwgXCJEZXNjcmlwdGlvblwiLCBcIlwiLCA1LCBcIlNlbGYtSW1wcm92ZW1lbnRcIik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdXTtcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld1RvZG8obmV3VG9kbywgY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKS5sZW5ndGggLSAxKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2I3Byb2plY3QtZWRpdFwiKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmVkaXRQcm9qZWN0KHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF1dLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYjcHJvamVjdC1kZWxldGVcIikpIHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLmNsYXNzTGlzdFswXSwgMSk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucHJvamVjdHNPdmVydmlldyhwcm9qZWN0TGlzdCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi50b2RvLWVkaXRcIikpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0VG9kbyhwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdXS5nZXRUb2RvTGlzdCgpW2UudGFyZ2V0LmNsYXNzTGlzdFswXV0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2UudGFyZ2V0LmNsYXNzTGlzdFswXX0gY2FyZCB0b2RvJ11gKSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi50b2RvLWRlbGV0ZVwiKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZVRvZG8oZS50YXJnZXQuY2xhc3NMaXN0WzBdKTtcbiAgICBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdXS5yZW1vdmVUb2RvKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5ub3RlLWVkaXRcIikpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0Tm90ZShub3RlTGlzdFtlLnRhcmdldC5jbGFzc0xpc3RbMF1dLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtlLnRhcmdldC5jbGFzc0xpc3RbMF19IGNhcmQgbm90ZSddYCkpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYubm90ZS1kZWxldGVcIikpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVOb3RlKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gICAgbm90ZUxpc3Quc3BsaWNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF0sIDEpO1xuICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=