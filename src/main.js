import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueGoogleApi from 'vue-google-api'

Vue.config.silent = true
Vue.config.productionTip = false
const config = {
  apiKey: 'AIzaSyD_JHZqco8tH3TVsUE7PZlBAtrGqyk6i9M',
  clientId: '503904011595-5m6k31gi9l13hkgie64h6iol1706l3sh.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: []
}

new Vue({
  router,
  store,
  vuetify,
  VueGoogleApi,
  config,
  render: function (h) { return h(App) }
}).$mount('#app')
