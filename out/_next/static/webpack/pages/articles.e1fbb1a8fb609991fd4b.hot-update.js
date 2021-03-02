webpackHotUpdate_N_E("pages/articles",{

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_articleLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/articleLayout */ \"./_layouts/articleLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/syeefkarim/Developer/syeefkarim-2021/pages/articles.js\";\n\n\nvar __N_SSG = true;\nfunction Blog(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_articleLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: props.title,\n    description: props.description,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Notebook\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: props.posts.map(function (post, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            href: \"/articles/\" + post.slug,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: post.excerpt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, this)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n_c = Blog;\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMuanM/YzkxYSJdLCJuYW1lcyI6WyJCbG9nIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWR4Iiwic2x1ZyIsImV4Y2VycHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxzQkFDRSxxRUFBQyw4REFBRDtBQUFlLFNBQUssRUFBRUEsS0FBSyxDQUFDQyxLQUE1QjtBQUFtQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0UsV0FBdEQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFDR0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBVUMsSUFBVixFQUFnQkMsR0FBaEIsRUFBcUI7QUFDcEMsNEJBQ0U7QUFBQSxrQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUUsZUFBZUQsSUFBSSxDQUFDRSxJQUFoQztBQUFBLG1DQUNFO0FBQUEsd0JBQUlGLElBQUksQ0FBQ0o7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUEsc0JBQUlJLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUEsV0FBU0YsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBUUQsT0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQWxCdUJQLEkiLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnRpY2xlTGF5b3V0IGZyb20gXCJAbGF5b3V0cy9hcnRpY2xlTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBnZXRDb25maWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcIkBhcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlTGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cbiAgICAgIDxoMT5Ob3RlYm9vazwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9wcy5wb3N0cy5tYXAoZnVuY3Rpb24gKHBvc3QsIGlkeCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9hcnRpY2xlcy9cIiArIHBvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9BcnRpY2xlTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGdldENvbmZpZygpO1xuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IGFsbFBvc3RzLFxuICAgICAgdGl0bGU6IGNvbmZpZy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb25maWcuZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles.js\n");

/***/ })

})