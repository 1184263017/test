import VueRouter from 'vue-router';
import Vue from 'vue';
import LayoutIndex from '@/views/layout/LayoutIndex'
import HomeIndex from '@/views/home/HomeIndex'
import UsersIndex from '@/views/users/UsersIndex'
Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: {
            name: 'Home'
        },
    },
    {
        name: 'Home',
        path: '/home',
        component: LayoutIndex,
        redirect: {
            name: 'HomeIndex'
        },
        meta: {
            name: '首页'
        },
        children: [{
            path: 'index',
            name: 'HomeIndex',
            component: HomeIndex,
            meta: {
                name: '首页详情'
            }
        }, ]
    }, {
        name: 'Users',
        path: '/users',
        component: LayoutIndex,
        redirect: {
            name: 'UsersIndex'
        },
        meta: {
            name: '用户'
        },
        children: [{
            path: 'index',
            name: 'UsersIndex',
            component: UsersIndex,
            meta: {
                name: '用户详情'
            },
        }]
    },
    {
        name: 'Shop',
        path: '/shop',
        component: LayoutIndex,
        redirect: {
            name: 'ShopList'
        },
        meta: {
            name: '商城'
        },
        children: [{
                path: 'index',
                name: 'ShopIndex',
                component: () => import('../views/shop/ShopIndex'),
                meta: {
                    name: '商城主页'
                }
            },
            {
                path: 'list',
                name: 'ShopList',
                component: () => import('../views/shop/ShopList'),
                meta: {
                    name: '商城列表'
                }
            },
            {
                path: 'add',
                name: 'ShopAdd',
                component: () => import('../views/shop/ShopAdd'),
                meta: {
                    name: '商城添加'
                }
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
});

const flag = true;
const auth = 'admin';
// 接受next 传的错误信息
router.onError(err => console.log(err))
router.beforeEach((to, from, next) => {

    next()
})
router.afterEach((to, from) => {
    // console.log(this);
    // console.log('afterEach', to, from);
})


export default router;