<template>

<v-container fluid>
   <v-card>

   </v-card>
   <div>
       <v-dialog
       v-model="dialog"
       width="800"
       >
            <template v-slot:activator="{ on }">
                <div>
                     <v-btn color="#DBB13B" outlined class="lista" id="agregarNCF" @click="dialog = true">Agregar
                     </v-btn>
                </div>
            </template>
            <v-card>
                <v-card-title primary-title class="justify-center">Nueva No Conformidad</v-card-title>
                <v-container>
                <NCForm/>
                <v-btn
                outlined 
                color="#DBB13B"
                class="center"
                id="confirmarNCF"
                @click="dialog = false"
                >
                Confirmar
                </v-btn>
                </v-container>
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
.center {
     width: 80%;
     margin-left: 10%;
     margin-bottom: 10px;
}
</style>