import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListaPer from './views/ListaPer.vue'
import ReporteNC from './views/ReporteNC.vue'
import Form from './views/Form.vue'
import FormsManager from './views/FormsManager.vue'
import Redirect from './views/Redirect'
import NewInformeView from './views/NewInformeView.vue'
import Login from './components/Login/Login.vue'
import CrearUsuarioView from './views/CrearUsuarioView.vue'

import TareaView from './views/TareaView'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/login/',
            name: 'login',
            component: Login
        },

        {
            path: '/crearUsuario/',
            name: 'crearUsuario',
            component: CrearUsuarioView
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
        },
        {
            path: '/redirect/:origen/:id',
            name: 'redirect',
            component: Redirect
        },
        {
            path: '/Auditorias/:origen/:id/:number',
            name: 'Form',
            component: Form 
        },
        {
            path: '/formsManager/',
            name: 'formsManager',
            component: FormsManager
        },
        {
          path: '/tarea/:informe/:planDeAccion/:tarea',
            name: 'tarea',
            component: TareaView
        },
        {
            path: '/crearUsuario/',
            name: 'crearUsuario',
            component: CrearUsuarioView
        }

    ]
})
