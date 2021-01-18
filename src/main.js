import Vue from 'vue'
import App from './App.vue'
import createStore from './store/store'

Vue.config.productionTip = false

export function createApp() {
  const store = createStore()

  const app = new Vue({
    render: h => h(App)
  })

  return { app, store, App }
}

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
