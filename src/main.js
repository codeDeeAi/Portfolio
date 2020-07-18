import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router/routes.js'
import PortalVue from "portal-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
import "swiper/css/swiper.css";


Vue.use(VueAwesomeSwiper /* { default options with global component } */ );


Vue.use(PortalVue);
Vue.use(VueResource);
Vue.use(VueRouter);
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



export default router;


new Vue({
    el: "#app",
    render: h => h(App),
    router: router,

});