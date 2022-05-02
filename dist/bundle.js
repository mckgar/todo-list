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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n#sidebar {\n  border-right: 2px solid black;\n  box-shadow: 7px 0px 0px 0px rgba(0,0,0,0.2);\n\n  display: grid;\n  grid-template-rows: 2rem 1fr;\n  gap: 3rem;\n  padding: 2rem;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.link + .link {\n  margin-top: 1.3rem;\n}\n\n#main {\n  grid-column: 2;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.24fr;\n  grid-template-rows: 2rem 1fr;\n  gap: 1rem;\n}\n\n.title,\n#edit-title {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.return {\n  grid-column: -2;\n  grid-row: 1;\n  justify-self: end;\n\n  cursor: pointer;\n}\n\n.projects {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 18rem);\n  grid-auto-rows: 9rem;\n  gap: 1rem;\n}\n\n.card {\n  border: 1px solid black;\n  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.2);\n  padding: 0.5rem 2rem;\n\n  cursor: pointer;\n}\n\n.add,\n.editor {\n  /* Change these to font icons later */\n  font-weight: bold;\n  font-size: 2rem;\n  border: 2px solid black;\n  border-radius: 100%;\n  height: 2.5rem;\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n}\n\n.add {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n}\n\n#project-edit,\n#project-save {\n  position: fixed;\n  bottom: 4rem;\n  right: 1rem;\n}\n\n#project-delete {\n  position: fixed;\n  bottom: 7rem;\n  right: 1rem;\n}\n\n#project-edit::before,\n.todo-edit::before,\n.note-edit::before,\n.checklist-edit::before {\n  content: \"e\";\n}\n\n#project-save::before,\n#todo-save::before,\n#note-save::before,\n#checklist-save::before {\n  content: \"s\";\n}\n\n#project-delete::before,\n.todo-delete::before,\n.note-delete::before,\n.checklist-delete::before {\n  content: \"❌\";\n}\n\n#project-delete-confirm {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.project-info,\n.notes {\n  grid-column: 1 / -2;\n  grid-row: 2;\n\n  display: grid;\n  grid-template-rows: repeat(50, auto) 1fr;\n  gap: 0.5rem;\n}\n\n.project-info .description,\n.project-info #edit-description {\n  grid-row: 1;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.5fr 1fr 2rem;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.type,\n#edit-type {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.priority,\n#edit-priority {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.priority::before,\n#priority::before {\n  content: \"Priority: \";\n}\n\n.due-date,\n#due-date {\n  grid-column: 4;\n  grid-row: 1;\n}\n\n.due-date::before {\n  content: \"Due: \";\n}\n\n.status {\n  grid-column: 5;\n  grid-row: 1;\n\n  height: 2rem;\n  width: 2rem;\n  border: 1px solid black;\n  border-radius: 100%;\n  justify-self: end;\n}\n\n.status.true {\n  background-color: green;\n}\n\n.todo .description,\n.todo #edit-description {\n  grid-column: 1 / 3;\n  grid-row: 2;\n}\n\n.todo .checklist {\n  grid-column: 3 / 6;\n  grid-row: 2;\n}\n\n.list-name.true {\n  color: green;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-checklist-item {\n  text-align: center;\n  border: 1px solid black;\n}\n\n.todo .buttons,\n.note .buttons {\n  grid-column: 1;\n  grid-row: 3;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 2rem 2rem;\n  gap: 0.5rem;\n}\n\n.list-item .buttons {\n  display: grid;\n  grid-template-columns: 1rem 1rem;\n  gap: 0.2rem;\n}\n\n.note-edit,\n#note-save,\n.todo-edit,\n#todo-save,\n.checklist-edit,\n#checklist-save {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.note-delete,\n.todo-delete,\n.checklist-delete {\n  grid-column: 2;\n}\n\n.buttons .editor {\n  font-size: 1.5rem;\n  height: 2rem;\n  width: 2rem;\n}\n\n.list-item .buttons .editor {\n  font-size: 0.7rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.notes {\n  margin-right: 3.5rem;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.note .description,\n.note .edit-description {\n  grid-row: 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,2CAA2C;;EAE3C,aAAa;EACb,4BAA4B;EAC5B,SAAS;EACT,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,4BAA4B;EAC5B,SAAS;AACX;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;EACX,iBAAiB;;EAEjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,8CAA8C;EAC9C,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,2CAA2C;EAC3C,oBAAoB;;EAEpB,eAAe;AACjB;;AAEA;;EAEE,qCAAqC;EACrC,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;;AAEA;;EAEE,mBAAmB;EACnB,WAAW;;EAEX,aAAa;EACb,wCAAwC;EACxC,WAAW;AACb;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,wBAAwB;EACxB,YAAY;AACd;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,WAAW;;EAEX,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;;EAEE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,WAAW;AACb;;AAEA;;;;;;EAME,cAAc;EACd,WAAW;AACb;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;;EAEE,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n#sidebar {\n  border-right: 2px solid black;\n  box-shadow: 7px 0px 0px 0px rgba(0,0,0,0.2);\n\n  display: grid;\n  grid-template-rows: 2rem 1fr;\n  gap: 3rem;\n  padding: 2rem;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.link + .link {\n  margin-top: 1.3rem;\n}\n\n#main {\n  grid-column: 2;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.24fr;\n  grid-template-rows: 2rem 1fr;\n  gap: 1rem;\n}\n\n.title,\n#edit-title {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.return {\n  grid-column: -2;\n  grid-row: 1;\n  justify-self: end;\n\n  cursor: pointer;\n}\n\n.projects {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 18rem);\n  grid-auto-rows: 9rem;\n  gap: 1rem;\n}\n\n.card {\n  border: 1px solid black;\n  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.2);\n  padding: 0.5rem 2rem;\n\n  cursor: pointer;\n}\n\n.add,\n.editor {\n  /* Change these to font icons later */\n  font-weight: bold;\n  font-size: 2rem;\n  border: 2px solid black;\n  border-radius: 100%;\n  height: 2.5rem;\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n}\n\n.add {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n}\n\n#project-edit,\n#project-save {\n  position: fixed;\n  bottom: 4rem;\n  right: 1rem;\n}\n\n#project-delete {\n  position: fixed;\n  bottom: 7rem;\n  right: 1rem;\n}\n\n#project-edit::before,\n.todo-edit::before,\n.note-edit::before,\n.checklist-edit::before {\n  content: \"e\";\n}\n\n#project-save::before,\n#todo-save::before,\n#note-save::before,\n#checklist-save::before {\n  content: \"s\";\n}\n\n#project-delete::before,\n.todo-delete::before,\n.note-delete::before,\n.checklist-delete::before {\n  content: \"❌\";\n}\n\n#project-delete-confirm {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.project-info,\n.notes {\n  grid-column: 1 / -2;\n  grid-row: 2;\n\n  display: grid;\n  grid-template-rows: repeat(50, auto) 1fr;\n  gap: 0.5rem;\n}\n\n.project-info .description,\n.project-info #edit-description {\n  grid-row: 1;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.5fr 1fr 2rem;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.type,\n#edit-type {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.priority,\n#edit-priority {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.priority::before,\n#priority::before {\n  content: \"Priority: \";\n}\n\n.due-date,\n#due-date {\n  grid-column: 4;\n  grid-row: 1;\n}\n\n.due-date::before {\n  content: \"Due: \";\n}\n\n.status {\n  grid-column: 5;\n  grid-row: 1;\n\n  height: 2rem;\n  width: 2rem;\n  border: 1px solid black;\n  border-radius: 100%;\n  justify-self: end;\n}\n\n.status.true {\n  background-color: green;\n}\n\n.todo .description,\n.todo #edit-description {\n  grid-column: 1 / 3;\n  grid-row: 2;\n}\n\n.todo .checklist {\n  grid-column: 3 / 6;\n  grid-row: 2;\n}\n\n.list-name.true {\n  color: green;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-checklist-item {\n  text-align: center;\n  border: 1px solid black;\n}\n\n.todo .buttons,\n.note .buttons {\n  grid-column: 1;\n  grid-row: 3;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 2rem 2rem;\n  gap: 0.5rem;\n}\n\n.list-item .buttons {\n  display: grid;\n  grid-template-columns: 1rem 1rem;\n  gap: 0.2rem;\n}\n\n.note-edit,\n#note-save,\n.todo-edit,\n#todo-save,\n.checklist-edit,\n#checklist-save {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.note-delete,\n.todo-delete,\n.checklist-delete {\n  grid-column: 2;\n}\n\n.buttons .editor {\n  font-size: 1.5rem;\n  height: 2rem;\n  width: 2rem;\n}\n\n.list-item .buttons .editor {\n  font-size: 0.7rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.notes {\n  margin-right: 3.5rem;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 2rem;\n  gap: 0.25rem;\n}\n\n.note .description,\n.note .edit-description {\n  grid-row: 2;\n}"],"sourceRoot":""}]);
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
      checklist.appendChild(__createListItem(todo, i));
    }

    const addToList = document.createElement("p");
    addToList.classList.add(card.classList[0], "add-checklist-item");
    addToList.textContent = "+";
    checklist.appendChild(addToList);

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

  const __createListItem = (todo, index) => {
    const card = document.createElement("div");
    card.classList.add(index, "list-item");
    const name = document.createElement("p");
    name.classList.add(index, "list-name", todo.getList()[index].completed);
    name.textContent = todo.getList()[index].name;

    card.appendChild(name);

    name.addEventListener("click", () => {
      todo.checkItem(todo.getList()[index]);
      name.classList.replace(name.classList[2], todo.getList()[index].completed);
    });

    const buttons = document.createElement("div");
    buttons.classList.add(index, "buttons");
    const editBtn = document.createElement("div");
    editBtn.classList.add(index, "editor", "checklist-edit");
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add(index, "editor", "checklist-delete");
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    card.appendChild(buttons);

    return card;
  };

  const addChecklistItem = (todo, index) => {
    const newItem = __createListItem(todo, todo.getList().length -1);
    const checklist = document.querySelector(`[class = '${index} checklist']`);
    checklist.insertBefore(newItem, document.querySelector(`[class = '${index} add-checklist-item']`))
  };

  const editChecklistItem = (todo, cardIndex, itemIndex) => {
    const checklist = document.querySelector(`[class = '${cardIndex} checklist']`);
    
    const item = checklist.childNodes[itemIndex];
    const itemName = item.childNodes[0];
    const buttons = item.childNodes[1];
    const editBtn = buttons.childNodes[0];

    const editItemName = document.createElement("input");
    editItemName.type = "text";
    editItemName.name = "edit-item-name";
    editItemName.id = "edit-item-name";
    const confirmBtn = document.createElement("div");
    confirmBtn.classList.add("editor");
    confirmBtn.id = "checklist-save";

    editItemName.value = itemName.textContent;

    item.removeChild(itemName);
    buttons.removeChild(editBtn);
    item.insertBefore(editItemName, buttons);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () => {
      todo.editItem(itemIndex, editItemName.value);
      itemName.textContent = editItemName.value;

      item.removeChild(editItemName);
      buttons.removeChild(confirmBtn);
      item.insertBefore(itemName, buttons);
      buttons.appendChild(editBtn);
    })
    
  }

  const removeChecklistItem = (cardIndex, itemIndex) => {
    const checklist = document.querySelector(`[class = '${cardIndex} checklist']`);
    checklist.removeChild(checklist.childNodes[itemIndex]);

    for(let i = parseInt(itemIndex); i < checklist.childNodes.length - 1; i++) {
      const listItem = checklist.childNodes[i];
      listItem.classList.replace(listItem.classList[0], listItem.classList - 1);
      const listName = listItem.childNodes[0];
      listName.classList.replace(listName.classList[0], listName.classList[0] - 1);
      const listButtons = listItem.childNodes[1];
      listButtons.classList.replace(listButtons.classList[0], listButtons.classList[0] - 1);
      listButtons.childNodes[0].classList.replace(listButtons.childNodes[0].classList[0], listButtons.childNodes[0].classList[0] - 1);
      listButtons.childNodes[1].classList.replace(listButtons.childNodes[1].classList[0], listButtons.childNodes[1].classList[0] - 1);
    }
  }

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
    addNewProject, addNewNote, addNewTodo, editProject, editTodo, removeTodo, editNote, 
    removeNote, addChecklistItem, editChecklistItem, removeChecklistItem};
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
  const editItem = (index, newTitle) => {
    list[index].name = newTitle;
  }
  const removeItem = (item) => {
    list.splice(list.indexOf(item), 1);
  };
  const checkItem = (item) => {
    item.completed = !(item.completed);
  };

  return {getTitle, setTitle, getDescription, setDescription, getDueDate, 
    setDueDate, getPriority, setPriority, getType, setType, changeStatus,
    getStatus, getList, addItem, removeItem, checkItem, editItem};
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
  if(e.target && e.target.matches("p.add-checklist-item")) {
    projectList[document.querySelector("#main").classList[0]].getTodoList()[e.target.classList[0]].addItem("New item");
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.addChecklistItem(projectList[document.querySelector("#main").classList[0]].getTodoList()[e.target.classList[0]], e.target.classList[0]);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.checklist-edit")) {
    const cardIndex = e.target.parentNode.parentNode.parentNode.classList[0];
    const listIndex = e.target.classList[0];
    const currentTodo = projectList[document.querySelector("#main").classList[0]].getTodoList()[cardIndex];
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.editChecklistItem(currentTodo, cardIndex, listIndex);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.checklist-delete")) {
    const cardIndex = e.target.parentNode.parentNode.parentNode.classList[0];
    const listIndex = e.target.classList[0];
    _display_controller__WEBPACK_IMPORTED_MODULE_2__.displayController.removeChecklistItem(cardIndex, listIndex);
    const currentTodo = projectList[document.querySelector("#main").classList[0]].getTodoList()[cardIndex];
    currentTodo.removeItem(currentTodo.getList()[listIndex]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQW1CLGtDQUFrQztBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFQUFxRSxXQUFXOztBQUVoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0QsbUJBQW1COztBQUV6RTtBQUNB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cGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDdweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gIGdhcDogM3JlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpbmsgKyAubGluayB7XFxuICBtYXJnaW4tdG9wOiAxLjNyZW07XFxufVxcblxcbiNtYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjI0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUsXFxuI2VkaXQtdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBncmlkLWNvbHVtbjogLTI7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxOHJlbSk7XFxuICBncmlkLWF1dG8tcm93czogOXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQsXFxuLmVkaXRvciB7XFxuICAvKiBDaGFuZ2UgdGhlc2UgdG8gZm9udCBpY29ucyBsYXRlciAqL1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1lZGl0LFxcbiNwcm9qZWN0LXNhdmUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA0cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDdyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZWRpdDo6YmVmb3JlLFxcbi50b2RvLWVkaXQ6OmJlZm9yZSxcXG4ubm90ZS1lZGl0OjpiZWZvcmUsXFxuLmNoZWNrbGlzdC1lZGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcImVcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1zYXZlOjpiZWZvcmUsXFxuI3RvZG8tc2F2ZTo6YmVmb3JlLFxcbiNub3RlLXNhdmU6OmJlZm9yZSxcXG4jY2hlY2tsaXN0LXNhdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwic1xcXCI7XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZTo6YmVmb3JlLFxcbi50b2RvLWRlbGV0ZTo6YmVmb3JlLFxcbi5ub3RlLWRlbGV0ZTo6YmVmb3JlLFxcbi5jaGVja2xpc3QtZGVsZXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKdjFxcXCI7XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZS1jb25maXJtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLFxcbi5ub3RlcyB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0yO1xcbiAgZ3JpZC1yb3c6IDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIGF1dG8pIDFmcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIC5kZXNjcmlwdGlvbixcXG4ucHJvamVjdC1pbmZvICNlZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuNWZyIDFmciAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4udHlwZSxcXG4jZWRpdC10eXBlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5wcmlvcml0eSxcXG4jZWRpdC1wcmlvcml0eSB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHk6OmJlZm9yZSxcXG4jcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiUHJpb3JpdHk6IFxcXCI7XFxufVxcblxcbi5kdWUtZGF0ZSxcXG4jZHVlLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmR1ZS1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkR1ZTogXFxcIjtcXG59XFxuXFxuLnN0YXR1cyB7XFxuICBncmlkLWNvbHVtbjogNTtcXG4gIGdyaWQtcm93OiAxO1xcblxcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnN0YXR1cy50cnVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kbyAuZGVzY3JpcHRpb24sXFxuLnRvZG8gI2VkaXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvIC5jaGVja2xpc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi5saXN0LW5hbWUudHJ1ZSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC1jaGVja2xpc3QtaXRlbSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG8gLmJ1dHRvbnMsXFxuLm5vdGUgLmJ1dHRvbnMge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMztcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAycmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5saXN0LWl0ZW0gLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSAxcmVtO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5ub3RlLWVkaXQsXFxuI25vdGUtc2F2ZSxcXG4udG9kby1lZGl0LFxcbiN0b2RvLXNhdmUsXFxuLmNoZWNrbGlzdC1lZGl0LFxcbiNjaGVja2xpc3Qtc2F2ZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubm90ZS1kZWxldGUsXFxuLnRvZG8tZGVsZXRlLFxcbi5jaGVja2xpc3QtZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uYnV0dG9ucyAuZWRpdG9yIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5saXN0LWl0ZW0gLmJ1dHRvbnMgLmVkaXRvciB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4ubm90ZXMge1xcbiAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XFxufVxcblxcbi5ub3RlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW07XFxuICBnYXA6IDAuMjVyZW07XFxufVxcblxcbi5ub3RlIC5kZXNjcmlwdGlvbixcXG4ubm90ZSAuZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkNBQTJDOztFQUUzQyxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCOztFQUVqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkNBQTJDO0VBQzNDLG9CQUFvQjs7RUFFcEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOzs7O0VBSUUsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZDQUE2QztFQUM3Qyx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXOztFQUVYLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTs7Ozs7O0VBTUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDdweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gIGdhcDogM3JlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpbmsgKyAubGluayB7XFxuICBtYXJnaW4tdG9wOiAxLjNyZW07XFxufVxcblxcbiNtYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjI0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUsXFxuI2VkaXQtdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnJldHVybiB7XFxuICBncmlkLWNvbHVtbjogLTI7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxOHJlbSk7XFxuICBncmlkLWF1dG8tcm93czogOXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQsXFxuLmVkaXRvciB7XFxuICAvKiBDaGFuZ2UgdGhlc2UgdG8gZm9udCBpY29ucyBsYXRlciAqL1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1lZGl0LFxcbiNwcm9qZWN0LXNhdmUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA0cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDdyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZWRpdDo6YmVmb3JlLFxcbi50b2RvLWVkaXQ6OmJlZm9yZSxcXG4ubm90ZS1lZGl0OjpiZWZvcmUsXFxuLmNoZWNrbGlzdC1lZGl0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcImVcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1zYXZlOjpiZWZvcmUsXFxuI3RvZG8tc2F2ZTo6YmVmb3JlLFxcbiNub3RlLXNhdmU6OmJlZm9yZSxcXG4jY2hlY2tsaXN0LXNhdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwic1xcXCI7XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZTo6YmVmb3JlLFxcbi50b2RvLWRlbGV0ZTo6YmVmb3JlLFxcbi5ub3RlLWRlbGV0ZTo6YmVmb3JlLFxcbi5jaGVja2xpc3QtZGVsZXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKdjFxcXCI7XFxufVxcblxcbiNwcm9qZWN0LWRlbGV0ZS1jb25maXJtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLFxcbi5ub3RlcyB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0yO1xcbiAgZ3JpZC1yb3c6IDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIGF1dG8pIDFmcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIC5kZXNjcmlwdGlvbixcXG4ucHJvamVjdC1pbmZvICNlZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuNWZyIDFmciAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4udHlwZSxcXG4jZWRpdC10eXBlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5wcmlvcml0eSxcXG4jZWRpdC1wcmlvcml0eSB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHk6OmJlZm9yZSxcXG4jcHJpb3JpdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiUHJpb3JpdHk6IFxcXCI7XFxufVxcblxcbi5kdWUtZGF0ZSxcXG4jZHVlLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmR1ZS1kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkR1ZTogXFxcIjtcXG59XFxuXFxuLnN0YXR1cyB7XFxuICBncmlkLWNvbHVtbjogNTtcXG4gIGdyaWQtcm93OiAxO1xcblxcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnN0YXR1cy50cnVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kbyAuZGVzY3JpcHRpb24sXFxuLnRvZG8gI2VkaXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi50b2RvIC5jaGVja2xpc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi5saXN0LW5hbWUudHJ1ZSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC1jaGVja2xpc3QtaXRlbSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG8gLmJ1dHRvbnMsXFxuLm5vdGUgLmJ1dHRvbnMge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMztcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAycmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5saXN0LWl0ZW0gLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSAxcmVtO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5ub3RlLWVkaXQsXFxuI25vdGUtc2F2ZSxcXG4udG9kby1lZGl0LFxcbiN0b2RvLXNhdmUsXFxuLmNoZWNrbGlzdC1lZGl0LFxcbiNjaGVja2xpc3Qtc2F2ZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubm90ZS1kZWxldGUsXFxuLnRvZG8tZGVsZXRlLFxcbi5jaGVja2xpc3QtZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uYnV0dG9ucyAuZWRpdG9yIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5saXN0LWl0ZW0gLmJ1dHRvbnMgLmVkaXRvciB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4ubm90ZXMge1xcbiAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XFxufVxcblxcbi5ub3RlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW07XFxuICBnYXA6IDAuMjVyZW07XFxufVxcblxcbi5ub3RlIC5kZXNjcmlwdGlvbixcXG4ubm90ZSAuZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTZXR1cCA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19zaWRlYmFyQ3JlYXRlKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19wcm9qZWN0c092ZXJ2aWV3TWFpbihwcm9qZWN0TGlzdCkpO1xuICB9O1xuICBjb25zdCBfX3NpZGViYXJDcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcInRpdGxlIHRrXCJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlua3MuaWQgPSBcImxpbmtzXCI7XG4gICAgY29uc3QgcHJvamVjdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0xpbmsudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHNMaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICAgIHByb2plY3RzTGluay5pZCA9IFwicHJvamVjdHNcIjtcbiAgICBjb25zdCBub3Rlc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzTGluay50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcbiAgICBub3Rlc0xpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gICAgbm90ZXNMaW5rLmlkID0gXCJub3Rlc1wiO1xuICAgIGNvbnN0IHNldHRpbmdzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2V0dGluZ3NMaW5rLnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuICAgIHNldHRpbmdzTGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgICBzZXR0aW5nc0xpbmsuaWQgPSBcInNldHRpbmdzXCI7XG4gICAgXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQocHJvamVjdHNMaW5rKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChub3Rlc0xpbmspO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKHNldHRpbmdzTGluayk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaW5rcyk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHNPdmVydmlldyA9IChwcm9qZWN0c0xpc3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIF9fZGVsZXRlTWFpbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19wcm9qZWN0c092ZXJ2aWV3TWFpbihwcm9qZWN0c0xpc3QpKTtcbiAgfTtcblxuICBjb25zdCBfX3Byb2plY3RzT3ZlcnZpZXdNYWluID0gKHByb2plY3RzTGlzdCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChfX2NyZWF0ZVByb2plY3RDYXJkKHByb2plY3RzTGlzdFtpXSwgaSkpO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcIm5ldy1wcm9qZWN0XCIpO1xuICAgIGFkZE5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3RCdG4pO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH07XG5cbiAgY29uc3QgX19jcmVhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJwcm9qZWN0XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcm9qZWN0Rm9jdXMocHJvamVjdCwgaW5kZXgpKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIilcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gX19jcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0LCBpbmRleCk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAocHJvamVjdCwgY2FyZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9cIik7XG5cbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBlZGl0VGl0bGUubmFtZSA9IFwiZWRpdC10aXRsZVwiO1xuICAgIGVkaXRUaXRsZS5pZCA9IFwiZWRpdC10aXRsZVwiO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIGVkaXREZXNjcmlwdGlvbi5uYW1lID0gXCJlZGl0LWRlc2NyaXB0aW9uXCI7XG4gICAgZWRpdERlc2NyaXB0aW9uLmlkID0gXCJlZGl0LWRlc2NyaXB0aW9uXCI7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdG9yXCIpO1xuICAgIGNvbmZpcm1CdG4uaWQgPSBcInByb2plY3Qtc2F2ZVwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDIudGl0bGVcIik7XG4gICAgZWRpdFRpdGxlLnZhbHVlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuZGVzY3JpcHRpb25cIik7XG4gICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1lZGl0XCIpO1xuXG4gICAgY2FyZC5yZW1vdmVDaGlsZCh0aXRsZSk7XG4gICAgcHJvamVjdEluZm8ucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdEJ0bik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgcHJvamVjdC5zZXRUaXRsZShlZGl0VGl0bGUudmFsdWUpO1xuICAgICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRUaXRsZSk7XG4gICAgICBwcm9qZWN0SW5mby5yZW1vdmVDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICB9KTtcbiAgICBcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Rm9jdXMgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIF9fZGVsZXRlTWFpbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX19wcm9qZWN0Rm9jdXNNYWluKHByb2plY3QsIGluZGV4KSk7XG4gIH07XG5cbiAgY29uc3QgX19wcm9qZWN0Rm9jdXNNYWluID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChpbmRleCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBnb0JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdvQmFjay5jbGFzc0xpc3QuYWRkKFwicmV0dXJuXCIsIFwicmV0dXJuLXByb2plY3RzXCIpO1xuICAgIGdvQmFjay50ZXh0Q29udGVudCA9IFwiPC0gR28gQmFja1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ29CYWNrKTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBlZGl0QnRuLmlkID0gXCJwcm9qZWN0LWVkaXRcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBkZWxldGVCdG4uaWQgPSBcInByb2plY3QtZGVsZXRlXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5mb1wiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChfX2NyZWF0ZVRvZG9DYXJkKHByb2plY3QuZ2V0VG9kb0xpc3QoKVtpXSwgaSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1RvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZE5ld1RvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcIm5ldy10b2RvXCIpO1xuICAgIGFkZE5ld1RvZG9CdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE5ld1RvZG9CdG4pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCBfX2NyZWF0ZVRvZG9DYXJkID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGluZGV4LCBcImNhcmRcIiwgXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChpbmRleCwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0eXBlLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwidHlwZVwiKTtcbiAgICB0eXBlLnRleHRDb250ZW50ID0gdG9kby5nZXRUeXBlKCk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKGluZGV4LCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwiZHVlLWRhdGVcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwic3RhdHVzXCIsIHRvZG8uZ2V0U3RhdHVzKCkpO1xuXG4gICAgc3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2RvLmNoYW5nZVN0YXR1cygpO1xuICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZXBsYWNlKHN0YXR1cy5jbGFzc0xpc3RbMl0sIHRvZG8uZ2V0U3RhdHVzKCkpO1xuICAgIH0pO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0eXBlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2V4cGFuZFRvZG8odG9kbywgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfTtcblxuICBjb25zdCBhZGROZXdUb2RvID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5mb1wiKVxuICAgIGNvbnN0IG5ld1RvZG8gPSBfX2NyZWF0ZVRvZG9DYXJkKHRvZG8sIGluZGV4KTtcbiAgICB0b2Rvcy5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfTtcblxuICBjb25zdCBfX2V4cGFuZFRvZG8gPSAodG9kbywgY2FyZCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjaGVja2xpc3QuY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJjaGVja2xpc3RcIik7XG5cbiAgICBjb25zdCBsaXN0ID0gdG9kby5nZXRMaXN0KCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChfX2NyZWF0ZUxpc3RJdGVtKHRvZG8sIGkpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGRUb0xpc3QuY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJhZGQtY2hlY2tsaXN0LWl0ZW1cIik7XG4gICAgYWRkVG9MaXN0LnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgY2hlY2tsaXN0LmFwcGVuZENoaWxkKGFkZFRvTGlzdCk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrbGlzdCk7XG5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gX191bmRvRXhwYW5kVG9kbyh0b2RvLCBjYXJkKSwge29uY2U6IHRydWV9KTtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJidXR0b25zXCIpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJlZGl0b3JcIiwgXCJ0b2RvLWVkaXRcIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgXCJlZGl0b3JcIiwgXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICB9O1xuXG4gIGNvbnN0IF9fY3JlYXRlTGlzdEl0ZW0gPSAodG9kbywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwibGlzdC1pdGVtXCIpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwibGlzdC1uYW1lXCIsIHRvZG8uZ2V0TGlzdCgpW2luZGV4XS5jb21wbGV0ZWQpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0b2RvLmdldExpc3QoKVtpbmRleF0ubmFtZTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2RvLmNoZWNrSXRlbSh0b2RvLmdldExpc3QoKVtpbmRleF0pO1xuICAgICAgbmFtZS5jbGFzc0xpc3QucmVwbGFjZShuYW1lLmNsYXNzTGlzdFsyXSwgdG9kby5nZXRMaXN0KClbaW5kZXhdLmNvbXBsZXRlZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwiYnV0dG9uc1wiKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoaW5kZXgsIFwiZWRpdG9yXCIsIFwiY2hlY2tsaXN0LWVkaXRcIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChpbmRleCwgXCJlZGl0b3JcIiwgXCJjaGVja2xpc3QtZGVsZXRlXCIpO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIGNvbnN0IGFkZENoZWNrbGlzdEl0ZW0gPSAodG9kbywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBuZXdJdGVtID0gX19jcmVhdGVMaXN0SXRlbSh0b2RvLCB0b2RvLmdldExpc3QoKS5sZW5ndGggLTEpO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2luZGV4fSBjaGVja2xpc3QnXWApO1xuICAgIGNoZWNrbGlzdC5pbnNlcnRCZWZvcmUobmV3SXRlbSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aW5kZXh9IGFkZC1jaGVja2xpc3QtaXRlbSddYCkpXG4gIH07XG5cbiAgY29uc3QgZWRpdENoZWNrbGlzdEl0ZW0gPSAodG9kbywgY2FyZEluZGV4LCBpdGVtSW5kZXgpID0+IHtcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkSW5kZXh9IGNoZWNrbGlzdCddYCk7XG4gICAgXG4gICAgY29uc3QgaXRlbSA9IGNoZWNrbGlzdC5jaGlsZE5vZGVzW2l0ZW1JbmRleF07XG4gICAgY29uc3QgaXRlbU5hbWUgPSBpdGVtLmNoaWxkTm9kZXNbMF07XG4gICAgY29uc3QgYnV0dG9ucyA9IGl0ZW0uY2hpbGROb2Rlc1sxXTtcbiAgICBjb25zdCBlZGl0QnRuID0gYnV0dG9ucy5jaGlsZE5vZGVzWzBdO1xuXG4gICAgY29uc3QgZWRpdEl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXRJdGVtTmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZWRpdEl0ZW1OYW1lLm5hbWUgPSBcImVkaXQtaXRlbS1uYW1lXCI7XG4gICAgZWRpdEl0ZW1OYW1lLmlkID0gXCJlZGl0LWl0ZW0tbmFtZVwiO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBjb25maXJtQnRuLmlkID0gXCJjaGVja2xpc3Qtc2F2ZVwiO1xuXG4gICAgZWRpdEl0ZW1OYW1lLnZhbHVlID0gaXRlbU5hbWUudGV4dENvbnRlbnQ7XG5cbiAgICBpdGVtLnJlbW92ZUNoaWxkKGl0ZW1OYW1lKTtcbiAgICBidXR0b25zLnJlbW92ZUNoaWxkKGVkaXRCdG4pO1xuICAgIGl0ZW0uaW5zZXJ0QmVmb3JlKGVkaXRJdGVtTmFtZSwgYnV0dG9ucyk7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZG8uZWRpdEl0ZW0oaXRlbUluZGV4LCBlZGl0SXRlbU5hbWUudmFsdWUpO1xuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBlZGl0SXRlbU5hbWUudmFsdWU7XG5cbiAgICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoZWRpdEl0ZW1OYW1lKTtcbiAgICAgIGJ1dHRvbnMucmVtb3ZlQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgICBpdGVtLmluc2VydEJlZm9yZShpdGVtTmFtZSwgYnV0dG9ucyk7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIH0pXG4gICAgXG4gIH1cblxuICBjb25zdCByZW1vdmVDaGVja2xpc3RJdGVtID0gKGNhcmRJbmRleCwgaXRlbUluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZEluZGV4fSBjaGVja2xpc3QnXWApO1xuICAgIGNoZWNrbGlzdC5yZW1vdmVDaGlsZChjaGVja2xpc3QuY2hpbGROb2Rlc1tpdGVtSW5kZXhdKTtcblxuICAgIGZvcihsZXQgaSA9IHBhcnNlSW50KGl0ZW1JbmRleCk7IGkgPCBjaGVja2xpc3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gY2hlY2tsaXN0LmNoaWxkTm9kZXNbaV07XG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QucmVwbGFjZShsaXN0SXRlbS5jbGFzc0xpc3RbMF0sIGxpc3RJdGVtLmNsYXNzTGlzdCAtIDEpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzBdO1xuICAgICAgbGlzdE5hbWUuY2xhc3NMaXN0LnJlcGxhY2UobGlzdE5hbWUuY2xhc3NMaXN0WzBdLCBsaXN0TmFtZS5jbGFzc0xpc3RbMF0gLSAxKTtcbiAgICAgIGNvbnN0IGxpc3RCdXR0b25zID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1sxXTtcbiAgICAgIGxpc3RCdXR0b25zLmNsYXNzTGlzdC5yZXBsYWNlKGxpc3RCdXR0b25zLmNsYXNzTGlzdFswXSwgbGlzdEJ1dHRvbnMuY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICBsaXN0QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKGxpc3RCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdLCBsaXN0QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgbGlzdEJ1dHRvbnMuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QucmVwbGFjZShsaXN0QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSwgbGlzdEJ1dHRvbnMuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3RbMF0gLSAxKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBfX3VuZG9FeHBhbmRUb2RvID0gKHRvZG8sIGNhcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGJ1dHRvbnMnXWApO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBjaGVja2xpc3QnXWApXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZGVzY3JpcHRpb24nXWApO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoYnV0dG9ucyk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChjaGVja2xpc3QpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdGl0bGUnXWApO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fZXhwYW5kVG9kbyh0b2RvLCBjYXJkKSwge29uY2U6IHRydWV9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9ICh0b2RvLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBidXR0b25zJ11gKVxuXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZWRpdFRpdGxlLm5hbWUgPSBcImVkaXQtdGl0bGVcIjtcbiAgICBlZGl0VGl0bGUuaWQgPSBcImVkaXQtdGl0bGVcIjtcblxuICAgIGNvbnN0IGVkaXRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBlZGl0VHlwZS5uYW1lID0gXCJlZGl0LXR5cGVcIjtcbiAgICBlZGl0VHlwZS5pZCA9IFwiZWRpdC10eXBlXCI7XG4gICAgY29uc3Qgb3B0aW9uRXhlcmNpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbkV4ZXJjaXNlLnRleHRDb250ZW50ID0gXCJFeGVyY2lzZVwiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkV4ZXJjaXNlKTtcbiAgICBjb25zdCBvcHRpb25TZWxmSW1wcm92ZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvblNlbGZJbXByb3ZlbWVudC50ZXh0Q29udGVudCA9IFwiU2VsZi1JbXByb3ZlbWVudFwiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvblNlbGZJbXByb3ZlbWVudCk7XG4gICAgY29uc3Qgb3B0aW9uTGVhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbkxlYXJuaW5nLnRleHRDb250ZW50ID0gXCJMZWFybmluZ1wiO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkxlYXJuaW5nKTtcbiAgICBjb25zdCBvcHRpb25QZXJzb25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uUGVyc29uYWwudGV4dENvbnRlbnQgPSBcIlBlcnNvbmFsXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uUGVyc29uYWwpO1xuICAgIGNvbnN0IG9wdGlvbldvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbldvcmsudGV4dENvbnRlbnQgPSBcIldvcmtcIjtcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25Xb3JrKTtcbiAgICBjb25zdCBvcHRpb25TY2hvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvblNjaG9vbC50ZXh0Q29udGVudCA9IFwiU2Nob29sXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uU2Nob29sKTtcbiAgICBjb25zdCBvcHRpb25DbGVhbmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uQ2xlYW5pbmcudGV4dENvbnRlbnQgPSBcIkNsZWFuaW5nXCI7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uQ2xlYW5pbmcpO1xuICAgIGNvbnN0IG9wdGlvbk90aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25PdGhlci50ZXh0Q29udGVudCA9IFwiT3RoZXJcIjtcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25PdGhlcik7XG5cbiAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGVkaXRQcmlvcml0eS5uYW1lID0gXCJlZGl0LXByaW9yaXR5XCI7XG4gICAgZWRpdFByaW9yaXR5LmlkID0gXCJlZGl0LXByaW9yaXR5XCI7XG4gICAgY29uc3QgcHJpb3JpdHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eTEudGV4dENvbnRlbnQgPSBcIjFcIjtcbiAgICBjb25zdCBwcmlvcml0eTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5Mi50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgIGNvbnN0IHByaW9yaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHkzLnRleHRDb250ZW50ID0gXCIzXCI7XG4gICAgY29uc3QgcHJpb3JpdHk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eTQudGV4dENvbnRlbnQgPSBcIjRcIjtcbiAgICBjb25zdCBwcmlvcml0eTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5NS50ZXh0Q29udGVudCA9IFwiNVwiO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTEpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTIpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTMpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTQpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTUpO1xuICAgIGNvbnN0IGVkaXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXREdWVEYXRlLnR5cGUgPSBcImRhdGV0aW1lLWxvY2FsXCI7XG4gICAgZWRpdER1ZURhdGUubmFtZSA9IFwiZWRpdC1kdWUtZGF0ZVwiO1xuICAgIGVkaXREdWVEYXRlLmlkID0gXCJlZGl0LWR1ZS1kYXRlXCI7XG4gICAgZWRpdER1ZURhdGUubWluID0gXCIyMDIyLTA1LTAxXCI7XG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcImVkaXRvclwiKTtcbiAgICBjb25maXJtQnRuLmlkID0gXCJ0b2RvLXNhdmVcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcbiAgICBlZGl0VGl0bGUudmFsdWUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHR5cGUnXWApO1xuICAgIGVkaXRUeXBlLnZhbHVlID0gdHlwZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBwcmlvcml0eSddYCk7XG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHkudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBkdWUtZGF0ZSddYCk7XG4gICAgZWRpdER1ZURhdGUudmFsdWUgPSBkdWVEYXRlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGRlc2NyaXB0aW9uJ11gKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGVkaXRvciB0b2RvLWVkaXRgKTtcblxuICAgIGNhcmQucmVtb3ZlQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQodHlwZSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChwcmlvcml0eSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChkdWVEYXRlKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBidXR0b25zLnJlbW92ZUNoaWxkKGVkaXRCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUeXBlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRQcmlvcml0eSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RHVlRGF0ZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgIHRvZG8uc2V0VGl0bGUoZWRpdFRpdGxlLnZhbHVlKTtcbiAgICAgIHRvZG8uc2V0VHlwZShlZGl0VHlwZS52YWx1ZSk7XG4gICAgICB0b2RvLnNldFByaW9yaXR5KGVkaXRQcmlvcml0eS52YWx1ZSk7XG4gICAgICB0b2RvLnNldER1ZURhdGUoZWRpdER1ZURhdGUudmFsdWUpO1xuICAgICAgdG9kby5zZXREZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgIHR5cGUudGV4dENvbnRlbnQgPSB0b2RvLmdldFR5cGUoKTtcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdFR5cGUpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0UHJpb3JpdHkpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0RHVlRGF0ZSk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLnJlbW92ZUNoaWxkKGNvbmZpcm1CdG4pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHR5cGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbmZvXCIpO1xuICAgIGNvbnN0IGJhZENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aW5kZXh9IGNhcmQgdG9kbyddYCk7XG4gICAgcHJvamVjdEluZm8ucmVtb3ZlQ2hpbGQoYmFkQ2hpbGQpO1xuICAgIGNvbnN0IGNoaWxkcmVuTGVuZ3RoID0gcHJvamVjdEluZm8uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gcGFyc2VJbnQoaW5kZXgpICsgMTsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2l9IGNhcmQgdG9kbyddYCk7XG4gICAgICBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICB9XG4gICAgICBpZihjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGggPiA1KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aSAtIDF9IGJ1dHRvbnMnXWApO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBub3Rlc092ZXJ2aWV3ID0gKG5vdGVzTGlzdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgX19kZWxldGVNYWluKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChfX25vdGVzT3ZlcnZpZXdNYWluKG5vdGVzTGlzdCkpO1xuICB9O1xuXG4gIGNvbnN0IF9fbm90ZXNPdmVydmlld01haW4gPSAobm90ZXNMaXN0KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzLmNsYXNzTGlzdC5hZGQoXCJub3Rlc1wiKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub3Rlc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vdGVzLmFwcGVuZENoaWxkKF9fY3JlYXRlTm90ZUNhcmQobm90ZXNMaXN0W2ldLCBpKSk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG4gICAgY29uc3QgYWRkTmV3Tm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkTmV3Tm90ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIsIFwibmV3LW5vdGVcIik7XG4gICAgYWRkTmV3Tm90ZUJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkTmV3Tm90ZUJ0bik7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCBfX2NyZWF0ZU5vdGVDYXJkID0gKG5vdGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGluZGV4LCBcImNhcmRcIiwgXCJub3RlXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChpbmRleCwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5vdGUuZ2V0VGl0bGUoKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2V4cGFuZE5vdGUobm90ZSwgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld05vdGUgPSAobm90ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNcIilcbiAgICBjb25zdCBuZXdOb3RlID0gX19jcmVhdGVOb3RlQ2FyZChub3RlLCBpbmRleCk7XG4gICAgbm90ZXMuYXBwZW5kQ2hpbGQobmV3Tm90ZSk7XG4gIH07XG5cbiAgY29uc3QgX19leHBhbmROb3RlID0gKG5vdGUsIGNhcmQpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0aXRsZSddYCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sIFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX3VuZG9FeHBhbmROb3RlKG5vdGUsIGNhcmQpLCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCBcImJ1dHRvbnNcIik7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCBcImVkaXRvclwiLCBcIm5vdGUtZWRpdFwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCBcImVkaXRvclwiLCBcIm5vdGUtZGVsZXRlXCIpO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gIH07XG5cbiAgY29uc3QgX191bmRvRXhwYW5kTm90ZSA9IChub3RlLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBidXR0b25zJ11gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBkZXNjcmlwdGlvbiddYCk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChidXR0b25zKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2V4cGFuZE5vdGUobm90ZSwgY2FyZCksIHtvbmNlOiB0cnVlfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdE5vdGUgPSAobm90ZSwgY2FyZCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gYnV0dG9ucyddYClcblxuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIGVkaXRUaXRsZS5uYW1lID0gXCJlZGl0LXRpdGxlXCI7XG4gICAgZWRpdFRpdGxlLmlkID0gXCJlZGl0LXRpdGxlXCI7XG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXREZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZWRpdERlc2NyaXB0aW9uLm5hbWUgPSBcImVkaXQtZGVzY3JpcHRpb25cIjtcbiAgICBlZGl0RGVzY3JpcHRpb24uaWQgPSBcImVkaXQtZGVzY3JpcHRpb25cIjtcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0b3JcIik7XG4gICAgY29uZmlybUJ0bi5pZCA9IFwibm90ZS1zYXZlXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0aXRsZSddYCk7XG4gICAgZWRpdFRpdGxlLnZhbHVlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZGVzY3JpcHRpb24nXWApO1xuICAgIGVkaXREZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gZWRpdG9yIG5vdGUtZWRpdGApO1xuXG4gICAgY2FyZC5yZW1vdmVDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgYnV0dG9ucy5yZW1vdmVDaGlsZChlZGl0QnRuKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUaXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgIG5vdGUuc2V0VGl0bGUoZWRpdFRpdGxlLnZhbHVlKTtcbiAgICAgIG5vdGUuc2V0RGVzY3JpcHRpb24oZWRpdERlc2NyaXB0aW9uLnZhbHVlKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLmdldFRpdGxlKCk7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5vdGUuZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VGl0bGUpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgICAgYnV0dG9ucy5yZW1vdmVDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU5vdGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNcIik7XG4gICAgY29uc3QgYmFkQ2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtpbmRleH0gY2FyZCBub3RlJ11gKTtcbiAgICBub3Rlcy5yZW1vdmVDaGlsZChiYWRDaGlsZCk7XG4gICAgY29uc3QgY2hpbGRyZW5MZW5ndGggPSBub3Rlcy5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSBwYXJzZUludChpbmRleCkgKyAxOyBpIDwgY2hpbGRyZW5MZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2l9IGNhcmQgbm90ZSddYCk7XG4gICAgICBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRDaGlsZC5jaGlsZE5vZGVzW2pdLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdIC0gMSk7XG4gICAgICB9XG4gICAgICBpZihjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aSAtIDF9IGJ1dHRvbnMnXWApO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZXBsYWNlKGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzBdLCBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR0aW5nc092ZXJ2aWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgX19kZWxldGVNYWluKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChfX3NldHRpbmdzT3ZlcnZpZXdNYWluKCkpO1xuICB9O1xuXG4gIGNvbnN0IF9fc2V0dGluZ3NPdmVydmlld01haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuICBjb25zdCBfX2RlbGV0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbik7XG4gIH07XG5cbiAgcmV0dXJuIHtpbml0aWFsU2V0dXAsIHByb2plY3RzT3ZlcnZpZXcsIHByb2plY3RGb2N1cywgbm90ZXNPdmVydmlldywgc2V0dGluZ3NPdmVydmlldyxcbiAgICBhZGROZXdQcm9qZWN0LCBhZGROZXdOb3RlLCBhZGROZXdUb2RvLCBlZGl0UHJvamVjdCwgZWRpdFRvZG8sIHJlbW92ZVRvZG8sIGVkaXROb3RlLCBcbiAgICByZW1vdmVOb3RlLCBhZGRDaGVja2xpc3RJdGVtLCBlZGl0Q2hlY2tsaXN0SXRlbSwgcmVtb3ZlQ2hlY2tsaXN0SXRlbX07XG59KSgpO1xuXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyfTsiLCJjb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHR5cGUpID0+IHtcbiAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICBsZXQgbGlzdCA9IFtdO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZHVlRGF0ZTtcbiAgfTtcbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG4gICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH07XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9O1xuICBjb25zdCBnZXRUeXBlID0gKCkgPT4ge1xuICAgIHJldHVybiB0eXBlO1xuICB9O1xuICBjb25zdCBzZXRUeXBlID0gKG5ld1R5cGUpID0+IHtcbiAgICB0eXBlID0gbmV3VHlwZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoKSA9PiB7XG4gICAgc3RhdHVzID0gIXN0YXR1cztcbiAgfTtcbiAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0dXM7XG4gIH07XG5cbiAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcbiAgY29uc3QgYWRkSXRlbSA9ICh0aXRsZSkgPT4ge1xuICAgIGxpc3QucHVzaCh7bmFtZTogdGl0bGUsIGNvbXBsZXRlZDogZmFsc2V9KTtcbiAgfTtcbiAgY29uc3QgZWRpdEl0ZW0gPSAoaW5kZXgsIG5ld1RpdGxlKSA9PiB7XG4gICAgbGlzdFtpbmRleF0ubmFtZSA9IG5ld1RpdGxlO1xuICB9XG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gIH07XG4gIGNvbnN0IGNoZWNrSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgaXRlbS5jb21wbGV0ZWQgPSAhKGl0ZW0uY29tcGxldGVkKTtcbiAgfTtcblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBcbiAgICBzZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIGdldFR5cGUsIHNldFR5cGUsIGNoYW5nZVN0YXR1cyxcbiAgICBnZXRTdGF0dXMsIGdldExpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIGNoZWNrSXRlbSwgZWRpdEl0ZW19O1xufTtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH1cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvID0gKG5ld1RvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuICB9O1xuICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBnZXRUb2RvTGlzdCwgXG4gICAgYWRkVG9kbywgcmVtb3ZlVG9kb307XG59XG5cbmNvbnN0IG5vdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9ufTtcbn1cblxuZXhwb3J0IHt0b2RvLCBwcm9qZWN0LCBub3RlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7dG9kbywgcHJvamVjdCwgbm90ZX0gZnJvbSBcIi4vdG9kby1jcmVhdGUuanNcIjtcbmltcG9ydCB7ZGlzcGxheUNvbnRyb2xsZXJ9IGZyb20gXCIuL2Rpc3BsYXktY29udHJvbGxlclwiO1xuXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcbmxldCBub3RlTGlzdCA9IFtdO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdFwiLCBcIkRlZmF1bHQgcHJvamVjdFwiKTtcbmxldCBmaXJzdFRvZG8gPSB0b2RvKFwiRmlyc3QgdG9kb1wiLCBcIlRoaXMgdG9kbyB3aWxsIGhlbHAgc2V0IHVwIHRoZSBsYXlvdXQgb2YgdGhlIHNpdGVcIiwgXCJzYXR1cmRheVwiLCA1LCBcIkV4ZXJjaXNlXCIpO1xuZmlyc3RUb2RvLmFkZEl0ZW0oXCJXcml0ZSBhIGNoZWNrbGlzdFwiKTtcbmZpcnN0VG9kby5hZGRJdGVtKFwiQWRkIGl0ZW1zIHRvIGNoZWNrbGlzdFwiKTtcbmZpcnN0VG9kby5hZGRJdGVtKFwiUHV0IHRoZSB0b2RvIGluIHRoZSBwcm9qZWN0XCIpO1xuZmlyc3RUb2RvLmFkZEl0ZW0oXCJHZXQgdGhlIGxheW91dCB3b3JraW5nXCIpO1xuZGVmYXVsdFByb2plY3QuYWRkVG9kbyhmaXJzdFRvZG8pO1xubGV0IHNlY29uZFRvZG8gPSB0b2RvKFwiU2Vjb25kIHRvZG9cIiwgXCJUaGlzIHRvZG8gd2lsbCBhbHNvIGhlbHAgc2V0IHVwIHRoZSBsYXlvdXQgb2YgdGhlIHNpdGVcIiwgXCIxMi0yMy00NVwiLCA1LCBcIkV4ZXJjaXNlXCIpO1xuc2Vjb25kVG9kby5hZGRJdGVtKFwiV3JpdGUgYSBjaGVja2xpc3RcIik7XG5zZWNvbmRUb2RvLmFkZEl0ZW0oXCJBbHNvIGhlbHBcIik7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvKHNlY29uZFRvZG8pO1xucHJvamVjdExpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbmxldCBkZWZhdWx0MiA9IHByb2plY3QoXCJUZXN0XCIsIFwiVGhpcyBpcyBhIHRlc3RcIik7XG5sZXQgZGVmYXVsdDMgPSBwcm9qZWN0KFwiTGF5b3V0IEhlbHBlclwiLCBcIlRoZXNlIGFyZSBhZGRlZCB0byBhc3NpdCB3aXRoIGxheW91dCBjcmVhdGlvblwiKTtcbmxldCBkZWZhdWx0NCA9IHByb2plY3QoXCJHZXQgb24gdGhlIG1vc3Rlc3QgY29ycmVjdCB0cmFja1wiLCBcIllldCBhbm90aGVyIGhlbHBlclwiKTtcbnByb2plY3RMaXN0LnB1c2goZGVmYXVsdDIpO1xucHJvamVjdExpc3QucHVzaChkZWZhdWx0Myk7XG5wcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHQ0KTtcblxubGV0IG5vdGUxID0gbm90ZShcIk5vdGUgdGVzdGVyXCIsIFwiRGF5IDkwNjg3LCBJJ3ZlIHNvbWVob3cga2VwdCB0cmFjayBvZiB0aGUgZGF5IGRlc3BpdGUgdGhpcyBiZWluZyBteSBmaXJzdCBub3RlLiBUaGF0IGlzIGFsbCwgSSdtIGp1c3QgaW1wcmVzc2VkLlwiKTtcbm5vdGVMaXN0LnB1c2gobm90ZTEpO1xubGV0IG5vdGUyID0gbm90ZShcIllldCBBbm90aGVyIE5vdGUgdGVzdGVyXCIsIFwiRGF5IDcsIEkndmUgc29tZWhvdyBrZXB0IHRyYWNrIG9mIHRoZSBkYXkgZGVzcGl0ZSB0aGlzIGJlaW5nIG15IHNlY29uZCBub3RlLiBUaGF0IGlzIGFsbCwgSSdtIGp1c3QgaW1wcmVzc2VkLlwiKTtcbm5vdGVMaXN0LnB1c2gobm90ZTIpO1xuXG5kaXNwbGF5Q29udHJvbGxlci5pbml0aWFsU2V0dXAocHJvamVjdExpc3QpO1xuXG5jb25zdCBwcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xucHJvamVjdHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5Q29udHJvbGxlci5wcm9qZWN0c092ZXJ2aWV3KHByb2plY3RMaXN0KSk7XG5cbmNvbnN0IG5vdGVzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIik7XG5ub3Rlc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlDb250cm9sbGVyLm5vdGVzT3ZlcnZpZXcobm90ZUxpc3QpKTtcblxuY29uc3Qgc2V0dGluZ3NMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR0aW5nc1wiKTtcbnNldHRpbmdzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheUNvbnRyb2xsZXIuc2V0dGluZ3NPdmVydmlldygpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYucmV0dXJuLXByb2plY3RzXCIpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucHJvamVjdHNPdmVydmlldyhwcm9qZWN0TGlzdCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5uZXctcHJvamVjdFwiKSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KFwiTmV3IFByb2plY3RcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld1Byb2plY3QobmV3UHJvamVjdCwgcHJvamVjdExpc3QubGVuZ3RoIC0gMSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5uZXctbm90ZVwiKSkge1xuICAgIGNvbnN0IG5ld05vdGUgPSBwcm9qZWN0KFwiTmV3IE5vdGVcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBub3RlTGlzdC5wdXNoKG5ld05vdGUpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld05vdGUobmV3Tm90ZSwgbm90ZUxpc3QubGVuZ3RoIC0gMSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5uZXctdG9kb1wiKSkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKFwiTmV3IFRvZG9cIiwgXCJEZXNjcmlwdGlvblwiLCBcIlwiLCA1LCBcIlNlbGYtSW1wcm92ZW1lbnRcIik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdXTtcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld1RvZG8obmV3VG9kbywgY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKS5sZW5ndGggLSAxKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2I3Byb2plY3QtZWRpdFwiKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmVkaXRQcm9qZWN0KHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF1dLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYjcHJvamVjdC1kZWxldGVcIikpIHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLmNsYXNzTGlzdFswXSwgMSk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucHJvamVjdHNPdmVydmlldyhwcm9qZWN0TGlzdCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi50b2RvLWVkaXRcIikpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0VG9kbyhwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdXS5nZXRUb2RvTGlzdCgpW2UudGFyZ2V0LmNsYXNzTGlzdFswXV0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2UudGFyZ2V0LmNsYXNzTGlzdFswXX0gY2FyZCB0b2RvJ11gKSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi50b2RvLWRlbGV0ZVwiKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZVRvZG8oZS50YXJnZXQuY2xhc3NMaXN0WzBdKTtcbiAgICBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdXS5yZW1vdmVUb2RvKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcInAuYWRkLWNoZWNrbGlzdC1pdGVtXCIpKSB7XG4gICAgcHJvamVjdExpc3RbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLmNsYXNzTGlzdFswXV0uZ2V0VG9kb0xpc3QoKVtlLnRhcmdldC5jbGFzc0xpc3RbMF1dLmFkZEl0ZW0oXCJOZXcgaXRlbVwiKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hZGRDaGVja2xpc3RJdGVtKHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF1dLmdldFRvZG9MaXN0KClbZS50YXJnZXQuY2xhc3NMaXN0WzBdXSwgZS50YXJnZXQuY2xhc3NMaXN0WzBdKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBpZihlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKFwiZGl2LmNoZWNrbGlzdC1lZGl0XCIpKSB7XG4gICAgY29uc3QgY2FyZEluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IGxpc3RJbmRleCA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF1dLmdldFRvZG9MaXN0KClbY2FyZEluZGV4XTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0Q2hlY2tsaXN0SXRlbShjdXJyZW50VG9kbywgY2FyZEluZGV4LCBsaXN0SW5kZXgpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYuY2hlY2tsaXN0LWRlbGV0ZVwiKSkge1xuICAgIGNvbnN0IGNhcmRJbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdFswXTtcbiAgICBjb25zdCBsaXN0SW5kZXggPSBlLnRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlQ2hlY2tsaXN0SXRlbShjYXJkSW5kZXgsIGxpc3RJbmRleCk7XG4gICAgY29uc3QgY3VycmVudFRvZG8gPSBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuY2xhc3NMaXN0WzBdXS5nZXRUb2RvTGlzdCgpW2NhcmRJbmRleF07XG4gICAgY3VycmVudFRvZG8ucmVtb3ZlSXRlbShjdXJyZW50VG9kby5nZXRMaXN0KClbbGlzdEluZGV4XSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcyhcImRpdi5ub3RlLWVkaXRcIikpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0Tm90ZShub3RlTGlzdFtlLnRhcmdldC5jbGFzc0xpc3RbMF1dLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtlLnRhcmdldC5jbGFzc0xpc3RbMF19IGNhcmQgbm90ZSddYCkpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJkaXYubm90ZS1kZWxldGVcIikpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVOb3RlKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gICAgbm90ZUxpc3Quc3BsaWNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKS5jbGFzc0xpc3RbMF0sIDEpO1xuICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=