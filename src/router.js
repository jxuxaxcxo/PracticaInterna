import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FuenteNCView from './views/FuenteNCView'
import ReporteNC from './views/ReporteNC'
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
      path: '/reporteNC/',
      name: 'reporteNC'
      //component: ReporteNC
    }


  ]
})
