"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/accounts",{

/***/ "./pages/accounts.js":
/*!***************************!*\
  !*** ./pages/accounts.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AccountsCreate = ()=>{\n    _s();\n    const [companyName, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameName, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [paymentAmount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const changeCompanyName = (e)=>{\n        const currentCompany = e.target.value;\n        setCompany(currentCompany);\n    };\n    const changeGameName = (e)=>{\n        const currentGame = e.target.value;\n        setGame(currentGame);\n    };\n    const changeAmount = (e)=>{\n        const currentAmount = e.target.value;\n        setAmount(currentAmount);\n    };\n    const changeCurrency = (e)=>{\n        const currentCurrency = e.target.value;\n        setCurrency(currentCurrency);\n    };\n    const handleCreate = async ()=>{\n        const data = new FormData();\n        let payment;\n        let paymentData;\n        try {\n            if (paymentAmount !== \"\") {\n                payment = \"Paid\";\n                paymentData = new Date().toISOString();\n            } else {\n                payment = \"Not Paid\";\n                paymentData = \"\";\n            }\n            const newProduct = {\n                companyName,\n                gameName,\n                paymentAmount,\n                currency,\n                payment,\n                paymentData\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://two4-server.onrender.com/api/accountsNew\", newProduct).then((res)=>{\n                router.reload();\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"0 auto\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            fluid: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                    style: {\n                        width: \"20%\",\n                        margin: \"0 auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add new Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                            className: \"mb-3\",\n                            style: {\n                                width: \"20%\",\n                                bottom: \"30px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Select, {\n                                \"aria-label\": \"Default select example\",\n                                style: {\n                                    width: \"20%\",\n                                    top: \"30px\"\n                                },\n                                onChange: (e)=>changeCompanyName(e),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        selected: true,\n                                        disabled: true,\n                                        hidden: true,\n                                        children: \"Change Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        Value: \"Company1\",\n                                        children: \"Company1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Company2\",\n                                        children: \"Company2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Company3\",\n                                        children: \"Company3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                            className: \"mb-3\",\n                            style: {\n                                width: \"20%\",\n                                left: \"20px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {\n                                placeholder: \"Game Name\",\n                                \"aria-label\": \"\",\n                                type: \"string\",\n                                onChange: (e)=>changeGameName(e),\n                                \"aria-describedby\": \"basic-addon1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                            className: \"mb-3\",\n                            style: {\n                                width: \"20%\",\n                                left: \"40px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {\n                                placeholder: \"Amount\",\n                                \"aria-label\": \"\",\n                                type: \"number\",\n                                onChange: (e)=>changeAmount(e),\n                                \"aria-describedby\": \"basic-addon1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                            className: \"mb-3\",\n                            style: {\n                                width: \"16%\",\n                                bottom: \"30px\",\n                                left: \"60px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Select, {\n                                \"aria-label\": \"Default select example\",\n                                style: {\n                                    width: \"20%\",\n                                    top: \"30px\"\n                                },\n                                onChange: (e)=>changeCurrency(e),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        selected: true,\n                                        disabled: true,\n                                        hidden: true,\n                                        children: \"Change Currency\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"$\",\n                                        children: \"$\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"€\",\n                                        children: \"€\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                    lineNumber: 71,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                    className: \"mb-4\",\n                    style: {\n                        width: \"20%\",\n                        margin: \"0 auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            variant: \"outline-success\",\n                            id: \"button-addon1\",\n                            style: {\n                                width: \"150px\"\n                            },\n                            onClick: handleCreate,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                style: {\n                                    color: \"red\",\n                                    textDecoration: \"none\",\n                                    width: \"40px\"\n                                },\n                                children: \"Create account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                            lineNumber: 111,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            variant: \"outline-dark\",\n                            id: \"button-addon1\",\n                            style: {\n                                width: \"150px\",\n                                top: \"20px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                style: {\n                                    color: \"red\",\n                                    textDecoration: \"none\",\n                                    width: \"40px\"\n                                },\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                                lineNumber: 120,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n            lineNumber: 67,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lyon/Desktop/24_front/pages/accounts.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AccountsCreate, \"rUvmNrhu5s4peKVy5g3/U3kvZoQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AccountsCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountsCreate);\nvar _c;\n$RefreshReg$(_c, \"AccountsCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBUXhCLE9BQU87Z0NBQU07MENBQUc7Ozs7Ozs7Ozs7O3NDQUlqRiw4REFBQzVDLG1EQUFNQTs0QkFBQytELFNBQVE7NEJBQWVDLElBQUc7NEJBQWdCdkIsT0FBTztnQ0FBRUcsT0FBTztnQ0FBU08sS0FBSzs0QkFBTTtzQ0FFbEYsNEVBQUNoRCxrREFBSUE7Z0NBQUMrRCxNQUFLO2dDQUFJekIsT0FBTztvQ0FBRTBCLE9BQU87b0NBQU9DLGdCQUFnQjtvQ0FBUXhCLE9BQU87Z0NBQU07MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEc7R0F4SE14Qzs7UUFNYU4sa0RBQVNBOzs7S0FOdEJNO0FBeUhOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnRzLmpzPzNjZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtLCBCdXR0b24sIElucHV0R3JvdXAsIENvbnRhaW5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgQWNjb3VudHNDcmVhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbXBhbnlOYW1lLCBzZXRDb21wYW55XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ2FtZU5hbWUsIHNldEdhbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXltZW50QW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoJycpOyAgICBcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgY2hhbmdlQ29tcGFueU5hbWUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29tcGFueSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBzZXRDb21wYW55KGN1cnJlbnRDb21wYW55KTtcbiAgICB9O1xuICAgIGNvbnN0IGNoYW5nZUdhbWVOYW1lID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEdhbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2V0R2FtZShjdXJyZW50R2FtZSk7XG4gICAgfTtcbiAgICBjb25zdCBjaGFuZ2VBbW91bnQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50QW1vdW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldEFtb3VudChjdXJyZW50QW1vdW50KTtcbiAgICB9O1xuICAgIGNvbnN0IGNoYW5nZUN1cnJlbmN5ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEN1cnJlbmN5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldEN1cnJlbmN5KGN1cnJlbnRDdXJyZW5jeSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBsZXQgcGF5bWVudDtcbiAgICAgICAgbGV0IHBheW1lbnREYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHBheW1lbnRBbW91bnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50ID0gXCJQYWlkXCI7XG4gICAgICAgICAgICAgICAgcGF5bWVudERhdGEgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBheW1lbnQgPSBcIk5vdCBQYWlkXCI7XG4gICAgICAgICAgICAgICAgcGF5bWVudERhdGEgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UHJvZHVjdCA9IHtcbiAgICAgICAgICAgICAgICBjb21wYW55TmFtZSxcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSxcbiAgICAgICAgICAgICAgICBwYXltZW50QW1vdW50LFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5LFxuICAgICAgICAgICAgICAgIHBheW1lbnQsXG4gICAgICAgICAgICAgICAgcGF5bWVudERhdGFcbiAgICAgICAgICAgIH07ICAgIFxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgaHR0cHM6Ly90d280LXNlcnZlci5vbnJlbmRlci5jb20vYXBpL2FjY291bnRzTmV3YCwgbmV3UHJvZHVjdClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMCBhdXRvXCJ9fT4gICBcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD1cIm1kXCIgPiAgICBcbiAgICAgICAgPElucHV0R3JvdXAgc3R5bGU9e3sgd2lkdGg6ICcyMCUnLCBtYXJnaW46ICcwIGF1dG8nfX0+XG4gICAgICAgICAgICA8aDIgPkFkZCBuZXcgQWNjb3VudDwvaDI+XG4gICAgICAgIDwvSW5wdXRHcm91cD4gXG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XG4gICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBzdHlsZT17eyB3aWR0aDogJzIwJScsIGJvdHRvbTogJzMwcHgnfX0+XG4gICAgICAgICAgICA8Rm9ybS5TZWxlY3QgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIiBzdHlsZT17eyB3aWR0aDogJzIwJScsIHRvcDogJzMwcHgnfX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNvbXBhbnlOYW1lKGUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+Q2hhbmdlIENvbXBhbnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIFZhbHVlPVwiQ29tcGFueTFcIj5Db21wYW55MTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb21wYW55MlwiPkNvbXBhbnkyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNvbXBhbnkzXCI+Q29tcGFueTM8L29wdGlvbj5cbiAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgbGVmdDogJzIwcHgnfX0+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHYW1lIE5hbWVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlwiXG4gICAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlR2FtZU5hbWUoZSl9XG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgbGVmdDogJzQwcHgnfX0+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQW1vdW50KGUpfVxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBzdHlsZT17eyB3aWR0aDogJzE2JScsIGJvdHRvbTogJzMwcHgnLCBsZWZ0OiAnNjBweCd9fT5cbiAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiIHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgdG9wOiAnMzBweCd9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDdXJyZW5jeShlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPkNoYW5nZSBDdXJyZW5jeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIkXCI+JDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLigqxcIj7igqw8L29wdGlvbj5cbiAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICA8L2Rpdj5cbiAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItNFwiIHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgbWFyZ2luOiAnMCBhdXRvJ319PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIGlkPVwiYnV0dG9uLWFkZG9uMVwiIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnfX0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCI0MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhcmtcIiBpZD1cImJ1dHRvbi1hZGRvbjFcIiBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgdG9wOiAnMjBweCd9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCI0MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIDwvQ29udGFpbmVyPiAgIFxuICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzQ3JlYXRlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJDb250YWluZXIiLCJMaW5rIiwiQWNjb3VudHNDcmVhdGUiLCJjb21wYW55TmFtZSIsInNldENvbXBhbnkiLCJnYW1lTmFtZSIsInNldEdhbWUiLCJwYXltZW50QW1vdW50Iiwic2V0QW1vdW50IiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsInJvdXRlciIsImNoYW5nZUNvbXBhbnlOYW1lIiwiZSIsImN1cnJlbnRDb21wYW55IiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VHYW1lTmFtZSIsImN1cnJlbnRHYW1lIiwiY2hhbmdlQW1vdW50IiwiY3VycmVudEFtb3VudCIsImNoYW5nZUN1cnJlbmN5IiwiY3VycmVudEN1cnJlbmN5IiwiaGFuZGxlQ3JlYXRlIiwiZGF0YSIsIkZvcm1EYXRhIiwicGF5bWVudCIsInBheW1lbnREYXRhIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibmV3UHJvZHVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwicmVsb2FkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwibWFyZ2luIiwiZmx1aWQiLCJ3aWR0aCIsImgyIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsImJvdHRvbSIsIlNlbGVjdCIsImFyaWEtbGFiZWwiLCJ0b3AiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwiZGlzYWJsZWQiLCJoaWRkZW4iLCJWYWx1ZSIsImxlZnQiLCJDb250cm9sIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYXJpYS1kZXNjcmliZWRieSIsInZhcmlhbnQiLCJpZCIsIm9uQ2xpY2siLCJocmVmIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/accounts.js\n"));

/***/ })

});