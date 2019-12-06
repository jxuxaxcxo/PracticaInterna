<template>
    <div>
        <v-navigation-drawer app v-model = "drawer" color = "#003366" permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar right size= 80>
            <v-img src="https://scontent.fcbb1-2.fna.fbcdn.net/v/t31.0-8/21688273_1894686887516782_1761331422367946529_o.jpg?_nc_cat=101&_nc_oc=AQly_HtWmawnFSQRzM6bG28j4m-PkvvP9uTiTyhBSKohXDIGnSWkRmbiH7BnYS7fe44&_nc_ht=scontent.fcbb1-2.fna&oh=7f2d8660c2a8212b45c8969e02bf58ce&oe=5E2C90AC"></v-img>
          </v-list-item-avatar>
        </v-list-item>


        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title" >Mateo Puña</v-list-item-title>
            <v-list-item-subtitle class = "white--text">mateo.ds3@shift.com</v-list-item-subtitle>
          </v-list-item-content>

            <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      <v-divider></v-divider>

        <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
            <v-list-item-title class = "title">Inicio</v-list-item-title>
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
                    <router-link
                    class = "informe-elem"
                    :to="'/Auditorias/' + informe.origen + '/' + informe.idInforme">{{informe.nombre}}</router-link>
                  </v-list-item-content>
                </template>

                      <v-list-group
                        v-for="(planDeAccion, i) in informe.planesDeAccion"
                        :key="i"
                      >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <router-link
                          class = "nc-elem"
                          :to="'/Auditorias/' + informe.origen + '/' + informe.idInforme + '/' + i"
                          >{{planDeAccion.nombre}}</router-link>
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
   
 </style>