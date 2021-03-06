"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.3
 **/
!function (a, b) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define("EasyPieChart", ["jquery"], b) : b(a.jQuery);
}(undefined, function (a) {
  var b = function b(a, _b) {
    var c,
        d = document.createElement("canvas");"undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);var e = d.getContext("2d");d.width = d.height = _b.size, a.appendChild(d);var f = 1;window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [_b.size, "px"].join(""), d.width = d.height = _b.size * f, e.scale(f, f)), e.translate(_b.size / 2, _b.size / 2), e.rotate((-0.5 + _b.rotate / 180) * Math.PI);var g = (_b.size - _b.lineWidth) / 2;_b.scaleColor && _b.scaleLength && (g -= _b.scaleLength + 2), Date.now = Date.now || function () {
      return +new Date();
    };var h = function h(a, b, c) {
      c = Math.min(Math.max(-1, c || 0), 1);var d = 0 >= c ? !0 : !1;e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke();
    },
        i = function i() {
      var a,
          c,
          d = 24;e.lineWidth = 1, e.fillStyle = _b.scaleColor, e.save();for (var d = 24; d > 0; --d) {
        0 === d % 6 ? (c = _b.scaleLength, a = 0) : (c = .6 * _b.scaleLength, a = _b.scaleLength - c), e.fillRect(-_b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
      }e.restore();
    },
        j = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(),
        k = function k() {
      _b.scaleColor && i(), _b.trackColor && h(_b.trackColor, _b.lineWidth, 1);
    };this.clear = function () {
      e.clearRect(_b.size / -2, _b.size / -2, _b.size, _b.size);
    }, this.draw = function (a) {
      _b.scaleColor || _b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, _b.size * f, _b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = _b.lineCap;var d;d = "function" == typeof _b.barColor ? _b.barColor(a) : _b.barColor, h(d, _b.lineWidth, a / 100);
    }.bind(this), this.animate = function (a, c) {
      var d = Date.now();_b.onStart(a, c);var e = function () {
        var f = Math.min(Date.now() - d, _b.animate),
            g = _b.easing(this, f, a, c - a, _b.animate);this.draw(g), _b.onStep(a, c, g), f >= _b.animate ? _b.onStop(a, c) : j(e);
      }.bind(this);j(e);
    }.bind(this);
  },
      c = function c(a, _c) {
    var d = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, size: 110, rotate: 0, animate: 1e3, easing: function easing(a, b, c, d, e) {
        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
      }, onStart: function onStart() {}, onStep: function onStep() {}, onStop: function onStop() {} };if ("undefined" != typeof b) d.renderer = b;else {
      if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer = SVGRenderer;
    }var e = {},
        f = 0,
        g = function () {
      this.el = a, this.options = e;for (var b in d) {
        d.hasOwnProperty(b) && (e[b] = _c && "undefined" != typeof _c[b] ? _c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
      }e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")));
    }.bind(this);this.update = function (a) {
      return a = parseFloat(a), e.animate ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this;
    }.bind(this), g();
  };a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

//# sourceMappingURL=jquery.easypiechart.min-compiled.js.map