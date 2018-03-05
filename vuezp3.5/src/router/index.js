import Vue from 'vue'
import Router from 'vue-router'
import nav from '@/components/nav'
import myinfo from '@/components/myinfo/myinfo'
import invoice from '@/components/myinfo/invoice'
import findwork from '@/components/findwork/findwork'
import deliverlist from '@/components/findwork/deliverlist'
import companylist from '@/components/findwork/companylist'
import mydeliver from '@/components/findwork/mydeliver'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: myinfo
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice
    },
    {
      path: '/findwork',
      name: 'findwork',
      component: findwork
    },
    {
      path: '/deliverlist',
      name: 'deliverlist',
      component: deliverlist
    },
    {
      path: '/companylist:id',
      name: 'companylist',
      component: companylist
    },
    {
      path: '/mydeliver:id',
      name: 'mydeliver',
      component: mydeliver
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
