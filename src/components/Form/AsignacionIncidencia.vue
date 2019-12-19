<template>
    <div id="asignacionForm">
        <v-card id="incidenciaAsignacionCard" :style= getCardStyle()>
            <v-card-title>Asignacion de la Incidencia</v-card-title>
                 <v-card
                    v-for= "item in items" 
                    :key = item.titulo 
                    :class = item.escala
                    :id = item.titulo
                    :style= singleStyle(item.fila,item.posicionHorizontal)>  
                    <v-card-title class="cardTitulo">{{item.titulo}}</v-card-title>     
                            <v-text-field 
                            v-if= item.inputType 
                            :class= "item.escala+'TextField'"
                            :value= item.campo
                            ></v-text-field>

                            <v-container v-if = item.selectorType >
                            <v-select class="selector"
                                v-model= encargadoPlanDeAccion
                                v-if = item.selectorType
                                label="Encargado"
                                :items="usuarios"
                                item-text="mail"
                            ></v-select>
                            <h4 class="selectorArgumento">{{item.opcionInfo.primerArgumento}}</h4>
                            <v-btn 
                            v-on:click="notificarEncargado()"
                            outlined = true 
                            class="encargadoNotification">Informar Encargado</v-btn>
                            </v-container>

                </v-card>
        </v-card>
        <CorreccionIncidencia :topMargin= height+20></CorreccionIncidencia>

    </div>
</template>

<script>
import CorreccionIncidencia from '../../components/Form/CorreccionIncidencia';
import { listaUsuarios } from '../../components/ConexionFirebase/FirebaseUsuarios'


export default {  
        props:{
            topMargin: Number,
            height: Number,
            infoExtra: ''
        },

    created(){
     var incidenciaNombrePartes = this.infoExtra.split(":");
            this.items[0].campo = incidenciaNombrePartes[1];
    },


  components: {
      CorreccionIncidencia
    },


      data:() => ({
            usuarios:listaUsuarios(),
            encargadoPlanDeAccion:'',
            items: [
                {   titulo: 'Descripcion de la Incidencia:',
                    escala: 'grande',
                    fila: '0',
                    posicionHorizontal: '0',
                    inputType: true,
                    opcionesType: false,
                    selectorType: false,
                    campo: ''
                },
                {
                    titulo: 'Responsable del Seguimiento:',
                    escala: 'grande',
                    fila: '1',
                    posicionHorizontal: '0',
                    inputType: false,
                    opcionesType: false,
                    selectorType: true,
                    opcionInfo: {
                        primerArgumento: 'Nombre Encargado: '
                    }

                },
                {     
                    titulo: 'Investigacion de las Causas de la Incidencia:',
                    escala: 'grande',
                    fila: '2',
                    posicionHorizontal: '0',
                    inputType: true,
                    opcionesType: false,
                    selectorType: false,
                    campo: ''
                }
        ]
}),

  methods:{
      getCardStyle(){
         var cantidadFilas=0;
          this.items.forEach(element => {
              element.fila>cantidadFilas?cantidadFilas=element.fila:null
          });
          var heightSize = cantidadFilas*20 +25;
          this.height = heightSize + (this.topMargin -10);
        return 'top: ' + this.topMargin + 'vh; height:' + heightSize +'vh;';
      },

        singleStyle(indexFila,indexColumna){
          var margenSuperior = indexFila*17 + (indexFila==0?10:10);
          var margenLateral = indexColumna*26+2;
          return 'top: ' + margenSuperior+'vh;' + 'left: '+margenLateral+"vw;"; 
      },
        getAltura(){
        return 'height: ' + heightSize + 'vh;';
      },

        notificarEncargado(){

            console.log(this.encargadoPlanDeAccion);
            console.log("NOTIFICANDO ENCARGADO: " + this.encargadoPlanDeAccion);
        }

  }
};
</script>

<style scoped>

#incidenciaAsignacionCard{
    position: absolute;
    left:2vw;
    background-color: white;
    width: 79vw;

}

    .pequeño{
        position: absolute;
        height: 15vh;
        width: 24vw;
        background-color: #ECECEC
    }
    .mediano{
        position: absolute;
        height: 15vh;
        width: 49vw;
        background-color: #ECECEC
    }
    .grande{
        position: absolute;
        height: 15vh;
        width: 75vw;
        background-color: #ECECEC
    }
    .cardTitulo{
        background-color: yellow;
        font-size: 100%;
    }
    .pequeñoTextField{
        position: absolute;
        left: 1vw;
        width: 22vw;
        height: 5vh;
        top: 8vh;
    }
    .medianoTextField{
        position:absolute;
        left:1vw;
        width: 47vw;
        height: 5vh;
        top: 8vh;
    }
    .grandeTextField{
        position:absolute;
        left:1vw;
        width: 73vw;
        height: 5vh;
        top: 8vh;
    }

    .selector{
        position:absolute;
        top:8vh;
        left: 15vw;
    }

    .selectorArgumento{
        position: absolute;
        top:11vh;
        left:3vw;
    }
    .encargadoNotification{
        position: absolute;
        right: 3vw;
        bottom: 1vh;
        background-color: red;
    }
</style>