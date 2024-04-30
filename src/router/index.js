import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Order from '@/pages/Order'
import Profile from '@/pages/Profile'
import Login from '@/pages/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/login',
            component: Login
        },
        // 路由重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
})