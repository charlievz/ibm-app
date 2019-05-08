(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/styles.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/styles.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".logo {\n\twidth: 110px !important;\n\theight: 45px !important;\n}\n\n.header, .footer {\n\theight: 55px !important;\n\twidth: 100% !important;\n\tpadding: 0px !important;\n\tmargin: 0px !important;\n}\n\n.app {\n\twidth: 100% !important;\n\theight: 100% !important;\n}\n\n.footer {\n\tposition: fixed !important;\n\tbottom: 0 !important;\n}\n\n.formDiv, .resultsContainer {\n\tmargin-left: 200px !important;\n\tmargin-right: 200px !important;\n\tmargin-top: 20px !important;\n\n}\n\n.checkbox {\n\ttop: 50% !important;\n}\n\n.left-column{\n\ttext-overflow: ellipsis !important;\n}\n\np {\n\tmargin-bottom: 0px !important;\n}\n\n.other-column {\n\ttext-align: center !important;\n}\n\n.searchResult {\n\tmargin-bottom: 20px !important;\n}\n\n.lowered-text, .description {\n\tmargin-top: 10px;\n}\n\n.description {\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n\n.label {\n\ttext-align: center !important;\n\tmargin-top: 10px !important;\n\tmargin-bottom: 10px !important;\n}\n\n.view-range-container {\n\ttop: 50%;\n    position: relative;\n    transform: translateY(-50%);\n    display: flex !important;\n    align-items: center !important;\n}\n\n.view-dropdown-container {\n\tdisplay: block !important;\n}\n\n.view-dropdown .range-dropdown {\n\tmargin-left: 10px !important;\n}\n\n.search-button {\n\tpadding-top: 10px !important;\n\tmargin: 0 auto !important;\n\tdisplay: block !important;\n}\n\n.range-dropdown {\n\tmax-width: 130px !important;\n\twidth: 130px !important;\n}", ""]);



/***/ }),

/***/ "./src/actions/AppActions.js":
/*!***********************************!*\
  !*** ./src/actions/AppActions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_AppUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/AppUtils */ "./src/utils/AppUtils.js");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.js");


const AppActions = {
  handleSearch(searchState) {
    const license = searchState.license,
          stars = searchState.stars,
          text = searchState.text,
          includeForked = searchState.includeForked;
    let url = "https://api.github.com/search/repositories?q=".concat(encodeURI(text), "+license:").concat(encodeURI(license), "+stars:").concat(stars);

    if (includeForked) {
      url += 'fork:true';
    }

    fetch(url).then(response => {
      return response.json();
    }).then(json => {
      const results = _utils_AppUtils__WEBPACK_IMPORTED_MODULE_0__["default"].processResponse(json);
      _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].handleResponse(results); // despite my efforts to resolve issue, the flux dispatcher wasn't working for me
    }).catch(error => {
      console.log(error);
    });
  }

};
/* harmony default export */ __webpack_exports__["default"] = (AppActions);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _PageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageComponent */ "./src/components/PageComponent.js");
/* harmony import */ var _ibm_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ibm.png */ "./src/components/ibm.png");
/* harmony import */ var _ibm_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ibm_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Charlie/Desktop/ibm-app/src/components/App.js";





function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    color: "black",
    inverted: true,
    borderless: true,
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _ibm_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    color: "black",
    inverted: true,
    borderless: true,
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/PageComponent.js":
/*!*****************************************!*\
  !*** ./src/components/PageComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchForm */ "./src/components/SearchForm.js");
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchResults */ "./src/components/SearchResults.js");
var _jsxFileName = "/Users/Charlie/Desktop/ibm-app/src/components/PageComponent.js";





class PageComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchResults__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageComponent);

/***/ }),

/***/ "./src/components/SearchForm.js":
/*!**************************************!*\
  !*** ./src/components/SearchForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants_AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/AppConstants */ "./src/constants/AppConstants.js");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/AppActions */ "./src/actions/AppActions.js");
var _jsxFileName = "/Users/Charlie/Desktop/ibm-app/src/components/SearchForm.js";





class SearchForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSearch = () => {// AppActions.handleSearch(this.state);
    };

    this.handleTextChange = (event, data) => {// this.setState({text:data.value});
    };

    this.handleCheck = (event, data) => {// this.setState({
      // 	includeForked:data.checked
      // });
    };

    this.handleLicenseChange = (event, data) => {// console.log(data.value);
      // this.setState({license:data.value});
    };

    this.handleStarsChange = (event, data) => {// const enteredText = data.value.trim();
      // const rangeTest = /^\d+..\d+$/;
      // const limitTest = /(^>|^<|^>=|^<=)\d+$/;
      // const passes = rangeTest.test(enteredText) || limitTest.test(enteredText) || !isNaN(enteredText);
      // this.setState({
      // 	stars:data.value,
      // 	starsError: !passes,
      // });
    };

    this.state = {};
  }

  render() {
    // const {text, stars, license, includeForked, starsError} = this.state;
    // const 
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "formDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      columns: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      className: "other-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "view-range-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Due:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      placeholder: "Select Range",
      fluid: true,
      search: true,
      selection: true,
      options: _constants_AppConstants__WEBPACK_IMPORTED_MODULE_2__["DropdownSelections"],
      className: "range-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      className: "other-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "view-dropdown-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "View:"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      text: "All",
      className: "view-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      text: "All",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      text: "Completed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      className: "other-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: true,
      primary: true,
      labelPosition: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), "Create")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      className: "search-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, " Search "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./src/components/SearchResults.js":
/*!*****************************************!*\
  !*** ./src/components/SearchResults.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/Charlie/Desktop/ibm-app/src/components/SearchResults.js";




class SearchResults extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.onChange = () => {
      this.setState({
        results: _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].results
      });
    };

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].addChangeListener(this.onChange);
  }

  componentUnmount() {
    _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].removeChangeListener(this.onChange);
  }

  render() {
    const results = this.state.results;

    if (!results.length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Press the search button");
    }

    const listItems = results.map((result, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: idx,
      className: "searchResult",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      columns: 3,
      divided: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 10,
      className: "left-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: result.repoLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, result.ownerName, " / ", result.repoName, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, result.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 3,
      className: "other-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "STARS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lowered-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, result.numStars)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 3,
      className: "other-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "LICENSE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lowered-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, result.license)))))));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "resultsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "SEARCH RESULTS:"), listItems);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./src/components/ibm.png":
/*!********************************!*\
  !*** ./src/components/ibm.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ibm.93622c29.png";

/***/ }),

/***/ "./src/constants/AppConstants.js":
/*!***************************************!*\
  !*** ./src/constants/AppConstants.js ***!
  \***************************************/
/*! exports provided: DropdownSelections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownSelections", function() { return DropdownSelections; });
const DropdownSelections = [{
  key: 'between',
  value: 'between',
  text: 'between'
}, {
  key: 'on',
  value: 'on',
  text: 'on'
}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Charlie/Desktop/ibm-app/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/stores/AppStore.js":
/*!********************************!*\
  !*** ./src/stores/AppStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);


class AppStore extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
  constructor() {
    super();

    this.handleResponse = response => {
      this.state.results = response;
      this.emitChange();
    };

    this.state = {
      results: []
    };
  }

  get results() {
    return this.state.results;
  }

  emitChange() {
    this.emit("CHANGE_EVENT");
  }

  addChangeListener(callback) {
    this.on("CHANGE_EVENT", callback);
  }

  removeChangeListener(callback) {
    this.removeListener("CHANGE_EVENT", callback);
  }

}

const appStore = new AppStore();
/* harmony default export */ __webpack_exports__["default"] = (appStore);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/utils/AppUtils.js":
/*!*******************************!*\
  !*** ./src/utils/AppUtils.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResult */ "./src/utils/SearchResult.js");

const AppUtils = {
  processResponse: response => {
    const items = [];
    response.items.forEach(item => {
      items.push(new _SearchResult__WEBPACK_IMPORTED_MODULE_0__["default"](item.name, item.owner.login, item.svn_url, item.description, item.stargazers_count, item.license.name));
    });
    return items;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AppUtils);

/***/ }),

/***/ "./src/utils/SearchResult.js":
/*!***********************************!*\
  !*** ./src/utils/SearchResult.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchResult; });
/*
Each result should include the following data:

Repo name
Repo owner's name
Link to the repo
Description
Number of stars
License

*/
class SearchResult {
  constructor(repoName, ownerName, repoLink, description, numStars, license) {
    this.repoName = repoName;
    this.ownerName = ownerName;
    this.repoLink = repoLink;
    this.description = description;
    this.numStars = numStars;
    this.license = license;
  }

}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Charlie/Desktop/ibm-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Charlie/Desktop/ibm-app/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map