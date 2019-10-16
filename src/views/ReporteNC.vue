<template>
    <v-container class="grey lighten-5">
        <v-row class="mb-6" no-gutters align-items= "stretch">
            <v-col :cols="8">
                <v-card class="pa-2" tile outlined>
                    <v-card-actions class="justify-center">
                        <h1>Titulo No conformidad</h1> 
                    </v-card-actions>    
                </v-card>
            </v-col>
             <v-spacer></v-spacer>
            <v-col :cols="2">
                <v-card class="pa-2" tile outlined>
                   <h1>Codigo</h1> 
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mb-6" no-gutters>
             <v-col :cols="20">
                <v-card class="pa-2" tile outlined>
                   <h3>Descripcion: {{ descripcion }}</h3> 
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col :cols="20">
                <v-simple-table height="300px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Acciones</th>
                                <th class="text-left">Encargado</th>
                                <th class="text-left">Estado</th>
                            </tr>
                        </thead>
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
    name: "ReporteNC",
  

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
        descripcion : '\nesta es la descripcion'
      }
      
    },
}
</script>

