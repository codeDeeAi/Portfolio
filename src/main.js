import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router/routes.js'
import PortalVue from "portal-vue";
import Vuex from 'vuex'
import firebase from 'firebase';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { config } from './components/firebaseConfig.js'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./router/store.js";
import "firebase/auth";


Vue.use(PortalVue);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


// Filters
Vue.filter('snippet', function(value) {
    return value.slice(0, 35) + "...";
});
Vue.filter("snippet100", function(value) {
    return value.slice(0, 75) + "...";
});


const router = new VueRouter({
    routes: Routes,
    mode: "history",
    base: process.env.BASE_URL,
    Routes
});

firebase.auth().onAuthStateChanged(user => {
    store.commit("updateUser", { user });
});


router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        //check if user is authenticated
        if (!store.state.user) {
            // user is not Authenticated
            // commit to store that user is not authenticated
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        } else if (store.state.user) {
            // user not authenticated
            next();
        }
    }
    //Allow
    else {
        next();
    }
});




export default router;

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: h => h(App),
    router: router,
    store

});