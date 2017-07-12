import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Hello from '@/components/Hello'
import Login from '@/pages/Login'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.user) {
    router.push('/login')
  } else {
    next()
  }
})
export default router
