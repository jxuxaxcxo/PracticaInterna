import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { usuario: null },
    mutations: {
        setUsuario(state, usuario) {
            console.log(usuario)
            this.state.usuario = usuario

        }
    },
    actions: {
        registrarUsuario({ commit }, datos) {
            let nuevoUsuario
            firebase.auth().createUserWithEmailAndPassword(datos.email, datos.contrasena)
                .then(
                    user => {
                        nuevoUsuario = {
                            id: user.user.uid,
                            nombre: 'mateo',
                            apellido: 'puna',
                            cargo: 'administrador',
                            tipoUsuario: 'administrador',
                            mail: user.email,
                            contrasena: datos.contrasena
                        }

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
                            nombre: 'mateo',
                            apellido: 'puna',
                            cargo: 'administrador',
                            tipoUsuario: 'administrador',
                            mail: datos.email,
                            contrasena: datos.contrasena

                        }
                        console.log(user)
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