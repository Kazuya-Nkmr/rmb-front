import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login/Login'
import RmbTemplate from '@/screen/RmbTemplate'
import Test from '@/screen/Create'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/rmb',
      name: 'Menu',
      component: RmbTemplate,
      children: [
        {
          name: 'Create',
          component: Test,
          path: '/create'
        }
      ]
    }
  ]
})
