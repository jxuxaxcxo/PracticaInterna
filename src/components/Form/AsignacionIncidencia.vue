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
                            <v-text-field :class= "item.escala+'TextField'"
                                v-model="email"
                                :rules="emailRules"
                                required
                            ></v-text-field>     
                </v-card>
        </v-card>

        <CorreccionIncidencia :topMargin= height+20></CorreccionIncidencia>

    </div>
</template>

<script>
import CorreccionIncidencia from '../../components/Form/CorreccionIncidencia';

export default {  
  props:{
      topMargin: Number,
      height: Number
  } 
  ,components: {
      CorreccionIncidencia
    },

      data:() => ({
    items: [
        {   titulo: 'Descripcion de la Incidencia:',
            escala: 'grande',
            fila: '0',
            posicionHorizontal: '0',
            cuerpo: ''
        },
        {
            titulo: 'Responsable del Seguimiento:',
            escala: 'grande',
            fila: '1',
            posicionHorizontal: '0',
            cuerpo: ''
        },
        {     
             titulo: 'Investigacion de las Causas de la Incidencia:',
            escala: 'grande',
            fila: '2',
            posicionHorizontal: '0',
            cuerpo: ''

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
    }
    .medianoTextField{
        position:absolute;
        left:1vw;
        width: 47vw;
    }
</style>