import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { agregarUsuario } from './components/ConexionFirebase/FirebaseUsuarios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: null,
        usuarioCreado: null
    },
    mutations: {
        setUsuario(state, usuario) {
            this.state.usuario = usuario

        },

        creadoUser(state, usuarioCreado) {
            this.state.usuarioCreado = usuarioCreado
        }

    },
    actions: {
        registrarUsuario(context, datos) {
            let nuevoUsuario
            firebase.auth().createUserWithEmailAndPassword(datos.email, datos.contrasena)
                .then(
                    user => {
                        nuevoUsuario = {
                                id: user.user.uid,
                                nombre: datos.nombre,
                                apellido: datos.apellido,
                                cargo: datos.cargo,
                                mail: datos.email,
                                contrasena: datos.contrasena,
                                credenciales: []
                            },


                            context.commit('creadoUser', nuevoUsuario)
                        agregarUsuario(nuevoUsuario)

                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
        },

        iniciarSesion(context, datos) {
            var usuarioActual
            firebase.auth().signInWithEmailAndPassword(datos.email, datos.contrasena)
                .then(

                    user => {
                        usuarioActual = {
                            id: user.user.uid,
                            nombre: '',
                            apellido: '',
                            cargo: '',
                            mail: datos.email,
                            contrasena: datos.contrasena,
                            credenciales: []
                        }

                        context.commit('setUsuario', usuarioActual)
                    }

                ).catch(
                    error => {
                        console.log(error)
                    }
                )

        }
    },
    getters: {
        getUser(state) {
            return state.usuario
        }
    }
})