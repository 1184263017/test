import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            redirect:{name:'HomeIndex'}
        },
        {
            path: '/home/index',
            name: 'HomeIndex',
            meta:{
                name:'首页'
            },
            component: () => import('@/views/HomeIndex.vue')
        },
        {
            path: '/shop/index/:id',
            name: 'ShopIndex',
            meta:{
                name:'购物'
            },
            component: () => import('@/views/ShopIndex.vue')
        }
    ]
});
export default router;