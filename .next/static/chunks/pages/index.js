/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwitoldtenhove%2FDocuments%2FProjects%2Fopenstrategy%2Fpages%2Findex.tsx&page=%2F!":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwitoldtenhove%2FDocuments%2FProjects%2Fopenstrategy%2Fpages%2Findex.tsx&page=%2F! ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRndpdG9sZHRlbmhvdmUlMkZEb2N1bWVudHMlMkZQcm9qZWN0cyUyRm9wZW5zdHJhdGVneSUyRnBhZ2VzJTJGaW5kZXgudHN4JnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NWUyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwitoldtenhove%2FDocuments%2FProjects%2Fopenstrategy%2Fpages%2Findex.tsx&page=%2F!\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _questions_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions.json */ \"./questions.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), currentQuestion = ref4[0], setCurrentQuestion = ref4[1];\n    var handlePrevious = function() {\n        var prevQues = currentQuestion - 1;\n        prevQues >= 0 && setCurrentQuestion(prevQues);\n    };\n    var handleNext = function() {\n        var nextQues = currentQuestion + 1;\n        nextQues < _questions_json__WEBPACK_IMPORTED_MODULE_2__.length && setCurrentQuestion(nextQues);\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), selectedOptions = ref1[0], setSelectedOptions = ref1[1];\n    var handleAnswerOption = function(answer) {\n        setSelectedOptions([\n            selectedOptions[currentQuestion] = {\n                answerByUser: answer\n            }, \n        ]);\n        setSelectedOptions(_toConsumableArray(selectedOptions));\n        console.log(selectedOptions);\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), showScore = ref3[0], setShowScore = ref3[1];\n    var handleSubmitButton = function() {\n        var newScore = 0;\n        for(var i = 0; i < _questions_json__WEBPACK_IMPORTED_MODULE_2__.length; i++){\n            newScore += selectedOptions[i].answerByUser;\n        }\n        setScore(Math.round(10 * newScore / _questions_json__WEBPACK_IMPORTED_MODULE_2__.length) / 10);\n        setShowScore(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Quiz App\"\n                }, void 0, false, {\n                    fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            showScore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-semibold text-center text-white\",\n                children: [\n                    \"Your average score is \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-start w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 text-2xl text-white\",\n                                children: [\n                                    \"Category: \",\n                                    _questions_json__WEBPACK_IMPORTED_MODULE_2__[currentQuestion].category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"mt-10 text-xl text-white/60\",\n                                children: [\n                                    \"Question \",\n                                    currentQuestion + 1,\n                                    \" of \",\n                                    _questions_json__WEBPACK_IMPORTED_MODULE_2__.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full\",\n                        children: _questions_json__WEBPACK_IMPORTED_MODULE_2__[currentQuestion].answerOptions.map(function(answer, index) {\n                            var ref;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5\",\n                                onClick: function(e) {\n                                    return handleAnswerOption(answer.answer);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: answer.answer,\n                                        value: answer.answer,\n                                        checked: answer.answer === ((ref = selectedOptions[currentQuestion]) === null || ref === void 0 ? void 0 : ref.answerByUser),\n                                        onChange: function(e) {\n                                            return handleAnswerOption(answer.answer);\n                                        },\n                                        className: \"w-6 h-6 bg-black\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"ml-6 text-white\",\n                                        children: [\n                                            answer.answer,\n                                            \" \",\n                                            answer.text ? \": \" : \"\",\n                                            \" \",\n                                            answer.text,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between w-full mt-4 text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handlePrevious,\n                                className: \"w-[49%] py-3 bg-indigo-600 rounded-lg\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: currentQuestion + 1 === _questions_json__WEBPACK_IMPORTED_MODULE_2__.length ? handleSubmitButton : handleNext,\n                                className: \"w-[49%] py-3 bg-indigo-600 rounded-lg\",\n                                children: currentQuestion + 1 === _questions_json__WEBPACK_IMPORTED_MODULE_2__.length ? \"Submit\" : \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/witoldtenhove/Documents/Projects/openstrategy/pages/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"P7BSjdOoOYmaOsptyHSyumniJGs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWQxRlYsS0FBSzs7OztxQ0FlUjt5QkFDTCxDQUFDOzs7Ozs0QkFDQTtrQ0FFTiw4REFBQ1IsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDZDQUE2Qzs7MENBQ3hELDhEQUFDa0IsUUFBTTtnQ0FDUFYsT0FBTyxFQUFFOUIsY0FBYztnQ0FDdkJzQixTQUFTLEVBQUMsdUNBQXVDOzBDQUNoRCxVQUVEOzs7OztvQ0FBUzswQ0FDVCw4REFBQ2tCLFFBQU07Z0NBQ1BWLE9BQU8sRUFDSGhDLGVBQWUsR0FBRyxDQUFDLEtBQUtILG1EQUFnQixHQUN0Q3FCLGtCQUFrQixHQUNsQmQsVUFBVTtnQ0FFaEJvQixTQUFTLEVBQUMsdUNBQXVDOzBDQUVoRHhCLGVBQWUsR0FBRyxDQUFDLEtBQUtILG1EQUFnQixHQUFHLFFBQVEsR0FBRyxNQUFNOzs7OztvQ0FDcEQ7Ozs7Ozs0QkFDUDs7NEJBQ0g7Ozs7OztZQUdMLENBQ1Q7Q0FDSjtHQW5HdUJFLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgcXVlc3Rpb25zIGZyb20gXCIuLi9xdWVzdGlvbnMuanNvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBoYW5kbGVQcmV2aW91cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldlF1ZXMgPSBjdXJyZW50UXVlc3Rpb24gLSAxO1xuICAgICAgICBwcmV2UXVlcyA+PSAwICYmIHNldEN1cnJlbnRRdWVzdGlvbihwcmV2UXVlcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRRdWVzID0gY3VycmVudFF1ZXN0aW9uICsgMTtcbiAgICAgICAgbmV4dFF1ZXMgPCBxdWVzdGlvbnMubGVuZ3RoICYmIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc106IGFueSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBoYW5kbGVBbnN3ZXJPcHRpb24gPSAoYW5zd2VyOiBhbnkpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb25zKFtcbiAgICAgICAgICAgIChzZWxlY3RlZE9wdGlvbnNbY3VycmVudFF1ZXN0aW9uXSA9IHsgYW5zd2VyQnlVc2VyOiBhbnN3ZXIgfSksXG4gICAgICAgIF0pO1xuICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbnMoWy4uLnNlbGVjdGVkT3B0aW9uc10pO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzaG93U2NvcmUsIHNldFNob3dTY29yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdTY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7ICAgICAgIFxuICAgICAgICAgICAgICAgIChuZXdTY29yZSArPSBzZWxlY3RlZE9wdGlvbnNbaV0uYW5zd2VyQnlVc2VyKVxuICAgICAgICB9XG4gICAgICAgIHNldFNjb3JlKE1hdGgucm91bmQoMTAqbmV3U2NvcmUgLyBxdWVzdGlvbnMubGVuZ3RoKS8xMCk7XG4gICAgICAgIHNldFNob3dTY29yZSh0cnVlKTtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LXNjcmVlbiBweC01IGgtc2NyZWVuIGJnLVsjMUExQTFBXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5RdWl6IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIHtzaG93U2NvcmUgPyAoXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIFlvdXIgYXZlcmFnZSBzY29yZSBpcyB7c2NvcmV9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LTJ4bCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5OiB7cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC14bCB0ZXh0LXdoaXRlLzYwXCI+XG4gICAgICAgICAgICAgICAgICAgIFF1ZXN0aW9uIHtjdXJyZW50UXVlc3Rpb24gKyAxfSBvZiB7cXVlc3Rpb25zLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5hbnN3ZXJPcHRpb25zLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB5LTQgcGwtNSBtLTIgbWwtMCBzcGFjZS14LTIgYm9yZGVyLTIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgYmctd2hpdGUvNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQW5zd2VyT3B0aW9uKGFuc3dlci5hbnN3ZXIpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthbnN3ZXIuYW5zd2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlci5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIuYW5zd2VyID09PSBzZWxlY3RlZE9wdGlvbnNbY3VycmVudFF1ZXN0aW9uXT8uYW5zd2VyQnlVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUFuc3dlck9wdGlvbihhbnN3ZXIuYW5zd2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgYmctYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC02IHRleHQtd2hpdGVcIj57YW5zd2VyLmFuc3dlcn0ge2Fuc3dlci50ZXh0ID8gXCI6IFwiIDogXCJcIn0ge2Fuc3dlci50ZXh0fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG10LTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0OSVdIHB5LTMgYmctaW5kaWdvLTYwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiArIDEgPT09IHF1ZXN0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaGFuZGxlU3VibWl0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGhhbmRsZU5leHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0OSVdIHB5LTMgYmctaW5kaWdvLTYwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uICsgMSA9PT0gcXVlc3Rpb25zLmxlbmd0aCA/IFwiU3VibWl0XCIgOiBcIk5leHRcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJxdWVzdGlvbnMiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJoYW5kbGVQcmV2aW91cyIsInByZXZRdWVzIiwiaGFuZGxlTmV4dCIsIm5leHRRdWVzIiwibGVuZ3RoIiwic2VsZWN0ZWRPcHRpb25zIiwic2V0U2VsZWN0ZWRPcHRpb25zIiwiaGFuZGxlQW5zd2VyT3B0aW9uIiwiYW5zd2VyIiwiYW5zd2VyQnlVc2VyIiwiY29uc29sZSIsImxvZyIsInNjb3JlIiwic2V0U2NvcmUiLCJzaG93U2NvcmUiLCJzZXRTaG93U2NvcmUiLCJoYW5kbGVTdWJtaXRCdXR0b24iLCJuZXdTY29yZSIsImkiLCJNYXRoIiwicm91bmQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImgxIiwiY2F0ZWdvcnkiLCJoNCIsImFuc3dlck9wdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9uQ2xpY2siLCJlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwicCIsInRleHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ }),

/***/ "./questions.json":
/*!************************!*\
  !*** ./questions.json ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"category":"Letting loose mindset","answerOptions":[{"answer":1,"text":"When confronted with a problem, I think first what I have to do to solve it."},{"answer":2,"text":""},{"answer":3,"text":""},{"answer":4,"text":"When confronted with a problem, I think first whom I have to involve to solve it."}]},{"category":"Letting loose mindset","answerOptions":[{"answer":1,"text":"I tend to give the answers to difficult situations myself."},{"answer":2},{"answer":3},{"answer":4,"text":"I wait and collect the input of others before giving answers to difficult situations."}]},{"category":"Letting loose mindset","answerOptions":[{"answer":1,"text":"I feel uncomfortable sharing information as I think there is a lot to lose."},{"answer":2,"text":""},{"answer":3,"text":""},{"answer":4,"text":"I feel comfortable sharing information as I am convinced that the benefits outweigh the risks."}]},{"category":"Letting loose mindset","answerOptions":[{"answer":1,"text":"I prefer to come to a quick agreement as situations of disagreements make me feel uncomfortable."},{"answer":2,"text":""},{"answer":3,"text":""},{"answer":4,"text":"I am comfortable with disagreements as they are opportunities for learning."}]}]');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwitoldtenhove%2FDocuments%2FProjects%2Fopenstrategy%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);