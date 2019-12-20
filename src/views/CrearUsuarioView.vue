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
    :items="listaUsuarios"
    :items-per-page="5"
    class="elevation-1"
    @click:row = "openEditWindow"

  >
   <template slot="items" slot-scope="props">
          <tr @click="openEditWindow(props.item)">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.nombre }}</td>
          <td class="text-xs-right">{{ props.item.apellido }}</td>
          <td class="text-xs-right">{{ props.item.cargo }}</td>
          <td class="text-xs-right">{{ props.item.email }}</td>
            </tr>
        </template>
        </v-data-table>


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
                    <v-btn type="submit" color="#003366"  @click= "clickEditarUser" dark>Editar Usuario</v-btn>
                     <v-btn  color="#B11226" @click= "clickEliminarUser" dark>Eliminar Usuario</v-btn>

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
import { agregarUsuario, listaUsuarios2, actualizarUsuario, eliminarUsuario} from '../components/ConexionFirebase/FirebaseUsuarios'
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
            value: 'nombre',
          },
          { text: 'Apellido', value: 'apellido' },
          { text: 'cargo', value: 'cargo' },
          { text: 'Email', value: 'mail' },
        ],
        listaUsuarios:  listaUsuarios2()       
      }
    },

    computed: {

      user () {
        return this.$store.getters.getUser
      }
    },

    mounted () {

        if (this.user === null || this.user === undefined){
    
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
                                                  cargo: this.cargo}).then(success => {
          agregarUsuario(this.nombre, this.apellido, this.email, this.cargo)
          alert(success)
          this.nombre = ''
          this.apellido = ''
          this.email = ''
          this.contrasena = ''
          this.cargo = ''
          this.confirmarContrasena = ''
        }).catch((err)=>{
          if (this.dialog) {
            this.dialog = false
          }else {
            alert(err)
          }
          })
        
      },

      compararContrasenas(){
        return this.confirmarContrasena === this.contrasena
      },

      openEditWindow(usuario){
        this.dialog = true
        console.log(usuario)

        this.emailDialog = usuario.mail
        this.nombreDialog = usuario.nombre
        this.apellidoDialog = usuario.apellido
        this.cargoDialog = usuario.cargo
        this.contrasenaDialog = usuario.contrasena
      },

      clickEditarUser(){
        console.log(this.emailDialog)
        actualizarUsuario(this.emailDialog, this.nombreDialog, this.apellidoDialog, this.cargoDialog, this.contrasenaDialog)
      },
      clickEliminarUser(){
        eliminarUsuario(this.emailDialog).then(()=>{this.dialog = false})
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