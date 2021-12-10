import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/page/IndexPage'
import LoginPage from '@/components/page/LoginPage'
import StatGridPage from '@/components/page/StatGridPage'
import Stats from '@/components/api/Stats'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  }, {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }, {
    path: '/grid/stat',
    name: 'StatGridPage',
    component: StatGridPage
  }, {
    path: '/stats',
    name: 'Stats',
    component: Stats
  }]
})
