"use strict";

$(document).ready(function () {
  function t(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t;
  }$(".btn-toggle-fullwidth").on("click", function () {
    $("body").hasClass("layout-fullwidth") ? $("body").removeClass("layout-fullwidth") : $("body").addClass("layout-fullwidth"), $(this).find(".lnr").toggleClass("lnr-arrow-left-circle lnr-arrow-right-circle"), $(window).innerWidth() < 1025 && ($("body").hasClass("offcanvas-active") ? $("body").removeClass("offcanvas-active") : $("body").addClass("offcanvas-active"));
  }), $(window).on("load resize", function () {
    $(this).innerWidth() < 1025 ? $("body").addClass("layout-fullwidth") : $("body").removeClass("layout-fullwidth");
  }), $(window).on("load", function () {
    $(window).innerWidth() < 1025 && $(".btn-toggle-fullwidth").find(".icon-arrows").removeClass("icon-arrows-move-left").addClass("icon-arrows-move-right"), setTimeout(function () {
      $(".main").height() < $(".sidebar").height() && $(".main").height($(".sidebar").height());
    }, 500);
  }), $('.sidebar a[data-toggle="collapse"]').on("click", function () {
    $(this).hasClass("collapsed") ? $(this).addClass("active") : $(this).removeClass("active");
  }), $(".sidebar-scroll").length > 0 && $(".sidebar-scroll").slimScroll({ height: "85%", wheelStep: 2 }), $(".panel .btn-remove").click(function (t) {
    t.preventDefault(), $(this).parents(".panel").fadeOut(300, function () {
      $(this).remove();
    });
  });var e = $(".panel-body");if ($(".panel .btn-toggle-collapse").clickToggle(function (t) {
    t.preventDefault(), $(this).parents(".panel").find(".slimScrollDiv").length > 0 && (e = $(".slimScrollDiv")), $(this).parents(".panel").find(e).slideUp(300), $(this).find("i.lnr-chevron-up").toggleClass("lnr-chevron-down");
  }, function (t) {
    t.preventDefault(), $(this).parents(".panel").find(".slimScrollDiv").length > 0 && (e = $(".slimScrollDiv")), $(this).parents(".panel").find(e).slideDown(300), $(this).find("i.lnr-chevron-up").toggleClass("lnr-chevron-down");
  }), $(".panel-scrolling").length > 0 && $(".panel-scrolling .panel-body").slimScroll({ height: "430px", wheelStep: 2 }), $("#panel-scrolling-demo").length > 0 && $("#panel-scrolling-demo .panel-body").slimScroll({ height: "175px", wheelStep: 2 }), $("#system-load").length > 0) {
    var i = $("#system-load").easyPieChart({ size: 130, barColor: function barColor(t) {
        return "rgb(" + Math.round(200 * t / 100) + ", " + Math.round(200 * (1.1 - t / 100)) + ", 0)";
      }, trackColor: "rgba(245, 245, 245, 0.8)", scaleColor: !1, lineWidth: 5, lineCap: "square", animate: 800 }),
        a = 3e3;setInterval(function () {
      var e;e = t(0, 100), i.data("easyPieChart").update(e), i.find(".percent").text(e);
    }, a);
  }if ($("#headline-chart").length > 0) {
    var o = { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], series: [[23, 29, 24, 40, 25, 24, 35], [14, 25, 18, 34, 29, 38, 44]] },
        n = { height: 300, showArea: !0, showLine: !1, showPoint: !1, fullWidth: !0, axisX: { showGrid: !1 }, lineSmooth: !1 };new Chartist.Line("#headline-chart", o, n);
  }if ($("#visits-trends-chart").length > 0) {
    var o = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], series: [{ name: "series-real", data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900] }, { name: "series-projection", data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800] }] },
        n = { fullWidth: !0, lineSmooth: !1, height: "270px", low: 0, high: "auto", series: { "series-projection": { showArea: !0, showPoint: !1, showLine: !1 } }, axisX: { showGrid: !1 }, axisY: { showGrid: !1, onlyInteger: !0, offset: 0 }, chartPadding: { left: 20, right: 20 } };new Chartist.Line("#visits-trends-chart", o, n);
  }if ($("#visits-chart").length > 0) {
    var o = { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], series: [[6384, 6342, 5437, 2764, 3958, 5068, 7654]] },
        n = { height: 300, axisX: { showGrid: !1 } };new Chartist.Bar("#visits-chart", o, n);
  }var o = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], series: [[200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900]] };if ($("#demo-line-chart").length > 0) {
    var n = { height: 300, showPoint: !0, axisX: { showGrid: !1 }, lineSmooth: !1 };new Chartist.Line("#demo-line-chart", o, n);
  }if ($("#demo-bar-chart").length > 0) {
    var n = { height: 300, axisX: { showGrid: !1 } };new Chartist.Bar("#demo-bar-chart", o, n);
  }if ($("#demo-area-chart").length > 0) {
    var n = { height: 270, showArea: !0, showLine: !1, showPoint: !1, axisX: { showGrid: !1 }, lineSmooth: !1 };new Chartist.Line("#demo-area-chart", o, n);
  }$(".todo-list input").change(function () {
    $(this).prop("checked") ? $(this).parents("li").addClass("completed") : $(this).parents("li").removeClass("completed");
  }), $("#toastr-demo").length > 0 && (toastr.options.timeOut = "false", toastr.options.closeButton = !0, toastr.info('Hi there, this is notification demo with HTML support. So, you can add HTML elements like <a href="#">this link</a>'), $(".btn-toastr").on("click", function () {
    $context = $(this).data("context"), $message = $(this).data("message"), $position = $(this).data("position"), "" == $context && ($context = "info"), $positionClass = "" == $position ? "toast-left-top" : "toast-" + $position, toastr.remove(), toastr[$context]($message, "", { positionClass: $positionClass });
  }), $("#toastr-callback1").on("click", function () {
    $message = $(this).data("message"), toastr.options = { timeOut: "300", onShown: function onShown() {
        alert("onShown callback");
      }, onHidden: function onHidden() {
        alert("onHidden callback");
      } }, toastr.info($message);
  }), $("#toastr-callback2").on("click", function () {
    $message = $(this).data("message"), toastr.options = { timeOut: "10000", onclick: function onclick() {
        alert("onclick callback");
      } }, toastr.info($message);
  }), $("#toastr-callback3").on("click", function () {
    $message = $(this).data("message"), toastr.options = { timeOut: "10000", closeButton: !0, onCloseClick: function onCloseClick() {
        alert("onCloseClick callback");
      } }, toastr.info($message);
  }));
}), $.fn.clickToggle = function (t, e) {
  return this.each(function () {
    var i = !1;$(this).bind("click", function () {
      return i ? (i = !1, e.apply(this, arguments)) : (i = !0, t.apply(this, arguments));
    });
  });
};

//# sourceMappingURL=klorofil.min-compiled.js.map