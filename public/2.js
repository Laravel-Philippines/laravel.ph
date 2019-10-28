(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/events/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins */ "./resources/js/mixins/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["Form"]],
  data: function data() {
    return {
      events: null
    };
  },
  mounted: function mounted() {
    this.loadEvents();
  },
  methods: {
    loadEvents: function loadEvents(navigationPage) {
      var _this = this;

      var page = navigationPage || 1;
      var uri = '/spa/publication/events';
      axios.get(uri, {
        params: {
          search: this.form.search,
          page: page,
          sort: 'created_at|desc'
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.events = data;
      });
    },
    goToPage: function goToPage(page) {
      this.loadEvents(page);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/List.vue?vue&type=template&id=4ef33c5e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/events/List.vue?vue&type=template&id=4ef33c5e& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Events")]),
    _vm._v(" "),
    _c("div", { staticClass: "row mb-4" }, [
      _c(
        "div",
        { staticClass: "col-md-3" },
        [
          _c("text-input", {
            attrs: { placeholder: "Search.." },
            on: { input: _vm.loadEvents },
            model: {
              value: _vm.form.search,
              callback: function($$v) {
                _vm.$set(_vm.form, "search", $$v)
              },
              expression: "form.search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md d-flex align-items-center justify-content-end" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: { to: { name: "events.create" } }
            },
            [_vm._v("Create")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _vm.events && _vm.events.data.length > 0
            ? _c(
                "ul",
                { staticClass: "list-unstyled" },
                _vm._l(_vm.events.data, function(event, key) {
                  return _c("li", { staticClass: "media" }, [
                    _c(
                      "div",
                      { staticClass: "media-body border-bottom mb-3" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "text-dark",
                            attrs: {
                              to: {
                                name: "events.show",
                                params: { id: event.id }
                              }
                            }
                          },
                          [
                            _c("h4", { staticClass: "mb-2" }, [
                              _vm._v(_vm._s(event.title))
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(event.description))])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            : _c("div", { staticClass: "text-center px-4" }, [
                _vm._v(" No data..")
              ])
        ]),
        _vm._v(" "),
        _vm.events && _vm.events.data.length > 0
          ? _c("pagination", {
              attrs: { links: _vm.events && _vm.events.meta },
              on: { goToPage: _vm.goToPage }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/DateFormat.js":
/*!*******************************************!*\
  !*** ./resources/js/mixins/DateFormat.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    dateFormat: function dateFormat(date, format) {
      if (!date) {
        return '';
      }

      return moment(date).format(format);
    }
  },
  methods: {
    formatDate: function formatDate(date, format) {
      if (!date) {
        return '';
      }

      return moment(date).format(format);
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/ErrorBag.js":
/*!*****************************************!*\
  !*** ./resources/js/mixins/ErrorBag.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errorBag: []
    };
  },
  methods: {
    getError: function getError(key) {
      try {
        return this.errorBag.errors[key][0];
      } catch (e) {
        return '';
      }
    },
    clearErrors: function clearErrors() {
      this.errorBag = [];
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/Form.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/Form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {}
    };
  }
});

/***/ }),

/***/ "./resources/js/mixins/index.js":
/*!**************************************!*\
  !*** ./resources/js/mixins/index.js ***!
  \**************************************/
/*! exports provided: Form, ErrorBag, DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/Form */ "./resources/js/mixins/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _mixins_Form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mixins_ErrorBag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/ErrorBag */ "./resources/js/mixins/ErrorBag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBag", function() { return _mixins_ErrorBag__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mixins_DateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/DateFormat */ "./resources/js/mixins/DateFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return _mixins_DateFormat__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./resources/js/screens/events/List.vue":
/*!**********************************************!*\
  !*** ./resources/js/screens/events/List.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_4ef33c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=4ef33c5e& */ "./resources/js/screens/events/List.vue?vue&type=template&id=4ef33c5e&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/screens/events/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_4ef33c5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_4ef33c5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/events/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/events/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/screens/events/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/events/List.vue?vue&type=template&id=4ef33c5e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/screens/events/List.vue?vue&type=template&id=4ef33c5e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4ef33c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=4ef33c5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/List.vue?vue&type=template&id=4ef33c5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4ef33c5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4ef33c5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);