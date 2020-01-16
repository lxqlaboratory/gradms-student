import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
import i18n from './lang' // Internationalization

import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
// import './permission' //权限控制
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
