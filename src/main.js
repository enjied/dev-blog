import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
