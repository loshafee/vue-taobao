// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import Layer from './components/common/Vue-Layer'
import Layer from 'vue-m-layer'
import JSONP from './components/common/Vue-Jsonp'

const axios = require('axios')

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Layer)

Vue.prototype.$axios = axios
Vue.prototype.$jsonp = JSONP
let layerId = 0

JSONP.interceptors.request.use((config) => {
  layerId = Vue.prototype.$layer.open({
    type: 1
  })
  return config
})
JSONP.interceptors.response.use((response) => {
  Vue.prototype.$layer.close(layerId)
  return response
})

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  layerId = Vue.prototype.$layer.open({
    type: 1
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  Vue.prototype.$layer.close(layerId)
  return response
}, (error) => {
  return Promise.reject(error)
})

const store = new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }
  }
})

// router.beforeEach(({name}, from, next) => {
//   if (store.state.token) {
//     if (name === 'Login') {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     if (name === 'Login') {
//       next()
//     } else {
//       next({name: 'Login'})
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
