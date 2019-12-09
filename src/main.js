import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.silent = true
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: function(h) { return h(App) },
    created() {

    }
}).$mount('#app')