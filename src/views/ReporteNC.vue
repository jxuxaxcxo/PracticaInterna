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
                   <h3>Descripcion</h3> 
                </v-card>
            </v-col>
        </v-row>

    </v-container>
    
     
</template>


<script>
export default {
    name: "ReporteNC",
    

    data(){
       
    }
}
</script>

