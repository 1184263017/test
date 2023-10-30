import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/vuex',
            name: 'Vuex',
            component: () => import('../components/Vuex.vue')
        },
        {
            path: '/',
            redirect: {
                name: 'Vuex'
            }
        }
    ]
})

export default router;