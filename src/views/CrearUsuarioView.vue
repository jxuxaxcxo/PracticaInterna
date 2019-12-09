<template>
<div>
  <v-header id = "header">Gestionar Usuarios</v-header>
 <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title>Crear usuario</v-card-title>
          
          <v-card-text>
            <v-container>
              <form @submit.prevent="clickRegistrar">

                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="nombre"
                      label="Nombre"
                      id="nombre"
                      v-model="nombre"
                      type="text"
                      color="#003366"
                      required>
                      </v-text-field>
                  </v-flex>
                </v-layout>

                 <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="apellido"
                      label="Apellido"
                      id="apellido"
                      v-model="apellido"
                      type="text"
                      color="#003366"
                      required>
                      </v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :items="cargos"
                      v-model="cargo"
                      label="Cargo"
                    ></v-select>
                  </v-col>
                  </v-flex>
                </v-layout>


                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Correo electrónico"
                      id="email"
                      v-model="email"
                      type="email"
                      color="#003366"
                      required>
                      </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Contraseña"
                      id="password"
                      v-model="contrasena"
                      type="password"
                      color="#003366"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmarContrasena"
                      label="Confirmar contraseña"
                      id="confirmarContrasena"
                      v-model="confirmarContrasena"
                      type="password"
                      color="#003366"
                      :rules="[compararContrasenas]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" color="#003366" dark>Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

</div>
 
</template>

<script>
import { agregarUsuario, listaUsuarios2 } from '../components/ConexionFirebase/FirebaseUsuarios'
  export default {
    name : 'CrearUsuario',
    data () {
      return {

        
        email: '',
        contrasena: '',
        nombre: '',
        apellido: '',
        cargo: '',
        confirmarContrasena: '',
        cargos: ['Administrador','Usuario'],

        headers: [
          {
            text: 'Nombre',
            align: 'left',
            sortable: false,
            value: 'nombre',
          },
          { text: 'Apellido', value: 'apellido' },
          { text: 'cargo', value: 'cargo' },
          { text: 'Email', value: 'mail' },
        ],
        desserts:  listaUsuarios2()       
      }
    },

    computed: {

      user () {
        return this.$store.getters.getUser
      }
    },

    mounted () {
        if (this.user === null || this.user === undefined){
          console.log
          console.log("mounter crear usuario")
          this.$router.push('/login') 
        }
    },

    watch: {
      user () {
        if (this.user === null || this.user === undefined){
          console.log("watch crear usuario")
          this.$router.push('/login') 
        }
      }
    },
 
    methods: {
      clickRegistrar () {
        console.log(this.nombre)
        console.log(this.apellido)
        console.log(this.email)
        console.log(this.contrasena)
        console.log(this.cargo)

        this.$store.dispatch('registrarUsuario', {nombre: this.nombre, apellido: this.apellido,
                                                  email: this.email, contrasena: this.contrasena,
                                                  cargo: this.cargo}).then(success => {
          agregarUsuario(this.nombre, this.apellido, this.email, this.cargo, this.contrasena)
        })
        
      },

      compararContrasenas () {
        return this.confirmarContrasena === this.confirmarContrasena

      }
    }
  }
</script>

<style scoped>
#header{
    font-size: 300%;
    text-align: "center"

}
</style>