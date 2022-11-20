import Vue from "vue"
import Router from "vue-router"

// 引入路由组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

// 引入 vue-router
Vue.use(Router)

// 将路由与组件进行映射
const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        redirect: 'home',
        children: [
            // 嵌套路由
            { path: 'home', component: Home },     // 首页
            { path: 'user', component: User},      // 用户管理
            { path: 'mall', component: Mall},      // 商品管理
            { path: 'page1', component: PageOne},  // 其他 --> 页面1
            { path: 'page2', component: PageTwo}   // 其他 --> 页面2
        ]
    },

]

// 创建 router 实例
const router = new Router({
    routes
})

// 对外暴露 router
export default router