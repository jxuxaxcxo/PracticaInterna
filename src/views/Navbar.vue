<template>
    <div>
        <v-navigation-drawer app v-model = "drawer" color = "#252440" permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar right size= 80>
            <v-img class="logo" src="../assets/upbLogo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>


        <v-list-item  @click="navigateTo('///')">

          <v-list-item-content >
            <v-list-item-title class="title" >Mateo Puña</v-list-item-title>
            <v-list-item-subtitle class = "white--text">mateo.ds3@shift.com</v-list-item-subtitle>        
          </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>


        <v-list-item link  @click="navigateTo('/crearUsuario/')">
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
                    auto-grow
                    @click="abrirInforme(informe)"
                    class = "informe-elem archivo" v-text="informe.nombre"></v-list-item-title>
                  </v-list-item-content>
                </template>

                      <v-list-group
                        v-for="(planDeAccion, i) in informe.planesDeAccion"
                        :key="i"
                      >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title
                          @click="abrirPlanDeAccion(informe, planDeAccion)"
                          class = "nc-elem archivo" v-text="planDeAccion.nombre.replace('No conformidad: ', 'NC: ').replace('Observación: ', 'O: ').replace('Recomendación: ', 'R: ')">
                          </v-list-item-title>
                        </v-list-item-content>
                      </template>

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
    data: () => ({
      drawer : true

    mounted () {
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

      },
      abrirInforme (informe) {
        this.$router.push('/redirect/' + informe.origen + '/' + informe.idInforme + '/')
      }
    },

    computed: {
      informesDB: function () {
        console.log(listaInformes2())
        this.actualizarInformes(listaInformes2())
        return listaInformes2()
      }
    }


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