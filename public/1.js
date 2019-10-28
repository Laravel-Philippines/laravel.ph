(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Details.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/events/Details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["DateFormat"]],
  data: function data() {
    return {
      event: null
    };
  },
  mounted: function mounted() {
    this.loadEvent();
  },
  methods: {
    loadEvent: function loadEvent() {
      var _this = this;

      var id = this.$route.params.id;
      var uri = "/spa/publication/events/".concat(id, "/show");
      return axios.get(uri, {
        params: {
          load: 'publisher'
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.event = data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Details.vue?vue&type=template&id=09ac8ab2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/events/Details.vue?vue&type=template&id=09ac8ab2& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return !!_vm.event
    ? _c("div", [
        _c("h2", [_vm._v("Events")]),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-4" }, [
          _c(
            "div",
            {
              staticClass:
                "col-md d-flex align-items-center justify-content-end"
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "events.edit" } }
                },
                [_vm._v("Edit")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "table",
              { staticClass: "table table-hover table-striped w-full" },
              [
                _c("tbody", [
                  _c("tr", [
                    _c("td", { staticClass: "w-2/5" }, [_vm._v("Title")]),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "w-3/5",
                      domProps: { textContent: _vm._s(_vm.event.title) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "w-2/5" }, [_vm._v("Description")]),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "w-3/5",
                      domProps: { textContent: _vm._s(_vm.event.description) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "w-2/5" }, [_vm._v("Event Date")]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-3/5" }, [
                      _vm._v(
                        _vm._s(
                          _vm._f("dateFormat")(
                            _vm.event.event_date,
                            "Y-MM-DD HH:mm"
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "w-2/5" }, [
                      _vm._v("Published At")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-3/5" }, [
                      _vm._v(
                        _vm._s(
                          _vm._f("dateFormat")(
                            _vm.event.published_at,
                            "Y-MM-DD"
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ])
              ]
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "w-2/5" }, [_vm._v("Publisher")]),
      _vm._v(" "),
      _c("td", { staticClass: "w-3/5" })
    ])
  }
]
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

/***/ "./resources/js/screens/events/Details.vue":
/*!*************************************************!*\
  !*** ./resources/js/screens/events/Details.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_09ac8ab2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=09ac8ab2& */ "./resources/js/screens/events/Details.vue?vue&type=template&id=09ac8ab2&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/screens/events/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_09ac8ab2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_09ac8ab2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/events/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/events/Details.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/screens/events/Details.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/events/Details.vue?vue&type=template&id=09ac8ab2&":
/*!********************************************************************************!*\
  !*** ./resources/js/screens/events/Details.vue?vue&type=template&id=09ac8ab2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_09ac8ab2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=09ac8ab2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Details.vue?vue&type=template&id=09ac8ab2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_09ac8ab2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_09ac8ab2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);