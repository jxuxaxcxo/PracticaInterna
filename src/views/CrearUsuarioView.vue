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
                    <v-btn type="submit" color="#003366" dark>Crear Usuario</v-btn>
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
    @click:row = "openEditWindow"

  ></v-data-table>


    <v-dialog
          v-model="dialog"
          max-width="100%"
        >

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
                      v-model="nombreDialog"
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
                      v-model="apellidoDialog"
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
                      v-model="cargoDialog"
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
                      v-model="emailDialog"
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
                      v-model="contrasenaDialog"
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
                      v-model="confirmarContrasenaDialog"
                      type="password"
                      color="#003366"
                      :rules="[compararContrasenas]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" color="#003366" dark>Editar Usuario</v-btn>
                     <v-btn  color="#B11226" dark>Eliminar Usuario</v-btn>

                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
     
    </v-dialog>

</div>
 
</template>

<script>
  export default {
    name : 'CrearUsuario',
    data () {
      return {

        dialog : false,

        emailDialog: '',
        contrasenaDialog: '',
        nombreDialog: '',
        apellidoDialog: '',
        cargoDialog: '',
        confirmarContrasenaDialog: '',

        
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
            value: 'name',
          },
          { text: 'Apellido', value: 'apellido' },
          { text: 'cargo', value: 'cargo' },
          { text: 'Email', value: 'email' },
        ],
        desserts: [
          {
            name: 'Mateo Puña',
            apellido: "",
            cargo: 6.0,
            email: 4.0,
          },
          {
            name: 'Javier Soruco',
            apellido: 237,
            cargo: 9.0,
            email: 4.3,
          },
          {
            name: 'Joaquin Vargas',
            apellido: 262,
            cargo: 16.0,
            email: 6.0,
          },
          {
            name: 'Jhon RIvero',
            apellido: 305,
            cargo: 3.7,
            email: 4.3,
          },
          {
            name: 'Ignacio Ballon',
            apellido: 356,
            cargo: 16.0,
            email: 3.9,
          },
          {
            name: 'Tomas Carvajal',
            apellido: 375,
            cargo: 0.0,
            email: 0.0,
          },
          {
            name: 'Adriana Orellana',
            apellido: 392,
            cargo: 0.2,
            email: 0,
          },
          {
            name: 'Angel Zenteno',
            apellido: 408,
            cargo: 3.2,
            email: 6.5,
          },
        ],
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
 
        this.$store.dispatch('registrarUsuario', {nombre: this.nombre, apellido: this.apellido,
                                                  email: this.email, contrasena: this.contrasena,
                                                  cargo: this.cargo})
      },

      compararContrasenas(){
        return this.confirmarContrasena === this.contrasena
      },

      openEditWindow(){
        this.dialog = true
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