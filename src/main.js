// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import user from './lib/api/user'
import KeenUI from 'keen-ui'
require('keen-ui/dist/keen-ui.min.css')
Vue.config.productionTip = false
Vue.use(KeenUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created () {
    user.getUsers()
  }
})
