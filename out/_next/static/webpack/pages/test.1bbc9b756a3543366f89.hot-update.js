webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/about */ \"./_layouts/about.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _includes_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @includes/work */ \"./_includes/work.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api */ \"./api/index.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _layouts_about_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @layouts/about.module.scss */ \"./_layouts/about.module.scss\");\n/* harmony import */ var _layouts_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layouts_about_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/syeefkarim/Developer/syeefkarim-2021/pages/test.js\";\n\n\n\n\n\n\n\nvar data = [];\n\nfor (var num = 30; num >= 0; num--) {\n  data.push({\n    date: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__[\"subDays\"])(new Date(), num).toISOString().substr(0, 10),\n    value: 1 + Math.random()\n  });\n}\n\nfunction CustomTooltip(_ref) {\n  var active = _ref.active,\n      payload = _ref.payload,\n      label = _ref.label;\n\n  if (active) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"tooltip\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__[\"parseISO\"])(label), \"eeee, d MMM, yyyy\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"$\", payload[0].value.toFixed(2), \" USD\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this);\n  }\n\n  return null;\n}\n\n_c = CustomTooltip;\nfunction Blog(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: props.title,\n    description: props.description,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n        children: \"Apple\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Hey, I'm Syeef. I've been designing mobile apps and websites since 2014. I'm interested in working on products that can help the future of society regarding data privacy and sustainability. I live in London, UK and currently helping build a better Internet at Cloudflare.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}\n_c2 = Blog;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CustomTooltip\");\n$RefreshReg$(_c2, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcz8xNDJiIl0sIm5hbWVzIjpbImRhdGEiLCJudW0iLCJwdXNoIiwiZGF0ZSIsInN1YkRheXMiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJ2YWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJDdXN0b21Ub29sdGlwIiwiYWN0aXZlIiwicGF5bG9hZCIsImxhYmVsIiwiZm9ybWF0IiwicGFyc2VJU08iLCJ0b0ZpeGVkIiwiQmxvZyIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsRUFBYjs7QUFDQSxLQUFLLElBQUlDLEdBQUcsR0FBRyxFQUFmLEVBQW1CQSxHQUFHLElBQUksQ0FBMUIsRUFBNkJBLEdBQUcsRUFBaEMsRUFBb0M7QUFDbENELE1BQUksQ0FBQ0UsSUFBTCxDQUFVO0FBQ1JDLFFBQUksRUFBRUMsd0RBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQUQsRUFBYUosR0FBYixDQUFQLENBQXlCSyxXQUF6QixHQUF1Q0MsTUFBdkMsQ0FBOEMsQ0FBOUMsRUFBaUQsRUFBakQsQ0FERTtBQUVSQyxTQUFLLEVBQUUsSUFBSUMsSUFBSSxDQUFDQyxNQUFMO0FBRkgsR0FBVjtBQUlEOztBQUVELFNBQVNDLGFBQVQsT0FBbUQ7QUFBQSxNQUExQkMsTUFBMEIsUUFBMUJBLE1BQTBCO0FBQUEsTUFBbEJDLE9BQWtCLFFBQWxCQSxPQUFrQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDakQsTUFBSUYsTUFBSixFQUFZO0FBQ1Ysd0JBQ0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtHLHVEQUFNLENBQUNDLHlEQUFRLENBQUNGLEtBQUQsQ0FBVCxFQUFrQixtQkFBbEI7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLHdCQUFLRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdMLEtBQVgsQ0FBaUJTLE9BQWpCLENBQXlCLENBQXpCLENBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFDRCxTQUFPLElBQVA7QUFDRDs7S0FWUU4sYTtBQVlNLFNBQVNPLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxzQkFDRSxxRUFBQyxzREFBRDtBQUFhLFNBQUssRUFBRUEsS0FBSyxDQUFDQyxLQUExQjtBQUFpQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0UsV0FBcEQ7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFvREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0VEO01BakV1QkgsSSIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXRMYXlvdXQgZnJvbSBcIkBsYXlvdXRzL2Fib3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgV29yayBmcm9tIFwiQGluY2x1ZGVzL3dvcmtcIjtcbmltcG9ydCB7IGdldENvbmZpZywgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiQGFwaVwiO1xuXG5pbXBvcnQge1xuICBSZXNwb25zaXZlQ29udGFpbmVyLFxuICBBcmVhQ2hhcnQsXG4gIFhBeGlzLFxuICBZQXhpcyxcbiAgQXJlYSxcbiAgVG9vbHRpcCxcbiAgQ2FydGVzaWFuR3JpZCxcbn0gZnJvbSBcInJlY2hhcnRzXCI7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPLCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIkBsYXlvdXRzL2Fib3V0Lm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IGRhdGEgPSBbXTtcbmZvciAobGV0IG51bSA9IDMwOyBudW0gPj0gMDsgbnVtLS0pIHtcbiAgZGF0YS5wdXNoKHtcbiAgICBkYXRlOiBzdWJEYXlzKG5ldyBEYXRlKCksIG51bSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApLFxuICAgIHZhbHVlOiAxICsgTWF0aC5yYW5kb20oKSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEN1c3RvbVRvb2x0aXAoeyBhY3RpdmUsIHBheWxvYWQsIGxhYmVsIH0pIHtcbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBcIj5cbiAgICAgICAgPGg0Pntmb3JtYXQocGFyc2VJU08obGFiZWwpLCBcImVlZWUsIGQgTU1NLCB5eXl5XCIpfTwvaDQ+XG4gICAgICAgIDxwPiR7cGF5bG9hZFswXS52YWx1ZS50b0ZpeGVkKDIpfSBVU0Q8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFib3V0TGF5b3V0IHRpdGxlPXtwcm9wcy50aXRsZX0gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDU+QXBwbGU8L2g1PlxuICAgICAgICB7LyogPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXs0MDB9PlxuICAgICAgICAgIDxBcmVhQ2hhcnQgZGF0YT17ZGF0YX0+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwic3Ryb2tlQ29sb3JcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjFcIiB5Mj1cIjBcIj5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNCNEFGRjVcIiBzdG9wT3BhY2l0eT17MX0gLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxNCVcIiBzdG9wQ29sb3I9XCIjQzFCQUVGXCIgc3RvcE9wYWNpdHk9ezF9IC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMjglXCIgc3RvcENvbG9yPVwiI0Q4Q0JFNlwiIHN0b3BPcGFjaXR5PXsxfSAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjQyJVwiIHN0b3BDb2xvcj1cIiNERUNBRDdcIiBzdG9wT3BhY2l0eT17MX0gLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1NiVcIiBzdG9wQ29sb3I9XCIjRTZDNkM0XCIgc3RvcE9wYWNpdHk9ezF9IC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNzAlXCIgc3RvcENvbG9yPVwiI0VCQzBCMVwiIHN0b3BPcGFjaXR5PXsxfSAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjRUJCREE5XCIgc3RvcE9wYWNpdHk9ezF9IC8+XG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImNvbG9yXCIgeDE9XCIwXCIgeTE9XCIwXCIgeDI9XCIwXCIgeTI9XCIxXCI+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjMjQ1MUI3XCIgc3RvcE9wYWNpdHk9ezAuNH0gLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI3NSVcIiBzdG9wQ29sb3I9XCIjMjQ1MUI3XCIgc3RvcE9wYWNpdHk9ezAuMDV9IC8+XG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICA8L2RlZnM+XG5cbiAgICAgICAgICAgIDxBcmVhXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cInVybCgjc3Ryb2tlQ29sb3IpXCJcbiAgICAgICAgICAgICAgZmlsbD1cInVybCgjY29sb3IpXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxYQXhpc1xuICAgICAgICAgICAgICBkYXRhS2V5PVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGF4aXNMaW5lPXtmYWxzZX1cbiAgICAgICAgICAgICAgdGlja0xpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyPXsoc3RyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKHN0cik7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0RGF0ZSgpICUgNyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCBcIk1NTSwgZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8WUF4aXNcbiAgICAgICAgICAgICAgZGF0YWtleT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgYXhpc0xpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICB0aWNrTGluZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHRpY2tDb3VudD17OH1cbiAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcj17KG51bWJlcikgPT4gYCQke251bWJlci50b0ZpeGVkKDIpfWB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50PXs8Q3VzdG9tVG9vbHRpcCAvPn0gLz5cblxuICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgb3BhY2l0eT17MC4xfSB2ZXJ0aWNhbD17ZmFsc2V9IC8+XG4gICAgICAgICAgPC9BcmVhQ2hhcnQ+XG4gICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj4gKi99XG4gICAgICAgIDxwPlxuICAgICAgICAgIEhleSwgSSdtIFN5ZWVmLiBJJ3ZlIGJlZW4gZGVzaWduaW5nIG1vYmlsZSBhcHBzIGFuZCB3ZWJzaXRlcyBzaW5jZVxuICAgICAgICAgIDIwMTQuIEknbSBpbnRlcmVzdGVkIGluIHdvcmtpbmcgb24gcHJvZHVjdHMgdGhhdCBjYW4gaGVscCB0aGUgZnV0dXJlXG4gICAgICAgICAgb2Ygc29jaWV0eSByZWdhcmRpbmcgZGF0YSBwcml2YWN5IGFuZCBzdXN0YWluYWJpbGl0eS4gSSBsaXZlIGluXG4gICAgICAgICAgTG9uZG9uLCBVSyBhbmQgY3VycmVudGx5IGhlbHBpbmcgYnVpbGQgYSBiZXR0ZXIgSW50ZXJuZXQgYXRcbiAgICAgICAgICBDbG91ZGZsYXJlLlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9BYm91dExheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ })

})