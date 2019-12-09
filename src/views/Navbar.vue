<template>
    <div>
        <v-navigation-drawer app v-model = "drawer" color = "#252440" permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar right size= 80>
            <v-img class="logo" src="../assets/upbLogo.png" @click="pantallaPrincipal"></v-img>
          </v-list-item-avatar>
        </v-list-item>


        <v-list-item  @click="navigateTo('///')">

          <v-list-item-content >
            <v-list-item-title class="title" >{{user.nombre + ' ' + user.apellido}}</v-list-item-title>
            <v-list-item-subtitle class = "white--text">{{user.mail}}</v-list-item-subtitle>        
          </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>


        <v-list-item
        v-if="user.cargo === 'Administrador'"
        link  @click="navigateTo('/crearUsuario/')">
           <v-list-item-icon>
              <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>
            <v-list-item-title >Configuración</v-list-item-title>
        </v-list-item>



      <v-divider></v-divider>

      </v-list>

          <v-list
          >
              <v-list-group 
                v-for="(informe, i) in informes"
                :key="i"
                no-action
                ref="listaInformes"
              >
                <template v-slot:activator
                >
                  <v-list-item-content>
                    <v-list-item-title
                    @click="abrirInforme(informe)"
                    class = "informe-elem archivo" v-text="informe.nombre"></v-list-item-title>
                  </v-list-item-content>
                </template>

                      <v-list-group
                        v-for="(planDeAccion, j) in informe.planesDeAccion"
                        :key="i"
                        no-action
                      sub-group
                      >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title
                          @click="abrirPlanDeAccion(informe, j)"
                          class = "nc-elem archivo" v-text="planDeAccion.nombre.replace('No conformidad: ', 'NC: ').replace('Observación: ', 'O: ').replace('Recomendación: ', 'R: ')">
                          </v-list-item-title>
                        </v-list-item-content>
                      </template>

                        <v-list>
                         <v-list-group
                      v-for="(tarea, k) in planDeAccion.tareas"
                      :key="i"
                      
                      >
                        <template v-slot:activator>
                          <v-list-item-content>
                          <v-list-item-title
                          @click="abrirTarea(informe, j, k)"
                          class = "nc-elem archivo" v-text="tarea.nombre">
                          </v-list-item-title>
                        </v-list-item-content>
                        </template>
                      </v-list-group> 
                        </v-list>

                      </v-list-group>

              </v-list-group>
          </v-list>
        </v-navigation-drawer>
       
    </div>
</template>

<script>
import { listaInformes2 } from '../components/ConexionFirebase/FirebaseInforme'

export default {
  
    name: "Navbar",

    methods: {
      navigateTo(to) {
        this.$router.push(to)
      }
    },

    mounted () {
      if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
      }
      this.informes = this.informesDB
    },

    data () {
      return {
        drawer : true,
        informes: []
      }
    },

    methods: {
      actualizarInformes (listaInf) {
        this.informes = listaInf;
        console.log('actualizando: ' + listaInf)
      },
      abrirPlanDeAccion (informe, planDeAccion) {
        console.log('asdas')
        this.$router.replace('/Auditorias/' + informe.origen + '/' + informe.idInforme + '/' + planDeAccion)
      },
      abrirTarea (informe, planDeAccion, tarea) {
        this.$router.replace('/tarea/' + informe.idInforme + '/' + planDeAccion + '/' + tarea)
      },
      abrirInforme (informe) {
        this.$router.replace('/redirect/' + informe.origen + '/' + informe.idInforme + '/')
      },
      pantallaPrincipal () {
        this.$router.replace('/')
      },
      navigateTo (to) {
        this.$router.replace(to)
      }
    },

    computed: {


    user () {
        return this.$store.getters.getUser
      },
      
      informesDB: function () {
        console.log('usuario: ' + listaInformes2(this.user))
        this.actualizarInformes(listaInformes2(this.user))
        return listaInformes2(this.user)
      }

    },

    watch: {
      user () {
        if (this.user === null || this.user === undefined){
          this.$router.push('/login') 
        }
      }
    },

}
</script>

 <style scoped>
    .v-navigation-drawer {
        color: #000000;
        background-color: #000000;
    }
    .v-list-item-title{
        color: #ffffff;

    }
    .title{
        color: #ffffff;
        text-align: left;
    }
    .informe-elem{
        color: #ffffff;
        font-weight: bold;

    }
    .nc-elem{
        color: #ffffff;
        text-align: center;

    }
    .archivo {
      font-size: 75%;
    }
    .logo {
      margin-left: 1vw;
    }
   
 </style>