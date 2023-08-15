import { createRouter, createWebHashHistory } from "vue-router";
import  {constantRoutes} from '@/utils/router/data'
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 }),
});
/**
 * 重置路由
 */
export default router;
