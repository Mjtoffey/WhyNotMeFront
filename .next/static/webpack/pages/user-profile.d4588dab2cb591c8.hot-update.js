"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user-profile",{

/***/ "./src/pages/user-profile.js":
/*!***********************************!*\
  !*** ./src/pages/user-profile.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_styles_welcome_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/styles/welcome.module.css */ \"./src/styles/welcome.module.css\");\n/* harmony import */ var src_styles_welcome_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_styles_welcome_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var src_components_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Header.js */ \"./src/components/Header.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import Link\n\n\n\n\nvar __N_SSP = true;\nfunction UserProfile(param) {\n    let { user, games } = param;\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_8__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    const isCurrentUserProfile = state.user && state.user.id === user.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (src_styles_welcome_module_css__WEBPACK_IMPORTED_MODULE_10___default().profileContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Header_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        user.first_name,\n                        \"'s Profile\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (src_styles_welcome_module_css__WEBPACK_IMPORTED_MODULE_10___default().profileContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            user.first_name,\n                            \"'s Profile\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"First Name: \",\n                            user.first_name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Last Name: \",\n                            user.last_name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"School: \",\n                            user.school\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Social Media: \",\n                            user.social_media\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Email: \",\n                            user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Sport: \",\n                            user.sport\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"User Type: \",\n                            user.player ? \"Player\" : \"Non-Player\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    isCurrentUserProfile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/GameForm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                className: (src_styles_welcome_module_css__WEBPACK_IMPORTED_MODULE_10___default().addButton),\n                                children: \"Add Game\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false),\n                    Array.isArray(games) && games.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Game Objects:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            game.name,\n                                            \" - \",\n                                            game.date\n                                        ]\n                                    }, game.id, true, {\n                                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 33\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No games available for this user.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\user-profile.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(UserProfile, \"KdCZHTfh7Nvnuc11Zxcd64wd9Q8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_8__.useGlobalState\n    ];\n});\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlci1wcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2Y7QUFDaUI7QUFDSztBQUNWO0FBQ0Q7QUFDWCxDQUFDLGNBQWM7QUFDRjtBQUNJO0FBQ1U7QUFDckI7O0FBRXBCLFNBQVNXLFlBQVksS0FBZTtRQUFmLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQWY7O0lBQ2hDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR04sb0VBQWNBO0lBQzFDVCxnREFBU0EsQ0FBQztRQUNOLG9EQUFvRDtRQUNwRCxNQUFNZ0IsMEJBQTBCO1lBQzVCLE1BQU1DLFdBQVdDLGFBQWFDLE9BQU8sQ0FBQztZQUN0QyxJQUFJRixVQUFVO2dCQUNWLE1BQU1MLE9BQU9GLHNEQUFTQSxDQUFDTztnQkFDdkJHLFFBQVFDLEdBQUcsQ0FBQyxjQUFjVDtnQkFDMUJHLFNBQVM7b0JBQ0xPLE1BQU07b0JBQ05DLFNBQVNYO2dCQUNiO1lBQ0o7UUFDSjtRQUNBSTtJQUNKLEdBQUcsRUFBRTtJQUdMLE1BQU1RLHVCQUF1QlYsTUFBTUYsSUFBSSxJQUFJRSxNQUFNRixJQUFJLENBQUNhLEVBQUUsS0FBS2IsS0FBS2EsRUFBRTtJQUVwRSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV3hCLHdGQUF1Qjs7MEJBQ25DLDhEQUFDSyxnRUFBTUE7Ozs7OzBCQUNQLDhEQUFDRCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDTCxrREFBSUE7MEJBQ0QsNEVBQUMyQjs7d0JBQU9qQixLQUFLa0IsVUFBVTt3QkFBQzs7Ozs7Ozs7Ozs7OzBCQUU1Qiw4REFBQ0o7Z0JBQUlDLFdBQVd4QixzRkFBcUI7O2tDQUNqQyw4REFBQzZCOzs0QkFBSXBCLEtBQUtrQixVQUFVOzRCQUFDOzs7Ozs7O2tDQUNyQiw4REFBQ0c7OzRCQUFFOzRCQUFhckIsS0FBS2tCLFVBQVU7Ozs7Ozs7a0NBQy9CLDhEQUFDRzs7NEJBQUU7NEJBQVlyQixLQUFLc0IsU0FBUzs7Ozs7OztrQ0FDN0IsOERBQUNEOzs0QkFBRTs0QkFBU3JCLEtBQUt1QixNQUFNOzs7Ozs7O2tDQUN2Qiw4REFBQ0Y7OzRCQUFFOzRCQUFlckIsS0FBS3dCLFlBQVk7Ozs7Ozs7a0NBQ25DLDhEQUFDSDs7NEJBQUU7NEJBQVFyQixLQUFLeUIsS0FBSzs7Ozs7OztrQ0FDckIsOERBQUNKOzs0QkFBRTs0QkFBUXJCLEtBQUswQixLQUFLOzs7Ozs7O2tDQUNyQiw4REFBQ0w7OzRCQUFFOzRCQUFZckIsS0FBSzJCLE1BQU0sR0FBRyxXQUFXOzs7Ozs7O29CQUV2Q2Ysc0NBQ0c7a0NBR0ksNEVBQUNsQixrREFBSUE7NEJBQUNrQyxNQUFLO3NDQUNQLDRFQUFDcEMsK0RBQU1BO2dDQUFDdUIsV0FBV3hCLGlGQUFnQjswQ0FBRTs7Ozs7Ozs7Ozs7O29CQU1oRHVDLE1BQU1DLE9BQU8sQ0FBQzlCLFVBQVVBLE1BQU0rQixNQUFNLEdBQUcsa0JBQ3BDLDhEQUFDbEI7OzBDQUNHLDhEQUFDbUI7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQ0lqQyxNQUFNa0MsR0FBRyxDQUFDLENBQUNDLHFCQUNSLDhEQUFDQzs7NENBQWtCRCxLQUFLRSxJQUFJOzRDQUFDOzRDQUFJRixLQUFLRyxJQUFJOzt1Q0FBakNILEtBQUt2QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7NkNBSzVCLDhEQUFDUTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZCO0dBaEV3QnRCOztRQUNRRixnRUFBY0E7OztLQUR0QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXItcHJvZmlsZS5qcz8yMmRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3JjL3N0eWxlcy93ZWxjb21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiOyAvLyBJbXBvcnQgTGlua1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJzcmMvY29tcG9uZW50cy9IZWFkZXIuanNcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvZmlsZSh7IHVzZXIsIGdhbWVzIH0pIHtcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBGdW5jdGlvbiB0byByZXRyaWV2ZSB1c2VyIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gand0RGVjb2RlKHVzZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB1c2VyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgaXNDdXJyZW50VXNlclByb2ZpbGUgPSBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIuaWQgPT09IHVzZXIuaWQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3VzZXIuZmlyc3RfbmFtZX0ncyBQcm9maWxlPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxoMT57dXNlci5maXJzdF9uYW1lfSdzIFByb2ZpbGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+Rmlyc3QgTmFtZToge3VzZXIuZmlyc3RfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5MYXN0IE5hbWU6IHt1c2VyLmxhc3RfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5TY2hvb2w6IHt1c2VyLnNjaG9vbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Tb2NpYWwgTWVkaWE6IHt1c2VyLnNvY2lhbF9tZWRpYX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5FbWFpbDoge3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+U3BvcnQ6IHt1c2VyLnNwb3J0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlVzZXIgVHlwZToge3VzZXIucGxheWVyID8gXCJQbGF5ZXJcIiA6IFwiTm9uLVBsYXllclwifTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNDdXJyZW50VXNlclByb2ZpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTGluayB0byBBZGQgR2FtZSBGb3JtICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0dhbWVGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0+QWRkIEdhbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRGlzcGxheSBHYW1lIE9iamVjdHMgKi99XHJcbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShnYW1lcykgJiYgZ2FtZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+R2FtZSBPYmplY3RzOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lcy5tYXAoKGdhbWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtnYW1lLmlkfT57Z2FtZS5uYW1lfSAtIHtnYW1lLmRhdGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8cD5ObyBnYW1lcyBhdmFpbGFibGUgZm9yIHRoaXMgdXNlci48L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gcXVlcnk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbdXNlclJlc3BvbnNlLCBnYW1lc1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlcnMvJHt1c2VySWR9L2ApLFxyXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9nYW1lcy8ke3VzZXJJZH0vYCksIC8vIEFkanVzdCB0aGUgZW5kcG9pbnQgVVJMIGFjY29yZGluZ2x5XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVzID0gYXdhaXQgZ2FtZXNSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICAgICAgZ2FtZXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGdhbWVzOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsInN0eWxlcyIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkxpbmsiLCJOYXZiYXIiLCJIZWFkZXIiLCJ1c2VHbG9iYWxTdGF0ZSIsImp3dERlY29kZSIsIlVzZXJQcm9maWxlIiwidXNlciIsImdhbWVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiaXNDdXJyZW50VXNlclByb2ZpbGUiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGVDb250YWluZXIiLCJ0aXRsZSIsImZpcnN0X25hbWUiLCJwcm9maWxlQ29udGVudCIsImgxIiwicCIsImxhc3RfbmFtZSIsInNjaG9vbCIsInNvY2lhbF9tZWRpYSIsImVtYWlsIiwic3BvcnQiLCJwbGF5ZXIiLCJocmVmIiwiYWRkQnV0dG9uIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiaDIiLCJ1bCIsIm1hcCIsImdhbWUiLCJsaSIsIm5hbWUiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/user-profile.js\n"));

/***/ })

});