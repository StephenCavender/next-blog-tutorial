webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"siteTitle\", function() { return siteTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/stephencavender/git/next-blog-tutorial/components/layout.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar name = 'Stephen Cavender';\nvar siteTitle = 'Next.js Sample Website';\nfunction Layout(_ref) {\n  var children = _ref.children,\n      home = _ref.home;\n  return __jsx(\"div\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Learn how to build a personal website using Next.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: \"https://og-image.now.sh/\".concat(encodeURI(siteTitle), \".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"og:title\",\n    content: siteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary_large_image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  })), __jsx(\"header\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"img\", {\n    src: \"images/profile.png\",\n    className: \"\".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerHomeImage, \" \").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderCircle),\n    alt: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }), __jsx(\"h1\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heading2Xl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, name)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/profile.png\",\n    className: \"\".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerImage, \" \").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderCircle),\n    alt: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }))), __jsx(\"h2\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.colorInherit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, name))))), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, children), !home && __jsx(\"div\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.backToHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, \"\\u2190 Back to home\"))));\n}\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2U0Y2UiXSwibmFtZXMiOlsibmFtZSIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwiaG9tZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImVuY29kZVVSSSIsImhlYWRlciIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJoZWFkaW5nMlhsIiwiaGVhZGVySW1hZ2UiLCJoZWFkaW5nTGciLCJjb2xvckluaGVyaXQiLCJiYWNrVG9Ib21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsa0JBQWI7QUFDTyxJQUFNQyxTQUFTLEdBQUcsd0JBQWxCO0FBRVEsU0FBU0MsTUFBVCxPQU1WO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsSUFJQyxRQUpEQSxJQUlDO0FBQ0gsU0FDRTtBQUFLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxXQUFPLEVBQUMscURBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBTUU7QUFDRSxZQUFRLEVBQUMsVUFEWDtBQUVFLFdBQU8sb0NBQTZCQyxTQUFTLENBQzNDTixTQUQyQyxDQUF0QyxrSkFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFZRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBRUEsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUU7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUMscUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQURGLEVBZ0JFO0FBQVEsYUFBUyxFQUFFSSx5REFBTSxDQUFDRyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLElBQUksR0FDSCxtRUFDRTtBQUNFLE9BQUcsRUFBQyxvQkFETjtBQUVFLGFBQVMsWUFBS0MseURBQU0sQ0FBQ0ksZUFBWixjQUErQkMsK0RBQVUsQ0FBQ0MsWUFBMUMsQ0FGWDtBQUdFLE9BQUcsRUFBRVgsSUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFJLGFBQVMsRUFBRVUsK0RBQVUsQ0FBQ0UsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q1osSUFBdkMsQ0FORixDQURHLEdBVUgsbUVBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMscUJBRE47QUFFRSxhQUFTLFlBQUtLLHlEQUFNLENBQUNRLFdBQVosY0FBMkJILCtEQUFVLENBQUNDLFlBQXRDLENBRlg7QUFHRSxPQUFHLEVBQUVYLElBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQVVFO0FBQUksYUFBUyxFQUFFVSwrREFBVSxDQUFDSSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUosK0RBQVUsQ0FBQ0ssWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q2YsSUFBeEMsQ0FERixDQURGLENBVkYsQ0FYSixDQWhCRixFQTZDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9HLFFBQVAsQ0E3Q0YsRUE4Q0csQ0FBQ0MsSUFBRCxJQUNDO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDVyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsQ0EvQ0osQ0FERjtBQXdERDtLQS9EdUJkLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmFtZSA9ICdTdGVwaGVuIENhdmVuZGVyJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdOZXh0LmpzIFNhbXBsZSBXZWJzaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICAgIGNoaWxkcmVuLFxuICAgIGhvbWVcbiAgfToge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgICBob21lPzogYm9vbGVhblxuICB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL29nLWltYWdlLm5vdy5zaC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIHNpdGVUaXRsZVxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnZlcmNlbC5jb20lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICB7aG9tZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvcHJvZmlsZS5wbmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJIb21lSW1hZ2V9ICR7dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9YH1cbiAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZzJYbH0+e25hbWV9PC9oMT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICB7IWhvbWUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tUb0hvbWV9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

})