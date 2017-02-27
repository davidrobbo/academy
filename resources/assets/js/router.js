import VueRouter from 'vue-router';
import dash from './components/AdminDashboard.vue';
import players from './components/Admin/Players/AdminPlayers.vue';
import playerlist from './components/Admin/Players/AdminPlayerList.vue';
import createplayer from './components/Admin/Players/AdminPlayerCreate.vue';
import editplayer from './components/Admin/Players/AdminPlayerEdit.vue';
import adminunis from './components/Admin/Unis/AdminUniversities.vue';
import unilist from './components/Admin/Unis/AdminUniList.vue';
import createuni from './components/Admin/Unis/AdminUniCreate.vue';
import edituni from './components/Admin/Unis/AdminUniEdit.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            component: dash
        },
        {
            path: '/admin/players',
            component: players,
            children: [
                {
                    path: "",
                    component: playerlist
                },
                {
                    path: "create",
                    component: createplayer,
                    name: 'createPlayer'
                },
                {
                    path: ":id/edit",
                    component: editplayer,
                    name: 'editPlayer'
                }
            ]
        },
        {
            path: '/admin/universities',
            component: adminunis,
            children: [
                {
                    path: "",
                    component: unilist
                },
                {
                    path: "create",
                    component: createuni,
                    name: 'createUni'
                },
                {
                    path: "edit",
                    component: edituni,
                    name: 'editUni'
                }
            ]
        },
        {
            path: '/admin/notifications',
            component: dash
        },
    ]
});

export default router;