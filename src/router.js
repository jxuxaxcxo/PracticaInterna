import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FuenteNCView from './views/FuenteNCView.vue'
import ListaPer from './views/ListaPer.vue'
<<<<<<< HEAD
import Form from './views/Form.vue'
=======
import NewInformeView from'./views/NewInformeView.vue'
>>>>>>> 9ef1e03d6b27bfeb3b738ce7c9413f86007e32a2

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
     name: 'home',
     component: Home
    },

    {
      path: '/nuevaFuente/',
      name: 'nuevaFuente',
      component: FuenteNCView
    },

    {
      path: '/listaper/',
      name: 'listaPer',
      component: ListaPer
    },

    {
      path: '/informes/',
      name: 'Nuevo Informe',
      component: NewInformeView
    }


  ]
})
