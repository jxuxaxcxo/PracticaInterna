import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FuenteNCView from './views/FuenteNCView.vue'
import ListaPer from './views/ListaPer.vue'
import NewInformeView from'./views/NewInformeView.vue'
import Calendar from './views/Calendar.vue'

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
    },

    {
      path: '/calendar/',
      name: 'Calendar',
      component: Calendar
    }


  ]
})
