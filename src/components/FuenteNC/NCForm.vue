<template>
    <div class="contenedor">
        <v-text-field
            label="Titulo No-Conformidad"
            id ="tituloNCF"
            :v-model="tituloNCF"
            clearable
          ></v-text-field>
        <v-text-field
            label="Descripcion"
            id="descripcionNCF"
            :v-model="descripcionNCF"
            clearable
        >
        </v-text-field>
        <v-overflow-btn
        label="Seleccione un Encargado"
        id="encargadoNCF"
        :v-model="encargadoNCF"
        >
        </v-overflow-btn>
        <v-container>
            <v-row>
                <v-col cols="6"></v-col>
                <v-col cols="3">
                    <v-btn
                    color="#FFC30F"
                    class="center white--text"
                    id="confirmarNCF"
                    @click="confirmar"
                    >
                        Confirmar
                    </v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn
                    color="#3B83BD"
                    class="center white--text"
                    id="confirmarNCF"
                    @click="cancelar"
                    >
                        Cancelar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'NCForm',
    props: {
        tituloNCF: String,
        descripcionNCF: String,
        encargadoNCF: String
    },
    methods: {
        confirmar(){
            this.$emit("confirmarDatosNCF", tituloNCF, descripcionNCF, encargadoNCF);
        },
        cancelar(){
            this.$emit("cancelar");
        }
    },
}
</script>
<style scoped>
 .contenedor {
     width: 80%;
     margin-left: 10%;
 }
</style>