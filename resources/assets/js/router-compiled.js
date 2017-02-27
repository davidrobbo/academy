'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _AdminDashboard = require('./components/AdminDashboard.vue');

var _AdminDashboard2 = _interopRequireDefault(_AdminDashboard);

var _AdminPlayers = require('./components/Admin/Players/AdminPlayers.vue');

var _AdminPlayers2 = _interopRequireDefault(_AdminPlayers);

var _AdminPlayerList = require('./components/Admin/Players/AdminPlayerList.vue');

var _AdminPlayerList2 = _interopRequireDefault(_AdminPlayerList);

var _AdminPlayerCreate = require('./components/Admin/Players/AdminPlayerCreate.vue');

var _AdminPlayerCreate2 = _interopRequireDefault(_AdminPlayerCreate);

var _AdminPlayerEdit = require('./components/Admin/Players/AdminPlayerEdit.vue');

var _AdminPlayerEdit2 = _interopRequireDefault(_AdminPlayerEdit);

var _AdminUniversities = require('./components/Admin/Unis/AdminUniversities.vue');

var _AdminUniversities2 = _interopRequireDefault(_AdminUniversities);

var _AdminUniList = require('./components/Admin/Unis/AdminUniList.vue');

var _AdminUniList2 = _interopRequireDefault(_AdminUniList);

var _AdminUniCreate = require('./components/Admin/Unis/AdminUniCreate.vue');

var _AdminUniCreate2 = _interopRequireDefault(_AdminUniCreate);

var _AdminUniEdit = require('./components/Admin/Unis/AdminUniEdit.vue');

var _AdminUniEdit2 = _interopRequireDefault(_AdminUniEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _vueRouter2.default({
    mode: 'history',
    routes: [{
        path: '/admin',
        component: _AdminDashboard2.default
    }, {
        path: '/admin/players',
        component: _AdminPlayers2.default,
        children: [{
            path: "",
            component: _AdminPlayerList2.default
        }, {
            path: "create",
            component: _AdminPlayerCreate2.default,
            name: 'createPlayer'
        }, {
            path: "edit",
            component: _AdminPlayerEdit2.default,
            name: 'editPlayer'
        }]
    }, {
        path: '/admin/universities',
        component: _AdminUniversities2.default,
        children: [{
            path: "",
            component: _AdminUniList2.default
        }, {
            path: "create",
            component: _AdminUniCreate2.default,
            name: 'createUni'
        }, {
            path: "edit",
            component: _AdminUniEdit2.default,
            name: 'editUni'
        }]
    }, {
        path: '/admin/notifications',
        component: _AdminDashboard2.default
    }]
});

exports.default = router;

//# sourceMappingURL=router-compiled.js.map