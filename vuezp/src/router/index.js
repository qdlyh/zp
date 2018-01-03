import Vue from 'vue'
import Router from 'vue-router'
import myinfo from '@/components/myinfo/myinfo'
import findwork from '@/components/findwork/findwork'
import mydeliver from '@/components/findwork/mydeliver'
import companylist from '@/components/findwork/companylist'
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
      path: '/mydeliver',
      name: 'mydeliver',
      component: mydeliver
    },
    {
      path: '/companylist',
      name: 'companylist',
      component: companylist
    }
  ]
})
