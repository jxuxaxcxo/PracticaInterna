import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListaPer from './views/ListaPer.vue'
import NewInformeView from'./views/NewInformeView.vue'
import ReporteNC from './views/ReporteNC.vue'
import Form from'./views/Form.vue'
import FormsManager from'./views/FormsManager.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
     name: 'home',
     component: Home
    },

    {
      path: '/listaper/',
      name: 'listaPer',
      component: ListaPer
    },

    {
      path: '/Auditorias/:origen/:id',
      name: 'Nuevo Informe',
      component: NewInformeView
    },

    {
      path: '/reporteNC/',
      name: 'reporteNC',
      component: ReporteNC
    }
,
    {
      path: '/Auditorias/:origen/:id/:number',
      name: 'form',
      component: Form
    },
    {
      path: '/formsManager/',
      name: 'formsManager',
      component: FormsManager
    }

  ]
})
