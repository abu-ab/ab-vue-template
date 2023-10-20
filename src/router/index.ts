import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "Home", component: () => import("@/views/home.vue") },
    { path: "/demo", name: "Demo", component: () => import("@/views/demo.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;