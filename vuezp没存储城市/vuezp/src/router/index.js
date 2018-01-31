import Vue from 'vue'
import Router from 'vue-router'
import myinfo from '@/components/myinfo/myinfo'
import findwork from '@/components/findwork/findwork'
import deliverlist from '@/components/findwork/deliverlist'
import companylist from '@/components/findwork/companylist'
import mydeliver from '@/components/findwork/mydeliver'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'myinfo',
      component: myinfo
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
    }
  ]
})
