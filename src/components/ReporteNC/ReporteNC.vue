<template>
    <v-container name="reporte" class="grey lighten-5">
        <v-row class="mb-6" no-gutters align-items= "stretch">
            <v-col :cols="8">
                <v-card class="pa-2" tile outlined>
                    <v-card-actions class="justify-center">
                        <h1>{{ titulo }}</h1> 
                    </v-card-actions>    
                </v-card>
            </v-col>
             <v-spacer></v-spacer>
            <v-col :cols="2">
              <div class="my-2">
        <v-btn small color="primary" @click="push">Primary</v-btn>
      </div>
                <v-card class="pa-2" tile outlined>
                   <h1 align="center">{{ codigo }}</h1>
                   <p align="center">16/10/2019</p> 

                </v-card>
            </v-col>
        </v-row>
        <v-row class="mb-6" no-gutters>
             <v-col :cols="20">
                <v-card class="pa-2" tile outlined>
                   <h3>Descripcion:</h3> 
                   <p align="left">{{ descripcion }}</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
          
            <v-col :cols="20">
             <v-data-table
        :headers="headers"
        :items="lista"
        class="elevation-1 test"
        height="450px"
        hide-default-footer
        fixed-header
        disable-pagination
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.acciones }}</td>
          <td class="text-xs-right">{{ props.item.encargado }}</td>
          <td class="text-xs-right">{{ props.item.estado }}</td>
        </template>
      </v-data-table>
            </v-col>
        </v-row>
<v-row>
  
</v-row>
    </v-container>
    
     
</template>


<script>
import { listaInformes2, listaInformes, agregarInforme, actualizarInforme, eliminarInforme, autoincrementoAutomaticoInforme } from "../ConexionFirebase/FirebaseInforme"
import { listaUsuarios, agregarUsuario, actualizarUsuario, eliminarUsuario, getUsuarioById, getUserCredentials } from "../ConexionFirebase/FirebaseUsuarios"
import { listaFormatos, agregarFormato, actualizarFormato, eliminarFormato, autoincrementoAutomaticoFormato} from "../ConexionFirebase/FirebaseFormato"
export default {
  


  data () {

      return {
        usuario: {
  mail: "actualizado",
  tipo: "actualizado",
  password: "actualizado",
  cargo: "actualizado"
},
        headers: [
        {
          text: 'Acciones',
          align: 'left',
          value: 'acciones'
        },
        { text: 'Encargado', value: 'encargado' },
        { text: 'Estado', value: 'estado' }
      ],
    
        lista: [
          {
            codigo:1,
            acciones: 'Llamar a DTI',
            encargado: 'Juan Perez',
            estado: 'No Realizado',
          },
          {
            codigo:2,
            acciones: 'Pedir Informes',
            encargado: 'Marcelo Angulo',
            estado: 'Realizado',
          },
          {
            codigo:3,
            acciones: 'Pedir reportes',
            encargado: 'Pamela Tapia',
            estado: 'No Realizado',
          },
          {
            codigo:4,
            acciones: 'Completar documentacion',
            encargado: 'Alvaro Molina',
            estado: 'Realizado',
          },
          {
            codigo:5,
            acciones: 'Llamar a DTI',
            encargado: 'Robert Soruco',
            estado: 'No Realizado',
          },
           {
            codigo:6,
            acciones: 'Llamar a DTI',
            encargado: 'Juan Perez',
            estado: 'No Realizado',
          },
          {
            codigo:7,
            acciones: 'Pedir Informes',
            encargado: 'Marcelo Angulo',
            estado: 'Realizado',
          },
          {
            codigo:8,
            acciones: 'Pedir reportes',
            encargado: 'Pamela Tapia',
            estado: 'No Realizado',
          },
          {
            codigo:9,
            acciones: 'Completar documentacion',
            encargado: 'Alvaro Molina',
            estado: 'Realizado',
          },
          {
            codigo:10,
            acciones: 'Llamar a DTI',
            encargado: 'Robert Soruco',
            estado: 'No Realizado',
          },
        ],
        titulo: 'Titulo de la No Conformidad',
        codigo: 'A5609LM',
        descripcion : 'Agilizar un sistema ya existente, por lo general un sistema antiguo, obsoleto o manual; empleando las herramientas de la informática para tal fin. En general, se debería poder reemplazar el sistema antiguo por el nuevo casi en su totalidad.',
 
      }
    },
    methods:{
      push(){
        //agregarUsuario(this.usuario)
        //actualizarUsuario("7F6uWxdPrs1o0xXSzU5p", this.usuario)
        //eliminarUsuario("7F6uWxdPrs1o0xXSzU5p")
        //console.log("----------------Lista de Ususarios---------------")
        //listaUsuarios()
        //autoincrementoAutomaticoInforme()
        //eliminarInforme(6)
        //autoincrementoAutomaticoFormato()
        console.log("----------------Lista de Credenciales---------------")
        //listaFormatos()
        //console.log(getUsuarioById('8XP6QrZO52yO2I3ZZavc'))
        const lista2 = listaInformes2()
        console.log('lista2 => ' , lista2)
        console.log("----------------fin---------------")
      }
    }
}
</script>
<style scoped>
.test table tr {
    background-color: #3f87a6;
}


</style>

