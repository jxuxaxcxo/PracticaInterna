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
                    <v-text-field
                      name="cargo"
                      label="C
                      
                      argo"
                      id="cargo"
                      v-model="cargo"
                      type="text"
                      color="#003366"
                      required>
                      </v-text-field>
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
  export default {
    name : 'CrearUsuario',
    data () {
      return {
        email: '',
        contrasena: '',
        confirmarContrasena: '',

                headers: [
          {
            text: 'Nombre',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Apellido', value: 'apellido' },
          { text: 'cargo', value: 'cargo' },
          { text: 'Tipo Usuario', value: 'tipo' },
          { text: 'Email', value: 'email' },
        ],
        desserts: [
          {
            name: 'Mateo Puña',
            apellido: "",
            cargo: 6.0,
            tipo: 24,
            email: 4.0,
          },
          {
            name: 'Javier Soruco',
            apellido: 237,
            cargo: 9.0,
            tipo: 37,
            email: 4.3,
          },
          {
            name: 'Joaquin Vargas',
            apellido: 262,
            cargo: 16.0,
            tipo: 23,
            email: 6.0,
          },
          {
            name: 'Jhon RIvero',
            apellido: 305,
            cargo: 3.7,
            tipo: 67,
            email: 4.3,
          },
          {
            name: 'Ignacio Ballon',
            apellido: 356,
            cargo: 16.0,
            tipo: 49,
            email: 3.9,
          },
          {
            name: 'Tomas Carvajal',
            apellido: 375,
            cargo: 0.0,
            tipo: 94,
            email: 0.0,
          },
          {
            name: 'Adriana Orellana',
            apellido: 392,
            cargo: 0.2,
            tipo: 98,
            email: 0,
          },
          {
            name: 'Angel Zenteno',
            apellido: 408,
            cargo: 3.2,
            tipo: 87,
            email: 6.5,
          },
        ],
      }
    },
    computed: {
      compararContrasenas () {
        return this.contrasena !== this.confirmarContrasena ? 'Las contraseñas no coinciden' : ''
      },
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined){
          this.$router.push('/') 
        }
      }
    },

 
    methods: {
      clickRegistrar () {
        this.$store.dispatch('registrarUsuario', {email: this.email, contrasena: this.contrasena})
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