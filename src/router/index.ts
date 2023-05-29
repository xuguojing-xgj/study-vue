// 导入路由
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 路由数组类型 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../pages/login/login.vue')
    },
    {
        path: '/home',
        component: () => import('../pages/home/home.vue')
    }
]

const router = createRouter({
    // 路由模式
    // createWebHistory 不带#
    // createWebHashHistory 带#
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    console.log('next', next);
})

// 导出路由
export default router
