import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            redirect: {
                name: 'HomeIndex'
            },
            beforeEnter: (to, from, next) => {},
        },
        {
            name: 'HomeIndex',
            path: '/home/index',
            component: () => import('@/views/HomeIndex.vue')
        },
        {
            name: 'ShopIndex',
            path: '/shop/index',
            component: () => import('@/views/ShopIndex.vue')
        },
        {
            path: '/:match',
            component: () => import('@/views/NotFound.vue')
        }
    ]
})

export default router;