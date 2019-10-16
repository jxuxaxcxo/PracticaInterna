<template>
<v-container fluid="true">
   <v-card>

   </v-card>
   <div>
       <v-dialog
       v-model="dialog"
       width="600"
       >
            <template v-slot:activator="{ on }">
                <div>
                     <v-btn color="#DBB13B" outlined="true" class="lista" id="agregarNCF" @click="dialog = true">Agregar
                     </v-btn>
                </div>
            </template>
            <v-card>
                <v-card-title>Nueva No Conformidad</v-card-title>
            </v-card>
       </v-dialog>
    
   </div>
   
</v-container>
</template>

<script>
import NCForm from '../components/FuenteNC/NCForm.vue';

export default {

    name: 'FuenteNcView',
    components: {
        NCForm,
    },
    data() {
        return {
            dialog: false 
        }
    }
}
</script>

<style scoped>
.lista {
    width: 80%;
    height: 60%;
    margin-top: 5%;
    margin-left: 10%;
}
</style>