import Vue from "vue"
import Router from "vue-router"

// 引入路由组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'

// 引入 vue-router
Vue.use(Router)

// 将路由与组件进行映射
const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        children: [
            // 嵌套路由
            { path: 'home', component: Home },
            { path: 'user', component: User}
        ]
    },

]

// 创建 router 实例
const router = new Router({
    routes
})

// 对外暴露 router
export default router