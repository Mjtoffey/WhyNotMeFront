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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var src_components_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Header.js */ \"./src/components/Header.js\");\n/* harmony import */ var src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/styles/GameForm.module.css */ \"./src/styles/GameForm.module.css\");\n/* harmony import */ var src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import { Url } from 'next/dist/shared/lib/router/router';\nconst GameForm = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user_id: \"\",\n        title: \"\",\n        points: \"\",\n        rebounds: \"\",\n        blocks: \"\",\n        steals: \"\",\n        assists: \"\",\n        saves: \"\",\n        min_played: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    const handleSubmit = async (e)=>{\n        console.log(formData);\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/games/\", {\n                URL: API_URL,\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const data = await response.json();\n            console.log(data); // Display success or error message\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(formData);\n    }, [\n        formData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (src_styles_GameForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Title\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    title: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"int\",\n                            name: \"points\",\n                            placeholder: \"Points\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    points: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"rebounds\",\n                            placeholder: \"Rebounds\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    rebounds: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"blocks\",\n                            placeholder: \"Blocks\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    blocks: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"steals\",\n                            placeholder: \"Steals\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    steals: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"assists\",\n                            placeholder: \"Assists\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    assists: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"saves\",\n                            placeholder: \"Saves\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    saves: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 111,\n                            columnNumber: 23\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"min_played\",\n                            placeholder: \"Minutes Played\",\n                            required: true,\n                            onChange: (e)=>setFormData({\n                                    min_played: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Submit Game\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matthew Toffey\\\\Documents\\\\GitHub\\\\WhyNotMeFront\\\\src\\\\pages\\\\GameForm.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GameForm, \"4ligkNvhsUotIMXP5qm2BLWN2l4=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = GameForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameForm);\nvar _c;\n$RefreshReg$(_c, \"GameForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TXBCLFlBQVk7b0NBQUVNLFFBQVFjLEVBQUV3QixNQUFNLENBQUNDLEtBQUs7Z0NBQUM7Ozs7OztzQ0FFMUQsOERBQUNOOzRCQUNHdEIsTUFBSzs0QkFDTHVCLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLFFBQVE7NEJBQ1JDLFVBQVUsQ0FBQ3ZCLElBQU1wQixZQUFZO29DQUFFTyxTQUFTYSxFQUFFd0IsTUFBTSxDQUFDQyxLQUFLO2dDQUFDOzs7Ozs7c0NBQ3pELDhEQUFDTjs0QkFDQ3RCLE1BQUs7NEJBQ0x1QixNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxRQUFROzRCQUNSQyxVQUFVLENBQUN2QixJQUFNcEIsWUFBWTtvQ0FBRVEsT0FBT1ksRUFBRXdCLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBQzs7Ozs7O3NDQUV6RCw4REFBQ047NEJBQ0d0QixNQUFLOzRCQUNMdUIsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsUUFBUTs0QkFDUkMsVUFBVSxDQUFDdkIsSUFBTXBCLFlBQVk7b0NBQUVTLFlBQVlXLEVBQUV3QixNQUFNLENBQUNDLEtBQUs7Z0NBQUM7Ozs7OztzQ0FFOUQsOERBQUNDOzRCQUFPN0IsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUM7R0F4SE1yQjs7UUFDMEJOLGdFQUFjQTs7O0tBRHhDTTtBQTBITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvR2FtZUZvcm0uanM/OWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJzcmMvY29tcG9uZW50cy9IZWFkZXIuanNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwic3JjL3N0eWxlcy9HYW1lRm9ybS5tb2R1bGUuY3NzXCJcclxuLy8gaW1wb3J0IHsgVXJsIH0gZnJvbSAnbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlcic7XHJcblxyXG5jb25zdCBHYW1lRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcl9pZDogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHBvaW50czogJycsXHJcbiAgICAgICAgcmVib3VuZHM6ICcnLFxyXG4gICAgICAgIGJsb2NrczogJycsXHJcbiAgICAgICAgc3RlYWxzOiAnJyxcclxuICAgICAgICBhc3Npc3RzOiAnJyxcclxuICAgICAgICBzYXZlczogJycsXHJcbiAgICAgICAgbWluX3BsYXllZDogJycsXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gcmV0cmlldmUgdXNlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGp3dERlY29kZSh1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBkYXRhOicsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdXNlclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2FtZXMvJywge1xyXG4gICAgICAgICAgICAgICAgVVJMOiBBUElfVVJMLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7IC8vIERpc3BsYXkgc3VjY2VzcyBvciBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxyXG4gICAgfSxcclxuICAgICAgICBbZm9ybURhdGFdXHJcbiAgICApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvaW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9pbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHBvaW50czogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVib3VuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlYm91bmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHJlYm91bmRzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyBibG9ja3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0ZWFsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RlYWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IHN0ZWFsczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXNzaXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNzaXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyBhc3Npc3RzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPjxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYXZlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2F2ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgc2F2ZXM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbl9wbGF5ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbnV0ZXMgUGxheWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IG1pbl9wbGF5ZWQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0IEdhbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUZvcm07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlR2xvYmFsU3RhdGUiLCJqd3REZWNvZGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJIZWFkZXIiLCJzdHlsZXMiLCJHYW1lRm9ybSIsInN0YXRlIiwiZGlzcGF0Y2giLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlcl9pZCIsInRpdGxlIiwicG9pbnRzIiwicmVib3VuZHMiLCJibG9ja3MiLCJzdGVhbHMiLCJhc3Npc3RzIiwic2F2ZXMiLCJtaW5fcGxheWVkIiwiZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UiLCJ1c2VyRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIlVSTCIsIkFQSV9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/GameForm.js\n"));

/***/ })

});