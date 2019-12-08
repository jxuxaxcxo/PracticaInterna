<template>
    <div >
        <h1 id="prueba">{{items[0].titulo}}</h1>
        <v-card id="incidenciaInfoCard" :style= getAltura()>
            <v-card-title>Informacion de la Incidencia</v-card-title>
                 <v-card
                    v-for= "item in items" 
                    :key = item.titulo 
                    :class = item.escala
                    :id = item.titulo
                    :style= singleStyle(item.fila,item.posicionHorizontal)>  
                    <v-card-title class="cardTitulo">{{item.titulo}}</v-card-title>     
                            <v-text-field v-if= item.inputType :class= "item.escala+'TextField'"
                            ></v-text-field>
                            <v-radio-group v-if= item.opcionesType v-model="row" row>
                                <v-radio
                                v-for= "opcion in item.opciones"
                                :key = opcion.id
                                :id = opcion.id
                                :label = opcion.nombre
                                :value = 'n' ></v-radio>
                            </v-radio-group>     
                </v-card>
        </v-card>

     <AsignacionIncidencia :topMargin= height+20></AsignacionIncidencia>
    </div>
</template>

<script>

import AsignacionIncidencia from '../../components/Form/AsignacionIncidencia';

export default {

    props:{
        height: Number
    },
  data:() => ({
    items: [
        {   titulo: 'Fecha de la observacion:',
            escala: 'pequeño',
            fila: '0',
            posicionHorizontal: '0',
            inputType: true,
        },
        {
            titulo: 'Nro de Formulario:',
            escala: 'mediano',
            fila: '0',
            posicionHorizontal: '1',
            inputType: true,
        },
        {
            titulo: 'Area:',
            escala: 'pequeño',
            fila: '1',
            posicionHorizontal: '0',
            inputType: true,
        },
        {
            titulo: 'Auditor que realizo observacion: ',
            escala: 'mediano',
            fila: '1',
            posicionHorizontal: '1',
            inputType: true,
        },
        {
            titulo: 'Norma:',
            escala: 'pequeño',
            fila: '2',
            posicionHorizontal: '0',
            inputType: true,
        },
        {
            titulo: 'Clausula Afectada de la Norma: ',
            escala: 'mediano',
            fila: '2',
            posicionHorizontal: '1',
            inputType: true,
        },
        {
            titulo: 'Tipo de Hallazgo: ',
            escala: 'grande',
            fila: '3',
            posicionHorizontal: '0',
            inputType: false,
            opcionesType: true,
            opciones: [{
                id:'noConformidad',
                nombre: 'No Conformidad'  
                
            },{
                id: 'observacion',
                nombre: "Observacion" 
            },{
                id: 'recomendacion',
                nombre: 'Recomendacion'
            }
            ]
            
        },
]
}),
  components: {
      AsignacionIncidencia
  },
  methods:{
          singleStyle(indexFila,indexColumna){
          var margenSuperior = indexFila*17 + (indexFila==0?10:10);
          var margenLateral = indexColumna*26+2;
          return 'top: ' + margenSuperior+'vh;' + 'left: '+margenLateral+"vw;"; 
      },
        getAltura(){
          var cantidadFilas=0;
          this.items.forEach(element => {
              element.fila>cantidadFilas?cantidadFilas=element.fila:null
          });
          var heightSize = cantidadFilas*20 +20;
          this.height = heightSize;
        return 'height: ' + heightSize + 'vh;';
      },

  }
};
</script>

<style scoped>
    #prueba{
        position: absolute;
        left:50vw;
    }
    #incidenciaInfoCard{
        position: absolute;
        top: 10vh;
        left:2vw;
        background-color: white;
        height: 100vh;
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
        background-color: #FF4E50;
        font-size: 100%;
    }
    .pequeñoTextField{
        position: absolute;
        left: 1vw;
        width: 22vw;
        background-color: green;
        height: 5vh;
        top: 8vh;
    }
    .medianoTextField{
        position:absolute;
        left:1vw;
        width: 47vw;
        height: 5vh;
        background-color: green;
        top: 8vh;
    }
    .grandeTextField{
        position:absolute;
        left:1vw;
        width: 73vw;
        height: 5vh;
        background-color: green;
        top: 8vh;
    }

</style>