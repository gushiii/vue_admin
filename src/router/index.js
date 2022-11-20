import Vue from "vue"
import VueRouter from "vue-router"

// 引入路由组件
import Home from "../views/Home.vue"
import User from "../views/User.vue"

// 引入 vue-router
Vue.use(VueRouter)

// 将路由与组件进行映射
const routes = [
    {path: '/home', component: Home},
    {path: '/user', component: User}
]
    

// 创建 router 实例
const router = new VueRouter ({
    routes
})

// 对外暴露 router
export default router