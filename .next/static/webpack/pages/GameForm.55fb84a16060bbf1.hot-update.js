"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/GameForm",{

/***/ "./src/pages/GameForm.js":
/*!*******************************!*\
  !*** ./src/pages/GameForm.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var src_components_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Header.js */ \"./src/components/Header.js\");\n/* harmony import */ var src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/styles/GameForm.module.css */ \"./src/styles/GameForm.module.css\");\n/* harmony import */ var src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_services_auth_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/auth.constants.js */ \"./src/services/auth.constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst GameForm = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        // user_id: state.user.user_id,\n        title: \"\",\n        points: \"\",\n        rebounds: \"\",\n        blocks: \"\",\n        steals: \"\",\n        assists: \"\",\n        saves: \"\",\n        min_played: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    const handleSubmit = async (e)=>{\n        console.log(formData);\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/api/games/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData),\n                user: state.user.user_id\n            });\n            const data = await response.json();\n            console.log(data); // Display success or error message\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Title\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    title: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"int\",\n                            name: \"points\",\n                            placeholder: \"Points\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    points: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"rebounds\",\n                            placeholder: \"Rebounds\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    rebounds: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"blocks\",\n                            placeholder: \"Blocks\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    blocks: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"steals\",\n                            placeholder: \"Steals\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    steals: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"assists\",\n                            placeholder: \"Assists\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    assists: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"saves\",\n                            placeholder: \"Saves\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    saves: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 106,\n                            columnNumber: 23\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"min_played\",\n                            placeholder: \"Minutes Played\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    min_played: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 113,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Submit Game\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 120,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GameForm, \"RSwmFOzjQHkuAiP0OGtlePjNGgY=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = GameForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameForm);\nvar _c;\n$RefreshReg$(_c, \"GameForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7Ozs7c0NBRTFELDhEQUFDTjs0QkFDR3JCLE1BQUs7NEJBQ0xzQixNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxRQUFROzRCQUNSQyxVQUFVLENBQUN0QixJQUFNbkIsWUFBWTtvQ0FBRU0sU0FBU2EsRUFBRXVCLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBQzs7Ozs7O3NDQUN6RCw4REFBQ047NEJBQ0NyQixNQUFLOzRCQUNMc0IsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsUUFBUTs0QkFDUkMsVUFBVSxDQUFDdEIsSUFBTW5CLFlBQVk7b0NBQUVPLE9BQU9ZLEVBQUV1QixNQUFNLENBQUNDLEtBQUs7Z0NBQUM7Ozs7OztzQ0FFekQsOERBQUNOOzRCQUNHckIsTUFBSzs0QkFDTHNCLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLFFBQVE7NEJBQ1JDLFVBQVUsQ0FBQ3RCLElBQU1uQixZQUFZO29DQUFFUSxZQUFZVyxFQUFFdUIsTUFBTSxDQUFDQyxLQUFLO2dDQUFDOzs7Ozs7c0NBRTlELDhEQUFDQzs0QkFBTzVCLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDO0dBbkhNcEI7O1FBQzBCUCxnRUFBY0E7OztLQUR4Q087QUFxSE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0dhbWVGb3JtLmpzPzlmZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwic3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcInNyYy9zdHlsZXMvR2FtZUZvcm0ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBBUElfVVJMIGZyb20gJ3NyYy9zZXJ2aWNlcy9hdXRoLmNvbnN0YW50cy5qcyc7XHJcblxyXG5jb25zdCBHYW1lRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgLy8gdXNlcl9pZDogc3RhdGUudXNlci51c2VyX2lkLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBwb2ludHM6ICcnLFxyXG4gICAgICAgIHJlYm91bmRzOiAnJyxcclxuICAgICAgICBibG9ja3M6ICcnLFxyXG4gICAgICAgIHN0ZWFsczogJycsXHJcbiAgICAgICAgYXNzaXN0czogJycsXHJcbiAgICAgICAgc2F2ZXM6ICcnLFxyXG4gICAgICAgIG1pbl9wbGF5ZWQ6ICcnLFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICAgICAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBqd3REZWNvZGUodXNlckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1VTRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHVzZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2dhbWVzLycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogc3RhdGUudXNlci51c2VyX2lkLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpOyAvLyBEaXNwbGF5IHN1Y2Nlc3Mgb3IgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyB0aXRsZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImludFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2ludHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvaW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyBwb2ludHM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlYm91bmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWJvdW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyByZWJvdW5kczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgYmxvY2tzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGVhbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0ZWFsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyBzdGVhbHM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFzc2lzdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFzc2lzdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgYXNzaXN0czogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz48aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2F2ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNhdmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHNhdmVzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5fcGxheWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNaW51dGVzIFBsYXllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyBtaW5fcGxheWVkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdCBHYW1lPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVGb3JtOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUdsb2JhbFN0YXRlIiwiand0RGVjb2RlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiSGVhZGVyIiwic3R5bGVzIiwiQVBJX1VSTCIsIkdhbWVGb3JtIiwic3RhdGUiLCJkaXNwYXRjaCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0aXRsZSIsInBvaW50cyIsInJlYm91bmRzIiwiYmxvY2tzIiwic3RlYWxzIiwiYXNzaXN0cyIsInNhdmVzIiwibWluX3BsYXllZCIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyX2lkIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/GameForm.js\n"));

/***/ })

});