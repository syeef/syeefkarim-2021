webpackHotUpdate_N_E("pages/notes",{

/***/ "./pages/notes.js":
/*!************************!*\
  !*** ./pages/notes.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_noteLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/noteLayout */ \"./_layouts/noteLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layouts/noteLayout.module.scss */ \"./_layouts/noteLayout.module.scss\");\n/* harmony import */ var _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\nvar _jsxFileName = \"/Users/syeefkarim/Developer/syeefkarim-2021/pages/notes.js\";\n\n\n\n\nvar __N_SSG = true;\nfunction Blog(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_noteLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: props.title,\n    description: props.description,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Notes\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tag,\n      children: \"A brief record of points or ideas written down.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), props.posts.map(function (post, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.note,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.visuals,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].img, {\n            layoutId: \"postImage\",\n            src: post.image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.meta,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            className: _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              href: \"/notes/\" + post.slug,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                children: post.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 23,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.excerpt,\n            children: post.excerpt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _layouts_noteLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.publishedDate,\n            children: post.publishedDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, this)]\n      }, idx, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = Blog;\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMuanM/MGRiMCJdLCJuYW1lcyI6WyJCbG9nIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3R5bGVzIiwidGFnIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWR4Iiwibm90ZSIsInZpc3VhbHMiLCJpbWFnZSIsIm1ldGEiLCJzbHVnIiwiZXhjZXJwdCIsInB1Ymxpc2hlZERhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbEMsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBWSxTQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBekI7QUFBZ0MsZUFBVyxFQUFFRCxLQUFLLENBQUNFLFdBQW5EO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUcsZUFBUyxFQUFFQyxzRUFBTSxDQUFDQyxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBS0dKLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQVVDLElBQVYsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQ3BDLDBCQUNFO0FBQWUsaUJBQVMsRUFBRUwsc0VBQU0sQ0FBQ00sSUFBakM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVOLHNFQUFNLENBQUNPLE9BQXZCO0FBQUEsaUNBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksb0JBQVEsRUFBQyxXQUFyQjtBQUFpQyxlQUFHLEVBQUVILElBQUksQ0FBQ0k7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVSLHNFQUFNLENBQUNTLElBQXZCO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFVCxzRUFBTSxDQUFDRixLQUF0QjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRSxZQUFZTSxJQUFJLENBQUNNLElBQTdCO0FBQUEscUNBQ0U7QUFBQSwwQkFBSU4sSUFBSSxDQUFDTjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUcscUJBQVMsRUFBRUUsc0VBQU0sQ0FBQ1csT0FBckI7QUFBQSxzQkFBK0JQLElBQUksQ0FBQ087QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQU9FO0FBQUcscUJBQVMsRUFBRVgsc0VBQU0sQ0FBQ1ksYUFBckI7QUFBQSxzQkFBcUNSLElBQUksQ0FBQ1E7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQSxTQUFVUCxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWdCRCxLQWpCQSxDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEO0tBM0J1QlQsSSIsImZpbGUiOiIuL3BhZ2VzL25vdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vdGVMYXlvdXQgZnJvbSBcIkBsYXlvdXRzL25vdGVMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGdldENvbmZpZywgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiQGFwaVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQGxheW91dHMvbm90ZUxheW91dC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlU2hhcmVkTGF5b3V0IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxOb3RlTGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cbiAgICAgIDxoMT5Ob3RlczwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWd9PlxuICAgICAgICBBIGJyaWVmIHJlY29yZCBvZiBwb2ludHMgb3IgaWRlYXMgd3JpdHRlbiBkb3duLlxuICAgICAgPC9wPlxuICAgICAge3Byb3BzLnBvc3RzLm1hcChmdW5jdGlvbiAocG9zdCwgaWR4KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPXtzdHlsZXMubm90ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpc3VhbHN9PlxuICAgICAgICAgICAgICA8bW90aW9uLmltZyBsYXlvdXRJZD1cInBvc3RJbWFnZVwiIHNyYz17cG9zdC5pbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhfT5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ub3Rlcy9cIiArIHBvc3Quc2x1Z30+XG4gICAgICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5leGNlcnB0fT57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHVibGlzaGVkRGF0ZX0+e3Bvc3QucHVibGlzaGVkRGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvTm90ZUxheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBnZXRDb25maWcoKTtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBhbGxQb3N0cyxcbiAgICAgIHRpdGxlOiBjb25maWcudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogY29uZmlnLmRlc2NyaXB0aW9uLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/notes.js\n");

/***/ })

})