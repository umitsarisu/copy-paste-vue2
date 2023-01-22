import Vue from 'vue'
import App from './App.vue'
import { store } from './pages/copy-paste/store/store'


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
