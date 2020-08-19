import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import '@/icons'

import bus from '@/utils/bus'
// import Dialog from './components/dialog'
import Loading from './components/loading'
// import toast from './components/toast'
import { NavBar, Icon } from 'vant'

import utils from './utils/utils'
import VueScroller from 'vue-scroller'
import { get, post } from './utils/ajax'

Vue.use(Icon)
Vue.use(NavBar)
Vue.use(VueScroller)
Vue.use(utils)
Vue.use(bus)

// Vue.prototype.$dialog = Dialog
Vue.prototype.$loading = Loading
// Vue.prototype.$toast = toast
Vue.prototype.$http = { get, post }

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
