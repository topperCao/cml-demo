var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([22],{

/***/ "../../../../../npm/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tip/c-tip.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CTip = function () {
  function CTip() {
    _classCallCheck(this, CTip);

    this.data = {
      showtip1: false,
      showtip2: false,
      direction: "top"
    };
    this.computed = {
      tipStyle: function tipStyle() {
        var style = void 0;
        switch (this.direction) {
          case "top":
            style = "position:absolute;top:0;left: 260cpx;";
            break;
          case "bottom":
            style = "position:absolute;top:164cpx;left: 260cpx;";
            break;
          case "left":
            style = "position:absolute;left:-10cpx;top:93cpx;";
            break;
          case "right":
            style = "position:absolute;left:480cpx;top:93cpx;";
            break;
        }
        return style;
      }
    };
    this.watch = {};
    this.methods = {
      closeTip1: function closeTip1() {
        this.showtip1 = false;
      },
      showTip1: function showTip1() {
        this.showtip1 = true;
      },
      closeTip2: function closeTip2() {
        this.showtip2 = false;
      },
      showTip2: function showTip2() {
        this.direction = "top";
        this.showtip2 = true;
      },
      showTip2Top: function showTip2Top() {
        this.direction = "top";
        this.showtip2 = true;
      },
      showTip2Bottom: function showTip2Bottom() {
        this.direction = "bottom";
        this.showtip2 = true;
      },
      showTip2Left: function showTip2Left() {
        this.direction = "left";
        this.showtip2 = true;
      },
      showTip2Right: function showTip2Right() {
        this.direction = "right";
        this.showtip2 = true;
      }
    };
  }

  _createClass(CTip, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CTip;
}();

exports.default = new CTip();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../../npm/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tip/c-tip.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/com/spread/c-tip/c-tip.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../npm/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tip/c-tip.cml");
var __cml__script = __webpack_require__("../../../../../npm/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tip/c-tip.cml");


/***/ })

},["./src/pages/com/spread/c-tip/c-tip.cml"]);