import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
// import router from 'vue-router'
// export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/logIn',
    },
    {
        path: "/logIn",
        component: () => import("../../views/logIn/logIn.vue"),
        meta: {hidden: true},
    },
    {
        path: "/Home",
        component: () => import("../../views/home/Home.vue"),
        meta: {hidden: true},
        children: [
            {path: '', redirect: '/Home/index'},
            {
                path: 'index',
                name: 'Index',
                component: () => import('../../views/home/Index/Index.vue')
            },
            {
                path: 'workBench',
                name: 'WorkBench',
                component: () => import('../../views/home/WorkBench/WorkBench.vue')
            }
        ]
    },
    //
    // {
    //     path: "/",
    //     components: Layout,
    //     redirect: "/dashboard",
    //     children: [
    //         {
    //             path: "dashboard",
    //             components: () => import("@/views/dashboard/index.vue"),
    //             name: "Dashboard",
    //             meta: { title: "dashboard", icon: "homepage", affix: true },
    //         },
    //         {
    //             path: "401",
    //             components: () => import("@/views/error-page/401.vue"),
    //             meta: { hidden: true },
    //         },
    //         {
    //             path: "404",
    //             components: () => import("@/views/error-page/404.vue"),
    //             meta: { hidden: true },
    //         },
    //     ],
    // },

    // 外部链接
    /*{
          path: '/external-link',
          components: Layout,
          children: [
              {
                  path: 'https://www.cnblogs.com/haoxianrui/',
                  meta: { title: '外部链接', icon: 'link' }
              }
          ]
      }*/
    // 多级嵌套路由
    /* {
           path: '/nested',
           components: Layout,
           redirect: '/nested/level1/level2',
           name: 'Nested',
           meta: {title: '多级菜单', icon: 'nested'},
           children: [
               {
                   path: 'level1',
                   components: () => import('@/views/nested/level1/index.vue'),
                   name: 'Level1',
                   meta: {title: '菜单一级'},
                   redirect: '/nested/level1/level2',
                   children: [
                       {
                           path: 'level2',
                           components: () => import('@/views/nested/level1/level2/index.vue'),
                           name: 'Level2',
                           meta: {title: '菜单二级'},
                           redirect: '/nested/level1/level2/level3',
                           children: [
                               {
                                   path: 'level3-1',
                                   components: () => import('@/views/nested/level1/level2/level3/index1.vue'),
                                   name: 'Level3-1',
                                   meta: {title: '菜单三级-1'}
                               },
                               {
                                   path: 'level3-2',
                                   components: () => import('@/views/nested/level1/level2/level3/index2.vue'),
                                   name: 'Level3-2',
                                   meta: {title: '菜单三级-2'}
                               }
                           ]
                       }
                   ]
               },
           ]
       }*/
];

/**
 * 创建路由
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes as RouteRecordRaw[],
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({left: 0, top: 0}),
});
//
// /**
//  * 重置路由
//  */
// export function resetRouter() {
//     router.replace({ path: "/login" });
// }

export default router;