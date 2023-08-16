import { RouteRecordRaw } from "vue-router";

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/logIn',
    },
    {
        path: '/logIn',
        name: 'logIn',
        component: () => import('@/views/logIn/logIn.vue')
    }, {
        path: '/Main',
        name: 'Main',
        component: () => import('@/views/Main/Main.vue'),
        children: [
            {
                path: '/Main',
                redirect: '/Main/index',
            },
            {
                name: 'index',
                path: '/Main/index',
                component: () => import('@/views/home/Index/Index.vue'),
            },
            {
                name: 'WorkBench',
                path: '/Main/WorkBench',
                component: () => import('@/views/home/WorkBench/WorkBench.vue'),
            }, {
                name: 'exploit',
                path: '/Main/OrderExploit',
                component: () => import('@/views/exploit/OrderExploit.vue'),
            }, {
                name: 'allocation',
                path: '/Main/allocation',
                component: () => import('@/views/exploit/OnlineAllocation.vue'),
            }
        ]
    }, {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
    }, {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
    }];
