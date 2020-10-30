import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login/login'
import home from '@/view/Home/home'
import mine from '@/view/Mine/mine'
import Backlog from '@/view/Backlog/backlog'
import Annual from '@/view/Annual/annual'
import Safe from '@/view/Safe/safe'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/Backlog',
      name: 'Backlog',
      component: Backlog
    },
    {
      path: '/Annual',
      name: 'Annual',
      component: annual
    },
    {
      path: '/Safe',
      name: 'Safe',
      component: safe
    },
  ]
})
