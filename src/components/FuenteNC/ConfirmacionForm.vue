<template>
    <div class="contenedor">
        <v-card>
            <v-card-title>{{titulo}}</v-card-title>
            <v-card-text>{{texto}}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#FFC30F" class="white--text" @click="confirmar">Confirmar</v-btn>
                <v-btn color="#3B83BD" class="white--text" @click="cancelar">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'ConfirmacionForm',
    props: {
        titulo: String,
        texto: String,
    },
    methods: {
        confirmar () {

        },
        cancelar () {
            this.$emit("cancelarFuente");
        }
    }
}
</script>
<style scoped>
.contenedor {
     width: 80%;
     margin-left: 10%;
 }
</style>