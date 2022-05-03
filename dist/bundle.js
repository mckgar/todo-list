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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayController = (() => {
  const deleteMain = () => {
    const content = document.querySelector('#content');
    const main = document.querySelector('#main');
    content.removeChild(main);
  };

  const sidebarCreate = () => {
    const sidebar = document.createElement('nav');
    sidebar.id = 'sidebar';

    const title = document.createElement('h1');
    title.textContent = 'title tk';
    const links = document.createElement('div');
    links.id = 'links';
    const projectsLink = document.createElement('div');
    projectsLink.textContent = 'Projects';
    projectsLink.classList.add('link');
    projectsLink.id = 'projects';
    const notesLink = document.createElement('div');
    notesLink.textContent = 'Notes';
    notesLink.classList.add('link');
    notesLink.id = 'notes';
    const settingsLink = document.createElement('div');
    settingsLink.textContent = 'Settings';
    settingsLink.classList.add('link');
    settingsLink.id = 'settings';

    sidebar.appendChild(title);
    links.appendChild(projectsLink);
    links.appendChild(notesLink);
    links.appendChild(settingsLink);
    sidebar.appendChild(links);
    return sidebar;
  };

  const createListItem = (todo, index) => {
    const card = document.createElement('div');
    card.classList.add(index, 'list-item');
    const name = document.createElement('p');
    name.classList.add(index, 'list-name', todo.getList()[index].completed);
    name.textContent = todo.getList()[index].name;

    card.appendChild(name);

    name.addEventListener('click', () => {
      todo.checkItem(index);
      name.classList.replace(name.classList[2], todo.getList()[index].completed);
    });

    const buttons = document.createElement('div');
    buttons.classList.add(index, 'buttons');
    const editBtn = document.createElement('div');
    editBtn.classList.add(index, 'editor', 'checklist-edit');
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add(index, 'editor', 'checklist-delete');
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    card.appendChild(buttons);

    return card;
  };

  const expandTodo = (todo, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement('p');
    description.classList.add(card.classList[0], 'description');
    description.textContent = todo.getDescription();

    const checklist = document.createElement('ul');
    checklist.classList.add(card.classList[0], 'checklist');

    const list = todo.getList();
    for (let i = 0; i < list.length; i += 1) {
      checklist.appendChild(createListItem(todo, i));
    }

    const addToList = document.createElement('p');
    addToList.classList.add(card.classList[0], 'add-checklist-item');
    addToList.textContent = '+';
    checklist.appendChild(addToList);

    card.appendChild(description);
    card.appendChild(checklist);

    title.addEventListener('click', () => undoExpandTodo(todo, card), { once: true });

    const buttons = document.createElement('div');
    buttons.classList.add(card.classList[0], 'todo', 'buttons');
    const editBtn = document.createElement('div');
    editBtn.classList.add(card.classList[0], 'editor', 'todo-edit');
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add(card.classList[0], 'editor', 'todo-delete');
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
  };

  const undoExpandTodo = (todo, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} todo buttons']`);
    const checklist = document.querySelector(`[class = '${card.classList[0]} checklist']`);
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(checklist);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener('click', () => expandTodo(todo, card), { once: true });
  };

  const createTodoCard = (todo, index) => {
    const card = document.createElement('div');
    card.classList.add(index, 'card', 'todo');

    const title = document.createElement('h3');
    title.classList.add(index, 'title');
    title.textContent = todo.getTitle();
    const type = document.createElement('div');
    type.classList.add(index, 'type');
    type.textContent = todo.getType();
    const priority = document.createElement('p');
    priority.classList.add(index, 'priority');
    priority.textContent = todo.getPriority();
    const dueDate = document.createElement('p');
    dueDate.classList.add(index, 'due-date');
    dueDate.textContent = todo.getDueDate();
    const status = document.createElement('div');
    status.classList.add(index, 'status', todo.getStatus());

    status.addEventListener('click', () => {
      todo.changeStatus();
      status.classList.replace(status.classList[2], todo.getStatus());
    });

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(priority);
    card.appendChild(dueDate);
    card.appendChild(status);

    title.addEventListener('click', () => expandTodo(todo, card), { once: true });

    return card;
  };

  const projectFocusMain = (project, index) => {
    const main = document.createElement('div');
    main.id = 'main';
    main.classList.add(index);

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = project.getTitle();
    main.appendChild(title);

    const goBack = document.createElement('div');
    goBack.classList.add('return', 'return-projects');
    goBack.textContent = '<- Go Back';
    main.appendChild(goBack);

    const editBtn = document.createElement('div');
    editBtn.classList.add('editor');
    editBtn.id = 'project-edit';
    main.appendChild(editBtn);

    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('editor');
    deleteBtn.id = 'project-delete';
    main.appendChild(deleteBtn);

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');
    const description = document.createElement('p');
    description.classList.add('project', 'description');
    description.textContent = project.getDescription();
    projectInfo.appendChild(description);

    for (let i = 0; i < project.getTodoList().length; i += 1) {
      projectInfo.appendChild(createTodoCard(project.getTodoList()[i], i));
    }

    const addNewTodoBtn = document.createElement('div');
    addNewTodoBtn.classList.add('add', 'new-todo');
    addNewTodoBtn.textContent = '+';
    main.appendChild(addNewTodoBtn);

    main.appendChild(projectInfo);

    return main;
  };

  const projectFocus = (project, index) => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(projectFocusMain(project, index));
  };

  const createProjectCard = (project, index) => {
    const card = document.createElement('div');
    card.classList.add('card', 'project');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = project.getTitle();
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = project.getDescription();

    card.appendChild(title);
    card.appendChild(description);

    card.addEventListener('click', () => projectFocus(project, index));

    return card;
  };

  const projectsOverviewMain = (projectsList) => {
    const main = document.createElement('div');
    main.id = 'main';

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Projects';
    main.appendChild(title);

    const projects = document.createElement('div');
    projects.classList.add('projects');

    for (let i = 0; i < projectsList.length; i += 1) {
      projects.appendChild(createProjectCard(projectsList[i], i));
    }
    main.appendChild(projects);

    const addNewProjectBtn = document.createElement('div');
    addNewProjectBtn.classList.add('add', 'new-project');
    addNewProjectBtn.textContent = '+';
    main.appendChild(addNewProjectBtn);

    return main;
  };

  const projectsOverview = (projectsList) => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(projectsOverviewMain(projectsList));
  };

  const initialSetup = (projectList) => {
    const body = document.querySelector('body');
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    content.appendChild(sidebarCreate());
    content.appendChild(projectsOverviewMain(projectList));
  };

  const addNewProject = (project, index) => {
    const projects = document.querySelector('.projects');
    const newProject = createProjectCard(project, index);
    projects.appendChild(newProject);
  };

  const editProject = (project, card) => {
    const projectInfo = document.querySelector('.project-info');

    const editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.name = 'edit-title';
    editTitle.id = 'edit-title';
    const editDescription = document.createElement('input');
    editDescription.type = 'text';
    editDescription.name = 'edit-description';
    editDescription.id = 'edit-description';
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor');
    confirmBtn.id = 'project-save';

    const title = document.querySelector('h2.title');
    editTitle.value = title.textContent;
    const description = document.querySelector('.project.description');
    editDescription.value = description.textContent;
    const editBtn = document.querySelector('#project-edit');

    card.removeChild(title);
    projectInfo.removeChild(description);
    card.removeChild(editBtn);
    card.appendChild(editTitle);
    projectInfo.appendChild(editDescription);
    card.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
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

  const addNewTodo = (todo, index) => {
    const todos = document.querySelector('.project-info');
    const newTodo = createTodoCard(todo, index);
    todos.appendChild(newTodo);
  };

  const addChecklistItem = (todo, index) => {
    const newItem = createListItem(todo, todo.getList().length - 1);
    const checklist = document.querySelector(`[class = '${index} checklist']`);
    checklist.insertBefore(newItem, document.querySelector(`[class = '${index} add-checklist-item']`));
  };

  const editChecklistItem = (todo, cardIndex, itemIndex) => {
    const checklist = document.querySelector(`[class = '${cardIndex} checklist']`);

    const item = checklist.childNodes[itemIndex];
    const itemName = item.childNodes[0];
    const buttons = item.childNodes[1];
    const editBtn = buttons.childNodes[0];

    const editItemName = document.createElement('input');
    editItemName.type = 'text';
    editItemName.name = 'edit-item-name';
    editItemName.id = 'edit-item-name';
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor');
    confirmBtn.id = 'checklist-save';

    editItemName.value = itemName.textContent;

    item.removeChild(itemName);
    buttons.removeChild(editBtn);
    item.insertBefore(editItemName, buttons);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
      todo.editItem(itemIndex, editItemName.value);
      itemName.textContent = editItemName.value;

      item.removeChild(editItemName);
      buttons.removeChild(confirmBtn);
      item.insertBefore(itemName, buttons);
      buttons.appendChild(editBtn);
    });
  };

  const removeChecklistItem = (cardIndex, itemIndex) => {
    const checklist = document.querySelector(`[class = '${cardIndex} checklist']`);
    checklist.removeChild(checklist.childNodes[itemIndex]);

    for (let i = parseInt(itemIndex, 10); i < checklist.childNodes.length - 1; i += 1) {
      const listItem = checklist.childNodes[i];
      listItem.classList.replace(
        listItem.classList[0],
        listItem.classList - 1,
      );
      const listName = listItem.childNodes[0];
      listName.classList.replace(
        listName.classList[0],
        listName.classList[0] - 1,
      );
      const listButtons = listItem.childNodes[1];
      listButtons.classList.replace(
        listButtons.classList[0],
        listButtons.classList[0] - 1,
      );
      listButtons.childNodes[0].classList.replace(
        listButtons.childNodes[0].classList[0],
        listButtons.childNodes[0].classList[0] - 1,
      );
      listButtons.childNodes[1].classList.replace(
        listButtons.childNodes[1].classList[0],
        listButtons.childNodes[1].classList[0] - 1,
      );
    }
  };

  const editTodo = (todo, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} todo buttons']`);

    const editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.name = 'edit-title';
    editTitle.id = 'edit-title';

    const editType = document.createElement('select');
    editType.name = 'edit-type';
    editType.id = 'edit-type';
    const optionExercise = document.createElement('option');
    optionExercise.textContent = 'Exercise';
    editType.appendChild(optionExercise);
    const optionSelfImprovement = document.createElement('option');
    optionSelfImprovement.textContent = 'Self-Improvement';
    editType.appendChild(optionSelfImprovement);
    const optionLearning = document.createElement('option');
    optionLearning.textContent = 'Learning';
    editType.appendChild(optionLearning);
    const optionPersonal = document.createElement('option');
    optionPersonal.textContent = 'Personal';
    editType.appendChild(optionPersonal);
    const optionWork = document.createElement('option');
    optionWork.textContent = 'Work';
    editType.appendChild(optionWork);
    const optionSchool = document.createElement('option');
    optionSchool.textContent = 'School';
    editType.appendChild(optionSchool);
    const optionCleaning = document.createElement('option');
    optionCleaning.textContent = 'Cleaning';
    editType.appendChild(optionCleaning);
    const optionOther = document.createElement('option');
    optionOther.textContent = 'Other';
    editType.appendChild(optionOther);

    const editPriority = document.createElement('select');
    editPriority.name = 'edit-priority';
    editPriority.id = 'edit-priority';
    const priority1 = document.createElement('option');
    priority1.textContent = '1';
    const priority2 = document.createElement('option');
    priority2.textContent = '2';
    const priority3 = document.createElement('option');
    priority3.textContent = '3';
    const priority4 = document.createElement('option');
    priority4.textContent = '4';
    const priority5 = document.createElement('option');
    priority5.textContent = '5';
    editPriority.appendChild(priority1);
    editPriority.appendChild(priority2);
    editPriority.appendChild(priority3);
    editPriority.appendChild(priority4);
    editPriority.appendChild(priority5);
    const editDueDate = document.createElement('input');
    editDueDate.type = 'datetime-local';
    editDueDate.name = 'edit-due-date';
    editDueDate.id = 'edit-due-date';
    editDueDate.min = '2022-05-01';
    const editDescription = document.createElement('textarea');
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor');
    confirmBtn.id = 'todo-save';

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

    confirmBtn.addEventListener('click', () => {
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
    const projectInfo = document.querySelector('.project-info');
    const badChild = document.querySelector(`[class = '${index} card todo']`);
    projectInfo.removeChild(badChild);
    const childrenLength = projectInfo.childNodes.length;
    for (let i = parseInt(index, 10) + 1; i < childrenLength; i += 1) {
      const currentChild = document.querySelector(`[class = '${i} card todo']`);
      currentChild.classList.replace(
        currentChild.classList[0],
        currentChild.classList[0] - 1,
      );
      for (let j = 0; j < currentChild.childNodes.length; j += 1) {
        currentChild.childNodes[j].classList.replace(
          currentChild.childNodes[j].classList[0],
          currentChild.childNodes[j].classList[0] - 1,
        );
      }
      if (currentChild.childNodes.length > 5) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(
          currentButtons.childNodes[0].classList[0],
          currentButtons.childNodes[0].classList[0] - 1,
        );
        currentButtons.childNodes[1].classList.replace(
          currentButtons.childNodes[1].classList[0],
          currentButtons.childNodes[1].classList[0] - 1,
        );
      }
    }
  };

  const expandNote = (note, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement('p');
    description.classList.add(card.classList[0], 'description');
    description.textContent = note.getDescription();

    card.appendChild(description);

    title.addEventListener('click', () => undoExpandNote(note, card), { once: true });

    const buttons = document.createElement('div');
    buttons.classList.add(card.classList[0], 'buttons');
    const editBtn = document.createElement('div');
    editBtn.classList.add(card.classList[0], 'editor', 'note-edit');
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add(card.classList[0], 'editor', 'note-delete');
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
  };

  const undoExpandNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener('click', () => expandNote(note, card), { once: true });
  };

  const createNoteCard = (note, index) => {
    const card = document.createElement('div');
    card.classList.add(index, 'card', 'note');

    const title = document.createElement('h3');
    title.classList.add(index, 'title');
    title.textContent = note.getTitle();

    title.addEventListener('click', () => expandNote(note, card), { once: true });

    card.appendChild(title);

    return card;
  };

  const notesOverviewMain = (notesList) => {
    const main = document.createElement('div');
    main.id = 'main';

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Notes';
    main.appendChild(title);

    const notes = document.createElement('div');
    notes.classList.add('notes');

    for (let i = 0; i < notesList.length; i += 1) {
      notes.appendChild(createNoteCard(notesList[i], i));
    }
    main.appendChild(notes);

    const addNewNoteBtn = document.createElement('div');
    addNewNoteBtn.classList.add('add', 'new-note');
    addNewNoteBtn.textContent = '+';
    main.appendChild(addNewNoteBtn);

    return main;
  };

  const notesOverview = (notesList) => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(notesOverviewMain(notesList));
  };

  const addNewNote = (note, index) => {
    const notes = document.querySelector('.notes');
    const newNote = createNoteCard(note, index);
    notes.appendChild(newNote);
  };

  const editNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);

    const editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.name = 'edit-title';
    editTitle.id = 'edit-title';
    const editDescription = document.createElement('input');
    editDescription.type = 'text';
    editDescription.name = 'edit-description';
    editDescription.id = 'edit-description';
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor');
    confirmBtn.id = 'note-save';

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

    confirmBtn.addEventListener('click', () => {
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
    const notes = document.querySelector('.notes');
    const badChild = document.querySelector(`[class = '${index} card note']`);
    notes.removeChild(badChild);
    const childrenLength = notes.childNodes.length;
    for (let i = parseInt(index, 10) + 1; i < childrenLength + 1; i += 1) {
      const currentChild = document.querySelector(`[class = '${i} card note']`);
      currentChild.classList.replace(currentChild.classList[0], currentChild.classList[0] - 1);
      for (let j = 0; j < currentChild.childNodes.length; j += 1) {
        currentChild.childNodes[j].classList.replace(
          currentChild.childNodes[j].classList[0],
          currentChild.childNodes[j].classList[0] - 1,
        );
      }
      if (currentChild.childNodes.length > 1) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(
          currentButtons.childNodes[0].classList[0],
          currentButtons.childNodes[0].classList[0] - 1,
        );
        currentButtons.childNodes[1].classList.replace(
          currentButtons.childNodes[1].classList[0],
          currentButtons.childNodes[1].classList[0] - 1,
        );
      }
    }
  };

  const settingsOverviewMain = () => {
    const main = document.createElement('div');
    main.id = 'main';

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Settings';
    main.appendChild(title);

    return main;
  };

  const settingsOverview = () => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(settingsOverviewMain());
  };

  return {
    initialSetup,
    projectsOverview,
    projectFocus,
    notesOverview,
    settingsOverview,
    addNewProject,
    addNewNote,
    addNewTodo,
    editProject,
    editTodo,
    removeTodo,
    editNote,
    removeNote,
    addChecklistItem,
    editChecklistItem,
    removeChecklistItem,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


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
const todo = (initTitle, initDescription, initDueDate, initPriority, initType) => {
  let title = initTitle;
  let description = initDescription;
  let dueDate = initDueDate;
  let priority = initPriority;
  let type = initType;
  let status = false;
  const list = [];

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => description;
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getDueDate = () => dueDate;
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const getPriority = () => priority;
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const getType = () => type;
  const setType = (newType) => {
    type = newType;
  };

  const changeStatus = () => {
    status = !status;
  };
  const getStatus = () => status;

  const getList = () => list;
  const addItem = (itemTitle) => {
    list.push({ name: itemTitle, completed: false });
  };
  const editItem = (index, newTitle) => {
    list[index].name = newTitle;
  };
  const removeItem = (item) => {
    list.splice(list.indexOf(item), 1);
  };
  const checkItem = (index) => {
    list[index].completed = !(list[index].completed);
  };

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getType,
    setType,
    changeStatus,
    getStatus,
    getList,
    addItem,
    removeItem,
    checkItem,
    editItem,
  };
};

const project = (initTitle, initDescription) => {
  let title = initTitle;
  let description = initDescription;
  const todoList = [];

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => description;
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getTodoList = () => todoList;

  const addTodo = (newTodo) => {
    todoList.push(newTodo);
  };
  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getTodoList,
    addTodo,
    removeTodo,
  };
};

const note = (initTitle, initDescription) => {
  let title = initTitle;
  let description = initDescription;
  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => description;
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  return {
    getTitle, setTitle, getDescription, setDescription,
  };
};




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
/* harmony import */ var _todo_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-create */ "./src/todo-create.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");




const projectList = [];
const noteList = [];

_display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].initialSetup(projectList);

const projectsLink = document.querySelector('#projects');
projectsLink.addEventListener('click', () => _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].projectsOverview(projectList));

const notesLink = document.querySelector('#notes');
notesLink.addEventListener('click', () => _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].notesOverview(noteList));

const settingsLink = document.querySelector('#settings');
settingsLink.addEventListener('click', () => _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].settingsOverview());

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.return-projects')) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].projectsOverview(projectList);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.new-project')) {
    const newProject = (0,_todo_create__WEBPACK_IMPORTED_MODULE_1__.project)('New Project', 'Description');
    projectList.push(newProject);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addNewProject(newProject, projectList.length - 1);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div#project-edit')) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].editProject(
      projectList[document.querySelector('#main').classList[0]],
      document.querySelector('#main'),
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div#project-delete')) {
    projectList.splice(document.querySelector('#main').classList[0], 1);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].projectsOverview(projectList);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.new-todo')) {
    const newTodo = (0,_todo_create__WEBPACK_IMPORTED_MODULE_1__.todo)('New Todo', 'Description', '', 5, 'Self-Improvement');
    const currentProject = projectList[document.querySelector('#main').classList[0]];
    currentProject.addTodo(newTodo);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addNewTodo(newTodo, currentProject.getTodoList().length - 1);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.todo-edit')) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].editTodo(
      projectList[document.querySelector('#main').classList[0]].getTodoList()[e.target.classList[0]],
      document.querySelector(`[class = '${e.target.classList[0]} card todo']`),
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.todo-delete')) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeTodo(e.target.classList[0]);
    projectList[document.querySelector('#main').classList[0]].removeTodo(e.target.classList[0]);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('p.add-checklist-item')) {
    projectList[document.querySelector('#main').classList[0]].getTodoList()[e.target.classList[0]].addItem('New item');
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addChecklistItem(
      projectList[document.querySelector('#main').classList[0]].getTodoList()[e.target.classList[0]],
      e.target.classList[0],
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.checklist-edit')) {
    const cardIndex = e.target.parentNode.parentNode.parentNode.classList[0];
    const listIndex = e.target.classList[0];
    const currentTodo = projectList[document.querySelector('#main').classList[0]].getTodoList()[cardIndex];
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].editChecklistItem(currentTodo, cardIndex, listIndex);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.checklist-delete')) {
    const cardIndex = e.target.parentNode.parentNode.parentNode.classList[0];
    const listIndex = e.target.classList[0];
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeChecklistItem(cardIndex, listIndex);
    const currentTodo = projectList[document.querySelector('#main').classList[0]].getTodoList()[cardIndex];
    currentTodo.removeItem(currentTodo.getList()[listIndex]);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.new-note')) {
    const newNote = (0,_todo_create__WEBPACK_IMPORTED_MODULE_1__.note)('New Note', 'Description');
    noteList.push(newNote);
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addNewNote(newNote, noteList.length - 1);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.note-edit')) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].editNote(
      noteList[e.target.classList[0]],
      document.querySelector(`[class = '${e.target.classList[0]} card note']`),
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.note-delete')) {
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeNote(e.target.classList[0]);
    noteList.splice(document.querySelector('#main').classList[0], 1);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELE9BQU87QUFDakUsd0VBQXdFLE9BQU87QUFDL0U7O0FBRUE7QUFDQSwwREFBMEQsV0FBVzs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsMERBQTBELFdBQVc7QUFDckU7O0FBRUEsMENBQTBDLHFDQUFxQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxtQkFBbUI7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksb0VBQTBCO0FBQzlCO0FBQ0EsMENBQTBDLHVCQUF1QjtBQUNqRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxzRUFBNEI7QUFDaEM7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiA3cHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxuICBnYXA6IDNyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ubGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saW5rICsgLmxpbmsge1xcbiAgbWFyZ2luLXRvcDogMS4zcmVtO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC4yNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpdGxlLFxcbiNlZGl0LXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5yZXR1cm4ge1xcbiAgZ3JpZC1jb2x1bW46IC0yO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMThyZW0pO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDlyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLFxcbi5lZGl0b3Ige1xcbiAgLyogQ2hhbmdlIHRoZXNlIHRvIGZvbnQgaWNvbnMgbGF0ZXIgKi9cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMi41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDFyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZWRpdCxcXG4jcHJvamVjdC1zYXZlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNHJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA3cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWVkaXQ6OmJlZm9yZSxcXG4udG9kby1lZGl0OjpiZWZvcmUsXFxuLm5vdGUtZWRpdDo6YmVmb3JlLFxcbi5jaGVja2xpc3QtZWRpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJlXFxcIjtcXG59XFxuXFxuI3Byb2plY3Qtc2F2ZTo6YmVmb3JlLFxcbiN0b2RvLXNhdmU6OmJlZm9yZSxcXG4jbm90ZS1zYXZlOjpiZWZvcmUsXFxuI2NoZWNrbGlzdC1zYXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcInNcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGU6OmJlZm9yZSxcXG4udG9kby1kZWxldGU6OmJlZm9yZSxcXG4ubm90ZS1kZWxldGU6OmJlZm9yZSxcXG4uY2hlY2tsaXN0LWRlbGV0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinYxcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGUtY29uZmlybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyxcXG4ubm90ZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMjtcXG4gIGdyaWQtcm93OiAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCBhdXRvKSAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyAuZGVzY3JpcHRpb24sXFxuLnByb2plY3QtaW5mbyAjZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjVmciAxZnIgMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLnR5cGUsXFxuI2VkaXQtdHlwZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHksXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnByaW9yaXR5OjpiZWZvcmUsXFxuI3ByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlByaW9yaXR5OiBcXFwiO1xcbn1cXG5cXG4uZHVlLWRhdGUsXFxuI2R1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5kdWUtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEdWU6IFxcXCI7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxuICBncmlkLXJvdzogMTtcXG5cXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zdGF0dXMudHJ1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8gLmRlc2NyaXB0aW9uLFxcbi50b2RvICNlZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4udG9kbyAuY2hlY2tsaXN0IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNjtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4ubGlzdC1uYW1lLnRydWUge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtY2hlY2tsaXN0LWl0ZW0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvIC5idXR0b25zLFxcbi5ub3RlIC5idXR0b25zIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDM7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMnJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gMXJlbTtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4ubm90ZS1lZGl0LFxcbiNub3RlLXNhdmUsXFxuLnRvZG8tZWRpdCxcXG4jdG9kby1zYXZlLFxcbi5jaGVja2xpc3QtZWRpdCxcXG4jY2hlY2tsaXN0LXNhdmUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLm5vdGUtZGVsZXRlLFxcbi50b2RvLWRlbGV0ZSxcXG4uY2hlY2tsaXN0LWRlbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLmJ1dHRvbnMgLmVkaXRvciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5idXR0b25zIC5lZGl0b3Ige1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLm5vdGVzIHtcXG4gIG1hcmdpbi1yaWdodDogMy41cmVtO1xcbn1cXG5cXG4ubm90ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4ubm90ZSAuZGVzY3JpcHRpb24sXFxuLm5vdGUgLmVkaXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJDQUEyQzs7RUFFM0MsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyw0QkFBNEI7RUFDNUIsU0FBUztBQUNYOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjs7RUFFakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJDQUEyQztFQUMzQyxvQkFBb0I7O0VBRXBCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7OztFQUlFLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixXQUFXOztFQUVYLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0Msd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVzs7RUFFWCxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7Ozs7OztFQU1FLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiA3cHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxuICBnYXA6IDNyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ubGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saW5rICsgLmxpbmsge1xcbiAgbWFyZ2luLXRvcDogMS4zcmVtO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC4yNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpdGxlLFxcbiNlZGl0LXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5yZXR1cm4ge1xcbiAgZ3JpZC1jb2x1bW46IC0yO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMThyZW0pO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDlyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLFxcbi5lZGl0b3Ige1xcbiAgLyogQ2hhbmdlIHRoZXNlIHRvIGZvbnQgaWNvbnMgbGF0ZXIgKi9cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMi41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDFyZW07XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZWRpdCxcXG4jcHJvamVjdC1zYXZlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNHJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA3cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWVkaXQ6OmJlZm9yZSxcXG4udG9kby1lZGl0OjpiZWZvcmUsXFxuLm5vdGUtZWRpdDo6YmVmb3JlLFxcbi5jaGVja2xpc3QtZWRpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJlXFxcIjtcXG59XFxuXFxuI3Byb2plY3Qtc2F2ZTo6YmVmb3JlLFxcbiN0b2RvLXNhdmU6OmJlZm9yZSxcXG4jbm90ZS1zYXZlOjpiZWZvcmUsXFxuI2NoZWNrbGlzdC1zYXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcInNcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGU6OmJlZm9yZSxcXG4udG9kby1kZWxldGU6OmJlZm9yZSxcXG4ubm90ZS1kZWxldGU6OmJlZm9yZSxcXG4uY2hlY2tsaXN0LWRlbGV0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinYxcXFwiO1xcbn1cXG5cXG4jcHJvamVjdC1kZWxldGUtY29uZmlybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyxcXG4ubm90ZXMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMjtcXG4gIGdyaWQtcm93OiAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCBhdXRvKSAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyAuZGVzY3JpcHRpb24sXFxuLnByb2plY3QtaW5mbyAjZWRpdC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjVmciAxZnIgMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLnR5cGUsXFxuI2VkaXQtdHlwZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHksXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnByaW9yaXR5OjpiZWZvcmUsXFxuI3ByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlByaW9yaXR5OiBcXFwiO1xcbn1cXG5cXG4uZHVlLWRhdGUsXFxuI2R1ZS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5kdWUtZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEdWU6IFxcXCI7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxuICBncmlkLXJvdzogMTtcXG5cXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zdGF0dXMudHJ1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8gLmRlc2NyaXB0aW9uLFxcbi50b2RvICNlZGl0LWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4udG9kbyAuY2hlY2tsaXN0IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNjtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4ubGlzdC1uYW1lLnRydWUge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtY2hlY2tsaXN0LWl0ZW0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvIC5idXR0b25zLFxcbi5ub3RlIC5idXR0b25zIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDM7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMnJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gMXJlbTtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4ubm90ZS1lZGl0LFxcbiNub3RlLXNhdmUsXFxuLnRvZG8tZWRpdCxcXG4jdG9kby1zYXZlLFxcbi5jaGVja2xpc3QtZWRpdCxcXG4jY2hlY2tsaXN0LXNhdmUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLm5vdGUtZGVsZXRlLFxcbi50b2RvLWRlbGV0ZSxcXG4uY2hlY2tsaXN0LWRlbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLmJ1dHRvbnMgLmVkaXRvciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIC5idXR0b25zIC5lZGl0b3Ige1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLm5vdGVzIHtcXG4gIG1hcmdpbi1yaWdodDogMy41cmVtO1xcbn1cXG5cXG4ubm90ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4ubm90ZSAuZGVzY3JpcHRpb24sXFxuLm5vdGUgLmVkaXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1yb3c6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBkZWxldGVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbik7XG4gIH07XG5cbiAgY29uc3Qgc2lkZWJhckNyZWF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSB0ayc7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5rcy5pZCA9ICdsaW5rcyc7XG4gICAgY29uc3QgcHJvamVjdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNMaW5rLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBwcm9qZWN0c0xpbmsuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgIHByb2plY3RzTGluay5pZCA9ICdwcm9qZWN0cyc7XG4gICAgY29uc3Qgbm90ZXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZXNMaW5rLnRleHRDb250ZW50ID0gJ05vdGVzJztcbiAgICBub3Rlc0xpbmsuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgIG5vdGVzTGluay5pZCA9ICdub3Rlcyc7XG4gICAgY29uc3Qgc2V0dGluZ3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NMaW5rLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcbiAgICBzZXR0aW5nc0xpbmsuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgIHNldHRpbmdzTGluay5pZCA9ICdzZXR0aW5ncyc7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChwcm9qZWN0c0xpbmspO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKG5vdGVzTGluayk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoc2V0dGluZ3NMaW5rKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpbmtzKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVMaXN0SXRlbSA9ICh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoaW5kZXgsICdsaXN0LWl0ZW0nKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChpbmRleCwgJ2xpc3QtbmFtZScsIHRvZG8uZ2V0TGlzdCgpW2luZGV4XS5jb21wbGV0ZWQpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0b2RvLmdldExpc3QoKVtpbmRleF0ubmFtZTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kby5jaGVja0l0ZW0oaW5kZXgpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QucmVwbGFjZShuYW1lLmNsYXNzTGlzdFsyXSwgdG9kby5nZXRMaXN0KClbaW5kZXhdLmNvbXBsZXRlZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKGluZGV4LCAnYnV0dG9ucycpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoaW5kZXgsICdlZGl0b3InLCAnY2hlY2tsaXN0LWVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChpbmRleCwgJ2VkaXRvcicsICdjaGVja2xpc3QtZGVsZXRlJyk7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kVG9kbyA9ICh0b2RvLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdGl0bGUnXWApO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNoZWNrbGlzdC5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCAnY2hlY2tsaXN0Jyk7XG5cbiAgICBjb25zdCBsaXN0ID0gdG9kby5nZXRMaXN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEl0ZW0odG9kbywgaSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRUb0xpc3QuY2xhc3NMaXN0LmFkZChjYXJkLmNsYXNzTGlzdFswXSwgJ2FkZC1jaGVja2xpc3QtaXRlbScpO1xuICAgIGFkZFRvTGlzdC50ZXh0Q29udGVudCA9ICcrJztcbiAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQoYWRkVG9MaXN0KTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0KTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5kb0V4cGFuZFRvZG8odG9kbywgY2FyZCksIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sICd0b2RvJywgJ2J1dHRvbnMnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCAnZWRpdG9yJywgJ3RvZG8tZWRpdCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCAnZWRpdG9yJywgJ3RvZG8tZGVsZXRlJyk7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgfTtcblxuICBjb25zdCB1bmRvRXhwYW5kVG9kbyA9ICh0b2RvLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0b2RvIGJ1dHRvbnMnXWApO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBjaGVja2xpc3QnXWApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGRlc2NyaXB0aW9uJ11gKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGJ1dHRvbnMpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoY2hlY2tsaXN0KTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcblxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXhwYW5kVG9kbyh0b2RvLCBjYXJkKSwgeyBvbmNlOiB0cnVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9DYXJkID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChpbmRleCwgJ2NhcmQnLCAndG9kbycpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoaW5kZXgsICd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0eXBlLmNsYXNzTGlzdC5hZGQoaW5kZXgsICd0eXBlJyk7XG4gICAgdHlwZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VHlwZSgpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoaW5kZXgsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKGluZGV4LCAnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKCk7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoaW5kZXgsICdzdGF0dXMnLCB0b2RvLmdldFN0YXR1cygpKTtcblxuICAgIHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZG8uY2hhbmdlU3RhdHVzKCk7XG4gICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlcGxhY2Uoc3RhdHVzLmNsYXNzTGlzdFsyXSwgdG9kby5nZXRTdGF0dXMoKSk7XG4gICAgfSk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHR5cGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBleHBhbmRUb2RvKHRvZG8sIGNhcmQpLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Rm9jdXNNYWluID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKGluZGV4KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZ29CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ29CYWNrLmNsYXNzTGlzdC5hZGQoJ3JldHVybicsICdyZXR1cm4tcHJvamVjdHMnKTtcbiAgICBnb0JhY2sudGV4dENvbnRlbnQgPSAnPC0gR28gQmFjayc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChnb0JhY2spO1xuXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdG9yJyk7XG4gICAgZWRpdEJ0bi5pZCA9ICdwcm9qZWN0LWVkaXQnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdG9yJyk7XG4gICAgZGVsZXRlQnRuLmlkID0gJ3Byb2plY3QtZGVsZXRlJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5mbycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QuZ2V0VG9kb0xpc3QoKS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0NhcmQocHJvamVjdC5nZXRUb2RvTGlzdCgpW2ldLCBpKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ld1RvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkJywgJ25ldy10b2RvJyk7XG4gICAgYWRkTmV3VG9kb0J0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE5ld1RvZG9CdG4pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Rm9jdXMgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBkZWxldGVNYWluKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9jdXNNYWluKHByb2plY3QsIGluZGV4KSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ3Byb2plY3QnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwcm9qZWN0Rm9jdXMocHJvamVjdCwgaW5kZXgpKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzT3ZlcnZpZXdNYWluID0gKHByb2plY3RzTGlzdCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmlkID0gJ21haW4nO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3RzTGlzdFtpXSwgaSkpO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZCcsICduZXctcHJvamVjdCcpO1xuICAgIGFkZE5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0QnRuKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzT3ZlcnZpZXcgPSAocHJvamVjdHNMaXN0KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgZGVsZXRlTWFpbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNPdmVydmlld01haW4ocHJvamVjdHNMaXN0KSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFNldHVwID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyQ3JlYXRlKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNPdmVydmlld01haW4ocHJvamVjdExpc3QpKTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCwgaW5kZXgpO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gKHByb2plY3QsIGNhcmQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWluZm8nKTtcblxuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdFRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgZWRpdFRpdGxlLm5hbWUgPSAnZWRpdC10aXRsZSc7XG4gICAgZWRpdFRpdGxlLmlkID0gJ2VkaXQtdGl0bGUnO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdERlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XG4gICAgZWRpdERlc2NyaXB0aW9uLm5hbWUgPSAnZWRpdC1kZXNjcmlwdGlvbic7XG4gICAgZWRpdERlc2NyaXB0aW9uLmlkID0gJ2VkaXQtZGVzY3JpcHRpb24nO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xuICAgIGNvbmZpcm1CdG4uaWQgPSAncHJvamVjdC1zYXZlJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDIudGl0bGUnKTtcbiAgICBlZGl0VGl0bGUudmFsdWUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmRlc2NyaXB0aW9uJyk7XG4gICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWVkaXQnKTtcblxuICAgIGNhcmQucmVtb3ZlQ2hpbGQodGl0bGUpO1xuICAgIHByb2plY3RJbmZvLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdC5zZXRUaXRsZShlZGl0VGl0bGUudmFsdWUpO1xuICAgICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihlZGl0RGVzY3JpcHRpb24udmFsdWUpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRUaXRsZSk7XG4gICAgICBwcm9qZWN0SW5mby5yZW1vdmVDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdUb2RvID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbmZvJyk7XG4gICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG9DYXJkKHRvZG8sIGluZGV4KTtcbiAgICB0b2Rvcy5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfTtcblxuICBjb25zdCBhZGRDaGVja2xpc3RJdGVtID0gKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmV3SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKHRvZG8sIHRvZG8uZ2V0TGlzdCgpLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2luZGV4fSBjaGVja2xpc3QnXWApO1xuICAgIGNoZWNrbGlzdC5pbnNlcnRCZWZvcmUobmV3SXRlbSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aW5kZXh9IGFkZC1jaGVja2xpc3QtaXRlbSddYCkpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRDaGVja2xpc3RJdGVtID0gKHRvZG8sIGNhcmRJbmRleCwgaXRlbUluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZEluZGV4fSBjaGVja2xpc3QnXWApO1xuXG4gICAgY29uc3QgaXRlbSA9IGNoZWNrbGlzdC5jaGlsZE5vZGVzW2l0ZW1JbmRleF07XG4gICAgY29uc3QgaXRlbU5hbWUgPSBpdGVtLmNoaWxkTm9kZXNbMF07XG4gICAgY29uc3QgYnV0dG9ucyA9IGl0ZW0uY2hpbGROb2Rlc1sxXTtcbiAgICBjb25zdCBlZGl0QnRuID0gYnV0dG9ucy5jaGlsZE5vZGVzWzBdO1xuXG4gICAgY29uc3QgZWRpdEl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0SXRlbU5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBlZGl0SXRlbU5hbWUubmFtZSA9ICdlZGl0LWl0ZW0tbmFtZSc7XG4gICAgZWRpdEl0ZW1OYW1lLmlkID0gJ2VkaXQtaXRlbS1uYW1lJztcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0b3InKTtcbiAgICBjb25maXJtQnRuLmlkID0gJ2NoZWNrbGlzdC1zYXZlJztcblxuICAgIGVkaXRJdGVtTmFtZS52YWx1ZSA9IGl0ZW1OYW1lLnRleHRDb250ZW50O1xuXG4gICAgaXRlbS5yZW1vdmVDaGlsZChpdGVtTmFtZSk7XG4gICAgYnV0dG9ucy5yZW1vdmVDaGlsZChlZGl0QnRuKTtcbiAgICBpdGVtLmluc2VydEJlZm9yZShlZGl0SXRlbU5hbWUsIGJ1dHRvbnMpO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kby5lZGl0SXRlbShpdGVtSW5kZXgsIGVkaXRJdGVtTmFtZS52YWx1ZSk7XG4gICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGVkaXRJdGVtTmFtZS52YWx1ZTtcblxuICAgICAgaXRlbS5yZW1vdmVDaGlsZChlZGl0SXRlbU5hbWUpO1xuICAgICAgYnV0dG9ucy5yZW1vdmVDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGl0ZW0uaW5zZXJ0QmVmb3JlKGl0ZW1OYW1lLCBidXR0b25zKTtcbiAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ2hlY2tsaXN0SXRlbSA9IChjYXJkSW5kZXgsIGl0ZW1JbmRleCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmRJbmRleH0gY2hlY2tsaXN0J11gKTtcbiAgICBjaGVja2xpc3QucmVtb3ZlQ2hpbGQoY2hlY2tsaXN0LmNoaWxkTm9kZXNbaXRlbUluZGV4XSk7XG5cbiAgICBmb3IgKGxldCBpID0gcGFyc2VJbnQoaXRlbUluZGV4LCAxMCk7IGkgPCBjaGVja2xpc3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gY2hlY2tsaXN0LmNoaWxkTm9kZXNbaV07XG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QucmVwbGFjZShcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0WzBdLFxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QgLSAxLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1swXTtcbiAgICAgIGxpc3ROYW1lLmNsYXNzTGlzdC5yZXBsYWNlKFxuICAgICAgICBsaXN0TmFtZS5jbGFzc0xpc3RbMF0sXG4gICAgICAgIGxpc3ROYW1lLmNsYXNzTGlzdFswXSAtIDEsXG4gICAgICApO1xuICAgICAgY29uc3QgbGlzdEJ1dHRvbnMgPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzFdO1xuICAgICAgbGlzdEJ1dHRvbnMuY2xhc3NMaXN0LnJlcGxhY2UoXG4gICAgICAgIGxpc3RCdXR0b25zLmNsYXNzTGlzdFswXSxcbiAgICAgICAgbGlzdEJ1dHRvbnMuY2xhc3NMaXN0WzBdIC0gMSxcbiAgICAgICk7XG4gICAgICBsaXN0QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKFxuICAgICAgICBsaXN0QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdFswXSxcbiAgICAgICAgbGlzdEJ1dHRvbnMuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3RbMF0gLSAxLFxuICAgICAgKTtcbiAgICAgIGxpc3RCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlcGxhY2UoXG4gICAgICAgIGxpc3RCdXR0b25zLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0WzBdLFxuICAgICAgICBsaXN0QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSAtIDEsXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9ICh0b2RvLCBjYXJkKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSB0b2RvIGJ1dHRvbnMnXWApO1xuXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBlZGl0VGl0bGUubmFtZSA9ICdlZGl0LXRpdGxlJztcbiAgICBlZGl0VGl0bGUuaWQgPSAnZWRpdC10aXRsZSc7XG5cbiAgICBjb25zdCBlZGl0VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGVkaXRUeXBlLm5hbWUgPSAnZWRpdC10eXBlJztcbiAgICBlZGl0VHlwZS5pZCA9ICdlZGl0LXR5cGUnO1xuICAgIGNvbnN0IG9wdGlvbkV4ZXJjaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uRXhlcmNpc2UudGV4dENvbnRlbnQgPSAnRXhlcmNpc2UnO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkV4ZXJjaXNlKTtcbiAgICBjb25zdCBvcHRpb25TZWxmSW1wcm92ZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25TZWxmSW1wcm92ZW1lbnQudGV4dENvbnRlbnQgPSAnU2VsZi1JbXByb3ZlbWVudCc7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uU2VsZkltcHJvdmVtZW50KTtcbiAgICBjb25zdCBvcHRpb25MZWFybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbkxlYXJuaW5nLnRleHRDb250ZW50ID0gJ0xlYXJuaW5nJztcbiAgICBlZGl0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25MZWFybmluZyk7XG4gICAgY29uc3Qgb3B0aW9uUGVyc29uYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25QZXJzb25hbC50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uUGVyc29uYWwpO1xuICAgIGNvbnN0IG9wdGlvbldvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25Xb3JrLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbldvcmspO1xuICAgIGNvbnN0IG9wdGlvblNjaG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblNjaG9vbC50ZXh0Q29udGVudCA9ICdTY2hvb2wnO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvblNjaG9vbCk7XG4gICAgY29uc3Qgb3B0aW9uQ2xlYW5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25DbGVhbmluZy50ZXh0Q29udGVudCA9ICdDbGVhbmluZyc7XG4gICAgZWRpdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uQ2xlYW5pbmcpO1xuICAgIGNvbnN0IG9wdGlvbk90aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uT3RoZXIudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuICAgIGVkaXRUeXBlLmFwcGVuZENoaWxkKG9wdGlvbk90aGVyKTtcblxuICAgIGNvbnN0IGVkaXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGVkaXRQcmlvcml0eS5uYW1lID0gJ2VkaXQtcHJpb3JpdHknO1xuICAgIGVkaXRQcmlvcml0eS5pZCA9ICdlZGl0LXByaW9yaXR5JztcbiAgICBjb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcmlvcml0eTEudGV4dENvbnRlbnQgPSAnMSc7XG4gICAgY29uc3QgcHJpb3JpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJpb3JpdHkyLnRleHRDb250ZW50ID0gJzInO1xuICAgIGNvbnN0IHByaW9yaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHByaW9yaXR5My50ZXh0Q29udGVudCA9ICczJztcbiAgICBjb25zdCBwcmlvcml0eTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcmlvcml0eTQudGV4dENvbnRlbnQgPSAnNCc7XG4gICAgY29uc3QgcHJpb3JpdHk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJpb3JpdHk1LnRleHRDb250ZW50ID0gJzUnO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTEpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTIpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTMpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTQpO1xuICAgIGVkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTUpO1xuICAgIGNvbnN0IGVkaXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0RHVlRGF0ZS50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBlZGl0RHVlRGF0ZS5uYW1lID0gJ2VkaXQtZHVlLWRhdGUnO1xuICAgIGVkaXREdWVEYXRlLmlkID0gJ2VkaXQtZHVlLWRhdGUnO1xuICAgIGVkaXREdWVEYXRlLm1pbiA9ICcyMDIyLTA1LTAxJztcbiAgICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xuICAgIGNvbmZpcm1CdG4uaWQgPSAndG9kby1zYXZlJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcbiAgICBlZGl0VGl0bGUudmFsdWUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHR5cGUnXWApO1xuICAgIGVkaXRUeXBlLnZhbHVlID0gdHlwZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBwcmlvcml0eSddYCk7XG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHkudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2NhcmQuY2xhc3NMaXN0WzBdfSBkdWUtZGF0ZSddYCk7XG4gICAgZWRpdER1ZURhdGUudmFsdWUgPSBkdWVEYXRlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGRlc2NyaXB0aW9uJ11gKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGVkaXRvciB0b2RvLWVkaXRgKTtcblxuICAgIGNhcmQucmVtb3ZlQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQodHlwZSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChwcmlvcml0eSk7XG4gICAgY2FyZC5yZW1vdmVDaGlsZChkdWVEYXRlKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBidXR0b25zLnJlbW92ZUNoaWxkKGVkaXRCdG4pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUeXBlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRQcmlvcml0eSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RHVlRGF0ZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kby5zZXRUaXRsZShlZGl0VGl0bGUudmFsdWUpO1xuICAgICAgdG9kby5zZXRUeXBlKGVkaXRUeXBlLnZhbHVlKTtcbiAgICAgIHRvZG8uc2V0UHJpb3JpdHkoZWRpdFByaW9yaXR5LnZhbHVlKTtcbiAgICAgIHRvZG8uc2V0RHVlRGF0ZShlZGl0RHVlRGF0ZS52YWx1ZSk7XG4gICAgICB0b2RvLnNldERlc2NyaXB0aW9uKGVkaXREZXNjcmlwdGlvbi52YWx1ZSk7XG5cbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgdHlwZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VHlwZSgpO1xuICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5nZXREdWVEYXRlKCk7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VGl0bGUpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VHlwZSk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXRQcmlvcml0eSk7XG4gICAgICBjYXJkLnJlbW92ZUNoaWxkKGVkaXREdWVEYXRlKTtcbiAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZWRpdERlc2NyaXB0aW9uKTtcbiAgICAgIGJ1dHRvbnMucmVtb3ZlQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodHlwZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5mbycpO1xuICAgIGNvbnN0IGJhZENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aW5kZXh9IGNhcmQgdG9kbyddYCk7XG4gICAgcHJvamVjdEluZm8ucmVtb3ZlQ2hpbGQoYmFkQ2hpbGQpO1xuICAgIGNvbnN0IGNoaWxkcmVuTGVuZ3RoID0gcHJvamVjdEluZm8uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KGluZGV4LCAxMCkgKyAxOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aX0gY2FyZCB0b2RvJ11gKTtcbiAgICAgIGN1cnJlbnRDaGlsZC5jbGFzc0xpc3QucmVwbGFjZShcbiAgICAgICAgY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSxcbiAgICAgICAgY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSAtIDEsXG4gICAgICApO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlc1tqXS5jbGFzc0xpc3QucmVwbGFjZShcbiAgICAgICAgICBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlc1tqXS5jbGFzc0xpc3RbMF0sXG4gICAgICAgICAgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdIC0gMSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGggPiA1KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aSAtIDF9IGJ1dHRvbnMnXWApO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKFxuICAgICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdLFxuICAgICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdIC0gMSxcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEJ1dHRvbnMuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QucmVwbGFjZShcbiAgICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSxcbiAgICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSAtIDEsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGV4cGFuZE5vdGUgPSAobm90ZSwgY2FyZCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IHRpdGxlJ11gKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbm90ZS5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuZG9FeHBhbmROb3RlKG5vdGUsIGNhcmQpLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKGNhcmQuY2xhc3NMaXN0WzBdLCAnYnV0dG9ucycpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sICdlZGl0b3InLCAnbm90ZS1lZGl0Jyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoY2FyZC5jbGFzc0xpc3RbMF0sICdlZGl0b3InLCAnbm90ZS1kZWxldGUnKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICB9O1xuXG4gIGNvbnN0IHVuZG9FeHBhbmROb3RlID0gKG5vdGUsIGNhcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGJ1dHRvbnMnXWApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGRlc2NyaXB0aW9uJ11gKTtcbiAgICBjYXJkLnJlbW92ZUNoaWxkKGJ1dHRvbnMpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdGl0bGUnXWApO1xuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBleHBhbmROb3RlKG5vdGUsIGNhcmQpLCB7IG9uY2U6IHRydWUgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTm90ZUNhcmQgPSAobm90ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGluZGV4LCAnY2FyZCcsICdub3RlJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChpbmRleCwgJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLmdldFRpdGxlKCk7XG5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGV4cGFuZE5vdGUobm90ZSwgY2FyZCksIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH07XG5cbiAgY29uc3Qgbm90ZXNPdmVydmlld01haW4gPSAobm90ZXNMaXN0KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uaWQgPSAnbWFpbic7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdOb3Rlcyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVzLmNsYXNzTGlzdC5hZGQoJ25vdGVzJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbm90ZXMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZUNhcmQobm90ZXNMaXN0W2ldLCBpKSk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG4gICAgY29uc3QgYWRkTmV3Tm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ld05vdGVCdG4uY2xhc3NMaXN0LmFkZCgnYWRkJywgJ25ldy1ub3RlJyk7XG4gICAgYWRkTmV3Tm90ZUJ0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZE5ld05vdGVCdG4pO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH07XG5cbiAgY29uc3Qgbm90ZXNPdmVydmlldyA9IChub3Rlc0xpc3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBkZWxldGVNYWluKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChub3Rlc092ZXJ2aWV3TWFpbihub3Rlc0xpc3QpKTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdOb3RlID0gKG5vdGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMnKTtcbiAgICBjb25zdCBuZXdOb3RlID0gY3JlYXRlTm90ZUNhcmQobm90ZSwgaW5kZXgpO1xuICAgIG5vdGVzLmFwcGVuZENoaWxkKG5ld05vdGUpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXROb3RlID0gKG5vdGUsIGNhcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGJ1dHRvbnMnXWApO1xuXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBlZGl0VGl0bGUubmFtZSA9ICdlZGl0LXRpdGxlJztcbiAgICBlZGl0VGl0bGUuaWQgPSAnZWRpdC10aXRsZSc7XG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgICBlZGl0RGVzY3JpcHRpb24ubmFtZSA9ICdlZGl0LWRlc2NyaXB0aW9uJztcbiAgICBlZGl0RGVzY3JpcHRpb24uaWQgPSAnZWRpdC1kZXNjcmlwdGlvbic7XG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnZWRpdG9yJyk7XG4gICAgY29uZmlybUJ0bi5pZCA9ICdub3RlLXNhdmUnO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtjYXJkLmNsYXNzTGlzdFswXX0gdGl0bGUnXWApO1xuICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGRlc2NyaXB0aW9uJ11gKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7Y2FyZC5jbGFzc0xpc3RbMF19IGVkaXRvciBub3RlLWVkaXRgKTtcblxuICAgIGNhcmQucmVtb3ZlQ2hpbGQodGl0bGUpO1xuICAgIGNhcmQucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGJ1dHRvbnMucmVtb3ZlQ2hpbGQoZWRpdEJ0bik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdERlc2NyaXB0aW9uKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5vdGUuc2V0VGl0bGUoZWRpdFRpdGxlLnZhbHVlKTtcbiAgICAgIG5vdGUuc2V0RGVzY3JpcHRpb24oZWRpdERlc2NyaXB0aW9uLnZhbHVlKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLmdldFRpdGxlKCk7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5vdGUuZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0VGl0bGUpO1xuICAgICAgY2FyZC5yZW1vdmVDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgICAgYnV0dG9ucy5yZW1vdmVDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU5vdGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlcycpO1xuICAgIGNvbnN0IGJhZENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aW5kZXh9IGNhcmQgbm90ZSddYCk7XG4gICAgbm90ZXMucmVtb3ZlQ2hpbGQoYmFkQ2hpbGQpO1xuICAgIGNvbnN0IGNoaWxkcmVuTGVuZ3RoID0gbm90ZXMuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KGluZGV4LCAxMCkgKyAxOyBpIDwgY2hpbGRyZW5MZW5ndGggKyAxOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyA9ICcke2l9IGNhcmQgbm90ZSddYCk7XG4gICAgICBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSwgY3VycmVudENoaWxkLmNsYXNzTGlzdFswXSAtIDEpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlc1tqXS5jbGFzc0xpc3QucmVwbGFjZShcbiAgICAgICAgICBjdXJyZW50Q2hpbGQuY2hpbGROb2Rlc1tqXS5jbGFzc0xpc3RbMF0sXG4gICAgICAgICAgY3VycmVudENoaWxkLmNoaWxkTm9kZXNbal0uY2xhc3NMaXN0WzBdIC0gMSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7aSAtIDF9IGJ1dHRvbnMnXWApO1xuICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZXBsYWNlKFxuICAgICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdLFxuICAgICAgICAgIGN1cnJlbnRCdXR0b25zLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0WzBdIC0gMSxcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudEJ1dHRvbnMuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QucmVwbGFjZShcbiAgICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSxcbiAgICAgICAgICBjdXJyZW50QnV0dG9ucy5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdFswXSAtIDEsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHRpbmdzT3ZlcnZpZXdNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmlkID0gJ21haW4nO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnU2V0dGluZ3MnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH07XG5cbiAgY29uc3Qgc2V0dGluZ3NPdmVydmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBkZWxldGVNYWluKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZXR0aW5nc092ZXJ2aWV3TWFpbigpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxTZXR1cCxcbiAgICBwcm9qZWN0c092ZXJ2aWV3LFxuICAgIHByb2plY3RGb2N1cyxcbiAgICBub3Rlc092ZXJ2aWV3LFxuICAgIHNldHRpbmdzT3ZlcnZpZXcsXG4gICAgYWRkTmV3UHJvamVjdCxcbiAgICBhZGROZXdOb3RlLFxuICAgIGFkZE5ld1RvZG8sXG4gICAgZWRpdFByb2plY3QsXG4gICAgZWRpdFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBlZGl0Tm90ZSxcbiAgICByZW1vdmVOb3RlLFxuICAgIGFkZENoZWNrbGlzdEl0ZW0sXG4gICAgZWRpdENoZWNrbGlzdEl0ZW0sXG4gICAgcmVtb3ZlQ2hlY2tsaXN0SXRlbSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiY29uc3QgdG9kbyA9IChpbml0VGl0bGUsIGluaXREZXNjcmlwdGlvbiwgaW5pdER1ZURhdGUsIGluaXRQcmlvcml0eSwgaW5pdFR5cGUpID0+IHtcbiAgbGV0IHRpdGxlID0gaW5pdFRpdGxlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBpbml0RGVzY3JpcHRpb247XG4gIGxldCBkdWVEYXRlID0gaW5pdER1ZURhdGU7XG4gIGxldCBwcmlvcml0eSA9IGluaXRQcmlvcml0eTtcbiAgbGV0IHR5cGUgPSBpbml0VHlwZTtcbiAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICBjb25zdCBsaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9O1xuICBjb25zdCBnZXRUeXBlID0gKCkgPT4gdHlwZTtcbiAgY29uc3Qgc2V0VHlwZSA9IChuZXdUeXBlKSA9PiB7XG4gICAgdHlwZSA9IG5ld1R5cGU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKCkgPT4ge1xuICAgIHN0YXR1cyA9ICFzdGF0dXM7XG4gIH07XG4gIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1cztcblxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gbGlzdDtcbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtVGl0bGUpID0+IHtcbiAgICBsaXN0LnB1c2goeyBuYW1lOiBpdGVtVGl0bGUsIGNvbXBsZXRlZDogZmFsc2UgfSk7XG4gIH07XG4gIGNvbnN0IGVkaXRJdGVtID0gKGluZGV4LCBuZXdUaXRsZSkgPT4ge1xuICAgIGxpc3RbaW5kZXhdLm5hbWUgPSBuZXdUaXRsZTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgfTtcbiAgY29uc3QgY2hlY2tJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgbGlzdFtpbmRleF0uY29tcGxldGVkID0gIShsaXN0W2luZGV4XS5jb21wbGV0ZWQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBzZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIGdldFR5cGUsXG4gICAgc2V0VHlwZSxcbiAgICBjaGFuZ2VTdGF0dXMsXG4gICAgZ2V0U3RhdHVzLFxuICAgIGdldExpc3QsXG4gICAgYWRkSXRlbSxcbiAgICByZW1vdmVJdGVtLFxuICAgIGNoZWNrSXRlbSxcbiAgICBlZGl0SXRlbSxcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3QgPSAoaW5pdFRpdGxlLCBpbml0RGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IHRpdGxlID0gaW5pdFRpdGxlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBpbml0RGVzY3JpcHRpb247XG4gIGNvbnN0IHRvZG9MaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4gdG9kb0xpc3Q7XG5cbiAgY29uc3QgYWRkVG9kbyA9IChuZXdUb2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBzZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBnZXRUb2RvTGlzdCxcbiAgICBhZGRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG4gIH07XG59O1xuXG5jb25zdCBub3RlID0gKGluaXRUaXRsZSwgaW5pdERlc2NyaXB0aW9uKSA9PiB7XG4gIGxldCB0aXRsZSA9IGluaXRUaXRsZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gaW5pdERlc2NyaXB0aW9uO1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH07XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLFxuICB9O1xufTtcblxuZXhwb3J0IHsgdG9kbywgcHJvamVjdCwgbm90ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdG9kbywgcHJvamVjdCwgbm90ZSB9IGZyb20gJy4vdG9kby1jcmVhdGUnO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheS1jb250cm9sbGVyJztcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbmNvbnN0IG5vdGVMaXN0ID0gW107XG5cbmRpc3BsYXlDb250cm9sbGVyLmluaXRpYWxTZXR1cChwcm9qZWN0TGlzdCk7XG5cbmNvbnN0IHByb2plY3RzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xucHJvamVjdHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUNvbnRyb2xsZXIucHJvamVjdHNPdmVydmlldyhwcm9qZWN0TGlzdCkpO1xuXG5jb25zdCBub3Rlc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbm5vdGVzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlDb250cm9sbGVyLm5vdGVzT3ZlcnZpZXcobm90ZUxpc3QpKTtcblxuY29uc3Qgc2V0dGluZ3NMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzJyk7XG5zZXR0aW5nc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5Q29udHJvbGxlci5zZXR0aW5nc092ZXJ2aWV3KCkpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2Rpdi5yZXR1cm4tcHJvamVjdHMnKSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnByb2plY3RzT3ZlcnZpZXcocHJvamVjdExpc3QpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCdkaXYubmV3LXByb2plY3QnKSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KCdOZXcgUHJvamVjdCcsICdEZXNjcmlwdGlvbicpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0LCBwcm9qZWN0TGlzdC5sZW5ndGggLSAxKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnZGl2I3Byb2plY3QtZWRpdCcpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZWRpdFByb2plY3QoXG4gICAgICBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmNsYXNzTGlzdFswXV0sXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLFxuICAgICk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2RpdiNwcm9qZWN0LWRlbGV0ZScpKSB7XG4gICAgcHJvamVjdExpc3Quc3BsaWNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuY2xhc3NMaXN0WzBdLCAxKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5wcm9qZWN0c092ZXJ2aWV3KHByb2plY3RMaXN0KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnZGl2Lm5ldy10b2RvJykpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbygnTmV3IFRvZG8nLCAnRGVzY3JpcHRpb24nLCAnJywgNSwgJ1NlbGYtSW1wcm92ZW1lbnQnKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuY2xhc3NMaXN0WzBdXTtcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZE5ld1RvZG8obmV3VG9kbywgY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKS5sZW5ndGggLSAxKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnZGl2LnRvZG8tZWRpdCcpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZWRpdFRvZG8oXG4gICAgICBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmNsYXNzTGlzdFswXV0uZ2V0VG9kb0xpc3QoKVtlLnRhcmdldC5jbGFzc0xpc3RbMF1dLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2NsYXNzID0gJyR7ZS50YXJnZXQuY2xhc3NMaXN0WzBdfSBjYXJkIHRvZG8nXWApLFxuICAgICk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2Rpdi50b2RvLWRlbGV0ZScpKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlVG9kbyhlLnRhcmdldC5jbGFzc0xpc3RbMF0pO1xuICAgIHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuY2xhc3NMaXN0WzBdXS5yZW1vdmVUb2RvKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ3AuYWRkLWNoZWNrbGlzdC1pdGVtJykpIHtcbiAgICBwcm9qZWN0TGlzdFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmNsYXNzTGlzdFswXV0uZ2V0VG9kb0xpc3QoKVtlLnRhcmdldC5jbGFzc0xpc3RbMF1dLmFkZEl0ZW0oJ05ldyBpdGVtJyk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkQ2hlY2tsaXN0SXRlbShcbiAgICAgIHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuY2xhc3NMaXN0WzBdXS5nZXRUb2RvTGlzdCgpW2UudGFyZ2V0LmNsYXNzTGlzdFswXV0sXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3RbMF0sXG4gICAgKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnZGl2LmNoZWNrbGlzdC1lZGl0JykpIHtcbiAgICBjb25zdCBjYXJkSW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3RbMF07XG4gICAgY29uc3QgbGlzdEluZGV4ID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gcHJvamVjdExpc3RbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKS5jbGFzc0xpc3RbMF1dLmdldFRvZG9MaXN0KClbY2FyZEluZGV4XTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0Q2hlY2tsaXN0SXRlbShjdXJyZW50VG9kbywgY2FyZEluZGV4LCBsaXN0SW5kZXgpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCdkaXYuY2hlY2tsaXN0LWRlbGV0ZScpKSB7XG4gICAgY29uc3QgY2FyZEluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IGxpc3RJbmRleCA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVDaGVja2xpc3RJdGVtKGNhcmRJbmRleCwgbGlzdEluZGV4KTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IHByb2plY3RMaXN0W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuY2xhc3NMaXN0WzBdXS5nZXRUb2RvTGlzdCgpW2NhcmRJbmRleF07XG4gICAgY3VycmVudFRvZG8ucmVtb3ZlSXRlbShjdXJyZW50VG9kby5nZXRMaXN0KClbbGlzdEluZGV4XSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm1hdGNoZXMoJ2Rpdi5uZXctbm90ZScpKSB7XG4gICAgY29uc3QgbmV3Tm90ZSA9IG5vdGUoJ05ldyBOb3RlJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgbm90ZUxpc3QucHVzaChuZXdOb3RlKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hZGROZXdOb3RlKG5ld05vdGUsIG5vdGVMaXN0Lmxlbmd0aCAtIDEpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5tYXRjaGVzKCdkaXYubm90ZS1lZGl0JykpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lZGl0Tm90ZShcbiAgICAgIG5vdGVMaXN0W2UudGFyZ2V0LmNsYXNzTGlzdFswXV0sXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY2xhc3MgPSAnJHtlLnRhcmdldC5jbGFzc0xpc3RbMF19IGNhcmQgbm90ZSddYCksXG4gICAgKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQubWF0Y2hlcygnZGl2Lm5vdGUtZGVsZXRlJykpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVOb3RlKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gICAgbm90ZUxpc3Quc3BsaWNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJykuY2xhc3NMaXN0WzBdLCAxKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=