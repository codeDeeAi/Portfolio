import home from "../components/home.vue";
import login from "../components/login.vue";
import secure from "../components/secure.vue";
import store from "../components/show.vue";


export default [{
        path: "/",
        component: home
    },

    {
        path: "/store",
        component: store
    },

    {
        path: "/login",
        component: login
    },

    {
        path: "/secure",
        component: secure,
        meta: { requiresAuth: true }
    }
];