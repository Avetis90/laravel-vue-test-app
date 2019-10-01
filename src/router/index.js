import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PropertiesTable from '@/components/PropertiesTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      linkExactActiveClass: 'active',
      component: Home
    },
    {
      path: '/table',
      name: 'PropertiesTable',
      linkExactActiveClass: 'active',
      component: PropertiesTable
    }
  ]
})
