import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld';
import Work from '@/components/work';
import Hi1 from '@/components/hi1';
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
//  mode:'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/work/:newsId/:newsTitle',
      component: Work,
//      beforeEnter: (to, from, next)=>
//      {
//        console.log(123);
//        console.log(to)
//        console.log(from);
//        next({path:'/'});
//      }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId/:newsTitle',
      redirect: '/work/:newsId/:newsTitle'
    },
    {
      path: '/hi1',
      component: Hi1,
      alias: '/jq'
    },
    {
      path: '*',
      component: Error,
    }
  ]
})
