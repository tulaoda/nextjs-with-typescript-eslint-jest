module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vc3R5bGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/lib/button/style/index.js\n");

/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9zdHlsZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/antd/lib/input/style/index.js\n");

/***/ }),

/***/ "./node_modules/antd/lib/list/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/list/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9saXN0L3N0eWxlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/antd/lib/list/style/index.js\n");

/***/ }),

/***/ "./src/pages/todo.tsx":
/*!****************************!*\
  !*** ./src/pages/todo.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ \"./node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ \"antd/lib/button\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ \"./node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ \"antd/lib/input\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list/style */ \"./node_modules/antd/lib/list/style/index.js\");\n/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/list */ \"antd/lib/list\");\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions */ \"./src/redux/actions.ts\");\n\n\n\n\n\n\n\nvar _dec,\n    _class,\n    _temp,\n    _jsxFileName = \"/Users/songxinxin/workspace/demo/nextjs-with-typescript-eslint-jest/src/pages/todo.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst {\n  Item\n} = antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a;\n\nconst mapStateToProps = state => ({\n  todos: state.todos\n});\n\nconst mapDispatchToProps = {\n  addTodo: _redux_actions__WEBPACK_IMPORTED_MODULE_9__[\"addTodo\"],\n  asyncAddToDo: _redux_actions__WEBPACK_IMPORTED_MODULE_9__[\"asyncAddToDo\"]\n};\nlet Todo = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = class Todo extends react__WEBPACK_IMPORTED_MODULE_7__[\"PureComponent\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"changeTodo\", el => {\n      this.setState({\n        todo: el.target.value\n      });\n    });\n\n    _defineProperty(this, \"childMethod\", () => {\n      return this.state.todo;\n    });\n\n    this.state = {\n      todo: ''\n    };\n  }\n\n  render() {\n    const {\n      todos,\n      addTodo,\n      asyncAddToDo\n    } = this.props;\n    const {\n      todo\n    } = this.state;\n    const liList = todos.map((todo, index) => __jsx(Item, {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }, todo));\n    return __jsx(\"div\", {\n      className: \"jsx-1661745734\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      id: \"1661745734\",\n      __self: this\n    }, \"h1.jsx-1661745734{color:red;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25neGlueGluL3dvcmtzcGFjZS9kZW1vL25leHRqcy13aXRoLXR5cGVzY3JpcHQtZXNsaW50LWplc3Qvc3JjL3BhZ2VzL3RvZG8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDcUIsQUFHdUMsVUFDZCIsImZpbGUiOiIvVXNlcnMvc29uZ3hpbnhpbi93b3Jrc3BhY2UvZGVtby9uZXh0anMtd2l0aC10eXBlc2NyaXB0LWVzbGludC1qZXN0L3NyYy9wYWdlcy90b2RvLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBMaXN0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZFRvZG8sIGFzeW5jQWRkVG9EbyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5cbmNvbnN0IHsgSXRlbSB9ID0gTGlzdFxuXG5pbnRlcmZhY2UgVG9kb1Byb3BzIHtcbiAgICB0b2Rvcz86IEFycmF5PHN0cmluZz5cbiAgICBhZGRUb2RvPzogKHRvZG86IHN0cmluZykgPT4gdm9pZFxuICAgIGFzeW5jQWRkVG9Ebz86ICh0b2RvOiBzdHJpbmcpID0+IHZvaWRcbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgdG9kb3M6IHN0YXRlLnRvZG9zIH0pXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGFkZFRvZG8sIGFzeW5jQWRkVG9EbyB9XG5cbkBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuY2xhc3MgVG9kbyBleHRlbmRzIFB1cmVDb21wb25lbnQ8VG9kb1Byb3BzLCB7IHRvZG86IHN0cmluZyB9PiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRvZG9Qcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvZG86ICcnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVG9kbyA9IChlbCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvZG86IGVsLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAxLjLov5nmmK/nu5nniLbnu4Tku7bosIPnlKjnmoTlh73mlbBcbiAgICBjaGlsZE1ldGhvZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudG9kb1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0b2RvcywgYWRkVG9kbywgYXN5bmNBZGRUb0RvIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IHsgdG9kbyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBsaUxpc3QgPSB0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8SXRlbSBrZXk9e2luZGV4fT57dG9kb308L0l0ZW0+XG4gICAgICAgICkpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0b2RvfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlVG9kb31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGRUb2RvLmJpbmQodGhpcywgdG9kbyl9IHR5cGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmt7vliqBcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YXN5bmNBZGRUb0RvLmJpbmQodGhpcywgdG9kbyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAg5re75YqgXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8aDE+5rWL6K+VPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGlzdD57bGlMaXN0fTwvTGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvXG4iXX0= */\\n/*@ sourceURL=/Users/songxinxin/workspace/demo/nextjs-with-typescript-eslint-jest/src/pages/todo.tsx */\"), __jsx(\"div\", {\n      className: \"jsx-1661745734\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      type: \"text\",\n      defaultValue: todo,\n      onChange: this.changeTodo,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 21\n      }\n    }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      onClick: addTodo.bind(this, todo),\n      type: \"primary\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 21\n      }\n    }, \"\\u6DFB\\u52A0\"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      onClick: asyncAddToDo.bind(this, todo),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 21\n      }\n    }, \"\\u6DFB\\u52A0\"), __jsx(\"h1\", {\n      className: \"jsx-1661745734\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 21\n      }\n    }, \"\\u6D4B\\u8BD5\")), __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }\n    }, liList));\n  }\n\n}, _temp)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9kby50c3g/OTYwNCJdLCJuYW1lcyI6WyJJdGVtIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0b2RvcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFkZFRvZG8iLCJhc3luY0FkZFRvRG8iLCJUb2RvIiwiY29ubmVjdCIsIlB1cmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZWwiLCJzZXRTdGF0ZSIsInRvZG8iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlciIsImxpTGlzdCIsIm1hcCIsImluZGV4IiwiY2hhbmdlVG9kbyIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsd0RBQU47O0FBT0EsTUFBTUMsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFBRUMsT0FBSyxFQUFFRCxLQUFLLENBQUNDO0FBQWYsQ0FBWixDQUF4Qjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRztBQUFFQyxpRUFBRjtBQUFXQywyRUFBWUE7QUFBdkIsQ0FBM0I7SUFHTUMsSSxXQURMQywyREFBTyxDQUFDUCxlQUFELEVBQWtCRyxrQkFBbEIsQyx5QkFBUixNQUNNRyxJQUROLFNBQ21CRSxtREFEbkIsQ0FDOEQ7QUFDMURDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFtQjtBQUMxQixVQUFNQSxLQUFOOztBQUQwQix3Q0FPaEJDLEVBQUQsSUFBUTtBQUNqQixXQUFLQyxRQUFMLENBQWM7QUFDVkMsWUFBSSxFQUFFRixFQUFFLENBQUNHLE1BQUgsQ0FBVUM7QUFETixPQUFkO0FBR0gsS0FYNkI7O0FBQUEseUNBY2hCLE1BQU07QUFDaEIsYUFBTyxLQUFLZCxLQUFMLENBQVdZLElBQWxCO0FBQ0gsS0FoQjZCOztBQUUxQixTQUFLWixLQUFMLEdBQWE7QUFDVFksVUFBSSxFQUFFO0FBREcsS0FBYjtBQUdIOztBQWFERyxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVkLFdBQUY7QUFBU0UsYUFBVDtBQUFrQkM7QUFBbEIsUUFBbUMsS0FBS0ssS0FBOUM7QUFDQSxVQUFNO0FBQUVHO0FBQUYsUUFBVyxLQUFLWixLQUF0QjtBQUNBLFVBQU1nQixNQUFNLEdBQUdmLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxDQUFDTCxJQUFELEVBQU9NLEtBQVAsS0FDckIsTUFBQyxJQUFEO0FBQU0sU0FBRyxFQUFFQSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUJOLElBQW5CLENBRFcsQ0FBZjtBQUdBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHV1R0FRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUNJLFVBQUksRUFBQyxNQURUO0FBRUksa0JBQVksRUFBRUEsSUFGbEI7QUFHSSxjQUFRLEVBQUUsS0FBS08sVUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBTUk7QUFBUSxhQUFPLEVBQUVoQixPQUFPLENBQUNpQixJQUFSLENBQWEsSUFBYixFQUFtQlIsSUFBbkIsQ0FBakI7QUFBMkMsVUFBSSxFQUFDLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkosRUFTSTtBQUFRLGFBQU8sRUFBRVIsWUFBWSxDQUFDZ0IsSUFBYixDQUFrQixJQUFsQixFQUF3QlIsSUFBeEIsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFUSixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFaSixDQVJKLEVBc0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0ksTUFBUCxDQXRCSixDQURKO0FBMEJIOztBQW5EeUQsQztBQXNEL0NYLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3RvZG8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIExpc3QgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkVG9kbywgYXN5bmNBZGRUb0RvIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcblxuY29uc3QgeyBJdGVtIH0gPSBMaXN0XG5cbmludGVyZmFjZSBUb2RvUHJvcHMge1xuICAgIHRvZG9zPzogQXJyYXk8c3RyaW5nPlxuICAgIGFkZFRvZG8/OiAodG9kbzogc3RyaW5nKSA9PiB2b2lkXG4gICAgYXN5bmNBZGRUb0RvPzogKHRvZG86IHN0cmluZykgPT4gdm9pZFxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyB0b2Rvczogc3RhdGUudG9kb3MgfSlcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgYWRkVG9kbywgYXN5bmNBZGRUb0RvIH1cblxuQGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXG5jbGFzcyBUb2RvIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxUb2RvUHJvcHMsIHsgdG9kbzogc3RyaW5nIH0+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVG9kb1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdG9kbzogJycsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VUb2RvID0gKGVsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9kbzogZWwudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIDEuMui/meaYr+e7meeItue7hOS7tuiwg+eUqOeahOWHveaVsFxuICAgIGNoaWxkTWV0aG9kID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50b2RvXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRvZG9zLCBhZGRUb2RvLCBhc3luY0FkZFRvRG8gfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgeyB0b2RvIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGxpTGlzdCA9IHRvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17aW5kZXh9Pnt0b2RvfTwvSXRlbT5cbiAgICAgICAgKSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RvZG99XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VUb2RvfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZFRvZG8uYmluZCh0aGlzLCB0b2RvKX0gdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOa3u+WKoFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luY0FkZFRvRG8uYmluZCh0aGlzLCB0b2RvKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICDmt7vliqBcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxoMT7mtYvor5U8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaXN0PntsaUxpc3R9PC9MaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/todo.tsx\n");

/***/ }),

/***/ "./src/redux/action-types.ts":
/*!***********************************!*\
  !*** ./src/redux/action-types.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// action-type\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ADD_TODO: 'ADD_TODO'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uLXR5cGVzLnRzPzAyNjciXSwibmFtZXMiOlsiQUREX1RPRE8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDZTtBQUNYQSxVQUFRLEVBQUU7QUFEQyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L2FjdGlvbi10eXBlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFjdGlvbi10eXBlXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgQUREX1RPRE86ICdBRERfVE9ETycsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/action-types.ts\n");

/***/ }),

/***/ "./src/redux/actions.ts":
/*!******************************!*\
  !*** ./src/redux/actions.ts ***!
  \******************************/
/*! exports provided: addTodo, asyncAddToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncAddToDo\", function() { return asyncAddToDo; });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./src/redux/action-types.ts\");\n// actions\n\nconst addTodo = todo => ({\n  type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ADD_TODO,\n  todo\n});\nconst asyncAddToDo = todo => dispatch => setTimeout(() => dispatch(addTodo(todo)), 2000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy50cz84ZmYwIl0sIm5hbWVzIjpbImFkZFRvZG8iLCJ0b2RvIiwidHlwZSIsImFjdGlvblR5cGVzIiwiQUREX1RPRE8iLCJhc3luY0FkZFRvRG8iLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLE9BQU8sR0FBSUMsSUFBRCxLQUFXO0FBQUVDLE1BQUksRUFBRUMscURBQVcsQ0FBQ0MsUUFBcEI7QUFBOEJIO0FBQTlCLENBQVgsQ0FBaEI7QUFDQSxNQUFNSSxZQUFZLEdBQUlKLElBQUQsSUFBV0ssUUFBRCxJQUFjQyxVQUFVLENBQUMsTUFBTUQsUUFBUSxDQUFDTixPQUFPLENBQUNDLElBQUQsQ0FBUixDQUFmLEVBQWdDLElBQWhDLENBQXZEIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L2FjdGlvbnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhY3Rpb25zXG5pbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi9hY3Rpb24tdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+ICh7IHR5cGU6IGFjdGlvblR5cGVzLkFERF9UT0RPLCB0b2RvIH0pXG5leHBvcnQgY29uc3QgYXN5bmNBZGRUb0RvID0gKHRvZG8pID0+IChkaXNwYXRjaCkgPT4gc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChhZGRUb2RvKHRvZG8pKSwgMjAwMClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/actions.ts\n");

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/todo.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/songxinxin/workspace/demo/nextjs-with-typescript-eslint-jest/src/pages/todo.tsx */"./src/pages/todo.tsx");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd/lib/button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIj9lMzA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFudGQvbGliL2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd/lib/button\n");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd/lib/input\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9pbnB1dFwiP2U0MjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYW50ZC9saWIvaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd/lib/input\n");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd/lib/list\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9saXN0XCI/MmM0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkL2xpYi9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbGlzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd/lib/list\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });