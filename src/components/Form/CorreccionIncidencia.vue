<template>
    <div id="correcionForm">
        <v-card id="correccionIncidenciaCard" :style= getCardStyle()>
            <v-card-title>Correcion y Verificacion de la Incidencia</v-card-title>
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
    </div>
</template>

<script>

export default {  
  props:{
      topMargin: Number,
      height: Number
  } 
  ,components: {

    },

      data:() => ({
    items: [
        {   titulo: 'Correccion Inmediata:',
            escala: 'grande',
            fila: '0',
            posicionHorizontal: '0',
            cuerpo: ''
        },
        {
            titulo: 'Acciones para eliminar la causa raiz:',
            escala: 'grande',
            fila: '1',
            posicionHorizontal: '0',
            cuerpo: ''
        },
]
}),
  methods:{
      getCardStyle(){
         var cantidadFilas=0;
          this.items.forEach(element => {
              element.fila>cantidadFilas?cantidadFilas=element.fila:null
          });
          var heightSize = cantidadFilas*20 +30;
          this.height = heightSize;
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

    #correccionIncidenciaCard{
        position: absolute;
        left:2vw;
        background-color: white;
        width: 79vw;
        padding-bottom: 10vh;
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
        background-color: green;
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