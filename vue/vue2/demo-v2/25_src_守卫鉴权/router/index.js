import VueRouter from 'vue-router';
import Vue from 'vue';
import UserA from '../components/UserA.vue'
import UserC from '../components/UserC.vue'
import UserB from '../components/UserB.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    // mode: 'history',
    routes: [{
            name: 'userA',
            path: '/user/a',
            component: UserA,
            meta: {
                // 元数据
                name: '用户管理',
                hidden: false,
                logined: true,
                auth: ['admin', 'user', 'guest'],
            }
        },
        {
            name: 'userB',
            path: '/user/b',
            component: UserB,
            meta: {
                // 元数据
                name: '商城管理',
                hidden: false,
                logined: true,
                auth: ['user', 'guest'],
            }
        },
        {
            name: 'userBB',
            path: '/user/b',
            component: UserB,
            meta: {
                // 元数据
                name: '个人中心',
                hidden: false,
                logined: true,
                auth: ['user', 'guest'],
            }
        },
        {
            name: 'userC',
            path: '/user/c',
            component: UserC,
            meta: {
                // 元数据
                name: '订单管理',
                hidden: false,
                logined: true,
                auth: ['admin', 'user', 'guest'],
            }
        },
        {
            name: 'login',
            path: '/login',
            component: () => import( /* webpackChunkName: "group-foo" */ '../components/Login.vue'),
            meta: {
                // 元数据
                name: '登录页',
                hidden: true,
                logined: false,
            }
        },
    ],
});

const flag = true;
const auth = 'admin';
// 接受next 传的错误信息
router.onError(err => console.log(err))
router.beforeEach((to, from, next) => {
    if (to.meta?.logined === true) {
        // 判断是否登录
        if (flag === false) {
            next({
                name: 'login'
            })
        } else {
            if (to.meta.auth.includes(auth) === false) {
                next(false)
            } else {
                next()
            }
        }
    } else {
        next()
    }

})
router.afterEach((to, from) => {
    console.log(this);
    console.log('afterEach', to, from);
})


export default router;