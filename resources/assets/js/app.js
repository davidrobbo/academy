import VueRouter from 'vue-router';
import adminnav from './components/AdminNav.vue';
import sidemenu from './components/SideMenu.vue';
import router from './router.js';

require('./bootstrap');
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        sidemenu: sidemenu,
        adminnav: adminnav
    }
});
