exports.ids = [1];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("4ee5eea8", content, true, context)
};

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_396ae44f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_396ae44f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_396ae44f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_396ae44f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_396ae44f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_id_396ae44f_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".alert[data-v-396ae44f]{padding:.5rem;margin-top:1rem;margin-bottom:1rem;border-width:1px;border-radius:.25rem}.alert[data-v-396ae44f] :first-child{margin-top:0}.alert[data-v-396ae44f] :last-child{margin-bottom:0}.alert-info[data-v-396ae44f]{--bg-opacity:1;background-color:#ebf8ff;background-color:rgba(235,248,255,var(--bg-opacity));--border-opacity:1;border-color:#bee3f8;border-color:rgba(190,227,248,var(--border-opacity));--text-opacity:1;color:#2c5282;color:rgba(44,82,130,var(--text-opacity))}.alert-info :not(pre)>code[data-v-396ae44f]{--bg-opacity:1;background-color:#bee3f8;background-color:rgba(190,227,248,var(--bg-opacity));--bg-opacity:0.75}.alert-info-dark[data-v-396ae44f]{--bg-opacity:1;background-color:#2a4365;background-color:rgba(42,67,101,var(--bg-opacity));--bg-opacity:0.75;--border-opacity:1;border-color:#2b6cb0;border-color:rgba(43,108,176,var(--border-opacity));--text-opacity:1;color:#bee3f8;color:rgba(190,227,248,var(--text-opacity))}.alert-info-dark :not(pre)>code[data-v-396ae44f]{--bg-opacity:1;background-color:#2b6cb0;background-color:rgba(43,108,176,var(--bg-opacity));--bg-opacity:0.5}.alert-warning[data-v-396ae44f]{--bg-opacity:1;background-color:#fffaf0;background-color:rgba(255,250,240,var(--bg-opacity));--border-opacity:1;border-color:#f6e05e;border-color:rgba(246,224,94,var(--border-opacity));--text-opacity:1;color:#975a16;color:rgba(151,90,22,var(--text-opacity))}.alert-warning :not(pre)>code[data-v-396ae44f]{--bg-opacity:1;background-color:#feebc8;background-color:rgba(254,235,200,var(--bg-opacity));--bg-opacity:0.75}.alert-warning-dark[data-v-396ae44f]{--bg-opacity:1;background-color:#d69e2e;background-color:rgba(214,158,46,var(--bg-opacity));--bg-opacity:0.25;--border-opacity:1;border-color:#b7791f;border-color:rgba(183,121,31,var(--border-opacity));--text-opacity:1;color:#feebc8;color:rgba(254,235,200,var(--text-opacity))}.alert-warning-dark :not(pre)>code[data-v-396ae44f]{--bg-opacity:1;background-color:#975a16;background-color:rgba(151,90,22,var(--bg-opacity));--bg-opacity:0.5}.alert-danger[data-v-396ae44f]{--bg-opacity:1;background-color:#fff5f5;background-color:rgba(255,245,245,var(--bg-opacity));--border-opacity:1;border-color:#fed7d7;border-color:rgba(254,215,215,var(--border-opacity));--text-opacity:1;color:#9b2c2c;color:rgba(155,44,44,var(--text-opacity))}.alert-danger :not(pre)>code[data-v-396ae44f]{--bg-opacity:1;background-color:#fed7d7;background-color:rgba(254,215,215,var(--bg-opacity));--bg-opacity:0.75}.alert-danger-dark[data-v-396ae44f]{--bg-opacity:1;background-color:#742a2a;background-color:rgba(116,42,42,var(--bg-opacity));--bg-opacity:0.5;--border-opacity:1;border-color:#c53030;border-color:rgba(197,48,48,var(--border-opacity));--text-opacity:1;color:#fed7d7;color:rgba(254,215,215,var(--text-opacity))}.alert-danger-dark :not(pre)>code[data-v-396ae44f]{--bg-opacity:1;background-color:#9b2c2c;background-color:rgba(155,44,44,var(--bg-opacity));--bg-opacity:0.5}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/Alert.vue?vue&type=template&id=396ae44f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert",class:_vm.isLightMode ? ("alert-" + _vm.type) : ("alert-" + _vm.type + "-dark")},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/global/Alert.vue?vue&type=template&id=396ae44f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/Alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Alertvue_type_script_lang_js_ = ({
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "info",

      validator(value) {
        // The value must match one of these strings
        return ["info", "warning", "danger"].includes(value);
      }

    }
  },
  computed: {
    isLightMode() {
      return this.$colorMode.value === "light";
    }

  }
});
// CONCATENATED MODULE: ./components/global/Alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var global_Alertvue_type_script_lang_js_ = (Alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/global/Alert.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_Alertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "396ae44f",
  "7c2755c2"
  
)

/* harmony default export */ var Alert = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Alert.js.map