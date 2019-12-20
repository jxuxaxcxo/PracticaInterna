<template>
    <div id="correcionForm">
        <v-card id="correccionIncidenciaCard" :style= getCardStyle()>
            <v-card-title>Correcion y Verificacion de la Incidencia</v-card-title>
                 <v-card  
                    v-for= "item in items" 
                    :key = item.titulo 
                    :class = item.escala
                    :id = item.titulo
                    :style= singleStyle(item.fila,item.posicionHorizontal,item.tableType)>
                    <v-card-title class="cardTitulo">{{item.titulo}}</v-card-title>     
                      
                      <v-data-table class = "tableList"
                        v-if= item.tableType
                        :headers="headers"
                        :items="tableItems"
                        :items-per-page="3"
                        show-select
                        single-select= true
                    ></v-data-table>  

                      <v-container v-if= item.tableType>
                          <v-text-field 
                          v-model = actividad
                          class = "actividadTextField"
                          label= "Actividad"
                          ></v-text-field>

                            <v-select class="selector"
                                v-model= encargadoPlanDeAccion
                                label="Encargado"
                                :items="usuarios"
                                item-text="mail"
                            ></v-select>

                          <v-text-field 
                          v-model = fechaPropuesta
                          class = "fechaPropuestaTextField"
                          label= "Fecha Propuesta"
                          ></v-text-field>

                          <v-btn
                          class = "botonAddTask"
                          v-on:click= "addTask()"
                          >Add</v-btn>
                      </v-container>

                </v-card>
        </v-card>
    </div>
</template>

<script>

import { listaUsuarios } from '../../components/ConexionFirebase/FirebaseUsuarios'


export default {  
  props:{
      topMargin: Number,
      height: Number
  } 
  ,
      data:() => ({
            usuarios:listaUsuarios(),
            encargadoPlanDeAccion:'',
            fechaPropuesta:'',
            actividad:'',

            items: [
                {   titulo: 'Correccion Inmediata:',
                    escala: 'grande',
                    fila: '0',
                    posicionHorizontal: '0',
                    cuerpo: '',
                    tableType: true
                },
                {
                    titulo: 'Acciones para eliminar la causa raiz:',
                    escala: 'grande',
                    fila: '1',
                    posicionHorizontal: '0',
                    cuerpo: '',
                    tableType: true
                },
        ],
    headers: [
        {text: 'Actividad', value: 'actividad'},
        {text: 'Responsable', value: 'responsable'},
        {text: 'Notificacion al Resp', value: 'vbResponsable'},
        {text: 'Fecha Propuesta', value: 'fechaPropuesta'},
        {text: 'Fecha Real', value: 'fechaReal'}
        ],

    tableItems: []
}),
  methods:{
      getCardStyle(){
         var cantidadFilas=0;
          this.items.forEach(element => {
              element.fila>cantidadFilas?cantidadFilas=element.fila:null
          });
          var heightSize = cantidadFilas*20 +30;
          this.height = heightSize;
        return 'top: ' + this.topMargin + 'vh; height:' + '180' +'vh;';
      },

        singleStyle(indexFila,indexColumna,tableType){
        
            if(tableType!=true){
                var margenSuperior = indexFila*17 + (indexFila==0?10:10);
                var margenLateral = indexColumna*26+2;
                return 'top: ' + '90'+'vh;' + 'left: '+margenLateral+"vw;"+"height:45vh;"; }
            else{
                var margenSuperior = indexFila*80 + (indexFila==0?10:10);
                var margenLateral = indexColumna*26+2;
                return 'top: ' + margenSuperior+'vh;' + 'left: '+margenLateral+"vw;"+"height:75vh;";
            }
      },
        getAltura(){
        return 'height: ' + heightSize + 'vh;';
      },

        addTask(){
            this.tableItems.push({
                actividad: this.actividad,
                responsable: this.encargadoPlanDeAccion,
                vbResponsable: 'NO',
                fechaPropuesta: this.fechaPropuesta,
                fechaReal : '19-12-98'
            })
            console.log(this.tableItems);
        }
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
    .tableList{
        position: absolute;
        height: 35vh;
        width: 70vw;
        left: 2vw;
    }
    .actividadTextField{
        position: absolute;
        width: 15vw;
        top: 47vh;
        left: 5vw;
    }
    .selector{
        position:absolute;
        width: 15vw;
        top: 47vh;
        left: 27vw;
    }
    .fechaPropuestaTextField{
        position:absolute;
        width: 15vw;
        top: 47vh;
        left: 50vw;
    }
    .botonAddTask{
        position:absolute;
        width: 10vw;
        top: 60vh;
        left: 50vw;
    }
</style>