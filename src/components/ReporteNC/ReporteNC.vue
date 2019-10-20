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
              <v-row>
                       <v-subheader class="justify-center white--text titulo">Acciones</v-subheader>
                         <v-subheader class="justify-center white--text titulo">Encargado</v-subheader>
                            <v-subheader class="justify-center white--text titulo">Estado</v-subheader>  
                            </v-row>
                <v-simple-table fixed-header height="300px">
                    <template v-slot:default>
                      
                        <tbody>
                            <tr v-for="item in lista" :key="item.acciones">
                                <td>{{ item.acciones }}</td>
                                <td>{{ item.encargado }}</td>
                                <td>{{ item.estado }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>

    </v-container>
    
     
</template>


<script>
export default {
  


  data () {
        
      return {
    
        lista: [
          {
            acciones: 'Llamar a DTI',
            encargado: 'Juan Perez',
            estado: 'No Realizado',
          },
          {
            acciones: 'Pedir Informes',
            encargado: 'Marcelo Angulo',
            estado: 'Realizado',
          },
          {
            acciones: 'Pedir reportes',
            encargado: 'Pamela Tapia',
            estado: 'No Realizado',
          },
          {
            acciones: 'Completar documentacion',
            encargado: 'Alvaro Molina',
            estado: 'Realizado',
          },
          {
            acciones: 'Llamar a DTI',
            encargado: 'Robert Soruco',
            estado: 'No Realizado',
          },
           {
            acciones: 'Llamar a DTI',
            encargado: 'Juan Perez',
            estado: 'No Realizado',
          },
          {
            acciones: 'Pedir Informes',
            encargado: 'Marcelo Angulo',
            estado: 'Realizado',
          },
          {
            acciones: 'Pedir reportes',
            encargado: 'Pamela Tapia',
            estado: 'No Realizado',
          },
          {
            acciones: 'Completar documentacion',
            encargado: 'Alvaro Molina',
            estado: 'Realizado',
          },
          {
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
}
</script>
<style scoped>
.titulo {
background-color: #3b83bd;
width: 391px

}
.tablas {
  background-color: black
}
</style>

