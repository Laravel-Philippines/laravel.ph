(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/events/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins */ "./resources/js/mixins/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["Form"], _mixins__WEBPACK_IMPORTED_MODULE_0__["ErrorBag"], _mixins__WEBPACK_IMPORTED_MODULE_0__["DateFormat"]],
  data: function data() {
    return {
      events: []
    };
  },
  computed: {
    pageTitle: function pageTitle() {
      return !!this.$route.params.id ? 'Edit' : 'Create';
    }
  },
  mounted: function mounted() {
    this.loadEvent();
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var id = this.form.id;
      var url = id ? "/spa/publication/events/".concat(id, "/update") : "/spa/publication/events/store";
      var method = id ? 'patch' : 'post';
      this.clearErrors();
      return axios[method](url, _objectSpread({}, this.form, {
        event_date: this.formatDate(this.form.event_date, 'Y-MM-DD HH:mm')
      })).then(function (_ref) {
        var data = _ref.data;

        _this.$router.push({
          name: 'events.show',
          params: {
            id: data.data.id
          }
        });
      }, function (err) {
        return _this.errorBag = err.response.data;
      });
    },
    loadEvent: function loadEvent() {
      var _this2 = this;

      var id = this.$route.params.id;
      if (!id) return;
      var uri = "/spa/publication/events/".concat(id, "/show");
      return axios.get(uri).then(function (_ref2) {
        var data = _ref2.data;
        _this2.form = _objectSpread({}, data.data, {
          event_date: _this2.formatDate(data.data.event_date, 'Y-MM-DDTHH:mm:ss.SSSZ' // For some weird reason ISO8601 is the only format datetime package is accepting.
          )
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Form.vue?vue&type=template&id=1afa1584&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/screens/events/Form.vue?vue&type=template&id=1afa1584& ***!
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-sm-12" },
        [
          _c("div", { staticClass: "d-flex justify-content-between mb-3" }, [
            _c("h4", [_vm._v(_vm._s(_vm.pageTitle) + " Events")])
          ]),
          _vm._v(" "),
          _c("text-input", {
            attrs: {
              labelText: "Title",
              type: "text",
              placeholder: "Give the event a good title..",
              errorText: _vm.getError("title")
            },
            model: {
              value: _vm.form.title,
              callback: function($$v) {
                _vm.$set(_vm.form, "title", $$v)
              },
              expression: "form.title"
            }
          }),
          _vm._v(" "),
          _c("date-time", {
            attrs: {
              labelText: "Event Date",
              type: "datetime",
              format: "y-MM-dd HH:mm",
              errorText: _vm.getError("event_date")
            },
            model: {
              value: _vm.form.event_date,
              callback: function($$v) {
                _vm.$set(_vm.form, "event_date", $$v)
              },
              expression: "form.event_date"
            }
          }),
          _vm._v(" "),
          _c("text-area", {
            attrs: {
              labelText: "Description",
              placeholder: "And the description goes here..",
              rows: "5",
              errorText: _vm.getError("event_date")
            },
            model: {
              value: _vm.form.description,
              callback: function($$v) {
                _vm.$set(_vm.form, "description", $$v)
              },
              expression: "form.description"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "div",
              { staticClass: "col-sm-12 text-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-link",
                    attrs: { to: { name: "events.index" }, role: "button" }
                  },
                  [
                    _vm._v(
                      "\n                        Cancel\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", on: { click: _vm.submit } },
                  [_vm._v("Save")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ])
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

/***/ "./resources/js/screens/events/Form.vue":
/*!**********************************************!*\
  !*** ./resources/js/screens/events/Form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_1afa1584___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=1afa1584& */ "./resources/js/screens/events/Form.vue?vue&type=template&id=1afa1584&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/screens/events/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_1afa1584___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_1afa1584___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/screens/events/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/screens/events/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/screens/events/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/screens/events/Form.vue?vue&type=template&id=1afa1584&":
/*!*****************************************************************************!*\
  !*** ./resources/js/screens/events/Form.vue?vue&type=template&id=1afa1584& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1afa1584___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=1afa1584& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/screens/events/Form.vue?vue&type=template&id=1afa1584&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1afa1584___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1afa1584___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);