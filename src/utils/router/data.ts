import {RouteRecordRaw} from "vue-router";

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/logIn',
    },
    {
        path: '/logIn',
        name: 'logIn',
        component: () => import('@/views/logIn/logIn.vue')
    },{
        path: '/Main',
        name: 'Main',
        component: () => import('@/views/Main/Main.vue'),
        children: [
            {
                path: '/Main',
                redirect: '/Main/index1',
            },
            {
                name: 'index1',
                path: '/Main/index1',
                component:()=>import('@/views/Main/home/index1.vue'),
            },
            {
                name: 'index2',
                path: '/Main/index2',
                component:()=>import('@/views/Main/home/index2.vue'),
            },
            {
                name: 'index3',
                path: '/Main/index3',
                component:()=>import('@/views/Main/home/index3.vue'),
            }
        ]
    },{
        path: '/404',
        name: '404',
        component: ()=>import('@/views/error-page/404.vue')
    },{
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
    }];
