<template>
    <v-container>
        <v-row>
            <v-col>
                <v-icon
                id="agregarNCBoton"
                >
                    mdi-plus
                </v-icon>
                <v-icon
                id="anteriorNC"
                >
                mdi-arrow-left</v-icon>
                <v-icon
                id="siguienteNC"
                @click="paginaSiguiente"
                >mdi-arrow-right</v-icon>
                <v-icon
                @click="borrarNoConformidad(0)"
                :id="'borraraNCBoton'"
                >mdi-delete</v-icon>
                <v-subheader
                class="justify-center white--text titulo"
                id="tituloListaNC"
                >
                Incidencias
                </v-subheader>
                <v-card
                height="50vh"
                >
                    <v-container>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-text-field
                                label="Nombre"
                                ></v-text-field>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-select
                                :items="encargados"
                                item-text="mail"
                                label="Encargado"
                                v-model="encargadoID"
                                ></v-select>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                        <v-row>
                            <v-col></v-col>
                            <v-col cols="10">
                                <v-select
                                :items="formatos"
                                label="Formato de Plan de Accion"
                                item-text="nombre"
                                v-model="formatoElegidoNombre"
                                ></v-select>
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                    </v-container>
                </v-card>

            </v-col>
            <v-col>

            </v-col>
            <v-col>

            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
  props: {
    formatos: Array,
    usuarios: Array
  },
  data () {
    return {
      formatoElegidoNombre: null,
      formatoElegido: null,
      encargadoID: null
    }
  },
  watch: {
    formatoElegidoNombre: function (val) {
      this.formatos.forEach(formato => {
        if (val === formato.nombre) {
            this.formatoElegido = formato
        }
      })
    }
  }
}
</script>
<style scoped>
.titulo {
    background-color: #3B83BD;
}
</style>