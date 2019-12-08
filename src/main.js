import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login/Login.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.silent = true
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: function(h) { return h(App) },
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAGTPqZuhcLJBnPRtQ6MjKCrB_CHKZ6XGA',
            authDomain: 'practicainterna-56833.firebaseapp.com',
            databaseURL: 'https://practicainterna-56833.firebaseio.com',
            projectId: 'practicainterna-56833',
            storageBucket: 'practicainterna-56833.appspot.com',
            messagingSenderId: '145963684426',
            appId: '1:145963684426:web:337aa41f7fefeaf63a8cb3',
            measurementId: "G-QVMRGRH6GF"
        })
    }
}).$mount('#app')