'use strict';

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _AdminNav = require('./components/AdminNav.vue');

var _AdminNav2 = _interopRequireDefault(_AdminNav);

var _SideMenu = require('./components/SideMenu.vue');

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./bootstrap');
Vue.use(_vueRouter2.default);

var app = new Vue({
    el: '#app',
    router: _router2.default,
    components: {
        sidemenu: _SideMenu2.default,
        adminnav: _AdminNav2.default
    }
});

//# sourceMappingURL=app-compiled.js.map