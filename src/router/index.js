import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Login from '@/components/login'
import Header from '@/components/header'
import Home from '@/components/home'
import Homepage from '@/components/homepage'
import HomepageOne from '@/components/homepage1'
import HomepageTwo from '@/components/homepage2'
import HomepageThree from '@/components/homepage3'
import Test from '@/components/test/index'
import Jsq from '@/common/calculator'
import Move from '@/components/move/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
  },{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/test',
    name: 'test',
    component: Test
  }, {
    path: '/jsq',
    name: 'jsq',
    component: Jsq
  }, {
    path: '/move',
    name: 'move',
    component: Move
  }, {
      path: '/layout',
      redirect: '/layout/home'
    },{
      path: '/layout',
      name: 'layout',
      component: Layout,
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home
        }, {
          path: 'homepage',
          name: 'homepage',
          component: Homepage,
          children:[
            {
              path: 'homepage1',
              name: 'homepage1',
              component: HomepageOne
            }, {
              path: 'homepage2',
              name: 'homepage2',
              component: HomepageTwo
            },{
              path: 'homepage3',
              name: 'homepage3',
              component: HomepageThree
            },
          ]
        },
      ]
    },{
      path: 'header',
      name: 'header',
      component: Header
    }
  ]
})
